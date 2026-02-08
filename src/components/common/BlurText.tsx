"use client";
import { motion } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

// Define TypeScript interfaces
interface AnimationStep {
  filter?: string;
  opacity?: number;
  y?: number;
  x?: number;
  scale?: number;
  // Add other CSS properties as needed
  [key: string]: string | number | undefined;
}

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'characters';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimationStep;
  animationTo?: AnimationStep[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  triggerOnce?: boolean;
}

const buildKeyframes = (from: AnimationStep, steps: AnimationStep[]): Record<string, (string | number)[]> => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes: Record<string, (string | number)[]> = {};
  keys.forEach(k => {
    const values = [from[k], ...steps.map(s => s[k])].filter((v): v is string | number => v !== undefined);
    keyframes[k] = values;
  });
  return keyframes;
};

const cleanStep = (step: AnimationStep): Record<string, number | string> => {
  const out: Record<string, number | string> = {};
  Object.entries(step).forEach(([k, v]) => {
    if (v !== undefined) out[k] = v;
  });
  return out;
};


const cleanKeyframes = (
  frames: Record<string, (string | number)[]>
): Record<string, (string | number)[]> => {
  const cleaned: Record<string, (string | number)[]> = {};
  for (const key in frames) {
    cleaned[key] = frames[key].filter(v => v !== undefined);
  }
  return cleaned;
};


const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  triggerOnce = false
}: BlurTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(ref.current!);
          }
        } else {
          // Reset animation when element leaves viewport
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  const defaultFrom = useMemo((): AnimationStep => {
    switch (direction) {
      case 'top':
        return { filter: 'blur(10px)', opacity: 0, y: -50 };
      case 'bottom':
        return { filter: 'blur(10px)', opacity: 0, y: 50 };
      case 'left':
        return { filter: 'blur(10px)', opacity: 0, x: -50 };
      case 'right':
        return { filter: 'blur(10px)', opacity: 0, x: 50 };
      default:
        return { filter: 'blur(10px)', opacity: 0, y: -50 };
    }
  }, [direction]);

  const defaultTo = useMemo((): AnimationStep[] => {
    const baseSteps = [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        ...(direction === 'top' || direction === 'bottom' ? { y: direction === 'top' ? 5 : -5 } : { x: direction === 'left' ? 5 : -5 })
      },
      { filter: 'blur(0px)', opacity: 1, y: 0, x: 0 }
    ];
    return baseSteps;
  }, [direction]);

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        
        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={cleanStep(fromSnapshot)}
            animate={inView ? cleanKeyframes(animateKeyframes) : cleanStep(fromSnapshot)}

            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
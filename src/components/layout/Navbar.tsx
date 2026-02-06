"use client";

import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
] as const;

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}


export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 shadow-md backdrop-blur-md" : "bg-white/40 backdrop-blur-xs"}`}>
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-4 md:py-3 max-w-[1400px]">
        <Link href="/" className="text-2xl font-semibold tracking-wide text-gray-900" style={{ fontFamily: "Montserrat, Helvetica" }}>
          TRAVEL
        </Link>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-gray-300/70 bg-white/60 p-2 backdrop-blur-xl">
          {NAV_ITEMS.map((item) => {
            const isActive = !!pathname && isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                style={{ fontFamily: "Montserrat, Helvetica" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-two-pill"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}
                    className="absolute inset-0 rounded-full border border-gray-300/70 bg-white/80 shadow"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle Menu" aria-expanded={menuOpen}>
          {menuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mx-4 mb-4 rounded-2xl border border-gray-200 bg-white/90 p-3 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = !!pathname && isActiveRoute(pathname, item.href);
              return (
                <Link key={item.href} href={item.href} className="relative rounded-xl px-4 py-2 font-medium text-gray-800" onClick={() => setMenuOpen(false)}>
                  {isActive && <motion.span layoutId="navbar-two-pill-mobile" className="absolute inset-0 rounded-xl bg-gray-100" />}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

interface NavMenuProps {
  navigationItems: NavItem[];
}

const Navbar: React.FC<NavMenuProps> = ({ navigationItems }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll position
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      setScrolled(window.scrollY > 50);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent shadow-md backdrop-blur-md"
          : "bg-transparent backdrop-blur-xs"
      }`}
    >
      <div
        className={`
          mx-auto flex items-center justify-between 
          px-4 sm:px-6 md:px-10 lg:px-16 
          py-4 md:py-3 
          max-w-[1400px]
        `}
      >
        {/* Logo / Brand */}
        <Link
          href="/"
          className={`text-2xl font-semibold tracking-wide cursor-pointer ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          style={{ fontFamily: "Montserrat, Helvetica" }}
        >
          TRAVEL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 cursor-pointer">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`font-medium text-base transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-yellow-500"
                  : "text-white hover:text-yellow-400"
              }`}
              style={{ fontFamily: "Montserrat, Helvetica" }}
            >
              {item.label}
            </Link>
          ))}

          {/* Register Button */}
          <Link
            href="/signup"
            className={`font-medium text-base primary-color transition-colors duration-300 cursor-pointer ${
              scrolled ? "" : "drop-shadow-md"
            }`}
            style={{ fontFamily: "Montserrat, Helvetica" }}
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-2xl transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X
              className={`w-6 h-6 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 pb-6 pt-4 transition-all duration-300 ${
            scrolled ? "bg-white/95" : "bg-black/80"
          }`}
        >
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`font-medium text-lg ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-yellow-500 transition-colors duration-300`}
              style={{ fontFamily: "Montserrat, Helvetica" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/signup"
            className="font-medium text-lg text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

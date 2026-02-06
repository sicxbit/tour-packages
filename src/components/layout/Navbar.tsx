"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

interface NavMenuProps {
  navigationItems: NavItem[];
}

const Navbar: React.FC<NavMenuProps> = ({ navigationItems }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent shadow-md backdrop-blur-md" : "bg-transparent backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-4 md:py-3 max-w-[1400px]">
        <Link
          href="/"
          className={`text-2xl font-semibold tracking-wide cursor-pointer ${scrolled ? "text-gray-900" : "text-white"}`}
          style={{ fontFamily: "Montserrat, Helvetica" }}
        >
          TRAVEL
        </Link>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-white/30 bg-white/10 p-2 backdrop-blur-xl">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                style={{ fontFamily: "Montserrat, Helvetica" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    className="absolute inset-0 rounded-full border border-white/40 bg-white/25 shadow-md backdrop-blur-md"
                  />
                )}
                <span className={`relative z-10 ${scrolled ? "text-gray-900" : "text-white"}`}>{item.label}</span>
              </Link>
            );
          })}

          <Link
            href="/signup"
            className="rounded-full px-4 py-2 text-sm font-semibold text-[#ffe500]"
            style={{ fontFamily: "Montserrat, Helvetica" }}
          >
            Register
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-2xl transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`} /> : <Menu className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`} />}
        </button>
      </div>

      {menuOpen && (
        <div className={`md:hidden mx-4 mb-4 rounded-2xl border border-white/20 p-3 backdrop-blur-xl ${scrolled ? "bg-white/70" : "bg-black/40"}`}>
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative rounded-xl px-4 py-2 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-pill-mobile"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                      className="absolute inset-0 rounded-xl border border-white/40 bg-white/20"
                    />
                  )}
                  <span className={`relative z-10 ${scrolled ? "text-gray-800" : "text-white"}`}>{item.label}</span>
                </Link>
              );
            })}
            <Link href="/signup" className="px-4 py-2 font-medium text-yellow-400" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/tours", label: "Tours" },
  { href: "/admin/tours/new", label: "New Tour" },
];

export default function AdminShellNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-4 z-40 rounded-2xl border border-white/30 bg-white/15 p-2 backdrop-blur-xl shadow-lg">
      <div className="flex flex-wrap gap-2">
        {adminLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className="relative rounded-xl px-4 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
              {isActive && <motion.span layoutId="admin-pill" className="absolute inset-0 rounded-xl border border-white/35 bg-white/25" />}
              <span className="relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

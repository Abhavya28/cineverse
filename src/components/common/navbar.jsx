"use client";

import { motion } from "framer-motion";
import { Clapperboard, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Movies", href: "#movies" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 px-5 pt-5 md:px-10"
    >
      <div
        className="
          mx-auto flex max-w-7xl items-center justify-between
          rounded-full border border-white/10
          bg-black/30 px-4 py-3
          backdrop-blur-xl
          md:px-6
        "
      >
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-2.5">
          <div
            className="
              relative flex h-10 w-10 items-center justify-center
              overflow-hidden rounded-full
              border border-white/10
              bg-white/[0.06]
            "
          >
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-red-500/30
                to-purple-600/30
                blur-md
              "
            />

            <Clapperboard
              size={19}
              className="
                relative z-10 text-white
                transition-transform duration-300
                group-hover:rotate-[-8deg]
              "
            />
          </div>

          <span className="text-lg font-semibold tracking-tight text-white">
            Cine<span className="text-red-500">Verse</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                group relative rounded-full
                px-4 py-2
                text-sm text-white/55
                transition-colors duration-300
                hover:text-white
              "
            >
              <span className="relative z-10">
                {item.name}
              </span>

              <span
                className="
                  absolute inset-0
                  rounded-full
                  bg-white/[0.06]
                  opacity-0
                  transition-all duration-300
                  group-hover:opacity-100
                "
              />
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Sign In */}
          <Link
            href="/signin"
            className="
              hidden rounded-full
              px-4 py-2.5
              text-sm font-medium
              text-white/70
              transition-all duration-300
              hover:bg-white/[0.06]
              hover:text-white
              sm:block
            "
          >
            Sign In
          </Link>

          {/* Explore */}
          <Link
            href="/movies"
            className="
              group flex items-center gap-2
              rounded-full
              bg-white
              px-4 py-2.5
              text-sm font-semibold
              text-black
              transition-all duration-300
              hover:bg-white/90
            "
          >
            Explore Movies

            <ArrowUpRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
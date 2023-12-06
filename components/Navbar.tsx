"use client";

import { cn } from "@/lib/utils";
import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [shouldMobileNavOpen, setShouldMobileNavOpen] =
    useState<boolean>(false);

  const pathname = usePathname();

  return (
    <>
      <header className="h-24 bg-white/80 backdrop-blur-lg flex items-center sticky top-0 z-[100]">
        <nav className="container flex items-center gap-5 justify-between">
          {/* LOGO */}
          <Link
            onClick={() => setShouldMobileNavOpen(false)}
            href="/"
            className="lowercase text-2xl font-semibold group hover:text-magenta transition"
          >
            Aphrodite
            <span className="text-green group-hover:text-blue transition">
              .
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-5">
            {navLinks.map((navLink) => (
              <li key={navLink.href}>
                <Link
                  href={navLink.href}
                  className={cn("hover:text-magenta transition", {
                    "text-green": pathname === navLink.href,
                  })}
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* COMMON NAV */}
          <div className="flex gap-5 items-center">
            <Link
              onClick={() => setShouldMobileNavOpen(false)}
              href="/sign-in"
              className="text-green hover:text-magenta transition"
            >
              Sign in
            </Link>
            <span className="h-4 w-px bg-gray" />
            <button
              className="relative group"
              onClick={() => setShouldMobileNavOpen(false)}
            >
              <span>
                <ShoppingBag size={20} />
              </span>
              <span className="absolute -right-1 -bottom-2 w-4 h-4 rounded-full bg-green text-xs flex items-center justify-center text-white font-semibold group-hover:bg-magenta transition">
                0
              </span>
            </button>

            {/* TOGGLE MOBILE NAV */}
            <button
              className="inline-block md:hidden hover:text-magenta transition"
              onClick={() => setShouldMobileNavOpen(!shouldMobileNavOpen)}
            >
              {shouldMobileNavOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE NAV */}
      {shouldMobileNavOpen && (
        <ul
          onClick={() => setShouldMobileNavOpen(false)}
          className="fixed z-[99] top-[6rem] left-0 bottom-0 right-0 w-full h-[100%-6rem] flex flex-col md:hidden items-center justify-center gap-5 bg-black text-white text-2xl"
        >
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <Link
                href={navLink.href}
                className={cn("hover:text-rose transition", {
                  "text-green": pathname === navLink.href,
                })}
              >
                {navLink.label}
              </Link>
            </li>
          ))}

          {/* LOWER BORDER */}
          <span className="absolute bottom-0 left-0 right-0 h-2 w-full bg-gradient-to-r from-pink to-rose" />
        </ul>
      )}
    </>
  );
};

export default Navbar;

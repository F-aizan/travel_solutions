"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Destinations",
    href: "/destinations",
  },
  {
    name: "Packages",
    href: "/packages",
  },
  {
    name: "Trip Planner",
    href: "/planner",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <img
                  src="/logo.png"
                  alt="Royal Journey Tours"
                  className="h-12 w-12 object-cover"
                />
              </div>

              <div className="hidden sm:block">
                <h1 className="text-lg font-bold leading-tight text-slate-900">
                  Royal Journey
                </h1>

                <p className="text-xs font-medium tracking-widest text-cyan-600">
                  TOURS
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-cyan-600"
                        : "text-slate-700 hover:text-cyan-600"
                    }`}
                  >
                    {item.name}

                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-cyan-500 transition-all duration-300 ${
                        isActive
                          ? "w-6"
                          : "w-0 group-hover:w-6"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/planner"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <span>Plan My Trip</span>

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 hover:text-cyan-600 md:hidden"
            >
              {isOpen ? (
                <X size={27} strokeWidth={2} />
              ) : (
                <Menu size={27} strokeWidth={2} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
              isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-slate-200 py-4">

              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" &&
                      pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-cyan-50 text-cyan-600"
                          : "text-slate-700 hover:bg-slate-50 hover:text-cyan-600"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>

                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-cyan-500" />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <Link
                href="/planner"
                onClick={closeMenu}
                className="group mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <span>Plan My Trip</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}


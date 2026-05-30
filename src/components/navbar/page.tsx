'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            Travel Solutions
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              href="/destinations"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Destinations
            </Link>

            <Link
              href="/planner"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Trip Planner
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700">
                Home
              </Link>

              <Link href="/destinations" className="text-gray-700">
                Destinations
              </Link>

              <Link href="/planner" className="text-gray-700">
                Trip Planner
              </Link>

              <Link href="/about" className="text-gray-700">
                About
              </Link>

              <Link href="/contact" className="text-gray-700">
                Contact
              </Link>

              <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
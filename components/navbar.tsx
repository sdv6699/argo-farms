"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-base sm:text-lg"
        >
          <span className="text-green-700 truncate">Sri Dhana Varshini</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/plots"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Plots
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
        <Link href={"/plots"}>
          <Button className="ml-6 hidden bg-green-700 hover:bg-green-800 md:flex">
            Invest Now
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4 bg-white border-t">
            <Link
              href="/"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/plots"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Plots
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href={"/plots"}>
              <Button className="w-full bg-green-700 hover:bg-green-800 mt-2">
                Invest Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

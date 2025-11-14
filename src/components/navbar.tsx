"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-32 lg:h-36 py-4">
          <div className="hidden md:flex items-center gap-16 flex-1 justify-end pr-16">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 relative"
          >
            <Image
              src="/logo-full-color.png"
              alt="Kataelyon Group"
              width={600}
              height={180}
              className="h-16 md:h-28 lg:h-36 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-16 flex-1 pl-16">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background border-t border-border px-4 py-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between text-base font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
              <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

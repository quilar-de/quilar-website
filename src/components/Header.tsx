"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  useEffect(() => {
    if (mobileMenuOpen && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    } else if (!mobileMenuOpen && wasOpenRef.current && menuButtonRef.current) {
      // Return focus to the trigger when the menu closes (e.g. Escape key)
      menuButtonRef.current.focus();
    }
    wasOpenRef.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Focus trap: keep Tab/Shift+Tab cycling within the open mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const container = mobileMenuRef.current;
    if (!container) return;

    const handleTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusable = container.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) {
        // No focusable items inside the menu; keep focus on the trigger button
        e.preventDefault();
        menuButtonRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      // If focus has escaped the menu entirely, pull it back in
      if (!active || !container.contains(active)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
        return;
      }

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    container.addEventListener("keydown", handleTrap);
    return () => container.removeEventListener("keydown", handleTrap);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Quilar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              aria-current={isActive("/services") ? "page" : undefined}
              className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              Leistungen
            </Link>
            <Link
              href="/about"
              aria-current={isActive("/about") ? "page" : undefined}
              className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              Über uns
            </Link>
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-nav"
          ref={mobileMenuRef}
          role="navigation"
          aria-label="Mobiles Menü"
          aria-hidden={!mobileMenuOpen}
          className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out motion-reduce:transition-none motion-reduce:duration-0 ${
            mobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                ref={firstMenuItemRef}
                tabIndex={mobileMenuOpen ? 0 : -1}
                aria-current={isActive("/") ? "page" : undefined}
                className="text-gray-600 hover:text-primary-600 transition-colors motion-reduce:transition-none font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                tabIndex={mobileMenuOpen ? 0 : -1}
                aria-current={isActive("/services") ? "page" : undefined}
                className="text-gray-600 hover:text-primary-600 transition-colors motion-reduce:transition-none font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leistungen
              </Link>
              <Link
                href="/about"
                tabIndex={mobileMenuOpen ? 0 : -1}
                aria-current={isActive("/about") ? "page" : undefined}
                className="text-gray-600 hover:text-primary-600 transition-colors motion-reduce:transition-none font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link
                href="/contact"
                tabIndex={mobileMenuOpen ? 0 : -1}
                aria-current={isActive("/contact") ? "page" : undefined}
                className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition-colors motion-reduce:transition-none font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

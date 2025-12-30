'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'The Process', href: '#process' },
    { name: 'Who We Serve', href: '#clients' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-200/80 shadow-md bg-white/95 backdrop-blur-xl h-20'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center group">
          <img
            src="/media/logo.png"
            alt="JC Arbitrations"
            className="h-16 md:h-18 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-recovery-teal transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className="md:hidden p-2 text-midnight-slate hover:bg-slate-100 rounded-full transition-colors z-50"
          onClick={(e) => {
            e.preventDefault();
            console.log('Menu clicked, current state:', mobileMenuOpen);
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white md:hidden">
          <div className="flex flex-col gap-6 p-8 h-full overflow-y-auto">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

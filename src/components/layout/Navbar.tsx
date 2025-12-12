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
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-200 shadow-sm bg-white/90 backdrop-blur-md h-20'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-midnight-slate rounded-lg flex items-center justify-center text-white font-bold text-xl relative overflow-hidden group-hover:bg-recovery-teal transition-colors">
            <span className="relative z-10">JC</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </div>
          <span className="font-fraunces font-bold text-xl tracking-tight text-slate-900">
            JC Arbitrations
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-recovery-teal transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm">Get Revenue Analysis</Button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
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
            <a href="#" className="flex flex-col gap-2 mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Ready to recover?</span>
               <span className="text-xl font-bold text-recovery-teal">Get Your Free Analysis &rarr;</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

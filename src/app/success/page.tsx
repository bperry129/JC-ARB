import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-2xl p-12 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-fraunces text-midnight-slate mb-6">
            Message Sent!
          </h1>
          <p className="text-slate-600 text-lg mb-8">
            Thank you for reaching out to JC Arbitrations. We&apos;ve received your message and will get back to you shortly.
          </p>
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-teal-500/30"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
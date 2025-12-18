'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="py-24 bg-midnight-slate text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-fraunces mb-6">
          Stop Leaving Revenue on the Table
        </h2>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          Every day a claim sits in limbo is a day you aren't being compensated for your expertise. Let's start the recovery process today.
        </p>
        <div className="flex justify-center">
           <a href="/contact">
             <Button size="lg" className="px-8 text-lg">Get Started Today</Button>
           </a>
        </div>
      </div>
    </section>
  );
}

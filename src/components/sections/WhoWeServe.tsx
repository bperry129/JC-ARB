'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bone, Stethoscope, Scissors, Building2, Syringe, HeartPulse } from 'lucide-react';

const specialties = [
  { name: 'Orthopedics', icon: Bone, desc: 'Spine, Joint, and Sports Medicine' },
  { name: 'Neurosurgery', icon: Stethoscope, desc: 'Complex Spine & Cranial' },
  { name: 'Plastics', icon: Scissors, desc: 'Reconstructive & Trauma' },
  { name: 'Surgery Centers', icon: Building2, desc: 'OON Facility Fees' },
  { name: 'Anesthesia', icon: Syringe, desc: 'Pain Management & O.R.' },
  { name: 'Emergency Med', icon: HeartPulse, desc: 'ER & Trauma Groups' },
];

export function WhoWeServe() {
  return (
    <section id="clients" className="py-24 bg-midnight-slate text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" width="100%" height="100%">
               <pattern id="hexagons" x="0" y="0" width="50" height="43.301" patternUnits="userSpaceOnUse">
                 <path d="M25 0 L50 12.5 L50 37.5 L25 50 L0 37.5 L0 12.5 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#hexagons)"/>
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
               <h2 className="text-sm font-bold text-recovery-teal uppercase tracking-widest mb-3">Who We Serve</h2>
               <h3 className="text-4xl md:text-5xl font-bold font-fraunces mb-4">
                  Specialized for High-Acuity Experts
               </h3>
               <p className="text-slate-400 text-lg">
                  We understand the unique coding complexity and billing challenges of high-value specialties.
               </p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {specialties.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-recovery-teal/50 transition-all duration-300"
            >
               {/* Hover Glow */}
               <div className="absolute inset-0 rounded-xl bg-recovery-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="relative z-10 flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-recovery-teal group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <spec.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors tracking-tight">
                        {spec.name}
                    </h4>
                    <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                        {spec.desc}
                    </p>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

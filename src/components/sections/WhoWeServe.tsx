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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {specialties.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-700/80 hover:border-recovery-teal transition-all duration-300 cursor-default"
            >
               <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-recovery-teal group-hover:bg-recovery-teal group-hover:text-white transition-colors">
                      <spec.icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold">{spec.name}</h4>
               </div>
               <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors pl-14">
                  {spec.desc}
               </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

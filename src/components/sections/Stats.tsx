'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Eye } from 'lucide-react';

const benefits = [
  { 
    label: 'Speed', 
    description: 'Timely filings that keep you compliant with federal deadlines.',
    icon: Zap,
    gradient: 'from-teal-500 to-emerald-400'
  },
  { 
    label: 'Compliance', 
    description: 'Every submission aligned with No Surprises Act requirements.',
    icon: ShieldCheck,
    gradient: 'from-emerald-500 to-teal-400'
  },
  { 
    label: 'Transparency', 
    description: 'Clear tracking so you always know where your case stands.',
    icon: Eye,
    gradient: 'from-teal-400 to-cyan-400'
  },
];

export function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-midnight-slate" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-fraunces text-midnight-slate mb-6 leading-tight">
            We manage the filing, deadlines, and documentation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-400">
              so you can focus on care.
            </span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-teal-100/50 hover:-translate-y-1 transition-all duration-300">
                {/* Gradient Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${benefit.gradient}`} />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-lg shadow-teal-200/50 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  {/* Checkmark Badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-mint-growth rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-fraunces text-midnight-slate mb-3">
                  {benefit.label}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {benefit.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-[0.03] rounded-tl-full transition-opacity group-hover:opacity-[0.06]`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-200/50">
            <div className="w-2 h-2 rounded-full bg-mint-growth animate-pulse" />
            <span className="text-sm font-semibold text-midnight-slate">
              Your success is our mission
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

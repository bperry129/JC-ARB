'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Average Recovery Increase', value: '45%', suffix: '+', icon: TrendingUp },
  { label: 'Claims Processed Annually', value: '50', suffix: 'k+', icon: CheckCircle2 },
  { label: 'Success Rate in IDR', value: '92', suffix: '%', icon: ShieldCheck },
  { label: 'Faster Payment Velocity', value: '2.5', suffix: 'x', icon: Clock },
];

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4 text-recovery-teal">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-fraunces text-midnight-slate mb-2">
                {stat.value}<span className="text-recovery-teal text-3xl">{stat.suffix}</span>
              </div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

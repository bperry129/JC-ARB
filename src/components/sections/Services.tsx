'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, AlertCircle, FileSearch, Handshake, Map, Scale } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
  {
    title: 'Federal IDR Filing',
    desc: 'Expert navigation of the federal portal. We construct the "Batched" and "Single" dispute packages that win.',
    icon: Gavel,
  },
  {
    title: 'Denial Management',
    desc: 'We don’t just accept "Not Medically Necessary". We fight clinical and administrative denials with coding expertise.',
    icon: AlertCircle,
  },
  {
    title: 'Underpayment Audits',
    desc: 'Retrospective analysis of your past 12-24 months of claims to find revenue left on the table.',
    icon: FileSearch,
  },
  {
    title: 'Contract Consulting',
    desc: 'Data-driven support for negotiating in-network rates or strategic out-of-network positioning.',
    icon: Handshake,
  },
  {
    title: 'State-Specific Resolution',
    desc: 'Navigation of complex state "surprise bill" laws in NY, FL, TX, CA, and beyond.',
    icon: Map,
  },
  {
    title: 'Litigation Support',
    desc: 'When arbitration fails, we prepare the comprehensive administrative record for legal counsel.',
    icon: Scale,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-sm font-bold text-recovery-teal uppercase tracking-widest mb-3">Our Expertise</h2>
             <h3 className="text-4xl md:text-5xl font-bold font-fraunces text-midnight-slate mb-6">
                Total Revenue Cycle Defense
             </h3>
             <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                We go beyond simple billing. We are a specialized task force for your most difficult claims.
             </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-midnight-slate group-hover:bg-recovery-teal group-hover:text-white transition-colors mb-6">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-midnight-slate mb-3 group-hover:text-recovery-teal transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                 <div className="w-0 h-full bg-recovery-teal group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Button size="lg" variant="outline">Explore All Services</Button>
        </div>
      </div>
    </section>
  );
}

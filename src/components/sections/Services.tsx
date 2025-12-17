'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, AlertCircle, FileSearch, Handshake, Map } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
  {
    title: 'Federal IDR Filing',
    desc: 'We handle the federal dispute process end-to-end—precisely, compliantly, and with a relentless focus on getting you paid. Turning a complex federal process into predictable reimbursement.',
    icon: Gavel,
  },
  {
    title: 'Denial Management',
    desc: 'We don\'t just track claims — we resolve them. Our denial management and AR claims services are designed to recover revenue, reduce write-offs, and keep your cash flow steady.',
    icon: AlertCircle,
  },
  {
    title: 'Underpayment Audits',
    desc: 'At JC Arbitrations, we streamline the entire revenue cycle so providers can maximize collections and minimize administrative burden. Our RCM services cover every step from patient intake to final payment',
    icon: FileSearch,
  },
  {
    title: 'Out-of-Network Negotiations',
    desc: 'We specialize in negotiating fair payments for out-of-network claims. Our goal is to protect your revenue while reducing the stress of payer disputes',
    icon: Handshake,
  },
  {
    title: '🗽 New York State IDR Filings',
    desc: 'We file New York State Independent Dispute Resolution (IDR) cases on your behalf. Under New York\'s balance billing protections, providers can challenge out-of-network payment disputes through the state\'s IDR process. We manage the entire filing so you can focus on patient care.',
    icon: Map,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

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

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
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
        </motion.div>
        
        <div className="mt-16 text-center">
           <Button size="lg" variant="outline">Explore All Services</Button>
        </div>
      </div>
    </section>
  );
}

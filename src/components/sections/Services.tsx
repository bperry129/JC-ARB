'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, AlertCircle, FileSearch, Handshake, Map, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
  {
    title: 'Federal IDR Filing',
    desc: 'We handle the federal dispute process end-to-end—precisely, compliantly, and with a relentless focus on getting you paid. Turning a complex federal process into predictable reimbursement.',
    icon: Gavel,
    gradient: 'from-teal-500 via-emerald-500 to-cyan-500',
    iconBg: 'from-teal-500/20 to-emerald-500/20',
  },
  {
    title: 'Denial Management',
    desc: 'We don\'t just track claims — we resolve them. Our denial management and AR claims services are designed to recover revenue, reduce write-offs, and keep your cash flow steady.',
    icon: AlertCircle,
    gradient: 'from-emerald-500 via-teal-500 to-green-500',
    iconBg: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Underpayment Audits',
    desc: 'At JC Arbitrations, we streamline the entire revenue cycle so providers can maximize collections and minimize administrative burden. Our RCM services cover every step from patient intake to final payment',
    icon: FileSearch,
    gradient: 'from-cyan-500 via-teal-500 to-blue-500',
    iconBg: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    title: 'Out-of-Network Negotiations',
    desc: 'We specialize in negotiating fair payments for out-of-network claims. Our goal is to protect your revenue while reducing the stress of payer disputes',
    icon: Handshake,
    gradient: 'from-teal-500 via-cyan-500 to-emerald-500',
    iconBg: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    title: 'New York State IDR Filings',
    desc: 'We file New York State Independent Dispute Resolution (IDR) cases on your behalf. Under New York\'s balance billing protections, providers can challenge out-of-network payment disputes through the state\'s IDR process. We manage the entire filing so you can focus on patient care.',
    icon: Map,
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    iconBg: 'from-emerald-500/20 to-green-500/20',
  },
  {
    title: 'Provider Credentialing',
    desc: 'We streamline the provider credentialing process so your practice can join payer networks quickly and compliantly. Credentialing is the essential step that verifies a provider\'s qualifications, licenses, and background before payers approve participation. We manage the details so you don\'t get stuck in paperwork',
    icon: UserCheck,
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    iconBg: 'from-green-500/20 to-emerald-500/20',
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
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/20">
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
              
              {/* Card Content */}
              <div className="relative h-full bg-white p-8 rounded-2xl border border-slate-200/50 shadow-lg shadow-slate-200/50 group-hover:shadow-2xl group-hover:shadow-teal-100/50 transition-all duration-300 overflow-hidden">
                {/* Subtle Background Gradient */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.iconBg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-24 -mt-24`} />
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.iconBg} border border-slate-100 group-hover:border-transparent group-hover:shadow-lg transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-recovery-teal group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h4 className={`relative text-xl font-bold text-midnight-slate mb-3 group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {service.title}
                </h4>
                <p className="relative text-slate-600 leading-relaxed mb-6 text-sm">
                  {service.desc}
                </p>

                {/* Animated Progress Bar */}
                <div className="relative w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                   <div className={`h-full bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-700 ease-out`} />
                </div>

                {/* Corner Accent */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${service.iconBg} rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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

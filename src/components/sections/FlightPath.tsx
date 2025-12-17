'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Stethoscope, FileText, MessageSquare, Gavel, Users, FileCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 1,
    title: 'Services Rendered',
    desc: 'Patient receives care from an out-of-network provider.',
    icon: Stethoscope,
  },
  {
    id: 2,
    title: 'Initial Payment or Denial',
    desc: 'Within 30 days, the payer must issue either a payment or a denial.',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Open Negotiation (30 Days)',
    desc: 'If the payment is unsatisfactory, the provider can initiate a 30-day negotiation window with the payer.',
    icon: MessageSquare,
  },
  {
    id: 4,
    title: 'IDR Initiation (4 Days)',
    desc: 'If no agreement is reached, either party has 4 business days to initiate the Federal IDR process.',
    icon: Gavel,
  },
  {
    id: 5,
    title: 'IDR Entity Selection (3 Days)',
    desc: 'Both parties must agree on a certified IDR entity within 3 business days.',
    icon: Users,
  },
  {
    id: 6,
    title: 'Best Offer Submission (10 Days)',
    desc: 'Each side submits a final payment offer and supporting documentation.',
    icon: FileCheck,
  },
  {
    id: 7,
    title: 'Arbitrator Decision & Payment (30 Days)',
    desc: 'The IDR entity selects one offer. The losing party pays the arbitration fee, and the payer has 30 days to issue payment.',
    icon: CheckCircle2,
  },
];

export function FlightPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // The line fills as we scroll through the section
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section id="process" className="py-16 bg-slate-50 relative overflow-hidden" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
         {/* Stronger Blobs */}
         <motion.div 
           animate={{ 
             x: [0, 100, 0], 
             y: [0, -50, 0],
             scale: [1, 1.2, 1],
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-300/30 rounded-full blur-[100px]"
         />
         <motion.div 
           animate={{ 
             x: [0, -100, 0], 
             y: [0, 50, 0],
             scale: [1, 1.5, 1], 
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
           className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-[120px]"
         />
         
         {/* Floating Particles */}
         {[...Array(5)].map((_, i) => (
            <motion.div
               key={i}
               className="absolute w-2 h-2 bg-midnight-slate/20 rounded-full"
               initial={{ x: Math.random() * 1000, y: Math.random() * 1000 }}
               animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
               transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
            />
         ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold font-fraunces text-midnight-slate mb-4">Federal IDR – Step-by-Step Process</h2>
           <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
             When an out-of-network claim is underpaid or denied, JC Arbitrations helps you navigate the Federal IDR process under the No Surprises Act. Here's how it works:
           </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* THE LINE */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
               style={{ height: lineHeight }}
               className="w-full bg-recovery-teal origin-top"
             />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <Step 
                  key={step.id} 
                  step={step} 
                  index={index} 
                  isEven={isEven}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ step, index, isEven }: { step: any, index: number, isEven: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "relative flex items-center gap-8 md:gap-16",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Icon Node (Centered) */}
      <div className="absolute left-0 md:left-1/2 -translate-x-[2px] md:-translate-x-1/2 z-10">
         <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center text-recovery-teal">
            <step.icon size={24} strokeWidth={2} />
         </div>
      </div>

      {/* Content Side */}
      <div className={cn("pl-20 md:pl-0 w-full md:w-1/2", isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12")}>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
             <span className="text-xs font-bold text-recovery-teal tracking-wider uppercase mb-2 block">Step 0{step.id}</span>
             <h3 className="text-xl font-bold text-midnight-slate mb-3">{step.title}</h3>
             <p className="text-slate-600 leading-relaxed">{step.desc}</p>
         </div>
      </div>
      
      {/* Empty Side for layout balance on Desktop */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
}

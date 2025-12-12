'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileSearch, Scale, Gavel, Handshake, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 1,
    title: 'Intake & Eligibility',
    desc: 'We ingest your claims data and instantly verify No Surprises Act eligibility against the QPA.',
    icon: FileSearch,
  },
  {
    id: 2,
    title: 'Underpayment Detection',
    desc: 'Our algorithms identify claims paid below the median in-network rate or disallowed entirely.',
    icon: Scale,
  },
  {
    id: 3,
    title: 'IDR Filing Strategy',
    desc: 'We bundle claims strategically to minimize fees and maximize the "batched" argument strength.',
    icon: Gavel,
  },
  {
    id: 4,
    title: 'Negotiation Window',
    desc: 'Our liaisons engage the payer directly. 60% of our cases settle favorably before arbitration.',
    icon: Handshake,
  },
  {
    id: 5,
    title: 'Payment Posting',
    desc: 'The final decision is enforced. We track the check until it hits your bank account.',
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
      <div className="absolute inset-0 z-0 pointer-events-none">
         <motion.div 
           animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-20 left-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 mix-blend-multiply"
         />
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-slate-200 rounded-full blur-3xl opacity-30 mix-blend-multiply"
         />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold font-fraunces text-midnight-slate mb-4">The Revenue Flight Path</h2>
           <p className="text-slate-600 max-w-2xl mx-auto text-lg">
             A precision-engineered workflow designed to move stuck claims from "Denied" to "Paid".
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

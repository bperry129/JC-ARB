'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "How does the No Surprises Act impact my out-of-network revenue?",
    answer: "The NSA prohibits balance billing for certain services and establishes the Independent Dispute Resolution (IDR) process. Without a proactive strategy, your reimbursements are capped at the Qualifying Payment Amount (QPA) — often significantly lower than your billed charges. We use the IDR process to fight for fair market rates."
  },
  {
    question: "Do you charge upfront fees for arbitration?",
    answer: "We typically operate on a contingency or hybrid model, meaning our success is directly aligned with your recovery. We audit your claims first to ensure they are viable for arbitration before filing."
  },
  {
    question: "Can you handle existing backlogs of denied claims?",
    answer: "Yes. We specialize in retrospective audits. We can review claims from the past 12-24 months (depending on state/federal statutes of limitations) to identify recoverable revenue you may have written off."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold font-fraunces text-midnight-slate mb-4">Common Questions</h2>
           <p className="text-slate-600">Guidance for the independent practice.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
               <button
                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
                 className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
               >
                 <span className="font-bold text-midnight-slate md:text-lg pr-8">{faq.question}</span>
                 {openIndex === i ? <Minus className="text-recovery-teal flex-shrink-0" /> : <Plus className="text-slate-400 flex-shrink-0" />}
               </button>
               <AnimatePresence>
                 {openIndex === i && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="overflow-hidden"
                   >
                     <div className="p-6 pt-0 bg-slate-50 text-slate-600 leading-relaxed border-t border-slate-200/50">
                        {faq.answer}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

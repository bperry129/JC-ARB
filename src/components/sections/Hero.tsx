'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronRight, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-midnight-slate text-white overflow-hidden flex items-center pt-24 pb-12">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-20" preserveAspectRatio="none">
           <defs>
              <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#0D9488" stopOpacity="0.2" />
                 <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>
           </defs>
           <path d="M0,0 L100,0 L50,100 Z" fill="url(#grid-grad)" />
        </svg>
        
        {/* Animated Flight Lines */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
           className="absolute inset-0"
        >
             <svg className="w-full h-full pointer-events-none" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M-100 800 C 400 800, 600 200, 1500 200"
                  stroke="#0D9488"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M-100 850 C 400 850, 700 300, 1500 100"
                  stroke="#0D9488"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                />
             </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* TEXT CONTENT */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-recovery-teal text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-recovery-teal animate-pulse" />
                No Surprises Act Specialists
             </div>
             <h1 className="text-5xl lg:text-7xl font-bold font-fraunces leading-[1.1] mb-6 tracking-tight">
               The Revenue You Earned. <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                 The Advocacy You Deserve.
               </span>
             </h1>
             <p className="text-lg lg:text-xl text-slate-300 max-w-lg leading-relaxed">
               Specialized IDR representation and revenue recovery for out-of-network providers. We turn friction into flow.
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gap-2">
              Assess Your Potential <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600">
              View The Process
            </Button>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="pt-8"
          >
             <p className="text-slate-400 text-sm font-medium">Focused on Accuracy, Compliance, and Outcomes</p>
          </motion.div>
        </div>

        {/* VISUAL / DASHBOARD CARD */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 40 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.1, ease: "circOut" }}
           className="hidden lg:block relative"
        >
           {/* Abstract Float Animation */}
           <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
           >
              <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-teal-900/20 max-w-md ml-auto transform rotate-y-12 perspective-1000">
                  <div className="flex items-center justify-between mb-6">
                      <div>
                          <p className="text-slate-400 text-xs uppercase tracking-wider">Total Recovered</p>
                          <h3 className="text-3xl font-bold text-white mt-1">$14,204,050</h3>
                      </div>
                      <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                          <ExternalLink className="text-teal-400" size={20} />
                      </div>
                  </div>
                  
                  {/* Fake Chart Lines */}
                  <div className="h-32 w-full flex items-end gap-2 mb-6">
                      {[30, 45, 35, 60, 50, 70, 85].map((h, i) => (
                          <motion.div 
                              key={i} 
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                              className="flex-1 bg-gradient-to-t from-teal-900/50 to-teal-500 rounded-t-sm"
                          />
                      ))}
                  </div>
                  
                  <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm py-2 border-b border-slate-800">
                          <span className="text-slate-400">Claim #8492</span>
                          <span className="text-emerald-400 font-medium">+$4,500 Recovered</span>
                      </div>
                      <div className="flex items-center justify-between text-sm py-2 border-b border-slate-800">
                          <span className="text-slate-400">Claim #1102</span>
                          <span className="text-emerald-400 font-medium">+$2,150 Recovered</span>
                      </div>
                  </div>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

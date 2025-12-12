import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 text-slate-600 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/media/logo.png"
              alt="JC Arbitrations"
              className="h-14 w-auto mb-6"
            />
            <p className="max-w-sm mb-6 text-slate-600">
              The premier IDR revenue recovery partner for out-of-network providers. We fight the insurance bureaucracy so you can focus on patient care.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-recovery-teal transition-colors" />
               <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-recovery-teal transition-colors" />
               <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-recovery-teal transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Federal IDR Filing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Denial Management</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Underpayment Audits</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contract Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Who We Serve</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">© {new Date().getFullYear()} JC Arbitrations, LLC. All rights reserved.</p>
          <p className="text-slate-500">
            Website design by{' '}
            <a href="mailto:bperry129@gmail.com" className="hover:text-white underline underline-offset-4">
              Brad Perry
            </a>
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

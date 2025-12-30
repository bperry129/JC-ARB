import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-midnight-slate text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img
              src="/media/logo.png"
              alt="JC Arbitrations"
              className="h-14 w-auto mb-6 brightness-0 invert"
            />
            <p className="max-w-sm mb-6 text-slate-400 leading-relaxed">
              The premier IDR revenue recovery partner for out-of-network providers. We fight the insurance bureaucracy so you can focus on patient care.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/#services" className="text-slate-400 hover:text-recovery-teal transition-colors">Services</Link></li>
              <li><Link href="/#process" className="text-slate-400 hover:text-recovery-teal transition-colors">The Process</Link></li>
              <li><Link href="/#clients" className="text-slate-400 hover:text-recovery-teal transition-colors">Who We Serve</Link></li>
              <li><Link href="/#resources" className="text-slate-400 hover:text-recovery-teal transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-recovery-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-recovery-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Phone</p>
                  <a href="tel:516-242-5834" className="text-slate-300 hover:text-recovery-teal transition-colors">
                    516-242-5834
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-recovery-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Email</p>
                  <a href="mailto:info@jcarbitrations.com" className="text-slate-300 hover:text-recovery-teal transition-colors break-all">
                    info@jcarbitrations.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-recovery-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Address</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    447 Broadway 2nd Fl #3000<br />
                    New York, NY 10013-2562
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">© {new Date().getFullYear()} JC Arbitrations, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-slate-400 hover:text-recovery-teal transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-slate-400 hover:text-recovery-teal transition-colors">Terms of Service</Link>
          </div>
          <p className="text-slate-500">
            Website by{' '}
            <a href="mailto:bperry129@gmail.com" className="text-slate-400 hover:text-recovery-teal transition-colors">
              Brad Perry
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

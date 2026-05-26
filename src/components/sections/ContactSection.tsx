"use client";
import React from 'react';
import { Mail, Send } from 'lucide-react';
import CinematicSection from '@/components/CinematicSection';

export default function ContactSection() {
  return (
    <CinematicSection id="contact" title="Get In Touch" icon={Mail}>
      <div className="bg-surface/50 p-10 md:p-16 rounded-3xl shadow-neu-dark border border-white/5 text-center relative overflow-hidden group max-w-2xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-magic-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="relative z-10 space-y-8">
          <div className="w-16 h-16 bg-surface-raised rounded-full shadow-neu-inset flex items-center justify-center mx-auto border border-white/5">
            <Send size={24} className="text-magic-glow" />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's build scalable systems together.</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
              I’m always interested in backend engineering, developer tooling, scalable architectures, and impactful software projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:shreshtsumit@gmail.com" className="relative w-full sm:w-auto px-8 py-3.5 bg-surface-raised rounded-xl text-xs font-mono text-white shadow-neu-dark border border-white/5 hover:border-magic-glow/30 hover:text-magic-glow transition-all duration-300 uppercase tracking-widest">
              Initialize_Handshake()
            </a>
            <a href="https://www.linkedin.com/in/sumitshresht/" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-canvas rounded-xl text-xs font-mono text-gray-400 shadow-neu-inset border border-white/5 hover:text-white transition-all duration-300 uppercase tracking-widest">
              Access Network
            </a>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
"use client";
import React from 'react';
import { User } from 'lucide-react';
import CinematicSection from '@/components/CinematicSection';

export default function AboutSection() {
  return (
    <CinematicSection id="about" title="About Me" icon={User}>
      <div className="bg-surface/50 p-8 md:p-12 rounded-3xl shadow-neu-dark border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-magic-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-medium text-white drop-shadow-md">Architecting Logic.</h3>
            <p className="text-gray-400 leading-relaxed text-sm">I am a Full Stack Developer and Backend Engineer passionate about building scalable systems, developer tooling, APIs, and modern web applications.</p>
            <p className="text-gray-400 leading-relaxed text-sm">I enjoy turning complex backend problems into simple, reliable, and highly scalable systems. My philosophy revolves around ensuring end-to-end type safety, predictable execution, and elegant architectural design.</p>
          </div>
          <div className="bg-canvas/50 p-6 rounded-2xl shadow-neu-inset border border-white/5 backdrop-blur-sm">
            <h4 className="text-[10px] font-mono tracking-widest text-magic-glow/80 uppercase mb-4 border-b border-white/5 pb-2">Core Optimization Focus</h4>
            <ul className="space-y-3">
              {["Clean Architecture & Design Patterns", "Microservice Decoupling & Scaling", "Developer Experience (DX)", "Performance Optimization", "High-throughput APIs"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300"><span className="w-1.5 h-1.5 rounded-full bg-magic-glow/50 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
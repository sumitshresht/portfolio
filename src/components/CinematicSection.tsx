"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Power } from 'lucide-react';

export default function CinematicSection({ 
  children, 
  title, 
  icon: Icon, 
  id 
}: { 
  children: React.ReactNode, 
  title: string, 
  icon: React.ElementType, 
  id: string 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });
  
  return (
    <section id={id} ref={ref} className="relative min-h-screen py-32 flex items-center justify-center">
      <motion.div initial={false} animate={{ opacity: isInView ? 1 : 0 }} transition={{ duration: 1.2, ease: "easeInOut" }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-magic-glow/10 via-canvas to-canvas pointer-events-none" />
      <div className="max-w-5xl w-full px-6 relative z-10">
        <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-6">
          <div className="flex items-center gap-4">
            <motion.div animate={{ color: isInView ? "#D4AF37" : "#374151", textShadow: isInView ? "0 0 10px rgba(212,175,55,0.5)" : "none" }} transition={{ duration: 0.8 }}><Icon size={24} /></motion.div>
            <h2 className="text-2xl font-sans tracking-wide text-white/90 uppercase">{title}</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-white/30">System Power</span>
            <div className="w-12 h-6 bg-surface-raised rounded-full shadow-neu-inset relative flex items-center px-1">
              <motion.div initial={false} animate={{ x: isInView ? 24 : 0, backgroundColor: isInView ? "#D4AF37" : "#374151" }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="w-4 h-4 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
                <Power size={8} className="text-canvas" />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div initial={false} animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0.2, filter: isInView ? "blur(0px)" : "blur(4px)" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Import all your new components!
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GithubSection from '@/components/sections/GithubSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const wizardY = useTransform(smoothProgress, [0, 1], ["0vh", "90vh"]);
  const [dustParticles, setDustParticles] = useState<{top: string, left: string, delay: string, duration: string}[]>([]);

  useEffect(() => {
    setDustParticles([...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`, duration: `${10 + Math.random() * 10}s`
    })));
  }, []);

  return (
    <div className="bg-canvas min-h-screen text-gray-300 font-sans selection:bg-magic-glow/30 selection:text-white pb-20">
      
      {/* Ambient Dust & Scroll Orb */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {dustParticles.map((p, i) => (
          <div key={i} className="absolute w-1 h-1 bg-magic-glow/20 rounded-full animate-dust" style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.duration }} />
        ))}
      </div>
      <motion.div style={{ top: wizardY }} className="fixed right-6 md:right-12 z-50 pointer-events-none flex flex-col items-center gap-2 transform -translate-y-1/2">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-3 h-3 bg-magic-glow rounded-full shadow-[0_0_20px_#D4AF37,0_0_40px_#D4AF37]" />
        <div className="w-px h-16 bg-gradient-to-b from-magic-glow/50 to-transparent" />
      </motion.div>

      {/* RENDER ALL SECTIONS */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <GithubSection />
      <BlogSection />
      <ContactSection />
      
      <footer className="py-12 text-center text-xs font-mono text-gray-600 border-t border-white/5 max-w-5xl mx-auto">
        <p>Built by Sumit Shresht. &copy; {new Date().getFullYear()}  </p>
      </footer>
    </div>
  );
}
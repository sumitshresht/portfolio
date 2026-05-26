"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Standardized professional navigation links
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500`}
    >
      <div className={`flex items-center gap-8 px-8 py-3 rounded-full border transition-all duration-500 ${
        scrolled 
          ? "bg-[#050508]/80 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-transparent"
      }`}>
        
        {/* Logo (Acts as the Home Button) */}
        <Link href="/" className="flex items-center gap-2 group mr-4">
          <div className="w-6 h-6 rounded bg-magic-glow/20 border border-magic-glow/50 flex items-center justify-center group-hover:bg-magic-glow transition-colors">
            <span className="text-[10px] font-bold text-magic-glow group-hover:text-[#050508] font-mono">SS</span>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className="relative text-xs font-mono tracking-widest uppercase text-gray-400 hover:text-white transition-colors py-1"
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-magic-glow shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Contact CTA */}
        <Link 
          href="/contact"
          className="ml-4 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase border border-white/10 text-gray-300 hover:text-magic-glow hover:border-magic-glow/30 transition-all shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]"
        >
          Connect
        </Link>
      </div>
    </motion.nav>
  );
}
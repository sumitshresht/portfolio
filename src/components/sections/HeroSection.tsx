"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, FileText } from 'lucide-react';

// Moved outside to prevent continuous re-renders
const GREETINGS = ["Hello", "Namaste", "Hola", "Bonjour", "Hallo", "print"];

export default function HeroSection() {
  const [floatingRunes, setFloatingRunes] = useState<{text: string, top: string, left: string, duration: number, delay: number}[]>([]);
  
  // --- Typewriter State ---
  const [greetingText, setGreetingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const runeSymbols = ['{ }', '0x2F', '=>', '</>', '[]', '||', 'JWT', ';;', 'async'];
    setFloatingRunes(runeSymbols.map((text, i) => ({
      text, 
      top: `${15 + Math.random() * 70}%`, 
      left: `${10 + Math.random() * 80}%`, 
      duration: 15 + Math.random() * 10, 
      delay: i * 1.5
    })));
  }, []);

  // --- Typewriter Effect Logic ---
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = GREETINGS[loopNum % GREETINGS.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setGreetingText(currentWord.substring(0, greetingText.length - 1));
        setTypingSpeed(40); 
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setGreetingText(currentWord.substring(0, greetingText.length + 1));
        setTypingSpeed(100); 
      }, typingSpeed);
    }

    if (!isDeleting && greetingText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2500); 
    } else if (isDeleting && greetingText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setTypingSpeed(100);
    }

    return () => clearTimeout(timer);
  }, [greetingText, isDeleting, loopNum, typingSpeed]); // Added missing typingSpeed dependency

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 z-10 overflow-hidden">
      
      {/* Glitch Effect CSS Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .glitch-name { position: relative; color: white; display: inline-block; }
        .glitch-name::before, .glitch-name::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: transparent; }
        .glitch-name::before { left: 3px; text-shadow: -2px 0 rgba(212, 175, 55, 0.9); clip: rect(24px, 550px, 90px, 0); animation: glitch-anim-2 3s infinite linear alternate-reverse; }
        .glitch-name::after { left: -3px; text-shadow: -2px 0 rgba(16, 185, 129, 0.9); clip: rect(85px, 550px, 140px, 0); animation: glitch-anim 2.5s infinite linear alternate-reverse; }
        @keyframes glitch-anim { 0% { clip: rect(15px, 9999px, 71px, 0); transform: translate(-2px, 1px); } 20% { clip: rect(65px, 9999px, 23px, 0); transform: translate(2px, -1px); } 40% { clip: rect(4px, 9999px, 80px, 0); transform: translate(-2px, 2px); } 60% { clip: rect(45px, 9999px, 10px, 0); transform: translate(2px, -2px); } 80% { clip: rect(23px, 9999px, 55px, 0); transform: translate(-1px, 1px); } 100% { clip: rect(88px, 9999px, 3px, 0); transform: translate(1px, -1px); } }
        @keyframes glitch-anim-2 { 0% { clip: rect(65px, 9999px, 10px, 0); transform: translate(2px, -1px); } 20% { clip: rect(3px, 9999px, 77px, 0); transform: translate(-2px, 1px); } 40% { clip: rect(42px, 9999px, 20px, 0); transform: translate(2px, 2px); } 60% { clip: rect(12px, 9999px, 60px, 0); transform: translate(-2px, -2px); } 80% { clip: rect(80px, 9999px, 5px, 0); transform: translate(1px, -1px); } 100% { clip: rect(22px, 9999px, 45px, 0); transform: translate(-1px, 1px); } }
      `}} />

      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(4)].map((_, i) => (
          <motion.div key={`stream-${i}`} animate={{ y: ['100%', '-50%'], opacity: [0, 0.15, 0], scale: [1, 1.5, 1] }} transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear", delay: i * 3 }} className="absolute w-[40vw] h-[40vw] bg-magic-glow rounded-full mix-blend-screen blur-[120px]" style={{ left: `${10 + i * 25}%`, top: '100%' }} />
        ))}
        {floatingRunes.map((rune, i) => (
          <motion.div key={`rune-${i}`} animate={{ y: [0, -40, 0], x: [0, Math.sin(i) * 20, 0], opacity: [0.01, 0.08, 0.01], rotate: [0, 15, -15, 0] }} transition={{ duration: rune.duration, repeat: Infinity, ease: "easeInOut", delay: rune.delay }} className="absolute font-mono text-magic-glow font-bold text-3xl md:text-6xl select-none" style={{ top: rune.top, left: rune.left, filter: 'blur(1px)' }}>{rune.text}</motion.div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20" />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} className="w-full max-w-5xl text-center relative z-20">
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1.2 }} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-raised/30 backdrop-blur-md shadow-neu-inset border border-white/5 mb-8">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magic-glow opacity-60"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-magic-glow/80"></span></span>
          <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">System Initialized</span>
        </motion.div>

        <div className="flex w-full items-center justify-center text-4xl md:text-6xl lg:text-[5.5rem] font-bold font-mono text-gray-500 mb-6 md:mb-10 h-16 md:h-24 select-none tracking-tight">
          <div className="flex-1 flex justify-end">
            <span className="text-magic-glow drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">{greetingText}</span>
          </div>
          <div className="flex-1 flex justify-start items-center">
            <span className="text-white mr-3 md:mr-5">, I&apos;m</span>
            <span className="font-extrabold glitch-name text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" data-text="Sumit">Sumit</span>
            <span className="w-3 md:w-5 h-10 md:h-20 bg-magic-glow animate-pulse ml-3 md:ml-4 shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
          </div>
        </div>
        
        <h2 className="text-lg md:text-2xl font-mono tracking-wide text-gray-400 mb-10">
          Crafting <span className="text-white">resilient backends</span> &amp; <span className="text-magic-glow">intelligent systems.</span>
        </h2>
        
        <div className="bg-surface/30 backdrop-blur-xl border border-white/5 shadow-neu-dark rounded-2xl p-6 max-w-2xl mx-auto text-left relative overflow-hidden group mb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-magic-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <p className="text-xs md:text-sm text-gray-400 font-mono leading-loose relative z-10">
            <span className="text-magic-glow">const</span> <span className="text-white">engineer</span> = &#123; <br/>
            <span className="text-gray-600 select-none">1 |</span> &nbsp;&nbsp;role: <span className="text-amber-200/70">&quot;Full Stack &amp; Backend Developer&quot;</span>,<br/>
            <span className="text-gray-600 select-none">2 |</span> &nbsp;&nbsp;focus: [<span className="text-amber-200/70">&quot;Spring Boot&quot;</span>, <span className="text-amber-200/70">&quot;Microservices&quot;</span>, <span className="text-amber-200/70">&quot;Next.js&quot;</span>],<br/>
            <span className="text-gray-600 select-none">3 |</span> &nbsp;&nbsp;mission: <span className="text-amber-200/70">&quot;Turning complex data logic into seamless execution.&quot;</span><br/>
            &#125;;
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#projects" className="relative group px-8 py-3.5 bg-surface-raised rounded-xl text-xs font-mono text-white shadow-neu-dark border border-white/5 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 group-hover:text-magic-glow transition-colors tracking-widest uppercase">Execute Compile()</span>
            <div className="absolute inset-0 bg-gradient-to-r from-magic-glow/0 via-magic-glow/10 to-magic-glow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          </a>
          <a href="https://drive.google.com/file/d/16Gb9bhUn_-MuIFtVRTji1DkYwhyLHDt6/view?usp=sharing" target="_blank" rel="noreferrer" className="relative group px-8 py-3.5 bg-canvas rounded-xl text-xs font-mono text-gray-400 shadow-neu-inset border border-magic-glow/30 hover:border-magic-glow hover:text-white transition-all duration-300 flex items-center gap-2 overflow-hidden cursor-pointer">
            <FileText size={16} className="text-magic-glow group-hover:animate-pulse" />
            <span className="relative z-10 tracking-widest uppercase">Get_Resume.pdf</span>
            <div className="absolute inset-0 bg-magic-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a href="https://github.com/sumitshresht" target="_blank" rel="noreferrer" className="p-3.5 bg-surface-raised rounded-xl shadow-neu-dark border border-white/5 hover:text-magic-glow hover:border-magic-glow/20 transition-all duration-300">
            <Github size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu } from 'lucide-react';
import CinematicSection from '@/components/CinematicSection';

export default function SkillsSection() {
  const blocks = [
    { category: "Backend Engine", tech: ["Java", "Spring Boot", "REST APIs", "Spring Security", "JWT Auth", "Microservices"] },
    { category: "Frontend Layer", tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Data & Storage", tech: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "JDBC"] },
    { category: "DevOps & Infrastructure", tech: ["Docker", "Git/GitHub", "Maven", "Gradle", "Kafka", "Postman", "Linux", "JUnit"] }
  ];

  return (
    <CinematicSection id="skills" title="Technical Skills" icon={Cpu}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {blocks.map((block, i) => {
          const blockRef = useRef(null);
          const isBlockInView = useInView(blockRef, { margin: "-20% 0px -20% 0px" });

          return (
            <motion.div key={i} ref={blockRef} animate={isBlockInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } }} className="group relative bg-surface p-8 rounded-3xl shadow-neu-dark border border-white/5 hover:border-magic-glow/30 transition-all duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-magic-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <motion.div initial={{ top: '-10%', opacity: 0 }} animate={{ top: isBlockInView ? '110%' : '-10%', opacity: isBlockInView ? [0, 1, 0] : 0 }} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }} className="absolute left-0 right-0 h-[2px] bg-magic-glow/30 shadow-[0_0_20px_rgba(212,175,55,0.8)] z-0 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-sm font-mono tracking-widest text-magic-glow/80 uppercase mb-6 flex items-center gap-2"><span className="w-2 h-2 border border-magic-glow bg-magic-glow/20 animate-pulse" />{block.category}</h3>
                <div className="flex flex-wrap gap-2.5 perspective-1000">
                  {block.tech.map((t, idx) => {
                    const isLeft = idx % 2 === 0;
                    const isTop = idx % 3 === 0;
                    return (
                      <motion.span key={t} custom={idx} variants={{ hidden: { opacity: 0, x: isLeft ? -100 - (idx * 40) : 100 + (idx * 40), y: isTop ? -100 - (idx * 30) : 100 + (idx * 30), z: -200, rotateX: isTop ? 45 : -45, rotateY: isLeft ? -45 : 45, rotateZ: isLeft ? -15 : 15, filter: "blur(8px)" }, visible: { opacity: 1, x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 14, mass: 1.2, delay: idx * 0.08 } } }} className="px-3 py-1.5 bg-canvas/90 backdrop-blur-xl rounded-lg text-[10px] font-mono tracking-widest uppercase text-gray-400 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:text-magic-glow group-hover:border-magic-glow/40 transition-colors relative" style={{ transformStyle: "preserve-3d" }}>
                        <span className="opacity-30 mr-1 text-magic-glow/60">[</span>{t}<span className="opacity-30 ml-1 text-magic-glow/60">]</span>
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </CinematicSection>
  );
}
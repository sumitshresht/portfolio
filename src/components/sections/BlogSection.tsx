"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import CinematicSection from '@/components/CinematicSection';

export default function BlogSection() {
  const blogs = [
    { title: "Authentication looks easy, until you build it for real users.", category: "Architecture", link: "https://dev.to/sumit_shresht/authentication-looks-easy-until-you-build-it-for-real-users-5dop", image: "/auth-blog.png", glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] hover:border-amber-500/30", textHover: "group-hover:text-amber-400" },
    { title: "How to Dockerize a Spring Boot Application", category: "DevOps", link: "https://dev.to/sumit_shresht/how-to-dockerize-a-spring-boot-application-3i4o", image: "/dockerize-blog.png", glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:border-emerald-500/30", textHover: "group-hover:text-emerald-400" }
  ];

  return (
    <CinematicSection id="blogs" title="Technical Blog" icon={BookOpen}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, i) => (
          <motion.a key={i} href={blog.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className={cn("block group relative bg-surface p-4 rounded-[2rem] shadow-neu-dark border border-white/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full", blog.glow)}>
            <div className="absolute inset-0 bg-gradient-to-br from-magic-glow/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative w-full h-52 md:h-60 rounded-2xl overflow-hidden bg-[#050505] border border-white/5 mb-6">
              <div className="absolute inset-0 bg-canvas/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div className="flex flex-col flex-grow px-2 relative z-20 pb-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 border border-white/10 bg-white/5 px-3 py-1.5 rounded-lg inline-flex w-max mb-5 shadow-neu-inset group-hover:text-gray-300 transition-colors">{blog.category}</span>
              <h3 className={cn("text-xl font-bold text-white transition-colors duration-500 leading-snug mb-8", blog.textHover)}>{blog.title}</h3>
              <div className="mt-auto flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-white transition-colors"><span>Access Article</span><span className="transition-transform duration-500 group-hover:translate-x-2">→</span></div>
            </div>
          </motion.a>
        ))}
      </div>
    </CinematicSection>
  );
}
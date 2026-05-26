"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import CinematicSection from '@/components/CinematicSection';

export default function ProjectsSection() {
  const projects = [
    { name: "APIForge", desc: "APIForge is a developer-focused platform that empowers frontend teams to build, test, and simulate APIs without backend dependencies. It features dynamic mock server generation, latency and failure simulation, real-time analytics, secure JWT-based authentication, and an integrated API testing hub - enabling faster frontend development, resilient client testing, and streamlined API workflows using Next.js, Spring Boot, and PostgreSQL.", stack: ["Next.js", "Spring Boot", "Docker", "PostgreSQL"], image: "/api-forge.png", link: "https://apiforge-frontend.vercel.app/login", glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] group-hover:border-amber-500/30", textHover: "group-hover:text-amber-400" },
    { name: "FlatDB", desc: "FlatDB is a open-source, lightweight and developer-friendly flat-file NoSQL database built for Java applications, designed to provide flexible JSON document storage without requiring a dedicated database server. It features fast in-memory querying, nested field filtering, indexing support, persistent JSON-based storage, and powerful CRUD operations - making it ideal for embedded systems, developer tools, prototypes, and small-scale applications.", stack: ["Java", "Gson", "JUnit"], image: "/flatDB.png", link: "https://mvnrepository.com/artifact/io.github.sumitshresht/FlatDB", glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/30", textHover: "group-hover:text-emerald-400" },
    { name: "SecureZip", desc: "SecureZip is a lightweight Java library for secure file encryption, compression, integrity verification, and file management operations. It provides AES-based file encryption, password-protected ZIP compression, secure file deletion, file splitting/merging, and cryptographic hash validation (SHA-256, SHA-1, MD5) through a simple and developer-friendly API - making it ideal for secure storage, backup utilities, and file protection tools.", stack: ["Java", "AES", "SHA-256"], image: "/SecureZIP.png", link: "https://central.sonatype.com/artifact/io.github.sumitshresht/SecureZip", glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] group-hover:border-purple-500/30", textHover: "group-hover:text-purple-400" },
    { name: "Saanjha", desc: "Saanjha is a modern social microblogging platform built with React, Vite, Chakra UI, and Spring Boot, enabling users to share posts, interact through likes and saves, manage profiles, and upload media in a responsive and seamless user experience. The platform focuses on clean UI design, real-time social interactions, and scalable frontend architecture optimized for both mobile and desktop environments.", stack: ["React.js", "Spring Boot", "PostgreSQL"], image: "/saanjha.png", link: "https://saanjha-frontend.vercel.app/login", glow: "group-hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] group-hover:border-teal-500/30", textHover: "group-hover:text-teal-400" }
  ];

  return (
    <CinematicSection id="projects" title="Featured Projects" icon={Terminal}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.a key={i} href={project.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className={cn("group relative bg-surface p-4 rounded-[2rem] border border-white/5 shadow-neu-dark overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer", project.glow)}>
            <div className="absolute inset-0 bg-gradient-to-br from-magic-glow/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden bg-[#050505] border border-white/5">
              <div className="absolute inset-0 bg-canvas/50 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div className="pt-8 px-2 pb-4 flex flex-col flex-grow relative z-20">
              <div className="flex items-center justify-between mb-3">
                <h3 className={cn("text-2xl font-bold text-white transition-colors duration-500", project.textHover)}>{project.name}</h3>
                <ExternalLink size={20} className="text-white/20 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map(s => <span key={s} className="px-3 py-1.5 bg-canvas/80 backdrop-blur-md rounded-lg text-[10px] font-mono tracking-widest uppercase text-gray-500 border border-white/5 shadow-neu-inset group-hover:text-gray-300 transition-colors">{s}</span>)}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </CinematicSection>
  );
}
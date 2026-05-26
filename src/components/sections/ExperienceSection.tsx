"use client";

import React from 'react';
import { Briefcase } from 'lucide-react';
import CinematicSection from '@/components/CinematicSection';

export default function ExperienceSection() {
  const experiences = [
    { 
      role: "Software Engineering Intern", 
      company: "ShopCardd — Discount ka juggad", 
      location: "Remote",
      time: "May 2026 - Present", 
      points: [
        "Engineered a scalable Digital Lending Aggregator backend using Spring Boot, PostgreSQL, Redis, and a modular architecture featuring a secure loan lifecycle, automated KYC processing, fraud detection matrices, and partner integration workflows.",
        "Designed RBI-compliant financial workflows incorporating JWT-based authentication, AES-256 encrypted PII handling, dynamic KFS document generation, asynchronous webhook processing, and resilient partner APIs using retry and circuit breaker patterns.",
        "Built high-performance backend layers supporting asynchronous event-driven processing, distributed Redis caching, granular role-based access control (RBAC), immutable audit logging, and highly optimized indexing for scalable fintech transactions."
      ]
    },
    { 
      role: "Full Stack Developer", 
      company: "Sigma World", 
      location: "Remote",
      time: "Feb 2026 - Apr 2026", 
      points: [
        "Engineered a complete Employee Performance Appraisal Report (EPAR) system tracking complex organizational workflows across employee self-appraisal submissions, multi-level authority reviews, HR management panels, and final salary evaluations.",
        "Built secure relational database schemas and backend workflows handling high-integrity appraisal approvals, performance score aggregations, automated promotion recommendations, and strict role-based access configurations using Spring Boot and PostgreSQL.",
        "Automated comprehensive evaluation pipelines by digitizing KRA metrics, continuous feedback collection modules, training ledger histories, and structured appraisal logs, successfully reducing manual operational overhead."
      ]
    },
    { 
      role: "Web Development Team Member", 
      company: "IEEE ICAIHC 2026 Conference — NIT Raipur",
      location: "", 
      time: "Sep 2025 – Dec 2025", 
      points: [
        "Architected and refactored core modules of the official IEEE ICAIHC international conference website, establishing a highly responsive and fluid frontend presentation layer utilizing semantic web standards.",
        "Optimized global UI/UX layouts to adhere to accessibility standards, maximizing rendering speeds and ensuring predictable component behavior across diverse client devices and viewport resolutions.",
        "Collaborated tightly with IEEE panel members and institutional faculty coordinators, translating academic timeline metrics and submission data logic into accessible, user-friendly digital entry workflows."
      ]
    }
  ];

  return (
    <CinematicSection id="experience" title="Work Experience" icon={Briefcase}>
      <div className="space-y-12 pl-4 border-l border-white/10 relative">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 group">
            {/* Timeline Node */}
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#0a0a0c] border border-magic-glow/50 group-hover:bg-magic-glow transition-colors shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_15px_#D4AF37]" />
            
            {/* Experience Panel */}
            <div className="bg-white/5 p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/5 group-hover:border-magic-glow/20 transition-all duration-500">
              <span className="text-xs font-mono text-magic-glow/80 mb-2 block">{exp.time}</span>
              <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
              
              {/* Company & Location Badge */}
              <div className="flex items-center gap-3 mb-6 mt-1">
                <h4 className="text-sm font-mono text-gray-500">{exp.company}</h4>
                {exp.location && (
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase text-gray-400">
                    {exp.location}
                  </span>
                )}
              </div>
              
              {/* Bullet Points Container */}
              <ul className="space-y-3.5 list-none">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-gray-400 leading-relaxed flex items-start gap-3">
                    <span className="text-magic-glow mt-1.5 flex-shrink-0 text-[10px] font-mono">⚡</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </CinematicSection>
  );
}
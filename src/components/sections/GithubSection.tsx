"use client";
import React from 'react';
import { GitCommit, Github } from 'lucide-react';
import {GitHubCalendar} from 'react-github-calendar';
import CinematicSection from '@/components/CinematicSection';

export default function GithubSection() {
  return (
    <CinematicSection id="github" title="Activity Matrix" icon={GitCommit}>
      <div className="w-full max-w-5xl mx-auto relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-magic-glow/20 via-transparent to-magic-glow/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        <div className="relative bg-[#050508]/90 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
          <style dangerouslySetInnerHTML={{__html: `
            .magic-scroll::-webkit-scrollbar { height: 8px; }
            .magic-scroll::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 10px; margin: 0 20px; }
            .magic-scroll::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.2); border-radius: 10px; border: 2px solid #050508; transition: background 0.3s ease; }
            .magic-scroll::-webkit-scrollbar-thumb:hover { background: rgba(212, 175, 55, 0.8); }
            .react-activity-calendar article { font-family: 'IBM Plex Mono', monospace !important; letter-spacing: 0.05em; }
          `}} />
          <div className="bg-white/[0.02] border-b border-white/5 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
              <span className="ml-4 text-[10px] font-mono tracking-widest text-gray-500 uppercase">sumitshresht</span>
            </div>
            <a href="https://github.com/sumitshresht" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-magic-glow/70 hover:text-magic-glow transition-colors"><Github size={12} /> View Source</a>
          </div>
          <div className="relative p-6 md:p-10 flex flex-col items-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none opacity-30" />
            <div className="w-full flex justify-between items-end mb-10 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Contribution Density</h3>
                <p className="text-xs font-mono text-gray-400">Live mapped synchronization.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">API Active</span>
              </div>
            </div>
            <div className="absolute left-0 top-20 bottom-0 w-12 bg-gradient-to-r from-[#050508] to-transparent z-20 md:hidden pointer-events-none" />
            <div className="absolute right-0 top-20 bottom-0 w-12 bg-gradient-to-l from-[#050508] to-transparent z-20 md:hidden pointer-events-none" />
            <div className="w-full overflow-x-auto pb-6 magic-scroll relative z-10">
              <div className="w-max mx-auto px-6">
                <GitHubCalendar username="sumitshresht" colorScheme="dark" blockSize={14} blockMargin={5} fontSize={12} labels={{ totalCount: '{{count}} system commits mapped over the last year' }} theme={{ dark: ['#111115', 'rgba(212, 175, 55, 0.25)', 'rgba(212, 175, 55, 0.50)', 'rgba(212, 175, 55, 0.75)', '#D4AF37'] }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
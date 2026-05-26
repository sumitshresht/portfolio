"use client";
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <AboutSection />
      <SkillsSection />
    </main>
  );
}
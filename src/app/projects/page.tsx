"use client";
import ProjectsSection from '@/components/sections/ProjectsSection';
import GithubSection from '@/components/sections/GithubSection';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <ProjectsSection />
      <GithubSection />
    </main>
  );
}
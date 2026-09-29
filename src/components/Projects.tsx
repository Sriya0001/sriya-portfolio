import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Layers, Sparkles, CheckCircle2, X, Code, ShieldCheck, Activity } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Cloud & Systems', 'AI & ML'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#F5ECDA' }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-40 pointer-events-none"
        style={{
          background: '#E8D1A7',
          filter: 'blur(70px)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-10 left-0 w-96 h-96 rounded-full opacity-25 pointer-events-none"
        style={{
          background: '#9D9167',
          filter: 'blur(80px)',
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-eyebrow mb-4">
              <span className="w-8 h-px inline-block bg-[#84592B]" />
              Recent Work
            </p>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter"
              style={{ color: '#442D1C' }}
            >
              Selected
              <br />
              <span className="font-display italic" style={{ color: '#743014' }}>
                Engineering Projects
              </span>
            </h2>
          </div>

          {/* GitHub Profile Button */}
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-end px-7 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
            style={{ background: '#442D1C', color: '#E8D1A7' }}
          >
            <span>View GitHub Repositories</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#442D1C] text-[#E8D1A7] shadow-md scale-105'
                  : 'bg-[#E8D1A7]/50 text-[#442D1C] border border-[#D4BC8E] hover:bg-[#E8D1A7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl overflow-hidden border card-hover flex flex-col justify-between"
              style={{ background: '#E8D1A7', borderColor: '#D4BC8E' }}
            >
              {/* Card Image Area */}
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(68, 45, 28, 0.75) 0%, transparent 60%)',
                    }}
                  />

                  {/* Category Tag */}
                  <div
                    className="absolute top-4 left-4 pill font-bold text-[11px]"
                    style={{ background: '#442D1C', color: '#E8D1A7' }}
                  >
                    {project.tag}
                  </div>

                  {/* Top Right GitHub Link */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                      style={{ background: '#E8D1A7', color: '#442D1C' }}
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>

                  {/* Bottom Metric Pills on Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#E8D1A7]">
                    <span className="font-semibold truncate pr-2">
                      {project.metrics[0].label}: <strong className="text-amber-300">{project.metrics[0].value}</strong>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2.5 leading-snug tracking-tight text-[#442D1C] group-hover:text-[#743014] transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#84592B] mb-3 italic">
                    {project.tagline}
                  </p>

                  <p className="text-sm leading-relaxed mb-4 text-[#5A3E28]">
                    {project.description}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-1.5 mb-5 text-xs text-[#5A3E28]">
                    {project.architectureHighlights.slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#84592B] mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="pill text-[11px]"
                        style={{
                          background: 'rgba(68, 45, 28, 0.08)',
                          color: '#84592B',
                          border: '1px solid rgba(132, 89, 43, 0.25)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0 border-t border-[#D4BC8E]/50 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 bg-[#442D1C] text-[#E8D1A7] hover:bg-[#743014] transition-all"
                >
                  <Sparkles size={14} />
                  <span>Architecture Deep Dive</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details / System Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="fixed inset-0" onClick={() => setSelectedProject(null)} />
          
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#FDFBF7] text-[#442D1C] rounded-3xl shadow-2xl border border-[#D4BC8E] overflow-hidden flex flex-col z-10">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4BC8E]/60 bg-[#F5ECDA]">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#442D1C] text-[#E8D1A7]">
                  {selectedProject.tag}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-[#442D1C]/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              
              <div className="rounded-2xl overflow-hidden border border-[#D4BC8E] h-64 sm:h-72">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#442D1C] mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-semibold text-[#84592B]">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#E8D1A7]/40 border border-[#D4BC8E] text-center">
                    <div className="text-xs text-[#84592B] font-bold uppercase tracking-wider mb-0.5">
                      {m.label}
                    </div>
                    <div className="text-sm font-black text-[#442D1C]">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Long Description */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#743014] mb-2 flex items-center gap-1.5">
                  <Activity size={15} /> System Overview & Engineering Approach
                </h4>
                <p className="text-sm leading-relaxed text-[#5A3E28]">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#743014] mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck size={15} /> Architectural Highlights
                </h4>
                <div className="space-y-2">
                  {selectedProject.architectureHighlights.map((hl, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#E8D1A7]/30 border border-[#D4BC8E]/60 text-xs sm:text-sm text-[#5A3E28] flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#84592B] text-[#E8D1A7] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#743014] mb-2 flex items-center gap-1.5">
                  <Code size={15} /> Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="pill"
                      style={{
                        background: '#442D1C',
                        color: '#E8D1A7'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#F5ECDA] border-t border-[#D4BC8E]/60 flex items-center justify-between">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#442D1C] text-[#E8D1A7] hover:bg-[#743014] transition-colors"
              >
                <GithubIcon size={14} />
                <span>View GitHub Repository</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-[#442D1C] hover:bg-[#442D1C]/10 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

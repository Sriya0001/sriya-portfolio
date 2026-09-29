import React from 'react';
import { ArrowDown, ArrowUpRight, Code, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pb-12 pt-28 sm:pt-32 px-6 overflow-hidden"
      style={{ background: '#F5ECDA' }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-16 right-0 w-[540px] h-[540px] rounded-full opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #E8D1A7 0%, rgba(245, 236, 218, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute bottom-10 left-0 w-[380px] h-[380px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #9D9167 0%, rgba(245, 236, 218, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col items-start">
            
            {/* Main Name Headlines */}
            <div className="overflow-hidden mb-1">
              <h1
                className="font-black leading-none text-[clamp(3.5rem,9.5vw,7.5rem)] tracking-tighter"
                style={{ color: '#442D1C' }}
              >
                {PERSONAL_INFO.firstName}
              </h1>
            </div>

            <div className="overflow-hidden mb-6">
              <h1
                className="font-black leading-none text-[clamp(3.5rem,9.5vw,7.5rem)] tracking-tighter font-display italic"
                style={{ color: '#84592B' }}
              >
                {PERSONAL_INFO.lastName}
              </h1>
            </div>

            {/* Subtitle Bio */}
            <p
              className="text-lg md:text-xl leading-relaxed max-w-lg mb-8 text-[#743014]/90 font-medium"
            >
              Full-Stack Engineer & AI/ML Specialist. Architecting high-concurrency cloud systems, resilient enterprise backends, and algorithmic predictive platforms.
            </p>

            {/* Quick Highlights Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#84592B] mb-10">
              <span className="px-3 py-1.5 rounded-lg bg-[#E8D1A7]/50 border border-[#D4BC8E]">
                🎓 Vasavi IT (9.37 CGPA)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#E8D1A7]/50 border border-[#D4BC8E]">
                ⚡ Amazon ML Summer School Top 3K
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#E8D1A7]/50 border border-[#D4BC8E]">
                🏆 Flipkart GRiD Semifinalist
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.links.email}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-xl"
                style={{ background: '#442D1C', color: '#E8D1A7' }}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={17} />
              </a>

              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-wide border-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#442D1C]/5"
                style={{ borderColor: '#442D1C', color: '#442D1C' }}
              >
                <span>View Projects</span>
                <Code size={16} />
              </button>

              <button
                onClick={onResumeClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 bg-[#E8D1A7] text-[#442D1C] hover:bg-[#D4BC8E]"
              >
                <FileText size={16} />
                <span>Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Multi-Layered Profile Image & Badges */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              
              {/* Layer 1: Background Offset Solid */}
              <div
                className="absolute inset-0 rounded-3xl translate-x-5 translate-y-5"
                style={{
                  background: '#84592B',
                  opacity: 0.22,
                  borderRadius: '2.25rem',
                }}
              />

              {/* Layer 2: Background Offset Border Frame */}
              <div
                className="absolute inset-0 rounded-3xl translate-x-2.5 translate-y-2.5 border-2"
                style={{
                  borderColor: '#9D9167',
                  borderRadius: '2.25rem',
                }}
              />

              {/* Layer 3: Main Profile Portrait */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-autumn border border-[#D4BC8E] transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  width: 'clamp(280px, 38vw, 400px)',
                  height: 'clamp(340px, 48vw, 480px)',
                  borderRadius: '2.25rem',
                  background: '#E8D1A7'
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Sriya Kunisetty"
                  className="w-full h-full object-cover object-center"
                />
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(68, 45, 28, 0.45) 0%, transparent 40%)'
                  }}
                />
              </div>

              {/* Floating Badge 1: Bottom Left (CGPA) */}
              <div
                className="absolute -left-6 bottom-8 rounded-2xl px-5 py-3.5 shadow-autumn border backdrop-blur-md transition-transform hover:scale-110"
                style={{
                  background: 'rgba(245, 236, 218, 0.95)',
                  borderColor: '#D4BC8E',
                }}
              >
                <div className="text-3xl font-black leading-none" style={{ color: '#743014' }}>
                  9.37
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider mt-1 text-[#9D9167]">
                  CGPA · Vasavi IT
                </div>
              </div>

              {/* Floating Badge 2: Top Right (Amazon ML / Apprenticeship) */}
              <div
                className="absolute -right-6 top-8 rounded-2xl px-5 py-3.5 shadow-autumn backdrop-blur-md transition-transform hover:scale-110"
                style={{ background: '#442D1C' }}
              >
                <div className="text-2xl font-black leading-none" style={{ color: '#E8D1A7' }}>
                  Top 3K
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider mt-1 text-[#9D9167]">
                  Amazon ML School
                </div>
              </div>

              {/* Floating Badge 3: Center Bottom Right (DBS Tech) */}
              <div
                className="absolute -right-3 -bottom-4 rounded-xl px-4 py-2 shadow-md flex items-center gap-2 border border-[#84592B]/30"
                style={{ background: '#84592B', color: '#E8D1A7' }}
              >
                <Sparkles size={14} className="text-amber-300" />
                <span className="text-xs font-bold tracking-wide">DBS Tech Apprentice</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bouncing Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        className="mx-auto mt-14 flex flex-col items-center gap-2 animate-bounce-slow text-[#84592B] hover:text-[#743014] transition-colors cursor-pointer z-10"
        aria-label="Scroll to About Section"
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <ArrowDown size={18} />
      </button>

    </section>
  );
};

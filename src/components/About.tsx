import React, { useState, useRef } from 'react';
import { ArrowRight, Award, Trophy, Zap, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, STATS, SKILL_MARQUEE } from '../data/portfolioData';

// Interactive 3D tilt glare card component
interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const GlareCard: React.FC<GlareCardProps> = ({ children, className = '', style = {} }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-6 to +6 degrees)
    const rotateY = ((mouseX - width / 2) / (width / 2)) * 6;
    const rotateX = -((mouseY - height / 2) / (height / 2)) * 6;
    
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${className}`}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: 'preserve-3d',
        boxShadow: glare.opacity ? '0 20px 45px rgba(68, 45, 28, 0.2)' : '0 4px 15px rgba(68, 45, 28, 0.06)',
      }}
    >
      {/* Glare spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.22), transparent 60%)`,
          mixBlendMode: 'overlay',
          opacity: glare.opacity,
        }}
      />
      <div className="h-full w-full relative z-20" style={{ transform: 'translateZ(12px)' }}>
        {children}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden" style={{ background: '#F5ECDA' }}>
      
      {/* Main Content Area */}
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          {/* Section Header Eyebrow */}
          <div className="section-eyebrow mb-4">
            <span className="w-8 h-px inline-block bg-[#84592B]" />
            <span>About Me</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Story Column */}
            <div>
              <h2
                className="text-[clamp(2.5rem,6vw,4.75rem)] font-black leading-none tracking-tighter mb-6"
                style={{ color: '#442D1C' }}
              >
                Hey there!
                <br />
                <span className="font-display italic" style={{ color: '#743014' }}>
                  I'm Sriya
                </span>
              </h2>

              <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#5A3E28]">
                <p>
                  I'm an Information Technology undergraduate at <strong className="text-[#442D1C]">Vasavi College of Engineering</strong> with a consistent <strong className="text-[#743014]">9.37 CGPA</strong>, passionate about building reliable software, from robust backend architectures to predictive machine learning systems.
                </p>
                <p>
                  Selected for a competitive apprenticeship at a global banking technology organization, I'm currently strengthening my core technical foundations.
                </p>
                <p>
                  Whether it's architecting a three-tier cloud-based verification platform with Redis rate limiting, developing a 30-minute clinical scheduler with AI-generated summaries, or optimizing theme park itineraries using max-heaps and Random Forest models, I love tackling complex technical challenges with clarity and speed.
                </p>
                <p>
                  I'm driven by a simple motto: <em className="text-[#743014] font-bold not-italic">Keep learning, keep solving, keep building.</em>
                </p>
              </div>

              <a
                href={PERSONAL_INFO.links.email}
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                style={{ background: '#442D1C', color: '#E8D1A7' }}
              >
                <span>Let's Connect</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right Interactive 3D Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Stat 1: CGPA */}
              <GlareCard
                className="p-7"
                style={{ background: '#442D1C', borderColor: '#442D1C' }}
              >
                <div className="text-4xl md:text-5xl font-black mb-2 leading-none text-[#E8D1A7]">
                  9.37
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#9D9167]">
                  CGPA @ Vasavi IT
                </div>
                <div className="text-[11px] text-[#E8D1A7]/60 mt-2 font-medium">
                  Consistent Academic Honors
                </div>
              </GlareCard>

              {/* Stat 2: Amazon ML School */}
              <GlareCard
                className="p-7"
                style={{ background: '#E8D1A7', borderColor: '#D4BC8E' }}
              >
                <div className="text-3xl md:text-4xl font-black mb-2 leading-none text-[#442D1C] flex items-center gap-1">
                  Top 3K
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#84592B]">
                  Amazon ML School
                </div>
                <div className="text-[11px] text-[#743014] mt-2 font-medium">
                  Out of 1.3 Lakh Applicants
                </div>
              </GlareCard>

              {/* Stat 3: Flipkart GRiD 8.0 */}
              <GlareCard
                className="p-7"
                style={{ background: '#E8D1A7', borderColor: '#D4BC8E' }}
              >
                <div className="text-3xl md:text-4xl font-black mb-2 leading-none text-[#442D1C]">
                  1.65L+
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#84592B]">
                  Flipkart GRiD 8.0
                </div>
                <div className="text-[11px] text-[#743014] mt-2 font-medium">
                  National Semifinalist
                </div>
              </GlareCard>

              {/* Stat 4: XcelCrowd SprintOne */}
              <GlareCard
                className="p-7"
                style={{ background: '#442D1C', borderColor: '#442D1C' }}
              >
                <div className="text-3xl md:text-4xl font-black mb-2 leading-none text-[#E8D1A7]">
                  1st Place
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#9D9167]">
                  XcelCrowd SprintOne
                </div>
                <div className="text-[11px] text-[#E8D1A7]/60 mt-2 font-medium">
                  Engineering Challenge
                </div>
              </GlareCard>

              {/* Stat 5: LeetCode Problems */}
              <GlareCard
                className="col-span-2 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{ background: '#84592B', borderColor: '#84592B' }}
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-black leading-tight text-[#E8D1A7]">
                    300+
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider mt-1 text-[#F5ECDA]">
                    LeetCode Problems Solved
                  </div>
                  <div className="text-xs text-[#E8D1A7]/80 mt-1 font-medium">
                    Data Structures & Algorithms · Problem Solving · Competitive Coding
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#442D1C] text-[#E8D1A7] hover:bg-[#743014] text-xs font-bold shrink-0 flex items-center gap-2 transition-colors duration-200"
                >
                  <span>View LeetCode Profile</span>
                  <ArrowRight size={14} />
                </a>
              </GlareCard>
            </div>

          </div>

        </div>
      </div>

      {/* Infinite Skills Marquee Ribbon */}
      <div
        className="py-5 overflow-hidden border-t border-b"
        style={{ borderColor: '#D4BC8E', background: '#442D1C' }}
      >
        <div className="marquee-track select-none">
          {[...SKILL_MARQUEE, ...SKILL_MARQUEE, ...SKILL_MARQUEE].map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-4 mx-4 text-sm font-semibold uppercase tracking-widest whitespace-nowrap text-[#E8D1A7]"
            >
              <span>{skill}</span>
              <span className="text-[#84592B] text-base">✦</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

import React from 'react';
import { Layers, Brain, Cloud, Code, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { EXPERTISE_AREAS } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Layers: Layers,
  Brain: Brain,
  Cloud: Cloud,
  Code: Code
};

export const Expertise: React.FC = () => {
  return (
    <section
      id="expertise"
      className="py-24 px-6 relative overflow-hidden text-[#E8D1A7]"
      style={{ background: '#442D1C' }}
    >
      {/* Ambient background glow orbs */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#84592B', filter: 'blur(70px)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#9D9167', filter: 'blur(70px)' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="section-eyebrow mb-4" style={{ color: '#9D9167' }}>
            <span className="w-8 h-px inline-block bg-[#9D9167]" />
            What I Do
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter"
            style={{ color: '#E8D1A7' }}
          >
            Expertise &amp;
            <br />
            <span className="font-display italic" style={{ color: '#9D9167' }}>
              Capabilities
            </span>
          </h2>
        </div>

        {/* Expertise List */}
        <div className="space-y-0">
          {EXPERTISE_AREAS.map((area, idx) => {
            const IconComponent = iconMap[area.icon] || Code;
            return (
              <div
                key={area.title}
                className="group border-t py-10 flex flex-col md:flex-row md:items-start lg:items-center gap-6 md:gap-10 transition-all duration-300 hover:pl-3"
                style={{ borderColor: 'rgba(232, 209, 167, 0.15)' }}
              >
                {/* Big Number */}
                <span
                  className="font-black text-6xl md:text-7xl leading-none select-none shrink-0 transition-colors group-hover:text-[#E8D1A7]/40"
                  style={{
                    color: 'rgba(232, 209, 167, 0.14)',
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  {area.number}
                </span>

                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#84592B]/40"
                  style={{
                    background: 'rgba(232, 209, 167, 0.08)',
                    border: '1px solid rgba(232, 209, 167, 0.15)',
                  }}
                >
                  <IconComponent className="w-6 h-6 text-[#9D9167] group-hover:text-[#E8D1A7] transition-colors" />
                </div>

                {/* Description & Tech Tags */}
                <div className="flex-1">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-3 tracking-tight transition-colors group-hover:text-amber-200"
                    style={{ color: '#E8D1A7' }}
                  >
                    {area.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed mb-4 max-w-3xl"
                    style={{ color: 'rgba(232, 209, 167, 0.75)' }}
                  >
                    {area.description}
                  </p>
                  
                  {/* Key Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {area.keyTech.map((tech) => (
                      <span
                        key={tech}
                        className="pill transition-colors duration-200"
                        style={{
                          background: 'rgba(157, 145, 103, 0.15)',
                          color: '#9D9167',
                          border: '1px solid rgba(157, 145, 103, 0.3)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow Icon */}
                <div
                  className="hidden md:flex shrink-0 w-11 h-11 rounded-full items-center justify-center border transition-all duration-300 group-hover:bg-[#84592B] group-hover:scale-110"
                  style={{
                    borderColor: 'rgba(232, 209, 167, 0.2)',
                    color: '#9D9167',
                  }}
                >
                  <ArrowUpRight size={18} className="group-hover:text-[#E8D1A7] transition-colors" />
                </div>
              </div>
            );
          })}

          <div className="border-t" style={{ borderColor: 'rgba(232, 209, 167, 0.15)' }} />
        </div>

      </div>
    </section>
  );
};

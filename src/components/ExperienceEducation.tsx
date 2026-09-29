import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { EXPERIENCES, EDUCATION_DATA } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#F5ECDA' }}
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="section-eyebrow mb-4">
            <span className="w-8 h-px inline-block bg-[#84592B]" />
            My Journey
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter"
            style={{ color: '#442D1C' }}
          >
            Experience &amp;
            <br />
            <span className="font-display italic" style={{ color: '#743014' }}>
              Education
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Experience & Leadership Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0"
                style={{ background: '#442D1C', color: '#E8D1A7' }}
              >
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#442D1C]">
                Experience &amp; Leadership
              </h3>
            </div>

            {/* Simple and Neat Vertical Timeline */}
            <div className="relative">
              {/* Continuous vertical timeline connector line */}
              <div
                className="absolute left-3 top-3 bottom-3 w-px"
                style={{ background: 'linear-gradient(to bottom, #84592B, #D4BC8E)' }}
              />

              <div className="space-y-10 pl-10">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Ring Bullet Point centered on line */}
                    <div
                      className="absolute -left-[2.35rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125"
                      style={{ background: '#F5ECDA', borderColor: '#84592B' }}
                    />

                    {/* Role Title & Period Pill */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-lg font-bold text-[#442D1C] group-hover:text-[#743014] transition-colors">
                        {exp.role}
                      </h4>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                        style={{ background: '#E8D1A7', color: '#84592B' }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Organization */}
                    <div className="text-sm font-semibold mb-2 text-[#743014]">
                      {exp.organization}
                    </div>

                    {/* Clean Simple Description */}
                    <p className="text-sm leading-relaxed text-[#5A3E28]">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education */}
          <div>
            <div className="flex items-center gap-3.5 mb-8">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md shrink-0"
                style={{ background: '#5A3822', color: '#E8D1A7' }}
              >
                <GraduationCap size={22} />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-[#442D1C]">
                Education
              </h3>
            </div>

            <div className="space-y-5">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl p-6 sm:p-7 border border-[#D8BF95]/70 transition-all hover:shadow-md"
                  style={{ background: '#E8D1A7' }}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="text-lg sm:text-xl font-bold leading-tight text-[#442D1C]">
                      {edu.degree}
                    </h4>

                    <span
                      className="text-xs sm:text-sm font-bold shrink-0 px-3.5 py-1 rounded-full shadow-xs"
                      style={{ background: '#442D1C', color: '#E8D1A7' }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-[#84592B] mb-4">
                    {edu.institution}
                  </p>

                  <div>
                    <span
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs"
                      style={{ background: '#5A3822', color: '#F5ECDA' }}
                    >
                      <GraduationCap size={15} className="text-[#D4BC8E]" />
                      <span>{edu.score}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

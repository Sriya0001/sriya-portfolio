import React from 'react';
import { Trophy, Award, Zap, Star, CheckCircle, Shield, Sparkles, Flame, Users, BookOpen } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS, TECHNICAL_SKILLS_DETAILED, POSITIONS_OF_RESPONSIBILITY } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  Zap: Zap,
  Award: Award,
  Trophy: Trophy,
  Star: Star
};

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#442D1C', color: '#E8D1A7' }}
    >
      {/* Glow orbs */}
      <div
        className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#84592B', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#9D9167', filter: 'blur(80px)' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="section-eyebrow mb-4" style={{ color: '#9D9167' }}>
            <span className="w-8 h-px inline-block bg-[#9D9167]" />
            Honors &amp; Recognition
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter"
            style={{ color: '#E8D1A7' }}
          >
            Technical
            <br />
            <span className="font-display italic" style={{ color: '#9D9167' }}>
              Achievements &amp; Credentials
            </span>
          </h2>
        </div>

        {/* 6 Major Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ACHIEVEMENTS.map((ach) => {
            const IconComp = iconMap[ach.iconName] || Trophy;
            return (
              <div
                key={ach.title}
                className="p-7 rounded-3xl border transition-all duration-300 hover:translate-y-[-4px] group flex flex-col justify-between"
                style={{
                  background: 'rgba(232, 209, 167, 0.05)',
                  borderColor: 'rgba(232, 209, 167, 0.15)',
                }}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(232, 209, 167, 0.1)',
                        border: '1px solid rgba(232, 209, 167, 0.2)',
                      }}
                    >
                      <IconComp size={22} className="text-amber-300" />
                    </div>
                    <span
                      className="pill text-xs font-bold"
                      style={{
                        background: 'rgba(132, 89, 43, 0.35)',
                        color: '#E8D1A7',
                        border: '1px solid rgba(232, 209, 167, 0.25)',
                      }}
                    >
                      {ach.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#E8D1A7] mb-1 group-hover:text-amber-200 transition-colors">
                    {ach.title}
                  </h3>

                  <p className="text-xs font-bold text-[#9D9167] uppercase tracking-wider mb-3">
                    {ach.subtitle}
                  </p>

                  <p className="text-sm leading-relaxed text-[#E8D1A7]/75 mb-4">
                    {ach.description}
                  </p>
                </div>

                {ach.rank && (
                  <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-amber-300">
                    <Flame size={14} />
                    <span>{ach.rank}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Positions of Responsibility */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-[#E8D1A7] flex items-center gap-2">
            <Users className="text-[#9D9167]" />
            <span>Positions of Responsibility &amp; Leadership</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {POSITIONS_OF_RESPONSIBILITY.map((pos, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  background: 'rgba(232, 209, 167, 0.04)',
                  borderColor: 'rgba(232, 209, 167, 0.12)',
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#84592B]/40 text-[#E8D1A7] border border-[#84592B]">
                    {pos.period}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#E8D1A7] mb-1">
                  {pos.role}
                </h4>
                <p className="text-xs font-semibold text-[#9D9167] mb-3">
                  {pos.organization}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-[#E8D1A7]/75">
                  {pos.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-[#E8D1A7] flex items-center gap-2">
            <Shield className="text-[#9D9167]" />
            <span>Professional Certifications</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border transition-all hover:bg-white/5"
                style={{
                  background: 'rgba(232, 209, 167, 0.04)',
                  borderColor: 'rgba(232, 209, 167, 0.12)',
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#84592B]/30 flex items-center justify-center text-amber-300">
                    <CheckCircle size={16} />
                  </div>
                  {cert.grade && (
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${
                        cert.badgeType === 'gold'
                          ? 'bg-amber-400 text-stone-900'
                          : cert.badgeType === 'silver'
                          ? 'bg-slate-300 text-stone-900'
                          : 'bg-[#84592B] text-[#E8D1A7]'
                      }`}
                    >
                      {cert.grade}
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-sm text-[#E8D1A7] mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-[#9D9167]">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div
          className="p-8 rounded-3xl border"
          style={{
            background: 'rgba(232, 209, 167, 0.04)',
            borderColor: 'rgba(232, 209, 167, 0.12)',
          }}
        >
          <h3 className="text-xl font-bold mb-6 text-[#E8D1A7] flex items-center gap-2">
            <Sparkles className="text-amber-300" size={20} />
            <span>Technical Skills Matrix</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Languages */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#9D9167] mb-2.5">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {TECHNICAL_SKILLS_DETAILED.languages.map((item) => (
                  <span
                    key={item}
                    className="pill text-xs font-medium"
                    style={{
                      background: 'rgba(232, 209, 167, 0.08)',
                      color: '#E8D1A7',
                      border: '1px solid rgba(232, 209, 167, 0.15)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Web */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#9D9167] mb-2.5">
                Web Development &amp; Frameworks
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {TECHNICAL_SKILLS_DETAILED.webFrameworks.map((item) => (
                  <span
                    key={item}
                    className="pill text-xs font-medium"
                    style={{
                      background: 'rgba(232, 209, 167, 0.08)',
                      color: '#E8D1A7',
                      border: '1px solid rgba(232, 209, 167, 0.15)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing & Performance */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#9D9167] mb-2.5">
                Testing &amp; Performance Engineering
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {TECHNICAL_SKILLS_DETAILED.testingPerformance.map((item) => (
                  <span
                    key={item}
                    className="pill text-xs font-medium"
                    style={{
                      background: 'rgba(132, 89, 43, 0.3)',
                      color: '#E8D1A7',
                      border: '1px solid rgba(232, 209, 167, 0.2)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & ML */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#9D9167] mb-2.5">
                AI, Generative AI &amp; Agentic Systems
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {TECHNICAL_SKILLS_DETAILED.aiMl.map((item) => (
                  <span
                    key={item}
                    className="pill text-xs font-medium"
                    style={{
                      background: 'rgba(232, 209, 167, 0.08)',
                      color: '#E8D1A7',
                      border: '1px solid rgba(232, 209, 167, 0.15)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#9D9167] mb-2.5">
                Cloud &amp; Infrastructure
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {TECHNICAL_SKILLS_DETAILED.cloudInfrastructure.map((item) => (
                  <span
                    key={item}
                    className="pill text-xs font-medium"
                    style={{
                      background: 'rgba(232, 209, 167, 0.08)',
                      color: '#E8D1A7',
                      border: '1px solid rgba(232, 209, 167, 0.15)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases & Monitoring */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#9D9167] mb-2.5">
                Databases &amp; Observability
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {TECHNICAL_SKILLS_DETAILED.databasesMonitoring.map((item) => (
                  <span
                    key={item}
                    className="pill text-xs font-medium"
                    style={{
                      background: 'rgba(232, 209, 167, 0.08)',
                      color: '#E8D1A7',
                      border: '1px solid rgba(232, 209, 167, 0.15)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Core CS Concepts */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#9D9167] mb-2.5">
                Core Computer Science Concepts
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {TECHNICAL_SKILLS_DETAILED.coreConcepts.map((item) => (
                  <span
                    key={item}
                    className="pill text-xs font-medium"
                    style={{
                      background: 'rgba(132, 89, 43, 0.25)',
                      color: '#E8D1A7',
                      border: '1px solid rgba(232, 209, 167, 0.2)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

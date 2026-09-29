import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, Award, BookOpen, Briefcase, Code, CheckCircle, Sparkles, Users } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, PROJECTS, ACHIEVEMENTS, CERTIFICATIONS, TECHNICAL_SKILLS_DETAILED, POSITIONS_OF_RESPONSIBILITY } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onNotify }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto">
      {/* Background overlay click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FDFBF7] text-[#442D1C] rounded-3xl shadow-2xl border border-[#D4BC8E] overflow-hidden flex flex-col z-10 animate-scale-in">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4BC8E]/60 bg-[#F5ECDA]/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#442D1C] text-[#E8D1A7] flex items-center justify-center font-bold text-xs">
              SK
            </div>
            <div>
              <h3 className="font-bold text-base text-[#442D1C] leading-none">Curriculum Vitae</h3>
              <p className="text-xs text-[#84592B] font-medium mt-0.5">{PERSONAL_INFO.name} · {PERSONAL_INFO.degree}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#E8D1A7] text-[#442D1C] hover:bg-[#D4BC8E] transition-colors"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#442D1C]/10 text-[#442D1C] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:space-y-6">
          
          {/* Header Contact Block */}
          <div className="text-center border-b border-[#D4BC8E]/60 pb-6">
            <h1 className="text-3xl sm:text-4xl font-black text-[#442D1C] tracking-tight mb-2">
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm font-medium text-[#743014]">
              <span className="flex items-center gap-1">
                <Phone size={13} /> {PERSONAL_INFO.phone}
              </span>
              <span className="text-[#84592B]">•</span>
              <span className="flex items-center gap-1">
                <Mail size={13} /> {PERSONAL_INFO.email}
              </span>
              <span className="text-[#84592B]">•</span>
              <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                LinkedIn <ExternalLink size={11} />
              </a>
              <span className="text-[#84592B]">•</span>
              <a href={PERSONAL_INFO.links.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                GitHub <ExternalLink size={11} />
              </a>
              <span className="text-[#84592B]">•</span>
              <a href={PERSONAL_INFO.links.leetcode} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                LeetCode <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#743014] border-b border-[#84592B]/40 pb-1 mb-2.5 flex items-center gap-2">
              <Sparkles size={14} className="text-[#84592B]" /> Career Objective
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#5A3E28]">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#743014] border-b border-[#84592B]/40 pb-1 mb-3 flex items-center gap-2">
              <BookOpen size={14} className="text-[#84592B]" /> Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-[#442D1C]">{edu.institution}</div>
                    <div className="text-xs text-[#743014] italic">{edu.degree}</div>
                  </div>
                  <div className="text-right sm:text-right shrink-0">
                    <span className="font-bold text-[#84592B]">{edu.score}</span>
                    <div className="text-[11px] text-[#9D9167] font-semibold">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#743014] border-b border-[#84592B]/40 pb-1 mb-3 flex items-center gap-2">
              <Briefcase size={14} className="text-[#84592B]" /> Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <div className="font-bold text-[#442D1C]">
                      {exp.organization} — <span className="font-semibold text-[#743014]">{exp.role}</span>
                    </div>
                    <div className="text-xs font-semibold text-[#84592B] shrink-0">{exp.period}</div>
                  </div>
                  <p className="text-[#5A3E28] leading-relaxed mb-1.5">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#5A3E28]/90 pl-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#743014] border-b border-[#84592B]/40 pb-1 mb-3 flex items-center gap-2">
              <Code size={14} className="text-[#84592B]" /> Projects
            </h2>
            <div className="space-y-5">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <div className="font-bold text-[#442D1C]">{proj.title}</div>
                    <div className="text-xs text-[#84592B] font-semibold">{proj.tag}</div>
                  </div>
                  <p className="text-xs text-[#5A3E28] mb-1.5">{proj.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#5A3E28] pl-1 mb-1.5">
                    {proj.architectureHighlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-semibold text-[#743014]">
                    Tech Stack: <span className="text-[#5A3E28] font-normal">{proj.tech.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#743014] border-b border-[#84592B]/40 pb-1 mb-3 flex items-center gap-2">
              <Users size={14} className="text-[#84592B]" /> Positions of Responsibility
            </h2>
            <div className="space-y-2.5">
              {POSITIONS_OF_RESPONSIBILITY.map((pos, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <strong className="text-[#442D1C]">{pos.role} — {pos.organization}</strong>
                    <span className="text-xs text-[#84592B] font-semibold">{pos.period}</span>
                  </div>
                  <p className="text-xs text-[#5A3E28]">{pos.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Achievements */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#743014] border-b border-[#84592B]/40 pb-1 mb-3 flex items-center gap-2">
              <Award size={14} className="text-[#84592B]" /> Technical Achievements &amp; Hackathons
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#5A3E28] pl-1">
              <li>
                <strong className="text-[#442D1C]">Selected for Amazon ML Summer School 2026:</strong> Ranking among the top 3,000 out of 1.3 lakh applicants.
              </li>
              <li>
                <strong className="text-[#442D1C]">National Semifinalist, Flipkart GRiD 8.0:</strong> Among 1.65 lakh+ registrations nationwide.
              </li>
              <li>
                <strong className="text-[#442D1C]">1st Place – XcelCrowd SprintOne Engineering Challenge:</strong> For building a real-world engineering solution.
              </li>
              <li>
                <strong className="text-[#442D1C]">1st Runner-up in GreenTech Hackathon:</strong> Competing among top 30 teams from a pool of 200+ registrations.
              </li>
              <li>
                <strong className="text-[#442D1C]">Recognised among top ideas at All India MSME Hackathon 2025:</strong> Selected from 250+ registrations.
              </li>
              <li>
                <strong className="text-[#442D1C]">Qualified for Round 2:</strong> Adobe India Hackathon 2025 &amp; Myntra WeForShe Hackerramp 2025.
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#743014] border-b border-[#84592B]/40 pb-1 mb-3 flex items-center gap-2">
              <CheckCircle size={14} className="text-[#84592B]" /> Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#5A3E28]">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#E8D1A7]/40 border border-[#D4BC8E]/60 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#442D1C]">{cert.name}</div>
                    <div className="text-[11px] text-[#743014]">{cert.issuer}</div>
                  </div>
                  {cert.grade && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#84592B] text-[#E8D1A7]">
                      {cert.grade}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#743014] border-b border-[#84592B]/40 pb-1 mb-3 flex items-center gap-2">
              <Code size={14} className="text-[#84592B]" /> Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <strong className="text-[#442D1C]">Languages: </strong>
                <span className="text-[#5A3E28]">{TECHNICAL_SKILLS_DETAILED.languages.join(', ')}</span>
              </div>
              <div>
                <strong className="text-[#442D1C]">Web &amp; Frameworks: </strong>
                <span className="text-[#5A3E28]">{TECHNICAL_SKILLS_DETAILED.webFrameworks.join(', ')}</span>
              </div>
              <div>
                <strong className="text-[#442D1C]">Testing &amp; Performance: </strong>
                <span className="text-[#5A3E28]">{TECHNICAL_SKILLS_DETAILED.testingPerformance.join(', ')}</span>
              </div>
              <div>
                <strong className="text-[#442D1C]">Cloud &amp; Infrastructure: </strong>
                <span className="text-[#5A3E28]">{TECHNICAL_SKILLS_DETAILED.cloudInfrastructure.join(', ')}</span>
              </div>
              <div>
                <strong className="text-[#442D1C]">Databases &amp; Observability: </strong>
                <span className="text-[#5A3E28]">{TECHNICAL_SKILLS_DETAILED.databasesMonitoring.join(', ')}</span>
              </div>
              <div>
                <strong className="text-[#442D1C]">AI &amp; Machine Learning: </strong>
                <span className="text-[#5A3E28]">{TECHNICAL_SKILLS_DETAILED.aiMl.join(', ')}</span>
              </div>
              <div>
                <strong className="text-[#442D1C]">Core Concepts: </strong>
                <span className="text-[#5A3E28]">{TECHNICAL_SKILLS_DETAILED.coreConcepts.join(', ')}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F5ECDA]/80 border-t border-[#D4BC8E]/60 flex items-center justify-between">
          <span className="text-xs text-[#84592B]">Ready for Software Engineering, Backend &amp; AI Roles</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full text-xs font-bold text-[#442D1C] hover:bg-[#442D1C]/10 transition-colors"
            >
              Close
            </button>
            <a
              href={PERSONAL_INFO.links.email}
              className="px-5 py-2 rounded-full text-xs font-bold bg-[#442D1C] text-[#E8D1A7] hover:bg-[#743014] transition-colors"
            >
              Contact Sriya
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

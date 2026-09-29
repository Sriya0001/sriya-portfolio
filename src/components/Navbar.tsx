import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onResumeClick: () => void;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-left text-lg font-black tracking-tight transition-transform hover:scale-105"
            style={{ color: '#442D1C' }}
          >
            <span className="w-8 h-8 rounded-lg bg-[#442D1C] text-[#E8D1A7] flex items-center justify-center font-black text-xs group-hover:bg-[#84592B] transition-colors">
              SK
            </span>
            <span className="font-extrabold tracking-tight">
              Sriya<span className="text-[#84592B]">.</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                    isActive ? 'text-[#743014] font-bold active' : 'text-[#442D1C] hover:text-[#743014]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Resume Button */}
            <button
              onClick={onResumeClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border border-[#84592B]/40 text-[#442D1C] hover:bg-[#84592B]/10 transition-all hover:scale-105"
            >
              <FileText size={13} />
              <span>Resume</span>
            </button>

            {/* Primary CTA */}
            <a
              href={PERSONAL_INFO.links.email}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold bg-[#442D1C] text-[#E8D1A7] hover:bg-[#743014] shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#E8D1A7]/40 text-[#442D1C] hover:bg-[#E8D1A7] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between p-8 bg-[#F5ECDA] text-[#442D1C] animate-fade-in md:hidden">
          
          <div className="flex items-center justify-between border-b border-[#D4BC8E]/60 pb-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#442D1C] text-[#E8D1A7] flex items-center justify-center font-black text-xs">
                SK
              </span>
              <span className="font-extrabold text-lg">Sriya Kunisetty</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-[#E8D1A7]/50 text-[#442D1C]"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 my-auto py-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-3xl font-extrabold tracking-tight text-[#442D1C] hover:text-[#743014] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D4BC8E]/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="w-full py-3.5 rounded-full font-bold text-sm border-2 border-[#442D1C] text-[#442D1C] flex items-center justify-center gap-2"
            >
              <FileText size={16} /> View Curriculum Vitae
            </button>
            <a
              href={PERSONAL_INFO.links.email}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full font-bold text-sm bg-[#442D1C] text-[#E8D1A7] flex items-center justify-center gap-2"
            >
              <Sparkles size={16} /> Get in Touch
            </a>
          </div>

        </div>
      )}
    </>
  );
};

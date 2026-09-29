import React, { useState } from 'react';
import { Mail, Phone, Send, ArrowUp, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

interface ContactProps {
  onNotify: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, label: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onNotify(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onNotify('Please fill in all required fields');
      return;
    }

    setSubmitted(true);
    onNotify(`Thank you ${formData.name}! Your message has been prepared.`);
    
    // Confetti effect
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#E8D1A7', '#84592B', '#743014', '#9D9167', '#D4BC8E']
      });
    } catch {
      // ignore
    }

    // Direct mailto link fallback
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Hi Sriya,\n\n${formData.message}\n\nFrom,\n${formData.name} (${formData.email})`)}`;
    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      link: PERSONAL_INFO.links.github,
      handle: '@Sriya0001',
      action: 'link'
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      link: PERSONAL_INFO.links.linkedin,
      handle: 'sriya-kunisetty-60719a290',
      action: 'link'
    },
    {
      name: 'LeetCode',
      icon: LeetcodeIcon,
      link: PERSONAL_INFO.links.leetcode,
      handle: 'sriya_kunisetty',
      action: 'link'
    },
    {
      name: 'Email',
      icon: Mail,
      link: PERSONAL_INFO.links.email,
      handle: PERSONAL_INFO.email,
      copyText: PERSONAL_INFO.email,
      action: 'copy'
    },
    {
      name: 'Phone',
      icon: Phone,
      link: PERSONAL_INFO.links.phone,
      handle: PERSONAL_INFO.phone,
      copyText: PERSONAL_INFO.phone,
      action: 'copy'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#442D1C', color: '#E8D1A7' }}
    >
      {/* Subtle top spotlight */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
        style={{ background: '#84592B', filter: 'blur(90px)' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Typographic Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow justify-center mb-6" style={{ color: '#9D9167' }}>
            <span className="w-8 h-px inline-block bg-[#9D9167]" />
            Get In Touch
            <span className="w-8 h-px inline-block bg-[#9D9167]" />
          </p>

          <h2
            className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-none tracking-tighter mb-6"
            style={{ color: '#E8D1A7' }}
          >
            Let's Create
            <br />
            <span className="font-display italic" style={{ color: '#9D9167' }}>
              Something
            </span>
            <br />
            Amazing
          </h2>

          <p
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 text-[#E8D1A7]/70"
          >
            I'm always excited to explore impactful engineering opportunities, collaborate on innovative systems, or discuss scalable backend architectures. Feel free to reach out!
          </p>

          <a
            href={PERSONAL_INFO.links.email}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
            style={{ background: '#E8D1A7', color: '#442D1C' }}
          >
            <span>Say Hello Directly</span>
            <Sparkles size={18} className="text-[#743014]" />
          </a>
        </div>

        {/* Interactive Quick Form & Details Split */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-stretch">
          
          {/* Left: Contact Info & Status */}
          <div
            className="lg:col-span-5 p-8 rounded-3xl border flex flex-col justify-between"
            style={{
              background: 'rgba(232, 209, 167, 0.04)',
              borderColor: 'rgba(232, 209, 167, 0.12)',
            }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#84592B]/30 border border-[#9D9167]/30 text-xs font-bold text-amber-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Software Engineering Roles
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#E8D1A7]">
                Connect with Sriya
              </h3>

              <p className="text-sm text-[#E8D1A7]/70 leading-relaxed mb-8">
                Based in Hyderabad, India. Open to high-impact software engineering roles, full-stack architecture, and machine learning initiatives.
              </p>

              <div className="space-y-4">
                <div
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'Email address', 'email-card')}
                  className="p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all hover:bg-white/5 group"
                  style={{
                    background: 'rgba(232, 209, 167, 0.06)',
                    borderColor: 'rgba(232, 209, 167, 0.15)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#84592B]/40 flex items-center justify-center text-[#E8D1A7]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-[#9D9167] font-semibold">Email</div>
                      <div className="text-sm font-bold text-[#E8D1A7]">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 text-[#9D9167] group-hover:text-[#E8D1A7]">
                    {copiedKey === 'email-card' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </div>
                </div>

                <div
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone number', 'phone-card')}
                  className="p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all hover:bg-white/5 group"
                  style={{
                    background: 'rgba(232, 209, 167, 0.06)',
                    borderColor: 'rgba(232, 209, 167, 0.15)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#84592B]/40 flex items-center justify-center text-[#E8D1A7]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-[#9D9167] font-semibold">Phone</div>
                      <div className="text-sm font-bold text-[#E8D1A7]">{PERSONAL_INFO.phone}</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 text-[#9D9167] group-hover:text-[#E8D1A7]">
                    {copiedKey === 'phone-card' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#9D9167]">
              ⚡ Usually responds within 24 hours.
            </div>
          </div>

          {/* Right: Message Form */}
          <div
            className="lg:col-span-7 p-8 rounded-3xl border"
            style={{
              background: 'rgba(232, 209, 167, 0.04)',
              borderColor: 'rgba(232, 209, 167, 0.12)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={20} className="text-amber-300" />
              <h3 className="text-xl font-bold text-[#E8D1A7]">Send a Direct Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9D9167] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/15 text-[#E8D1A7] placeholder-[#E8D1A7]/30 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9D9167] mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/15 text-[#E8D1A7] placeholder-[#E8D1A7]/30 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9D9167] mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full-Stack / ML Opportunity or Collaboration"
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/15 text-[#E8D1A7] placeholder-[#E8D1A7]/30 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9D9167] mb-1.5">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Sriya, I saw your portfolio and would love to discuss..."
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/15 text-[#E8D1A7] placeholder-[#E8D1A7]/30 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-98 shadow-md"
                style={{ background: '#E8D1A7', color: '#442D1C' }}
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>

              {submitted && (
                <p className="text-center text-xs text-amber-300 font-semibold pt-2 animate-fade-in">
                  ✓ Prepared! Click send in your mail client to dispatch.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px mb-12" style={{ background: 'rgba(232, 209, 167, 0.15)' }} />

        {/* Social Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {socialLinks.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.link}
                target={item.action === 'link' ? '_blank' : undefined}
                rel={item.action === 'link' ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (item.action === 'copy' && item.copyText) {
                    e.preventDefault();
                    handleCopy(item.copyText, item.name, item.name);
                  }
                }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] hover:bg-white/5 group text-center cursor-pointer"
                style={{
                  background: 'rgba(232, 209, 167, 0.05)',
                  borderColor: 'rgba(232, 209, 167, 0.12)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: 'rgba(232, 209, 167, 0.08)' }}
                >
                  <IconComponent size={22} className="text-[#9D9167] group-hover:text-[#E8D1A7] transition-colors" />
                </div>

                <div className="w-full">
                  <div className="text-sm font-bold mb-0.5 text-[#E8D1A7]">
                    {item.name}
                  </div>
                  <div className="text-[11px] truncate max-w-full text-[#E8D1A7]/50 group-hover:text-[#E8D1A7]/80">
                    {item.handle}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Footer */}
        <div
          className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(232, 209, 167, 0.12)' }}
        >
          <p className="text-xs sm:text-sm text-[#E8D1A7]/50">
            © {new Date().getFullYear()} {PERSONAL_INFO.name} — Designed &amp; Engineered with React &amp; Tailwind CSS
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#9D9167] hover:text-[#E8D1A7] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </section>
  );
};

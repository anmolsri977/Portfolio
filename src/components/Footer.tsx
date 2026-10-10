import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { developerInfo, socialLinks } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stats', href: '#stats' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#070b14] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Left: Branding & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-slate-900 border border-white/10 flex items-center justify-center text-brand-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-slate-100 text-base">
                {developerInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Computer Science &amp; Engineering Student | Java &amp; Spring Boot Developer
            </p>
          </div>

          {/* Center: Navigation links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded px-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Socials & Back to Top */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.icon === 'mail' ? undefined : '_blank'}
                rel={social.icon === 'mail' ? undefined : 'noopener noreferrer'}
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-200 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                title={`${social.name} link`}
                aria-label={social.name}
              >
                {social.icon === 'github' && <GithubIcon className="w-4 h-4" />}
                {social.icon === 'linkedin' && <LinkedinIcon className="w-4 h-4" />}
                {social.icon === 'mail' && <Mail className="w-4 h-4" />}
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              title="Back to top of page"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {CURRENT_YEAR} {developerInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, Vite &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

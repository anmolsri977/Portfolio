import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal, ArrowUpRight } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'stats', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Stats', href: '#stats', id: 'stats' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-white/[0.08] shadow-subtle'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand / Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-lg p-1 -ml-1"
            id="brand-logo"
            aria-label={`${developerInfo.name} - Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-brand-400 group-hover:border-brand-500/50 group-hover:shadow-glow transition-all duration-200">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold tracking-tight text-sm sm:text-base text-slate-100 group-hover:text-white leading-tight">
                {developerInfo.name}
              </span>
              <span className="text-[11px] font-mono text-brand-400 hidden sm:inline-block">
                Java &amp; Spring Boot Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Desktop Navigation">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                    isActive
                      ? 'text-brand-400 bg-brand-500/10 border border-brand-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="h-4 w-px bg-white/10 mx-2" aria-hidden="true" />

            {/* Resume Button */}
            <a
              href={developerInfo.resumeUrl}
              download="Anmol_Kumar_Srivastava_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-white/15 hover:border-brand-500/40 rounded-lg transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              id="desktop-resume-btn"
              title="Download Anmol Kumar Srivastava Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-brand-400 group-hover:scale-105 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={developerInfo.resumeUrl}
              download="Anmol_Kumar_Srivastava_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-medium text-brand-400 border border-brand-500/30 rounded-md bg-brand-500/10"
              id="mobile-resume-quick-btn"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              id="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-white/[0.08] bg-[#090d16]/98 backdrop-blur-xl px-4 pt-3 pb-6 transition-all duration-200"
          id="mobile-nav-panel"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] active:bg-brand-500/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-slate-600">→</span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/[0.08]">
              <a
                href={developerInfo.resumeUrl}
                download="Anmol_Kumar_Srivastava_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-brand-500/15 border border-brand-500/30 text-brand-300 font-medium text-sm hover:bg-brand-500/25 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

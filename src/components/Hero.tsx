import React from 'react';
import { ArrowDown, FileText, Mail, Sparkles, Layers } from 'lucide-react';
import { developerInfo, socialLinks } from '../data/portfolioData';
import { TerminalCard } from './TerminalCard';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-8 pb-16 lg:py-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[300px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headings, introduction, CTAs, social links */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs text-slate-300 mb-6 backdrop-blur-sm shadow-subtle hover:border-brand-500/30 transition-all duration-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="font-mono text-[11px] text-slate-300">
                {developerInfo.currentStatus}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-300">
                {developerInfo.name}.
              </span>
            </h1>

            {/* Subtitle / Role */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 leading-snug mb-4 max-w-2xl">
              {developerInfo.heroRole}
            </h2>

            {/* Supporting text */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-8">
              {developerInfo.heroSupportingText}
            </p>

            {/* Action Buttons: Primary & Secondary */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-slate-950 font-semibold text-sm hover:bg-brand-400 active:bg-brand-600 transition-all duration-200 shadow-glow hover:shadow-brand-500/30 min-w-[145px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                id="hero-view-projects-btn"
              >
                <Layers className="w-4 h-4 text-slate-950" />
                <span>View Projects</span>
              </a>

              <a
                href={developerInfo.resumeUrl}
                download="Anmol_Kumar_Srivastava_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 text-slate-200 border border-white/15 font-medium text-sm hover:bg-slate-800/90 hover:text-white hover:border-slate-500 transition-all duration-200 min-w-[155px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                id="hero-download-resume-btn"
                title="Download Anmol Kumar Srivastava Resume (PDF)"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Contact Buttons */}
            <div className="pt-6 border-t border-white/[0.08] w-full flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-slate-400">
              <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">
                Connect:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => {
                  const getIcon = () => {
                    switch (social.icon) {
                      case 'github':
                        return <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-200" />;
                      case 'linkedin':
                        return <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors duration-200" />;
                      case 'mail':
                        return <Mail className="w-4 h-4 text-slate-400 group-hover:text-brand-400 transition-colors duration-200" />;
                      default:
                        return <Sparkles className="w-4 h-4" />;
                    }
                  };

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.icon === 'mail' ? undefined : '_blank'}
                      rel={social.icon === 'mail' ? undefined : 'noopener noreferrer'}
                      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/[0.08] hover:border-white/20 hover:bg-slate-800/80 text-slate-300 hover:text-white transition-all duration-200 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                      title={`${social.name} profile link`}
                    >
                      {getIcon()}
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <TerminalCard />
          </div>

        </div>
      </div>

      {/* Subtle scroll down indicator */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-500 text-xs font-mono">
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-slate-400" />
      </div>
    </section>
  );
};

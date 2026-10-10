import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { developerInfo, socialLinks } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailSocial = socialLinks.find((s) => s.name === 'Email');
  const githubSocial = socialLinks.find((s) => s.name === 'GitHub');
  const linkedinSocial = socialLinks.find((s) => s.name === 'LinkedIn');

  const copyEmailToClipboard = () => {
    const emailToCopy = developerInfo.email || emailSocial?.usernamePlaceholder || 'srivastavaanmol977@gmail.com';
    navigator.clipboard.writeText(emailToCopy);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/80 border border-white/[0.1] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[250px] bg-brand-500/10 blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            {/* Small pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-mono text-xs uppercase tracking-wider mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            {/* Main CTA Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Let's Build Something Useful.
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
              {developerInfo.contactSupportingText}
            </p>

            {/* Hierarchy Item 1: Email (Direct Email Action Card) */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-slate-950/80 border border-white/10 mb-8 w-full max-w-lg mx-auto shadow-subtle hover:border-brand-500/30 transition-all duration-200">
              <a
                href={emailSocial?.url || `mailto:${developerInfo.email}`}
                className="flex items-center gap-2.5 px-4 py-2 text-slate-200 hover:text-white font-mono text-xs sm:text-sm overflow-hidden text-ellipsis w-full sm:w-auto flex-1 justify-center sm:justify-start transition-colors"
                title="Send an email to Anmol Kumar Srivastava"
              >
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="truncate">{developerInfo.email}</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-slate-600 text-xs text-slate-300 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                  title="Copy srivastavaanmol977@gmail.com to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-400" />
                      <span className="text-brand-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={emailSocial?.url || `mailto:${developerInfo.email}`}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold text-xs transition-all duration-200 shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  id="direct-email-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Accessible screen-reader announcement */}
            <div aria-live="polite" className="sr-only">
              {copiedEmail ? 'Email address copied to clipboard' : ''}
            </div>

            {/* Hierarchy Items 2 & 3: GitHub & LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto text-left">
              {/* GitHub */}
              <a
                href={githubSocial?.url || 'https://github.com/anmolsri977'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] hover:border-white/20 hover:bg-slate-800/60 transition-all duration-200 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                title="View GitHub profile (opens in new tab)"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors duration-200">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-white">GitHub</span>
                    <span className="block text-[11px] font-mono text-slate-400">
                      github.com/anmolsri977
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              {/* LinkedIn */}
              <a
                href={linkedinSocial?.url || 'https://www.linkedin.com/in/anmolkumarsrivastava-javadeveloper-aimlengineer/'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] hover:border-white/20 hover:bg-slate-800/60 transition-all duration-200 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                title="Connect on LinkedIn (opens in new tab)"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-sky-400 transition-colors duration-200">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-white">LinkedIn</span>
                    <span className="block text-[11px] font-mono text-slate-400 truncate max-w-[140px]">
                      anmolkumarsrivastava
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

            {/* Professional closing message */}
            <p className="mt-8 text-xs font-mono text-slate-500">
              Open for Software Engineering internships, technical projects, and full-stack development.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

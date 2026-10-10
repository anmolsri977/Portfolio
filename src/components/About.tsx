import React from 'react';
import { Award, BookOpen, Calendar, Code2, Sparkles, Terminal } from 'lucide-react';
import { developerInfo, statsData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            01. Background
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Software engineering foundation focused on reliable architectures, backend services, and clean system design.
          </p>
        </div>

        {/* Clean Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Real Introduction */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" />
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                {developerInfo.aboutText}
              </p>
            </div>

            {/* Core Competencies Quick Summary */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/30 border border-white/[0.06] text-xs">
                <span className="text-slate-400 block mb-1 font-mono text-[11px] uppercase">College</span>
                <span className="text-slate-200 font-medium">ABES Engineering College</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/30 border border-white/[0.06] text-xs">
                <span className="text-slate-400 block mb-1 font-mono text-[11px] uppercase">Primary Stack</span>
                <span className="text-slate-200 font-medium">Java, Spring Boot &amp; React</span>
              </div>
            </div>
          </div>

          {/* Right Column: Four Compact Statistic Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {statsData.map((stat, idx) => {
                // Appropriate icon per stat
                const renderIcon = () => {
                  switch (idx) {
                    case 0: // 8.44 CGPA
                      return <Award className="w-5 h-5 text-brand-400" />;
                    case 1: // 3 Featured Projects
                      return <Code2 className="w-5 h-5 text-sky-400" />;
                    case 2: // 2024-2028
                      return <Calendar className="w-5 h-5 text-amber-400" />;
                    case 3: // 3rd Year
                      return <BookOpen className="w-5 h-5 text-emerald-400" />;
                    default:
                      return <Sparkles className="w-5 h-5 text-brand-400" />;
                  }
                };

                return (
                  <div
                    key={stat.label}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-brand-500/30 hover:bg-slate-900/80 transition-all duration-300 group flex flex-col justify-between shadow-subtle"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-slate-800/80 border border-white/5 group-hover:scale-105 transition-transform">
                        {renderIcon()}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        #0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white group-hover:text-brand-300 transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                        {stat.label}
                      </div>
                      {stat.subtext && (
                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {stat.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Note indicator */}
            <div className="mt-4 p-3 rounded-xl bg-slate-950/40 border border-white/[0.05] text-[11px] text-slate-400 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span>Academic metrics verified from computer science coursework.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

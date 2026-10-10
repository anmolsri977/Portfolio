import React from 'react';
import { Trophy, Code2, Cpu } from 'lucide-react';
import { developerStats } from '../data/portfolioData';

export const DeveloperStats: React.FC = () => {
  return (
    <section id="stats" className="py-20 lg:py-24 relative border-t border-white/[0.06] bg-[#080c14]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            04. Problem Solving &amp; DSA
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Developer Stats &amp; Problem Solving
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            {developerStats.description}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Verified Rating & Contest Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* CodeChef Rating Card */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-brand-500/30 transition-all flex flex-col justify-between group shadow-subtle">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-white/5 text-brand-400 group-hover:scale-105 transition-transform">
                  <Trophy className="w-5 h-5 text-brand-400" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider bg-slate-800/60 px-2 py-0.5 rounded border border-white/5">
                  Competitive Rating
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight group-hover:text-brand-300 transition-colors">
                  {developerStats.codeChefRating}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  CodeChef Rating
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Regular competitive programming practice
                </div>
              </div>
            </div>

            {/* Contests Count Card */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-sky-500/30 transition-all flex flex-col justify-between group shadow-subtle">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-white/5 text-sky-400 group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5 text-sky-400" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider bg-slate-800/60 px-2 py-0.5 rounded border border-white/5">
                  Rated Rounds
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {developerStats.contestsCount}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Contests Participated
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Timed algorithmic problem solving rounds
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Focus Areas & Practice Topics */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-subtle">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Core Algorithmic Focus Areas
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  {developerStats.dsaTopics.length} core topics
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Active problem solving focused on fundamental patterns, computational efficiency, space-time trade-offs, and data structure implementations:
              </p>

              {/* Topics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {developerStats.dsaTopics.map((topic) => (
                  <div
                    key={topic}
                    className="p-3 rounded-xl bg-slate-950/70 border border-white/[0.06] hover:border-brand-500/30 transition-all text-center flex flex-col items-center justify-center group"
                  >
                    <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-brand-300 transition-colors">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Continuous algorithmic practice
              </span>
              <span>Java &amp; C++</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

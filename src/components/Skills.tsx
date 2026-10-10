import React from 'react';
import { Terminal, Server, Layout, Database, Cpu } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // Category icon mapping
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Languages':
        return <Terminal className="w-5 h-5 text-brand-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-sky-400" />;
      case 'Frontend':
        return <Layout className="w-5 h-5 text-purple-400" />;
      case 'Database & Tools':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'AI / ML':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      default:
        return <Terminal className="w-5 h-5 text-brand-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-24 relative border-t border-white/[0.06] bg-[#080c14]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Server className="w-3.5 h-3.5" />
            02. Stack
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Verified technologies, frameworks, libraries, and developer tools actively used across backend and full-stack projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between group shadow-subtle hover:bg-slate-900/70"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/90 border border-white/5 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.name)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {category.skills.length} skills
                    </span>
                  </div>
                </div>

                {/* Subtitle / Description */}
                <p className="text-xs text-slate-400 mb-5 leading-relaxed line-clamp-2">
                  {category.description}
                </p>

                {/* Badges / Pill Tags without fake percentages */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skillName) => (
                    <span
                      key={skillName}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800/70 text-slate-200 border border-white/[0.08] hover:border-brand-500/40 hover:text-white hover:bg-slate-800 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400/80" />
                      <span>{skillName}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-5 mt-5 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Stack</span>
                <span className="text-brand-400/70 group-hover:text-brand-400 transition-colors">● active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

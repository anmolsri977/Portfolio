import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, School } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  const collegeEducation = educationList.find((e) => e.level === 'college') || educationList[0];
  const schoolEducations = educationList.filter((e) => e.level === 'school');

  return (
    <section id="education" className="py-20 lg:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 font-mono text-xs uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            05. Academics
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Academic qualifications and computer science engineering curriculum.
          </p>
        </div>

        {/* PRIMARY: College Education Card */}
        <div className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-subtle mb-8 hover:border-brand-500/30 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree & Meta */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-mono border border-brand-500/20">
                <Calendar className="w-3.5 h-3.5" />
                <span>{collegeEducation.period}</span>
                <span className="text-slate-600">•</span>
                <span>{collegeEducation.status}</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {collegeEducation.degree}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-1">
                  <School className="w-4 h-4 text-brand-400" />
                  <span>{collegeEducation.institution}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Specialization in Computer Science &amp; Engineering with dedicated coursework in backend architectures, systems programming, and database engineering.
              </p>

              {/* Highlights */}
              {collegeEducation.highlights && (
                <div className="pt-2 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Curriculum Highlights:
                  </span>
                  {collegeEducation.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Score & Academic Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 rounded-xl bg-slate-950/80 border border-white/[0.08] relative group hover:border-brand-500/30 transition-all">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Award className="w-4 h-4 text-brand-400" />
                    <span>{collegeEducation.scoreType}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Verified</span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-bold font-mono text-white tracking-tight">
                    {collegeEducation.score}
                  </span>
                  <span className="text-xs font-mono text-slate-500">/ 10.0</span>
                </div>

                <p className="text-xs text-slate-400">
                  Consistent performance across engineering laboratories, problem solving evaluations, and technical core subjects.
                </p>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Status: 3rd Year | 5th Semester</span>
                  <span className="text-brand-400 font-mono">B.Tech CSE</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECONDARY: School Education Cards */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 pl-1">
            <School className="w-3.5 h-3.5 text-brand-400" />
            <span>School Education</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {schoolEducations.map((school, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/30 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between shadow-subtle group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 text-brand-300 font-mono text-xs border border-white/5">
                      <Calendar className="w-3 h-3 text-brand-400" />
                      {school.period}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {school.scoreType}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1 group-hover:text-brand-300 transition-colors">
                    {school.degree}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 mb-4">
                    {school.institution}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-baseline justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Final Percentage:
                  </span>
                  <span className="text-xl font-bold font-mono text-emerald-400">
                    {school.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

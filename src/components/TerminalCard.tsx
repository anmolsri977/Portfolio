import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export const TerminalCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 4;
    }
    return 0;
  });

  // Profile data payload
  const profileJsonText = `{
  "developer": "Anmol Kumar Srivastava",
  "role": "Java Backend Developer",
  "focus": "Full-Stack Development",
  "stack": ["Spring Boot", "React", "MySQL"],
  "status": "Ready for Opportunities"
}`;

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return;
    }

    // Step sequence with realistic pacing:
    // 0: Initial prompt
    // 1: Typing $ whoami -> output
    // 2: Typing $ cat profile.json
    // 3: Output JSON display
    const timer1 = setTimeout(() => setStep(1), 500);
    const timer2 = setTimeout(() => setStep(2), 1200);
    const timer3 = setTimeout(() => setStep(3), 2000);
    const timer4 = setTimeout(() => setStep(4), 2600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileJsonText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg mx-auto lg:max-w-none rounded-xl border border-white/[0.1] bg-[#0c121e]/90 shadow-2xl overflow-hidden backdrop-blur-md transition-all hover:border-brand-500/30 group">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#080d16] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-brand-400" />
            anmol@dev: ~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider text-brand-400/80 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
            bash / zsh
          </span>
          <button
            onClick={handleCopy}
            title="Copy profile config"
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/[0.05] transition-colors"
            aria-label="Copy JSON profile"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-brand-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-3 min-h-[280px]">
        {/* Command 1 */}
        <div className="flex items-center gap-2">
          <span className="text-brand-400 select-none">➜</span>
          <span className="text-cyan-400 select-none">~</span>
          <span className="text-slate-100 font-semibold">whoami</span>
        </div>

        {step >= 1 && (
          <div className="pl-4 text-slate-300 font-medium text-xs sm:text-sm border-l border-white/10 ml-1 py-0.5">
            anmol-kumar-srivastava
          </div>
        )}

        {/* Command 2 */}
        {step >= 2 && (
          <div className="flex items-center gap-2 pt-1">
            <span className="text-brand-400 select-none">anmol@developer:~$</span>
            <span className="text-slate-100">cat profile.json</span>
            {step < 3 && <span className="inline-block w-2 h-4 bg-brand-400 cursor-blink ml-1" />}
          </div>
        )}

        {/* JSON Output */}
        {step >= 3 && (
          <div className="bg-[#070b13] p-3.5 rounded-lg border border-white/[0.06] text-xs leading-5">
            <span className="text-slate-500">&#123;</span>
            <div className="pl-4">
              <span className="text-sky-300">"role"</span>: <span className="text-emerald-300">"Java Backend Developer"</span>,
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"focus"</span>: <span className="text-emerald-300">"Full-Stack Development"</span>,
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"stack"</span>: [
              <span className="text-amber-200">"Spring Boot"</span>,{' '}
              <span className="text-amber-200">"React"</span>,{' '}
              <span className="text-amber-200">"MySQL"</span>
              ],
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"status"</span>: <span className="text-teal-300">"Open to Internships"</span>
            </div>
            <span className="text-slate-500">&#125;</span>
          </div>
        )}

        {/* Ready prompt */}
        {step >= 4 && (
          <div className="flex items-center gap-2 pt-1 text-slate-400 text-xs">
            <span className="text-brand-400">➜</span>
            <span className="text-slate-400">system status:</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              active &amp; ready
            </span>
            <span className="inline-block w-2 h-3.5 bg-brand-400 cursor-blink ml-1" />
          </div>
        )}
      </div>
    </div>
  );
};

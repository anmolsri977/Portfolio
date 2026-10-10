import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Star, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Server, 
  Terminal, 
  Sparkles, 
  Radio, 
  ShieldCheck, 
  Database,
  Lock
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './icons/SocialIcons';
import type { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    smarthire: false,
    codepulse: false,
    bankease: false,
  });

  const toggleExpand = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const featuredProject = projectsData.find((p) => p.isFeatured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => p.id !== featuredProject.id);

  // Render project interactive technical preview with strictly non-misleading demo values
  const renderProjectPreview = (project: ProjectItem) => {
    if (project.previewType === 'smarthire') {
      return (
        <div className="rounded-xl border border-white/[0.1] bg-[#0b101c] p-4 sm:p-5 shadow-2xl relative overflow-hidden group/preview transition-all duration-200 hover:border-brand-500/40">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 truncate max-w-[180px] sm:max-w-none">
              smarthire.app/dashboard
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Live App
            </span>
          </div>

          {/* Application Tracking Pipeline Mock */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block">Stage 01</span>
                <span className="text-xs sm:text-sm font-semibold font-mono text-slate-200">Tracked</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block">Stage 02</span>
                <span className="text-xs sm:text-sm font-semibold font-mono text-brand-300">Interview</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block">Stage 03</span>
                <span className="text-xs sm:text-sm font-semibold font-mono text-emerald-400">Offer Stage</span>
              </div>
            </div>

            {/* Application List Snippet (clearly conceptual / sample roles) */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-slate-200">Java Backend Developer (Sample)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Interviewing
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 border-t border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span className="font-semibold text-slate-300">Full-Stack Engineer (Sample)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                  Applied
                </span>
              </div>
            </div>

            {/* AI Assistant & Analytics Bar */}
            <div className="p-2.5 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-brand-300 font-mono text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                Gemini AI Interview Prep &amp; PDF Export
              </span>
              <span className="text-[10px] font-mono text-brand-400 font-semibold">Ready</span>
            </div>
          </div>

          <div className="mt-3 text-center">
            <span className="text-[10px] font-mono text-slate-500">
              * Conceptual UI &amp; Architecture Demo
            </span>
          </div>
        </div>
      );
    }

    if (project.previewType === 'codepulse') {
      return (
        <div className="rounded-xl border border-white/[0.1] bg-[#0b101c] p-4 sm:p-5 shadow-2xl relative overflow-hidden group/preview transition-all duration-200 hover:border-brand-500/40">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 truncate">
              codepulse.internal/session
            </span>
            <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 flex items-center gap-1">
              <Radio className="w-2.5 h-2.5 animate-pulse" />
              STOMP WebSocket
            </span>
          </div>

          {/* Real-time Code Editor Mock */}
          <div className="space-y-2.5 font-mono text-xs">
            <div className="p-3 rounded-lg bg-slate-950/90 border border-white/[0.06] text-slate-300 space-y-1">
              <div className="text-[10px] text-slate-500 flex items-center justify-between pb-1 border-b border-white/[0.04]">
                <span>ClassroomSession.java</span>
                <span className="text-brand-400">Teacher &amp; Student</span>
              </div>
              <div className="text-purple-300">@MessageMapping(<span className="text-amber-200">"/code/sync"</span>)</div>
              <div><span className="text-sky-300">public void</span> <span className="text-amber-200">syncClassroom</span>() &#123;</div>
              <div className="pl-4 text-emerald-300">// Broadcast code buffer via STOMP</div>
              <div className="pl-4 text-slate-300">messagingTemplate.convertAndSend(room, delta);</div>
              <div>&#125;</div>
            </div>

            {/* AI Review Status */}
            <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-purple-300 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Gemini AI Code Review: Clean algorithmic structure
              </span>
              <span className="text-[10px] font-mono text-purple-400">Validated</span>
            </div>
          </div>

          <div className="mt-3 text-center">
            <span className="text-[10px] font-mono text-slate-500">
              * Collaborative Classroom &amp; WebSocket Preview
            </span>
          </div>
        </div>
      );
    }

    if (project.previewType === 'bankease') {
      return (
        <div className="rounded-xl border border-white/[0.1] bg-[#0b101c] p-4 sm:p-5 shadow-2xl relative overflow-hidden group/preview transition-all duration-200 hover:border-brand-500/40">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 truncate">
              bankease.internal/portal
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5" />
              ACID Compliant
            </span>
          </div>

          {/* Banking Core Ledger Mock with strictly fictional numbers */}
          <div className="space-y-2.5 font-mono text-xs">
            {/* Account Card Mock - XXXX format as explicitly instructed */}
            <div className="p-3 rounded-lg bg-gradient-to-r from-slate-900 to-slate-950 border border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block">12-Digit Account Number</span>
                <span className="text-sm font-bold text-white tracking-widest">XXXX •••• •••• XXXX</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-emerald-400 block">Account Status</span>
                <span className="text-xs font-semibold text-slate-200">ACTIVE / VERIFIED</span>
              </div>
            </div>

            {/* Transaction audit log stream - generic demo values */}
            <div className="p-2.5 rounded-lg bg-slate-950/90 border border-white/[0.06] space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/[0.04] pb-1">
                <span className="flex items-center gap-1">
                  <Database className="w-3 h-3 text-brand-400" />
                  @Transactional Ledger Transfer
                </span>
                <span className="text-emerald-400 font-semibold">COMMITTED</span>
              </div>
              <div className="text-slate-300 flex items-center justify-between">
                <span>Beneficiary Ownership Validation</span>
                <span className="text-slate-500">Verified</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                [AUDIT_LOG]: Demo transaction validated &amp; committed
              </div>
            </div>
          </div>

          <div className="mt-3 text-center">
            <span className="text-[10px] font-mono text-slate-500">
              * Core Banking Workflow &amp; Audit Log Concept
            </span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="projects" className="py-20 lg:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            03. Engineering Case Studies
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Software systems engineered with Spring Boot, secure authentication, relational databases, and modern APIs.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 01 — FEATURED PROJECT: SmartHire                               */}
        {/* ============================================================== */}
        <div className="mb-10">
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-brand-500/40 shadow-glow p-6 sm:p-8 lg:p-10 relative overflow-hidden group">
            {/* Ambient accent back-glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Project Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Featured Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 font-mono text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
                      Featured Project
                    </span>
                    <span className="font-mono text-xs text-brand-400 font-bold">
                      {featuredProject.number}
                    </span>
                    {featuredProject.deployment && (
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded border border-white/5">
                        Deployed: {featuredProject.deployment.backend} &amp; {featuredProject.deployment.frontend}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm font-mono text-brand-400/90 mb-3">
                    {featuredProject.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                    {featuredProject.description}
                  </p>

                  {/* Key Features (Always shows clear overview) */}
                  <div className="mb-5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                      Core Features:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {(expandedProjects[featuredProject.id] 
                        ? featuredProject.features 
                        : featuredProject.features.slice(0, 6)
                      ).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Highlights Area */}
                  <div className="mb-5 p-4 rounded-xl bg-slate-950/70 border border-white/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-brand-400" />
                      Engineering &amp; Architecture Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                      {(expandedProjects[featuredProject.id] 
                        ? featuredProject.engineeringHighlights 
                        : featuredProject.engineeringHighlights.slice(0, 4)
                      ).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-brand-400 font-mono">▹</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expand / Collapse Button with smooth transition */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(featuredProject.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-400 hover:text-brand-300 mb-6 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-400 rounded px-1 -ml-1"
                    aria-expanded={expandedProjects[featuredProject.id]}
                  >
                    <span>
                      {expandedProjects[featuredProject.id] ? 'Show Less Details' : `View All ${featuredProject.features.length} Features & Full Architecture`}
                    </span>
                    {expandedProjects[featuredProject.id] ? (
                      <ChevronUp className="w-3.5 h-3.5 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                    )}
                  </button>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-300 font-mono text-xs hover:border-brand-500/40 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Demo & GitHub Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/[0.08]">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-semibold text-xs sm:text-sm hover:bg-brand-400 transition-all duration-200 shadow-glow hover:shadow-brand-500/30 focus-visible:ring-2 focus-visible:ring-white"
                      id="smarthire-live-btn"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-950" />
                      <span>Live Demonstration</span>
                    </a>
                  )}

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-white/20 hover:border-brand-500/50 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-400"
                      id="smarthire-github-btn"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-300" />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Technical Preview */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {renderProjectPreview(featuredProject)}
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 02 — CodePulse & 03 — BankEase                                 */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-200 group shadow-subtle"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {project.number}
                    </span>
                    <span className="text-slate-600">—</span>
                    <span className="font-mono text-xs text-brand-400/90 font-medium">
                      Engineering Project
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded border border-white/5">
                    Spring Boot Backend
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-brand-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Visual Preview */}
                <div className="mb-6">
                  {renderProjectPreview(project)}
                </div>

                {/* Key Features */}
                <div className="mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Core Features:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {(expandedProjects[project.id] 
                      ? project.features 
                      : project.features.slice(0, 4)
                    ).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Highlights */}
                <div className="mb-5 p-3.5 rounded-xl bg-slate-950/70 border border-white/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-1.5 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-sky-400" />
                    Engineering Highlights:
                  </span>
                  <div className="space-y-1 text-xs text-slate-400">
                    {(expandedProjects[project.id]
                      ? project.engineeringHighlights
                      : project.engineeringHighlights.slice(0, 3)
                    ).map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-sky-400 font-mono">▹</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Toggle details */}
                <button
                  type="button"
                  onClick={() => toggleExpand(project.id)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-brand-400 hover:text-brand-300 mb-5 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-400 rounded px-1 -ml-1"
                  aria-expanded={expandedProjects[project.id]}
                >
                  <span>
                    {expandedProjects[project.id] ? 'Show Less' : `View All ${project.features.length} Features & Highlights`}
                  </span>
                  {expandedProjects[project.id] ? (
                    <ChevronUp className="w-3.5 h-3.5 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                  )}
                </button>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 text-xs font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Clean & Functional without fake URLs */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-white/10 hover:border-slate-500 text-xs font-medium text-slate-200 hover:text-white transition-all duration-200"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-500 cursor-not-allowed select-none"
                    title="Source repository is currently in active development"
                  >
                    <Lock className="w-3 h-3 text-slate-600" />
                    <span>Repository in Development</span>
                  </span>
                )}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-500/15 border border-brand-500/30 hover:bg-brand-500/25 text-xs font-medium text-brand-300 transition-all duration-200"
                  >
                    <span>Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono text-slate-500 border border-white/5 bg-slate-900/50 select-none"
                  >
                    Backend Architecture
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

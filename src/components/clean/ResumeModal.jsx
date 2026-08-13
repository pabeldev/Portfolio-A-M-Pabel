import React from 'react';
import { X, FileText, Download, Briefcase, Award, GraduationCap, Wrench, Mail, Phone, Globe, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalProfile } from '../../data/personalData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-[94vw] sm:max-w-4xl max-h-[88vh] rounded-2xl sm:rounded-3xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-2xl flex flex-col justify-between my-auto">
        
        {/* Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="p-1.5 sm:p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-xs sm:text-base font-bold text-white truncate">A M Pabel — Interactive CV & Resume</h3>
              <p className="text-[10px] sm:text-xs text-cyan-400 font-mono truncate">
                Designer | Animator | Editor | Vibe Coder
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="mailto:info@ampabel.com?subject=Portfolio%20CV%20Inquiry"
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-[10px] sm:text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Contact / Hire</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 sm:p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Interactive Resume Card Grid */}
        <div className="p-4 sm:p-6 bg-slate-950 overflow-y-auto space-y-6 flex-1">
          
          {/* Top Banner Card: Executive Profile Summary */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Executive Summary
                </span>
                <h4 className="text-lg sm:text-2xl font-black text-white">
                  A M Pabel
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Projects
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              Creative Designer, Motion Animator, Ed-Tech Commercial Video Editor, and AI Vibe Coder. Delivering 3D After Effects motion graphics, Premiere Pro video cuts, vector brand architecture, and AI-accelerated web applications.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">📍 Dhaka & Feni, Bangladesh</span>
              <span>•</span>
              <span className="flex items-center gap-1">🏢 FramEmpire Studio</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-cyan-400">✉️ info@ampabel.com</span>
            </div>
          </div>

          {/* 4 Core Resume Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Card 1: Experience & Studio Work */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2.5">
                <Briefcase className="w-4 h-4" />
                <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Work Experience
                </h5>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-start text-xs font-semibold text-white">
                    <span>Founder & Creative Director</span>
                    <span className="text-[10px] font-mono text-cyan-400">2024 - Present</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400">FramEmpire Studio</p>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    Leading 3D motion graphics, commercial video editing, brand identity systems, and AI web application development.
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-800/60">
                  <div className="flex justify-between items-start text-xs font-semibold text-white">
                    <span>Lead Video Editor & Designer</span>
                    <span className="text-[10px] font-mono text-cyan-400">2023 - Present</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400">Ed-Tech & Global Commercial Clients</p>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    Produced 500+ high-retention video edits, class hooks, and motion typography for clients like reThink.ac, Campus to Country, Education BD, and Worklife Canada.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Production Toolstack */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2.5">
                <Wrench className="w-4 h-4" />
                <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Toolstack & Mastery
                </h5>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="text-cyan-400 font-bold">After Effects (Ae)</span>
                  <p className="text-[10px] text-slate-400">Motion & VFX</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="text-cyan-400 font-bold">Premiere Pro (Pr)</span>
                  <p className="text-[10px] text-slate-400">Video Editing</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="text-blue-400 font-bold">Illustrator (Ai)</span>
                  <p className="text-[10px] text-slate-400">Vector Branding</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="text-blue-400 font-bold">Photoshop (Ps)</span>
                  <p className="text-[10px] text-slate-400">Key Visuals</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="text-cyan-300 font-bold">Cursor AI</span>
                  <p className="text-[10px] text-slate-400">Vibe Coding</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="text-cyan-300 font-bold">CodeX Engine</span>
                  <p className="text-[10px] text-slate-400">AI Workflows</p>
                </div>
              </div>
            </div>

            {/* Card 3: Key Client Highlights */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2.5">
                <Award className="w-4 h-4" />
                <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Client & Brand Portfolio
                </h5>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>reThink.ac — EdTech Video Commercials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Campus to Country — Publication & Editorial Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Worklife Canada & Amazon Immigration — Brand Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Eastern Technologies & iMac BD — Tech Branding</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Education & Specializations */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2.5">
                <GraduationCap className="w-4 h-4" />
                <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Specialization & Skills
                </h5>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div>
                  <span className="font-semibold text-white block">Visual Architecture & Motion Design</span>
                  <p className="text-[11px] text-slate-400 font-light">Self-driven expertise in motion graphics, video post-production, and brand identity.</p>
                </div>
                <div>
                  <span className="font-semibold text-white block">AI Vibe Coding & Web Applications</span>
                  <p className="text-[11px] text-slate-400 font-light">Building production React, Vite, and Three.js platforms at 10x speed.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Card: Contact & Links */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h5 className="text-sm font-bold text-white">Direct Handoff & Booking</h5>
              <p className="text-xs text-slate-400 font-mono">WhatsApp: +880 1615-288259 • Email: info@ampabel.com</p>
            </div>

            <a
              href="https://portfolio.ampabel.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-cyan-300 flex items-center gap-1.5 hover:border-cyan-400 transition-all"
            >
              <span>portfolio.ampabel.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <span>A M Pabel Interactive CV v1.0</span>
          <span className="text-cyan-400 font-bold">● Active Demo</span>
        </div>

      </div>
    </div>
  );
}

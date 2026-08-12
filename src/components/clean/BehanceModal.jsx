import React from 'react';
import { X, ExternalLink, Globe, ShieldCheck, Palette } from 'lucide-react';

export default function BehanceModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const behanceProjectUrl = project.behanceUrl || `https://www.behance.net/gallery/${project.behanceId || project.id}`;
  const iframeSrc = project.embedUrl || `https://www.behance.net/embed/project/${project.behanceId}?ilo0=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[82vh] rounded-3xl bg-slate-950 border border-purple-500/40 overflow-hidden shadow-2xl flex flex-col justify-between my-auto">
        
        {/* Web Browser Style Top Header Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          
          {/* Controls & Address Bar */}
          <div className="flex items-center gap-3 flex-1 overflow-hidden">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-xl px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs font-mono text-purple-300 overflow-hidden">
              <Globe className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="truncate">{behanceProjectUrl}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-auto" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={behanceProjectUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Open in Behance</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Scrollable Viewport Inside Modal (Scroll top-to-bottom inside popup!) */}
        <div className="relative flex-1 min-h-[380px] max-h-[60vh] bg-slate-950 overflow-y-auto">
          <iframe
            src={iframeSrc}
            title={project.title}
            width="100%"
            height="100%"
            scrolling="yes"
            className="w-full h-full border-0 bg-slate-950"
            allowFullScreen
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* Footer Info Bar */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-sm font-bold text-white mr-2">{project.title}</span>
            <span className="text-xs text-purple-400 font-mono">({project.client} • {project.year})</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-purple-300 border border-slate-800">
                #{t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

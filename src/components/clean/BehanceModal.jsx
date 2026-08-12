import React from 'react';
import { X, ExternalLink, Palette } from 'lucide-react';

export default function BehanceModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const behanceProjectUrl = project.behanceUrl || `https://www.behance.net/gallery/${project.behanceId || project.id}`;
  const iframeSrc = project.embedUrl || `https://www.behance.net/embed/project/${project.behanceId}?ilo0=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-950 border border-purple-500/40 overflow-hidden shadow-2xl flex flex-col justify-between my-auto">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{project.title}</h3>
              <p className="text-xs text-slate-400 font-mono">{project.client} • {project.year}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean Behance Embed Container (Fits exact 316px widget - ZERO blank space!) */}
        <div className="relative w-full h-[316px] md:h-[340px] bg-slate-950 overflow-hidden p-2 flex items-center justify-center">
          <iframe
            src={iframeSrc}
            title={project.title}
            width="100%"
            height="316"
            allowFullScreen
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-[316px] border-0 rounded-2xl bg-slate-900 shadow-inner"
          />
        </div>

        {/* Description & Link Footer */}
        <div className="p-5 md:p-6 bg-slate-950 border-t border-slate-800 space-y-4 shrink-0">
          <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 text-xs font-mono text-purple-300 border border-slate-800">
                  #{t}
                </span>
              ))}
            </div>

            <a
              href={behanceProjectUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Launch Full Behance Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

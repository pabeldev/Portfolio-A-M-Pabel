import React from 'react';
import { X, ExternalLink, Palette } from 'lucide-react';

export default function BehanceModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const behanceProjectUrl = project.behanceUrl || `https://www.behance.net/gallery/${project.behanceId || project.id}`;
  const iframeSrc = project.embedUrl || `https://www.behance.net/embed/project/${project.behanceId}?ilo0=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-[92vw] sm:max-w-3xl max-h-[85vh] rounded-2xl sm:rounded-3xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-2xl flex flex-col justify-between my-auto">
        
        {/* Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="p-1.5 sm:p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-xs sm:text-base font-bold text-white truncate">{project.title}</h3>
              <p className="text-[10px] sm:text-xs text-cyan-400 font-mono truncate">
                {project.client} {project.subjectTag ? `• ${project.subjectTag}` : ''} • {project.year}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 sm:p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Clean Responsive Behance Embed Container */}
        <div className="relative w-full h-[280px] sm:h-[340px] bg-slate-950 overflow-hidden p-1.5 sm:p-2 flex items-center justify-center">
          <iframe
            src={iframeSrc}
            title={project.title}
            width="100%"
            height="100%"
            allowFullScreen
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full border-0 rounded-xl sm:rounded-2xl bg-slate-900 shadow-inner"
          />
        </div>

        {/* Description & Link Footer */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 space-y-3 sm:space-y-4 shrink-0">
          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-3 sm:line-clamp-none">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-slate-900 text-[10px] sm:text-xs font-mono text-cyan-300 border border-slate-800">
                  #{t}
                </span>
              ))}
            </div>

            <a
              href={behanceProjectUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-[10px] sm:text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer ml-auto"
            >
              <span>Launch Full Behance Project</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

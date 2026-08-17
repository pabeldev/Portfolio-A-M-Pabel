import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Palette } from 'lucide-react';

export default function BehanceModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const behanceProjectUrl = project.behanceUrl || `https://www.behance.net/gallery/${project.behanceId || project.id}`;
  const iframeSrc = project.embedUrl || `https://www.behance.net/embed/project/${project.behanceId}?ilo0=1`;

  return createPortal(
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-2xl animate-fade-in"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[92vw] sm:max-w-3xl max-h-[85vh] sm:max-h-[88vh] rounded-2xl sm:rounded-3xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-2xl flex flex-col justify-between"
      >
        
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
            className="p-1.5 sm:p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Clean Responsive Behance Embed Container */}
        <div className="relative w-full flex-1 min-h-[220px] sm:min-h-[300px] bg-slate-950 overflow-hidden p-1.5 sm:p-2 flex items-center justify-center">
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
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}

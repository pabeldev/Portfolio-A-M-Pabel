import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Film, ExternalLink } from 'lucide-react';

export default function VideoModal({ project, isOpen, onClose }) {
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

  const isShortForm = project.subCategory === 'short-form' || project.tags?.includes('Short-Form Video');

  return createPortal(
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-2xl animate-fade-in"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${
          isShortForm ? 'max-w-[92vw] sm:max-w-md' : 'max-w-[94vw] sm:max-w-4xl'
        } max-h-[92vh] sm:max-h-[90vh] rounded-2xl sm:rounded-3xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-2xl flex flex-col justify-between my-auto`}
      >
        
        {/* Modal Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0 z-10">
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-hidden">
            <div className="p-1.5 sm:p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Film className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-xs sm:text-base font-bold text-white truncate leading-snug">{project.title}</h3>
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

        {/* Video Wrapper Container - Targeted Alignment Fix ONLY */}
        <div 
          className="flex items-center justify-center w-full overflow-hidden flex-1 bg-black"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            overflow: 'hidden',
            margin: '0 auto',
            padding: 0
          }}
        >
          <iframe
            src={project.embedUrl}
            title={project.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full bg-black border-0"
            style={{
              width: '100%',
              height: isShortForm ? '58vh' : 'auto',
              maxHeight: '100%',
              aspectRatio: isShortForm ? '9/16' : '16/9',
              objectFit: 'contain',
              margin: 0,
              padding: 0,
              transform: 'none'
            }}
          />
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 shrink-0 z-10">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-slate-900 text-[9px] sm:text-xs font-mono text-cyan-300 border border-slate-800">
                #{tag}
              </span>
            ))}
          </div>

          {project.embedUrl && (
            <a
              href={project.embedUrl.replace('/preview', '/view')}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-[10px] sm:text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer ml-auto shrink-0"
            >
              <span>Open in Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>
    </div>,
    document.body
  );
}

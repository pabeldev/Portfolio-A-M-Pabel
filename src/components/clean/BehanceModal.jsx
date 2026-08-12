import React from 'react';
import { X, Palette, ExternalLink } from 'lucide-react';

export default function BehanceModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const behanceProjectUrl = project.behanceUrl || `https://www.behance.net/gallery/${project.fileId || project.id}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-5xl rounded-3xl bg-slate-950 border border-purple-500/40 overflow-hidden shadow-2xl space-y-0 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
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

        {/* Behance iFrame Container */}
        <div className="relative flex-1 min-h-[400px] md:min-h-[550px] bg-slate-950 overflow-hidden p-2">
          <iframe
            src={project.embedUrl}
            title={project.title}
            width="100%"
            height="100%"
            allowFullScreen
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full border-0 rounded-2xl shadow-inner bg-slate-900"
          />
        </div>

        {/* Footer Info & Link */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 text-xs font-mono text-purple-300 border border-slate-800">
                #{tag}
              </span>
            ))}
          </div>

          <a
            href={behanceProjectUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
          >
            <span>View Full Project on Behance</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}

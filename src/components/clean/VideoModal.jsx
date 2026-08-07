import React from 'react';
import { X, Film, Play, ExternalLink } from 'lucide-react';

export default function VideoModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-2xl space-y-0">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{project.title}</h3>
              <p className="text-xs text-slate-400 font-mono">{project.client} • {project.year}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Video Player Container */}
        <div className="relative h-[320px] md:h-[480px] bg-slate-950 flex items-center justify-center overflow-hidden p-2">
          {project.embedUrl ? (
            <iframe
              src={project.embedUrl}
              title={project.title}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full border-0 rounded-2xl shadow-inner bg-slate-900"
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl brightness-95"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 rounded-2xl">
                <div className="p-4 rounded-full bg-cyan-500 text-slate-950 shadow-lg">
                  <Play className="w-8 h-8 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Description & Tags */}
        <div className="p-6 bg-slate-950 space-y-4">
          <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">
                  #{tag}
                </span>
              ))}
            </div>

            {project.embedUrl && (
              <a
                href={project.embedUrl.replace('/preview', '/view')}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
              >
                <span>Open in Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

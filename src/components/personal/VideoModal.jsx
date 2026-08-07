import React, { useState } from 'react';
import { X, Play, Pause, Film, Sliders, CheckCircle, Sparkles } from 'lucide-react';

export default function VideoModal({ project, isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showGraded, setShowGraded] = useState(true);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-[0_0_60px_rgba(0,243,255,0.2)]">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Film className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-xs text-cyan-400 font-mono">{project.client} • {project.year}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Preview Screen Area */}
        <div className="relative h-[320px] md:h-[420px] bg-slate-900 flex items-center justify-center overflow-hidden">
          
          <img
            src={project.thumbnail}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              showGraded ? 'brightness-105 contrast-110 saturate-125' : 'brightness-90 contrast-90 saturate-50 sepia-[0.2]'
            }`}
          />

          {/* Color Grade Toggle Overlay Badge */}
          <div className="absolute top-4 left-4 z-10">
            <button
              onClick={() => setShowGraded(!showGraded)}
              className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-cyan-500/50 backdrop-blur-md text-xs font-mono font-bold text-cyan-300 hover:bg-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              {showGraded ? 'DaVinci 4K Graded [ON]' : 'RAW Log Footage [OFF]'}
            </button>
          </div>

          {/* Play/Pause Simulator overlay button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 p-5 rounded-full bg-slate-950/80 border border-cyan-400/60 text-cyan-300 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-[0_0_30px_rgba(0,243,255,0.4)] cursor-pointer"
          >
            {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
          </button>

          {/* Timeline Bar Simulation */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent flex items-center gap-4">
            <span className="text-xs font-mono text-cyan-400">00:14 / 01:30</span>
            <div className="flex-1 bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full w-2/5 animate-pulse" />
            </div>
            <span className="text-xs font-mono text-slate-400">4K UHD</span>
          </div>

        </div>

        {/* Details Footer Grid */}
        <div className="p-6 bg-slate-950 space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed font-light">
            {project.description}
          </p>

          {/* Software Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {project.stats && Object.entries(project.stats).map(([key, val], idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">{key}</span>
                <span className="text-xs font-bold text-cyan-300 font-mono">{val}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-slate-900 text-xs font-mono text-slate-400 border border-slate-800">
                  #{t}
                </span>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              Close Preview
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

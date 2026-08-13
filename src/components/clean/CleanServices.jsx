import React from 'react';
import { Sparkles, Film, PenTool, Image, Zap, Cpu } from 'lucide-react';

const expertTools = [
  {
    id: 'after-effects',
    name: 'After Effects',
    code: 'Ae',
    category: 'Motion & VFX',
    icon: Sparkles
  },
  {
    id: 'premiere-pro',
    name: 'Premiere Pro',
    code: 'Pr',
    category: 'Video Editing',
    icon: Film
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    code: 'Ai',
    category: 'Vector Branding',
    icon: PenTool
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    code: 'Ps',
    category: 'Key Visuals',
    icon: Image
  },
  {
    id: 'cursor',
    name: 'Cursor AI',
    code: 'AI',
    category: 'Vibe Coding',
    icon: Zap
  },
  {
    id: 'codex',
    name: 'CodeX',
    code: 'X',
    category: 'AI Workflows',
    icon: Cpu
  }
];

export default function CleanServices() {
  return (
    <section id="tools" className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center space-y-1.5 mb-8 md:mb-10">
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
          Production Software Stack
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Tools I <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expert In</span>
        </h2>
      </div>

      {/* Sleek Compact 6-Tool Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {expertTools.map((tool) => {
          const IconComp = tool.icon;
          return (
            <div
              key={tool.id}
              className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-400/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center space-y-2.5 shadow-md hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] cursor-default"
            >
              {/* Compact Software Icon & Code Badge */}
              <div className="relative">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[9px] font-mono font-bold text-white shadow-sm">
                  {tool.code}
                </span>
              </div>

              {/* Tool Name & Category */}
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                  {tool.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-400 font-medium block mt-0.5">
                  {tool.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

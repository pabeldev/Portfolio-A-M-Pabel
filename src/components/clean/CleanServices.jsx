import React from 'react';
import { Sparkles, Film, PenTool, Image, Zap, Cpu, ArrowUpRight } from 'lucide-react';

const expertTools = [
  {
    id: 'after-effects',
    name: 'After Effects',
    code: 'Ae',
    category: 'Motion Graphics & VFX',
    description: 'Kinetic typography, 2D/3D motion graphics, commercial intro reveals, and visual effects compositing.',
    icon: Sparkles,
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
    hoverGlow: 'hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,243,255,0.25)]'
  },
  {
    id: 'premiere-pro',
    name: 'Premiere Pro',
    code: 'Pr',
    category: 'Video Editing & Post',
    description: 'High-pace commercial video editing, Ed-Tech class hook cuts, multi-cam assembly, and audio mastering.',
    icon: Film,
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
    hoverGlow: 'hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,243,255,0.25)]'
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    code: 'Ai',
    category: 'Vector Brand Architecture',
    description: 'Brand emblem architecture, logo design, vector graphics, and comprehensive design system guidelines.',
    icon: PenTool,
    badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    hoverGlow: 'hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]'
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    code: 'Ps',
    category: 'Key Visuals & Graphics',
    description: 'High-end photo manipulation, social media campaign posters, promotional key visuals, and UI assets.',
    icon: Image,
    badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    hoverGlow: 'hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    code: 'AI',
    category: 'AI Vibe Coding',
    description: 'Building high-performance React web applications, interactive web canvases, and modern UI platforms with AI.',
    icon: Zap,
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
    hoverGlow: 'hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,243,255,0.25)]'
  },
  {
    id: 'codex',
    name: 'CodeX',
    code: 'X',
    category: 'AI Workflows & Automation',
    description: 'Automating fullstack web workflows, AI API integrations, and accelerated digital product development.',
    icon: Cpu,
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
    hoverGlow: 'hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,243,255,0.25)]'
  }
];

export default function CleanServices() {
  return (
    <section id="tools" className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10 md:mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
          Production Software Stack
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white font-['Creato_Display',sans-serif]">
          Tools I <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expert In</span>
        </h2>
      </div>

      {/* 6 Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {expertTools.map((tool) => {
          const IconComp = tool.icon;
          return (
            <div
              key={tool.id}
              className={`p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-5 group shadow-md ${tool.hoverGlow}`}
            >
              <div className="space-y-4">
                {/* Icon & Software Code Badge */}
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl ${tool.badgeColor} border group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-white tracking-widest uppercase">
                    {tool.code}
                  </span>
                </div>

                {/* Tool Name & Category */}
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                    {tool.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {tool.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Mastery Level</span>
                <span className="text-cyan-400 font-bold flex items-center gap-1">
                  ● Expert
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

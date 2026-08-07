import React from 'react';
import { skillCategories } from '../../data/personalData';
import { Sparkles, Film, Palette, Zap, CheckCircle2, Wrench } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Film: Film,
  Palette: Palette,
  Zap: Zap
};

export default function PersonalSkillsMatrix() {
  return (
    <section id="skills-matrix" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5" />
          Core Crafts & Capabilities
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          The 4 Pillars of <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Pabel's Craft</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base">
          From photorealistic Cinema 4D Octane renders to DaVinci Resolve color grading, 3D brand systems, and AI Vibe Coding.
        </p>
      </div>

      {/* Grid of 4 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((skill) => {
          const IconComp = iconMap[skill.icon] || Sparkles;
          return (
            <div
              key={skill.id}
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] flex flex-col justify-between"
            >
              {/* Card Accent Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity`} />

              <div className="space-y-6 relative z-10">
                
                {/* Top Row: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} text-slate-950 shadow-lg`}>
                    <IconComp className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-800 border border-slate-700 text-cyan-300">
                    {skill.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>

                {/* Software Stack Tags */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Software & Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Footer Metric */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Verified Work History
                </span>
                <span className="text-cyan-300 font-semibold">{skill.metrics}</span>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}

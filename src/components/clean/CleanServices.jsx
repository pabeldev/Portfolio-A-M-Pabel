import React from 'react';
import { Sparkles, Film, Palette, Zap } from 'lucide-react';

const minimalServices = [
  {
    id: 'motion-graphics',
    title: '3D Motion Graphics & Animation',
    category: 'Cinema 4D • Octane Render',
    icon: Sparkles,
    gradient: 'from-purple-500/20 to-indigo-600/20 border-purple-500/30'
  },
  {
    id: 'video-editing',
    title: 'Commercial Video Editing & VFX',
    category: 'DaVinci Resolve • Premiere Pro',
    icon: Film,
    gradient: 'from-cyan-500/20 to-blue-600/20 border-cyan-500/30'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Brand Systems',
    category: '3D Emblem • Vector Systems',
    icon: Palette,
    gradient: 'from-amber-500/20 to-pink-600/20 border-amber-500/30'
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding & Web Applications',
    category: 'React • Three.js • Gemini AI',
    icon: Zap,
    gradient: 'from-emerald-500/20 to-cyan-600/20 border-emerald-500/30'
  }
];

export default function CleanServices() {
  return (
    <section id="services" className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-10 md:mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 light:text-cyan-600 font-mono">
          Creative Disciplines
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white light:text-slate-900">
          What I Create <span className="bg-gradient-to-r from-cyan-400 to-blue-500 light:from-cyan-600 light:to-blue-600 bg-clip-text text-transparent">For Clients</span>
        </h2>
      </div>

      {/* Minimal 4-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {minimalServices.map((service) => {
          const IconComp = service.icon;
          return (
            <div
              key={service.id}
              className={`p-6 rounded-3xl bg-slate-900/60 light:bg-white/90 border border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 light:hover:border-cyan-500 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-4 group shadow-md hover:shadow-xl`}
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 text-cyan-400 light:text-cyan-600 w-fit group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-[10px] font-mono text-cyan-400 light:text-cyan-600 font-bold uppercase tracking-wider block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-cyan-300 light:group-hover:text-cyan-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 light:border-slate-100 flex items-center justify-between text-xs text-slate-400 light:text-slate-500 font-mono">
                <span>Core Specialty</span>
                <span className="text-cyan-400 light:text-cyan-600 font-bold">● Active</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

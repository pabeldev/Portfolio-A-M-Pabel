import React from 'react';
import { servicesList } from '../../data/personalData';
import { Sparkles, Film, Palette, Zap, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Film: Film,
  Palette: Palette,
  Zap: Zap
};

export default function CleanServices() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-14">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
          Services & Specialties
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white">
          What I Create <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">For Clients</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
          Dedicated personal execution backed by 5+ years of production experience in motion, design, and code.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((service) => {
          const IconComp = iconMap[service.icon] || Sparkles;
          return (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950 text-cyan-300 border border-slate-800">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Tools Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 text-xs font-mono text-slate-300 border border-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Banner */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Deliverables: {service.deliverables}</span>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}

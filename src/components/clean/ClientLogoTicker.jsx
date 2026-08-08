import React from 'react';
import { Sparkles, Globe, Film, Zap, Layers, Cpu, Code2, Award } from 'lucide-react';

const clientBrands = [
  { id: 1, name: 'FramEmpire Studio', tag: '3D & Motion Agency', icon: Sparkles },
  { id: 2, name: 'Education BD', tag: 'EdTech Portal', icon: Globe },
  { id: 3, name: '10 Minute School', tag: 'Video Commercials', icon: Film },
  { id: 4, name: 'Vortex 3D Labs', tag: 'Octane VFX', icon: Layers },
  { id: 5, name: 'GenZ Arcade', tag: 'AI Game Engine', icon: Cpu },
  { id: 6, name: 'Vibe Code Inc', tag: 'Web Applications', icon: Zap },
  { id: 7, name: 'Apex Creative', tag: 'Brand Identity', icon: Award },
  { id: 8, name: 'Neural Stream AI', tag: 'AI Synthesis', icon: Code2 }
];

export default function ClientLogoTicker() {
  // Duplicate array for seamless 100% infinite marquee loop
  const duplicatedBrands = [...clientBrands, ...clientBrands];

  return (
    <div className="py-10 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-xl relative z-10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400">
          Trusted By Leading Brands, Agencies & Studios
        </span>
      </div>

      {/* Infinite Marquee Wrapper with Gradient Mask Fading Edges */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Marquee Track sliding from Right to Left infinitely */}
        <div className="flex items-center gap-6 w-max animate-marquee-left">
          {duplicatedBrands.map((brand, idx) => {
            const IconComp = brand.icon;
            return (
              <div
                key={`${brand.id}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-colors shrink-0 shadow-sm group cursor-default"
              >
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    {brand.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono block">
                    {brand.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}

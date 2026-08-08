import React, { useState } from 'react';
import { vibeCodedWebsites } from '../../data/personalData';
import WebPreviewModal from './WebPreviewModal';
import { Zap, Globe, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CleanVibeCode() {
  const [selectedWeb, setSelectedWeb] = useState(null);

  return (
    <section id="vibe-code" className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/30 text-emerald-400 light:text-emerald-700 text-xs font-semibold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 fill-current" />
          Vibe Coded Web Applications & Platforms
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white light:text-slate-900">
          Websites Built With <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 light:from-emerald-600 light:to-cyan-600 bg-clip-text text-transparent">Vibe Coding</span>
        </h2>
        <p className="text-slate-400 light:text-slate-600 text-sm md:text-base max-w-2xl mx-auto font-light">
          Click any live site below to launch its interactive browser preview window.
        </p>
      </div>

      {/* 5 Vibe Coded Web App Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {vibeCodedWebsites.map((site) => (
          <div
            key={site.id}
            onClick={() => setSelectedWeb(site)}
            className="group relative rounded-3xl bg-slate-900/80 light:bg-white/95 border border-slate-800 light:border-slate-200 hover:border-cyan-500/60 light:hover:border-cyan-500 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between shadow-xl space-y-6"
          >
            
            {/* Header: Displays thumbnail if present, otherwise clean address box */}
            <div className="space-y-4">
              {site.thumbnail ? (
                <div className="relative h-40 rounded-2xl overflow-hidden mb-4 border border-slate-800 light:border-slate-200">
                  <img src={site.thumbnail} alt={site.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 light:bg-slate-50 border border-slate-800 light:border-slate-200 group-hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 light:text-cyan-600">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-cyan-300 light:text-cyan-700 font-bold tracking-tight">
                      {site.displayUrl}
                    </span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 light:text-emerald-600" />
                </div>
              )}

              <div>
                <span className="text-xs font-mono text-cyan-400 light:text-cyan-600 block mb-1">{site.category}</span>
                <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-cyan-300 light:group-hover:text-cyan-600 transition-colors">
                  {site.title}
                </h3>
              </div>

              <p className="text-slate-300 light:text-slate-600 text-xs font-light leading-relaxed">
                {site.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {site.tags.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 light:bg-slate-100 text-slate-400 light:text-slate-600 border border-slate-800 light:border-slate-200">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Address Bar Footer CTA */}
            <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-300 light:text-cyan-700 font-semibold">
                Launch Live Site
              </span>
              <div className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 group-hover:scale-110 transition-transform">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Live Web Preview Modal */}
      <WebPreviewModal
        website={selectedWeb}
        isOpen={Boolean(selectedWeb)}
        onClose={() => setSelectedWeb(null)}
      />

    </section>
  );
}

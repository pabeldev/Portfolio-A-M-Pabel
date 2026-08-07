import React from 'react';
import { personalProfile } from '../../data/personalData';
import { Sparkles, Zap, Film, Palette, ArrowRight, MessageSquare, Terminal } from 'lucide-react';

export default function PersonalHero({ onExploreWorks, onOpenVibeSim, onOpenContact }) {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glow FX */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Bio & Core Pitch */}
        <div className="lg:col-span-7 space-y-8 z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,243,255,0.15)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">
              {personalProfile.status} ⚡️
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-xs text-slate-400 font-medium">Founder @ FramEmpire</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white font-['Creato_Display',sans-serif]">
              Crafting Motion, <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Design & Vibe Code
              </span>
            </h1>
            
            {/* Roles Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {personalProfile.roles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800/80 border border-slate-700/80 text-cyan-300 hover:border-cyan-500/50 transition-colors"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Bio text */}
          <p className="text-lg text-slate-300 leading-relaxed font-light max-w-2xl">
            {personalProfile.bio}
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreWorks}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:shadow-[0_0_35px_rgba(0,243,255,0.6)] hover:scale-[1.02] transition-all flex items-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
              Explore Works & Renders
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenVibeSim}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 font-semibold text-sm backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              Try Vibe Code Simulator
            </button>

            <button
              onClick={onOpenContact}
              className="px-5 py-3.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-slate-400" />
              Direct Hire / Contact
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            {personalProfile.stats.map((stat, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
                <div className="text-2xl font-black text-white font-mono">{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                <div className="text-[10px] text-cyan-400/90 mt-0.5 font-mono">{stat.change}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Cybernetic Avatar & Interactive Glass Card */}
        <div className="lg:col-span-5 relative flex justify-center z-10">
          
          {/* Avatar Outer Neon Ring */}
          <div className="relative group w-full max-w-md">
            
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-600 to-amber-400 opacity-60 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

            <div className="relative rounded-3xl bg-slate-950 border border-cyan-500/30 overflow-hidden shadow-2xl p-2 backdrop-blur-xl">
              
              <img
                src={personalProfile.avatarUrl}
                alt="A M Pabel Avatar"
                className="w-full h-[440px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Live Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 border border-cyan-500/40 backdrop-blur-xl shadow-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white tracking-wide">A M PABEL</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    VIBE CODING MODE
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-bounce" />
                  Octane 3D • DaVinci 4K • React AI
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

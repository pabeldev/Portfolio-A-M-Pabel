import React from 'react';
import { personalProfile } from '../../data/personalData';
import AvatarRatingBadge from './AvatarRatingBadge';
import PremiereTimelineAnimation from './PremiereTimelineAnimation';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export default function CleanHero() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/10 light:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center z-10 relative">
        
        {/* Left Column: Real Photo Portrait & Avatar 4.5 Star Rating Badge */}
        <div className="lg:col-span-5 flex flex-col items-center">
          
          {/* Portrait Container */}
          <div className="relative group w-full max-w-sm">
            {/* Ambient Rim Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50 light:opacity-20 blur-lg group-hover:opacity-80 transition duration-500" />
            
            <div className="relative rounded-3xl bg-slate-950 light:bg-white/90 light:backdrop-blur-xl border border-cyan-500/30 light:border-slate-200 overflow-hidden shadow-2xl p-2.5">
              <img
                src={personalProfile.avatarUrl}
                alt="A M Pabel Portrait"
                className="w-full h-[340px] sm:h-[400px] object-cover rounded-2xl"
              />
              
              {/* Clean Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-slate-950/85 light:bg-white/95 border border-slate-800 light:border-slate-200 backdrop-blur-md flex items-center justify-between shadow-lg">
                <div>
                  <h4 className="text-sm font-bold text-white light:text-slate-900">A M Pabel</h4>
                  <p className="text-xs text-cyan-400 light:text-cyan-700 font-mono font-medium">Designer | Animator | Editor</p>
                </div>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
            </div>
          </div>

          {/* 5 Avatar & 4.5 Star Rating Badge */}
          <AvatarRatingBadge />

        </div>

        {/* Right Column: Bio, CTAs & Premiere Pro Live Animation Widget */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 light:border-cyan-200 text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Designer • Animator • Editor • Vibe Coder
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white light:text-slate-900 leading-tight font-['Creato_Display',sans-serif]">
            High-Impact Motion, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 light:from-cyan-600 light:via-blue-600 light:to-purple-600 bg-clip-text text-transparent">
              Design & Vibe Code
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 light:text-slate-700 font-light leading-relaxed max-w-2xl">
            {personalProfile.bio}
          </p>

          {/* Action CTAs: Strictly Side-by-Side (PASAPASI) on All Devices */}
          <div className="flex items-center gap-2.5 sm:gap-4 pt-2 w-full">
            <a
              href="#works"
              className="flex-1 py-3 px-3 sm:px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 light:from-cyan-600 light:to-blue-700 text-slate-950 light:text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,243,255,0.3)] light:shadow-md hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all flex items-center justify-center gap-1.5 sm:gap-2 group shrink-0 text-center"
            >
              <span className="truncate">Explore Works</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            <a
              href="https://wa.me/8801615288259"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 px-3 sm:px-6 rounded-xl bg-slate-900 light:bg-gradient-to-r light:from-emerald-500 light:to-teal-600 border border-slate-700 light:border-emerald-600 hover:border-cyan-500/50 text-slate-200 light:text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 text-center shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 light:text-white shrink-0" />
              <span className="truncate">Direct WhatsApp</span>
            </a>
          </div>

          {/* Premiere Pro Live Video Timeline Animation Widget */}
          <PremiereTimelineAnimation />

        </div>

      </div>

    </section>
  );
}

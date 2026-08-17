import React from 'react';
import { personalProfile } from '../../data/personalData';
import AvatarRatingBadge from './AvatarRatingBadge';
import PremiereTimelineAnimation from './PremiereTimelineAnimation';
import { Sparkles, FileText, ArrowRight } from 'lucide-react';

export default function CleanHero() {
  const navigateToResume = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', '/resume');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center z-10 relative">
        
        {/* Left Column: Real Photo Portrait & Avatar 4.5 Star Rating Badge */}
        <div className="lg:col-span-5 flex flex-col items-center">
          
          {/* Portrait Container */}
          <div className="relative group w-full max-w-sm">
            {/* Ambient Rim Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50 blur-lg group-hover:opacity-80 transition duration-500" />
            
            <div className="relative rounded-3xl bg-slate-950 border border-cyan-500/30 overflow-hidden shadow-2xl p-2.5">
              <img
                src={personalProfile.avatarUrl}
                alt="A M Pabel Portrait"
                className="w-full h-[340px] sm:h-[400px] object-cover rounded-2xl"
              />
              
              {/* Clean Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-slate-950/85 border border-slate-800 backdrop-blur-md flex items-center justify-between shadow-lg">
                <div>
                  <h4 className="text-sm font-bold text-white">A M Pabel</h4>
                  <p className="text-xs text-cyan-400 font-mono">Designer | Animator | Editor</p>
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
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Designer | Animator | Editor
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight font-['Creato_Display',sans-serif]">
            High-Impact Motion, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Design & Vibe Code
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
            {personalProfile.bio}
          </p>

          {/* Action CTAs: Strictly Side-by-Side (PASAPASI) on All Devices */}
          <div className="flex items-center gap-2.5 sm:gap-4 pt-2 w-full">
            <a
              href="#works"
              className="flex-1 py-3 px-3 sm:px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all flex items-center justify-center gap-1.5 sm:gap-2 group shrink-0 text-center"
            >
              <span className="truncate">Explore Works</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            <a
              href="/resume"
              onClick={navigateToResume}
              className="flex-1 py-3 px-3 sm:px-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 text-center shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
              <span className="truncate">View Resume</span>
            </a>
          </div>

          {/* Premiere Pro Live Video Timeline Animation Widget */}
          <PremiereTimelineAnimation />

        </div>

      </div>

    </section>
  );
}

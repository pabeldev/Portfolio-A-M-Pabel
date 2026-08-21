import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  const navigateToHome = (e) => {
    if (e) e.preventDefault();
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-8 font-['Plus_Jakarta_Sans'] relative overflow-hidden">
      
      {/* Background Orbs & Grid */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#070913] via-[#090e24] to-[#070913] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-animated-grid pointer-events-none z-0 opacity-50" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[180px] pointer-events-none z-0" />

      {/* 404 Content Container */}
      <div className="relative z-10 max-w-md w-full p-8 rounded-3xl bg-slate-900/80 border border-slate-800 text-center space-y-6 shadow-2xl backdrop-blur-2xl">
        
        {/* Glow Badge */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(0,243,255,0.2)]">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
            404 Error
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Creato_Display',sans-serif]">
            Signal Path <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Not Found</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            The route or project page you are trying to access does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={navigateToHome}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>

        <div className="pt-2 text-[11px] font-mono text-slate-400">
          <span>A M Pabel Studio • portfolio.ampabel.com</span>
        </div>

      </div>

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}

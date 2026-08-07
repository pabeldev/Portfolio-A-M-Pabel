import React from 'react';
import { Sparkles, ShieldCheck, LogOut, Lock, UserCheck, Zap, Globe } from 'lucide-react';
import { AGENCY_INFO } from '../data/creativeData';

export default function Navbar({ 
  viewMode, 
  activeTab,
  onTabChange,
  onSignOut, 
  userRole, 
  setUserRole, 
  onOpenEstimator, 
  onOpenLoginModal 
}) {
  return (
    <header className="sticky top-0 z-50 bg-[#070913]/90 backdrop-blur-xl border-b border-cyan-500/20 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand & Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange && onTabChange('agency')}>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-[0_0_20px_rgba(0,243,255,0.4)]">
            <div className="w-full h-full bg-[#070913] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['Creato_Display'] font-extrabold text-xl tracking-wider text-white">
                {activeTab === 'personal' ? 'A M PABEL' : AGENCY_INFO.name}
              </span>
              {viewMode === 'admin' ? (
                <span className="neon-badge text-[9px] py-0.5 px-2 border-yellow-500/40 text-yellow-400 bg-yellow-950/40">
                  INTERNAL ADMIN
                </span>
              ) : activeTab === 'personal' ? (
                <span className="neon-badge text-[9px] py-0.5 px-2 border-amber-500/40 text-amber-300 bg-amber-950/40">
                  PORTFOLIO & VIBE CODE
                </span>
              ) : (
                <span className="neon-badge text-[9px] py-0.5 px-2">CREATIVE STUDIO</span>
              )}
            </div>
            <p className="text-xs text-cyan-300/60 hidden sm:block">
              {activeTab === 'personal'
                ? 'Graphic Design • Video Editing • 3D Motion • Vibe Coding'
                : 'Animation • Motion • Design • Web'}
            </p>
          </div>
        </div>

        {/* Cyber Mode Switcher Pills (Agency vs Personal Portfolio) */}
        {viewMode === 'public' && (
          <div className="hidden sm:flex items-center p-1 rounded-2xl bg-slate-950 border border-cyan-500/30 backdrop-blur-md">
            <button
              onClick={() => onTabChange('agency')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'agency'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                  : 'text-slate-400 hover:text-cyan-300'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Agency View</span>
            </button>

            <button
              onClick={() => onTabChange('personal')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'personal'
                  ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'text-slate-400 hover:text-amber-300'
              }`}
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Pabel Portfolio</span>
            </button>
          </div>
        )}

        {/* Public Navigation Items */}
        {viewMode === 'public' ? (
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-300">
              {activeTab === 'agency' ? (
                <>
                  <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
                  <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
                  <a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a>
                </>
              ) : (
                <>
                  <a href="#skills-matrix" className="hover:text-cyan-400 transition-colors">Skills Matrix</a>
                  <a href="#vibe-coding-sim" className="hover:text-cyan-400 transition-colors">Vibe Simulator</a>
                  <a href="#personal-works" className="hover:text-cyan-400 transition-colors">Creations</a>
                  <a href="#contact-pabel" className="hover:text-cyan-400 transition-colors">Contact</a>
                </>
              )}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenEstimator}
                className="neon-button-secondary py-2 px-3.5 text-xs hidden sm:flex"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>PDF Estimator</span>
              </button>

              {/* Mobile View Switcher */}
              <button
                onClick={() => onTabChange(activeTab === 'agency' ? 'personal' : 'agency')}
                className="sm:hidden text-xs px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold"
              >
                {activeTab === 'agency' ? '⚡️ Pabel' : '🌐 Studio'}
              </button>

              {/* Discreet Staff Portal Login Button */}
              <button
                onClick={onOpenLoginModal}
                className="text-xs text-slate-400 hover:text-cyan-400 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Internal Employee Login"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden lg:inline">Staff</span>
              </button>
            </div>
          </div>
        ) : (
          /* Admin Header Bar */
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-950/90 px-3 py-1.5 rounded-xl border border-cyan-500/30">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-slate-400 hidden sm:inline">Role:</span>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="bg-transparent text-xs font-bold text-cyan-300 outline-none cursor-pointer"
              >
                <option value="Admin / Executive" className="bg-slate-900 text-white">Admin / Executive</option>
                <option value="Creative Director" className="bg-slate-900 text-white">Creative Director</option>
                <option value="Motion & Video Lead" className="bg-slate-900 text-white">Motion & Video Lead</option>
                <option value="Senior Developer" className="bg-slate-900 text-white">Senior Developer</option>
              </select>
            </div>

            <button
              onClick={onSignOut}
              className="flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs font-semibold transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit Admin</span>
            </button>
          </div>
        )}

      </div>
    </header>
  );
}

import React from 'react';
import { MessageSquare, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function CleanNavbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-[#070913]/90 light:bg-white/90 backdrop-blur-xl border-b border-slate-800/80 light:border-slate-200 px-4 md:px-8 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Name */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-[0_0_15px_rgba(0,243,255,0.3)]">
            <div className="w-full h-full bg-[#070913] light:bg-white rounded-[11px] flex items-center justify-center font-black text-cyan-400 light:text-cyan-600 font-mono text-sm">
              AMP
            </div>
          </div>
          <div>
            <span className="font-['Creato_Display',sans-serif] font-black text-xl tracking-wider text-white light:text-slate-900">
              A M PABEL
            </span>
            <span className="text-xs text-cyan-400 light:text-cyan-600 font-mono block">
              Designer | Animator | Editor
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300 light:text-slate-600">
          <a href="#services" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">Services</a>
          <a href="#works" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">Works</a>
          <a href="#vibe-code" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">Vibe Coding</a>
          <a href="#contact" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">Contact</a>
        </nav>

        {/* Direct WhatsApp CTA & Theme Switcher Button */}
        <div className="flex items-center gap-3">
          
          {/* Sun / Moon Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme Mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-700 light:border-slate-300 text-cyan-400 light:text-slate-700 hover:scale-105 transition-all cursor-pointer shadow-md"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <a
            href="https://wa.me/8801615288259"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp Pabel</span>
          </a>

        </div>

      </div>
    </header>
  );
}

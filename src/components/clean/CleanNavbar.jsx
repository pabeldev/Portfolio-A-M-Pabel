import React, { useState } from 'react';
import { MessageSquare, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function CleanNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070913]/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800/80 light:border-slate-200 px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Custom WebP Logo */}
          <div className="h-9 w-auto flex items-center justify-center p-1 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 shadow-md group-hover:border-cyan-500/50 transition-colors">
            <img
              src="/assets/A-M-Pabel-Logo.webp"
              alt="A M Pabel Official Logo"
              className="h-7 w-auto object-contain"
            />
          </div>

          <div>
            <span className="font-['Creato_Display',sans-serif] font-black text-lg md:text-xl tracking-wider text-white light:text-slate-900 block leading-tight">
              A M PABEL
            </span>
            <span className="text-[10px] md:text-xs text-cyan-400 light:text-cyan-600 font-mono block">
              Designer | Animator | Editor
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300 light:text-slate-600">
          <a href="#services" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">Services</a>
          <a href="#works" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">Works</a>
          <a href="#vibe-code" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">Vibe Coding</a>
          <a href="#contact" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">Contact</a>
        </nav>

        {/* Action Controls & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          
          {/* Sun / Moon Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme Mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-700 light:border-slate-300 text-cyan-400 light:text-slate-700 hover:scale-105 transition-all cursor-pointer shadow-md"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/8801615288259"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 md:px-4 md:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all flex items-center gap-1.5 shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">WhatsApp Pabel</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-300 light:text-slate-700 hover:text-cyan-400 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 px-2 border-t border-slate-800/80 light:border-slate-200 mt-3 space-y-2 animate-in slide-in-from-top duration-200">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 light:text-slate-700 hover:bg-slate-900 light:hover:bg-slate-100 hover:text-cyan-400"
          >
            Services
          </a>
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 light:text-slate-700 hover:bg-slate-900 light:hover:bg-slate-100 hover:text-cyan-400"
          >
            Works
          </a>
          <a
            href="#vibe-code"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 light:text-slate-700 hover:bg-slate-900 light:hover:bg-slate-100 hover:text-cyan-400"
          >
            Vibe Coding
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 light:text-slate-700 hover:bg-slate-900 light:hover:bg-slate-100 hover:text-cyan-400"
          >
            Contact
          </a>
        </div>
      )}

    </header>
  );
}

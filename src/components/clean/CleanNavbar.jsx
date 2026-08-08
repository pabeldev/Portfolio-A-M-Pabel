import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

export default function CleanNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-4 md:px-8 max-w-7xl mx-auto transition-all">
      <div className="bg-[#070913]/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl md:rounded-full px-4 sm:px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between">
        
        {/* Brand Logo Only (No text, no box border!) */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img
            src="/assets/A-M-Pabel-Logo.webp"
            alt="A M Pabel Official Logo"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#works" className="hover:text-cyan-400 transition-colors">Works</a>
          <a href="#vibe-code" className="hover:text-cyan-400 transition-colors">Vibe Coding</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        {/* Action Controls & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          
          {/* WhatsApp CTA (Signature Cyan/Blue Gradient) */}
          <a
            href="https://wa.me/8801615288259"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 md:px-5 md:py-2.5 rounded-xl md:rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all flex items-center gap-1.5 shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">WhatsApp Pabel</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 px-4 bg-[#070913]/95 backdrop-blur-xl border border-slate-800 rounded-2xl mt-2 space-y-2 animate-in slide-in-from-top duration-200 shadow-2xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
          >
            Services
          </a>
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
          >
            Works
          </a>
          <a
            href="#vibe-code"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
          >
            Vibe Coding
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
          >
            Contact
          </a>
        </div>
      )}

    </header>
  );
}

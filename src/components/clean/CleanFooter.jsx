import React from 'react';
import { MessageSquare, Mail, Phone, ExternalLink, ArrowUp, Heart } from 'lucide-react';

export default function CleanFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#05070e] text-slate-300 relative z-10 pt-16 pb-8 px-4 md:px-8">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Top Header Row: Pure Logo & Scroll to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-slate-800/80">
          
          {/* Pure Logo Image Only (No border box, no separate text name!) */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img
              src="/assets/A-M-Pabel-Logo.webp"
              alt="A M Pabel Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Status Badge & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for New Projects</span>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer shadow-md group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* 4-Column Agency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Col 1: Creative Disciplines */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Creative Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                3D Motion Graphics & Animation
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Commercial Video Editing & VFX
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Graphic Design & Brand Systems
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Vibe Coding & AI Web Applications
              </li>
            </ul>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Specialized Services</a></li>
              <li><a href="#works" className="hover:text-cyan-300 transition-colors">Selected Client Works</a></li>
              <li><a href="#vibe-code" className="hover:text-cyan-300 transition-colors">Vibe Coded Live Sites</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <a href="https://wa.me/8801615288259" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-mono font-semibold">+880 1615-288259</span>
              </a>
              <a href="mailto:info@ampabel.com" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-mono font-semibold">info@ampabel.com</span>
              </a>
            </div>
          </div>

          {/* Col 4: Studio Network */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Studio Network
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href="https://www.framempire.com" target="_blank" rel="noreferrer" className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all group">
                <span className="font-bold text-white group-hover:text-cyan-300">FramEmpire Studio</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </a>
              <a href="https://github.com/pabeldev" target="_blank" rel="noreferrer" className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all group">
                <span className="font-bold text-white group-hover:text-cyan-300">GitHub (pabeldev)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & FramEmpire Developer Credit */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div>
            <span>© {new Date().getFullYear()} A M Pabel. All Rights Reserved.</span>
          </div>

          {/* Developer Credit Hyperlink */}
          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" />
            <span>by</span>
            <a
              href="https://www.framempire.com"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 transition-colors"
            >
              FramEmpire
            </a>
            <span>Developer Team</span>
          </div>

        </div>

      </div>

    </footer>
  );
}

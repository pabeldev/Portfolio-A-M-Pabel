import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CleanNavbar from './components/clean/CleanNavbar';
import CleanHero from './components/clean/CleanHero';
import CleanServices from './components/clean/CleanServices';
import CleanPortfolio from './components/clean/CleanPortfolio';
import CleanVibeCode from './components/clean/CleanVibeCode';
import MacCodeShowcase from './components/clean/MacCodeShowcase';
import CleanContact from './components/clean/CleanContact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#070913] light:bg-white text-slate-100 light:text-slate-900 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden transition-colors duration-300">
        
        {/* Subtle Ambient Background Gradient + Blurry Low-Transparency Animated Grid */}
        <div className="fixed inset-0 bg-gradient-to-b from-[#070913] via-[#090e24] to-[#070913] light:from-white light:via-slate-50/50 light:to-white pointer-events-none z-0 transition-colors duration-300" />
        <div className="fixed inset-0 bg-animated-grid pointer-events-none z-0 opacity-60 light:opacity-70" />

        {/* Ambient Radial Gradient Glow Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 light:bg-cyan-500/10 blur-[160px] pointer-events-none z-0" />
        <div className="fixed top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/10 light:bg-purple-600/10 blur-[180px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-600/10 light:bg-blue-600/10 blur-[160px] pointer-events-none z-0" />

        {/* Clean Personal Header */}
        <CleanNavbar />

        {/* Main Portfolio Sections */}
        <main className="flex-1 relative z-10">
          <CleanHero />
          <CleanServices />
          <CleanPortfolio />
          <CleanVibeCode />
          {/* Infinite Mac Code Stream Visual Showcase */}
          <MacCodeShowcase />
          <CleanContact />
        </main>

        {/* Clean Footer with FramEmpire Developer Credit */}
        <footer className="border-t border-slate-800/80 light:border-slate-200 bg-slate-950/90 light:bg-white/90 py-10 px-4 md:px-8 relative z-10 backdrop-blur-md transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 light:text-slate-600">
            <div>
              <span className="font-bold text-white light:text-slate-900">A M PABEL</span> — Designer | Animator | Editor
            </div>

            {/* Developer Credit Hyperlink */}
            <div className="text-slate-300 light:text-slate-700 font-medium">
              Developed by{' '}
              <a
                href="https://www.framempire.com"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 light:text-cyan-600 hover:text-cyan-300 font-bold underline underline-offset-4 transition-colors"
              >
                FramEmpire
              </a>{' '}
              Developer Team
            </div>

            <div className="flex items-center gap-5 text-slate-400 light:text-slate-600 font-mono">
              <a href="https://wa.me/8801615288259" target="_blank" rel="noreferrer" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">
                +880 1615-288259
              </a>
              <a href="mailto:info@ampabel.com" className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors">
                info@ampabel.com
              </a>
            </div>

          </div>
        </footer>

      </div>
    </ThemeProvider>
  );
}

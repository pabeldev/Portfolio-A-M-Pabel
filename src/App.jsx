import React from 'react';
import CleanNavbar from './components/clean/CleanNavbar';
import CleanHero from './components/clean/CleanHero';
import CleanServices from './components/clean/CleanServices';
import CleanPortfolio from './components/clean/CleanPortfolio';
import CleanVibeCode from './components/clean/CleanVibeCode';
import MacCodeShowcase from './components/clean/MacCodeShowcase';
import CleanContact from './components/clean/CleanContact';
import CleanFooter from './components/clean/CleanFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Subtle Ambient Background Gradient + Blurry 60FPS Animated Grid */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#070913] via-[#090e24] to-[#070913] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-animated-grid pointer-events-none z-0 opacity-60" />

      {/* Ambient Radial Gradient Glow Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none z-0" />

      {/* Sticky Floating Rounded Navbar */}
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

      {/* Professional Agency Studio Footer */}
      <CleanFooter />

    </div>
  );
}

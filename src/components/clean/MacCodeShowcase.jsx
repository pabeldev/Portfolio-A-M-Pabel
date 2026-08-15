import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Sparkles, Code2, ShieldCheck, Layers, FileCode, Atom, Zap, Play, Mail, CheckCircle2 } from 'lucide-react';

const interactiveCodeBlocks = {
  portfolio: {
    file: 'renderPortfolioGallery.tsx',
    lang: 'React 18 / Tailwind',
    lines: [
      { text: '// ⚡ INTERACTIVE GENERATOR: RENDERING FEATURED PORTFOLIO GALLERY...', type: 'comment' },
      { text: 'import React from "react";', type: 'import' },
      { text: 'import { portfolioProjects } from "../data/personalData";', type: 'import' },
      { text: '', type: 'blank' },
      { text: 'export function renderPortfolioGallery() {', type: 'func' },
      { text: '  return (', type: 'jsx' },
      { text: '    <PortfolioGrid items={portfolioProjects} mode="3D_MOTION_EDITS" />', type: 'jsx' },
      { text: '  );', type: 'jsx' },
      { text: '}', type: 'func' }
    ]
  },
  contact: {
    file: 'renderContactSection.tsx',
    lang: 'React 18 / WhatsApp Stream',
    lines: [
      { text: '// 📬 INTERACTIVE GENERATOR: RENDERING DIRECT CONTACT SECTION...', type: 'comment' },
      { text: 'import React from "react";', type: 'import' },
      { text: 'import { Phone, Mail, Send } from "lucide-react";', type: 'import' },
      { text: '', type: 'blank' },
      { text: 'export function renderContactSection() {', type: 'func' },
      { text: '  return (', type: 'jsx' },
      { text: '    <ContactDirect phone="+8801615288259" email="info@ampabel.com" />', type: 'jsx' },
      { text: '  );', type: 'jsx' },
      { text: '}', type: 'func' }
    ]
  }
};

export default function MacCodeShowcase({ onSelectChoice }) {
  const [activeChoice, setActiveChoice] = useState('portfolio'); // 'portfolio' | 'contact'
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedLines, setTypedLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasTriggeredInitial, setHasTriggeredInitial] = useState(false);
  
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const currentBlock = interactiveCodeBlocks[activeChoice];

  // Trigger initial typing sequence when scrolled into view
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggeredInitial) {
          setHasTriggeredInitial(true);
          triggerTypingSequence('portfolio');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, [hasTriggeredInitial]);

  // Execute 0.5-second (500ms) high-speed typing sequence for a choice
  const triggerTypingSequence = (choiceKey) => {
    setActiveChoice(choiceKey);
    setTypedLines([]);
    setLineIndex(0);
    setCharIndex(0);
    setIsTyping(true);
  };

  // High-speed 500ms character streaming loop
  useEffect(() => {
    if (!isTyping) return;

    const currentLineObj = currentBlock.lines[lineIndex];

    // Finished typing all lines in 0.5s!
    if (!currentLineObj) {
      setIsTyping(false);
      
      // Perform 0.5s reveal callback and smooth scroll
      if (onSelectChoice) {
        onSelectChoice(activeChoice);
      }

      // Smooth scroll to section after 500ms reveal
      setTimeout(() => {
        const targetId = activeChoice === 'portfolio' ? 'works' : 'contact';
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

      return;
    }

    // Total characters calculation for exact 500ms timing
    const totalChars = currentBlock.lines.reduce((acc, l) => acc + l.text.length, 0);
    const msPerChar = Math.max(2, Math.floor(450 / (totalChars || 1)));

    const timer = setTimeout(() => {
      if (charIndex < currentLineObj.text.length) {
        const partialText = currentLineObj.text.substring(0, charIndex + 1);
        setTypedLines((prev) => {
          const updated = [...prev];
          updated[lineIndex] = { ...currentLineObj, text: partialText };
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      } else {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, msPerChar);

    return () => clearTimeout(timer);
  }, [isTyping, activeChoice, lineIndex, charIndex, currentBlock, onSelectChoice]);

  // Auto-scroll screen down inside terminal
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [typedLines, charIndex]);

  // Syntax Highlighting Renderer
  const renderSyntaxLine = (line) => {
    if (!line) return null;
    const text = line.text;

    if (line.type === 'comment') {
      return <span className="text-emerald-400 font-bold">{text}</span>;
    }
    if (line.type === 'import') {
      return (
        <span>
          <span className="text-pink-400 font-bold">import </span>
          <span className="text-slate-100">{text.replace('import ', '')}</span>
        </span>
      );
    }
    if (line.type === 'func') {
      return (
        <span>
          <span className="text-purple-400 font-bold">function </span>
          <span className="text-cyan-300 font-bold">{text.replace('export function ', '').replace('function ', '')}</span>
        </span>
      );
    }
    if (line.type === 'state') {
      return (
        <span>
          <span className="text-purple-400 font-bold">const </span>
          <span className="text-blue-400">{text.replace('const ', '')}</span>
        </span>
      );
    }

    return <span className="text-cyan-200">{text}</span>;
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Info */}
      <div className="text-center space-y-3 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(0,243,255,0.2)]">
          <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
          Interactive Multi-Option Code Generator
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-['Creato_Display',sans-serif]">
          Choose Code & <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 bg-clip-text text-transparent">Reveal UI (0.5s)</span>
        </h2>
        
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
          Click an interactive option below to simulate live 0.5s high-speed code generation that dynamically reveals your selected section!
        </p>

        {/* 2 Dynamic Interactive Option Buttons: [View Portfolio] and [Contact Me] */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
          
          <button
            disabled={isTyping}
            onClick={() => triggerTypingSequence('portfolio')}
            className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-lg ${
              activeChoice === 'portfolio'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_25px_rgba(0,243,255,0.4)] scale-105'
                : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/50'
            } ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Play className="w-4 h-4 fill-current shrink-0" />
            <span>[⚡ View Portfolio Gallery]</span>
          </button>

          <button
            disabled={isTyping}
            onClick={() => triggerTypingSequence('contact')}
            className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-lg ${
              activeChoice === 'contact'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-slate-950 shadow-[0_0_25px_rgba(168,85,247,0.4)] scale-105'
                : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500/50'
            } ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>[📬 Direct Contact Me]</span>
          </button>

        </div>

      </div>

      {/* Mac Terminal IDE Container */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* Orbit Border Wrapper */}
        <div className="orbit-border-wrapper shadow-[0_0_50px_rgba(0,243,255,0.2)]">
          
          {/* 360° Rotating Conic Gradient Beam */}
          <div className="orbit-border-gradient" />

          {/* Mac Screen Display Inner Shell */}
          <div className="relative rounded-[32px] bg-[#070913] border border-slate-900 overflow-hidden flex flex-col shadow-2xl z-10 p-1">
            
            {/* macOS Title Bar */}
            <div className="px-3.5 sm:px-5 py-3 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-2 sm:gap-4 rounded-t-[28px]">
              
              {/* Mac Traffic Light Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56] inline-block shadow-[0_0_8px_rgba(255,95,86,0.8)]" />
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ffbd2e] inline-block shadow-[0_0_8px_rgba(255,189,46,0.8)]" />
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f] inline-block shadow-[0_0_8px_rgba(39,201,63,0.8)]" />
              </div>

              {/* Status Header */}
              <div className="text-xs font-mono text-cyan-300 font-bold flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>{currentBlock.file}</span>
              </div>

              {/* Live Speed Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold shrink-0">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{isTyping ? 'SYNTHESIZING 0.5s...' : '0.5s READY'}</span>
              </div>

            </div>

            {/* Code Real-Time Typing Screen */}
            <div
              ref={scrollRef}
              className="relative h-[260px] sm:h-[300px] bg-slate-950/95 overflow-y-auto font-mono text-xs sm:text-sm p-3 sm:p-6 scroll-smooth"
            >
              
              {/* Scanline Overlay Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_51%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-20" />

              <div className="space-y-1 overflow-x-auto">
                {typedLines.map((line, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-4 leading-6 whitespace-nowrap sm:whitespace-normal">
                    <span className="w-5 sm:w-6 text-right text-slate-600 select-none text-xs shrink-0">{idx + 1}</span>
                    <div className="flex-1 font-mono">
                      {renderSyntaxLine(line)}
                      {/* Active Cursor Block */}
                      {idx === lineIndex && (
                        <span className="inline-block w-2 sm:w-2.5 h-3.5 sm:h-4 bg-cyan-400 shadow-[0_0_12px_#00f3ff] animate-pulse ml-0.5 align-middle" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* macOS Footer Spec Bar */}
            <div className="px-4 sm:px-6 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 rounded-b-[28px]">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 flex items-center gap-1 font-bold truncate">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  0.5s Code-to-UI Active
                </span>
                <span className="hidden sm:inline text-slate-700">|</span>
                <span className="hidden sm:inline text-slate-400">A M Pabel</span>
              </div>
              <span className="text-cyan-400 font-bold">500ms Reveal Engine</span>
            </div>

          </div>

          {/* Mac Base Stand Notch */}
          <div className="w-32 sm:w-44 h-2 bg-slate-800/90 rounded-b-2xl mx-auto shadow-md relative z-10" />

        </div>

      </div>

    </section>
  );
}

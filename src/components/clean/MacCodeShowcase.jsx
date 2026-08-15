import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Sparkles, Code2, ShieldCheck, Layers, FileCode, Atom, Zap } from 'lucide-react';

const tabsData = [
  { id: 'contact-synthesis', label: 'Contact UI Stream', icon: Zap },
  { id: 'react', label: 'React / TS', icon: Atom },
  { id: 'node', label: 'Node / AI', icon: FileCode },
  { id: 'webgl', label: 'WebGL Shader', icon: Layers }
];

const codeBlocks = [
  {
    tabId: 'contact-synthesis',
    file: 'CleanContactSynthesis.jsx',
    lang: 'React 18 / Tailwind CSS',
    lines: [
      { text: '// ⚡ LIVE AI SYNTHESIS: GENERATING CONTACT COMPONENT IN 2s...', type: 'comment' },
      { text: 'import React, { useState } from "react";', type: 'import' },
      { text: 'import { Phone, Mail, Send, CheckCircle } from "lucide-react";', type: 'import' },
      { text: '', type: 'blank' },
      { text: 'export function CleanContactUI({ status = "AVAILABLE" }) {', type: 'func' },
      { text: '  const [phone] = useState("+880 1615-288259");', type: 'state' },
      { text: '  const [email] = useState("info@ampabel.com");', type: 'state' },
      { text: '', type: 'blank' },
      { text: '  return (', type: 'jsx' },
      { text: '    <section className="p-8 bg-slate-950 border border-cyan-500 rounded-3xl">', type: 'jsx' },
      { text: '      <h2 className="text-4xl font-black text-white">Let\'s Build Your Project</h2>', type: 'jsx' },
      { text: '      <a href={`https://wa.me/${phone}`}>Direct WhatsApp Chat</a>', type: 'jsx' },
      { text: '    </section>', type: 'jsx' },
      { text: '  );', type: 'jsx' },
      { text: '}', type: 'func' }
    ]
  },
  {
    tabId: 'react',
    file: 'frontend-matrix.tsx',
    lang: 'React / TS',
    lines: [
      { text: '// ⚡ FRONTEND: HIGH-SPEED REACT VIBE SYNTHESIS', type: 'comment' },
      { text: 'import React, { useState, useEffect } from "react";', type: 'import' },
      { text: 'import { motion } from "framer-motion";', type: 'import' },
      { text: '', type: 'blank' },
      { text: 'export function VibeMatrixCore({ creator, status }) {', type: 'func' },
      { text: '  const [fps, setFps] = useState(60);', type: 'state' },
      { text: '  const [activeNodes, setActiveNodes] = useState(128);', type: 'state' },
      { text: '', type: 'blank' },
      { text: '  return (', type: 'jsx' },
      { text: '    <div className="p-8 rounded-3xl bg-slate-950 border border-cyan-500">', type: 'jsx' },
      { text: '      <h1 className="text-4xl font-black text-white">{creator}</h1>', type: 'jsx' },
      { text: '    </div>', type: 'jsx' },
      { text: '  );', type: 'jsx' },
      { text: '}', type: 'func' }
    ]
  },
  {
    tabId: 'node',
    file: 'gemini-stream.js',
    lang: 'Node.js / Express',
    lines: [
      { text: '// 🤖 BACKEND: GEMINI 1.5 FLASH REAL-TIME AI STREAM', type: 'comment' },
      { text: 'import { GoogleGenerativeAI } from "@google/generative-ai";', type: 'import' },
      { text: 'import express from "express";', type: 'import' },
      { text: '', type: 'blank' },
      { text: 'const app = express();', type: 'state' },
      { text: 'const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);', type: 'state' },
      { text: 'const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });', type: 'state' },
      { text: '', type: 'blank' },
      { text: 'app.post("/api/vibe-stream", async (req, res) => {', type: 'func' },
      { text: '  const stream = await model.generateContentStream({ prompt: req.body });', type: 'effect' },
      { text: '  res.end();', type: 'func' },
      { text: '});', type: 'func' }
    ]
  },
  {
    tabId: 'webgl',
    file: 'octane-vortex.glsl',
    lang: 'WebGL Shader',
    lines: [
      { text: '// 🌌 WEBGL: OCTANE RAY-TRACED FLUID SHADER', type: 'comment' },
      { text: 'uniform float uTime;', type: 'import' },
      { text: 'uniform vec2 uResolution;', type: 'import' },
      { text: '', type: 'blank' },
      { text: 'void main() {', type: 'func' },
      { text: '  vec2 st = gl_FragCoord.xy / uResolution.xy;', type: 'effect' },
      { text: '  vec3 color = mix(vec3(0.0, 0.95, 1.0), vec3(0.6, 0.2, 1.0), st.x);', type: 'effect' },
      { text: '  gl_FragColor = vec4(color * sin(uTime * 2.0), 1.0);', type: 'jsx' },
      { text: '}', type: 'func' }
    ]
  }
];

export default function MacCodeShowcase({ onRevealContact }) {
  const [blockIndex, setBlockIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedLines, setTypedLines] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const currentBlock = codeBlocks[blockIndex];

  // 1. Trigger on Scroll using IntersectionObserver (Runs ONCE)
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // Disconnect after triggering once!
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  // 2. Real-time Typing Engine: Completes current block in exactly 2 seconds (2000ms)!
  useEffect(() => {
    if (!hasStarted) return;

    const currentLineObj = currentBlock.lines[lineIndex];

    // If finished typing all lines in current block
    if (!currentLineObj) {
      if (blockIndex === 0 && onRevealContact) {
        onRevealContact(); // Trigger 2-second UI reveal!
      }

      const nextTimer = setTimeout(() => {
        setTypedLines([]);
        setLineIndex(0);
        setCharIndex(0);
        setBlockIndex((prev) => (prev + 1) % codeBlocks.length);
      }, 500);
      return () => clearTimeout(nextTimer);
    }

    // Total characters in this block for 2.0s timing calculation
    const totalChars = currentBlock.lines.reduce((acc, l) => acc + l.text.length, 0);
    const msPerChar = Math.max(3, Math.floor(2000 / (totalChars || 1)));

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
  }, [hasStarted, blockIndex, lineIndex, charIndex, onRevealContact]);

  // Auto-scroll screen down to keep active typing line pinned in view
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
      <div className="text-center space-y-3 mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(0,243,255,0.2)]">
          <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
          Real-Time Code-to-UI Synthesis Engine
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-['Creato_Display',sans-serif]">
          Live AI Synthesis <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 bg-clip-text text-transparent">Engine</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
          Simulating real-time high-speed code generation that dynamically reveals the Contact Section in 2 seconds.
        </p>
      </div>

      {/* Sleek Mac Device Outline Frame with 360° Rotating Orbit */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* Orbit Border Wrapper */}
        <div className="orbit-border-wrapper shadow-[0_0_50px_rgba(0,243,255,0.2)]">
          
          {/* 360° Rotating Conic Gradient Beam */}
          <div className="orbit-border-gradient" />

          {/* Mac Screen Display Inner Shell */}
          <div className="relative rounded-[32px] bg-[#070913] border border-slate-900 overflow-hidden flex flex-col shadow-2xl z-10 p-1">
            
            {/* macOS Title Bar & Icon Tabs */}
            <div className="px-3.5 sm:px-5 py-3 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-2 sm:gap-4 rounded-t-[28px]">
              
              {/* Mac Traffic Light Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56] inline-block shadow-[0_0_8px_rgba(255,95,86,0.8)]" />
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ffbd2e] inline-block shadow-[0_0_8px_rgba(255,189,46,0.8)]" />
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f] inline-block shadow-[0_0_8px_rgba(39,201,63,0.8)]" />
              </div>

              {/* Technology Icon Tabs */}
              <div className="flex items-center gap-1 sm:gap-2 bg-slate-950/90 p-1 sm:p-1.5 rounded-2xl border border-slate-800">
                {tabsData.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = currentBlock.tabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setBlockIndex(idx);
                        setTypedLines([]);
                        setLineIndex(0);
                        setCharIndex(0);
                      }}
                      title={tab.label}
                      className={`p-1.5 sm:p-2 rounded-xl transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 text-slate-950 shadow-[0_0_18px_rgba(0,243,255,0.8)] scale-105'
                          : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-900'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  );
                })}
              </div>

              {/* Live Status Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold shrink-0">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>2s LIVE CODE REVEAL</span>
              </div>

            </div>

            {/* Sub-header File Path */}
            <div className="px-4 sm:px-6 py-2 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 text-cyan-300 font-bold truncate">
                <Code2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">src/components/{currentBlock.file}</span>
              </div>
              <span className="text-purple-400 font-semibold shrink-0 ml-2">{currentBlock.lang}</span>
            </div>

            {/* Code Real-Time Typing Screen */}
            <div
              ref={scrollRef}
              className="relative h-[280px] sm:h-[340px] bg-slate-950/95 overflow-y-auto font-mono text-xs sm:text-sm p-3 sm:p-6 scroll-smooth"
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
                  Code-to-UI Stream Active
                </span>
                <span className="hidden sm:inline text-slate-700">|</span>
                <span className="hidden sm:inline text-slate-400">A M Pabel</span>
              </div>
              <span className="text-cyan-400 font-bold">2.0s Synthesis • FramEmpire</span>
            </div>

          </div>

          {/* Mac Base Stand Notch */}
          <div className="w-32 sm:w-44 h-2 bg-slate-800/90 rounded-b-2xl mx-auto shadow-md relative z-10" />

        </div>

      </div>

    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { vibeCodePresets } from '../../data/personalData';
import { Terminal, Play, Cpu, Check, Copy, Sparkles, Code2, Bot, Layers, Gamepad2 } from 'lucide-react';

export default function VibeCodingShowcase() {
  const [activePreset, setActivePreset] = useState(vibeCodePresets[0]);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect simulation when preset changes
  useEffect(() => {
    setIsTyping(true);
    setDisplayedCode('');
    let currentText = '';
    const fullText = activePreset.codeSnippet;
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setDisplayedCode(currentText);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 8);

    return () => clearInterval(interval);
  }, [activePreset]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activePreset.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="vibe-coding-sim" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Container Box with Glow */}
      <div className="relative rounded-3xl bg-slate-950/90 border border-cyan-500/40 p-6 md:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,243,255,0.12)]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              Live AI Vibe Coding Environment
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Prompt-to-Product <span className="text-cyan-400">Simulator</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Select a vibe coding prompt to observe Pabel's real-time AI code synthesis & live preview.
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2">
            {vibeCodePresets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  activePreset.id === preset.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(0,243,255,0.4)] font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-white'
                }`}
              >
                {preset.title}
              </button>
            ))}
          </div>
        </div>

        {/* Workspace Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
          
          {/* Left Column: Code Terminal Editor */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl">
            
            {/* Window Bar */}
            <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  cursor-vibe-engine.tsx
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                className="text-xs text-slate-400 hover:text-cyan-300 font-mono flex items-center gap-1 cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            {/* Prompt input highlight */}
            <div className="p-4 bg-slate-950/60 border-b border-slate-800/50 font-mono text-xs text-slate-300 flex items-start gap-2">
              <span className="text-cyan-400 font-bold">PROMPT &gt;</span>
              <span className="text-amber-300 font-medium">"{activePreset.prompt}"</span>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto min-h-[300px] max-h-[360px] bg-slate-950/95 relative">
              <pre className="text-cyan-200 whitespace-pre-wrap">{displayedCode}</pre>
              {isTyping && <span className="inline-block w-2 h-4 bg-cyan-400 animate-ping ml-1" />}
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Vibe Synthesizer: 100% Optimal
              </span>
              <span className="text-cyan-400">React + Vite + TailwindCSS</span>
            </div>

          </div>

          {/* Right Column: Live Render Viewport */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-6 flex flex-col justify-between min-h-[420px] backdrop-blur-xl relative overflow-hidden">
            
            {/* Viewport Accent Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 fill-cyan-400" />
                  Live Preview Output
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {isTyping ? 'SYNTHESIZING...' : 'RENDER READY'}
                </span>
              </div>

              {/* Dynamic Simulated Preview Based on Selected Preset */}
              <div className="pt-4">
                {activePreset.previewComponent === 'HUD' && (
                  <div className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,243,255,0.2)] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-xs text-cyan-300 font-mono font-bold">CYBER_HUD_CORE</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                        FPS: 60
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-bold text-white">FramEmpire Vibe Node v4.2</div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-[8px] w-4/5 animate-pulse" />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Latency: 4ms</span>
                        <span>GPU Temp: 42°C</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePreset.previewComponent === 'SHADER' && (
                  <div className="relative p-6 rounded-2xl bg-slate-950 border border-purple-500/40 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-xl animate-pulse" />
                    <div className="relative z-10 space-y-3 text-center py-6">
                      <Layers className="w-10 h-10 text-cyan-400 mx-auto animate-spin" style={{ animationDuration: '8s' }} />
                      <h4 className="text-base font-bold text-white font-mono">Octane Ray-Traced Glass Material</h4>
                      <p className="text-xs text-purple-300 font-mono">
                        Refraction Index: 1.52 | Dispersion: High
                      </p>
                    </div>
                  </div>
                )}

                {activePreset.previewComponent === 'BOT' && (
                  <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/40 space-y-3 shadow-[0_0_25px_rgba(245,158,11,0.15)]">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Bot className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold text-amber-300 font-mono">NABILA AI CHATBOT</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/90 text-xs text-slate-200 font-medium">
                      "Assalamu Alaikum! Ami Nabila, FramEmpire Studio-r AI assistant. Apnar project request ta amake bolun!"
                    </div>
                  </div>
                )}

                {activePreset.previewComponent === 'GAME' && (
                  <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/40 space-y-3 text-center">
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-2">
                      <span className="flex items-center gap-1">
                        <Gamepad2 className="w-4 h-4 text-amber-400" />
                        Tic Tac Toe GenZ
                      </span>
                      <span className="text-emerald-400 font-bold">Feni Village #42</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
                      {['X', 'O', 'X', 'O', 'X', null, null, 'O', 'X'].map((val, idx) => (
                        <div
                          key={idx}
                          className="h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-black text-lg text-cyan-400 shadow-inner"
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Caption */}
            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>Engineered by A M Pabel</span>
              <span className="text-cyan-400 font-bold">Vibe Coding Certified</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

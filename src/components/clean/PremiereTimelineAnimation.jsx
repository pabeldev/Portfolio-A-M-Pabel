import React, { useState, useEffect } from 'react';

export default function PremiereTimelineAnimation() {
  const [playheadPos, setPlayheadPos] = useState(0); // 0 to 100%
  const [wavePhase, setWavePhase] = useState(0);

  const CUT_1_POS = 35; // Exact Cut 1 Position at 35%
  const CUT_2_POS = 70; // Exact Cut 2 Position at 70%

  // Real-time playhead sweep & bouncing audio wave bars
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayheadPos((prev) => {
        const next = prev + 0.6;
        return next > 100 ? 0 : next;
      });
      setWavePhase((p) => (p + 1) % 20);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const isCut1Passed = playheadPos >= CUT_1_POS;
  const isCut2Passed = playheadPos >= CUT_2_POS;

  return (
    <div className="w-full max-w-2xl mt-6 rounded-2xl bg-slate-950 border border-cyan-500/30 p-3 shadow-[0_0_25px_rgba(0,243,255,0.15)] backdrop-blur-xl relative overflow-hidden select-none">
      
      {/* Sleek Wide Timeline Track Container */}
      <div className="relative h-24 bg-[#070a14] rounded-xl border border-slate-800/90 p-2 overflow-hidden flex flex-col justify-between">
        
        {/* Animated Playhead Line with Metallic Razor Blade Icon */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_12px_#00f3ff] z-30 pointer-events-none"
          style={{ left: `${playheadPos}%` }}
        >
          {/* Top Diamond Head */}
          <div className="absolute -top-1 -left-[5px] w-3 h-3 bg-cyan-400 rotate-45 shadow-[0_0_8px_#00f3ff]" />
          
          {/* Metallic Razor Blade SVG Icon Pinned to Playhead */}
          <div className="absolute top-1/2 -left-3 -translate-y-1/2 p-1 rounded-md bg-slate-950 border border-cyan-400 shadow-[0_0_12px_rgba(0,243,255,0.9)] z-40">
            <svg
              className="w-4 h-4 text-cyan-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="6" width="18" height="12" rx="2" ry="2" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <circle cx="6" cy="12" r="1" fill="currentColor" />
              <circle cx="18" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Video Track V2 (Top Layer) */}
        <div className="h-6 bg-slate-950/90 rounded flex items-center gap-1.5 relative overflow-hidden px-2 border border-slate-800/60">
          <span className="text-[9px] font-mono text-cyan-400 font-bold w-4 shrink-0">V2</span>
          
          <div className="flex-1 h-4 flex items-center gap-1 relative">
            <div
              className={`h-full rounded transition-all duration-75 bg-gradient-to-r from-purple-600 to-indigo-600 border border-purple-400/60 flex items-center px-2 text-[9px] font-mono text-white font-bold truncate ${
                isCut1Passed ? 'w-[33%] border-r-2 border-r-cyan-400 shadow-[0_0_8px_#00f3ff]' : 'w-[67%]'
              }`}
            >
              VFX_Overlay
            </div>

            {isCut1Passed && (
              <div
                className={`h-full rounded transition-all duration-75 bg-gradient-to-r from-cyan-500 to-blue-600 border border-cyan-400/60 flex items-center px-2 text-[9px] font-mono text-slate-950 font-bold truncate ${
                  isCut2Passed ? 'w-[33%] border-r-2 border-r-amber-400' : 'w-[34%]'
                }`}
              >
                Text_Anim
              </div>
            )}

            {isCut2Passed && (
              <div className="h-full w-[31%] rounded bg-gradient-to-r from-amber-500 to-pink-500 border border-amber-400/60 flex items-center px-2 text-[9px] font-mono text-white font-bold truncate">
                Graphic.ae
              </div>
            )}
          </div>
        </div>

        {/* Video Track V1 (Primary Layer) */}
        <div className="h-6 bg-slate-950/90 rounded flex items-center gap-1.5 relative overflow-hidden px-2 border border-slate-800/60">
          <span className="text-[9px] font-mono text-cyan-400 font-bold w-4 shrink-0">V1</span>

          <div className="flex-1 h-4 flex items-center gap-1 relative">
            <div
              className={`h-full rounded transition-all duration-75 bg-gradient-to-r from-blue-600 to-cyan-500 border border-cyan-400/60 flex items-center px-2 text-[9px] font-mono text-slate-950 font-bold truncate ${
                isCut1Passed ? 'w-[33%] border-r-2 border-r-cyan-400' : 'w-[98%]'
              }`}
            >
              4K_Graded.mov
            </div>

            {isCut1Passed && (
              <div
                className={`h-full rounded transition-all duration-75 bg-gradient-to-r from-purple-600 to-pink-500 border border-purple-400/60 flex items-center px-2 text-[9px] font-mono text-white font-bold truncate ${
                  isCut2Passed ? 'w-[33%] border-r-2 border-r-emerald-400' : 'w-[64%]'
                }`}
              >
                Ad_Cut_02
              </div>
            )}

            {isCut2Passed && (
              <div className="h-full w-[31%] rounded bg-gradient-to-r from-emerald-500 to-cyan-400 border border-emerald-400/60 flex items-center px-2 text-[9px] font-mono text-slate-950 font-bold truncate">
                Final_Cut
              </div>
            )}
          </div>
        </div>

        {/* Audio Track A1 (Sleeker Thinner Waveform Bars: w-1) */}
        <div className="h-6 bg-slate-950/90 rounded flex items-center gap-1.5 relative overflow-hidden px-2 border border-slate-800/60">
          <span className="text-[9px] font-mono text-emerald-400 font-bold w-4 shrink-0">A1</span>

          <div className="flex-1 h-4 bg-slate-950 rounded flex items-center gap-0.5 relative overflow-hidden">
            
            {/* Audio Block 1 */}
            <div
              className={`h-full bg-emerald-950/90 border border-emerald-500/60 rounded flex items-center gap-0.5 px-1 transition-all duration-75 overflow-hidden ${
                isCut1Passed ? 'w-[33%] border-r-2 border-r-emerald-400 shadow-[0_0_8px_#34d399]' : 'w-[98%]'
              }`}
            >
              {Array.from({ length: 24 }).map((_, i) => {
                const baseH = [40, 80, 100, 50, 90, 70, 95, 45, 85, 60, 90, 40, 75, 55, 95, 35, 80, 65, 90, 50, 85, 45, 70, 60][i % 24];
                const bounce = Math.sin((wavePhase + i) * 0.5) * 15;
                const finalH = Math.min(100, Math.max(25, baseH + bounce));
                return (
                  <div
                    key={i}
                    className="w-1 bg-emerald-400 rounded-sm transition-all duration-75 shrink-0"
                    style={{ height: `${finalH}%` }}
                  />
                );
              })}
            </div>

            {/* Audio Block 2 */}
            {isCut1Passed && (
              <div
                className={`h-full bg-emerald-950/90 border border-emerald-500/60 rounded flex items-center gap-0.5 px-1 transition-all duration-75 overflow-hidden ${
                  isCut2Passed ? 'w-[33%] border-r-2 border-r-emerald-400 shadow-[0_0_8px_#34d399]' : 'w-[64%]'
                }`}
              >
                {Array.from({ length: 20 }).map((_, i) => {
                  const baseH = [60, 90, 45, 85, 55, 95, 35, 75, 50, 85, 70, 100, 40, 80, 60, 90, 50, 85, 65, 75][i % 20];
                  const bounce = Math.cos((wavePhase + i) * 0.5) * 15;
                  const finalH = Math.min(100, Math.max(25, baseH + bounce));
                  return (
                    <div
                      key={i}
                      className="w-1 bg-emerald-400 rounded-sm transition-all duration-75 shrink-0"
                      style={{ height: `${finalH}%` }}
                    />
                  );
                })}
              </div>
            )}

            {/* Audio Block 3 */}
            {isCut2Passed && (
              <div className="h-full w-[31%] bg-emerald-950/90 border border-emerald-500/60 rounded flex items-center gap-0.5 px-1 overflow-hidden">
                {Array.from({ length: 18 }).map((_, i) => {
                  const baseH = [50, 85, 65, 100, 55, 90, 40, 80, 50, 90, 45, 75, 60, 95, 35, 85, 70, 50][i % 18];
                  const bounce = Math.sin((wavePhase + i) * 0.6) * 15;
                  const finalH = Math.min(100, Math.max(25, baseH + bounce));
                  return (
                    <div
                      key={i}
                      className="w-1 bg-emerald-400 rounded-sm transition-all duration-75 shrink-0"
                      style={{ height: `${finalH}%` }}
                    />
                  );
                })}
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}

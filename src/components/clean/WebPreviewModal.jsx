import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Globe, RefreshCw, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export default function WebPreviewModal({ website, isOpen, onClose }) {
  const [iframeError, setIframeError] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !website) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-2xl animate-fade-in overflow-y-auto"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[88vh] rounded-3xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-2xl flex flex-col justify-between my-auto"
      >
        
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          
          {/* Controls & URL Bar */}
          <div className="flex items-center gap-3 flex-1 overflow-hidden">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-xl px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs font-mono text-cyan-300 overflow-hidden">
              <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{website.url}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-auto" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={website.url}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Launch Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Browser Content Viewport */}
        <div className="relative flex-1 bg-slate-900 overflow-hidden">
          
          <iframe
            src={website.url}
            title={website.title}
            className="w-full h-full border-0 bg-slate-950"
            onError={() => setIframeError(true)}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />

          {/* Fallback Banner if X-Frame-Options blocks iframe embed */}
          {iframeError && (
            <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <Terminal className="w-12 h-12 text-cyan-400 animate-pulse" />
              <h3 className="text-xl font-bold text-white">{website.title}</h3>
              <p className="text-sm text-slate-400 max-w-md">
                This website restricts iframe embedding for security. Click below to launch the live preview directly in your browser.
              </p>
              <a
                href={website.url}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm flex items-center gap-2"
              >
                <span>Open {website.displayUrl} Live</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>

        {/* Footer Info Bar */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-sm font-bold text-white mr-2">{website.title}</span>
            <span className="text-xs text-slate-400 font-mono">({website.category})</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {website.tags.map((t, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-cyan-300 border border-slate-800">
                #{t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

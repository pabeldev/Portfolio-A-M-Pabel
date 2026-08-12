import React, { useState } from 'react';
import { portfolioProjects } from '../../data/personalData';
import VideoModal from './VideoModal';
import WebPreviewModal from './WebPreviewModal';
import { Sparkles, Play, ArrowUpRight, ExternalLink, Globe, Film, Palette } from 'lucide-react';

export default function CleanPortfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedWeb, setSelectedWeb] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const filteredProjects = filter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === filter);

  const handleProjectClick = (project) => {
    if (project.category === 'vibe-coding' && project.url) {
      setSelectedWeb({
        id: project.id,
        title: project.title,
        url: project.url,
        displayUrl: project.client,
        category: 'Vibe Coded Web App',
        tags: project.tags
      });
    } else {
      setSelectedVideo(project);
    }
  };

  const handleImageError = (id) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'vibe-coding': return Globe;
      case 'video-editing': return Film;
      case 'graphic-design': return Palette;
      default: return Sparkles;
    }
  };

  return (
    <section id="works" className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 md:mb-12">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono font-medium">
            Selected Work Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-['Creato_Display',sans-serif]">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Client Projects</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none flex-nowrap">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'video-editing', label: 'Video Edits' },
            { id: 'graphic-design', label: 'Graphic Design' },
            { id: 'motion-graphics', label: '3D Motion' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Equal Card Heights & Ultra-Clean UX Structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {filteredProjects.map((project) => {
          const IconComp = getCategoryIcon(project.category);
          const hasValidImage = project.thumbnail && !failedImages[project.id];
          const displayTags = project.tags.slice(0, 3);

          return (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-400/60 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between h-full shadow-md hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]"
            >
              
              {/* Top Container: Thumbnail + Card Content */}
              <div>
                {/* Fixed 16:9 Clean Thumbnail Box (Zero Badges Overlaid!) */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center border-b border-slate-800/60">
                  {hasValidImage ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                      <div className="absolute inset-0 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                      
                      <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-1.5 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      
                      <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                        {project.client}
                      </span>
                    </div>
                  )}

                  {/* Subtle Hover Play / Open Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-xs z-10">
                    <div className="p-3.5 rounded-full bg-cyan-500 text-slate-950 shadow-[0_0_25px_rgba(0,243,255,0.6)] group-hover:scale-110 transition-transform">
                      {project.category === 'vibe-coding' ? <ExternalLink className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                    </div>
                  </div>
                </div>

                {/* Card Body Info */}
                <div className="p-5 md:p-6 space-y-2.5">
                  {/* Meta Info Layer */}
                  <div className="text-[11px] text-cyan-400 font-mono font-semibold tracking-wide">
                    {project.client} • {project.year}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description (Strict 2-Line Limit) */}
                  <p className="text-slate-400 text-xs font-normal leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Soft Transparent Tags (Max 3) */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {displayTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive CTA Action Footer */}
              <div className="px-5 md:px-6 py-3.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                <span>{project.category === 'vibe-coding' ? 'Launch Live Site' : 'Play Video Preview'}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </div>
          );
        })}
      </div>

      {/* Dynamic Video Lightbox Modal */}
      <VideoModal
        project={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Dynamic Web Preview Modal */}
      <WebPreviewModal
        website={selectedWeb}
        isOpen={Boolean(selectedWeb)}
        onClose={() => setSelectedWeb(null)}
      />

    </section>
  );
}

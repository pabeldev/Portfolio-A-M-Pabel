import React, { useState } from 'react';
import { portfolioProjects } from '../../data/personalData';
import VideoModal from './VideoModal';
import WebPreviewModal from './WebPreviewModal';
import BehanceModal from './BehanceModal';
import { Sparkles, Play, ArrowRight, ExternalLink, Globe, Film, Palette, ChevronDown, Layers } from 'lucide-react';

export default function CleanPortfolio() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedWeb, setSelectedWeb] = useState(null);
  const [selectedBehance, setSelectedBehance] = useState(null);

  const videoProjects = portfolioProjects.filter(p => p.category === 'video-editing');
  const graphicProjects = portfolioProjects.filter(p => p.category === 'graphic-design');

  // Compute displayed projects
  let filteredProjects = [];
  if (filter === 'all') {
    if (showAll) {
      filteredProjects = portfolioProjects;
    } else {
      // Exactly 3 projects per department: 3 Video Editing + 3 Graphic Design
      filteredProjects = [...videoProjects.slice(0, 3), ...graphicProjects.slice(0, 3)];
    }
  } else {
    filteredProjects = portfolioProjects.filter(p => p.category === filter);
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  const handleProjectClick = (project) => {
    if (project.category === 'graphic-design') {
      setSelectedBehance(project);
    } else if (project.category === 'vibe-coding' && project.url) {
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'vibe-coding': return Globe;
      case 'video-editing': return Film;
      case 'graphic-design': return Palette;
      default: return Sparkles;
    }
  };

  return (
    <section id="works" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 sm:mb-10 md:mb-12">
        <div className="space-y-1.5 sm:space-y-2">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            Selected Work Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Client Projects</span>
          </h2>
        </div>

        {/* Top Main Category Filter Buttons */}
        <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none flex-nowrap">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'video-editing', label: 'Video Editing' },
            { id: 'graphic-design', label: 'Graphic Design' },
            { id: 'motion-graphics', label: '3D Motion' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
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

      {/* Department Section Dividers when filter === 'all' */}
      {filter === 'all' && !showAll && (
        <div className="space-y-10 sm:space-y-12">
          
          {/* Section 1: Video Editing (Top 3) */}
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Video Editing
                </h3>
              </div>
              <button
                onClick={() => handleFilterChange('video-editing')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer group"
              >
                <span>See more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
              {videoProjects.slice(0, 3).map((project) => renderProjectCard(project))}
            </div>
          </div>

          {/* Section 2: Graphic Design (Top 3) */}
          <div className="space-y-5 sm:space-y-6 pt-2">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Graphic Design & Brand Systems
                </h3>
              </div>
              <button
                onClick={() => handleFilterChange('graphic-design')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer group"
              >
                <span>See more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
              {graphicProjects.slice(0, 3).map((project) => renderProjectCard(project))}
            </div>
          </div>

        </div>
      )}

      {/* Grid View for Filtered or Expanded View */}
      {(filter !== 'all' || showAll) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
          {filteredProjects.map((project) => renderProjectCard(project))}
        </div>
      )}

      {/* Interactive See More Button */}
      {filter === 'all' && !showAll && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 sm:pt-12">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all flex items-center gap-2 cursor-pointer group"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>See More Projects ({portfolioProjects.length - 6} More)</span>
            <ChevronDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* Dynamic Video Lightbox Modal */}
      <VideoModal
        project={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Dynamic Behance Graphic Lightbox Modal */}
      <BehanceModal
        project={selectedBehance}
        isOpen={Boolean(selectedBehance)}
        onClose={() => setSelectedBehance(null)}
      />

      {/* Dynamic Web Preview Modal */}
      <WebPreviewModal
        website={selectedWeb}
        isOpen={Boolean(selectedWeb)}
        onClose={() => setSelectedWeb(null)}
      />

    </section>
  );

  // Card Renderer Function
  function renderProjectCard(project) {
    const IconComp = getCategoryIcon(project.category);
    const displayTags = project.tags.slice(0, 3);
    const isGraphic = project.category === 'graphic-design';

    return (
      <div
        key={project.id}
        onClick={() => handleProjectClick(project)}
        className="group relative rounded-2xl bg-slate-900/60 border hover:border-cyan-400/60 border-slate-800/80 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between h-full shadow-md hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]"
      >
        
        {/* Top Container: Direct Embed Link Preview Box (No Extra Static Images!) */}
        <div>
          {/* Fixed 16:9 Live Preview Box */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center border-b border-slate-800/60">
            {project.embedUrl ? (
              <div className="w-full h-full relative overflow-hidden bg-slate-950">
                <iframe
                  src={project.embedUrl}
                  title={project.title}
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full border-0 pointer-events-none scale-100 group-hover:scale-105 transition-transform duration-500 bg-slate-950"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors pointer-events-none" />
              </div>
            ) : (
              /* Fallback Box */
              <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 relative overflow-hidden transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-1.5 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                  {project.client}
                </span>
              </div>
            )}

            {/* Subtle Hover Play / Open Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-xs z-10 pointer-events-none">
              <div className="p-3.5 rounded-full bg-cyan-500 text-slate-950 shadow-[0_0_25px_rgba(0,243,255,0.6)] group-hover:scale-110 transition-transform">
                {isGraphic ? <Palette className="w-5 h-5" /> : project.category === 'vibe-coding' ? <ExternalLink className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </div>
            </div>
          </div>

          {/* Card Body Info */}
          <div className="p-4 sm:p-5 md:p-6 space-y-2">
            {/* Meta Info Layer: Client Name on left • Subject/Subcategory Tag on right */}
            <div className="flex items-center justify-between gap-2 text-[11px] font-mono font-semibold tracking-wide">
              <span className="text-cyan-400">
                {project.client}
              </span>
              {project.subjectTag && (
                <span className="text-slate-400 text-[10px] font-medium bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 truncate max-w-[140px]">
                  {project.subjectTag}
                </span>
              )}
            </div>

            {/* Clean Main Project Title Headline */}
            <h3 className="text-base md:text-lg font-semibold text-white transition-colors line-clamp-1 group-hover:text-cyan-300">
              {project.title}
            </h3>

            {/* Subcategory / Soft Transparent Tags (Max 3) */}
            <div className="flex flex-wrap gap-1.5 pt-1">
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
        <div className="px-4 sm:px-5 md:px-6 py-3 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
          <span>{isGraphic ? 'View Behance Showcase' : project.category === 'vibe-coding' ? 'Launch Live Site' : 'Play Video Preview'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>

      </div>
    );
  }
}

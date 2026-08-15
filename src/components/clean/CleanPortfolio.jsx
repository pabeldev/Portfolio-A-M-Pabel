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

  const motionProjects = portfolioProjects.filter(p => p.category === 'motion-graphics');
  const videoProjects = portfolioProjects.filter(p => p.category === 'video-editing');
  const graphicProjects = portfolioProjects.filter(p => p.category === 'graphic-design');

  // Compute displayed projects
  let filteredProjects = [];
  if (filter === 'all') {
    if (showAll) {
      filteredProjects = portfolioProjects;
    } else {
      // Top items per category
      filteredProjects = [
        ...motionProjects.slice(0, 3),
        ...videoProjects.slice(0, 3),
        ...graphicProjects.slice(0, 3)
      ];
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

  const renderProjectCard = (project) => {
    const isBehance = project.category === 'graphic-design';
    const isMotion = project.category === 'motion-graphics';

    return (
      <div
        key={project.id}
        onClick={() => handleProjectClick(project)}
        className="group relative rounded-2xl sm:rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.12)] flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-xl"
      >
        {/* Media Container / Live Embed Preview */}
        <div className="relative w-full aspect-video bg-slate-950 overflow-hidden border-b border-slate-800/80">
          
          {isBehance ? (
            /* Behance Graphic iFrame Embed Preview */
            <iframe
              src={project.embedUrl}
              title={project.title}
              className="w-full h-full border-0 pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            /* Google Drive Video Live Preview iFrame */
            <iframe
              src={project.embedUrl}
              title={project.title}
              className="w-full h-full border-0 pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              allow="autoplay"
            />
          )}

          {/* Hover Play / View Overlay */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.6)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
              {isBehance ? (
                <ExternalLink className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 fill-slate-950 translate-x-0.5" />
              )}
            </div>
          </div>

          {/* Top Category Badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-cyan-400 backdrop-blur-md">
            <span>{isBehance ? 'Behance Design' : isMotion ? '3D Motion' : 'Ed-Tech Video'}</span>
          </div>

          {/* Client Tag */}
          <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[9px] font-mono text-slate-300">
            {project.client}
          </div>
        </div>

        {/* Card Content Footer */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-400 font-semibold block">
              {project.subjectTag}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 line-clamp-2 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
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
            { id: 'motion-graphics', label: '3D Motion' },
            { id: 'video-editing', label: 'Video Editing' },
            { id: 'graphic-design', label: 'Graphic Design' }
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
          
          {/* Section 1: 3D Motion Graphics */}
          {motionProjects.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    3D Motion Graphics
                  </h3>
                </div>
                <button
                  onClick={() => handleFilterChange('motion-graphics')}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer group"
                >
                  <span>See more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
                {motionProjects.slice(0, 3).map((project) => renderProjectCard(project))}
              </div>
            </div>
          )}

          {/* Section 2: Video Editing */}
          <div className="space-y-5 sm:space-y-6 pt-2">
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

          {/* Section 3: Graphic Design */}
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
            <span>See More Projects ({portfolioProjects.length - 7} More)</span>
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

      {/* Dynamic Web App Preview Modal */}
      <WebPreviewModal
        project={selectedWeb}
        isOpen={Boolean(selectedWeb)}
        onClose={() => setSelectedWeb(null)}
      />

    </section>
  );
}

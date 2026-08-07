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
    <section id="works" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            Selected Work Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Client Projects</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'vibe-coding', label: 'Vibe Code Websites' },
            { id: 'video-editing', label: 'Video Edits' },
            { id: 'graphic-design', label: 'Graphic Design' },
            { id: 'motion-graphics', label: '3D Motion' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const IconComp = getCategoryIcon(project.category);
          const hasValidImage = project.thumbnail && !failedImages[project.id];

          return (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group relative rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              
              {/* Header Box: Renders image if valid, or falls back seamlessly to cyber icon box */}
              <div className="relative h-48 overflow-hidden bg-slate-950 flex items-center justify-center border-b border-slate-800/60">
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
                    
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      {project.client}
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/90 border border-cyan-500/40 text-cyan-300 backdrop-blur-md">
                    {project.category.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                {/* Hover Play / Open Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-sm z-10">
                  <div className="p-3.5 rounded-full bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(0,243,255,0.5)]">
                    {project.category === 'vibe-coding' ? <ExternalLink className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </div>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-3">
                <div className="text-xs text-cyan-400 font-mono">{project.client} • {project.year}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs font-light leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                <span>{project.category === 'vibe-coding' ? 'Launch Live Site' : 'Play Video Preview'}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </div>
          );
        })}
      </div>

      {/* Video Modal */}
      <VideoModal
        project={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Web Preview Modal */}
      <WebPreviewModal
        website={selectedWeb}
        isOpen={Boolean(selectedWeb)}
        onClose={() => setSelectedWeb(null)}
      />

    </section>
  );
}

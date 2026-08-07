import React, { useState } from 'react';
import { personalProjects } from '../../data/personalData';
import VideoModal from './VideoModal';
import { Sparkles, Film, Palette, Zap, Play, Eye, ExternalLink } from 'lucide-react';

export default function PersonalPortfolioGrid() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all'
    ? personalProjects
    : personalProjects.filter(p => p.category === filter);

  return (
    <section id="personal-works" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Selected Portfolio Works
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Pabel's Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Creations</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'motion-graphics', label: '3D Motion' },
            { id: 'video-editing', label: 'Video Edits & VFX' },
            { id: 'graphic-design', label: 'Graphic Design' },
            { id: 'vibe-coding', label: 'Vibe Code Apps' }
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(0,243,255,0.15)] cursor-pointer flex flex-col justify-between"
          >
            
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-slate-950">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 border border-cyan-500/40 text-cyan-300 backdrop-blur-md">
                  {project.category.replace('-', ' ').toUpperCase()}
                </span>
              </div>

              {/* Play Overlay Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-sm">
                <div className="p-4 rounded-full bg-cyan-500 text-slate-950 shadow-[0_0_25px_rgba(0,243,255,0.6)] transform group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-4">
              <div>
                <div className="text-xs text-cyan-400 font-mono mb-1">{project.client} • {project.year}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed font-light line-clamp-2">
                {project.description}
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer action link */}
            <div className="px-6 py-3 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
              <span>View Breakdown & Specs</span>
              <Eye className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>

          </div>
        ))}
      </div>

      {/* Video Modal Previewer */}
      <VideoModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}

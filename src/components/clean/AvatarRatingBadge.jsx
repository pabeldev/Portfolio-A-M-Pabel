import React from 'react';
import { Star } from 'lucide-react';

export default function AvatarRatingBadge() {
  const avatarImgs = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  ];

  return (
    <div className="w-full max-w-sm mx-auto mt-5 p-3.5 rounded-2xl bg-slate-950/90 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.12)] backdrop-blur-xl flex items-center justify-between gap-3">
      
      {/* 5 Overlapping Client Avatars */}
      <div className="flex items-center -space-x-2.5">
        {avatarImgs.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Client ${i + 1}`}
            className="w-8 h-8 rounded-full border-2 border-slate-950 object-cover shadow-sm"
          />
        ))}
      </div>

      {/* Star Rating & Text */}
      <div className="flex flex-col items-end text-right">
        <div className="flex items-center gap-1 text-amber-400">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
            {/* 4.5 Star Half Representation */}
            <div className="relative w-3.5 h-3.5">
              <Star className="w-3.5 h-3.5 text-amber-400 absolute" />
              <div className="w-1.5 h-3.5 overflow-hidden absolute">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
            </div>
          </div>
          <span className="text-xs font-bold font-mono text-white ml-1">4.5</span>
        </div>
        <span className="text-[10px] text-slate-400 font-medium">Trusted by 100+ Clients & Brands</span>
      </div>

    </div>
  );
}

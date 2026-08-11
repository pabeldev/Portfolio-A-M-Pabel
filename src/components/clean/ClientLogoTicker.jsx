import React from 'react';
import { 
  BookOpen, ShoppingBag, Shirt, Home, Smartphone, 
  Apple, Compass, MapPin, Tv, GraduationCap, 
  Globe2, Award, BookMarked, Lightbulb 
} from 'lucide-react';

const row1Brands = [
  { id: 1, name: 'The Quarterly Parampara', tag: 'Islamic Magazine', icon: BookOpen, accent: 'from-amber-500/15 to-transparent' },
  { id: 2, name: 'Infinity Mega Mall', tag: 'Retail & Shopping', icon: ShoppingBag, accent: 'from-cyan-500/15 to-transparent' },
  { id: 3, name: 'Tex Challengers Asia', tag: 'Textile Agency', icon: Shirt, accent: 'from-purple-500/15 to-transparent' },
  { id: 4, name: 'Rumi Dream Homes', tag: 'Real Estate Broker', icon: Home, accent: 'from-emerald-500/15 to-transparent' },
  { id: 5, name: 'Eastern Technologies', tag: 'Mobile Servicing Centre', icon: Smartphone, accent: 'from-blue-500/15 to-transparent' }
];

const row2Brands = [
  { id: 6, name: 'iMac BD', tag: 'Apple Products Seller', icon: Apple, accent: 'from-slate-400/15 to-transparent' },
  { id: 7, name: 'Amazon Immigration Services', tag: 'Work & Abroad Visa Services', icon: Compass, accent: 'from-cyan-500/15 to-transparent' },
  { id: 8, name: 'Worklife Canada Immigration', tag: 'Canada Immigration', icon: MapPin, accent: 'from-red-500/15 to-transparent' },
  { id: 9, name: 'Shikor TV Canada', tag: 'TV Channel', icon: Tv, accent: 'from-rose-500/15 to-transparent' },
  { id: 10, name: 'Education BD', tag: 'Study Abroad Consultancy', icon: GraduationCap, accent: 'from-blue-500/15 to-transparent' }
];

const row3Brands = [
  { id: 11, name: 'Global Pathways Immigration', tag: 'Study Abroad Consultancy', icon: Globe2, accent: 'from-teal-500/15 to-transparent' },
  { id: 12, name: 'Banglay IELTS & Immigration', tag: 'Study Abroad Consultancy', icon: Award, accent: 'from-indigo-500/15 to-transparent' },
  { id: 13, name: 'Banglay IELTS', tag: 'IELTS Training Center', icon: BookMarked, accent: 'from-amber-500/15 to-transparent' },
  { id: 14, name: 'reThink', tag: 'EdTech Platform', icon: Lightbulb, accent: 'from-cyan-500/15 to-transparent' }
];

export default function ClientLogoTicker() {
  const dupRow1 = [...row1Brands, ...row1Brands, ...row1Brands];
  const dupRow2 = [...row2Brands, ...row2Brands, ...row2Brands];
  const dupRow3 = [...row3Brands, ...row3Brands, ...row3Brands];

  const renderCard = (brand, idx) => {
    const IconComp = brand.icon;
    return (
      <div
        key={`${brand.id}-${idx}`}
        className={`flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 bg-gradient-to-r ${brand.accent} transition-all duration-300 shrink-0 shadow-md group cursor-default scale-95 sm:scale-100`}
      >
        <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform">
          <IconComp className="w-3.5 h-3.5" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight font-['Plus_Jakarta_Sans']">
            {brand.name}
          </h4>
          <span className="text-[9.5px] text-slate-400 font-mono block mt-0.5">
            {brand.tag}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 border-y border-slate-800/60 bg-slate-950/80 backdrop-blur-xl relative z-10 overflow-hidden space-y-5">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 text-center space-y-1">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-0.5 rounded-full inline-block">
          Trusted Partnerships & Client Portfolio
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-white font-['Creato_Display',sans-serif]">
          Companies & Brands I've Worked With
        </h3>
      </div>

      {/* Infinite 3-Line Marquee Stream with Soft Side Melting Mask */}
      <div className="relative w-full space-y-3.5 overflow-hidden ticker-3d-mask">
        
        {/* Line 1: Right-to-Left Marquee Stream */}
        <div className="flex items-center gap-4 w-max animate-marquee-left">
          {dupRow1.map((brand, idx) => renderCard(brand, idx))}
        </div>

        {/* Line 2: Left-to-Right Marquee Stream (Reverse Direction) */}
        <div className="flex items-center gap-4 w-max animate-marquee-right">
          {dupRow2.map((brand, idx) => renderCard(brand, idx))}
        </div>

        {/* Line 3: Right-to-Left Marquee Stream */}
        <div className="flex items-center gap-4 w-max animate-marquee-left">
          {dupRow3.map((brand, idx) => renderCard(brand, idx))}
        </div>

      </div>

    </section>
  );
}

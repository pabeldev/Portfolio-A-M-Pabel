import React from 'react';
import { 
  BookOpen, ShoppingBag, Shirt, Home, Smartphone, 
  Apple, Compass, MapPin, Tv, GraduationCap, 
  Globe2, Award, BookMarked, Lightbulb 
} from 'lucide-react';

const row1Brands = [
  { id: 1, name: 'The Quarterly Parampara', tag: 'Islamic Magazine', icon: BookOpen, accent: 'from-amber-500/20 to-yellow-500/5' },
  { id: 2, name: 'Infinity Mega Mall', tag: 'Retail & Shopping', icon: ShoppingBag, accent: 'from-cyan-500/20 to-blue-500/5' },
  { id: 3, name: 'Tex Challengers Asia', tag: 'Textile Agency', icon: Shirt, accent: 'from-purple-500/20 to-pink-500/5' },
  { id: 4, name: 'Rumi Dream Homes', tag: 'Real Estate Broker', icon: Home, accent: 'from-emerald-500/20 to-teal-500/5' },
  { id: 5, name: 'Eastern Technologies', tag: 'Mobile Servicing Centre', icon: Smartphone, accent: 'from-blue-500/20 to-indigo-500/5' }
];

const row2Brands = [
  { id: 6, name: 'iMac BD', tag: 'Apple Products Seller', icon: Apple, accent: 'from-slate-400/20 to-slate-600/5' },
  { id: 7, name: 'Amazon Immigration Services', tag: 'Work & Abroad Visa Services', icon: Compass, accent: 'from-cyan-500/20 to-teal-500/5' },
  { id: 8, name: 'Worklife Canada Immigration', tag: 'Canada Immigration', icon: MapPin, accent: 'from-red-500/20 to-rose-500/5' },
  { id: 9, name: 'Shikor TV Canada', tag: 'TV Channel', icon: Tv, accent: 'from-rose-500/20 to-purple-500/5' },
  { id: 10, name: 'Education BD', tag: 'Study Abroad Consultancy', icon: GraduationCap, accent: 'from-blue-500/20 to-cyan-500/5' }
];

const row3Brands = [
  { id: 11, name: 'Global Pathways Immigration', tag: 'Study Abroad Consultancy', icon: Globe2, accent: 'from-teal-500/20 to-emerald-500/5' },
  { id: 12, name: 'Banglay IELTS & Immigration', tag: 'Study Abroad Consultancy', icon: Award, accent: 'from-indigo-500/20 to-purple-500/5' },
  { id: 13, name: 'Banglay IELTS', tag: 'IELTS Training Center', icon: BookMarked, accent: 'from-amber-500/20 to-orange-500/5' },
  { id: 14, name: 'reThink', tag: 'EdTech Platform', icon: Lightbulb, accent: 'from-cyan-500/20 to-blue-500/5' }
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
        className={`flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/50 bg-gradient-to-r ${brand.accent} transition-all duration-300 shrink-0 shadow-lg hover:shadow-[0_0_25px_rgba(0,243,255,0.2)] group cursor-default`}
      >
        <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform shadow-inner">
          <IconComp className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight font-['Plus_Jakarta_Sans']">
            {brand.name}
          </h4>
          <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
            {brand.tag}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-14 border-y border-slate-800/80 bg-slate-950/70 backdrop-blur-xl relative z-10 overflow-hidden space-y-6">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 text-center space-y-1.5">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 rounded-full inline-block">
          Trusted Partnerships & Client Portfolio
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Creato_Display',sans-serif]">
          Companies & Brands I've Worked With
        </h3>
      </div>

      {/* Infinite 3-Line Marquee Stream */}
      <div className="relative w-full space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        
        {/* Line 1: Right-to-Left Marquee Stream */}
        <div className="flex items-center gap-5 w-max animate-marquee-left">
          {dupRow1.map((brand, idx) => renderCard(brand, idx))}
        </div>

        {/* Line 2: Left-to-Right Marquee Stream (Offset reverse direction!) */}
        <div className="flex items-center gap-5 w-max animate-marquee-right">
          {dupRow2.map((brand, idx) => renderCard(brand, idx))}
        </div>

        {/* Line 3: Right-to-Left Marquee Stream */}
        <div className="flex items-center gap-5 w-max animate-marquee-left">
          {dupRow3.map((brand, idx) => renderCard(brand, idx))}
        </div>

      </div>

    </section>
  );
}

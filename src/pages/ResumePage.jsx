import React, { useEffect } from 'react';
import { Sparkles, Film, PenTool, Image, Zap, Cpu, Building2, MapPin, Phone, Mail, Globe, Linkedin, ArrowLeft, Award, GraduationCap, Trophy } from 'lucide-react';
import CleanFooter from '../components/clean/CleanFooter';

const expertTools = [
  { id: 'ae', name: 'After Effects', code: 'Ae', category: 'Motion & VFX', icon: Sparkles },
  { id: 'pr', name: 'Premiere Pro', code: 'Pr', category: 'Video Editing', icon: Film },
  { id: 'ai', name: 'Illustrator', code: 'Ai', category: 'Vector Branding', icon: PenTool },
  { id: 'ps', name: 'Photoshop', code: 'Ps', category: 'Key Visuals', icon: Image },
  { id: 'cursor', name: 'Cursor AI', code: 'AI', category: 'Vibe Coding', icon: Zap },
  { id: 'codex', name: 'CodeX', code: 'X', category: 'AI Workflows', icon: Cpu }
];

export default function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "A M Pabel | Official Resume";
  }, []);

  const navigateToHome = (e) => {
    if (e) e.preventDefault();
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col font-[#Plus_Jakarta_Sans] selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Background Ambient Glow & Grid */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#070913] via-[#090e24] to-[#070913] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-animated-grid pointer-events-none z-0 opacity-50" />
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none z-0" />

      {/* Floating Navbar (Logo Clicks Return Home) */}
      <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-3 max-w-[1320px] mx-auto pointer-events-none">
        <div className="bg-[#070913]/85 backdrop-blur-3xl border border-slate-800/80 rounded-2xl md:rounded-full px-5 sm:px-8 py-2.5 shadow-2xl flex items-center justify-between pointer-events-auto">
          
          {/* Logo - Clicks Return to Home Page */}
          <a href="/" onClick={navigateToHome} className="flex items-center gap-2 group cursor-pointer shrink-0">
            <img
              src="/assets/A-M-Pabel-Logo.webp"
              alt="A M Pabel Logo"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={navigateToHome}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to Home</span>
            </button>

            <a
              href="mailto:info@ampabel.com?subject=Hiring%20Inquiry%20-%20A%20M%20Pabel"
              className="px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact / Hire</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Resume Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 pt-24 sm:pt-32 pb-16 relative z-10 space-y-6">
        
        {/* Header Profile Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,243,255,0.12)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Creato_Display',sans-serif]">
                A M Pabel
              </h1>
              <p className="text-sm sm:text-base text-cyan-300 font-mono font-bold tracking-wide">
                Designer | Animator | Editor
              </p>
            </div>

            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Projects
            </span>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light pt-2 border-t border-slate-800/80">
            Versatile Graphic Designer & Motion Artist skilled in branding, motion graphics, and visual storytelling. Dedicated to transforming ideas into dynamic designs that engage audiences and shape modern digital communication.
          </p>

          {/* Contact Meta */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 border-t border-slate-800/80 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Uttara-08, Dhaka, Bangladesh
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              +880 1615-288259
            </span>
            <a href="mailto:info@ampabel.com" className="flex items-center gap-1.5 text-cyan-400 hover:underline">
              <Mail className="w-3.5 h-3.5" />
              info@ampabel.com
            </a>
            <a href="https://ampabel.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-cyan-400 hover:underline">
              <Globe className="w-3.5 h-3.5" />
              ampabel.com
            </a>
            <a href="https://bd.linkedin.com/in/pabeledp" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-400 hover:underline">
              <Linkedin className="w-3.5 h-3.5" />
              linkedin.com/in/pabeledp
            </a>
          </div>
        </div>

        {/* Tools I Expert In Section (Software Only Grid) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,243,255,0.12)]">
          <div className="text-center space-y-1">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              Production Software Stack
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Tools I <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expert In</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 pt-1">
            {expertTools.map((tool) => {
              const IconComp = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,243,255,0.15)] flex flex-col items-center text-center space-y-2 group shadow-sm"
                >
                  <div className="relative">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono font-bold text-white">
                      {tool.code}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                      {tool.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 font-medium block mt-0.5">
                      {tool.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work Experience Card with 3+ Years Total Experience Badge */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-6 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,243,255,0.12)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Work Experience</span>
            </h2>
            
            {/* Total Experience Year Badge */}
            <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              3+ Years Experience (2023 – Present)
            </span>
          </div>

          <div className="space-y-5">
            
            {/* Unified Company Entry: Banglay IELTS & reThink */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-3">
              <div className="flex flex-wrap justify-between items-start gap-1 pb-2 border-b border-slate-800/80">
                <div>
                  <h3 className="text-base font-bold text-white">Banglay IELTS & Immigration Center</h3>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">Executive Video Editor</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                  12/2025 – Present
                </span>
              </div>

              <div className="space-y-2 pt-1">
                {/* Department: reThink */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      reThink (Sister Concern / Specialized Media Department)
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">03/2026 – Present</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light pt-0.5">
                    Managing video editing pipeline, visual content strategy, reels, and high-converting brand assets.
                  </p>
                </div>

                {/* Division: BIIC Core */}
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-300">Banglay IELTS Core Media Division</span>
                    <span className="text-[10px] font-mono text-slate-400">12/2025 – 03/2026</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light pt-0.5">
                    Produced informative video content, reels, and study-abroad promotional media.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Work Experience Entries */}
            {[
              {
                title: 'Designer & Video Editor',
                company: 'Education BD',
                date: '10/2025 – 12/2025',
                desc: 'Created promotional video content and engaging visuals for educational campaigns.'
              },
              {
                title: 'Project Manager | Visualizer',
                company: 'Pi-Infotech Ltd.',
                date: '04/2025 – 09/2025',
                desc: 'Managed design-driven client projects, motion graphics, and promotional video edits.'
              },
              {
                title: 'Instructor (Graphic Design)',
                company: "Ma'hadul Uloom Al-Islamia Dhaka",
                date: '11/2024 – 03/2025',
                desc: 'Taught practical graphic design classes, developed course curriculum, and mentored students.'
              },
              {
                title: 'Senior Graphic Designer & Verse/Rhyme Editor',
                company: 'The Quarterly Parampara',
                date: '01/2023 – 10/2024',
                desc: 'Led design team for magazine formatting, layout branding, and editorial proofreading.'
              }
            ].map((exp, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="text-sm font-bold text-white">{exp.title}</h3>
                  <span className="text-xs font-mono text-slate-400">{exp.company}</span>
                  <p className="text-xs text-slate-300 font-light mt-1">{exp.desc}</p>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono">
                  {exp.date}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* 2-Column Grid: Certifications & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Training & Certifications */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,243,255,0.12)]">
            <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <Award className="w-4 h-4" />
              <span>Training & Certifications</span>
            </h2>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all flex justify-between items-start gap-2">
                <div>
                  <span className="font-bold text-white block">Diploma in Graphic Design & Motion Graphics</span>
                  <span className="text-[11px] text-slate-400 font-mono">Creative IT Institute</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 shrink-0">13/01/2024 – 21/05/2025</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all flex justify-between items-start gap-2">
                <div>
                  <span className="font-bold text-white block">WordPress Website Design</span>
                  <span className="text-[11px] text-slate-400 font-mono">Ostad</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 shrink-0">05/2024 – 11/2024</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,243,255,0.12)]">
            <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <GraduationCap className="w-4 h-4" />
              <span>Educational Qualification</span>
            </h2>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all flex justify-between items-start gap-2">
                <div>
                  <span className="font-bold text-white block">Languages & Literature (Honors Level)</span>
                  <span className="text-[11px] text-slate-400 font-mono">Qawmi Madrasa • Ma'hadul Uloom Al-Islamia</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 shrink-0">2020 – 2023</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all flex justify-between items-start gap-2">
                <div>
                  <span className="font-bold text-white block">Hifzul Quran</span>
                  <span className="text-[11px] text-slate-400 font-mono">Jameya Arabia Siloniya, Feni</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 shrink-0">2018 – 2020</span>
              </div>
            </div>
          </div>

        </div>

        {/* 2-Column Grid: Achievements & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Achievements & Recognition */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,243,255,0.12)]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Achievements & Recognition</span>
              </h2>
              <span className="text-xs font-mono text-slate-400">3 Honors</span>
            </div>

            <div className="space-y-3">
              
              {/* Award 1: Most Dedicated Ambassador 2025 */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all space-y-1">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Most Dedicated Ambassador 2025</span>
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    2025
                  </span>
                </div>
                <p className="text-[11px] font-mono text-slate-400">Creative IT Institute</p>
                <p className="text-xs text-slate-300 font-light pt-0.5">
                  Honored for outstanding creative leadership, design excellence, and student ambassadorship.
                </p>
              </div>

              {/* Award 2: Poetry Writing */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all space-y-1">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Award for Poetry Writing</span>
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">Published Author</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400">Literary Recognition</p>
                <p className="text-xs text-slate-300 font-light pt-0.5">
                  Recognized for the published poetry collection <strong className="text-white">"Chilekothar Ghor"</strong>.
                </p>
              </div>

              {/* Award 3: Principal Of The Day */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all space-y-1">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Principal Of The Day</span>
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">03/06/2023</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400">Ma'hadul Uloom Al-Islamia Dhaka</p>
                <p className="text-xs text-slate-300 font-light pt-0.5">
                  Selected to manage day-to-day administrative & academic operations for the institution.
                </p>
              </div>

            </div>
          </div>

          {/* Languages */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-3 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,243,255,0.12)]">
            <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <Globe className="w-4 h-4" />
              <span>Languages</span>
            </h2>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all flex justify-between items-center">
                <span className="font-bold text-white">Bangla</span>
                <span className="text-cyan-400 font-mono font-semibold">Native (Reading, Writing, Speaking)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all flex justify-between items-center">
                <span className="font-bold text-white">English</span>
                <span className="text-blue-400 font-mono font-semibold">Intermediate (Reading, Writing, Speaking)</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* Standalone Page Footer */}
      <CleanFooter />

    </div>
  );
}

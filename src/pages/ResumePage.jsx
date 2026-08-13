import React, { useEffect } from 'react';
import { ArrowLeft, FileText, Mail, Phone, MapPin, Globe, Linkedin, Briefcase, Wrench, Award, GraduationCap, Sparkles, CheckCircle2, Building2, Download } from 'lucide-react';
import { personalProfile } from '../data/personalData';
import CleanFooter from '../components/clean/CleanFooter';

export default function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "A M Pabel | Official Resume & CV";
  }, []);

  const navigateToHome = () => {
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Ambient Background & Grid */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#070913] via-[#090e24] to-[#070913] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-animated-grid pointer-events-none z-0 opacity-60" />
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none z-0" />

      {/* Sticky Top Navigation Header Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Back Button */}
          <button
            onClick={navigateToHome}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer group shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          {/* Title Badge */}
          <div className="hidden md:flex items-center gap-2 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white font-bold">ampabel.com/resume</span>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:info@ampabel.com?subject=Hiring%20Inquiry%20-%20A%20M%20Pabel"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact / Hire</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Resume Content Container */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 py-10 sm:py-14 relative z-10 space-y-8">
        
        {/* Card 1: Top Hero Banner & Profile Overview */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Official Resume & CV
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white font-['Creato_Display',sans-serif]">
                A M Pabel
              </h1>
              <p className="text-sm sm:text-base text-cyan-300 font-mono font-medium">
                Graphic Designer & Motion Artist
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles & Retainers
              </span>
              <span className="text-xs font-mono text-slate-400">
                FramEmpire Studio
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div className="pt-3 border-t border-slate-800/80 space-y-1.5 relative z-10">
            <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block">
              🎯 Career Objective
            </span>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
              Versatile Graphic Designer & Motion Artist skilled in branding, motion graphics, and visual storytelling. Dedicated to transforming ideas into dynamic designs that engage audiences and shape modern digital communication.
            </p>
          </div>

          {/* Contact Meta Pills */}
          <div className="flex flex-wrap gap-x-6 gap-y-2.5 pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-300 relative z-10">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Uttara-08, Dhaka, Bangladesh
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-cyan-400" />
              +880 1615-288259
            </span>
            <a href="mailto:info@ampabel.com" className="flex items-center gap-1.5 text-cyan-400 hover:underline">
              <Mail className="w-4 h-4" />
              info@ampabel.com
            </a>
            <a href="https://ampabel.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-cyan-400 hover:underline">
              <Globe className="w-4 h-4" />
              ampabel.com
            </a>
            <a href="https://bd.linkedin.com/in/pabeledp" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-400 hover:underline">
              <Linkedin className="w-4 h-4" />
              linkedin.com/in/pabeledp
            </a>
          </div>
        </div>

        {/* Card 2: Work Experience (Unified Company Entry) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2.5 text-cyan-400">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider font-mono">
                💼 Work Experience
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">6 Professional Roles</span>
          </div>

          <div className="space-y-6">
            
            {/* Role 1: Unified Banglay IELTS & Immigration Center (including reThink) */}
            <div className="space-y-3 relative pl-4 border-l-2 border-cyan-500 bg-slate-950/50 p-4 sm:p-5 rounded-r-2xl border-y border-r border-slate-800/80">
              
              {/* Parent Company Header */}
              <div className="flex flex-wrap justify-between items-start gap-2 pb-3 border-b border-slate-800/80">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Banglay IELTS & Immigration Center</span>
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 font-semibold block mt-0.5">
                    Executive Video Editor
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                  12/2025 – Present
                </span>
              </div>

              {/* Internal Department Progression */}
              <div className="space-y-3 pt-1">
                
                {/* Current Dept: reThink */}
                <div className="space-y-2 bg-slate-900/90 p-3.5 rounded-xl border border-cyan-500/30">
                  <div className="flex flex-wrap justify-between items-center gap-1.5 text-xs sm:text-sm">
                    <span className="font-bold text-cyan-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      reThink (Sister Concern / Specialized Media Department)
                    </span>
                    <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      03/2026 – Present
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-light pt-1">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>Managing video editing pipeline and visual content strategy for reThink media wing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>Creating high-converting promotional content, social media reels, and brand assets.</span>
                    </li>
                  </ul>
                </div>

                {/* Previous Dept: BIIC Core */}
                <div className="space-y-2 bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="flex flex-wrap justify-between items-center gap-1.5 text-xs sm:text-sm">
                    <span className="font-medium text-slate-300">
                      Banglay IELTS Core Media Division
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      12/2025 – 03/2026
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-light pt-1">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400">•</span>
                      <span>Produced informative video content, reels, and study-abroad promotional media.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400">•</span>
                      <span>Transitioned into its sister concern department (reThink) for specialized media operations.</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Role 2: Education BD */}
            <div className="space-y-2 relative pl-4 border-l-2 border-slate-700">
              <div className="flex flex-wrap justify-between items-start gap-1">
                <h3 className="text-base font-bold text-white">Designer & Video Editor</h3>
                <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                  10/2025 – 12/2025
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-300">Education BD</p>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-300 font-light pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Created engaging visuals and promotional video content for educational campaigns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Collaborated with cross-functional teams to enhance visual branding under strict project deadlines.</span>
                </li>
              </ul>
            </div>

            {/* Role 3: Pi-Infotech */}
            <div className="space-y-2 relative pl-4 border-l-2 border-slate-700">
              <div className="flex flex-wrap justify-between items-start gap-1">
                <h3 className="text-base font-bold text-white">Project Manager | Visualizer</h3>
                <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                  04/2025 – 09/2025
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-300">Pi-Infotech Ltd.</p>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-300 font-light pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Handled design-driven client projects from concept to final delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Developed motion graphics, visual branding assets, and edited promotional videos.</span>
                </li>
              </ul>
            </div>

            {/* Role 4: Ma'hadul Uloom */}
            <div className="space-y-2 relative pl-4 border-l-2 border-slate-700">
              <div className="flex flex-wrap justify-between items-start gap-1">
                <h3 className="text-base font-bold text-white">Instructor (Graphic Design)</h3>
                <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                  11/2024 – 03/2025
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-300">Ma'hadul Uloom Al-Islamia Dhaka</p>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-300 font-light pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Taught practical classes and lectures on Graphic Design fundamentals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Developed course curriculum and mentored students in visual arts.</span>
                </li>
              </ul>
            </div>

            {/* Role 5: The Quarterly Parampara */}
            <div className="space-y-2 relative pl-4 border-l-2 border-slate-700">
              <div className="flex flex-wrap justify-between items-start gap-1">
                <h3 className="text-base font-bold text-white">Senior Graphic Designer & Verse/Rhyme Editor</h3>
                <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                  01/2023 – 10/2024
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-300">The Quarterly Parampara</p>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-300 font-light pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Led the graphic design team for magazine layout, formatting, and branding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Managed editorial proofreading, final revisions, and literary contributions.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Card 3: Skills & Software Knowledge */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-2.5 text-cyan-400 border-b border-slate-800 pb-4">
            <Wrench className="w-6 h-6" />
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider font-mono">
              🛠️ Skills & Software Knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Hard Skills */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase block">
                Hard Skills
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Social Post Design', 'Social Ad Animation', 'App UI Animation', 'Explainer Videos', 'Motion Graphics', 'Branding', 'Video Editing'].map((skill, i) => (
                  <span key={i} className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Tools */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase block">
                Software Knowledge
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Premiere Pro', 'Adobe InDesign', 'Blender', 'Figma', 'WordPress', 'Cursor AI'].map((tool, i) => (
                  <span key={i} className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase block">
                Soft Skills
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Team Leadership', 'Communication', 'Project Management', 'Time Management', 'Problem Solving'].map((soft, i) => (
                  <span key={i} className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                    {soft}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 2-Column Grid: Certifications & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 4: Professional Training & Certifications */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2.5 text-cyan-400 border-b border-slate-800 pb-3">
              <Award className="w-5 h-5" />
              <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                📜 Training & Certifications
              </h2>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex justify-between items-start text-xs sm:text-sm font-semibold text-white">
                  <span>Diploma in Graphic Design & Motion Graphics</span>
                  <span className="text-xs font-mono text-cyan-400">13/01/2024 – 21/05/2025</span>
                </div>
                <p className="text-xs font-mono text-slate-400">Creative IT Institute</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex justify-between items-start text-xs sm:text-sm font-semibold text-white">
                  <span>WordPress Website Design</span>
                  <span className="text-xs font-mono text-cyan-400">05/2024 – 11/2024</span>
                </div>
                <p className="text-xs font-mono text-slate-400">Ostad</p>
              </div>
            </div>
          </div>

          {/* Card 5: Educational Qualification */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2.5 text-cyan-400 border-b border-slate-800 pb-3">
              <GraduationCap className="w-5 h-5" />
              <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                🎓 Educational Qualification
              </h2>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex justify-between items-start text-xs sm:text-sm font-semibold text-white">
                  <span>Languages & Literature (Honors Level)</span>
                  <span className="text-xs font-mono text-cyan-400">2020 – 2023</span>
                </div>
                <p className="text-xs font-mono text-slate-400">Qawmi Madrasa • Ma'hadul Uloom Al-Islamia, Dhaka</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex justify-between items-start text-xs sm:text-sm font-semibold text-white">
                  <span>Hifzul Quran</span>
                  <span className="text-xs font-mono text-cyan-400">2018 – 2020</span>
                </div>
                <p className="text-xs font-mono text-slate-400">Jameya Arabia Siloniya, Feni</p>
              </div>
            </div>
          </div>

        </div>

        {/* 2-Column Grid: Achievements & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 6: Achievements & Extra-Curriculum */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2.5 text-cyan-400 border-b border-slate-800 pb-3">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                🏆 Achievements & Awards
              </h2>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Award for Poetry Writing</span>
                  <p className="text-xs text-slate-400 font-mono">Recognized for the published poetry collection "Chilekothar Ghor".</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-2 border-t border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Principal Of The Day (03/06/2023)</span>
                  <p className="text-xs text-slate-400 font-mono">Managed day-to-day administrative & academic operations at Ma'hadul Uloom Al-Islamia Dhaka.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 7: Languages */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2.5 text-cyan-400 border-b border-slate-800 pb-3">
              <Globe className="w-5 h-5" />
              <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                🌐 Languages
              </h2>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="font-bold text-white">Bangla</span>
                <span className="text-cyan-400 font-mono font-semibold">Native (Reading, Writing, Speaking)</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-center">
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

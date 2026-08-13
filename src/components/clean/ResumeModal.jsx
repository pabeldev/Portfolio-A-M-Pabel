import React from 'react';
import { X, FileText, Download, Briefcase, Award, GraduationCap, Wrench, Mail, Phone, MapPin, Globe, Linkedin, CheckCircle2, BookOpen, Sparkles, Building2 } from 'lucide-react';
import { personalProfile } from '../../data/personalData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-[96vw] sm:max-w-4xl max-h-[92vh] rounded-2xl sm:rounded-3xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-2xl flex flex-col justify-between my-auto">
        
        {/* Header Bar */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="p-1.5 sm:p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-xs sm:text-base font-bold text-white truncate">A M Pabel — Official Resume & CV</h3>
              <p className="text-[10px] sm:text-xs text-cyan-400 font-mono truncate">
                Graphic Designer & Motion Artist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="mailto:info@ampabel.com?subject=Hiring%20Inquiry%20-%20A%20M%20Pabel"
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-[10px] sm:text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Contact / Hire</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 sm:p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Card-System Resume */}
        <div className="p-4 sm:p-6 bg-slate-950 overflow-y-auto space-y-6 flex-1">
          
          {/* Card 1: Header Profile & Career Objective Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Official Portfolio CV
                </span>
                <h4 className="text-xl sm:text-3xl font-black text-white font-['Creato_Display',sans-serif]">
                  A M Pabel
                </h4>
                <p className="text-xs sm:text-sm text-cyan-300 font-mono font-medium">
                  Graphic Designer & Motion Artist
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles & Retainers
              </span>
            </div>

            {/* Career Objective */}
            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-1">
                🎯 Career Objective
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Versatile Graphic Designer & Motion Artist skilled in branding, motion graphics, and visual storytelling. Dedicated to transforming ideas into dynamic designs that engage audiences and shape modern digital communication.
              </p>
            </div>

            {/* Contact Meta */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-300">
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Uttara-08, Dhaka, Bangladesh
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                +880 1615-288259
              </span>
              <span className="flex items-center gap-1 text-cyan-400">
                <Mail className="w-3.5 h-3.5" />
                info@ampabel.com
              </span>
              <a href="https://ampabel.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline">
                <Globe className="w-3.5 h-3.5" />
                ampabel.com
              </a>
              <a href="https://bd.linkedin.com/in/pabeledp" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-400 hover:underline">
                <Linkedin className="w-3.5 h-3.5" />
                linkedin.com/in/pabeledp
              </a>
            </div>
          </div>

          {/* Card 2: Complete Work Experience (6 Roles) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <Briefcase className="w-5 h-5" />
                <h5 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  💼 Work Experience
                </h5>
              </div>
              <span className="text-xs font-mono text-slate-400">6 Professional Roles</span>
            </div>

            <div className="space-y-6">
              
              {/* Role 1: reThink */}
              <div className="space-y-1.5 relative pl-4 border-l-2 border-cyan-500">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h6 className="text-sm font-bold text-white">Executive Video Editor</h6>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono font-bold">
                    03/2026 – Present
                  </span>
                </div>
                <p className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                  <span>reThink</span>
                  <span className="text-[10px] font-normal text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    Sister Concern of Banglay IELTS & Immigration Center
                  </span>
                </p>
                <ul className="space-y-1 text-xs text-slate-300 font-light pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Managing video editing pipeline and visual content strategy for reThink media operations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Creating high-converting promotional content, social media reels, and brand assets.</span>
                  </li>
                </ul>
              </div>

              {/* Role 2: Banglay IELTS */}
              <div className="space-y-1.5 relative pl-4 border-l-2 border-blue-500">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h6 className="text-sm font-bold text-white">Executive Video Editor</h6>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-bold">
                    12/2025 – 03/2026
                  </span>
                </div>
                <p className="text-xs font-semibold text-blue-300">Banglay IELTS & Immigration Center</p>
                <ul className="space-y-1 text-xs text-slate-300 font-light pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Produced informative video content, reels, and study-abroad promotional media.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Transitioned into its sister concern department (reThink) for specialized media operations.</span>
                  </li>
                </ul>
              </div>

              {/* Role 3: Education BD */}
              <div className="space-y-1.5 relative pl-4 border-l-2 border-slate-700">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h6 className="text-sm font-bold text-white">Designer & Video Editor</h6>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                    10/2025 – 12/2025
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-300">Education BD</p>
                <ul className="space-y-1 text-xs text-slate-300 font-light pt-1">
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

              {/* Role 4: Pi-Infotech */}
              <div className="space-y-1.5 relative pl-4 border-l-2 border-slate-700">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h6 className="text-sm font-bold text-white">Project Manager | Visualizer</h6>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                    04/2025 – 09/2025
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-300">Pi-Infotech Ltd.</p>
                <ul className="space-y-1 text-xs text-slate-300 font-light pt-1">
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

              {/* Role 5: Ma'hadul Uloom */}
              <div className="space-y-1.5 relative pl-4 border-l-2 border-slate-700">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h6 className="text-sm font-bold text-white">Instructor (Graphic Design)</h6>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                    11/2024 – 03/2025
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-300">Ma'hadul Uloom Al-Islamia Dhaka</p>
                <ul className="space-y-1 text-xs text-slate-300 font-light pt-1">
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

              {/* Role 6: The Quarterly Parampara */}
              <div className="space-y-1.5 relative pl-4 border-l-2 border-slate-700">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h6 className="text-sm font-bold text-white">Senior Graphic Designer & Verse/Rhyme Editor</h6>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                    01/2023 – 10/2024
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-300">The Quarterly Parampara</p>
                <ul className="space-y-1 text-xs text-slate-300 font-light pt-1">
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
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-3">
              <Wrench className="w-5 h-5" />
              <h5 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                🛠️ Skills & Software Knowledge
              </h5>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Hard Skills */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase block">
                  Hard Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Social Post Design', 'Social Ad Animation', 'App UI Animation', 'Explainer Videos', 'Motion Graphics', 'Branding', 'Video Editing'].map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software Tools */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase block">
                  Software Knowledge
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Premiere Pro', 'Adobe InDesign', 'Blender', 'Figma', 'WordPress', 'Cursor AI'].map((tool, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase block">
                  Soft Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Team Leadership', 'Communication', 'Project Management', 'Time Management', 'Problem Solving'].map((soft, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                      {soft}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* 2-Column Grid: Certifications & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Card 4: Professional Training & Certifications */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2.5">
                <Award className="w-4 h-4" />
                <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  📜 Training & Certifications
                </h5>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-start text-xs font-semibold text-white">
                    <span>Diploma in Graphic Design & Motion Graphics</span>
                    <span className="text-[10px] font-mono text-cyan-400">13/01/2024 – 21/05/2025</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400">Creative IT Institute</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-start text-xs font-semibold text-white">
                    <span>WordPress Website Design</span>
                    <span className="text-[10px] font-mono text-cyan-400">05/2024 – 11/2024</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400">Ostad</p>
                </div>
              </div>
            </div>

            {/* Card 5: Educational Qualification */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2.5">
                <GraduationCap className="w-4 h-4" />
                <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  🎓 Educational Qualification
                </h5>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-start text-xs font-semibold text-white">
                    <span>Languages & Literature (Honors Level)</span>
                    <span className="text-[10px] font-mono text-cyan-400">2020 – 2023</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400">Qawmi Madrasa • Ma'hadul Uloom Al-Islamia, Dhaka</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-start text-xs font-semibold text-white">
                    <span>Hifzul Quran</span>
                    <span className="text-[10px] font-mono text-cyan-400">2018 – 2020</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400">Jameya Arabia Siloniya, Feni</p>
                </div>
              </div>
            </div>

          </div>

          {/* 2-Column Grid: Achievements & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Card 6: Achievements & Extra-Curriculum */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2.5">
                <Sparkles className="w-4 h-4" />
                <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  🏆 Achievements & Awards
                </h5>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Award for Poetry Writing</span>
                    <p className="text-[11px] text-slate-400 font-mono">Recognized for the published poetry collection "Chilekothar Ghor".</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 pt-1 border-t border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Principal Of The Day (03/06/2023)</span>
                    <p className="text-[11px] text-slate-400 font-mono">Managed day-to-day administrative & academic operations at Ma'hadul Uloom Al-Islamia Dhaka.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Card 7: Languages */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2.5">
                <Globe className="w-4 h-4" />
                <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  🌐 Languages
                </h5>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="font-bold text-white">Bangla</span>
                  <span className="text-cyan-400 font-mono font-semibold">Native (Reading, Writing, Speaking)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="font-bold text-white">English</span>
                  <span className="text-blue-400 font-mono font-semibold">Intermediate (Reading, Writing, Speaking)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Card: Contact & Links Handoff */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h5 className="text-sm font-bold text-white">Direct Handoff & Booking</h5>
              <p className="text-xs text-slate-400 font-mono">WhatsApp: +880 1615-288259 • Email: info@ampabel.com</p>
            </div>

            <a
              href="https://ampabel.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-cyan-300 flex items-center gap-1.5 hover:border-cyan-400 transition-all"
            >
              <span>ampabel.com</span>
              <Globe className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <span>A M Pabel Official Resume • Updated 2026</span>
          <span className="text-cyan-400 font-bold">● Active</span>
        </div>

      </div>
    </div>
  );
}

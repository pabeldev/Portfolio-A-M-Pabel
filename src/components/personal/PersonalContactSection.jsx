import React, { useState } from 'react';
import { personalProfile } from '../../data/personalData';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

export default function PersonalContactSection({ onOpenEstimator }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Motion Graphics', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      const text = encodeURIComponent(
        `Hi Pabel! I am ${formData.name} (${formData.email}). I am interested in ${formData.service}: ${formData.message}`
      );
      window.open(`https://wa.me/8801848374242?text=${text}`, '_blank');
    }, 1000);
  };

  return (
    <section id="contact-pabel" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="relative rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.1)]">
        
        {/* Ambient Glow */}
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Hire & Consultation
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white">
              Let's Bring Your Vision <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                To Life
              </span>
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Have a motion graphics project, commercial video edit, brand system, or vibe-coding request? Contact A M Pabel directly or use FramEmpire's project estimator.
            </p>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              
              <a
                href="https://wa.me/8801848374242"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all hover:translate-x-1 group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">WhatsApp / Direct Line</div>
                  <div className="text-sm font-bold text-white font-mono">{personalProfile.contact.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${personalProfile.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all hover:translate-x-1 group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Official Email</div>
                  <div className="text-sm font-bold text-white font-mono">{personalProfile.contact.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Studio Headquarters</div>
                  <div className="text-sm font-bold text-white">{personalProfile.location}</div>
                </div>
              </div>

            </div>

            {/* Quick Estimator CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenEstimator}
                className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Launch FramEmpire PDF Invoice Estimator
              </button>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-white">Send Pabel a Direct Message</h3>
                <p className="text-xs text-slate-400 mt-1">Instant delivery to WhatsApp & Studio Email</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Message Synthesized!</h4>
                  <p className="text-xs text-slate-300">Opening WhatsApp chat with A M Pabel directly...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Project Discipline</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300 text-sm focus:border-cyan-500 focus:outline-none font-mono"
                    >
                      <option value="3D Motion Graphics">3D Motion Graphics & Animation</option>
                      <option value="Commercial Video Editing">Commercial Video Editing & VFX</option>
                      <option value="Graphic Design">Graphic Design & Brand Identity</option>
                      <option value="Vibe Coding Web App">Vibe Coding & Web Applications</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Project Brief / Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, deadlines, or design requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:shadow-[0_0_35px_rgba(0,243,255,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    Transmit Message to Pabel Direct
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

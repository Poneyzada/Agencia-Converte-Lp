import React from 'react';
import { Camera, Sparkles, Video, UserCheck, Film, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ImageConsultingSection({ onOpenICP }) {
  const consulting = siteConfig.imageConsulting;
  const icons = [UserCheck, Video, Film];

  return (
    <section id="consultoria-imagem" className="py-20 sm:py-28 relative bg-[#0e1015] overflow-hidden border-t border-white/5">
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Highlight Card Container */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#171920] border border-[#ff5823]/50 shadow-[0_0_60px_rgba(255,88,35,0.18)] space-y-10 relative overflow-hidden">
          
          {/* Subtle Corner Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="space-y-4 text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5823]" />
              <span>{consulting.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              A sua marca vende mais <br className="hidden sm:inline" />
              <span className="text-[#ff5823]">quando você aparece.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              {consulting.description}
            </p>
          </div>

          {/* 3 Pillars Support Grid (3 Columns Desktop, Stacked Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {consulting.pillars.map((pillar, idx) => {
              const IconComponent = icons[idx] || Camera;

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#14151b] border border-white/10 hover:border-[#ff5823]/40 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 text-[#ff5823]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Action Bar inside Highlight Section */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Camera className="w-4 h-4 text-[#ff5823]" />
              <span>Incluso nos planos Autoridade e Escala sem custos adicionais</span>
            </div>

            <button
              onClick={onOpenICP}
              className="btn-orange w-full sm:w-auto px-7 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer group"
            >
              <span>Fazer diagnóstico grátis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

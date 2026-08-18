import React from 'react';
import { CheckCircle2, Sparkles, Compass, Target, Award, TrendingUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function MethodSection({ onOpenICP }) {
  const pillars = siteConfig.pillars || [];
  const icons = [Compass, Target, Award, TrendingUp];

  return (
    <section id="metodo" className="py-20 sm:py-28 relative bg-[#111216] overflow-hidden border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>O método Converte+</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Autoridade antes do <span className="text-[#ff5823]">tráfego.</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            {siteConfig.methodThesis || "A maioria das agências começa gastando seu dinheiro em anúncio. A gente arruma a base primeiro — posicionamento, comunicação e presença — porque anúncio em cima de base fraca queima verba. Quando o tráfego entra, ele encontra uma marca pronta para converter."}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((pillar, idx) => {
            const IconComp = icons[idx] || Sparkles;
            const itemsList = pillar.bullets || pillar.features || [];

            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#171920]/90 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between space-y-5 group relative overflow-hidden"
              >
                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-colors pointer-events-none" />

                <div className="space-y-4">
                  
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-white/40 group-hover:text-orange-400 transition-colors font-mono">
                      {pillar.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block font-mono">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullets with Check */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  {itemsList.map((item, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5823] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Ghost CTA */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenICP}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer group shadow-lg"
          >
            <span>Ver como isso se aplica ao meu negócio</span>
            <span className="text-[#ff5823] group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Award, Quote } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function CasesSection({ onOpenICP }) {
  const cases = siteConfig.cases || [];

  return (
    <section className="py-20 sm:py-28 relative bg-[#111216] overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-orange-500" />
            <span>Resultados de Negócio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Casos reais construídos com <br />
            <span className="text-[#ff5823]">base sólida e tráfego qualificado.</span>
          </h2>
        </div>

        {/* Flexible Cases Grid */}
        <div className={`grid gap-8 ${cases.length === 1 ? 'max-w-2xl mx-auto grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          {cases.map((cs, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 sm:p-9 rounded-3xl border border-white/10 bg-[#171920]/90 hover:border-orange-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between shadow-xl relative overflow-hidden group"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-colors pointer-events-none" />

              <div className="space-y-4">
                
                {/* Header: Segment, Location & Period */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5823]" />
                    <span>{cs.client}</span>
                    <span className="text-gray-400 font-normal">({cs.location})</span>
                  </div>
                  <span className="text-gray-400 text-[11px] font-mono">{cs.period}</span>
                </div>

                {/* Situation Before */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-mono">
                    Cenário Anterior
                  </span>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {cs.before}
                  </p>
                </div>

                {/* Result with Business Metric */}
                <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-1">
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block font-mono">
                    Resultado Obtido
                  </span>
                  <p className="text-xs sm:text-sm text-white font-bold leading-relaxed">
                    {cs.result}
                  </p>
                </div>

                {/* Testimonial Quote */}
                <div className="pt-2 text-xs italic text-gray-300 flex items-start gap-2">
                  <Quote className="w-4 h-4 text-[#ff5823] shrink-0 mt-0.5" />
                  <div>
                    <span>"{cs.quote}"</span>
                    <strong className="block text-white not-italic font-semibold mt-1">— {cs.author}</strong>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

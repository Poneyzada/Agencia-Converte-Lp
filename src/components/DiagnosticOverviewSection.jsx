import React from 'react';
import { ShieldCheck, MessageSquare, Search, MapPin, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function DiagnosticOverviewSection({ onOpenICP }) {
  const points = siteConfig.diagnosticPoints || [];
  const icons = [MessageSquare, Search, MapPin, UserCheck];

  return (
    <section className="py-24 sm:py-32 relative bg-[#111216] overflow-hidden border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Análise 100% gratuita</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            O primeiro passo é <span className="text-[#ff5823]">sem risco.</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Você já deve ter recebido oferta de "análise gratuita" que era só uma reunião de venda disfarçada. Essa não é. Veja exatamente o que acontece:
          </p>
        </div>

        {/* 4 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {points.map((point, idx) => {
            const IconComp = icons[idx] || ShieldCheck;

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[#171920] border border-white/10 hover:border-orange-500/40 shadow-lg space-y-3 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#ff5823]">Passo 0{idx + 1}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Destaque */}
        <div className="p-8 rounded-3xl bg-[#171920] border border-[#ff5823]/40 text-center space-y-3 shadow-2xl">
          <p className="text-base sm:text-xl font-extrabold text-white leading-relaxed max-w-3xl mx-auto">
            "Você sai com clareza mesmo que não feche com a gente. <br className="hidden sm:inline" />
            <span className="text-[#ff5823]">Se não fizer sentido, a gente diz na hora e fica por isso mesmo.</span>"
          </p>
        </div>

        {/* Section Action & Microcopy */}
        <div className="text-center space-y-3 pt-2">
          <button
            onClick={onOpenICP}
            className="btn-orange px-8 py-4 rounded-2xl font-extrabold text-xs sm:text-sm inline-flex items-center gap-2.5 shadow-2xl shadow-orange-500/30 cursor-pointer group min-h-[44px]"
          >
            <span>Fazer diagnóstico grátis</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[11px] sm:text-xs text-gray-400 font-medium">
            Resposta em até 24h · Sem compromisso · Seus dados não são compartilhados
          </p>
        </div>

      </div>
    </section>
  );
}

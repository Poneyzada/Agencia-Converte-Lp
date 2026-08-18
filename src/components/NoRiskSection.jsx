import React from 'react';
import { ShieldCheck, Plus, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NoRiskSection({ onOpenICP }) {
  const steps = [
    {
      title: "Diagnóstico Rápido e Sem Custo",
      desc: "Você responde a 5 perguntas objetivas sobre o seu modelo de negócio, faturamento e verba para anúncios."
    },
    {
      title: "Análise Estratégica Direta",
      desc: "Nossos fundadores analisam suas oportunidades e apontam gargalos antes de qualquer investimento."
    },
    {
      title: "Plano Prático e Transparente",
      desc: "Apresentamos exatamente qual dos 3 planos se encaixa na sua realidade, com expectativas e metas claras."
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#111216] border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy and Steps */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Transparência e Confiança</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                O primeiro passo é <span className="text-[#ff5823]">sem risco</span> e sem compromisso.
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Antes de falar em contratos ou investimentos, nós mapeamos suas oportunidades para entender se faz sentido para ambas as partes.
              </p>
            </div>

            {/* 3 Step Flow */}
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#171920] border border-white/5 hover:border-white/15 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center shrink-0 text-xs font-mono">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenICP}
                className="btn-orange px-7 py-4 rounded-2xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-orange-500/25 cursor-pointer group"
              >
                <span>Fazer diagnóstico grátis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: 3D Orbit Central Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#ff5823]/30 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border border-white/5" />

              <div className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#ff5823] to-[#ff7a4a] p-[2px] shadow-[0_0_50px_rgba(255,88,35,0.4)] animate-pulse-glow">
                <div className="w-full h-full bg-[#171920] rounded-[22px] flex items-center justify-center">
                  <Plus className="w-12 h-12 text-[#ff5823] stroke-[3.5]" />
                </div>
              </div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-[#171920] border border-orange-500/40 text-[11px] font-bold text-white shadow-lg">
                Meta Ads
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-[#171920] border border-orange-500/40 text-[11px] font-bold text-white shadow-lg">
                Google Ads
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-3 py-1.5 rounded-full bg-[#171920] border border-orange-500/40 text-[11px] font-bold text-white shadow-lg">
                Branding
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-[#171920] border border-orange-500/40 text-[11px] font-bold text-white shadow-lg">
                Escala
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

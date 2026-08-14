import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function PlansSection({ onOpenICP }) {
  return (
    <section id="planos" className="py-20 md:py-24 relative overflow-hidden bg-[#080c19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Opções Personalizadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Um plano para cada momento do <span className="text-gradient-brand">seu negócio.</span>
            </h2>
          </div>
          <p className="text-gray-300 text-sm max-w-md leading-relaxed">
            Sem pacotes engessados. A partir do diagnóstico, montamos uma proposta ajustada ao seu momento e orçamento.
          </p>
        </div>

        {/* 3 Plans Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteConfig.plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#141e38] to-[#0e1529] border-2 border-orange-500 shadow-2xl shadow-orange-500/10 scale-105 z-10'
                  : 'glass-panel border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-[10px] uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Mais Procurado</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 min-h-[36px]">
                  {plan.subtitle}
                </p>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                      <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10">
                <button
                  onClick={onOpenICP}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.popular
                      ? 'btn-orange text-white shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

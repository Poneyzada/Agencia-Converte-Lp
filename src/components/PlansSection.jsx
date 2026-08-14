import React from 'react';
import { CheckCircle2, ArrowRight, Shield, Award, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function PlansSection({ onOpenICP }) {
  const plans = siteConfig.plans;

  return (
    <section id="planos" className="py-20 sm:py-28 relative bg-[#080c19] overflow-hidden border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-orange-500" />
            <span>Planos & Estrutura</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Um plano para cada momento <br className="hidden sm:inline" />
            <span className="text-gradient-brand">do seu negócio.</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Sem valores escondidos e sem pacotes engessados. Escolha a estrutura ideal para o momento atual da sua empresa.
          </p>
        </div>

        {/* 3 Plans Grid (Inspired by 21st.dev Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`glass-panel p-6 sm:p-8 rounded-[28px] border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isPopular
                    ? 'border-orange-500/60 bg-[#0e1529] shadow-[0_0_50px_rgba(255,88,35,0.25)] scale-[1.02] z-20'
                    : 'border-white/10 bg-[#0a0f1f]/90 hover:border-white/20 z-10'
                }`}
              >
                {/* Glow Wash for Popular Card */}
                {isPopular && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="space-y-6">
                  
                  {/* Top Row: Plan Name & Pill Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {plan.title}
                    </h3>

                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                        isPopular
                          ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/30'
                          : 'bg-white/5 text-gray-300 border-white/10'
                      }`}
                    >
                      {plan.badgeText}
                    </span>
                  </div>

                  {/* Subtitle & Tagline */}
                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-snug">
                    {plan.tagline}
                  </p>

                  {/* Ideal For Box */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
                      Ideal para:
                    </span>
                    <span className="text-xs text-gray-200 block font-medium">
                      {plan.idealFor}
                    </span>
                  </div>

                  {/* Milestone Box */}
                  <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-1">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
                      Marco de previsibilidade:
                    </span>
                    <span className="text-xs text-white font-semibold block">
                      {plan.milestone}
                    </span>
                  </div>

                  {/* CTA Button (NO Sparkles icon as requested!) */}
                  <button
                    onClick={onOpenICP}
                    className={`w-full py-4 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer group shadow-lg ${
                      isPopular
                        ? 'btn-orange shadow-orange-500/30'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Divider Line */}
                  <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="flex-shrink mx-3 text-[10px] text-gray-400 uppercase font-mono tracking-wider">O que está incluído</span>
                    <div className="flex-grow border-t border-white/10"></div>
                  </div>

                  {/* Categorized Features List */}
                  <div className="space-y-4">
                    {plan.categories.map((cat, cIdx) => (
                      <div key={cIdx} className="space-y-2">
                        <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block">
                          {cat.name}
                        </span>
                        <div className="space-y-2">
                          {cat.items.map((item, iIdx) => (
                            <div key={iIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer Guarantee */}
                <div className="pt-6 border-t border-white/10 mt-6 text-center">
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-400">
                    <Shield className="w-3.5 h-3.5 text-orange-400" />
                    <span>Transparência total e sem contratos engessados</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

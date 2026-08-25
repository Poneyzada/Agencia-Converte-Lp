import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Shield, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function PlansSection({ onOpenICP }) {
  const plans = siteConfig.plans;

  // Track expanded state per plan. By default, desktop is expanded, mobile is collapsed.
  // We initialize state or calculate default: undefined means default (open on desktop, closed on mobile).
  const [toggleState, setToggleState] = useState({});

  const isPlanExpanded = (planId) => {
    if (toggleState[planId] !== undefined) {
      return toggleState[planId];
    }
    // Default: false on mobile (<768px), true on desktop (>=768px)
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      return true;
    }
    return false;
  };

  const toggleFeatures = (planId) => {
    const current = isPlanExpanded(planId);
    setToggleState(prev => ({
      ...prev,
      [planId]: !current
    }));
  };

  return (
    <section id="planos" className="py-20 sm:py-28 relative bg-[#111216] overflow-hidden border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-orange-500" />
            <span>Estruturas de Parceria</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Um plano para cada momento <br />
            <span className="text-[#ff5823]">do seu negócio.</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            O investimento depende do momento do seu negócio e do canal. A gente define isso junto no diagnóstico — sem pacote engessado e sem valor escondido.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const expanded = isPlanExpanded(plan.id);

            // Calculate total count of deliverable items
            const totalDeliverablesCount = plan.categories.reduce((acc, cat) => acc + (cat.items ? cat.items.length : 0), 0);

            return (
              <div
                key={plan.id}
                className={`glass-panel p-6 sm:p-8 rounded-[28px] border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isPopular
                    ? 'border-[#ff5823]/60 bg-[#171920] shadow-[0_0_50px_rgba(255,88,35,0.25)] md:scale-[1.02] z-20 order-first md:order-none'
                    : 'border-white/10 bg-[#14151b]/90 hover:border-white/20 z-10'
                }`}
              >
                {/* Glow Wash for Popular Card */}
                {isPopular && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="space-y-6">
                  
                  {/* Top Row */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {plan.title}
                    </h3>

                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                        isPopular
                          ? 'bg-[#ff5823] text-white border-orange-400 shadow-md shadow-orange-500/30'
                          : 'bg-white/5 text-gray-300 border-white/10'
                      }`}
                    >
                      {plan.badgeText}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-snug">
                    {plan.tagline}
                  </p>

                  {/* Ideal For Box */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block font-mono">
                      Ideal para:
                    </span>
                    <span className="text-xs text-gray-200 block font-medium">
                      {plan.idealFor}
                    </span>
                  </div>

                  {/* Milestone Box */}
                  <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-1">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block font-mono">
                      Marco de previsibilidade:
                    </span>
                    <span className="text-xs text-white font-semibold block">
                      {plan.milestone}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={onOpenICP}
                    className={`w-full py-4 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer group shadow-lg ${
                      isPopular
                        ? 'btn-orange shadow-orange-500/30'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <span>Fazer diagnóstico grátis</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Divisória antes do botão de entregáveis */}
                  <div className="pt-2 border-t border-white/10">
                    
                    {/* Botão de Entregáveis Destaque (Especificação item 03) */}
                    <button
                      onClick={() => toggleFeatures(plan.id)}
                      className="w-full min-h-[44px] py-3 px-4 rounded-2xl bg-orange-500/10 hover:bg-orange-500/20 border border-[#ff5823] text-[#ff5823] text-xs font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                    >
                      <span>
                        {expanded ? 'Ocultar detalhes ↑' : `Ver os ${totalDeliverablesCount} entregáveis →`}
                      </span>
                    </button>

                  </div>

                  {/* Categorized Features List */}
                  {expanded && (
                    <div className="space-y-4 pt-2 animate-in fade-in-50 duration-200">
                      <div className="relative flex py-1 items-center">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink mx-3 text-[10px] text-gray-400 uppercase font-mono tracking-wider">Entregáveis</span>
                        <div className="flex-grow border-t border-white/10"></div>
                      </div>

                      {plan.categories.map((cat, cIdx) => (
                        <div key={cIdx} className="space-y-2">
                          <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block">
                            {cat.name}
                          </span>
                          <div className="space-y-2">
                            {cat.items.map((item, iIdx) => (
                              <div key={iIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                                <CheckCircle2 className="w-4 h-4 text-[#ff5823] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

                {/* Footer Guarantee */}
                <div className="pt-6 border-t border-white/10 mt-6 text-center">
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-400">
                    <Shield className="w-3.5 h-3.5 text-orange-400" />
                    <span>Sem pacotes engessados e sem fidelidade</span>
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

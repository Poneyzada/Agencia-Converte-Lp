import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, TrendingUp, MessageSquare } from 'lucide-react';
import heroPhoto from '../assets/converte+foto-hero.webp';
import { siteConfig } from '../config/siteConfig';

export default function HeroSection({ onOpenICP, customHeroComponent: CustomHero }) {
  if (CustomHero) {
    return <CustomHero />;
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080c19]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-[450px] h-[280px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                Agência de Tráfego Pago & Branding
              </span>
            </div>

            {/* Headline matching screenshot */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Clientes chegando todos os dias <br className="hidden sm:inline" />
              <span className="text-gradient-brand">sem depender de indicação.</span>
            </h1>

            {/* Subheadline matching copy */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Você já tem um bom produto e clientes que confiam em você. A gente estrutura sua presença digital e traz as pessoas certas, de forma previsível, para o seu site e o seu WhatsApp — para você parar de torcer pela indicação e passar a saber como vai fechar o mês.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenICP}
                className="btn-orange px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-orange-200" />
                <span>Fazer diagnóstico grátis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#metodo"
                className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white font-medium text-base text-center transition-all flex items-center justify-center gap-2"
              >
                Ver como funciona
              </a>
            </div>

            {/* 3 Horizontal Value Pills matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Contas 100% no seu nome</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Sem contratos engessados</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Poucos clientes por vez</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-amber-500/30 blur-xl opacity-70" />

              {/* Photo Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl">
                <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-slate-900">
                  <img
                    src={heroPhoto}
                    alt="Fundador Converte+"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c19] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0e1529]/95 backdrop-blur-xl border border-white/15 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-500 flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Contatos no WhatsApp</div>
                      <div className="text-sm font-bold text-white">Fluxo Diário & Previsível</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
                    Converte<span className="text-orange-500">+</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight, Plus, Compass, Target, Award, TrendingUp, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenICP }) {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 md:py-28 overflow-hidden bg-[#111216]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30rem] h-[30rem] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Grid 60 / 40 on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (60% Desktop) - Text Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Tráfego pago + branding para marcas que já vendem</span>
            </div>

            {/* Headline (Maior elemento da página - 2ª linha em laranja sólido #ff5823) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Clientes chegando todos os dias, <br />
              <span className="text-[#ff5823]">sem depender de indicação.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
              Você já tem um bom produto e clientes que confiam em você. A gente estrutura sua presença digital e traz as pessoas certas, de forma previsível, para o seu site e o seu WhatsApp.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenICP}
                  className="btn-orange w-full sm:w-auto px-7 py-4 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xl shadow-orange-500/30 cursor-pointer group active:scale-[0.98] transition-transform min-h-[44px]"
                >
                  <span>Fazer diagnóstico grátis</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#metodo"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#171920] hover:bg-[#1f222b] border border-white/15 text-white font-semibold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 min-h-[44px]"
                >
                  Ver como funciona
                </a>
              </div>

              {/* Microcopy sob os botões */}
              <p className="text-[11px] sm:text-xs text-gray-400 font-medium">
                5 perguntas. Resposta dos fundadores em até 24h. Sem compromisso.
              </p>
            </div>

          </div>

          {/* Right Column (40% Desktop) - 3D Orbit Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center select-none">
              
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-6 sm:inset-8 rounded-full border border-dashed border-[#ff5823]/30 animate-spin-slow motion-reduce:animate-none" />
              <div className="absolute inset-12 sm:inset-16 rounded-full border border-white/5" />

              {/* Center Glow Badge */}
              <div className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-[#ff5823] to-[#ff7a4a] p-[2px] shadow-[0_0_50px_rgba(255,88,35,0.4)] animate-pulse-glow">
                <div className="w-full h-full bg-[#171920] rounded-[22px] flex items-center justify-center">
                  <Plus className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff5823] stroke-[3.5]" />
                </div>
              </div>

              {/* Orbiting Satellite Badges */}
              <div className="absolute inset-0 animate-spin-slow motion-reduce:animate-none">
                
                {/* Node 1: Top (Base Digital) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-2xl bg-[#171920] border border-orange-500/40 shadow-xl flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                  <span>Base Digital</span>
                </div>

                {/* Node 2: Right (Meta & Google Ads) */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-2xl bg-[#171920] border border-orange-500/40 shadow-xl flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                  <span>Meta & Google Ads</span>
                </div>

                {/* Node 3: Bottom (Branding Forte) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 sm:p-3 rounded-2xl bg-[#171920] border border-orange-500/40 shadow-xl flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                  <span>Branding Forte</span>
                </div>

                {/* Node 4: Left (Escala Previsível) */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-2xl bg-[#171920] border border-orange-500/40 shadow-xl flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                  <span>Escala Previsível</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

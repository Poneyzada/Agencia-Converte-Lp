import React from 'react';
import { ArrowRight, Plus, Compass, Target, Award, TrendingUp, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenICP }) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-32 bg-[#111216] overflow-x-hidden">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 lg:left-1/3 -translate-y-1/2 w-[24rem] sm:w-[35rem] lg:w-[45rem] h-[24rem] sm:h-[35rem] lg:h-[45rem] bg-orange-500/10 rounded-full blur-[120px] lg:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Responsive Layout: Vertical on Mobile, 60/40 Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (100% on Mobile, 60% on Desktop) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Tráfego pago + branding para marcas que já vendem</span>
            </div>

            {/* Headline (2ª linha em laranja sólido #ff5823) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Clientes chegando todos os dias, <br />
              <span className="text-[#ff5823]">sem depender de indicação.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
              Você já tem um bom produto e clientes que confiam em você. A gente estrutura sua presença digital e traz as pessoas certas, de forma previsível, para o seu site e o seu WhatsApp.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenICP}
                  className="btn-orange w-full sm:w-auto px-7 py-4 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-2xl shadow-orange-500/30 cursor-pointer active:scale-[0.98] transition-transform min-h-[48px]"
                >
                  <span>Fazer diagnóstico grátis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#metodo"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#171920] hover:bg-[#1f222b] border border-white/15 text-white font-semibold text-sm text-center transition-all flex items-center justify-center gap-2 min-h-[48px]"
                >
                  Ver como funciona
                </a>
              </div>

              {/* Microcopy sob os botões */}
              <p className="text-[11px] sm:text-xs text-gray-400 font-medium pt-1">
                5 perguntas. Resposta dos fundadores em até 24h. Sem compromisso.
              </p>
            </div>

          </div>

          {/* Right Column: 3D Orbit Graphic ("A Rodinha") - VISÍVEL NO MOBILE E NO DESKTOP */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-6 sm:py-8">
            
            {/* Orbit Container perfeitamente escalado e centralizado no Mobile e Desktop */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center select-none">
              
              {/* Anéis Concêntricos da Rodinha */}
              <div className="absolute inset-4 rounded-full border border-white/10" />
              <div className="absolute inset-10 sm:inset-12 rounded-full border border-dashed border-[#ff5823]/30 animate-spin-slow motion-reduce:animate-none" />
              <div className="absolute inset-16 sm:inset-20 rounded-full border border-white/5" />

              {/* Símbolo Central '+' Iluminado */}
              <div className="relative z-20 w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-[#ff5823] to-[#ff7a4a] p-[2px] shadow-[0_0_50px_rgba(255,88,35,0.4)] animate-pulse-glow">
                <div className="w-full h-full bg-[#171920] rounded-[22px] flex items-center justify-center">
                  <Plus className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff5823] stroke-[3.5]" />
                </div>
              </div>

              {/* 4 Satélites Orbitais da Rodinha */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                
                {/* Satélite Top (Base Digital) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 p-1.5 sm:p-2.5 px-2.5 sm:px-3.5 rounded-2xl bg-[#171920] border border-[#ff5823]/50 shadow-xl flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <Compass className="w-3.5 h-3.5 text-[#ff5823]" />
                  <span>Base Digital</span>
                </div>

                {/* Satélite Right (Meta & Google Ads) */}
                <div className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 p-1.5 sm:p-2.5 px-2.5 sm:px-3.5 rounded-2xl bg-[#171920] border border-[#ff5823]/50 shadow-xl flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <Target className="w-3.5 h-3.5 text-[#ff5823]" />
                  <span>Meta & Google</span>
                </div>

                {/* Satélite Bottom (Branding Forte) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-1.5 sm:p-2.5 px-2.5 sm:px-3.5 rounded-2xl bg-[#171920] border border-[#ff5823]/50 shadow-xl flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <Award className="w-3.5 h-3.5 text-[#ff5823]" />
                  <span>Branding Forte</span>
                </div>

                {/* Satélite Left (Escala Previsível) */}
                <div className="absolute top-1/2 -left-2 sm:-left-4 -translate-y-1/2 p-1.5 sm:p-2.5 px-2.5 sm:px-3.5 rounded-2xl bg-[#171920] border border-[#ff5823]/50 shadow-xl flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <TrendingUp className="w-3.5 h-3.5 text-[#ff5823]" />
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

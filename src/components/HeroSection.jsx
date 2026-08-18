import React from 'react';
import { ArrowRight, Plus, Compass, Target, Award, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenICP }) {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 md:py-28 overflow-hidden bg-[#111216]">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 md:left-1/4 -translate-y-1/2 w-[24rem] sm:w-[35rem] h-[24rem] sm:h-[35rem] bg-orange-500/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Responsive Grid: Stacked on Mobile, 60/40 on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Copy (100% Mobile, 60% Desktop) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Tráfego pago + branding para marcas que já vendem</span>
            </div>

            {/* Headline (2ª linha em laranja sólido) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Clientes chegando todos os dias, <br />
              <span className="text-[#ff5823]">sem depender de indicação.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
              Você já tem um bom produto e clientes que confiam em você. A gente estrutura sua presença digital e traz as pessoas certas, de forma previsível, para o seu site e o seu WhatsApp.
            </p>

            {/* Action Buttons (Mobile: Largura Total | Desktop: Horizontal) */}
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

          {/* Orbit Graphic Container (Mobile: Compact Card | Desktop: Full 3D Orbit) */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full overflow-hidden py-4">
            
            {/* Desktop Orbit (Hidden on small mobile, visible on tablet/desktop) */}
            <div className="hidden sm:flex relative w-72 h-72 md:w-96 md:h-96 items-center justify-center select-none">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#ff5823]/30 animate-spin-slow motion-reduce:animate-none" />
              <div className="absolute inset-16 rounded-full border border-white/5" />

              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-[#ff5823] to-[#ff7a4a] p-[2px] shadow-[0_0_50px_rgba(255,88,35,0.4)] animate-pulse-glow">
                <div className="w-full h-full bg-[#171920] rounded-[22px] flex items-center justify-center">
                  <Plus className="w-12 h-12 text-[#ff5823] stroke-[3.5]" />
                </div>
              </div>

              <div className="absolute inset-0 animate-spin-slow motion-reduce:animate-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-2xl bg-[#171920] border border-orange-500/40 shadow-xl flex items-center gap-2 text-xs font-bold text-white whitespace-nowrap">
                  <Compass className="w-4 h-4 text-orange-400" />
                  <span>Base Digital</span>
                </div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-2.5 rounded-2xl bg-[#171920] border border-orange-500/40 shadow-xl flex items-center gap-2 text-xs font-bold text-white whitespace-nowrap">
                  <Target className="w-4 h-4 text-orange-400" />
                  <span>Meta & Google Ads</span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2.5 rounded-2xl bg-[#171920] border border-orange-500/40 shadow-xl flex items-center gap-2 text-xs font-bold text-white whitespace-nowrap">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span>Branding Forte</span>
                </div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-2xl bg-[#171920] border border-orange-500/40 shadow-xl flex items-center gap-2 text-xs font-bold text-white whitespace-nowrap">
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                  <span>Escala Previsível</span>
                </div>
              </div>
            </div>

            {/* Mobile Native 4-Pill Grid (Zero overflow on small screens <640px) */}
            <div className="sm:hidden w-full grid grid-cols-2 gap-2.5 pt-2">
              <div className="p-3 rounded-2xl bg-[#171920] border border-white/10 flex items-center gap-2 text-xs font-bold text-white">
                <Compass className="w-4 h-4 text-[#ff5823] shrink-0" />
                <span>Base Digital</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#171920] border border-white/10 flex items-center gap-2 text-xs font-bold text-white">
                <Target className="w-4 h-4 text-[#ff5823] shrink-0" />
                <span>Meta & Google</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#171920] border border-white/10 flex items-center gap-2 text-xs font-bold text-white">
                <Award className="w-4 h-4 text-[#ff5823] shrink-0" />
                <span>Branding</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#171920] border border-white/10 flex items-center gap-2 text-xs font-bold text-white">
                <TrendingUp className="w-4 h-4 text-[#ff5823] shrink-0" />
                <span>Escala</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

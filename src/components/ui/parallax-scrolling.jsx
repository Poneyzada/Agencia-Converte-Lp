import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import heroPhoto from '../../assets/converte+foto-hero.webp';
import { useDeviceType } from '../../hooks/useMediaQuery';

export function ParallaxComponent({ onOpenICP }) {
  const containerRef = useRef(null);
  const { isMobile } = useDeviceType();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // TIMELINE DE SCROLL PINNADO (CONECTA A FOTO DIRETO AO '+' NUM ÚNICO SCROLL FLUIDO SEM BORDAS)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-hero-pinned-wrapper]',
          start: 'top top',
          end: '+=120%', // Distância de scroll fluida
          scrub: 0.8,    // Acompanha o scroll do usuário
          pin: true,     // Trava a tela para fazer a transição perfeita
          anticipatePin: 1
        }
      });

      // 1. A foto e o título encolhem e desvanecem suavemente enquanto você rola
      tl.to('[data-parallax-photo]', {
        scale: isMobile ? 0.85 : 0.80,
        opacity: 0.15,
        duration: 1,
        ease: 'power1.inOut'
      }, 0)
      .to('[data-hero-title]', {
        scale: 0.7,
        opacity: 0,
        y: -60,
        duration: 0.8,
        ease: 'power1.inOut'
      }, 0)

      // 2. O símbolo '+' surge no centro exato da tela se conectando à foto
      .fromTo('[data-plus-symbol]',
        { scale: 0.25, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        }, 0.3);

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#080c19]">
      
      {/* ========================================================= */}
      {/* SEÇÃO WRAPPER PINNADA DO HERO AO SÍMBOLO DE "+"           */}
      {/* ========================================================= */}
      <div data-hero-pinned-wrapper className="relative w-full h-screen overflow-hidden bg-[#080c19]">
        
        {/* FOTO DO HERO (ILUMINAÇÃO ESCURECIDA E SUAVIZADA, ZERO LUZ ESTOURADA NO ROSTO) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img 
            data-parallax-photo
            src={heroPhoto} 
            alt="Fundador Converte+ na Poltrona" 
            className="w-full h-full object-cover [object-position:center_22%] filter brightness-[0.80] contrast-95 origin-center"
          />
          
          {/* Sombreamento escuro aveludado para suavizar a luz no rosto */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c19]/60 via-[#080c19]/30 to-[#080c19]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#080c19]/20 to-[#080c19]/60" />
        </div>

        {/* TÍTULO CONVERTE+ (IDÊNTICO AO MOBILE) */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-between pt-20 pb-8 pointer-events-none">
          <div className="h-10"></div>

          <div data-hero-title className="text-center px-4 max-w-7xl mx-auto flex flex-col items-center origin-center pointer-events-auto">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)] select-none">
              CONVERTE<span className="text-orange-500">+</span>
            </h1>
          </div>

          <div className="pointer-events-auto">
            <div 
              className="flex flex-col items-center gap-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-gray-200 animate-bounce cursor-pointer bg-black/60 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/15 backdrop-blur-md hover:bg-black/80 transition-colors shadow-2xl" 
            >
              <span>Role para continuar</span>
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
            </div>
          </div>
        </div>

        {/* SÍMBOLO GIGANTE "+" (DENTRO DA MESMA TELA PINNADA E REVELADO NO SCROLL) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div 
            data-plus-symbol
            onClick={onOpenICP}
            className="cursor-pointer pointer-events-auto select-none text-orange-500 font-black text-8xl sm:text-[16rem] lg:text-[22rem] leading-none drop-shadow-[0_0_80px_rgba(255,88,35,0.8)] hover:scale-110 transition-transform duration-300 animate-float"
          >
            +
          </div>
        </div>

      </div>


      {/* ========================================================= */}
      {/* 3. MAIN COPY & CONVERSION BUTTONS SECTION            */}
      {/* ========================================================= */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#080c19] overflow-hidden border-t border-white/5">
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
          
          {/* Chamada Principal */}
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 sm:mb-8">
            Clientes chegando todos os dias <br className="hidden sm:inline" />
            <span className="text-gradient-brand">sem depender de indicação.</span>
          </h2>

          {/* Texto Explicativo da Copy */}
          <p className="text-sm sm:text-lg lg:text-xl text-gray-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-3xl">
            Você já tem um bom produto e clientes que confiam em você. A gente estrutura sua presença digital e traz as pessoas certas, de forma previsível, para o seu site e o seu WhatsApp — para você parar de torcer pela indicação e passar a saber como vai fechar o mês.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto mb-10 sm:mb-12">
            <button
              onClick={onOpenICP}
              className="btn-orange w-full sm:w-auto px-7 py-4 rounded-2xl font-extrabold text-sm sm:text-base shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-2.5 cursor-pointer group active:scale-[0.98] transition-transform"
            >
              <span>Fazer diagnóstico grátis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#metodo"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#0e1529] hover:bg-[#141e38] backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base text-center transition-all flex items-center justify-center gap-2"
            >
              Ver como funciona
            </a>
          </div>

          {/* 3 Pills Horizontais */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl pt-6 sm:pt-8 border-t border-white/15">
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Contas 100% no seu nome</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Sem contratos engessados</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Poucos clientes por vez</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

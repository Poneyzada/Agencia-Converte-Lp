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
      // 1. Animação de saída da foto do Hero (parece que mexeu e encolheu suavemente)
      gsap.to('[data-parallax-photo]', {
        yPercent: isMobile ? 6 : 14,
        scale: 0.94,
        opacity: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-hero-screen]',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // 2. Animação de saída do título CONVERTE+ (escala e desvanece ao rolar)
      gsap.to('[data-hero-title]', {
        yPercent: -25,
        scale: 1.12,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-hero-screen]',
          start: 'top top',
          end: 'bottom 20%',
          scrub: true
        }
      });

      // 3. Transição de entrada amaciada do símbolo '+' (entra depois que o Hero mexe)
      gsap.fromTo('[data-plus-symbol]',
        { scale: 0.4, opacity: 0, y: 60 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '[data-plus-screen]',
            start: 'top 80%',
            end: 'center center',
            scrub: 0.9
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#080c19]">
      
      {/* ========================================================= */}
      {/* 1. HERO SCREEN: FOTO E TÍTULO COM ANIMAÇÃO DE MOVIMENTO   */}
      {/* ========================================================= */}
      <section data-hero-screen className="relative w-full h-screen flex flex-col items-center justify-between overflow-hidden bg-[#080c19] pt-16 sm:pt-12">
        
        {/* Foto de Fundo Edge-to-Edge com Filtro HD e movimento de rolagem */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img 
            data-parallax-photo
            src={heroPhoto} 
            alt="Fundador Converte+ na Poltrona" 
            className="w-full h-full object-cover [object-position:center_22%] sm:[object-position:center_24%] md:[object-position:center_26%] filter contrast-[1.14] brightness-[0.96] saturate-[1.08] [image-rendering:-webkit-optimize-contrast] origin-center"
          />
          
          {/* Sombreamento para transição com o fundo */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c19]/35 via-transparent to-[#080c19]" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#080c19]/45" />
        </div>

        {/* Spacer top */}
        <div className="h-14 sm:h-18"></div>

        {/* TÍTULO CONVERTE+ COM MOVIMENTO DE SAÍDA */}
        <div data-hero-title className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center my-auto origin-center">
          <h1 className="text-5xl sm:text-8xl lg:text-9xl font-black text-white uppercase tracking-tight drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)] select-none">
            CONVERTE<span className="text-orange-500">+</span>
          </h1>
        </div>

        {/* Botão de Scroll no Rodapé do Hero */}
        <div className="relative z-10 pb-6 sm:pb-8">
          <div 
            className="flex flex-col items-center gap-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-gray-200 animate-bounce cursor-pointer bg-black/60 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/15 backdrop-blur-md hover:bg-black/80 transition-colors shadow-2xl" 
            onClick={() => {
              const el = document.getElementById('secao-plus');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Role para continuar</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
          </div>
        </div>

      </section>


      {/* ========================================================= */}
      {/* 2. TRANSITION SCREEN: O "+" ENTRA DEPOIS DO MOVIMENTO     */}
      {/* ========================================================= */}
      <section 
        id="secao-plus" 
        data-plus-screen 
        className="relative w-full h-screen flex items-center justify-center bg-[#080c19] overflow-hidden"
      >
        {/* Símbolo "+" Gigante em Laranja Elétrico */}
        <div 
          data-plus-symbol
          onClick={onOpenICP}
          className="cursor-pointer select-none text-orange-500 font-black text-8xl sm:text-[16rem] lg:text-[22rem] leading-none drop-shadow-[0_0_70px_rgba(255,88,35,0.7)] hover:scale-110 transition-transform duration-300 animate-float"
        >
          +
        </div>
      </section>


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

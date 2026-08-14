import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, ArrowRight, Target, TrendingUp, Sparkles } from 'lucide-react';
import { FaInstagram, FaGoogle, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { SiGoogleanalytics, SiMeta } from 'react-icons/si';

export default function NoRiskSection({ onOpenICP }) {
  const sectionRef = useRef(null);
  const orbitRef = useRef(null);

  // Marketing platforms & performance icons
  const iconConfigs = [
    { Icon: FaWhatsapp, color: "#25D366" },
    { Icon: SiMeta, color: "#0668E1" },
    { Icon: FaGoogle, color: "#EA4335" },
    { Icon: FaInstagram, color: "#E4405F" },
    { Icon: SiGoogleanalytics, color: "#E37400" },
    { Icon: FaFacebook, color: "#1877F2" },
    { Icon: TrendingUp, color: "#ff5823" },
    { Icon: Target, color: "#ff855b" },
    { Icon: Sparkles, color: "#f59e0b" },
  ];

  const orbitCount = 2;
  const orbitGap = 6;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Entrada e saída suaves durante a rolagem (suave em mobile e desktop)
      if (orbitRef.current) {
        gsap.fromTo(orbitRef.current,
          { x: 120, opacity: 0.1, scale: 0.8 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 88%',
              end: 'center 50%',
              scrub: 1
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-36 relative overflow-hidden bg-[#080c19]">
      
      {/* Container Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Esquerda: Copy, Badge e Botão (Mobile First) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Análise 100% Gratuita</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              O primeiro passo é <br className="hidden sm:inline" />
              <span className="text-gradient-brand">sem risco.</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Análise gratuita da sua presença digital, do seu mercado e de onde vêm seus clientes hoje. Você sai com clareza, mesmo que não feche com a gente.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                onClick={onOpenICP}
                className="btn-orange w-full sm:w-auto px-8 py-4.5 rounded-2xl font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-orange-500/25 group active:scale-[0.98] transition-transform"
              >
                <span>Quero meu diagnóstico</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Espaçador Desktop para a direita */}
          <div className="lg:col-span-6 hidden lg:block"></div>

        </div>
      </div>

      {/* DIREITA / MOBILE: A Rodinha com entrada suave e encaixe Mobile First */}
      <div className="relative mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-1/2 h-72 sm:h-96 lg:h-[34rem] flex items-center justify-center lg:justify-end overflow-hidden pointer-events-none">
        <div 
          ref={orbitRef}
          className="relative w-[22rem] h-[22rem] sm:w-[32rem] sm:h-[32rem] lg:w-[48rem] lg:h-[48rem] translate-x-0 lg:translate-x-[25%] xl:translate-x-[20%] flex items-center justify-center pointer-events-none"
        >
          
          {/* Centro com o Ícone '+' da Converte+ */}
          <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-[#0e1529] border-2 border-orange-500 shadow-2xl shadow-orange-500/50 flex items-center justify-center z-20 animate-pulse-glow pointer-events-auto cursor-pointer" onClick={onOpenICP}>
            <span className="font-black text-3xl sm:text-4xl text-orange-500">+</span>
          </div>

          {/* Órbitas Giratórias (Ajustadas para Celulares e Monitores) */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${8 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border border-dashed border-orange-500/20"
                style={{
                  width: size,
                  height: size,
                  animation: `spinOrbit ${14 + orbitIdx * 8}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);
                    const IconComp = cfg.Icon;

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-[#0e1529]/95 backdrop-blur-md border border-white/10 rounded-full p-2 sm:p-3 shadow-xl pointer-events-auto"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <IconComp className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}

        </div>
      </div>

      {/* Keyframes de Rotação */}
      <style>{`
        @keyframes spinOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

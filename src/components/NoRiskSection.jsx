import React from 'react';
import { ShieldCheck, ArrowRight, Target, TrendingUp, Sparkles } from 'lucide-react';
import { FaInstagram, FaGoogle, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { SiGoogleanalytics, SiMeta } from 'react-icons/si';

export default function NoRiskSection({ onOpenICP }) {
  // Orbiting marketing platforms and performance icons
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

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#080c19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean layout WITHOUT outer box or card borders */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Copy, Badge, and Action Button */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Análise 100% Gratuita</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              O primeiro passo é <br className="hidden sm:inline" />
              <span className="text-gradient-brand">sem risco.</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Análise gratuita da sua presença digital, do seu mercado e de onde vêm seus clientes hoje. Você sai com clareza, mesmo que não feche com a gente.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                onClick={onOpenICP}
                className="btn-orange px-8 py-4.5 rounded-2xl font-extrabold text-sm sm:text-base inline-flex items-center gap-3 cursor-pointer shadow-xl shadow-orange-500/25 group"
              >
                <span>Quero meu diagnóstico</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Floating Orbit Animation (No background card, no borders) */}
          <div className="w-full lg:w-1/2 h-72 sm:h-96 flex items-center justify-center lg:justify-end overflow-hidden relative">
            <div className="relative w-[30rem] h-[30rem] sm:w-[36rem] sm:h-[36rem] lg:translate-x-[15%] flex items-center justify-center pointer-events-none">
              
              {/* Center Circle with Converte+ Logo Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0e1529] border-2 border-orange-500 shadow-2xl shadow-orange-500/50 flex items-center justify-center z-20 animate-pulse-glow">
                <span className="font-black text-3xl sm:text-4xl text-orange-500">+</span>
              </div>

              {/* Generate Orbits */}
              {[...Array(orbitCount)].map((_, orbitIdx) => {
                const size = `${10 + orbitGap * (orbitIdx + 1)}rem`;
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
                            className="absolute bg-[#0e1529]/90 backdrop-blur-md border border-white/10 rounded-full p-2 sm:p-2.5 shadow-xl pointer-events-auto"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            <IconComp className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: cfg.color }} />
                          </div>
                        );
                      })}
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>

      {/* CSS Animation Keyframes */}
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

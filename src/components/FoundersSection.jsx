import React from 'react';
import { Users, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import gabrielPhoto from '../assets/converte+foto-hero.webp';
import isabelaPhoto from '../assets/converte+isabela.webp';

export default function FoundersSection({ onOpenICP }) {
  const founders = siteConfig.founders;
  const founderImages = [gabrielPhoto, isabelaPhoto];

  return (
    <section id="equipe" className="py-20 sm:py-28 relative bg-[#111216] overflow-hidden border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4 text-orange-500" />
            <span>Quem Conduz</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Estratégia executada por quem <br />
            <span className="text-[#ff5823]">entende o seu negócio.</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            Aqui sua estratégia não é terceirizada. Quem planeja e acompanha são os fundadores — os mesmos que te atendem no diagnóstico.
          </p>
        </div>

        {/* 2 Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {founders.map((founder, idx) => {
            const photoSrc = founderImages[idx] || gabrielPhoto;

            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#171920]/90 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group"
              >
                <div className="space-y-5">
                  
                  {/* Photo & Identity Row */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-orange-500/40 shrink-0 bg-[#111216] shadow-lg">
                      <img
                        src={photoSrc}
                        alt={founder.name}
                        className="w-full h-full object-cover [object-position:center_20%] group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-extrabold text-white tracking-tight">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-bold text-[#ff5823] font-mono">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* 1st Person Bio */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    "{founder.bio}"
                  </p>

                  {/* 2 Bullets de Especialidade */}
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-mono">
                      Especialidades:
                    </span>
                    {founder.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5823] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
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

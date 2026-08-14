import React from 'react';
import { Layers, Target, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function MethodSection({ onOpenICP }) {
  const icons = [Layers, Target, Award, TrendingUp];

  return (
    <section id="metodo" className="py-20 md:py-24 relative overflow-hidden bg-[#080c19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Método Converte+</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Os 4 pilares por trás de ter cliente chegando <span className="text-gradient-brand">de forma previsível.</span>
            </h2>
          </div>
          <p className="text-gray-300 text-sm max-w-md leading-relaxed">
            Previsibilidade não é sorte. É a combinação certa entre base bem feita, anúncio mirado, imagem de autoridade e crescimento seguro.
          </p>
        </div>

        {/* 4 Pillars Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.pillars.map((pillar, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                      {pillar.subtitle}
                    </div>
                    <span className="font-mono text-xs font-bold w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
                      {pillar.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-300">
                  {pillar.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenICP}
            className="btn-orange px-8 py-3.5 rounded-xl font-bold text-xs inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20"
          >
            <span>Fazer diagnóstico gratuito do seu negócio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

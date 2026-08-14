import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function RoadmapSection({ onOpenICP }) {
  return (
    <section id="caminho" className="py-20 md:py-24 relative overflow-hidden bg-[#080c19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Etapas de Execução</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Um caminho claro até a <span className="text-gradient-brand">sua previsibilidade.</span>
            </h2>
          </div>
          <p className="text-gray-300 text-sm max-w-md leading-relaxed">
            Sem processos confusos. Tudo é executado passo a passo com transparência e acompanhamento semanal.
          </p>
        </div>

        {/* Timeline Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.roadmap.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-orange-400 block mb-2">
                  Etapa {item.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenICP}
            className="btn-orange px-8 py-3.5 rounded-xl font-bold text-xs inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Iniciar etapa 01: Diagnóstico Gratuito</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

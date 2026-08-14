import React from 'react';
import { siteConfig } from '../config/siteConfig';

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Feito para marcas que querem <span className="text-gradient-brand">parar de viver de indicação.</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Estruturamos sua casa, criamos seus anúncios e acompanhamos suas métricas para transformar clientes esporádicos em um fluxo contínuo e previsível.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

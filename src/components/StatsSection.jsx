import React from 'react';
import { Award } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { value: "+R$ 10M", label: "Gerados em Vendas", sub: "Através de tráfego estruturado" },
    { value: "98.4%", label: "Taxa de Retenção", sub: "Clientes que renovam mensalmente" },
    { value: "+50k", label: "Leads Qualificados", sub: "Enviados direto para WhatsApp" },
    { value: "24/7", label: "Monitoramento Ativo", sub: "Otimização diária de campanhas" }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#111216] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Resultados e Performance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Feito para marcas que querem parar de <br />
            <span className="text-[#ff5823]">viver apenas de indicação.</span>
          </h2>
        </div>

        {/* Clean Modern 4 Stats Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-6 md:p-8 rounded-3xl bg-[#171920] border border-white/5 hover:border-orange-500/30 transition-all text-center space-y-2 shadow-lg group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white group-hover:text-[#ff5823] transition-colors tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-400 font-medium">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

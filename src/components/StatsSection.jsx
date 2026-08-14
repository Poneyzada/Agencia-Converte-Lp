import React from 'react';
import { TrendingUp, Users, Target, Activity } from 'lucide-react';

export default function StatsSection() {
  const statsData = [
    {
      icon: TrendingUp,
      number: "+R$ 10M",
      label: "Gerados em faturamento",
      detail: "Para clientes parceiros"
    },
    {
      icon: Users,
      number: "98.4%",
      label: "Retenção de clientes",
      detail: "Parcerias de longo prazo"
    },
    {
      icon: Target,
      number: "+50k",
      label: "Leads qualificados entregues",
      detail: "Direto no WhatsApp e site"
    },
    {
      icon: Activity,
      number: "24/7",
      label: "Monitoramento de campanhas",
      detail: "Otimização contínua"
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative bg-[#080c19] overflow-hidden border-t border-white/5">
      
      {/* Ambient Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <span>Resultados e Autoridade</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Feito para marcas que querem <br className="hidden sm:inline" />
            <span className="text-gradient-brand">parar de viver de indicação.</span>
          </h2>
        </div>

        {/* Clean Organic Metrics Layout (Sem caixas escuras feias) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-500/40 transition-all duration-300 relative group"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/10">
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Giant Orange Gradient Number */}
                <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent block tracking-tight">
                  {item.number}
                </span>

                {/* Label */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">
                    {item.label}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    {item.detail}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

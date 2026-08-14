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
    <section className="py-20 sm:py-28 relative bg-[#080c19] overflow-hidden border-t border-white/5">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

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

        {/* Vibrant High-Contrast Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-orange-500/30 bg-[#0e1529] shadow-xl hover:border-orange-500/60 hover:shadow-orange-500/20 transition-all duration-300 space-y-4 group relative overflow-hidden"
              >
                {/* Glow Halo corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-colors pointer-events-none" />

                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform shadow-md">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                </div>

                <div className="space-y-1">
                  {/* Giant Vibrant Orange Gradient Number */}
                  <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent block tracking-tight">
                    {item.number}
                  </span>
                  
                  {/* Label */}
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {item.label}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 pt-2 border-t border-white/10 font-medium">
                  {item.detail}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

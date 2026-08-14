import React from 'react';
import { ShieldCheck, UserCheck, Sparkles, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function DifferencesSection({ onOpenICP }) {
  const iconsMap = {
    ShieldCheck: ShieldCheck,
    UserCheck: UserCheck,
    Sparkles: Sparkles,
    TrendingUp: TrendingUp
  };

  return (
    <section id="diferenciais" className="py-20 md:py-24 relative overflow-hidden bg-[#0a0e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <span>Transparência & Foco</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Por que a Converte+ é <span className="text-gradient-brand">diferente de outras agências?</span>
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              A gente não atende todo mundo. Atendemos poucos clientes por vez, com foco e proximidade — porque previsibilidade exige cuidado, não volume em escala industrial.
            </p>

            {/* Comparison Badge Box */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-orange-400">
                <Check className="w-5 h-5" />
                <span>O que você leva com a gente:</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-300 pl-7 list-disc">
                <li>Propriedade 100% sua de todas as contas e ativos</li>
                <li>Relatórios claros do que traz clientes de verdade</li>
                <li>Atendimento direto com quem desenha a estratégia</li>
              </ul>
            </div>

            <div>
              <button
                onClick={onOpenICP}
                className="btn-orange px-6 py-3.5 rounded-xl font-bold text-xs shadow-lg shadow-orange-500/20 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Fazer Diagnóstico Sem Compromisso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Differentiators Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteConfig.differentiators.map((diff, idx) => {
              const IconComp = iconsMap[diff.icon] || ShieldCheck;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

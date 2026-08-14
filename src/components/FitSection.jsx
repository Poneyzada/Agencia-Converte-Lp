import React, { useState } from 'react';
import { CheckCircle2, XCircle, Target, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FitSection({ onOpenICP }) {
  const [activeTab, setActiveTab] = useState('fit');
  const { forYou, notForYou } = siteConfig.fitComparison;

  return (
    <section id="para-voce" className="py-14 sm:py-16 relative bg-[#080c19] overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-orange-500" />
            <span>Perfil de Cliente Ideal</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Para quem é e para quem <span className="text-gradient-brand">NÃO É a Converte+?</span>
          </h2>
        </div>

        {/* Mobile Tab Toggle */}
        <div className="flex justify-center md:hidden">
          <div className="inline-flex p-1 rounded-full bg-[#0e1529] border border-white/10 w-full max-w-xs">
            <button
              onClick={() => setActiveTab('fit')}
              className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'fit' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-400'
              }`}
            >
              É Para Você
            </button>
            <button
              onClick={() => setActiveTab('notFit')}
              className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'notFit' ? 'bg-red-500/80 text-white shadow-md' : 'text-gray-400'
              }`}
            >
              NÃO É Para Você
            </button>
          </div>
        </div>

        {/* Side-by-Side Clean Comparison Grid (Sem caixas de quadradinhos por dentro) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* FIT CARD (É PARA VOCÊ) */}
          <div className={`p-6 sm:p-7 rounded-[28px] border border-emerald-500/30 bg-[#0e1529]/80 shadow-2xl space-y-5 relative overflow-hidden transition-all ${
            activeTab === 'fit' ? 'block' : 'hidden md:block'
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                  ✓
                </span>
                <h3 className="text-lg font-bold text-white">É para você se:</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
                Perfil Ideal
              </span>
            </div>

            {/* List Items sem quadradinhos fechados */}
            <div className="space-y-3">
              {forYou.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 py-1.5 text-xs sm:text-sm text-gray-200 border-b border-white/5 last:border-0">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenICP}
                className="btn-orange w-full py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer group"
              >
                <span>Fazer diagnóstico se você se encaixa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* NOT FIT CARD (NÃO É PARA VOCÊ) */}
          <div className={`p-6 sm:p-7 rounded-[28px] border border-red-500/20 bg-[#0c101c]/80 shadow-2xl space-y-5 relative overflow-hidden transition-all ${
            activeTab === 'notFit' ? 'block' : 'hidden md:block'
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-sm">
                  ✕
                </span>
                <h3 className="text-lg font-bold text-white">NÃO é para você se:</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold uppercase tracking-wider">
                Sem Alinhamento
              </span>
            </div>

            {/* List Items sem quadradinhos fechados */}
            <div className="space-y-3">
              {notForYou.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 py-1.5 text-xs sm:text-sm text-gray-300 border-b border-white/5 last:border-0">
                  <XCircle className="w-4.5 h-4.5 text-red-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <p className="text-xs text-gray-400 leading-relaxed font-medium">
                Priorizamos qualidade e acompanhamento próximo com limite rígido de clientes por mês.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

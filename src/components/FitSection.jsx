import React, { useState } from 'react';
import { CheckCircle2, XCircle, Target, ArrowRight, ShieldAlert } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FitSection({ onOpenICP }) {
  const [activeTab, setActiveTab] = useState('fit');
  const { forYou, notForYou, notice } = siteConfig.fitComparison;

  return (
    <section id="para-voce" className="py-24 sm:py-32 relative bg-[#111216] overflow-hidden border-t border-white/5">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-orange-500" />
            <span>Perfil de Cliente</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Para quem é e para quem <br />
            <span className="text-[#ff5823]">NÃO É a Converte+?</span>
          </h2>
        </div>

        {/* Mobile Tab Toggle */}
        <div className="flex justify-center md:hidden">
          <div className="inline-flex p-1 rounded-full bg-[#171920] border border-white/10 w-full max-w-xs">
            <button
              onClick={() => setActiveTab('fit')}
              className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'fit' ? 'bg-[#ff5823] text-white shadow-md' : 'text-gray-400'
              }`}
            >
              É Para Você
            </button>
            <button
              onClick={() => setActiveTab('notFit')}
              className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'notFit' ? 'bg-red-500/80 text-white shadow-md' : 'text-gray-400'
              }`}
            >
              NÃO É Para Você
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* FIT CARD (É PARA VOCÊ) */}
          <div className={`p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-[#171920]/90 shadow-xl space-y-6 relative overflow-hidden transition-all order-1 ${
            activeTab === 'fit' ? 'block' : 'hidden md:block'
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                  ✓
                </span>
                <h3 className="text-lg font-bold text-white">É para você se:</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
                Perfil Ideal
              </span>
            </div>

            <div className="space-y-3.5">
              {forYou.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 py-1 text-xs sm:text-sm text-gray-200 border-b border-white/5 last:border-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenICP}
                className="btn-orange w-full py-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer group"
              >
                <span>Fazer diagnóstico grátis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* NOT FIT CARD (NÃO É PARA VOCÊ) */}
          <div className={`p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-[#14151b]/90 shadow-xl space-y-6 relative overflow-hidden transition-all order-2 ${
            activeTab === 'notFit' ? 'block' : 'hidden md:block'
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-sm">
                  ✕
                </span>
                <h3 className="text-lg font-bold text-white">NÃO é para você se:</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold uppercase tracking-wider">
                Sem Alinhamento
              </span>
            </div>

            <div className="space-y-3.5">
              {notForYou.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 py-1 text-xs sm:text-sm text-gray-300 border-b border-white/5 last:border-0">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs text-gray-300 leading-relaxed font-medium">
                Nosso compromisso é com entrega e resultado. Se o seu momento não for esse, preferimos ser sinceros desde o início.
              </p>
            </div>
          </div>

        </div>

        {/* Linha Final de Destaque */}
        <div className="p-5 rounded-2xl bg-[#171920] border border-[#ff5823]/30 text-center max-w-2xl mx-auto shadow-lg">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#ff5823]">
            <ShieldAlert className="w-4 h-4 text-[#ff5823]" />
            <span>{notice}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { CheckCircle2, XCircle, Target, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FitSection({ onOpenICP }) {
  const [activeTab, setActiveTab] = useState('fit');
  const { forYou, notForYou } = siteConfig.fitComparison;

  return (
    <section id="para-voce" className="py-24 sm:py-32 relative bg-[#080c19] overflow-hidden border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
            <Target className="w-4 h-4 text-orange-500" />
            <span>Perfil de Cliente Ideal</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Para quem é e para quem <br className="hidden sm:inline" />
            <span className="text-gradient-brand">NÃO É a Converte+?</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Não atendemos todo mundo. Selecionamos projetos onde conseguimos gerar ROI real e previsibilidade acelerada.
          </p>
        </div>

        {/* Mobile Segmented Tab Control */}
        <div className="flex justify-center md:hidden">
          <div className="inline-flex p-1.5 rounded-[60px] bg-[#0e1529] border border-white/10 w-full max-w-xs">
            <button
              onClick={() => setActiveTab('fit')}
              className={`flex-1 py-2.5 rounded-[30px] text-xs font-bold transition-all ${
                activeTab === 'fit' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-400'
              }`}
            >
              É Para Você
            </button>
            <button
              onClick={() => setActiveTab('notFit')}
              className={`flex-1 py-2.5 rounded-[30px] text-xs font-bold transition-all ${
                activeTab === 'notFit' ? 'bg-red-500/80 text-white shadow-lg' : 'text-gray-400'
              }`}
            >
              NÃO É Para Você
            </button>
          </div>
        </div>

        {/* Side by Side Comparison Panels (Control Room Pill Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* FIT CARD (É PARA VOCÊ) */}
          <div className={`glass-panel p-8 sm:p-10 rounded-[30px] border border-emerald-500/30 bg-[#0e1529]/90 shadow-2xl space-y-6 relative overflow-hidden transition-all duration-300 ${
            activeTab === 'fit' ? 'block' : 'hidden md:block'
          }`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">É para você se:</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
                Perfil Ideal
              </span>
            </div>

            <div className="space-y-4">
              {forYou.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenICP}
                className="btn-orange w-full py-4 rounded-[30px] font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-orange-500/25 cursor-pointer"
              >
                <span>Fazer diagnóstico se você se encaixa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* NOT FIT CARD (NÃO É PARA VOCÊ) */}
          <div className={`glass-panel p-8 sm:p-10 rounded-[30px] border border-red-500/20 bg-[#0c101c]/90 shadow-2xl space-y-6 relative overflow-hidden transition-all duration-300 ${
            activeTab === 'notFit' ? 'block' : 'hidden md:block'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                  ✕
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">NÃO é para você se:</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold uppercase tracking-wider">
                Sem Alinhamento
              </span>
            </div>

            <div className="space-y-4">
              {notForYou.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400 font-normal leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
              <p className="text-xs text-gray-400 leading-relaxed">
                Priorizamos qualidade e acompanhamento próximo em vez de quantidade. Por isso temos um limite rígido de clientes atendidos por mês.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

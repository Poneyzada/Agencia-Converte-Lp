import React, { useState } from 'react';
import { Terminal, CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function RoadmapSection({ onOpenICP }) {
  const [selectedStep, setSelectedStep] = useState(0);
  const roadmapSteps = siteConfig.roadmap;

  return (
    <section id="caminho" className="py-24 sm:py-32 relative bg-[#080c19] overflow-hidden border-t border-white/5">
      
      {/* Glow Wash */}
      <div className="absolute top-1/3 right-0 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span>Execução Passo a Passo</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Um caminho claro até a sua <br className="hidden sm:inline" />
            <span className="text-gradient-brand">previsibilidade de vendas.</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Sem processos obscuros. Você acompanha cada etapa do projeto com clareza, transparência e relatórios diretos ao ponto.
          </p>
        </div>

        {/* Developer Pipeline Console Panel (Control Room Code/Pipeline Block) */}
        <div className="glass-panel rounded-[30px] border border-white/15 bg-[#0d1326] shadow-2xl overflow-hidden">
          
          {/* Console Header Bar */}
          <div className="px-6 py-4 bg-[#080c19] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-gray-400 ml-2">converte_pipeline.config</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>STATUS: LIVE & PREDICTABLE</span>
            </div>
          </div>

          {/* Interactive Step Selector Pills */}
          <div className="p-4 sm:p-6 bg-[#0a0f20] border-b border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {roadmapSteps.map((step, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedStep(idx)}
                  className={`px-5 py-3 rounded-[30px] text-xs font-bold whitespace-nowrap transition-all flex items-center gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-black/30 flex items-center justify-center text-[10px] font-mono">
                    {step.step}
                  </span>
                  <span>{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Console Output Body */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                  ETAPA {roadmapSteps[selectedStep].step}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  Consolidação Contínua
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {roadmapSteps[selectedStep].title}
              </h3>

              <p className="text-gray-300 text-base leading-relaxed font-normal">
                {roadmapSteps[selectedStep].description}
              </p>

              {/* Code Snippet Box */}
              <div className="p-4 rounded-2xl bg-[#060913] border border-white/10 font-mono text-xs text-emerald-400 space-y-1 overflow-x-auto">
                <p><span className="text-purple-400">const</span> pipelineStatus = <span className="text-amber-300">"READY"</span>;</p>
                <p><span className="text-purple-400">await</span> convertePlus.<span className="text-blue-400">executeStage</span>(<span className="text-orange-400">"{roadmapSteps[selectedStep].title}"</span>);</p>
                <p className="text-gray-400">// Result: Previsibilidade de Leads Ativada com Sucesso</p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">Ações desta etapa</h4>
                <div className="space-y-2 text-xs text-gray-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>Estruturação técnica e estratégia dedicada</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>Acompanhamento direto e relatórios frequentes</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenICP}
                className="btn-orange w-full py-4 rounded-[30px] font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-orange-500/25 cursor-pointer"
              >
                <span>Iniciar com a Etapa 01</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

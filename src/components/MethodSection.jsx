import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Target, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  BarChart3
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function MethodSection({ onOpenICP }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  const pillars = siteConfig.pillars;
  const stepIcons = [Compass, Target, Award, TrendingUp];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2.2;

      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const top = ref.offsetTop;
          const height = ref.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (index) => {
    setActiveStep(index);
    if (stepRefs.current[index]) {
      stepRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="metodo" className="py-24 sm:py-32 relative bg-[#080c19] overflow-hidden border-t border-white/5">
      
      {/* Ambient Glow Halos (LaunchDarkly inspired atmospheric glows) */}
      <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>O Método Converte+</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Como transformamos tráfego em <br className="hidden sm:inline" />
            <span className="text-gradient-brand">clientes reais todos os meses.</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            Uma estrutura dividida em 4 etapas estratégicas para sair da dependência de indicações e criar um canal previsível de vendas.
          </p>
        </div>

        {/* Segmented Tab Control (Floating Nav Pill inspired by LaunchDarkly) */}
        <div className="sticky top-20 z-30 flex justify-center py-4 backdrop-blur-xl bg-[#080c19]/80 border-y border-white/10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-2 p-2 rounded-[60px] bg-[#0e1529] border border-white/10 shadow-2xl max-w-full overflow-x-auto no-scrollbar">
            {pillars.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => scrollToStep(idx)}
                  className={`px-5 py-2.5 rounded-[30px] text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white animate-ping' : 'bg-gray-500'}`} />
                  <span>{step.step}</span>
                  <span className="hidden sm:inline">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Sticky Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
          
          {/* Left Column: Sticky Summary Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-6">
            
            <div className="glass-panel p-8 sm:p-10 rounded-[30px] border border-orange-500/25 bg-[#0e1529]/95 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <span className="text-5xl font-black text-orange-500">
                  {pillars[activeStep].step}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
                  Passo {activeStep + 1} de 4
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {pillars[activeStep].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {pillars[activeStep].description}
                </p>
              </div>

              {/* Metric Callout */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-bold tracking-wider">Foco da Etapa</span>
                  <span className="text-sm text-white font-semibold">{pillars[activeStep].subtitle}</span>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenICP}
                  className="btn-orange w-full py-4 rounded-[30px] font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-orange-500/25 cursor-pointer group"
                >
                  <span>Fazer diagnóstico para este passo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: 4 Stacking Feature Cards */}
          <div className="lg:col-span-7 space-y-10">
            {pillars.map((step, idx) => {
              const IconComp = stepIcons[idx] || Sparkles;
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  ref={(el) => (stepRefs.current[idx] = el)}
                  className={`glass-panel p-8 sm:p-10 rounded-[30px] border transition-all duration-500 space-y-6 relative overflow-hidden ${
                    isActive
                      ? 'border-orange-500/50 bg-[#0e1529] shadow-[0_0_50px_rgba(255,88,35,0.2)] scale-[1.01]'
                      : 'border-white/10 bg-[#0b101f] opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-white/5 text-gray-400 border border-white/10'
                      }`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-orange-400 uppercase tracking-wider block">
                          Passo {step.step}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Feature Checklist (Checkmark Items) */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Entregáveis e Ações</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-200 font-medium leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-feature Card (Linked feature callout inspired by LaunchDarkly) */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-[#0e1529] to-amber-500/5 border border-orange-500/20 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Objetivo da Etapa</span>
                        <span className="text-xs sm:text-sm text-gray-300">{step.subtitle}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-orange-400" />
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

import React, { useState } from 'react';
import { 
  Compass, 
  Target, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function MethodSection({ onOpenICP }) {
  const [activeStep, setActiveStep] = useState(0);
  const pillars = siteConfig.pillars;
  const stepIcons = [Compass, Target, Award, TrendingUp];
  const IconComp = stepIcons[activeStep] || Sparkles;

  return (
    <section id="metodo" className="py-16 sm:py-20 bg-[#080c19] overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Compact Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>O Método Converte+</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Como transformamos tráfego em <span className="text-gradient-brand">clientes reais.</span>
          </h2>
        </div>

        {/* Compact Tab Selector Bar (Passo 1 a 4) */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-full bg-[#0e1529] border border-white/10 shadow-lg max-w-full overflow-x-auto no-scrollbar">
            {pillars.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="opacity-80">{step.step}</span>
                  <span>{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Single Compact Display Card for Selected Step */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-orange-500/30 bg-[#0e1529]/90 shadow-xl space-y-6 relative overflow-hidden transition-all duration-300">
          
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                <IconComp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold text-orange-400 uppercase tracking-wider block">
                  Passo {pillars[activeStep].step}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {pillars[activeStep].title}
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium hidden sm:inline-block">
              {pillars[activeStep].subtitle}
            </span>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {pillars[activeStep].description}
          </p>

          {/* Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {pillars[activeStep].features.map((feature, featureIdx) => (
              <div key={featureIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <span className="text-xs text-gray-400">
              Foco da Etapa: <strong className="text-white">{pillars[activeStep].subtitle}</strong>
            </span>

            <button
              onClick={onOpenICP}
              className="btn-orange px-6 py-2.5 rounded-xl font-bold text-xs inline-flex items-center gap-2 cursor-pointer shadow-md shadow-orange-500/20"
            >
              <span>Quero diagnóstico para esta etapa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

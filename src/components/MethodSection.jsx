import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
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
  const [activeIdx, setActiveIdx] = useState(0);
  const pillars = siteConfig.pillars; // 4 pillars total (01 to 04)
  const stepIcons = [Compass, Target, Award, TrendingUp];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : pillars.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < pillars.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="metodo" className="py-14 sm:py-20 relative bg-[#080c19] overflow-hidden border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>O Método Converte+</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Como transformamos tráfego em <br className="hidden sm:inline" />
            <span className="text-gradient-brand">clientes reais todos os meses.</span>
          </h2>
        </div>

        {/* 3D Coverflow Card Stack Container (Compact Height: 21rem on Mobile) */}
        <div className="relative w-full h-[21rem] sm:h-[23rem] flex items-center justify-center">
          
          {pillars.map((pillar, idx) => {
            const IconComp = stepIcons[idx] || Sparkles;
            const diff = idx - activeIdx;
            
            // Calculate 3D card position, scale, opacity and z-index
            let styleClasses = "opacity-0 pointer-events-none scale-75 translate-x-0 z-0";
            
            if (diff === 0) {
              // Active Center Card
              styleClasses = "opacity-100 scale-100 translate-x-0 z-30 shadow-[0_0_50px_rgba(255,88,35,0.25)] border-orange-500/60 bg-[#0e1529]";
            } else if (diff === -1 || (activeIdx === 0 && idx === pillars.length - 1)) {
              // Card directly to Left
              styleClasses = "opacity-35 scale-85 -translate-x-[50%] sm:-translate-x-[60%] z-20 border-white/10 bg-[#0a0f1f] filter blur-[1px] hover:opacity-60 cursor-pointer";
            } else if (diff === 1 || (activeIdx === pillars.length - 1 && idx === 0)) {
              // Card directly to Right
              styleClasses = "opacity-35 scale-85 translate-x-[50%] sm:translate-x-[60%] z-20 border-white/10 bg-[#0a0f1f] filter blur-[1px] hover:opacity-60 cursor-pointer";
            } else if (diff < -1) {
              // Far Left Card
              styleClasses = "opacity-10 scale-75 -translate-x-[100%] z-10 border-white/5 bg-[#060914] filter blur-[2px]";
            } else if (diff > 1) {
              // Far Right Card
              styleClasses = "opacity-10 scale-75 translate-x-[100%] z-10 border-white/5 bg-[#060914] filter blur-[2px]";
            }

            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`absolute w-[90%] max-w-sm sm:max-w-md p-5 sm:p-6 rounded-2xl border glass-panel transition-all duration-500 ease-out select-none flex flex-col justify-between h-[19rem] sm:h-[21rem] ${styleClasses}`}
              >
                {/* Card Top Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 font-bold">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Main Title & Description */}
                <div className="space-y-1.5 my-auto">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {pillar.description}
                  </p>
                </div>

                {/* Card Features List */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  {pillar.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Button */}
                {diff === 0 && (
                  <div className="pt-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenICP();
                      }}
                      className="btn-orange w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 cursor-pointer"
                    >
                      <span>Diagnóstico para o Passo {pillar.step}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Compact Step Counter & Control Bar (Directly underneath the card) */}
        <div className="flex flex-col items-center space-y-2 pt-1">
          
          {/* Step Counter: "03 DE 04" */}
          <div className="text-center">
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
              {pillars[activeIdx].step}
            </span>
            <span className="text-[10px] text-gray-400 font-mono block uppercase tracking-widest mt-0.5">
              de 04
            </span>
          </div>

          {/* Navigation Controls: [<] [••••] [>] */}
          <div className="flex items-center gap-3 bg-[#0e1529] px-4 py-2 rounded-full border border-white/10 shadow-lg">
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-orange-500 transition-all cursor-pointer"
              aria-label="Passo Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {pillars.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIdx(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIdx === dotIdx
                      ? 'w-6 bg-orange-500 shadow-md shadow-orange-500/50'
                      : 'w-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-orange-500 transition-all cursor-pointer"
              aria-label="Próximo Passo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

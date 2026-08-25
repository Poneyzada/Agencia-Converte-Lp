import React, { useState } from 'react';
import { Award, Quote, Eye, X, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import depoimento1 from '../assets/depoimento-converte+.webp';
import depoimento2 from '../assets/depoimento2-converte+.webp';

const imageMap = {
  'depoimento-converte+.webp': depoimento1,
  'depoimento2-converte+.webp': depoimento2
};

export default function CasesSection({ onOpenICP }) {
  const cases = siteConfig.cases || [];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="cases" className="py-20 sm:py-28 relative bg-[#111216] overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-orange-500" />
            <span>Resultados de Negócio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Casos reais construídos com <br />
            <span className="text-[#ff5823]">base sólida e tráfego qualificado.</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Veja os prints e depoimentos reais dos nossos clientes.
          </p>
        </div>

        {/* Flexible Cases Grid */}
        <div className={`grid gap-8 ${cases.length === 1 ? 'max-w-2xl mx-auto grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          {cases.map((cs, idx) => {
            const imgSrc = imageMap[cs.image] || (idx === 0 ? depoimento1 : depoimento2);

            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#171920]/90 hover:border-orange-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between shadow-xl relative overflow-hidden group"
              >
                {/* Corner Glow Accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-colors pointer-events-none" />

                <div className="space-y-5">
                  
                  {/* Header: Segment, Location & Period */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5823]" />
                      <span>{cs.client}</span>
                      <span className="text-gray-400 font-normal">({cs.location})</span>
                    </div>
                    <span className="text-gray-400 text-[11px] font-mono">{cs.period}</span>
                  </div>

                  {/* Situation Before */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-mono">
                      Cenário Anterior
                    </span>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {cs.before}
                    </p>
                  </div>

                  {/* Result with Business Metric */}
                  <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-1">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block font-mono">
                      Resultado Obtido
                    </span>
                    <p className="text-xs sm:text-sm text-white font-bold leading-relaxed">
                      {cs.result}
                    </p>
                  </div>

                  {/* Print Depoimento Real Preview */}
                  {imgSrc && (
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Print do Depoimento Real</span>
                        </span>
                        <span className="text-[10px] text-gray-400">Clique para ampliar</span>
                      </div>

                      <div 
                        onClick={() => setSelectedImage(imgSrc)}
                        className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 group/img cursor-pointer max-h-56 flex items-center justify-center"
                      >
                        <img 
                          src={imgSrc} 
                          alt={`Print depoimento real - ${cs.client}`}
                          className="w-full h-auto object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="px-3 py-1.5 rounded-full bg-black/70 border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg group-hover/img:scale-110 transition-transform">
                            <Eye className="w-3.5 h-3.5 text-[#ff5823]" />
                            <span>Ver print original</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Testimonial Quote */}
                  <div className="pt-2 text-xs italic text-gray-300 flex items-start gap-2">
                    <Quote className="w-4 h-4 text-[#ff5823] shrink-0 mt-0.5" />
                    <div>
                      <span>"{cs.quote}"</span>
                      <strong className="block text-white not-italic font-semibold mt-1">— {cs.author}</strong>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Zoom Viewer for Real Testimonial Screenshots */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-2xl border border-white/20 bg-[#171920] p-2 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 hover:bg-black text-white transition-colors border border-white/20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={selectedImage} 
              alt="Print do Depoimento Real Ampliado" 
              className="w-full h-auto rounded-xl object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}

    </section>
  );
}

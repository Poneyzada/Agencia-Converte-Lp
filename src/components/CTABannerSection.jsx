import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTABannerSection({ onOpenICP }) {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-[#111216] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-[32px] p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#1c202a] via-[#171920] to-[#111216] border border-orange-500/30 overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Previsibilidade de Vendas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Chega de terminar o mês sem saber <br className="hidden sm:inline" />
              <span className="text-[#ff5823]">de onde virão os próximos clientes.</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Nós cuidamos da infraestrutura, do posicionamento e dos anúncios para você focar exclusivamente em atender seus clientes e fechar negócios.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenICP}
                className="btn-orange px-8 py-4 rounded-2xl font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 shadow-xl shadow-orange-500/30 cursor-pointer group"
              >
                <span>Fazer diagnóstico grátis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

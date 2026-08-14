import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

export default function CTABannerSection({ onOpenICP }) {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-[#080c19]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-orange-500/30 bg-gradient-to-r from-orange-950/30 via-[#0e1529] to-amber-950/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
          
          {/* Logo Badge Icon */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 p-[1px] mx-auto shadow-lg shadow-orange-500/20">
            <div className="w-full h-full bg-[#0e1529] rounded-[15px] flex items-center justify-center">
              <Plus className="w-7 h-7 text-orange-500 stroke-[3]" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Chega de terminar o mês <br className="hidden sm:inline" />
            <span className="text-gradient-brand">sem saber como ele vai fechar.</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Estruturamos sua presença digital e executamos tráfego pago para gerar contatos qualificados todos os dias no seu WhatsApp e site.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenICP}
              className="btn-orange px-8 py-4 rounded-xl font-bold text-sm inline-flex items-center gap-3 cursor-pointer shadow-xl shadow-orange-500/25 group"
            >
              <span>Fazer diagnóstico gratuito</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

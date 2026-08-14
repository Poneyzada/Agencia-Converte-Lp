import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function NoRiskSection({ onOpenICP }) {
  return (
    <section className="py-16 relative overflow-hidden bg-[#0a0e1e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 mx-auto flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            O primeiro passo é <span className="text-gradient-brand">sem risco.</span>
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Análise gratuita da sua presença digital, do seu mercado e de onde vêm seus clientes hoje. Você sai com clareza, mesmo que não feche com a gente.
          </p>

          <div>
            <button
              onClick={onOpenICP}
              className="btn-orange px-8 py-3.5 rounded-xl font-bold text-xs inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20"
            >
              <span>Quero meu diagnóstico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { CheckCircle2, XCircle, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FitSection({ onOpenICP }) {
  return (
    <section id="para-voce" className="py-20 relative overflow-hidden bg-[#0a0e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Alinhamento de Perfil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Isto é <span className="text-gradient-brand">pra você?</span>
          </h2>
        </div>

        {/* 2 Cards Grid: Para Você vs Não é Para Você */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Para Você Que */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-orange-500/30 bg-orange-950/20">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-lg mb-6">
              <CheckCircle2 className="w-6 h-6" />
              <span>Para você que:</span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-200">
              {siteConfig.fitComparison.forYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Não é Para Você */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-red-500/20 bg-red-950/10">
            <div className="flex items-center gap-2 text-red-400 font-bold text-lg mb-6">
              <XCircle className="w-6 h-6" />
              <span>Não é para você:</span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-300">
              {siteConfig.fitComparison.notForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

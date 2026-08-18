import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FAQSection({ onOpenICP }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden bg-[#111216] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas <span className="text-[#ff5823]">Frequentes</span>
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto">
            Respostas diretas e transparentes sobre metodologia, prazos, investimentos e formato de trabalho.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div 
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen 
                    ? 'bg-[#171920] border-orange-500/40 shadow-xl shadow-orange-500/5' 
                    : 'bg-[#14151b] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-orange-500/20 text-orange-400' : 'bg-white/5 text-gray-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-orange-950/30 via-[#171920] to-[#111216] border border-orange-500/30 text-center space-y-4 shadow-xl">
          <h3 className="text-lg font-bold text-white">
            Ficou com alguma dúvida específica sobre a sua empresa?
          </h3>
          <p className="text-xs text-gray-300 max-w-lg mx-auto">
            Faça seu diagnóstico gratuito e converse diretamente com nossos fundadores no WhatsApp.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenICP}
              className="btn-orange px-6 py-3.5 rounded-xl font-bold text-xs inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20 group"
            >
              <span>Fazer diagnóstico grátis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

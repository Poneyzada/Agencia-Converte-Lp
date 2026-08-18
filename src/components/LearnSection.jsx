import React, { useState } from 'react';
import { BookOpen, FileText, Mail, ArrowRight, Check } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function LearnSection() {
  const resources = siteConfig.learnResources || [];
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const existing = JSON.parse(localStorage.getItem('converte_leads_db') || '[]');
      const newLead = {
        id: 'CONTEUDO-' + Date.now().toString().slice(-6),
        date: new Date().toLocaleString('pt-BR'),
        origem_tag: 'conteudo',
        nome: 'Lead Conteúdo',
        email: email,
        telefone: '-',
        segment: 'Auto-aprendizado',
        revenue: '-',
        budget: '-',
        source: 'Newsletter / Checklist',
        serviceGoal: 'Aprender e executar por conta'
      };
      localStorage.setItem('converte_leads_db', JSON.stringify([newLead, ...existing]));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 sm:py-24 relative bg-[#0d0e12] overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-gray-400" />
            <span>Sem contratar nada</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Quer fazer você mesmo? <br />
            <span className="text-gray-300">A gente também ajuda.</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
            Nem todo negócio precisa de agência agora. Se o seu momento é aprender e executar por conta, a gente abre o mesmo material que usa com cliente — sem pegadinha e sem precisar falar com vendedor.
          </p>
        </div>

        {/* 3 Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#171920] border border-white/5 space-y-2.5 hover:border-white/15 transition-all"
            >
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-gray-200">
                {idx === 0 && <FileText className="w-4 h-4" />}
                {idx === 1 && <Mail className="w-4 h-4" />}
                {idx === 2 && (
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                )}
              </div>
              <h3 className="text-sm font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Single Email Field Form */}
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#171920] border border-white/10 text-center space-y-4">
          <h4 className="text-sm font-bold text-white">
            Receba nossos materiais e análises no seu e-mail
          </h4>

          {submitted ? (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              <span>Inscrição realizada! Verifique sua caixa de entrada.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white/40 placeholder:text-gray-500 min-h-[44px]"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
              >
                Quero receber
              </button>
            </form>
          )}

          <p className="text-[10px] text-gray-500">
            Zero spam. Cancele o recebimento quando quiser com 1 clique.
          </p>
        </div>

      </div>
    </section>
  );
}

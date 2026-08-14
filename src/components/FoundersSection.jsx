import React from 'react';
import { UserCheck, CheckCircle } from 'lucide-react';
import heroPhoto from '../assets/converte+foto-hero.webp';

// Dynamic image URL for Isabela's photo
const isabelaPhotoUrl = new URL('../assets/converte+isabela.webp', import.meta.url).href;
const fallbackIsabelaPhoto = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80";

export default function FoundersSection() {
  return (
    <section id="equipe" className="py-20 md:py-24 relative overflow-hidden bg-[#080c19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <UserCheck className="w-4 h-4" />
            <span>Quem Conduz Sua Estratégia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Especialistas no seu negócio, <span className="text-gradient-brand">sem intermediários.</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Aqui sua estratégia não é terceirizada. É desenhada e acompanhada diretamente pelos fundadores da Converte+.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Founder 1 */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-orange-500/40 shadow-lg shadow-orange-500/20">
                  <img 
                    src={heroPhoto} 
                    alt="Co-fundador Converte+"
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Co-fundador Converte+</h3>
                  <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                    Gestão de Tráfego Pago
                  </div>
                  <span className="inline-block mt-1 text-[11px] text-gray-400 font-mono">
                    Meta Ads & Google Ads
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Planejamento e gestão de campanhas em Meta Ads e Google Ads; estratégias personalizadas para atrair clientes qualificados; otimização contínua baseada em métricas e testes; atendimento próximo e orientado a resultados.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Gestão estratégica de tráfego pago</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Análise contínua e acompanhamento de ROI</span>
              </div>
            </div>
          </div>

          {/* Founder 2 - Isabela */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-lg shadow-amber-500/20">
                  <img 
                    src={isabelaPhotoUrl} 
                    onError={(e) => { e.target.onerror = null; e.target.src = fallbackIsabelaPhoto; }}
                    alt="Isabela - Co-fundadora Converte+"
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Isabela</h3>
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Co-fundadora Converte+
                  </div>
                  <span className="inline-block mt-1 text-[11px] text-gray-400 font-mono">
                    Copywriting & Branding
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Especialista em copywriting e comunicação estratégica; consultoria de imagem e posicionamento de marca; gestão de tráfego pago focada em conversão; acompanhamento de dados e otimização contínua de campanhas.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Roteiros de anúncios de alta conversão</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Alinhamento de imagem e autoridade da marca</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

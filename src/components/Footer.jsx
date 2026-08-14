import React from 'react';
import { ArrowUp, Shield, Lock, Plus } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-white/10 pt-16 pb-12 text-gray-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col - Clean Logo Icon '+' SVG + Text 'Converte+' */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 p-[1px]">
                <div className="w-full h-full bg-[#0e1529] rounded-[10px] flex items-center justify-center">
                  <Plus className="w-5 h-5 text-orange-500 stroke-[3]" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white">
                Converte<span className="text-orange-500">+</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Agência de Tráfego Pago e Branding com foco em performance previsível. Estruturação da base digital, Meta Ads, Google Ads e posicionamento de marca.
            </p>

            <div className="flex items-center gap-2 text-xs text-orange-400">
              <Shield className="w-4 h-4" />
              <span>Transparência total. Suas contas são 100% suas.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#metodo" className="hover:text-orange-400 transition-colors">Método Converte+</a></li>
              <li><a href="#para-voce" className="hover:text-orange-400 transition-colors">Para Quem É</a></li>
              <li><a href="#planos" className="hover:text-orange-400 transition-colors">Planos</a></li>
              <li><a href="#equipe" className="hover:text-orange-400 transition-colors">Quem Somos</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Guarantee / Legal */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Compromisso Converte+</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Trabalhamos sem pacotes engessados e sem promessas irrealistas. Previsibilidade é um processo contínuo construído com técnica, testes e otimização.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-gray-300">
              <Lock className="w-3.5 h-3.5 text-orange-400" />
              <span>Ambiente de alta segurança e proteção de dados.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Converte+ Agência de Performance. Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

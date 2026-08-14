import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Header({ onOpenICP }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#080c19]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Logo - Icon with '+' and Single Text 'Converte+' */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-600 p-[1px] shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0e1529] rounded-[10px] flex items-center justify-center font-black text-xl text-orange-500">
                +
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center">
                Converte<span className="text-orange-500">+</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-gray-400 -mt-1">
                Tráfego & Branding
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button 
              onClick={() => scrollToSection('metodo')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Método
            </button>
            <button 
              onClick={() => scrollToSection('para-voce')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Para Quem É
            </button>
            <button 
              onClick={() => scrollToSection('caminho')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Caminho
            </button>
            <button 
              onClick={() => scrollToSection('planos')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('equipe')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onOpenICP}
              className="btn-orange px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20"
            >
              <Sparkles className="w-4 h-4 text-orange-200" />
              <span>Fazer Diagnóstico Grátis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1529]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-base font-medium text-gray-200">
            <button onClick={() => scrollToSection('metodo')} className="text-left py-2 border-b border-white/5">Método</button>
            <button onClick={() => scrollToSection('para-voce')} className="text-left py-2 border-b border-white/5">Para Quem É</button>
            <button onClick={() => scrollToSection('caminho')} className="text-left py-2 border-b border-white/5">Caminho Claro</button>
            <button onClick={() => scrollToSection('planos')} className="text-left py-2 border-b border-white/5">Planos</button>
            <button onClick={() => scrollToSection('equipe')} className="text-left py-2 border-b border-white/5">Quem Somos</button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 border-b border-white/5">FAQ</button>
            
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenICP(); }}
              className="mt-2 w-full py-3 rounded-xl btn-orange text-white font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Fazer Diagnóstico Grátis</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

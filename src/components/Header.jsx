import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, Plus } from 'lucide-react';

export default function Header({ onOpenICP }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Método', href: '#metodo' },
    { name: 'Para Quem É', href: '#para-voce' },
    { name: 'Planos', href: '#planos' },
    { name: 'Quem Somos', href: '#equipe' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-12 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c19]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Pixel-perfect SVG Plus centering */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 p-[1px] shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0e1529] rounded-[10px] flex items-center justify-center">
                <Plus className="w-5 h-5 text-orange-500 stroke-[3]" />
              </div>
            </div>
            <span className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              Converte<span className="text-orange-500">+</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenICP}
              className="btn-orange px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-orange-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diagnóstico Grátis</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1f]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-gray-200 hover:text-orange-400 py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenICP();
            }}
            className="btn-orange w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Fazer Diagnóstico Grátis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}

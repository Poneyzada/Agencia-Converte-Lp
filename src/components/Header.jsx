import React, { useState, useEffect } from 'react';
import { Menu, X, Plus } from 'lucide-react';

export default function Header({ onOpenICP }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Método', href: '#metodo' },
    { name: 'Para quem é', href: '#para-voce' },
    { name: 'Planos', href: '#planos' },
    { name: 'Quem Somos', href: '#equipe' },
    { name: 'Dúvidas', href: '#faq' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#111216]/95 backdrop-blur-md border-b border-white/10 shadow-2xl h-[72px] md:h-[72px]'
          : 'bg-transparent border-b border-transparent h-[60px] md:h-[72px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-tr from-[#ff5823] to-[#ff7a4a] p-[1px] shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#171920] rounded-[10px] flex items-center justify-center">
                <Plus className="w-4 h-4 md:w-5 md:h-5 text-[#ff5823] stroke-[3]" />
              </div>
            </div>
            <span className="font-extrabold text-lg md:text-xl text-white tracking-tight">
              Converte<span className="text-[#ff5823]">+</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-gray-300 hover:text-[#ff5823] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenICP}
              className="btn-orange px-3.5 py-2 md:px-5 md:py-2.5 rounded-xl font-bold text-[11px] md:text-xs shadow-lg shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Fazer diagnóstico grátis</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111216]/98 backdrop-blur-xl border-b border-white/10 px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-gray-200 hover:text-[#ff5823] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

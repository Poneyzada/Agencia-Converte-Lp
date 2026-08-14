import React, { useState } from 'react';
import WhatsAppConfigBar from './components/WhatsAppConfigBar';
import Header from './components/Header';
import { ParallaxComponent } from './components/ui/parallax-scrolling';
import MethodSection from './components/MethodSection';
import FitSection from './components/FitSection';
import RoadmapSection from './components/RoadmapSection';
import CTABannerSection from './components/CTABannerSection';
import NoRiskSection from './components/NoRiskSection';
import PlansSection from './components/PlansSection';
import StatsSection from './components/StatsSection';
import FoundersSection from './components/FoundersSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ICPModal from './components/ICPModal';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [whatsappNumber, setWhatsappNumber] = useState(siteConfig.whatsappNumber);
  const [icpModalOpen, setIcpModalOpen] = useState(false);

  const handleOpenICP = () => setIcpModalOpen(true);
  const handleCloseICP = () => setIcpModalOpen(false);

  return (
    <div className="min-h-screen bg-[#080c19] text-gray-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      
      {/* WhatsApp verification / editing header */}
      <WhatsAppConfigBar 
        whatsappNumber={whatsappNumber}
        onUpdateWhatsApp={setWhatsappNumber}
      />

      {/* Main Header Navbar */}
      <Header onOpenICP={handleOpenICP} />

      {/* Page Sections */}
      <main className="flex-grow">
        {/* Parallax Hero with GSAP, Lenis, and signature '+' logo icon */}
        <ParallaxComponent onOpenICP={handleOpenICP} />

        {/* 4 Pilares do Método */}
        <MethodSection onOpenICP={handleOpenICP} />

        {/* Isto é pra você? (Fit vs Not Fit) */}
        <FitSection onOpenICP={handleOpenICP} />

        {/* Um caminho claro até a sua previsibilidade */}
        <RoadmapSection onOpenICP={handleOpenICP} />

        {/* CTA Banner: Chega de terminar o mês... */}
        <CTABannerSection onOpenICP={handleOpenICP} />

        {/* O primeiro passo é sem risco */}
        <NoRiskSection onOpenICP={handleOpenICP} />

        {/* Um plano para cada momento do seu negócio */}
        <PlansSection onOpenICP={handleOpenICP} />

        {/* Feito para marcas que querem parar de viver de indicação */}
        <StatsSection />

        {/* Quem Conduz Sua Estratégia (Co-fundadores) */}
        <FoundersSection />

        {/* Dúvidas Frequentes */}
        <FAQSection onOpenICP={handleOpenICP} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive ICP 5-Question Modal Popup */}
      <ICPModal 
        isOpen={icpModalOpen} 
        onClose={handleCloseICP}
        whatsappNumber={whatsappNumber} 
      />
    </div>
  );
}

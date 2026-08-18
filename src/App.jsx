import React, { useState } from 'react';
import Header from './components/Header';
import { ParallaxComponent } from './components/ui/parallax-scrolling';
import MethodSection from './components/MethodSection';
import FitSection from './components/FitSection';
import CTABannerSection from './components/CTABannerSection';
import NoRiskSection from './components/NoRiskSection';
import PlansSection from './components/PlansSection';
import StatsSection from './components/StatsSection';
import FoundersSection from './components/FoundersSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ICPModal from './components/ICPModal';
import AdminCRMModal from './components/AdminCRMModal';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [whatsappNumber] = useState(siteConfig.whatsappNumber);
  const [icpModalOpen, setIcpModalOpen] = useState(false);
  const [crmModalOpen, setCrmModalOpen] = useState(false);

  const handleOpenICP = () => setIcpModalOpen(true);
  const handleCloseICP = () => setIcpModalOpen(false);

  const handleOpenCRM = () => setCrmModalOpen(true);
  const handleCloseCRM = () => setCrmModalOpen(false);

  return (
    <div className="min-h-screen bg-[#111216] text-gray-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Main Header Navbar */}
      <Header onOpenICP={handleOpenICP} />

      {/* Page Sections */}
      <main className="flex-grow">
        {/* Parallax Hero with GSAP and signature '+' logo icon */}
        <ParallaxComponent onOpenICP={handleOpenICP} />

        {/* 4 Pilares do Método (Única seção compacta de 4 passos) */}
        <MethodSection onOpenICP={handleOpenICP} />

        {/* Isto é pra você? (Fit vs Not Fit) */}
        <FitSection onOpenICP={handleOpenICP} />

        {/* CTA Banner: Chega de terminar o mês... */}
        <CTABannerSection onOpenICP={handleOpenICP} />

        {/* O primeiro passo é sem risco (Com a Rodinha Órbita 3D) */}
        <NoRiskSection onOpenICP={handleOpenICP} />

        {/* Um plano para cada momento do seu negócio */}
        <PlansSection onOpenICP={handleOpenICP} />

        {/* Feito para marcas que querem parar de viver de indicação */}
        <StatsSection />

        {/* Quem está por trás da Converte+ */}
        <FoundersSection />

        {/* Dúvidas Frequentes */}
        <FAQSection onOpenICP={handleOpenICP} />
      </main>

      {/* Footer with CRM link next to copyright */}
      <Footer onOpenCRM={handleOpenCRM} />

      {/* ICP Popup Form Modal */}
      <ICPModal
        isOpen={icpModalOpen}
        onClose={handleCloseICP}
        whatsappNumber={whatsappNumber}
      />

      {/* Internal Protected Admin CRM Modal */}
      <AdminCRMModal
        isOpen={crmModalOpen}
        onClose={handleCloseCRM}
      />

    </div>
  );
}

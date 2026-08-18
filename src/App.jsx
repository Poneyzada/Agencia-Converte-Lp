import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProofBar from './components/ProofBar';
import MethodSection from './components/MethodSection';
import FitSection from './components/FitSection';
import DiagnosticOverviewSection from './components/DiagnosticOverviewSection';
import CasesSection from './components/CasesSection';
import PlansSection from './components/PlansSection';
import FoundersSection from './components/FoundersSection';
import LearnSection from './components/LearnSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
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
      
      {/* 1. Header Navbar (72px / 60px com 4 âncoras e CTA visível) */}
      <Header onOpenICP={handleOpenICP} />

      {/* Main Page Sections na ordem oficial do Briefing */}
      <main className="flex-grow">
        {/* 2. Hero Section (Grid 60/40 com Órbita 3D à direita - Sem foto de fundador no Hero) */}
        <HeroSection onOpenICP={handleOpenICP} />

        {/* 3. Faixa de Prova (Colada ao Hero com 4 selos de transparência) */}
        <ProofBar />

        {/* 4. Método Converte+ (Autoridade antes do tráfego - 4 colunas estáticas) */}
        <MethodSection onOpenICP={handleOpenICP} />

        {/* 5. Para quem é / Para quem NÃO é (Com 120px de respiro) */}
        <FitSection onOpenICP={handleOpenICP} />

        {/* 6. O Diagnóstico (O primeiro passo é sem risco - 4 itens com ícones) */}
        <DiagnosticOverviewSection onOpenICP={handleOpenICP} />

        {/* 7. Prova (Cards de Cases de Negócio Nomeados - Sem contadores genéricos) */}
        <CasesSection onOpenICP={handleOpenICP} />

        {/* 8. Planos (Base, Autoridade, Escala - Sem preço) */}
        <PlansSection onOpenICP={handleOpenICP} />

        {/* 9. Quem Conduz (Gabriel Silva e Isabela Costa com fotos claras) */}
        <FoundersSection onOpenICP={handleOpenICP} />

        {/* 10. Para Quem Quer Aprender (Nova seção com captura de e-mail) */}
        <LearnSection />

        {/* 11. FAQ (Perguntas Frequentes Ampliada) */}
        <FAQSection onOpenICP={handleOpenICP} />
      </main>

      {/* 12. Footer com Link Discreto para o CRM */}
      <Footer onOpenCRM={handleOpenCRM} />

      {/* 13. Barra Fixa de CTA no Rodapé Mobile */}
      <MobileStickyCTA onOpenICP={handleOpenICP} />

      {/* 14. Formulário de Diagnóstico 3 Etapas (Modal) */}
      <ICPModal
        isOpen={icpModalOpen}
        onClose={handleCloseICP}
        whatsappNumber={whatsappNumber}
      />

      {/* 15. Painel Interno CRM Admin com Senha */}
      <AdminCRMModal
        isOpen={crmModalOpen}
        onClose={handleCloseCRM}
      />

    </div>
  );
}

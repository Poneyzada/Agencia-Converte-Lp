import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProofBar from './components/ProofBar';
import MethodSection from './components/MethodSection';
import FitSection from './components/FitSection';
import DiagnosticOverviewSection from './components/DiagnosticOverviewSection';
import CasesSection from './components/CasesSection';
import ImageConsultingSection from './components/ImageConsultingSection';
import PlansSection from './components/PlansSection';
import FoundersSection from './components/FoundersSection';
import FAQSection from './components/FAQSection';
import LearnSection from './components/LearnSection';
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
      
      {/* 1. Header Navbar */}
      <Header onOpenICP={handleOpenICP} />

      {/* Main Page Sections na ordem oficial do Roteiro de Alterações 24/Ago/2026 */}
      <main className="flex-grow">
        {/* 2. Hero Section (Grid 60/40 com Órbita 3D à direita & Efeito Studio Light da 21st.dev) */}
        <HeroSection onOpenICP={handleOpenICP} />

        {/* 3. Faixa de Prova (Colada ao Hero com 4 selos de transparência) */}
        <ProofBar />

        {/* 4. Método Converte+ (Autoridade antes do tráfego - 4 colunas estáticas) */}
        <MethodSection onOpenICP={handleOpenICP} />

        {/* 5. Para quem é a Converte+? (Perfil de cliente) */}
        <FitSection onOpenICP={handleOpenICP} />

        {/* 6. O Diagnóstico (O primeiro passo é sem risco) */}
        <DiagnosticOverviewSection onOpenICP={handleOpenICP} />

        {/* 7. Prova (Cards de Cases de Negócio Nomeados) */}
        <CasesSection onOpenICP={handleOpenICP} />

        {/* 8. Nova Seção: Consultoria de Imagem (Diferencial Converte+ antes dos Planos) */}
        <ImageConsultingSection onOpenICP={handleOpenICP} />

        {/* 9. Planos (Base, Autoridade, Escala - com destaque nos botões de entregáveis) */}
        <PlansSection onOpenICP={handleOpenICP} />

        {/* 10. Quem Conduz (João Paulo e Isabela Laud) */}
        <FoundersSection onOpenICP={handleOpenICP} />

        {/* 11. FAQ (Perguntas Frequentes Ampliada) */}
        <FAQSection onOpenICP={handleOpenICP} />

        {/* 12. Seção Aprender / Conteúdo (Posicionada após os CTAs comerciais) */}
        <LearnSection />
      </main>

      {/* 13. Footer com Link Discreto para o CRM */}
      <Footer onOpenCRM={handleOpenCRM} />

      {/* 14. Barra Fixa de CTA no Rodapé Mobile */}
      <MobileStickyCTA onOpenICP={handleOpenICP} />

      {/* 15. Formulário de Diagnóstico 3 Etapas (Modal) */}
      <ICPModal
        isOpen={icpModalOpen}
        onClose={handleCloseICP}
        whatsappNumber={whatsappNumber}
      />

      {/* 16. Painel Interno CRM Admin com Senha */}
      <AdminCRMModal
        isOpen={crmModalOpen}
        onClose={handleCloseCRM}
      />

    </div>
  );
}

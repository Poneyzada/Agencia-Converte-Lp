import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare, ShieldCheck, Send, User, Mail, Phone, RefreshCw, Globe, Building2, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../config/siteConfig';

export default function ICPModal({ isOpen, onClose, whatsappNumber }) {
  if (!isOpen) return null;

  const [currentStep, setCurrentStep] = useState(1); // 1: Clique Momento, 2: Contexto, 3: Contato, 4: Sucesso
  const [answers, setAnswers] = useState({
    momento: '',
    segmento: '',
    siteInstagram: '',
    investimento: 'Ainda não invisto',
    nome: '',
    email: '',
    telefone: ''
  });

  const [errors, setErrors] = useState({});
  const [utms, setUtms] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const captured = {
        utm_source: urlParams.get('utm_source') || 'direto',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_content: urlParams.get('utm_content') || '',
        utm_term: urlParams.get('utm_term') || '',
        referrer: document.referrer || 'direto',
        page_origin: window.location.href
      };
      setUtms(captured);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const momentOptions = [
    { label: "Dependo muito de indicação e quero previsibilidade", desc: "Já vendo, mas quero fluxo constante todo mês" },
    { label: "Já invisto em anúncio, mas o resultado não vem", desc: "Campanhas rodando sem conversão clara de clientes" },
    { label: "Estou começando agora no digital", desc: "Estruturando a base e primeiros passos em anúncios" },
    { label: "Tenho demanda e quero escalar com segurança", desc: "Operação validada querendo acelerar com inteligência" }
  ];

  const handleSelectMomento = (val) => {
    setAnswers(prev => ({ ...prev, momento: val }));
    setTimeout(() => {
      setCurrentStep(2);
    }, 180);
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setAnswers(prev => ({ ...prev, telefone: formatted }));
    if (errors.telefone) {
      setErrors(prev => ({ ...prev, telefone: '' }));
    }
  };

  const handleBlur = (field) => {
    const newErrors = { ...errors };
    if (field === 'segmento' && !answers.segmento.trim()) {
      newErrors.segmento = 'Informe o segmento do seu negócio.';
    } else if (field === 'segmento') {
      delete newErrors.segmento;
    }

    if (field === 'nome' && (!answers.nome.trim() || answers.nome.trim().length < 3)) {
      newErrors.nome = 'Digite seu nome completo.';
    } else if (field === 'nome') {
      delete newErrors.nome;
    }

    if (field === 'email' && (!answers.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email))) {
      newErrors.email = 'Digite um e-mail corporativo ou pessoal válido.';
    } else if (field === 'email') {
      delete newErrors.email;
    }

    if (field === 'telefone' && answers.telefone.replace(/\D/g, '').length < 10) {
      newErrors.telefone = 'Digite um WhatsApp com DDD (mínimo 10 dígitos).';
    } else if (field === 'telefone') {
      delete newErrors.telefone;
    }

    setErrors(newErrors);
  };

  const handleNextToStep3 = (e) => {
    e.preventDefault();
    if (!answers.segmento.trim()) {
      setErrors(prev => ({ ...prev, segmento: 'Informe o segmento da sua empresa.' }));
      return;
    }
    setCurrentStep(3);
  };

  const saveLeadToLocalStorage = (leadData) => {
    try {
      const existing = JSON.parse(localStorage.getItem('converte_leads_db') || '[]');
      const newLead = {
        id: 'DIAG-' + Date.now().toString().slice(-6),
        date: new Date().toLocaleString('pt-BR'),
        status: 'Novo Lead',
        nome: leadData.nome,
        email: leadData.email,
        telefone: leadData.telefone,
        segment: leadData.segmento,
        revenue: leadData.momento,
        budget: leadData.investimento,
        source: leadData.siteInstagram || 'Não informado',
        serviceGoal: 'Diagnóstico 3 Etapas',
        utms: utms
      };
      localStorage.setItem('converte_leads_db', JSON.stringify([newLead, ...existing]));
    } catch (e) {
      console.error('Error saving lead:', e);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*Olá! Gostaria de receber meu Diagnóstico Converte+!*

*Resumo das minhas respostas:*
• *Momento Atual:* ${answers.momento}
• *Segmento:* ${answers.segmento}
• *Site / Instagram:* ${answers.siteInstagram || 'Não informado'}
• *Verba Mensal de Anúncios:* ${answers.investimento}

*Meus dados de contato:*
• *Nome:* ${answers.nome}
• *E-mail:* ${answers.email}
• *WhatsApp:* ${answers.telefone}`;

    return encodeURIComponent(text);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!answers.nome.trim()) newErrors.nome = 'Digite seu nome completo.';
    if (!answers.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email)) newErrors.email = 'Digite um e-mail válido.';
    if (answers.telefone.replace(/\D/g, '').length < 10) newErrors.telefone = 'Digite um WhatsApp com DDD.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    saveLeadToLocalStorage(answers);

    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(4);
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.5 } });
    }, 400);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAnswers({
      momento: '',
      segmento: '',
      siteInstagram: '',
      investimento: 'Ainda não invisto',
      nome: '',
      email: '',
      telefone: ''
    });
    setErrors({});
  };

  const cleanPhone = (num) => num ? num.replace(/\D/g, '') : siteConfig.whatsappNumber;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#171920] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[95vh] flex flex-col justify-between">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Modal Top Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-xs">
              +
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                Diagnóstico Converte+
              </h3>
              <span className="text-[10px] text-gray-400 font-mono">
                {currentStep <= 3 ? `Etapa ${currentStep} de 3` : 'Diagnóstico Pronto'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENT STAGES */}
        <div className="space-y-5 overflow-y-auto flex-grow pr-1 relative z-10">
          
          {/* Progress Bar */}
          {currentStep <= 3 && (
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#ff5823] h-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          )}

          {/* ETAPA 1: CLIQUE */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in-50 duration-200">
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  O que melhor descreve seu momento hoje?
                </h4>
                <p className="text-xs text-gray-400">
                  Selecione a opção que mais se alinha com o seu momento atual.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                {momentOptions.map((opt, idx) => {
                  const isSelected = answers.momento === opt.label;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectMomento(opt.label)}
                      className={`w-full p-4 rounded-2xl text-left transition-all duration-200 border flex items-center justify-between cursor-pointer group ${
                        isSelected
                          ? 'bg-orange-500/20 border-[#ff5823] text-white shadow-md'
                          : 'bg-white/5 border-white/10 hover:border-orange-500/40 hover:bg-white/10 text-gray-200'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff5823] transition-colors">
                          {opt.label}
                        </div>
                        <div className="text-[11px] text-gray-400">
                          {opt.desc}
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#ff5823]">
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#ff5823]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ETAPA 2: CONTEXTO */}
          {currentStep === 2 && (
            <form onSubmit={handleNextToStep3} className="space-y-4 animate-in fade-in-50 duration-200">
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Contexto do seu negócio
                </h4>
                <p className="text-xs text-gray-400">
                  Para analisarmos sua presença antes de falar com você.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Segmento de atuação *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="Ex.: Clínica médica, B2B, advocacia, e-commerce..."
                      value={answers.segmento}
                      onChange={(e) => setAnswers(prev => ({ ...prev, segmento: e.target.value }))}
                      onBlur={() => handleBlur('segmento')}
                      className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ff5823] min-h-[44px]"
                    />
                  </div>
                  {errors.segmento && <p className="text-[11px] text-red-400 mt-1">{errors.segmento}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Site ou Instagram <span className="text-gray-500 font-normal">(opcional)</span>
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="@suamarca ou www.suaempresa.com.br"
                      value={answers.siteInstagram}
                      onChange={(e) => setAnswers(prev => ({ ...prev, siteInstagram: e.target.value }))}
                      className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ff5823] min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Investimento mensal em anúncio
                  </label>
                  <div className="relative">
                    <DollarSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      value={answers.investimento}
                      onChange={(e) => setAnswers(prev => ({ ...prev, investimento: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111216] border border-white/15 text-white text-sm focus:outline-none focus:border-[#ff5823] min-h-[44px] cursor-pointer"
                    >
                      <option value="Ainda não invisto">Ainda não invisto</option>
                      <option value="R$ 1.000 a R$ 2.500 / mês">R$ 1.000 a R$ 2.500 / mês</option>
                      <option value="R$ 2.500 a R$ 5.000 / mês">R$ 2.500 a R$ 5.000 / mês</option>
                      <option value="R$ 5.000 a R$ 10.000 / mês">R$ 5.000 a R$ 10.000 / mês</option>
                      <option value="Acima de R$ 10.000 / mês">Acima de R$ 10.000 / mês</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 btn-orange py-3 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg min-h-[44px] cursor-pointer"
                >
                  <span>Continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* ETAPA 3: CONTATO */}
          {currentStep === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-4 animate-in fade-in-50 duration-200">
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Onde entregamos seu mapa de diagnóstico?
                </h4>
                <p className="text-xs text-gray-400">
                  Preencha seus dados para receber o contato direto dos fundadores.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Seu nome completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="Ex.: Roberto Silva"
                      value={answers.nome}
                      onChange={(e) => setAnswers(prev => ({ ...prev, nome: e.target.value }))}
                      onBlur={() => handleBlur('nome')}
                      className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ff5823] min-h-[44px]"
                    />
                  </div>
                  {errors.nome && <p className="text-[11px] text-red-400 mt-1">{errors.nome}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    WhatsApp com DDD *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      inputMode="numeric"
                      required
                      placeholder="(11) 99999-9999"
                      value={answers.telefone}
                      onChange={handlePhoneChange}
                      onBlur={() => handleBlur('telefone')}
                      className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ff5823] min-h-[44px]"
                    />
                  </div>
                  {errors.telefone && <p className="text-[11px] text-red-400 mt-1">{errors.telefone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Seu e-mail corporativo ou pessoal *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="roberto@suaempresa.com.br"
                      value={answers.email}
                      onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                      onBlur={() => handleBlur('email')}
                      className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ff5823] min-h-[44px]"
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 btn-orange py-3.5 px-5 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 min-h-[44px] cursor-pointer"
                >
                  <span>{isSubmitting ? 'Preparando...' : 'Quero meu diagnóstico'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                <span>Um dos fundadores responde em até 24h. Seus dados não são compartilhados.</span>
              </p>
            </form>
          )}

          {/* ETAPA 4: SUCESSO */}
          {currentStep === 4 && (
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black text-white">
                  Diagnóstico Registrado!
                </h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Clique no botão abaixo para abrir a conversa direta com os fundadores no WhatsApp com suas respostas já anexadas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-1.5 text-gray-300 max-w-md mx-auto">
                <div className="font-bold text-orange-400 uppercase tracking-wider text-[10px] border-b border-white/10 pb-1 font-mono">
                  Resumo da sua solicitação:
                </div>
                <div>• <strong className="text-white">Momento:</strong> {answers.momento}</div>
                <div>• <strong className="text-white">Segmento:</strong> {answers.segmento}</div>
                <div>• <strong className="text-white">Verba em Anúncios:</strong> {answers.investimento}</div>
                <div>• <strong className="text-white">Contato:</strong> {answers.nome} ({answers.telefone})</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${cleanPhone(whatsappNumber)}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Abrir Conversa no WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refazer</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

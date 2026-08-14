import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare, ShieldCheck, Send, User, Mail, Phone, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../config/siteConfig';

export default function ICPModal({ isOpen, onClose, whatsappNumber }) {
  if (!isOpen) return null;

  const questions = siteConfig.icpQuestions;
  const [currentStep, setCurrentStep] = useState(0); // 0-4: Qs, 5: Lead form, 6: Success
  const [answers, setAnswers] = useState({
    segment: '',
    revenue: '',
    budget: '',
    source: '',
    serviceGoal: '',
    nome: '',
    email: '',
    telefone: ''
  });

  const [errorMsg, setErrorMsg] = useState('');

  const saveLeadToLocalStorage = (leadData) => {
    try {
      const existing = JSON.parse(localStorage.getItem('converte_leads_db') || '[]');
      const newLead = {
        id: 'LEAD-' + Date.now().toString().slice(-6),
        date: new Date().toLocaleString('pt-BR'),
        ...leadData
      };
      localStorage.setItem('converte_leads_db', JSON.stringify([newLead, ...existing]));
    } catch (e) {
      console.error('Error saving lead to storage:', e);
    }
  };

  const handleSelectOption = (questionId, optionValue) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionValue }));
    setErrorMsg('');
    
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else if (currentStep === questions.length - 1) {
        setCurrentStep(questions.length); // Go to lead contact step
      }
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
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const cleanPhone = (num) => num ? num.replace(/\D/g, '') : siteConfig.whatsappNumber;

  const generateWhatsAppMessage = () => {
    const text = `*Olá! Gostaria de receber meu Diagnóstico Converte+!*

*Resumo das minhas respostas:*
• *Segmento:* ${answers.segment}
• *Faturamento Mensal:* ${answers.revenue}
• *Verba p/ Anúncios:* ${answers.budget}
• *Origem dos Clientes:* ${answers.source}
• *Objetivo 90 Dias:* ${answers.serviceGoal}

*Meus dados de contato:*
• *Nome:* ${answers.nome}
• *E-mail:* ${answers.email}
• *WhatsApp:* ${answers.telefone}`;

    return encodeURIComponent(text);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!answers.nome || !answers.email || !answers.telefone) {
      setErrorMsg('Por favor, preencha todos os campos.');
      return;
    }
    setErrorMsg('');
    saveLeadToLocalStorage(answers);
    setCurrentStep(questions.length + 1); // Go to final success screen
    triggerConfetti();
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({
      segment: '',
      revenue: '',
      budget: '',
      source: '',
      serviceGoal: '',
      nome: '',
      email: '',
      telefone: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg glass-panel bg-[#0e1529]/95 border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Glow halo background */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-xs">
              +
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                Diagnóstico Converte+
              </h3>
              <span className="text-[10px] text-gray-400 font-mono">
                {currentStep < questions.length ? `Passo ${currentStep + 1} de ${questions.length}` : 'Etapa Final'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 0 to 4: QUIZ QUESTIONS */}
        {currentStep < questions.length && (
          <div className="space-y-5 animate-in fade-in-50 duration-200">
            
            {/* Progress bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-orange-500 to-amber-500 h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question title */}
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                {questions[currentStep].title}
              </h4>
              <p className="text-xs text-gray-300">
                {questions[currentStep].subtitle}
              </p>
            </div>

            {/* Options list */}
            <div className="space-y-2.5 pt-1">
              {questions[currentStep].options.map((option, idx) => {
                const isSelected = answers[questions[currentStep].id] === option.value;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(questions[currentStep].id, option.value)}
                    className={`w-full p-3.5 rounded-2xl text-left text-xs font-semibold transition-all duration-200 border flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-orange-500/20 border-orange-500 text-white shadow-md shadow-orange-500/10'
                        : 'bg-white/5 border-white/10 hover:border-orange-500/40 text-gray-200 hover:bg-white/10'
                    }`}
                  >
                    <span>{option.label}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-orange-500 bg-orange-500' : 'border-white/30'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation back button */}
            {currentStep > 0 && (
              <div className="pt-2">
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar para pergunta anterior</span>
                </button>
              </div>
            )}

          </div>
        )}

        {/* STEP 5: LEAD CONTACT FORM */}
        {currentStep === questions.length && (
          <form onSubmit={handleLeadSubmit} className="space-y-4 animate-in fade-in-50 duration-200">
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Para onde enviamos a análise gratuita?
              </h4>
              <p className="text-xs text-gray-300">
                Preencha seus dados para conectar sua análise diretamente ao WhatsApp de nossos especialistas.
              </p>
            </div>

            {errorMsg && (
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                {errorMsg}
              </div>
            )}

            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Seu Nome Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text"
                    required
                    placeholder="Ex: Roberto Silva"
                    value={answers.nome}
                    onChange={(e) => setAnswers(prev => ({ ...prev, nome: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Seu E-mail
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email"
                    required
                    placeholder="roberto@suaempresa.com.br"
                    value={answers.email}
                    onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Seu WhatsApp com DDD
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={answers.telefone}
                    onChange={handlePhoneChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-white text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 flex gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep(questions.length - 1)}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar</span>
              </button>

              <button
                type="submit"
                className="flex-1 px-5 py-3.5 rounded-xl btn-orange text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Gerar Diagnóstico no WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>Sem custos e sem compromisso de fechamento.</span>
            </p>
          </form>
        )}

        {/* STEP 6: SUCCESS SCREEN */}
        {currentStep > questions.length && (
          <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">
                Diagnóstico Preparado!
              </h3>
              <p className="text-xs text-gray-300 max-w-sm mx-auto">
                Clique no botão verde abaixo para enviar seu resumo diretamente aos fundadores.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left text-[11px] space-y-1.5 text-gray-300 max-w-md mx-auto">
              <div className="font-bold text-orange-400 uppercase tracking-wider text-[10px] border-b border-white/10 pb-1">
                Resumo da Análise:
              </div>
              <div>• <strong className="text-white">Segmento:</strong> {answers.segment}</div>
              <div>• <strong className="text-white">Faturamento:</strong> {answers.revenue}</div>
              <div>• <strong className="text-white">Investimento:</strong> {answers.budget}</div>
              <div>• <strong className="text-white">Origem dos Clientes:</strong> {answers.source}</div>
              <div>• <strong className="text-white">Objetivo:</strong> {answers.serviceGoal}</div>
              <div>• <strong className="text-white">Contato:</strong> {answers.nome} ({answers.telefone})</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${cleanPhone(whatsappNumber)}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Abrir Conversa no WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refazer</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

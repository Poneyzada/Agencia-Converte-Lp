import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare, ShieldCheck, Send, User, Mail, Phone, RefreshCw } from 'lucide-react';
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

📋 *Resumo da Análise ICP:*
• *Segmento:* ${answers.segment || 'Não informado'}
• *Faturamento Mensal:* ${answers.revenue || 'Não informado'}
• *Investimento em Anúncios:* ${answers.budget || 'Não informado'}
• *Origem Atual:* ${answers.source || 'Não informado'}
• *Serviço Solicitado:* ${answers.serviceGoal || 'Não informado'}

👤 *Dados para Retorno:*
• *Nome:* ${answers.nome}
• *E-mail:* ${answers.email}
• *WhatsApp:* ${answers.telefone}`;

    return encodeURIComponent(text);
  };

  const handleSubmitLead = (e) => {
    e.preventDefault();
    if (!answers.nome.trim() || !answers.email.trim() || !answers.telefone.trim()) {
      setErrorMsg('Por favor, preencha nome, e-mail e WhatsApp para continuar.');
      return;
    }

    setErrorMsg('');
    triggerConfetti();
    setCurrentStep(questions.length + 1);

    const targetNum = cleanPhone(whatsappNumber);
    const msg = generateWhatsAppMessage();
    const waUrl = `https://wa.me/${targetNum}?text=${msg}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 350);
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

  const totalSteps = questions.length + 1;
  const progressPercent = Math.min(100, Math.round(((currentStep + 1) / totalSteps) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080c19]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0e1529] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-auto">
        
        {/* Top Header / Close */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-500 flex items-center justify-center font-bold text-sm">
              C<span className="text-orange-400">+</span>
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-wide">Diagnóstico Converte+</span>
              <span className="block text-[10px] text-gray-400">Análise Gratuita de Presença Digital</span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {currentStep <= questions.length && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-2">
              <span>Etapa {Math.min(currentStep + 1, totalSteps)} de {totalSteps}</span>
              <span className="text-orange-400 font-mono">{progressPercent}% Concluído</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 0 to 4: QUESTIONS */}
        {currentStep < questions.length && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                {questions[currentStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                {questions[currentStep].subtitle}
              </p>
            </div>

            {/* Options list */}
            <div className="space-y-2.5">
              {questions[currentStep].options.map((opt, idx) => {
                const isSelected = answers[questions[currentStep].id] === opt.value;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(questions[currentStep].id, opt.value)}
                    className={`w-full text-left px-4 py-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected 
                        ? 'bg-orange-500/20 border-orange-500 text-white shadow-lg shadow-orange-500/10' 
                        : 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:border-orange-500/40 hover:text-white'
                    }`}
                  >
                    <span className="font-medium text-xs sm:text-sm">{opt.label}</span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'bg-orange-500 border-orange-400 text-white' 
                        : 'border-white/20 group-hover:border-orange-400'
                    }`}>
                      {isSelected ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-orange-400/50" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation controls */}
            {currentStep > 0 && (
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Pergunta anterior</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* STEP 5: LEAD DETAILS FORM */}
        {currentStep === questions.length && (
          <form onSubmit={handleSubmitLead} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Análise de perfil concluída!</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Para onde devemos enviar seu Diagnóstico?
              </h3>
              <p className="text-xs text-gray-300">
                Preencha abaixo para gerar sua proposta personalizada e abrir o atendimento no WhatsApp.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                {errorMsg}
              </div>
            )}

            <div className="space-y-3">
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

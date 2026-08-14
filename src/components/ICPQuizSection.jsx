import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare, ShieldCheck, Send, User, Mail, Phone, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../config/siteConfig';

export default function ICPQuizSection({ whatsappNumber = siteConfig.whatsappNumber }) {
  const questions = siteConfig.icpQuestions;
  const [currentStep, setCurrentStep] = useState(0); // 0 to 4: questions, 5: lead details, 6: completed
  
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
    
    // Auto advance to next step after brief delay for smooth interaction
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else if (currentStep === questions.length - 1) {
        setCurrentStep(questions.length); // Move to lead contact details step
      }
    }, 200);
  };

  const formatPhoneNumber = (value) => {
    // Basic Brazilian phone mask (XX) XXXXX-XXXX
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
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const cleanPhone = (num) => num ? num.replace(/\D/g, '') : siteConfig.whatsappNumber;

  const generateWhatsAppMessage = () => {
    const text = `*Olá! Gostaria de receber meu Diagnóstico Converte+!*

📋 *Resumo da Minha Empresa:*
• *Segmento:* ${answers.segment || 'Não informado'}
• *Faturamento Mensal:* ${answers.revenue || 'Não informado'}
• *Investimento em Mídia:* ${answers.budget || 'Não informado'}
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
      setErrorMsg('Por favor, preencha nome, e-mail e WhatsApp para continuarmos.');
      return;
    }

    setErrorMsg('');
    triggerConfetti();
    setCurrentStep(questions.length + 1); // Success step

    // Build link and redirect to WhatsApp
    const targetNum = cleanPhone(whatsappNumber);
    const msg = generateWhatsAppMessage();
    const waUrl = `https://wa.me/${targetNum}?text=${msg}`;

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
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

  const totalSteps = questions.length + 1; // 5 Qs + 1 Lead Info Step
  const progressPercent = Math.min(100, Math.round(((currentStep + 1) / totalSteps) * 100));

  return (
    <section id="diagnostico-icp" className="py-20 md:py-28 relative overflow-hidden bg-[#0a0f1d]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Diagnóstico ICP Rápido</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Descubra se o seu Negócio está Pronto para <span className="text-gradient">Previsibilidade de Vendas</span>
          </h2>
          <p className="text-gray-300 text-base">
            Responda 5 perguntas objetivas. Em seguida, receba a recomendação ideal direto no WhatsApp dos fundadores.
          </p>
        </div>

        {/* Quiz Panel Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative">
          
          {/* Progress Bar */}
          {currentStep <= questions.length && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-2">
                <span>
                  Etapa {Math.min(currentStep + 1, totalSteps)} de {totalSteps}
                </span>
                <span className="text-emerald-400 font-mono">{progressPercent}% Concluído</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 0 to 4: QUESTIONS */}
          {currentStep < questions.length && (
            <div>
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {questions[currentStep].title}
                </h3>
                <p className="text-sm text-gray-400">
                  {questions[currentStep].subtitle}
                </p>
              </div>

              {/* Options list */}
              <div className="space-y-3">
                {questions[currentStep].options.map((opt, idx) => {
                  const isSelected = answers[questions[currentStep].id] === opt.value;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(questions[currentStep].id, opt.value)}
                      className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                        isSelected 
                          ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-lg shadow-emerald-500/10' 
                          : 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:border-emerald-500/40 hover:text-white'
                      }`}
                    >
                      <span className="font-medium text-sm sm:text-base">{opt.label}</span>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-emerald-500 border-emerald-400 text-white' 
                          : 'border-white/20 group-hover:border-emerald-400'
                      }`}>
                        {isSelected ? <CheckCircle2 className="w-4 h-4 text-slate-950" /> : <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-emerald-400/50" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Back Button */}
              {currentStep > 0 && (
                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                  <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Voltar para pergunta anterior</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 5: LEAD DETAILS FORM */}
          {currentStep === questions.length && (
            <form onSubmit={handleSubmitLead} className="space-y-6">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Respostas registradas com sucesso!</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Para onde devemos enviar a análise do seu Diagnóstico?
                </h3>
                <p className="text-sm text-gray-300">
                  Preencha abaixo para gerar sua análise personalizada e direcionar para nosso WhatsApp oficial.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-4">
                {/* Nome */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Seu Nome Completo
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text"
                      required
                      placeholder="Ex: Roberto Silva"
                      value={answers.nome}
                      onChange={(e) => setAnswers(prev => ({ ...prev, nome: e.target.value }))}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-input text-white text-sm"
                    />
                  </div>
                </div>

                {/* E-mail */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Seu Melhor E-mail
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email"
                      required
                      placeholder="roberto@suaempresa.com.br"
                      value={answers.email}
                      onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-input text-white text-sm"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Seu WhatsApp com DDD
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={answers.telefone}
                      onChange={handlePhoneChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-input text-white text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Action Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(questions.length - 1)}
                  className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Revisar Opções</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Gerar Diagnóstico no WhatsApp</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Respeitamos sua privacidade. Seus dados estão 100% protegidos.</span>
                </p>
              </div>
            </form>
          )}

          {/* STEP 6: COMPLETED CONFIRMATION SCREEN */}
          {currentStep > questions.length && (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Diagnóstico Preparado com Sucesso!
                </h3>
                <p className="text-sm text-gray-300">
                  Caso o aplicativo do WhatsApp não tenha aberto automaticamente, clique no botão verde abaixo para enviar seu diagnóstico aos fundadores.
                </p>
              </div>

              {/* Summary Box */}
              <div className="max-w-lg mx-auto text-left p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2 text-gray-300">
                <div className="font-bold text-emerald-400 border-b border-white/10 pb-1 uppercase tracking-wider">
                  Resumo das Respostas Enviadas:
                </div>
                <div>• <strong className="text-white">Segmento:</strong> {answers.segment}</div>
                <div>• <strong className="text-white">Faturamento:</strong> {answers.revenue}</div>
                <div>• <strong className="text-white">Investimento em Anúncios:</strong> {answers.budget}</div>
                <div>• <strong className="text-white">Origem dos Clientes:</strong> {answers.source}</div>
                <div>• <strong className="text-white">Serviço Desejado:</strong> {answers.serviceGoal}</div>
                <div>• <strong className="text-white">Contato:</strong> {answers.nome} ({answers.telefone})</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href={`https://wa.me/${cleanPhone(whatsappNumber)}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950" />
                  <span>Abrir Conversa no WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Refazer Diagnóstico</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

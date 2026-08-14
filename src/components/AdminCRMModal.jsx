import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  KeyRound, 
  Download, 
  FileSpreadsheet, 
  Copy, 
  Trash2, 
  Search, 
  UserCheck, 
  MessageSquare, 
  Building2, 
  DollarSign, 
  Calendar, 
  Check, 
  ShieldAlert,
  BarChart3,
  Filter,
  PieChart,
  Tag,
  Edit3,
  ExternalLink,
  Sparkles,
  Layers,
  Save
} from 'lucide-react';

export default function AdminCRMModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedLead, setSelectedLead] = useState(null);
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [leadNoteInput, setLeadNoteInput] = useState('');

  // Official Admin Passwords for agency owners
  const VALID_PASSWORDS = ['converteMAIS123', 'coverteMAIS123'];

  useEffect(() => {
    const loadLeads = () => {
      try {
        const stored = JSON.parse(localStorage.getItem('converte_leads_db') || '[]');
        setLeads(stored);
      } catch (e) {
        console.error('Error loading leads:', e);
        setLeads([]);
      }
    };
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (VALID_PASSWORDS.includes(password.trim())) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Senha incorreta. Acesso negado.');
    }
  };

  const handleUpdateLeadStatus = (id, newStatus) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem('converte_leads_db', JSON.stringify(updated));
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead(prev => ({ ...prev, status: newStatus }));
    }
  };

  const handleSaveLeadNote = (id) => {
    const updated = leads.map(l => l.id === id ? { ...l, note: leadNoteInput } : l);
    setLeads(updated);
    localStorage.setItem('converte_leads_db', JSON.stringify(updated));
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead(prev => ({ ...prev, note: leadNoteInput }));
    }
    alert('Anotação salva com sucesso!');
  };

  const handleDeleteLead = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este lead da lista?')) {
      const updated = leads.filter(l => l.id !== id);
      setLeads(updated);
      localStorage.setItem('converte_leads_db', JSON.stringify(updated));
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead(null);
      }
    }
  };

  const handleClearAll = () => {
    if (window.confirm('ATENÇÃO: Deseja apagar TODOS os leads registrados? Esta ação é irreversível.')) {
      setLeads([]);
      localStorage.setItem('converte_leads_db', JSON.stringify([]));
      setSelectedLead(null);
    }
  };

  // Export to Excel / CSV format with UTF-8 BOM
  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('Nenhum lead disponível para exportar.');
      return;
    }

    const headers = ['ID', 'Data/Hora', 'Status', 'Nome', 'Email', 'WhatsApp', 'Segmento', 'Faturamento', 'Investimento Anúncios', 'Origem Clientes', 'Objetivo 90d', 'Anotações Internas'];
    
    const rows = leads.map(l => [
      `"${l.id || ''}"`,
      `"${l.date || ''}"`,
      `"${l.status || 'Novo Lead'}"`,
      `"${(l.nome || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.telefone || '').replace(/"/g, '""')}"`,
      `"${(l.segment || '').replace(/"/g, '""')}"`,
      `"${(l.revenue || '').replace(/"/g, '""')}"`,
      `"${(l.budget || '').replace(/"/g, '""')}"`,
      `"${(l.source || '').replace(/"/g, '""')}"`,
      `"${(l.serviceGoal || '').replace(/"/g, '""')}"`,
      `"${(l.note || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `CRM_Converte_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy for 1-click paste into Google Sheets
  const handleCopyToClipboard = () => {
    if (leads.length === 0) {
      alert('Nenhum lead para copiar.');
      return;
    }

    const headers = ['Data/Hora', 'Status', 'Nome', 'Email', 'WhatsApp', 'Segmento', 'Faturamento', 'Investimento', 'Origem', 'Objetivo', 'Anotações'];
    const rows = leads.map(l => [
      l.date || '',
      l.status || 'Novo Lead',
      l.nome || '',
      l.email || '',
      l.telefone || '',
      l.segment || '',
      l.revenue || '',
      l.budget || '',
      l.source || '',
      l.serviceGoal || '',
      l.note || ''
    ]);

    const textToCopy = [headers.join('\t'), ...rows.map(r => r.join('\t'))].join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  const filteredLeads = leads.filter(l => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = (
      (l.nome && l.nome.toLowerCase().includes(term)) ||
      (l.email && l.email.toLowerCase().includes(term)) ||
      (l.telefone && l.telefone.includes(term)) ||
      (l.segment && l.segment.toLowerCase().includes(term))
    );

    const matchesStatus = statusFilter === 'ALL' || (l.status || 'Novo Lead') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Em Atendimento':
        return <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold">Em Atendimento</span>;
      case 'Fechado':
        return <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">Cliente Fechado ✓</span>;
      case 'Sem Resposta':
        return <span className="px-2.5 py-0.5 rounded-full bg-gray-500/10 text-gray-400 border border-gray-500/20 text-[10px] font-bold">Sem Resposta</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px] font-bold">Novo Lead ★</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-6xl bg-[#0a0f1f] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#060914]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 p-[1px] shadow-lg shadow-orange-500/20">
              <div className="w-full h-full bg-[#0e1529] rounded-[15px] flex items-center justify-center">
                <Lock className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>Painel CRM Converte+</span>
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] uppercase font-mono font-bold">
                  PRO DASHBOARD
                </span>
              </h2>
              <p className="text-[11px] text-gray-400">
                Gestão estratégica de leads, diagnósticos e exportação de dados
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENT BODY */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">
          
          {/* PASSWORD AUTHENTICATION SCREEN */}
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto py-16 text-center space-y-6">
              
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 mx-auto flex items-center justify-center shadow-lg shadow-orange-500/10">
                <KeyRound className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Acesso Restrito da Diretoria</h3>
                <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                  Esta área é exclusiva para os fundadores da Converte+. Digite a senha de acesso para visualizar o CRM.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="Digite a senha restrita"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors text-center font-mono placeholder:text-gray-500 shadow-inner"
                  />
                </div>

                {authError && (
                  <p className="text-xs text-red-400 font-medium animate-shake">
                    {authError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-orange w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Entrar no Painel CRM</span>
                </button>
              </form>

            </div>
          ) : (
            /* AUTHENTICATED CRM DASHBOARD PRO */
            <div className="space-y-6">
              
              {/* Executive Metrics Overview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Metric 1: Total Leads */}
                <div className="p-4 rounded-2xl bg-[#0e1529] border border-white/10 space-y-1 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                    <span>Total de Diagnósticos</span>
                    <UserCheck className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="text-3xl font-black text-white">{leads.length}</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Captação em tempo real</div>
                </div>

                {/* Metric 2: Clientes Fechados */}
                <div className="p-4 rounded-2xl bg-[#0e1529] border border-white/10 space-y-1 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                    <span>Clientes Fechados</span>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-black text-white">
                    {leads.filter(l => l.status === 'Fechado').length}
                  </div>
                  <div className="text-[10px] text-gray-400">Conversão de vendas</div>
                </div>

                {/* Metric 3: Em Atendimento */}
                <div className="p-4 rounded-2xl bg-[#0e1529] border border-white/10 space-y-1 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                    <span>Em Atendimento</span>
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-3xl font-black text-white">
                    {leads.filter(l => l.status === 'Em Atendimento').length}
                  </div>
                  <div className="text-[10px] text-blue-400">Em negociação ativa</div>
                </div>

                {/* Metric 4: Export Actions */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0e1529] to-[#141e38] border border-orange-500/30 space-y-2 shadow-lg flex flex-col justify-between">
                  <span className="text-xs font-bold text-white">Exportação Rápida</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleExportCSV}
                      className="flex-1 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] flex items-center justify-center gap-1 shadow transition-colors cursor-pointer"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5" />
                      <span>Excel (.xlsx)</span>
                    </button>

                    <button
                      onClick={handleCopyToClipboard}
                      className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      title="Copiar para Google Sheets"
                    >
                      {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSuccess ? 'OK!' : 'Sheets'}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Filters & Actions Bar */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2">
                
                {/* Search Bar */}
                <div className="relative flex-grow max-w-md">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar por nome, e-mail, telefone ou segmento..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500"
                  />
                </div>

                {/* Status Filter Buttons */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                  <span className="text-[11px] text-gray-400 font-medium mr-1 flex items-center gap-1">
                    <Filter className="w-3 h-3" /> Status:
                  </span>
                  {['ALL', 'Novo Lead', 'Em Atendimento', 'Fechado', 'Sem Resposta'].map(st => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap border ${
                        statusFilter === st
                          ? 'bg-orange-500 text-white border-orange-400 shadow-md'
                          : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {st === 'ALL' ? 'Todos' : st}
                    </button>
                  ))}

                  {leads.length > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="p-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors ml-2 cursor-pointer"
                      title="Limpar todos os registros"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>

              {/* Leads Table Pro */}
              {filteredLeads.length === 0 ? (
                <div className="py-16 text-center space-y-3 bg-[#080c19] rounded-2xl border border-white/5">
                  <BarChart3 className="w-10 h-10 text-gray-500 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Nenhum lead encontrado com esse filtro</h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    Os diagnósticos preenchidos pelos visitantes na landing page aparecerão aqui em tempo real.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#080c19]">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-gray-400 font-bold uppercase text-[10px] tracking-wider">
                        <th className="p-3.5">Data/Hora</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5">Lead / Contato</th>
                        <th className="p-3.5">WhatsApp</th>
                        <th className="p-3.5">Segmento</th>
                        <th className="p-3.5">Faturamento</th>
                        <th className="p-3.5">Verba Anúncios</th>
                        <th className="p-3.5 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredLeads.map((lead, idx) => {
                        const cleanNum = lead.telefone ? lead.telefone.replace(/\D/g, '') : '';
                        const currentStatus = lead.status || 'Novo Lead';

                        return (
                          <tr key={lead.id || idx} className="hover:bg-white/5 transition-colors">
                            <td className="p-3.5 text-gray-400 font-mono text-[11px] whitespace-nowrap">
                              {lead.date || 'Recente'}
                            </td>
                            <td className="p-3.5 whitespace-nowrap">
                              <select
                                value={currentStatus}
                                onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                                className="bg-[#0e1529] text-gray-200 border border-white/15 rounded-lg px-2 py-1 text-[11px] font-medium focus:outline-none focus:border-orange-500 cursor-pointer"
                              >
                                <option value="Novo Lead">★ Novo Lead</option>
                                <option value="Em Atendimento">💬 Em Atendimento</option>
                                <option value="Fechado">✓ Cliente Fechado</option>
                                <option value="Sem Resposta">✕ Sem Resposta</option>
                              </select>
                            </td>
                            <td className="p-3.5">
                              <div className="font-bold text-white">{lead.nome || 'Não informado'}</div>
                              <div className="text-[11px] text-gray-400">{lead.email || '-'}</div>
                            </td>
                            <td className="p-3.5 whitespace-nowrap">
                              {cleanNum ? (
                                <a
                                  href={`https://wa.me/55${cleanNum}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold hover:bg-emerald-500/20 transition-colors"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" />
                                  <span>{lead.telefone}</span>
                                </a>
                              ) : (
                                <span className="text-gray-500">-</span>
                              )}
                            </td>
                            <td className="p-3.5 text-gray-300">
                              {lead.segment || '-'}
                            </td>
                            <td className="p-3.5 text-gray-300 font-medium">
                              {lead.revenue || '-'}
                            </td>
                            <td className="p-3.5 text-orange-400 font-semibold">
                              {lead.budget || '-'}
                            </td>
                            <td className="p-3.5 text-right whitespace-nowrap">
                              <button
                                onClick={() => {
                                  setSelectedLead(lead);
                                  setLeadNoteInput(lead.note || '');
                                }}
                                className="px-2.5 py-1 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/20 font-semibold transition-colors mr-2 cursor-pointer"
                              >
                                Ver Completo
                              </button>
                              <button
                                onClick={() => handleDeleteLead(lead.id)}
                                className="p-1 rounded-lg text-gray-500 hover:text-red-400 transition-colors cursor-pointer"
                                title="Excluir"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Detailed Lead Modal Overlay */}
        {selectedLead && (
          <div className="fixed inset-0 z-60 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#0e1529] border border-white/20 rounded-3xl p-6 max-w-lg w-full space-y-4 relative shadow-2xl">
              <button
                onClick={() => setSelectedLead(null)}
                className="absolute top-4 right-4 p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-extrabold text-white">
                    {selectedLead.nome}
                  </h3>
                  {getStatusBadge(selectedLead.status || 'Novo Lead')}
                </div>
                <p className="text-xs text-gray-400 font-mono">ID: {selectedLead.id || 'N/A'} • {selectedLead.date}</p>
              </div>

              <div className="space-y-3 text-xs">
                
                {/* Contact Box */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider block">Canais de Contato</span>
                  <div className="text-gray-200"><strong>E-mail:</strong> {selectedLead.email}</div>
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-200">WhatsApp:</strong>
                    <a
                      href={`https://wa.me/55${(selectedLead.telefone || '').replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 underline font-semibold flex items-center gap-1"
                    >
                      <span>{selectedLead.telefone}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* 5 Quiz Responses */}
                <div className="space-y-2 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider block">Respostas do Diagnóstico</span>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-gray-400">Segmento:</span>
                    <span className="text-white font-semibold">{selectedLead.segment}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-gray-400">Faturamento Mensal:</span>
                    <span className="text-white font-semibold">{selectedLead.revenue}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-gray-400">Verba p/ Anúncios:</span>
                    <span className="text-orange-400 font-semibold">{selectedLead.budget}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-gray-400">Origem Atual dos Clientes:</span>
                    <span className="text-white font-semibold">{selectedLead.source}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Objetivo 90 Dias:</span>
                    <span className="text-white font-semibold">{selectedLead.serviceGoal}</span>
                  </div>
                </div>

                {/* Internal Notes */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Anotações Internas do Lead</label>
                  <textarea
                    rows="2"
                    placeholder="Escreva observações da reunião ou proposta enviada..."
                    value={leadNoteInput}
                    onChange={(e) => setLeadNoteInput(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500"
                  />
                  <button
                    onClick={() => handleSaveLeadNote(selectedLead.id)}
                    className="px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Salvar Anotação</span>
                  </button>
                </div>

              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

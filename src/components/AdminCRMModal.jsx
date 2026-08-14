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
  ChevronRight, 
  ShieldAlert,
  BarChart3
} from 'lucide-react';

export default function AdminCRMModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const CORRECT_PASSWORD = 'converte123'; // Default password for agency owners

  useEffect(() => {
    // Load stored leads from localStorage
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
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Senha incorreta. Tente novamente.');
    }
  };

  const handleDeleteLead = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este lead da lista?')) {
      const updated = leads.filter(l => l.id !== id);
      setLeads(updated);
      localStorage.setItem('converte_leads_db', JSON.stringify(updated));
    }
  };

  const handleClearAll = () => {
    if (window.confirm('ATENÇÃO: Deseja apagar TODOS os leads salvos no navegador? Esta ação não pode ser desfeita.')) {
      setLeads([]);
      localStorage.setItem('converte_leads_db', JSON.stringify([]));
    }
  };

  // Export to Excel / CSV format with UTF-8 BOM
  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('Nenhum lead disponível para exportar.');
      return;
    }

    const headers = ['ID', 'Data/Hora', 'Nome', 'Email', 'WhatsApp', 'Segmento', 'Faturamento', 'Investimento', 'Origem Atual', 'Objetivo 90d'];
    
    const rows = leads.map(l => [
      `"${l.id || ''}"`,
      `"${l.date || ''}"`,
      `"${(l.nome || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.telefone || '').replace(/"/g, '""')}"`,
      `"${(l.segment || '').replace(/"/g, '""')}"`,
      `"${(l.revenue || '').replace(/"/g, '""')}"`,
      `"${(l.budget || '').replace(/"/g, '""')}"`,
      `"${(l.source || '').replace(/"/g, '""')}"`,
      `"${(l.serviceGoal || '').replace(/"/g, '""')}"`
    ]);

    // CSV UTF-8 BOM so Excel opens accents correctly
    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `leads_converte_mais_${new Date().toISOString().slice(0, 10)}.csv`);
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

    const headers = ['Data/Hora', 'Nome', 'Email', 'WhatsApp', 'Segmento', 'Faturamento', 'Investimento', 'Origem', 'Objetivo'];
    const rows = leads.map(l => [
      l.date || '',
      l.nome || '',
      l.email || '',
      l.telefone || '',
      l.segment || '',
      l.revenue || '',
      l.budget || '',
      l.source || '',
      l.serviceGoal || ''
    ]);

    const textToCopy = [headers.join('\t'), ...rows.map(r => r.join('\t'))].join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  const filteredLeads = leads.filter(l => {
    const term = searchTerm.toLowerCase();
    return (
      (l.nome && l.nome.toLowerCase().includes(term)) ||
      (l.email && l.email.toLowerCase().includes(term)) ||
      (l.telefone && l.telefone.includes(term)) ||
      (l.segment && l.segment.toLowerCase().includes(term))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-5xl bg-[#0e1529] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#080c19]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Painel CRM Converte+</span>
                <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] uppercase font-mono font-bold">
                  Área do Cliente
                </span>
              </h2>
              <p className="text-[11px] text-gray-400">
                Gestão interna de leads e diagnósticos preenchidos na landing page
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
            <div className="max-w-md mx-auto py-12 text-center space-y-6">
              
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 mx-auto flex items-center justify-center shadow-lg shadow-orange-500/10">
                <KeyRound className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Acesso Restrito ao Painel</h3>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  Digite a senha de administrador da agência para visualizar os diagnósticos respondidos.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="Digite a senha (ex: converte123)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors text-center font-mono placeholder:text-gray-500"
                  />
                </div>

                {authError && (
                  <p className="text-xs text-red-400 font-medium animate-shake">
                    {authError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-orange w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Acessar Leads</span>
                </button>
              </form>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-gray-400">
                <span>Dica: A senha padrão de acesso é <strong className="text-white font-mono">converte123</strong></span>
              </div>

            </div>
          ) : (
            /* AUTHENTICATED CRM DASHBOARD */
            <div className="space-y-6">
              
              {/* Top Stats Cards & Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Stat 1: Total Leads */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 font-medium block">Total de Leads</span>
                    <span className="text-2xl font-black text-white">{leads.length}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                </div>

                {/* Stat 2: Export Options */}
                <div className="md:col-span-2 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-white block">Exportar Respostas</span>
                    <span className="text-[11px] text-gray-400 block">Baixe em Excel/CSV ou copie para o Google Sheets</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={handleExportCSV}
                      className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                    >
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>Baixar Excel / CSV</span>
                    </button>

                    <button
                      onClick={handleCopyToClipboard}
                      className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedSuccess ? 'Copiado!' : 'Copiar p/ Sheets'}</span>
                    </button>

                    {leads.length > 0 && (
                      <button
                        onClick={handleClearAll}
                        className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors cursor-pointer"
                        title="Limpar todos os leads"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

              </div>

              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar por nome, e-mail ou WhatsApp..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500"
                  />
                </div>

                <span className="text-xs text-gray-400">
                  Exibindo <strong>{filteredLeads.length}</strong> de {leads.length} leads
                </span>
              </div>

              {/* Leads Table */}
              {filteredLeads.length === 0 ? (
                <div className="py-16 text-center space-y-3 bg-white/5 rounded-2xl border border-white/5">
                  <BarChart3 className="w-10 h-10 text-gray-500 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Nenhum diagnóstico registrado ainda</h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    Assim que algum cliente responder as 5 perguntas na landing page, as respostas aparecerão aqui em tempo real.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#080c19]">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-gray-400 font-bold uppercase text-[10px] tracking-wider">
                        <th className="p-3.5">Data</th>
                        <th className="p-3.5">Cliente</th>
                        <th className="p-3.5">WhatsApp</th>
                        <th className="p-3.5">Segmento</th>
                        <th className="p-3.5">Faturamento</th>
                        <th className="p-3.5">Investimento</th>
                        <th className="p-3.5 text-right">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredLeads.map((lead, idx) => {
                        const cleanNum = lead.telefone ? lead.telefone.replace(/\D/g, '') : '';

                        return (
                          <tr key={lead.id || idx} className="hover:bg-white/5 transition-colors">
                            <td className="p-3.5 text-gray-400 font-mono text-[11px] whitespace-nowrap">
                              {lead.date || 'Recente'}
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
                                onClick={() => setSelectedLead(lead)}
                                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors mr-2 cursor-pointer"
                              >
                                Detalhes
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

        {/* Lead Details Modal Overlay */}
        {selectedLead && (
          <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#0e1529] border border-white/20 rounded-3xl p-6 max-w-lg w-full space-y-4 relative shadow-2xl">
              <button
                onClick={() => setSelectedLead(null)}
                className="absolute top-4 right-4 p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">
                Respostas do Diagnóstico — {selectedLead.nome}
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 space-y-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Contato</span>
                  <div className="text-white font-bold">{selectedLead.nome}</div>
                  <div className="text-gray-300">{selectedLead.email}</div>
                  <div className="text-orange-400 font-mono">{selectedLead.telefone}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between border-b border-white/5 py-1.5">
                    <span className="text-gray-400">Segmento:</span>
                    <span className="text-white font-semibold">{selectedLead.segment}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1.5">
                    <span className="text-gray-400">Faturamento Mensal:</span>
                    <span className="text-white font-semibold">{selectedLead.revenue}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1.5">
                    <span className="text-gray-400">Verba p/ Anúncios:</span>
                    <span className="text-orange-400 font-semibold">{selectedLead.budget}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1.5">
                    <span className="text-gray-400">Origem Atual dos Clientes:</span>
                    <span className="text-white font-semibold">{selectedLead.source}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-400">Objetivo 90 Dias:</span>
                    <span className="text-white font-semibold">{selectedLead.serviceGoal}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

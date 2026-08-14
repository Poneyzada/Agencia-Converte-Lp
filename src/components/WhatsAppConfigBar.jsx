import React, { useState } from 'react';
import { PhoneCall, Edit2, Check, X } from 'lucide-react';

export default function WhatsAppConfigBar({ whatsappNumber, onUpdateWhatsApp }) {
  const [editing, setEditing] = useState(false);
  const [inputVal, setInputVal] = useState(whatsappNumber);

  const handleSave = (e) => {
    e.preventDefault();
    const clean = inputVal.replace(/\D/g, '');
    if (clean.length >= 10) {
      onUpdateWhatsApp(clean);
      setEditing(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-950/90 via-slate-900 to-amber-950/90 text-white text-xs py-2 px-4 border-b border-orange-500/20 backdrop-blur-md relative z-50 flex items-center justify-between">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2">
        
        <div className="flex items-center gap-2 text-orange-300 font-medium">
          <PhoneCall className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
          <span>
            Destino WhatsApp do Diagnóstico: <strong className="text-white font-mono">+{whatsappNumber}</strong>
          </span>
        </div>

        {editing ? (
          <form onSubmit={handleSave} className="flex items-center gap-2">
            <input 
              type="text"
              placeholder="Ex: 5511999999999"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="px-2.5 py-1 rounded bg-black/60 border border-orange-500/40 text-xs font-mono text-white focus:outline-none"
            />
            <button 
              type="submit"
              className="px-2.5 py-1 rounded bg-orange-500 text-white font-bold text-xs flex items-center gap-1 hover:bg-orange-400 cursor-pointer"
            >
              <Check className="w-3 h-3" />
              <span>Salvar</span>
            </button>
            <button 
              type="button"
              onClick={() => setEditing(false)}
              className="p-1 text-gray-400 hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          </form>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="inline-flex items-center gap-1.5 text-[11px] text-orange-400 hover:text-white underline cursor-pointer transition-colors"
          >
            <Edit2 className="w-3 h-3" />
            <span>Alterar número de destino</span>
          </button>
        )}

      </div>
    </div>
  );
}

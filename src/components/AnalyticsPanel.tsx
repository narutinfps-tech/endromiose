import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, ShieldCheck, HelpCircle, Activity } from 'lucide-react';

interface AnalyticsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnalyticsPanel({ isOpen, onClose }: AnalyticsPanelProps) {
  const [pixelId, setPixelId] = useState(localStorage.getItem('meta_pixel_id') || '');
  const [gaId, setGaId] = useState(localStorage.getItem('ga_measurement_id') || '');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('meta_pixel_id', pixelId);
    localStorage.setItem('ga_measurement_id', gaId);
    setIsSaved(true);
    
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="analytics-panel-overlay" className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/60 backdrop-blur-3xs"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-md h-full bg-white shadow-2xl z-10 border-l border-brand-beige flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 bg-brand-forest text-white flex items-center justify-between">
              <div>
                <h3 className="font-sans font-bold text-lg text-brand-cream flex items-center gap-2">
                  <Activity size={18} className="text-brand-gold animate-pulse" />
                  Configuração de Rastreamento
                </h3>
                <p className="text-[11px] text-brand-cream/80">
                  Integração para conversões de tráfego pago
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white bg-white/10 p-1.5 rounded-full transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Fields Form */}
            <form onSubmit={handleSave} className="p-6 flex-1 space-y-6 overflow-y-auto">
              <div className="space-y-4">
                <div className="p-4 bg-brand-cream/50 rounded-xl border border-brand-beige text-xs text-brand-dark space-y-2">
                  <p className="font-bold flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-brand-sage" />
                    Espaço reservado para pixels e scripts:
                  </p>
                  <p className="text-brand-gray leading-relaxed">
                    Insira seus identificadores oficiais abaixo para simular a captação de visualizações e de cliques nos botões de checkout (AddToCart/Purchase).
                  </p>
                </div>

                {/* Meta Pixel Field */}
                <div className="space-y-1.5">
                  <label htmlFor="meta-pixel-id" className="text-xs font-bold text-brand-dark uppercase tracking-wider block">
                    ID do Pixel da Meta (Facebook)
                  </label>
                  <input
                    type="text"
                    id="meta-pixel-id"
                    value={pixelId}
                    onChange={(e) => setPixelId(e.target.value)}
                    placeholder="Ex: 123456789012345"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-sage text-sm font-mono"
                  />
                  <span className="text-[10px] text-brand-gray block leading-relaxed">
                    Simula os eventos <code className="bg-gray-100 px-1 py-0.5 rounded text-brand-wine font-semibold">fbq('track', 'PageView')</code> e <code className="bg-gray-100 px-1 py-0.5 rounded text-brand-wine font-semibold">InitiateCheckout</code>.
                  </span>
                </div>

                {/* Google Analytics Field */}
                <div className="space-y-1.5 pt-2">
                  <label htmlFor="ga-measurement-id" className="text-xs font-bold text-brand-dark uppercase tracking-wider block">
                    ID de Medição Google Analytics (GA4)
                  </label>
                  <input
                    type="text"
                    id="ga-measurement-id"
                    value={gaId}
                    onChange={(e) => setGaId(e.target.value)}
                    placeholder="Ex: G-XXXXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-sage text-sm font-mono"
                  />
                  <span className="text-[10px] text-brand-gray block leading-relaxed">
                    Simula tags de monitoramento e rastreamento de tráfego do Google Tag Manager.
                  </span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-4 bg-brand-gold/10 rounded-xl border border-brand-gold/20 flex gap-2.5 items-start">
                <HelpCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <div className="text-[11px] text-brand-dark leading-relaxed">
                  <p className="font-bold">Como funciona no código real?</p>
                  <p className="text-brand-gray mt-0.5">
                    Esses IDs carregam os scripts correspondentes no cabeçalho <code className="font-mono bg-white/40 p-0.5 rounded">&lt;head&gt;</code> e disparam eventos automáticos quando os visitantes completam a compra dos planos.
                  </p>
                </div>
              </div>
            </form>

            {/* Footer buttons */}
            <div className="p-6 border-t border-brand-beige bg-brand-cream/20 space-y-3">
              <AnimatePresence>
                {isSaved && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-2.5 bg-brand-sage/20 border border-brand-sage text-brand-forest rounded-lg text-xs font-bold text-center"
                  >
                    ✓ Identificadores salvos com sucesso!
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                id="save-analytics-btn"
                onClick={handleSave}
                className="w-full py-3 bg-brand-wine hover:bg-brand-wine/90 text-white font-sans font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Save size={15} />
                Salvar Configurações
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, CreditCard, Shield, Lock, Landmark, Sparkles, Smartphone, Download, BookOpen } from 'lucide-react';
import { Plan } from '../types';

interface InteractiveCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

export default function InteractiveCheckoutModal({ isOpen, onClose, plan }: InteractiveCheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!plan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    
    // Simulate payment gateway delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setEmail('');
    setName('');
    setCardNumber('');
    setCardExpiry('');
    setCardCvv('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="checkout-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl z-10 border border-brand-beige"
          >
            {/* Header */}
            <div className="bg-brand-forest text-white p-6 relative">
              <button 
                id="close-checkout-btn"
                onClick={onClose}
                className="absolute top-4 right-4 text-brand-cream/80 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-brand-sage/40 text-brand-cream text-xs px-2.5 py-1 rounded-full font-semibold border border-brand-sage/20">
                  Ambiente Seguro
                </span>
                {plan.badge && (
                  <span className="bg-brand-gold text-brand-dark text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                    {plan.badge}
                  </span>
                )}
              </div>
              <h3 className="font-sans font-bold text-xl md:text-2xl mt-2 text-brand-cream">
                Checkout Seguro • {plan.title}
              </h3>
              <p className="text-brand-cream/80 text-sm mt-1">
                Acesso imediato após confirmação
              </p>
            </div>

            {/* Content Area */}
            <div className="p-6 overflow-y-auto max-h-[75vh]">
              {!isSuccess ? (
                <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Summary Box */}
                  <div className="bg-brand-cream/50 p-4 rounded-xl border border-brand-beige flex justify-between items-center">
                    <div>
                      <p className="text-xs text-brand-gray font-medium uppercase tracking-wider">Item Selecionado</p>
                      <p className="font-sans font-bold text-brand-dark text-base">{plan.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-brand-gray font-medium">Pagamento Único</p>
                      <p className="font-sans font-bold text-brand-wine text-xl">{plan.price}</p>
                    </div>
                  </div>

                  {/* Payment Selection Toggles */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      id="pay-pix-tab"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                        paymentMethod === 'pix'
                          ? 'border-brand-sage bg-brand-cream/30 text-brand-forest shadow-xs'
                          : 'border-gray-200 hover:border-brand-beige text-brand-gray'
                      }`}
                    >
                      <Landmark size={20} className={paymentMethod === 'pix' ? 'text-brand-sage' : ''} />
                      <span className="font-sans font-semibold text-xs">PIX (Imediato)</span>
                    </button>
                    <button
                      type="button"
                      id="pay-card-tab"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                        paymentMethod === 'card'
                          ? 'border-brand-sage bg-brand-cream/30 text-brand-forest shadow-xs'
                          : 'border-gray-200 hover:border-brand-beige text-brand-gray'
                      }`}
                    >
                      <CreditCard size={20} className={paymentMethod === 'card' ? 'text-brand-sage' : ''} />
                      <span className="font-sans font-semibold text-xs">Cartão de Crédito</span>
                    </button>
                  </div>

                  {/* Customer Information */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-sans font-semibold text-xs text-brand-dark uppercase tracking-wider">
                      Dados de Faturamento e Acesso
                    </h4>
                    <div>
                      <label htmlFor="checkout-name" className="block text-xs text-brand-dark font-medium mb-1">
                        Seu Nome Completo
                      </label>
                      <input
                        type="text"
                        id="checkout-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Gabriela Mendes"
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-sage text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-email" className="block text-xs text-brand-dark font-medium mb-1">
                        Seu Melhor E-mail (Onde você receberá o material)
                      </label>
                      <input
                        type="email"
                        id="checkout-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: seuemail@exemplo.com"
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-sage text-sm"
                      />
                      <span className="text-[10px] text-brand-gray block mt-1">
                        Verifique o e-mail digitado para garantir a entrega imediata.
                      </span>
                    </div>
                  </div>

                  {/* Payment Details Container */}
                  <AnimatePresence mode="wait">
                    {paymentMethod === 'pix' ? (
                      <motion.div
                        key="pix-details"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="bg-brand-cream/40 p-4 rounded-xl border border-brand-beige space-y-2.5"
                      >
                        <p className="text-xs text-brand-dark font-medium flex items-center gap-2">
                          <Check size={14} className="text-brand-sage" />
                          Liberação imediata do acesso por e-mail
                        </p>
                        <p className="text-xs text-brand-dark font-medium flex items-center gap-2">
                          <Check size={14} className="text-brand-sage" />
                          QR Code e Código "Copia e Cola" gerados na próxima etapa
                        </p>
                        <p className="text-xs text-brand-dark font-medium flex items-center gap-2">
                          <Check size={14} className="text-brand-sage" />
                          Sem juros ou custos extras de processamento
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="card-details"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-3 bg-brand-cream/20 p-4 rounded-xl border border-brand-beige"
                      >
                        <div>
                          <label className="block text-xs text-brand-dark font-medium mb-1">
                            Número do Cartão
                          </label>
                          <input
                            type="text"
                            required
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').substring(0, 16))}
                            placeholder="0000 0000 0000 0000"
                            className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-sage text-sm font-mono"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-brand-dark font-medium mb-1">
                              Validade (MM/AA)
                            </label>
                            <input
                              type="text"
                              required
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value.substring(0, 5))}
                              placeholder="12/30"
                              className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-sage text-sm font-mono"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-brand-dark font-medium mb-1">
                              CVC (Código)
                            </label>
                            <input
                              type="text"
                              required
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').substring(0, 4))}
                              placeholder="123"
                              className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-sage text-sm font-mono"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-payment-btn"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-brand-wine hover:bg-brand-wine/90 text-white font-sans font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processando sua compra...</span>
                      </>
                    ) : (
                      <>
                        <Lock size={16} />
                        <span>FINALIZAR COMPRA COMPROVADA</span>
                      </>
                    )}
                  </button>

                  {/* Footnote */}
                  <div className="flex items-center justify-center gap-4 text-[10px] text-brand-gray pt-2 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Shield size={12} className="text-brand-sage" />
                      Dados Criptografados
                    </span>
                    <span>•</span>
                    <span>Garantia Legal de 7 Dias</span>
                    <span>•</span>
                    <span>Pagamento Único</span>
                  </div>
                </form>
              ) : (
                /* Success Presentation with Delivery Simulation */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-5"
                >
                  <div className="w-16 h-16 bg-brand-sage/20 text-brand-forest rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sparkles size={36} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-2xl text-brand-forest">
                      Parabéns, {name || 'Inscrita'}!
                    </h4>
                    <p className="text-sm text-brand-gray mt-1 max-w-sm mx-auto">
                      Sua compra do <strong>{plan.title}</strong> foi processada com absoluto sucesso.
                    </p>
                  </div>

                  {paymentMethod === 'pix' && (
                    <div className="bg-brand-cream p-4 rounded-xl border border-brand-beige space-y-3 inline-block w-full max-w-sm text-left">
                      <p className="text-xs font-semibold text-brand-dark text-center mb-1">
                        Código PIX Copia e Cola Gerado (Simulado)
                      </p>
                      <div className="bg-white p-2.5 rounded border border-gray-200 text-center font-mono text-[10px] select-all break-all text-brand-forest font-semibold cursor-pointer select-none">
                        00020101021226830014br.gov.bcb.pix0136ciclo-leve-receitas-pix-key-sample-hash520400005303986540510.005802BR5910CICLO_LEVE6009SAO_PAULO62070503***6304D12B
                      </div>
                      <p className="text-[10px] text-brand-gray text-center leading-relaxed">
                        Ao pagar na sua conta bancária, o acesso ao e-book e aos bônus será enviado em até 2 minutos para o e-mail: <strong className="text-brand-dark">{email}</strong>.
                      </p>
                    </div>
                  )}

                  <div className="bg-brand-sage/10 p-5 rounded-xl border border-brand-sage/20 text-left space-y-3">
                    <p className="text-xs font-bold text-brand-forest uppercase tracking-wider flex items-center gap-1.5">
                      <Smartphone size={15} />
                      Acesso Imediato Liberado no Painel
                    </p>
                    <p className="text-xs text-brand-dark leading-relaxed">
                      Como você está testando nossa página em ambiente de desenvolvimento, liberamos o acesso direto para você conferir os materiais agora mesmo!
                    </p>
                    <div className="grid grid-cols-1 gap-2 pt-1.5">
                      <a
                        href="/assets/dummy_receitas.pdf"
                        download
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Download simulado: Livro Digital com 67 Receitas e Bônus Ciclo Leve em preparação!');
                        }}
                        className="flex items-center justify-between p-2.5 bg-brand-forest text-white rounded-lg text-xs font-semibold hover:bg-brand-forest/90 transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <BookOpen size={14} />
                          E-book Principal: 67 Receitas
                        </span>
                        <Download size={14} />
                      </a>
                      {plan.id === 'completo' && (
                        <div className="space-y-1.5 mt-1 border-t border-brand-sage/20 pt-2">
                          <p className="text-[10px] font-bold text-brand-sage uppercase">Seus Bônus inclusos:</p>
                          <button
                            onClick={() => alert('Download simulado: Bônus 1 - Plano Alimentar Organizado')}
                            className="w-full flex items-center justify-between p-2 bg-brand-cream text-brand-forest border border-brand-sage/30 rounded-lg text-xs font-semibold hover:bg-brand-beige transition-all"
                          >
                            <span>Bônus 1: Plano Alimentar</span>
                            <Download size={13} />
                          </button>
                          <button
                            onClick={() => alert('Download simulado: Bônus 2 - Saladas Leves')}
                            className="w-full flex items-center justify-between p-2 bg-brand-cream text-brand-forest border border-brand-sage/30 rounded-lg text-xs font-semibold hover:bg-brand-beige transition-all"
                          >
                            <span>Bônus 2: Saladas Leves</span>
                            <Download size={13} />
                          </button>
                          <button
                            onClick={() => alert('Download simulado: Bônus 3 - Sucos e Bebidas')}
                            className="w-full flex items-center justify-between p-2 bg-brand-cream text-brand-forest border border-brand-sage/30 rounded-lg text-xs font-semibold hover:bg-brand-beige transition-all"
                          >
                            <span>Bônus 3: Sucos Naturais</span>
                            <Download size={13} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-brand-forest hover:bg-brand-forest/90 text-brand-cream font-sans font-bold rounded-lg text-xs uppercase tracking-wide cursor-pointer transition-colors"
                  >
                    Voltar para a Página
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

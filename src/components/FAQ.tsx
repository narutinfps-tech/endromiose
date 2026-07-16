import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Tag } from 'lucide-react';
import { FAQS } from '../types';

interface FAQProps {
  onScrollToOffers: () => void;
}

export default function FAQ({ onScrollToOffers }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="w-10 h-10 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage mx-auto mb-2">
            <HelpCircle size={18} />
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto rounded-full" />
        </div>

        {/* Accordions Container */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-brand-beige/80 rounded-2xl overflow-hidden bg-brand-cream/10 hover:bg-brand-cream/30 transition-colors"
              >
                <button
                  type="button"
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-brand-dark pr-4">
                    {faq.question}
                  </span>
                  <div className="text-brand-sage shrink-0 bg-white p-1 rounded-full border border-brand-beige shadow-3xs">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="p-5 pt-0 border-t border-brand-beige/40">
                        <p className="font-sans font-regular text-xs sm:text-sm text-brand-gray leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Highlight Plan Prices and final CTA below */}
        <div className="mt-16 bg-brand-beige/35 border border-brand-beige p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto text-center space-y-6 shadow-3xs">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            
            <div className="space-y-1">
              <span className="text-[10px] text-brand-gray font-bold uppercase tracking-widest block">Acesso Básico</span>
              <p className="font-sans font-bold text-sm text-brand-dark flex items-center justify-center gap-1">
                <Tag size={13} className="text-brand-sage" />
                Plano Essencial: <strong className="text-brand-forest text-base">R$ 10,00</strong>
              </p>
            </div>

            <div className="w-px h-8 bg-brand-beige hidden sm:block" />

            <div className="space-y-1">
              <span className="text-[10px] text-brand-wine font-extrabold uppercase tracking-widest block">Melhor Oferta</span>
              <p className="font-sans font-bold text-sm text-brand-dark flex items-center justify-center gap-1">
                <Tag size={13} className="text-brand-wine" />
                Plano Completo: <strong className="text-brand-wine text-base">R$ 19,90</strong>
              </p>
            </div>

          </div>

          <button
            id="faq-cta-btn"
            onClick={onScrollToOffers}
            className="w-full py-4 bg-brand-forest hover:bg-brand-forest/90 text-brand-cream font-sans font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm active:scale-[0.98] cursor-pointer"
          >
            VER AS OPÇÕES DE ACESSO
          </button>
        </div>

      </div>
    </section>
  );
}

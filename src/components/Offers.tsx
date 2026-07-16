import { motion } from 'motion/react';
import { Check, Shield, Award, Sparkles, Zap } from 'lucide-react';
import { Plan, PLANS } from '../types';

interface OffersProps {
  onSelectPlan: (plan: Plan) => void;
}

export default function Offers({ onSelectPlan }: OffersProps) {
  return (
    <section id="offers-section" className="py-20 md:py-28 bg-brand-forest text-white relative overflow-hidden">
      {/* Visual background details to lift up premium tone */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-sage/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-brand-cream tracking-tight leading-tight">
            Escolha a melhor opção para você
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="font-sans font-regular text-brand-cream/80 text-base">
            Pagamento único, acesso digital e garantia de 7 dias.
          </p>
        </div>

        {/* Two Plans Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1 — Plano Essencial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-brand-dark rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-brand-sage/40 shadow-md flex flex-col justify-between space-y-8 relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-5 text-center flex flex-col items-center">
                <h3 className="font-sans font-bold text-xl md:text-2xl text-brand-forest">
                  Plano Essencial
                </h3>
                <div className="flex items-baseline justify-center gap-1 mt-3">
                  <span className="font-sans font-bold text-4xl text-brand-dark tracking-tight">R$ 10,00</span>
                  <span className="text-xs text-brand-gray font-semibold">/ pagamento único</span>
                </div>
              </div>
 
              {/* Feature list */}
              <ul className="space-y-3.5">
                {PLANS[0].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0 mt-0.5">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span className="font-sans font-medium text-brand-dark/90 leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
 
            {/* Action button */}
            <div className="space-y-3">
              <a
                id="select-essencial-btn"
                href="https://pay.wiapy.com/KjHjXNzqRSrv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 bg-brand-forest hover:bg-brand-forest/95 text-brand-cream font-sans font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm active:scale-[0.98] cursor-pointer text-center"
              >
                QUERO O PLANO ESSENCIAL
              </a>
              <p className="text-[10px] text-center text-brand-gray font-medium">
                Liberação imediata pós confirmação
              </p>
            </div>
          </motion.div>
 
          {/* Card 2 — Plano Completo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-brand-cream text-brand-dark rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-brand-gold shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden"
          >
            {/* Top gold badge overlay */}
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark font-sans font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
              <Sparkles size={11} />
              <span>MAIS ESCOLHIDO</span>
            </div>
 
            <div className="space-y-6">
              <div className="border-b border-brand-beige pb-5 text-center flex flex-col items-center">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-sans font-bold text-xl md:text-2xl text-brand-wine">
                    Plano Completo
                  </h3>
                  <span className="bg-brand-wine/10 text-brand-wine text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Zap size={10} /> Melhores Bônus
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1 mt-3">
                  <span className="font-sans font-bold text-4xl text-brand-dark tracking-tight">R$ 19,90</span>
                  <span className="text-xs text-brand-gray font-semibold">/ pagamento único</span>
                </div>
              </div>
 
              {/* Feature list */}
              <ul className="space-y-3.5">
                {PLANS[1].features.map((feature, idx) => {
                  const isSpecial = feature.includes('Bônus') || feature.includes('bônus') || feature.includes('Saladas') || feature.includes('Sucos') || feature.includes('Plano Alimentar');
                  return (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isSpecial ? 'bg-brand-wine/15 text-brand-wine' : 'bg-brand-sage/10 text-brand-sage'
                      }`}>
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className={`font-sans font-medium leading-tight ${
                        isSpecial ? 'text-brand-wine font-bold' : 'text-brand-dark/90'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
 
              {/* High value note */}
              <div className="p-3.5 bg-brand-wine/5 rounded-xl border border-brand-wine/15">
                <p className="text-xs text-brand-wine font-bold text-center">
                  Leve todos os materiais por apenas R$ 9,90 a mais.
                </p>
              </div>
            </div>
 
            {/* Action button */}
            <div className="space-y-3">
              <a
                id="select-completo-btn"
                href="https://pay.wiapy.com/zIOTpYCIGnU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 bg-brand-wine hover:bg-brand-wine/95 text-white font-sans font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-[0.98] cursor-pointer text-center"
              >
                QUERO O PLANO COMPLETO
              </a>
              <p className="text-[10px] text-center text-brand-gray font-medium">
                Garantia Incondicional de 7 Dias inclusa
              </p>
            </div>
          </motion.div>

        </div>

        {/* Security / Quality bar */}
        <div className="mt-16 text-center border-t border-brand-sage/20 pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-brand-cream/70">
          <span className="flex items-center gap-1.5">
            <Shield size={14} className="text-brand-gold" />
            Compra protegida
          </span>
          <span className="text-brand-sage/40">•</span>
          <span className="flex items-center gap-1.5">
            <Award size={14} className="text-brand-gold" />
            Pagamento único
          </span>
          <span className="text-brand-sage/40">•</span>
          <span>Sem mensalidade</span>
        </div>

      </div>
    </section>
  );
}

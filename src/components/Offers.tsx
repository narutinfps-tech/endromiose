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
            className="bg-white text-brand-dark rounded-3xl p-8 md:p-10 border border-brand-beige shadow-[0_15px_45px_rgba(40,45,41,0.06)] hover:shadow-[0_20px_50px_rgba(40,45,41,0.1)] transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:-translate-y-1"
          >
            {/* Elegant visual line on top */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-sage/40" />

            <div className="space-y-8">
              <div className="text-center flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-widest text-brand-sage font-extrabold bg-brand-sage/10 px-3 py-1 rounded-full mb-3">
                  ACESSO BÁSICO
                </span>
                <h3 className="font-sans font-bold text-2xl text-brand-forest">
                  Plano Essencial
                </h3>
                <p className="text-xs text-brand-gray mt-1">Guia de receitas completo</p>
                
                <div className="mt-6 flex flex-col items-center">
                  <span className="text-[11px] text-brand-gray line-through font-medium">De R$ 49,90</span>
                  <div className="flex items-start justify-center mt-1">
                    <span className="font-sans font-bold text-2xl text-brand-forest/80 mt-1.5 mr-1">R$</span>
                    <span className="font-sans font-extrabold text-6xl text-brand-dark tracking-tight leading-none">10</span>
                    <div className="flex flex-col items-start ml-1">
                      <span className="font-sans font-extrabold text-2xl text-brand-dark">,00</span>
                      <span className="text-[9px] text-brand-gray font-semibold uppercase tracking-wider">Único</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-beige/50 my-2" />
 
              {/* Feature list */}
              <ul className="space-y-4">
                {PLANS[0].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0 mt-0.5 shadow-3xs">
                      <Check size={11} className="stroke-[3]" />
                    </div>
                    <span className="font-sans font-medium text-brand-dark/90 leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
 
            {/* Action button */}
            <div className="space-y-3 pt-4">
              <a
                id="select-essencial-btn"
                href="https://pay.wiapy.com/KjHjXNzqRSrv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 bg-brand-forest hover:bg-brand-forest/95 text-brand-cream font-sans font-extrabold rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-brand-forest/20 hover:shadow-lg active:scale-[0.98] cursor-pointer text-center"
              >
                QUERO O PLANO ESSENCIAL
              </a>
              <p className="text-[10px] text-center text-brand-gray font-semibold tracking-wide flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-sage animate-pulse"></span>
                Acesso imediato e vitalício
              </p>
            </div>
          </motion.div>
 
          {/* Card 2 — Plano Completo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-brand-cream text-brand-dark rounded-3xl p-8 md:p-10 border-2 border-brand-gold shadow-[0_20px_50px_rgba(201,154,78,0.15)] hover:shadow-[0_25px_60px_rgba(201,154,78,0.25)] transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:-translate-y-1"
          >
            {/* Top gold badge overlay */}
            <div className="absolute top-0 right-0 bg-brand-gold text-white font-sans font-extrabold text-[10px] uppercase tracking-widest px-5 py-2 rounded-bl-2xl flex items-center gap-1.5 shadow-sm">
              <Sparkles size={11} className="animate-pulse" />
              <span>MAIS RECOMENDADO</span>
            </div>
 
            <div className="space-y-8">
              <div className="text-center flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-widest text-brand-wine font-extrabold bg-brand-wine/10 px-3 py-1 rounded-full mb-3 mt-2">
                  COMBO COMPLETO + BÔNUS
                </span>
                <div className="flex items-center gap-1.5 justify-center">
                  <h3 className="font-sans font-bold text-2xl text-brand-wine">
                    Plano Completo
                  </h3>
                  <span className="bg-brand-gold/20 text-brand-gold text-[8px] font-black uppercase px-2 py-0.5 rounded-sm flex items-center gap-1">
                    <Zap size={8} /> VIP
                  </span>
                </div>
                <p className="text-xs text-brand-gray mt-1">Guia + Todos os Bônus Exclusivos</p>
                
                <div className="mt-6 flex flex-col items-center">
                  <span className="text-[11px] text-brand-gray line-through font-medium">De R$ 97,00</span>
                  <div className="flex items-start justify-center mt-1">
                    <span className="font-sans font-bold text-2xl text-brand-wine mt-1.5 mr-1">R$</span>
                    <span className="font-sans font-extrabold text-6xl text-brand-wine tracking-tight leading-none">19</span>
                    <div className="flex flex-col items-start ml-1">
                      <span className="font-sans font-extrabold text-2xl text-brand-wine">,90</span>
                      <span className="text-[9px] text-brand-wine/80 font-semibold uppercase tracking-wider">Único</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-beige my-2" />
 
              {/* Feature list */}
              <ul className="space-y-4">
                {PLANS[1].features.map((feature, idx) => {
                  const isSpecial = feature.includes('Bônus') || feature.includes('bônus') || feature.includes('Saladas') || feature.includes('Sucos') || feature.includes('Plano Alimentar');
                  return (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-3xs ${
                        isSpecial ? 'bg-brand-wine/15 text-brand-wine' : 'bg-brand-sage/10 text-brand-sage'
                      }`}>
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span className={`font-sans font-medium leading-tight ${
                        isSpecial ? 'text-brand-wine font-extrabold' : 'text-brand-dark/90'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
 
              {/* High value note */}
              <div className="p-4 bg-brand-wine/[0.04] rounded-2xl border border-brand-wine/10 text-center">
                <p className="text-xs text-brand-wine font-bold leading-relaxed">
                  ✨ Leve os 4 Materiais de Suporte inclusos por apenas R$ 9,90 adicionais.
                </p>
              </div>
            </div>
 
            {/* Action button */}
            <div className="space-y-3 pt-4">
              <a
                id="select-completo-btn"
                href="https://pay.wiapy.com/zIOTpYCIGnU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 bg-brand-wine hover:bg-brand-wine/95 text-white font-sans font-extrabold rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-brand-wine/30 active:scale-[0.98] cursor-pointer text-center"
              >
                QUERO O PLANO COMPLETO
              </a>
              <p className="text-[10px] text-center text-brand-wine/80 font-semibold tracking-wide flex items-center justify-center gap-1">
                <Shield size={11} className="text-brand-gold" />
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

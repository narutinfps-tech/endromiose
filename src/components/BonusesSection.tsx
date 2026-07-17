import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Gift, Calendar, Leaf, Coffee, Check, Flame } from 'lucide-react';
import { BONUSES } from '../types';

interface BonusesSectionProps {
  bonusesImg: string;
}

const bonusIcons: { [key: number]: ReactNode } = {
  0: <Calendar className="text-brand-gold" size={24} />,
  1: <Leaf className="text-brand-gold" size={24} />,
  2: <Coffee className="text-brand-gold" size={24} />
};

export default function BonusesSection({ bonusesImg }: BonusesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full font-sans font-bold text-xs uppercase tracking-wider"
          >
            <Gift size={14} />
            <span>Materiais Adicionais Inclusos</span>
          </motion.div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
            No Plano Completo, você recebe 3 bônus especiais
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="font-sans font-regular text-brand-gray text-base leading-relaxed">
            Além das 67 receitas, você poderá levar materiais extras para facilitar ainda mais sua organização.
          </p>
        </div>

        {/* 3 Staggered Horizontal Cards or Big Blocks */}
        <div className="space-y-8 lg:space-y-12 max-w-5xl mx-auto">
          {BONUSES.map((bonus, idx) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-white rounded-2xl border border-brand-beige overflow-hidden shadow-sm flex flex-col md:flex-row ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Cover / Image column with perfect responsive container */}
              <div className="md:w-2/5 bg-brand-beige/25 flex items-center justify-center p-6 sm:p-8 relative min-h-[250px] sm:min-h-[300px] md:min-h-[340px] border-b md:border-b-0 border-brand-beige/40">
                <div className="w-full h-full max-h-[240px] sm:max-h-[280px] md:max-h-[300px] flex items-center justify-center">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain drop-shadow-2xl hover:scale-103 transition-transform duration-500 rounded-lg"
                  />
                </div>
                
                {/* Float Badge */}
                <div className="absolute top-4 left-4 bg-brand-wine text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Flame size={11} className="animate-pulse" />
                  <span>Bônus Especial</span>
                </div>
              </div>

              {/* Text content column */}
              <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center">
                      {bonusIcons[idx] || <Gift className="text-brand-gold" size={20} />}
                    </div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-brand-dark tracking-tight">
                      {bonus.title}
                    </h3>
                  </div>
                  
                  <p className="font-sans font-regular text-brand-gray text-xs sm:text-sm leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                {/* Benefits Bullet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-brand-cream/30 p-4 rounded-xl border border-brand-beige/50">
                  {bonus.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="font-sans font-semibold text-xs text-brand-dark">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing banner inside the card */}
                <div className="flex items-center justify-between pt-2 border-t border-brand-beige/40">
                  <div>
                    <span className="text-[10px] text-brand-gray font-bold uppercase tracking-wider block">Valor se comprado avulso:</span>
                    <span className="text-sm text-brand-gray/80 line-through font-bold">{bonus.value}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-brand-gold font-extrabold uppercase tracking-widest block">Incluso no plano</span>
                    <span className="font-sans font-bold text-base sm:text-lg text-brand-wine">COMPLETO POR APENAS R$ 19,90</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-brand-beige text-brand-forest font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-brand-gold/30 shadow-2xs">
            ✨ Os três bônus estão disponíveis exclusivamente no <strong className="text-brand-wine underline">Plano Completo de R$ 19,90</strong>.
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Layers, ShieldCheck, HelpCircle, CheckCircle2 } from 'lucide-react';
import { CHOOSE_US_BENEFITS } from '../types';

const benefitIcons: { [key: string]: ReactNode } = {
  'choose-1': <Sparkles className="text-brand-terracotta" size={20} />,
  'choose-2': <Compass className="text-brand-terracotta" size={20} />,
  'choose-3': <Layers className="text-brand-terracotta" size={20} />,
  'choose-4': <ShieldCheck className="text-brand-terracotta" size={20} />,
  'choose-5': <CheckCircle2 className="text-brand-terracotta" size={20} />,
  'choose-6': <HelpCircle className="text-brand-terracotta" size={20} />
};

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-brand-beige/50 relative overflow-hidden">
      {/* Botanical watercolor effect/shapes background */}
      <div className="absolute top-[-5%] right-[-10%] w-[30%] h-[30%] rounded-full bg-brand-sage/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-gold/15 blur-3xl pointer-events-none" />

      {/* Decorative leafy vectors inside borders */}
      <div className="absolute top-10 left-10 text-brand-sage/10 hidden md:block select-none pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,80 Q30,40 80,10 Q60,40 10,80 Z" />
          <path d="M20,65 Q35,50 50,30" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
            Por que escolher o Ciclo Leve?
          </h2>
          <div className="w-16 h-1 bg-brand-terracotta mx-auto rounded-full" />
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {CHOOSE_US_BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-beige shadow-3xs flex gap-4 items-start"
            >
              {/* Icon container */}
              <div className="w-10 h-10 rounded-xl bg-brand-terracotta/10 flex items-center justify-center shrink-0">
                {benefitIcons[benefit.id] || <Sparkles className="text-brand-terracotta" />}
              </div>

              <div className="space-y-1.5">
                <h3 className="font-sans font-bold text-base sm:text-lg text-brand-dark">
                  {benefit.title}
                </h3>
                <p className="font-sans font-regular text-brand-gray text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centralized Statement Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-brand-forest text-brand-cream p-8 rounded-2xl text-center shadow-lg border border-brand-gold/30 relative"
        >
          {/* Subtle gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold rounded-t-2xl" />
          
          <p className="font-sans font-bold text-lg sm:text-2xl leading-relaxed italic">
            "Mais variedade nas refeições, menos tempo procurando o que preparar."
          </p>
        </motion.div>

      </div>
    </section>
  );
}

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Coffee, Utensils, Grape, ListTodo, Smartphone } from 'lucide-react';
import { RECIPE_CATEGORIES_CARDS } from '../types';

interface ReceivingProps {
  bannerImg: string;
}

// Map IDs to specific lucide icons for premium styling
const iconMap: { [key: string]: ReactNode } = {
  'card-1': <BookOpen className="text-brand-sage" size={24} />,
  'card-2': <Coffee className="text-brand-sage" size={24} />,
  'card-3': <Utensils className="text-brand-sage" size={24} />,
  'card-4': <Grape className="text-brand-sage" size={24} />,
  'card-5': <ListTodo className="text-brand-sage" size={24} />,
  'card-6': <Smartphone className="text-brand-sage" size={24} />
};

export default function Receiving({ bannerImg }: ReceivingProps) {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
            Tudo organizado para facilitar suas refeições
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto rounded-full" />
          <p className="font-sans font-regular text-brand-gray text-base sm:text-lg leading-relaxed">
            O Ciclo Leve reúne receitas e materiais práticos para que você não precise passar horas procurando o que preparar todos os dias.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RECIPE_CATEGORIES_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-brand-cream/40 p-6 sm:p-8 rounded-2xl border border-brand-beige/60 hover:border-brand-sage/40 transition-all hover:shadow-md flex flex-col items-center text-center"
            >
              {/* Icon Bubble */}
              <div className="w-12 h-12 rounded-xl bg-brand-beige/50 flex items-center justify-center mb-5 shrink-0 shadow-3xs">
                {iconMap[card.id] || <BookOpen className="text-brand-sage" />}
              </div>

              <h3 className="font-sans font-bold text-lg sm:text-xl text-brand-dark mb-2.5">
                {card.title}
              </h3>
              
              <p className="font-sans font-regular text-brand-gray text-xs sm:text-sm leading-relaxed max-w-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal banner image of colorful food */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 overflow-hidden rounded-3xl shadow-lg border border-brand-beige relative"
        >
          {/* Subtle overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent pointer-events-none" />
          <img
            src={bannerImg}
            alt="Refeições coloridas saudáveis organizadas"
            referrerPolicy="no-referrer"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover hover:scale-101 transition-transform duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
}

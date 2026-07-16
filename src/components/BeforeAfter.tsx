import { motion } from 'motion/react';
import { MinusCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BEFORE_LIST, AFTER_LIST } from '../types';

export default function BeforeAfter() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
            Veja como o Ciclo Leve pode facilitar sua rotina
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto rounded-full" />
        </div>

        {/* Before and After Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Column Left: Antes do Ciclo Leve */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF6EF]/60 rounded-2xl p-6 sm:p-8 border border-brand-beige/50 space-y-6"
          >
            <div className="flex items-center gap-2.5 border-b border-brand-beige pb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-wine/60" />
              <h3 className="font-sans font-bold text-lg sm:text-xl text-brand-wine">
                Antes do Ciclo Leve
              </h3>
            </div>

            <ul className="space-y-4">
              {BEFORE_LIST.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <MinusCircle size={16} className="text-brand-wine/70 shrink-0 mt-1" />
                  <span className="font-sans font-regular text-brand-dark text-sm sm:text-base leading-snug">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column Right: Depois do Ciclo Leve */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-brand-sage/5 rounded-2xl p-6 sm:p-8 border border-brand-sage/30 space-y-6 shadow-xs"
          >
            <div className="flex items-center gap-2.5 border-b border-brand-sage/20 pb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-sage animate-ping" />
              <h3 className="font-sans font-bold text-lg sm:text-xl text-brand-forest">
                Depois do Ciclo Leve
              </h3>
            </div>

            <ul className="space-y-4">
              {AFTER_LIST.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-brand-sage shrink-0 mt-1" />
                  <span className="font-sans font-semibold text-brand-dark text-sm sm:text-base leading-snug">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Small educational and result disclaimer box */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 bg-brand-cream/30 border border-brand-beige p-5 rounded-2xl flex items-start gap-3.5">
          <ShieldAlert size={20} className="text-brand-gray shrink-0 mt-0.5" />
          <p className="font-sans font-regular text-xs text-brand-gray leading-relaxed">
            O produto oferece receitas e materiais informativos. Experiências e resultados podem variar de pessoa para pessoa. Este e-book de culinária e organização tem caráter educativo e não substitui de forma alguma orientações, dietas individualizadas ou tratamentos prescritos por profissionais médicos, nutricionistas ou outros especialistas de saúde.
          </p>
        </div>

      </div>
    </section>
  );
}

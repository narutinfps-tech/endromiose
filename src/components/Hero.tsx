import { motion } from 'motion/react';
import { Check, Smartphone, Leaf, DollarSign, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToOffers: () => void;
}

export default function Hero({ onScrollToOffers }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-cream pt-12 pb-16 md:py-24">
      {/* Soft natural/botanical decorative shapes */}
      <div className="absolute top-10 left-[-5%] w-[35%] h-[35%] rounded-full bg-brand-beige/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-sage/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Small Elegant Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-beige text-brand-forest font-sans font-bold text-[11px] md:text-xs uppercase tracking-widest border border-brand-sage/20 shadow-2xs mx-auto"
          >
            <Sparkles size={12} className="text-brand-gold animate-spin-slow" />
            <span>RECEITAS PRÁTICAS PARA O DIA A DIA</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-brand-dark leading-[1.15]"
          >
            67 receitas práticas para mulheres que convivem com a endometriose
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-regular text-brand-gray text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Tenha novas ideias para cafés da manhã, almoços, jantares, lanches e sobremesas, utilizando receitas fáceis de consultar e ingredientes encontrados com facilidade.
          </motion.p>

          {/* Benefit Bullets (4 icons) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2.5 justify-center">
              <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0">
                <Check size={16} className="stroke-[3]" />
              </div>
              <span className="font-sans font-semibold text-xs md:text-sm text-brand-dark">Receitas práticas</span>
            </div>
            <div className="flex items-center gap-2.5 justify-center">
              <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0">
                <Leaf size={15} className="stroke-[2.5]" />
              </div>
              <span className="font-sans font-semibold text-xs md:text-sm text-brand-dark">Ingredientes acessíveis</span>
            </div>
            <div className="flex items-center gap-2.5 justify-center">
              <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0">
                <Smartphone size={15} className="stroke-[2.5]" />
              </div>
              <span className="font-sans font-semibold text-xs md:text-sm text-brand-dark">Acesso pelo celular</span>
            </div>
            <div className="flex items-center gap-2.5 justify-center">
              <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0">
                <DollarSign size={15} className="stroke-[2.5]" />
              </div>
              <span className="font-sans font-semibold text-xs md:text-sm text-brand-dark">Pagamento único</span>
            </div>
          </motion.div>

          {/* Price notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xs md:text-sm text-brand-forest/90 font-sans font-semibold pt-1 border-l-2 border-brand-sage pl-3 max-w-lg mx-auto text-center"
          >
            Escolha o Plano Essencial por R$ 10,00 ou leve o Kit Completo com 3 bônus por R$ 19,90.
          </motion.p>

          {/* CTA action */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2 space-y-4 max-w-md mx-auto"
          >
            <button
              id="hero-cta-btn"
              onClick={onScrollToOffers}
              className="w-full px-8 py-4 bg-brand-wine hover:bg-brand-wine/90 text-white font-sans font-bold text-sm rounded-xl uppercase tracking-wider shadow-md transition-all active:scale-[0.99] cursor-pointer text-center"
            >
              VER AS OPÇÕES DE ACESSO
            </button>
            <div className="text-[11px] text-brand-gray flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 pl-1">
              <span>✓ Compra segura</span>
              <span className="text-brand-sage">•</span>
              <span>✓ Acesso digital</span>
              <span className="text-brand-sage">•</span>
              <span>✓ Garantia de 7 dias</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

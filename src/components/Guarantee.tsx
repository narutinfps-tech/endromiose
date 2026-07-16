import { motion } from 'motion/react';
import { Shield, Clock, Landmark, ArrowUpRight } from 'lucide-react';

interface GuaranteeProps {
  onScrollToOffers: () => void;
}

export default function Guarantee({ onScrollToOffers }: GuaranteeProps) {
  return (
    <section className="py-16 md:py-24 bg-brand-sage text-white relative overflow-hidden">
      {/* Decorative botanical circles */}
      <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full bg-brand-forest/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] rounded-full bg-brand-cream/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Large badge/seal of guarantee */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-brand-cream text-brand-forest rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-brand-gold relative"
          >
            <div className="absolute inset-1 border border-dashed border-brand-sage rounded-full" />
            <span className="font-sans font-bold text-lg">7 dias</span>
          </motion.div>

          {/* Section titles */}
          <div className="space-y-4">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl tracking-tight text-brand-cream leading-tight">
              Sua compra está protegida por 7 dias
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
            <p className="font-sans font-regular text-brand-cream/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Você terá 7 dias para acessar e conhecer os materiais. Caso o conteúdo não atenda às suas expectativas, poderá solicitar o cancelamento dentro do prazo de garantia, conforme as regras da plataforma de pagamento.
            </p>
          </div>

          {/* Three specific small trust features with matching white borders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
            <div className="bg-brand-forest/20 px-5 py-4 rounded-xl border border-white/10 flex items-center gap-3 justify-center sm:justify-start">
              <Shield size={18} className="text-brand-gold shrink-0" />
              <span className="font-sans font-semibold text-xs uppercase tracking-wider">compra protegida</span>
            </div>
            <div className="bg-brand-forest/20 px-5 py-4 rounded-xl border border-white/10 flex items-center gap-3 justify-center sm:justify-start">
              <Clock size={18} className="text-brand-gold shrink-0" />
              <span className="font-sans font-semibold text-xs uppercase tracking-wider">garantia de 7 dias</span>
            </div>
            <div className="bg-brand-forest/20 px-5 py-4 rounded-xl border border-white/10 flex items-center gap-3 justify-center sm:justify-start">
              <Landmark size={18} className="text-brand-gold shrink-0" />
              <span className="font-sans font-semibold text-xs uppercase tracking-wider">pagamento único</span>
            </div>
          </div>

          {/* Action button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pt-6"
          >
            <button
              id="guarantee-cta-btn"
              onClick={onScrollToOffers}
              className="w-full sm:w-auto px-10 py-4 bg-brand-wine hover:bg-brand-wine/95 text-white font-sans font-bold rounded-xl text-xs uppercase tracking-widest shadow-md transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <span>ESCOLHER MEU PLANO</span>
              <ArrowUpRight size={15} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

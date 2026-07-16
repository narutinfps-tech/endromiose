import { motion } from 'motion/react';
import { Leaf, Award } from 'lucide-react';

interface HeaderProps {
  onScrollToOffers: () => void;
  onOpenSettings: () => void;
}

export default function Header({ onScrollToOffers, onOpenSettings }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-brand-cream/80 backdrop-blur-md border-b border-brand-beige/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Name Logo */}
        <div className="flex items-center gap-2">
          <Leaf className="text-brand-sage animate-pulse" size={20} />
          <h1 className="font-serif italic font-semibold text-2xl tracking-wide text-brand-forest">
            Ciclo Leve
          </h1>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <button
            id="header-settings-btn"
            onClick={onOpenSettings}
            className="p-2 text-brand-sage hover:text-brand-forest transition-colors rounded-full hover:bg-brand-beige/30"
            title="Configurar Pixels / Analytics"
          >
            <Award size={18} />
          </button>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onScrollToOffers}
            className="px-4 py-2 bg-brand-forest hover:bg-brand-forest/90 text-brand-cream font-sans font-bold text-xs rounded-full uppercase tracking-wider shadow-xs transition-colors cursor-pointer"
          >
            Ver Planos
          </motion.button>
        </div>
      </div>
    </header>
  );
}

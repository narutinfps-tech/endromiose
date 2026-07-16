import { useState } from 'react';
import Hero from './components/Hero';
import Receiving from './components/Receiving';
import WhyChoose from './components/WhyChoose';
import BonusesSection from './components/BonusesSection';
import Offers from './components/Offers';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import InteractiveCheckoutModal from './components/InteractiveCheckoutModal';
import AnalyticsPanel from './components/AnalyticsPanel';
import { Plan } from './types';
import { Leaf } from 'lucide-react';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Hardcoded premium assets generated for this sales page
  const mockupImage = "/src/assets/images/ciclo_leve_transparent_mockup_1784243919608.jpg";
  const mealsBannerImage = "/src/assets/images/healthy_meals_banner_1784234996623.jpg";
  const bonusesImage = "/src/assets/images/bonuses_composition_1784235009226.jpg";

  // Function to scroll smoothly to the offers section
  const scrollToOffers = () => {
    const section = document.getElementById('offers-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  return (
    <div id="sales-page-wrapper" className="min-h-screen bg-brand-cream text-brand-dark flex flex-col relative selection:bg-brand-sage/30 selection:text-brand-forest">
      
      <main className="flex-grow">
        {/* 1. Hero / Section 1 */}
        <Hero 
          onScrollToOffers={scrollToOffers} 
        />

        {/* 2. What you'll receive / Section 2 */}
        <Receiving 
          bannerImg={mealsBannerImage} 
        />

        {/* 3. Why choose us / Section 3 */}
        <WhyChoose />

        {/* 4. Presentation of the 3 bonuses / Section 4 */}
        <BonusesSection 
          bonusesImg={bonusesImage} 
        />

        {/* 5. Pricing and Plans Offers / Section 5 */}
        <Offers 
          onSelectPlan={handleSelectPlan} 
        />

        {/* 6. Before and After comparison / Section 6 */}
        <BeforeAfter />

        {/* 7. Client Testimonials / Section 7 */}
        <Testimonials />

        {/* 8. 7-day Guarantee Shield / Section 8 */}
        <Guarantee 
          onScrollToOffers={scrollToOffers} 
        />

        {/* 9. Accordion FAQs / Section 9 */}
        <FAQ 
          onScrollToOffers={scrollToOffers} 
        />
      </main>

      {/* 10. Footer info / Section 10 */}
      <Footer />

      {/* Interactive Checkout Modal Gateway Simulation */}
      <InteractiveCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        plan={selectedPlan}
      />

      {/* Analytics configuration panel drawer */}
      <AnalyticsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {/* Aesthetic float label indicating app version or secure server status */}
      <div className="hidden lg:flex fixed bottom-5 right-5 z-25 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-beige shadow-xs items-center gap-1.5 text-[10px] text-brand-forest font-semibold">
        <Leaf size={11} className="text-brand-sage animate-spin-slow" />
        <span>Ciclo Leve Seguro</span>
      </div>

    </div>
  );
}

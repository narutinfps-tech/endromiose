import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../types';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-cream/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="w-10 h-10 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage mx-auto mb-2">
            <MessageSquare size={18} />
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
            Veja o que as clientes estão dizendo
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto rounded-full" />
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-beige shadow-3xs space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.stars)].map((_, sIdx) => (
                    <Star key={sIdx} size={15} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <p className="font-sans font-regular text-brand-dark text-sm sm:text-base leading-relaxed italic">
                  {testimonial.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-brand-cream">
                {/* Elegant initials circle placeholder */}
                <div className="w-10 h-10 rounded-full bg-brand-beige text-brand-forest font-sans font-bold text-sm flex items-center justify-center shrink-0">
                  {testimonial.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-brand-dark">{testimonial.name}</p>
                  <p className="font-sans text-[11px] text-brand-gray font-semibold tracking-wider uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Alert / Warning */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="inline-block bg-brand-beige/50 text-brand-forest font-sans font-medium text-xs px-4 py-2 rounded-lg border border-brand-sage/20">
            ⚠️ <strong>Nota do Desenvolvedor:</strong> Substitua esses textos por avaliações reais antes de publicar a página definitivamente.
          </p>
        </div>

      </div>
    </section>
  );
}

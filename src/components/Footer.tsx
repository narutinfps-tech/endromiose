import { Leaf } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (title: string) => {
    alert(`Políticas do Ciclo Leve: Visualizando os ${title} do produto digital.`);
  };

  return (
    <footer className="bg-brand-dark text-brand-cream/80 py-12 border-t border-brand-forest/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top brand signature */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-brand-forest/30 pb-8">
          <div className="flex items-center gap-2">
            <Leaf className="text-brand-sage" size={18} />
            <span className="font-serif italic font-semibold text-xl tracking-wide text-white">
              Ciclo Leve
            </span>
          </div>
          
          {/* Menu links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-brand-cream/70">
            <button
              onClick={() => handleLinkClick('Termos de Uso')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <button
              onClick={() => handleLinkClick('Política de Privacidade')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => handleLinkClick('Contato')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contato
            </button>
            <button
              onClick={() => handleLinkClick('Aviso Legal')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Aviso Legal
            </button>
          </div>
        </div>

        {/* Disclaimer Text and Copyrights */}
        <div className="space-y-4 max-w-5xl">
          <p className="text-[10px] sm:text-xs text-brand-cream/50 leading-relaxed text-justify">
            <strong>Aviso de Isenção de Responsabilidade:</strong> Este produto possui finalidade educativa e informativa sobre culinária prática e planejamento de rotina saudável. Não substitui diagnóstico, tratamento, medicação, acompanhamento médico ou orientação nutricional individualizada. Se você possui endometriose, dores pélvicas intensas ou qualquer outra condição clínica, consulte sempre médicos ginecologistas, obstetras, nutricionistas e outros especialistas habilitados para estruturar seu tratamento. Os resultados e as experiências podem variar de pessoa para pessoa.
          </p>

          <p className="text-[11px] text-brand-cream/40 text-center sm:text-left">
            Ciclo Leve © 2026 — Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}

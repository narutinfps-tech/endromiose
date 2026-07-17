export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface Bonus {
  id: string;
  title: string;
  description: string;
  value: string;
  image: string;
  benefits: string[];
}

export interface Plan {
  id: 'essencial' | 'completo';
  title: string;
  price: string;
  accent: string;
  badge?: string;
  features: string[];
  buttonText: string;
  checkoutUrl: string;
  extraText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
  stars: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BeforeAfterItem {
  id: string;
  text: string;
}

// Static Data conforming to user specifications
export const MAIN_BENEFITS: Benefit[] = [
  { id: "1", title: "Receitas práticas", description: "Organizadas em categorias fáceis de navegar no celular." },
  { id: "2", title: "Ingredientes acessíveis", description: "Alimentos comuns encontrados em feiras e mercados." },
  { id: "3", title: "Acesso pelo celular", description: "Consulte de onde estiver, ideal para usar enquanto cozinha." },
  { id: "4", title: "Pagamento único", description: "Acesso vitalício sem cobranças ou taxas adicionais mensais." }
];

export const RECIPE_CATEGORIES_CARDS = [
  {
    id: "card-1",
    title: "67 receitas práticas",
    description: "Receitas organizadas para diferentes momentos do dia em um único material digital."
  },
  {
    id: "card-2",
    title: "Cafés da manhã",
    description: "Ideias simples e saborosas para começar o dia com mais variedade."
  },
  {
    id: "card-3",
    title: "Almoços e jantares",
    description: "Receitas para refeições mais completas, práticas e fáceis de preparar."
  },
  {
    id: "card-4",
    title: "Lanches e sobremesas",
    description: "Opções para complementar a rotina e evitar repetir sempre as mesmas receitas."
  },
  {
    id: "card-5",
    title: "Ingredientes acessíveis",
    description: "Receitas com alimentos conhecidos e encontrados facilmente em supermercados e feiras."
  },
  {
    id: "card-6",
    title: "Acesso digital",
    description: "Consulte o material pelo celular, tablet ou computador sempre que precisar."
  }
];

export const CHOOSE_US_BENEFITS: Benefit[] = [
  {
    id: "choose-1",
    title: "Mais praticidade",
    description: "Tenha receitas reunidas e organizadas para consultar rapidamente."
  },
  {
    id: "choose-2",
    title: "Menos tempo pesquisando",
    description: "Evite procurar receitas diferentes em vários sites, vídeos e redes sociais."
  },
  {
    id: "choose-3",
    title: "Mais variedade",
    description: "Encontre ideias para diferentes momentos do dia."
  },
  {
    id: "choose-4",
    title: "Melhor planejamento",
    description: "Use o material como referência para organizar refeições e compras."
  },
  {
    id: "choose-5",
    title: "Acesso pelo celular",
    description: "Consulte as receitas diretamente na cozinha."
  },
  {
    id: "choose-6",
    title: "Ingredientes simples",
    description: "Prepare receitas utilizando alimentos próximos da sua realidade."
  }
];

export const BONUSES: Bonus[] = [
  {
    id: "bonus-1",
    title: "BÔNUS 1 — PLANO ALIMENTAR ORGANIZADO",
    description: "Sugestões gerais para distribuir as refeições durante os dias da semana e facilitar o planejamento da rotina.",
    value: "R$ 9,90",
    image: "https://i.ibb.co/6cRQywM2/Chat-GPT-Image-16-de-jul-de-2026-16-41-20.png",
    benefits: [
      "Planejamento semanal",
      "Checklist organizado",
      "Lista de compras",
      "Organização das refeições"
    ]
  },
  {
    id: "bonus-2",
    title: "BÔNUS 2 — SALADAS LEVES E SABOROSAS",
    description: "Seleção de saladas coloridas e práticas para complementar almoços, jantares e outras refeições.",
    value: "R$ 7,90",
    image: "https://i.ibb.co/MD8Lg16S/Chat-GPT-Image-16-de-jul-de-2026-16-45-36-2.png",
    benefits: [
      "Saladas coloridas",
      "Receitas práticas",
      "Novas combinações",
      "Mais variedade nas refeições"
    ]
  },
  {
    id: "bonus-3",
    title: "BÔNUS 3 — SUCOS E BEBIDAS NATURAIS",
    description: "Receitas de sucos, vitaminas, águas saborizadas e bebidas naturais para variar a rotina.",
    value: "R$ 7,90",
    image: "/src/assets/images/bonuses_composition_1784235009226.jpg",
    benefits: [
      "Sucos naturais",
      "Vitaminas",
      "Águas saborizadas",
      "Bebidas fáceis de preparar"
    ]
  }
];

export const PLANS: Plan[] = [
  {
    id: "essencial",
    title: "Plano Essencial",
    price: "R$ 10,00",
    accent: "brand-sage",
    features: [
      "67 receitas práticas",
      "cafés da manhã",
      "almoços",
      "jantares",
      "lanches",
      "sobremesas",
      "acesso pelo celular",
      "entrega digital",
      "garantia de 7 dias"
    ],
    buttonText: "QUERO O PLANO ESSENCIAL",
    checkoutUrl: "https://pay.kiwify.com.br/essencial-mock" // We will provide interactive purchase feedback or link to dynamic checkout forms
  },
  {
    id: "completo",
    title: "Plano Completo",
    price: "R$ 19,90",
    accent: "brand-wine",
    badge: "MAIS ESCOLHIDO",
    features: [
      "tudo do Plano Essencial",
      "67 receitas práticas",
      "Plano Alimentar Organizado",
      "Saladas Leves e Saborosas",
      "Sucos e Bebidas Naturais",
      "três bônus completos",
      "acesso pelo celular",
      "entrega digital",
      "garantia de 7 dias"
    ],
    extraText: "Leve todos os materiais por apenas R$ 9,90 a mais.",
    buttonText: "QUERO O PLANO COMPLETO",
    checkoutUrl: "https://pay.kiwify.com.br/completo-mock"
  }
];

export const BEFORE_LIST: BeforeAfterItem[] = [
  { id: "b1", text: "Não saber o que preparar" },
  { id: "b2", text: "Repetir sempre as mesmas refeições" },
  { id: "b3", text: "Perder tempo procurando receitas" },
  { id: "b4", text: "Encontrar opções complicadas" },
  { id: "b5", text: "Comprar ingredientes sem planejamento" },
  { id: "b6", text: "Depender de receitas espalhadas pela internet" },
  { id: "b7", text: "Esquecer onde salvou cada receita" }
];

export const AFTER_LIST: BeforeAfterItem[] = [
  { id: "a1", text: "Ter 67 receitas reunidas" },
  { id: "a2", text: "Consultar tudo pelo celular" },
  { id: "a3", text: "Encontrar opções para diferentes refeições" },
  { id: "a4", text: "Planejar melhor a semana" },
  { id: "a5", text: "Preparar receitas com ingredientes simples" },
  { id: "a6", text: "Economizar tempo" },
  { id: "a7", text: "Ter bônus para organizar a rotina" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Gabriela Mendes",
    role: "Espaço reservado para depoimento real",
    stars: 5,
    text: "“Gostei da variedade das receitas. Eu sempre ficava sem ideias para o café da manhã e agora tenho várias opções para consultar.”"
  },
  {
    id: "t2",
    name: "Mariana Souza",
    role: "Espaço reservado para depoimento real",
    stars: 5,
    text: "“O material ficou fácil de acessar pelo celular e as receitas estão bem organizadas. Facilitou bastante minha rotina.”"
  },
  {
    id: "t3",
    name: "Juliana Rocha",
    role: "Espaço reservado para depoimento real",
    stars: 5,
    text: "“Gostei principalmente dos bônus e das receitas com ingredientes mais acessíveis.”"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f-1",
    question: "1. O produto é físico?",
    answer: "Não. O Ciclo Leve é um produto totalmente digital. Nenhum material será enviado pelos Correios."
  },
  {
    id: "f-2",
    question: "2. Como vou receber os materiais?",
    answer: "Após a confirmação do pagamento, os materiais serão enviados ou disponibilizados digitalmente por e-mail ou WhatsApp."
  },
  {
    id: "f-3",
    question: "3. Posso acessar pelo celular?",
    answer: "Sim. Você poderá consultar os materiais pelo celular, tablet ou computador."
  },
  {
    id: "f-4",
    question: "4. Qual é a diferença entre os planos?",
    answer: "O Plano Essencial de R$ 10,00 inclui o material principal com 67 receitas.\n\nO Plano Completo de R$ 19,90 inclui as 67 receitas e também os três bônus especiais."
  },
  {
    id: "f-5",
    question: "5. O pagamento é mensal?",
    answer: "Não. Os dois planos possuem pagamento único e não geram mensalidades."
  },
  {
    id: "f-6",
    question: "6. O produto substitui acompanhamento médico ou nutricional?",
    answer: "Não. O material possui finalidade educativa e culinária. Ele não substitui diagnóstico, acompanhamento médico, medicamentos ou orientação individualizada de nutricionista."
  },
  {
    id: "f-7",
    question: "7. Existe garantia?",
    answer: "Sim. A compra possui garantia de 7 dias."
  }
];

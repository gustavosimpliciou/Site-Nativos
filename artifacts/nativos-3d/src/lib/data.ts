export type ProductCategory =
  | "decoracao"
  | "uteis"
  | "casa"
  | "facilitadores"
  | "colecionaveis";

export type Product = {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  category: ProductCategory;
  imageUrl: string;
  description: string;
  details: string[];
  kiwifyUrl: string;
  badge?: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  decoracao: "Decoracao",
  uteis: "Uteis",
  casa: "Para Casa",
  facilitadores: "Facilitadores",
  colecionaveis: "Colecionaveis",
};

export const products: Product[] = [
  {
    id: "moai-dj",
    name: "Moai DJ",
    price: 89.0,
    formattedPrice: "R$ 89,00",
    category: "colecionaveis",
    imageUrl: "/images/products/moai-dj.jpg",
    description:
      "Escultura do icônico Moai da Ilha de Páscoa com um toque moderno: fone de ouvido DJ integrado. Peça de coleção com acabamento texturizado que imita pedra vulcânica.",
    details: [
      "Altura: aproximadamente 15 cm",
      "Material: PLA de alta resistência",
      "Acabamento texturizado estilo pedra",
      "Peça decorativa e colecionável",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/moai-dj",
    badge: "MAIS VENDIDO",
  },
  {
    id: "peixe-esqueleto-articulado",
    name: "Peixe Esqueleto Articulado",
    price: 129.0,
    formattedPrice: "R$ 129,00",
    category: "colecionaveis",
    imageUrl: "/images/products/peixe-esqueleto.jpg",
    description:
      "Peixe esqueleto articulado com costelas móveis e nadadeiras detalhadas. Gradiente rosa e teal único, inspirado nos peixes das profundezas. Uma obra de arte mecânica.",
    details: [
      "Articulações nas costelas e cauda",
      "Comprimento: aproximadamente 22 cm",
      "Gradiente rosa e teal exclusivo",
      "Sem montagem necessária",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/peixe-esqueleto",
    badge: "ARTICULADO",
  },
  {
    id: "pikachu-gordo",
    name: "Pikachu Gordo",
    price: 99.0,
    formattedPrice: "R$ 99,00",
    category: "colecionaveis",
    imageUrl: "/images/products/pikachu-gordo.jpg",
    description:
      "A versão mais adorável e rechonchuda do Pikachu em formato 3D. Escultura cômica e fofa com acabamento liso e amarelo vibrante. Presente perfeito para fãs de Pokémon.",
    details: [
      "Altura: aproximadamente 10 cm",
      "Acabamento liso e uniforme",
      "Amarelo vibrante com detalhes pintados",
      "Peça sólida e resistente",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/pikachu-gordo",
    badge: "DESTAQUE",
  },
  {
    id: "porta-chaves-arvore-bonsai",
    name: "Porta-Chaves Arvore Bonsai",
    price: 119.0,
    formattedPrice: "R$ 119,00",
    category: "facilitadores",
    imageUrl: "/images/products/porta-chaves-arvore.jpg",
    description:
      "Porta-chaves escultural em formato de árvore bonsai retorcida com bandeja e tigela superior para guardar chaves, moedas e acessórios. Arte e organização em uma só peça.",
    details: [
      "Bandeja decorativa na base",
      "Tigela superior para objetos pequenos",
      "Tronco esculpido artesanalmente",
      "Ideal para entrada da casa",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-chaves-arvore",
    badge: "FAVORITO",
  },
  {
    id: "vaca-highland-filigrana",
    name: "Vaca Highland Filigrana",
    price: 179.0,
    formattedPrice: "R$ 179,00",
    category: "decoracao",
    imageUrl: "/images/products/vaca-highland.jpg",
    description:
      "Escultura de vaca Highland com corpo inteiramente vazado em padrão de arabescos e espirais. Impressão de altíssima complexidade que transforma qualquer ambiente.",
    details: [
      "Estrutura vazada com arabescos",
      "Comprimento: aproximadamente 25 cm",
      "Material: PLA branco premium",
      "Peça decorativa de alto impacto visual",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/vaca-highland",
    badge: "DESTAQUE",
  },
  {
    id: "vaso-gatinho-suculentas",
    name: "Vaso Gatinho para Suculentas",
    price: 69.0,
    formattedPrice: "R$ 69,00",
    category: "casa",
    imageUrl: "/images/products/vaso-gatinho.jpg",
    description:
      "Vasinho em formato de gatinho deitado com abertura no dorso para plantas e suculentas. Fofo, funcional e perfeito para trazer vida à decoração de qualquer cantinho.",
    details: [
      "Abertura com drenagem interna",
      "Comprimento: aproximadamente 16 cm",
      "Acabamento branco fosco",
      "Ideal para suculentas e cactos pequenos",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/vaso-gatinho",
    badge: "NOVO",
  },
  {
    id: "king-boo-mario",
    name: "King Boo",
    price: 109.0,
    formattedPrice: "R$ 109,00",
    category: "colecionaveis",
    imageUrl: "/images/products/king-boo.jpg",
    description:
      "Réplica do King Boo, o fantasma coroado do universo Mario. Escultura com expressão assustadora, língua para fora e coroa detalhada. Peça de coleção para fãs do jogo.",
    details: [
      "Altura: aproximadamente 14 cm",
      "Coroa com detalhes de joias",
      "Acabamento branco fosco",
      "Peça sólida e resistente",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/king-boo",
  },
  {
    id: "escultura-chama-abstrata",
    name: "Escultura Chama Abstrata",
    price: 149.0,
    formattedPrice: "R$ 149,00",
    category: "decoracao",
    imageUrl: "/images/products/escultura-chama.jpg",
    description:
      "Escultura abstrata de mesa em preto fosco com formato de chama/vela estilizada sobre base circular. Design minimalista e sofisticado que valoriza qualquer ambiente.",
    details: [
      "Altura: aproximadamente 20 cm",
      "Base circular estável",
      "Acabamento preto fosco premium",
      "Design escultural exclusivo",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/escultura-chama",
    badge: "NOVO",
  },
  {
    id: "garrafa-la-dodgers",
    name: "Garrafao LA Dodgers",
    price: 89.0,
    formattedPrice: "R$ 89,00",
    category: "uteis",
    imageUrl: "/images/products/garrafa-la-dodgers.jpg",
    description:
      "Garrafão estilo cooler com o icônico logo LA dos Dodgers em relevo. Peça exclusiva para fãs de baseball e decoração esportiva, com torneira funcional.",
    details: [
      "Design do logo LA em relevo",
      "Torneira integrada",
      "Acabamento azul vibrante",
      "Peça decorativa e funcional",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/garrafa-la-dodgers",
    badge: "EXCLUSIVO",
  },
  {
    id: "xadrez-luxo-preto-branco",
    name: "Xadrez Luxo Preto e Branco",
    price: 349.0,
    formattedPrice: "R$ 349,00",
    category: "colecionaveis",
    imageUrl: "/images/products/xadrez-luxo.jpg",
    description:
      "Conjunto de peças de xadrez com design luxuoso em preto e branco com detalhes dourados. Cavalos esculpidos à mão, coroas ornamentadas e bases decoradas com arabescos.",
    details: [
      "Conjunto completo de peças",
      "Detalhes em dourado nas bases",
      "Cavalos com anatomia realista",
      "Material: PLA premium de alta resolução",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/xadrez-luxo",
    badge: "LUXO",
  },
  {
    id: "astronauta-colecionavel",
    name: "Astronauta Colecionavel",
    price: 159.0,
    formattedPrice: "R$ 159,00",
    category: "colecionaveis",
    imageUrl: "/images/products/astronauta.jpg",
    description:
      "Figura de astronauta com detalhes milimetricos e base decorativa. Uma peca que combina nostalgia espacial com acabamento de alta qualidade.",
    details: [
      "Altura: 22 cm",
      "Base decorativa inclusa",
      "Pintura disponivel como adicional",
      "Edicao limitada numerada",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/astronauta",
    badge: "LIMITADO",
  },
  {
    id: "caixa-organizadora-tampa",
    name: "Caixa Organizadora com Tampa",
    price: 59.0,
    formattedPrice: "R$ 59,00",
    category: "facilitadores",
    imageUrl: "/images/products/caixa-organizadora.jpg",
    description:
      "Caixa organizadora com tampa encaixavel e design modular. Perfeita para escritorio, quarto ou qualquer cantinho da casa.",
    details: [
      "Tampa com encaixe preciso",
      "3 tamanhos disponiveis",
      "Empilhavel e modular",
      "Interior liso de facil limpeza",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/caixa-organizadora",
  },
  {
    id: "abajur-geometrico",
    name: "Abajur Geometrico",
    price: 179.0,
    formattedPrice: "R$ 179,00",
    category: "decoracao",
    imageUrl: "/images/products/abajur-geometrico.jpg",
    description:
      "Abajur com estrutura geometrica vazada que cria jogos de luz e sombra fascinantes. Iluminacao funcional com estetica incrivel.",
    details: [
      "Diametro: 25 cm | Altura: 20 cm",
      "Bivolt 110/220V",
      "Bocal E27 incluso",
      "Suporta lampadas de ate 60W",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/abajur-geometrico",
    badge: "NOVO",
  },
  {
    id: "porta-retrato-flutuante",
    name: "Porta-Retrato Flutuante",
    price: 55.0,
    formattedPrice: "R$ 55,00",
    category: "decoracao",
    imageUrl: "/images/products/porta-retrato.jpg",
    description:
      "Porta-retrato com suporte inclinado e design minimalista que da um efeito flutuante a sua foto favorita. Elegancia no detalhe.",
    details: [
      "Compativel com fotos 10x15 cm",
      "Suporte inclinado ajustavel",
      "Base antiderrapante",
      "Disponivel em preto e branco",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-retrato",
  },
  {
    id: "suporte-fone-de-ouvido",
    name: "Suporte para Fone de Ouvido",
    price: 45.0,
    formattedPrice: "R$ 45,00",
    category: "uteis",
    imageUrl: "/images/products/suporte-fone.jpg",
    description:
      "Suporte de mesa elegante para fones de ouvido. Mantenha seu headset sempre a mao e sua mesa organizada.",
    details: [
      "Compativel com todos os headsets",
      "Base pesada para estabilidade",
      "Altura: 18 cm",
      "Passagem de cabo integrada",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-fone",
  },
  {
    id: "porta-caneta-hexagonal",
    name: "Porta-Canetas Hexagonal",
    price: 35.0,
    formattedPrice: "R$ 35,00",
    category: "uteis",
    imageUrl: "/images/products/porta-caneta.jpg",
    description:
      "Porta-canetas com formato hexagonal moderno. Compacto e estiloso, deixa sua mesa com personalidade e tudo no lugar.",
    details: [
      "Capacidade para 20+ canetas",
      "Base antiderrapante",
      "Diametro: 8 cm | Altura: 12 cm",
      "Disponivel em diversas cores",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-caneta",
  },
  {
    id: "descanso-pulso-teclado",
    name: "Descanso de Pulso para Teclado",
    price: 65.0,
    formattedPrice: "R$ 65,00",
    category: "facilitadores",
    imageUrl: "/images/products/descanso-pulso.jpg",
    description:
      "Descanso ergonomico para pulso, ideal para longas jornadas no computador. Conforto e postura correta durante o trabalho.",
    details: [
      "Comprimento: 43 cm",
      "Altura: 2,5 cm",
      "Superficie lisa e confortavel",
      "Compativel com teclados padrao e compactos",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/descanso-pulso",
    badge: "ERGONOMICO",
  },
  {
    id: "prateleira-modular-parede",
    name: "Prateleira Modular de Parede",
    price: 99.0,
    formattedPrice: "R$ 99,00",
    category: "casa",
    imageUrl: "/images/products/prateleira-modular.jpg",
    description:
      "Prateleira de parede modular com design contemporaneo. Perfeita para livros, plantas, objetos decorativos e tudo mais que quiser exibir.",
    details: [
      "Dimensoes: 30 x 10 x 12 cm",
      "Suporta ate 3 kg",
      "Parafusos e buchas inclusas",
      "Encaixavel com outras unidades",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/prateleira-modular",
  },
  {
    id: "porta-joias-geometrico",
    name: "Porta-Joias Geometrico",
    price: 75.0,
    formattedPrice: "R$ 75,00",
    category: "casa",
    imageUrl: "/images/products/porta-joias.jpg",
    description:
      "Porta-joias com estrutura geometrica elegante. Ganchinhos para colares, compartimentos para aneis e pulseiras, tudo organizado com estilo.",
    details: [
      "5 ganchos para colares",
      "3 compartimentos para aneis",
      "2 bandejas para pulseiras",
      "Altura: 22 cm",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-joias",
  },
  {
    id: "totem-decorativo-moderno",
    name: "Totem Decorativo Moderno",
    price: 139.0,
    formattedPrice: "R$ 139,00",
    category: "decoracao",
    imageUrl: "/images/products/totem-decorativo.jpg",
    description:
      "Totem decorativo com formas esculturais em camadas. Peca de impacto visual que valoriza qualquer ambiente moderno.",
    details: [
      "Altura: 35 cm",
      "3 formas independentes empilhaveis",
      "Base estavel de 12 cm",
      "Disponivel em monocromatico ou colorido",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/totem-decorativo",
    badge: "DESTAQUE",
  },
  {
    id: "suporte-tablet-ajustavel",
    name: "Suporte para Tablet Ajustavel",
    price: 79.0,
    formattedPrice: "R$ 79,00",
    category: "facilitadores",
    imageUrl: "/images/products/suporte-tablet.jpg",
    description:
      "Suporte de mesa para tablet com angulo de visualizacao ajustavel. Ideal para receitas na cozinha, leitura ou assistir conteudo.",
    details: [
      "Compativel com tablets de 7 a 13 polegadas",
      "Angulo ajustavel em 5 posicoes",
      "Base antiderrapante",
      "Encaixe lateral para cabos",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-tablet",
  },
  {
    id: "mini-dragao-articulado",
    name: "Mini Dragao Articulado",
    price: 99.0,
    formattedPrice: "R$ 99,00",
    category: "colecionaveis",
    imageUrl: "/images/products/mini-dragao.jpg",
    description:
      "Versao compacta do dragao articulado. Todos os movimentos do original em um tamanho perfeito para mesa, estante ou presente.",
    details: [
      "32 articulacoes moveis",
      "Comprimento: 18 cm",
      "Sem montagem necessaria",
      "Disponivel em 6 cores",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/mini-dragao",
  },
  {
    id: "chaveiro-personalizado",
    name: "Chaveiro Personalizado",
    price: 25.0,
    formattedPrice: "R$ 25,00",
    category: "colecionaveis",
    imageUrl: "/images/products/chaveiro.jpg",
    description:
      "Chaveiro com formas exclusivas e acabamento premium. Um acessorio do dia a dia com personalidade e durabilidade.",
    details: [
      "Argola de metal resistente",
      "Dezenas de modelos disponibles",
      "Dimensoes: aprox. 5 x 3 cm",
      "Personalizavel com nome ou iniciais",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/chaveiro",
    badge: "PERSONALIZAVEL",
  },
  {
    id: "dispenser-sabonete",
    name: "Dispenser de Sabonete Elegante",
    price: 55.0,
    formattedPrice: "R$ 55,00",
    category: "casa",
    imageUrl: "/images/products/dispenser-sabonete.jpg",
    description:
      "Dispenser para sabonete liquido com design geometrico elegante. Transforma um item comum do banheiro em um objeto decorativo.",
    details: [
      "Capacidade: 300 ml",
      "Valvula de pressao de qualidade",
      "Abertura por rosca na base",
      "Compativel com sabonetes e alcool gel",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/dispenser-sabonete",
  },
  {
    id: "porta-especiarias-parede",
    name: "Porta-Especiarias de Parede",
    price: 85.0,
    formattedPrice: "R$ 85,00",
    category: "casa",
    imageUrl: "/images/products/porta-especiarias.jpg",
    description:
      "Suporte de parede para potes de especiarias. Deixa sua cozinha organizada e transforma os temperos em parte da decoracao.",
    details: [
      "6 suportes individuais",
      "Compativel com potes ate 6 cm de diametro",
      "Fixacao por parafuso ou fita dupla face",
      "Dimensoes totais: 40 x 25 cm",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-especiarias",
  },
  {
    id: "organizador-geladeira",
    name: "Organizador para Geladeira",
    price: 49.0,
    formattedPrice: "R$ 49,00",
    category: "facilitadores",
    imageUrl: "/images/products/organizador-geladeira.jpg",
    description:
      "Organizador modular para geladeira que maximiza o espaco disponivel. Mantenha alimentos separados, acessiveis e bem conservados.",
    details: [
      "4 modulos encaixaveis",
      "Compativel com prateleiras padrao",
      "Material alimentar seguro",
      "Lavavel na maquina de lavar",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/organizador-geladeira",
    badge: "NOVO",
  },
  {
    id: "suporte-livro-leitura",
    name: "Suporte para Livro de Leitura",
    price: 42.0,
    formattedPrice: "R$ 42,00",
    category: "uteis",
    imageUrl: "/images/products/suporte-livro.jpg",
    description:
      "Suporte dobravel para livros que mantem as paginas abertas e em angulo confortavel para leitura. Perfeito para quem ama ler.",
    details: [
      "Angulo ajustavel em 3 posicoes",
      "Compativel com livros de ate 800 paginas",
      "Suportes laterais retrateis",
      "Dobravel para transporte",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-livro",
  },
  {
    id: "cachepot-geometrico-trio",
    name: "Cachepot Geometrico - Trio",
    price: 145.0,
    formattedPrice: "R$ 145,00",
    category: "decoracao",
    imageUrl: "/images/products/cachepot-trio.jpg",
    description:
      "Conjunto de 3 cachepots com geometrias diferentes que se complementam. Decore sua mesa, janela ou varanda com muito estilo.",
    details: [
      "3 pecas em tamanhos escalonados",
      "Maior: 12 cm | Medio: 9 cm | Menor: 6 cm",
      "Com prato incluso em cada peca",
      "Ideal para suculentas e cactos",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/cachepot-trio",
    badge: "KIT",
  },
  {
    id: "unicornio-articulado",
    name: "Unicornio Articulado",
    price: 129.0,
    formattedPrice: "R$ 129,00",
    category: "colecionaveis",
    imageUrl: "/images/products/unicornio-articulado.jpg",
    description:
      "Unicornio com articulacoes moveis e chifre espiralado de destaque. Peca magica e encantadora para colecionar ou presentear.",
    details: [
      "28 articulacoes moveis",
      "Comprimento: 22 cm",
      "Disponivel em branco, rosa e lilas",
      "Chifre em acabamento dourado opcional",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/unicornio-articulado",
    badge: "ARTICULADO",
  },
  {
    id: "porta-controles-tv",
    name: "Porta-Controles Remoto",
    price: 38.0,
    formattedPrice: "R$ 38,00",
    category: "facilitadores",
    imageUrl: "/images/products/porta-controles.jpg",
    description:
      "Organizador de mesa ou parede para controles remotos. Chega de procurar controle perdido no sofa — tudo no lugar e ao alcance.",
    details: [
      "Acomoda ate 4 controles",
      "Fixacao na parede ou mesa",
      "Base antiderrapante para mesa",
      "Abertura acessivel pela frente",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-controles",
  },
  {
    id: "escorpiao-articulado",
    name: "Escorpiao Articulado",
    price: 169.0,
    formattedPrice: "R$ 169,00",
    category: "colecionaveis",
    imageUrl: "/images/products/escorpiao-articulado.jpg",
    description:
      "Escorpiao com articulacoes realistas em cada pata e no ferrão. Peca impressionante com nivel de detalhe milimetrico.",
    details: [
      "52 articulacoes independentes",
      "Comprimento: 28 cm",
      "Pernas e ferrão totalmente moveis",
      "Disponivel em preto, marrom e dourado",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/escorpiao-articulado",
    badge: "ARTICULADO",
  },
];

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = () => products.slice(0, 4);

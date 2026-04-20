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
  decoracao: "Decoração",
  uteis: "Úteis",
  casa: "Para Casa",
  facilitadores: "Facilitadores",
  colecionaveis: "Colecionáveis",
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
    name: "Porta-Chaves Árvore Bonsai",
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
    name: "Garrafão LA Dodgers",
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
    id: "suporte-airpods-susuwatari",
    name: "Suporte AirPods Susuwatari",
    price: 89.0,
    formattedPrice: "R$ 89,00",
    category: "facilitadores",
    imageUrl: "/images/products/suporte-airpods-susuwatari.jpg",
    description:
      "Suporte para case de AirPods inspirado nos adoráveis Susuwatari do Studio Ghibli. A criaturinha de olhos esbugalhados segura uma bandeja circular no topo para pousar seu fone com estilo e personalidade única.",
    details: [
      "Compatível com AirPods 1, 2 e Pro",
      "Altura: aproximadamente 8 cm",
      "Base antiderrapante embutida",
      "Material: PLA de alta resistência",
      "Acabamento fosco preto",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-airpods-susuwatari",
    badge: "NOVO",
  },
  {
    id: "chaveiro-pikachu-articulado",
    name: "Chaveiro Pikachu Articulado",
    price: 49.0,
    formattedPrice: "R$ 49,00",
    category: "colecionaveis",
    imageUrl: "/images/products/chaveiro-pikachu-articulado.jpg",
    description:
      "Chaveiro do Pikachu impresso em 3D com articulações nos membros e rabo. Fiel ao design clássico do personagem com detalhes pintados à mão nas bochechas e pontas das orelhas. Perfeito para fãs de Pokémon.",
    details: [
      "Altura: aproximadamente 5 cm",
      "Articulações nos braços e pernas",
      "Argola metálica inclusa",
      "Detalhes coloridos pintados à mão",
      "Material: PLA flexível nas juntas",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/chaveiro-pikachu",
    badge: "MAIS VENDIDO",
  },
  {
    id: "luminaria-espiral-mesa",
    name: "Luminária Espiral de Mesa",
    price: 159.0,
    formattedPrice: "R$ 159,00",
    category: "decoracao",
    imageUrl: "/images/products/luminaria-espiral-mesa.jpg",
    description:
      "Luminária de mesa com abajur em formato espiral helicoidal. Quando iluminada, as ranhuras criam um efeito de luz e sombra hipnótico nas paredes. Base de madeira natural que contrasta com o PLA branco translúcido.",
    details: [
      "Altura total: aproximadamente 18 cm",
      "Abajur em PLA translúcido branco",
      "Base de madeira natural inclusa",
      "Compatível com lâmpada LED E14",
      "Projetada para luz quente 2700K",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/luminaria-espiral-mesa",
    badge: "DESTAQUE",
  },
  {
    id: "abajur-pendente-dome",
    name: "Abajur Pendente Dome",
    price: 139.0,
    formattedPrice: "R$ 139,00",
    category: "casa",
    imageUrl: "/images/products/abajur-pendente-dome.jpg",
    description:
      "Abajur pendente em formato de cúpula suavemente achatada. O acabamento areia com micro-textura de impressão confere um visual artesanal único. Espalha luz difusa e aconchegante para salas e quartos.",
    details: [
      "Diâmetro: aproximadamente 30 cm",
      "Cor: areia/nude mate",
      "Abertura inferior para saída de luz",
      "Cabo de suspensão não incluso",
      "Encaixe para soquete E27 padrão",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/abajur-pendente-dome",
  },
  {
    id: "suporte-celular-ondulado",
    name: "Suporte para Celular Ondulado",
    price: 79.0,
    formattedPrice: "R$ 79,00",
    category: "facilitadores",
    imageUrl: "/images/products/suporte-celular-ondulado.jpg",
    description:
      "Suporte para celular com design orgânico inspirado em ondas e serpentinas. A estrutura curvilínea em off-white distribui o peso de forma equilibrada e serve como peça decorativa quando sem o celular. Compatível com todos os smartphones.",
    details: [
      "Compatível com celulares de até 7 polegadas",
      "Ângulo de visão: aproximadamente 70 graus",
      "Cor: off-white/creme fosco",
      "Base estável sem necessidade de fixação",
      "Design escultórico decorativo",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-celular-ondulado",
    badge: "NOVO",
  },
  {
    id: "vaso-pokebola",
    name: "Vaso Pokébola para Suculentas",
    price: 59.0,
    formattedPrice: "R$ 59,00",
    category: "casa",
    imageUrl: "/images/products/vaso-pokebola.jpg",
    description:
      "Vaso em formato de Pokébola perfeito para suculentas e plantas pequenas. Com abertura generosa no topo e acabamento pintado em vermelho, branco e preto fiel ao design icônico do universo Pokémon.",
    details: [
      "Diâmetro: aproximadamente 10 cm",
      "Abertura superior de 7 cm",
      "Furo de drenagem na base",
      "Pintado à mão em vermelho, branco e preto",
      "Ideal para suculentas e cactos pequenos",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/vaso-pokebola",
  },
  {
    id: "spiderman-chibi-streetwear",
    name: "Spider-Man Chibi Streetwear",
    price: 99.0,
    formattedPrice: "R$ 99,00",
    category: "colecionaveis",
    imageUrl: "/images/products/spiderman-chibi.jpg",
    description:
      "Figura colecionável do Spider-Man em estilo chibi com visual streetwear: moletom preto, tênis e detalhes em vermelho. Escultura de alta fidelidade com pintura detalhada na máscara aracnídea e teia.",
    details: [
      "Altura: aproximadamente 10 cm",
      "Pintura manual multicamadas",
      "Base de exposição inclusa",
      "Edição limitada streetwear",
      "Material: PLA de alta resolução 0.1mm",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/spiderman-chibi",
    badge: "LIMITADO",
  },
  {
    id: "cachorro-balao-decorativo",
    name: "Cachorro Balão Decorativo",
    price: 119.0,
    formattedPrice: "R$ 119,00",
    category: "decoracao",
    imageUrl: "/images/products/cachorro-balao.jpg",
    description:
      "Escultura do icônico cachorro de balão com toque de humor: acompanha um pequeno mimo ao lado. Arte inspirada no famoso Balloon Dog de Jeff Koons, em acabamento fosco preto elegante. Peça de coleção e conversa garantida.",
    details: [
      "Altura: aproximadamente 16 cm",
      "Acabamento fosco preto premium",
      "Acompanha mini-acessório humorístico",
      "Base plana para exposição",
      "Peça única impressa em PLA",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/cachorro-balao",
    badge: "DESTAQUE",
  },
  {
    id: "porta-oculos-caveira",
    name: "Porta-Óculos Caveira",
    price: 79.0,
    formattedPrice: "R$ 79,00",
    category: "uteis",
    imageUrl: "/images/products/porta-oculos-caveira.jpg",
    description:
      "Suporte para óculos de sol em formato de crânio anatômico. O design permite encaixar as hastes dos óculos no topo do crânio de forma prática e esteticamente impactante. Mistura funcionalidade com decoração dark e sofisticada.",
    details: [
      "Compatível com a maioria dos óculos de sol",
      "Altura: aproximadamente 12 cm",
      "Cor: ósseo/creme natural",
      "Superfície texturizada realista",
      "Base plana antiderrapante",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-oculos-caveira",
  },
  {
    id: "suporte-fone-circular",
    name: "Suporte para Fone Circular",
    price: 69.0,
    formattedPrice: "R$ 69,00",
    category: "uteis",
    imageUrl: "/images/products/suporte-fone-circular.jpg",
    description:
      "Suporte minimalista para headphone com haste vertical e base circular. Design clean em branco que combina com qualquer setup. Mantém seu fone organizado e em exposição como um acessório de design.",
    details: [
      "Altura: aproximadamente 22 cm",
      "Compatível com todos os headphones",
      "Cor: branco fosco",
      "Base circular de 10 cm de diâmetro",
      "Haste central com abertura oval",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-fone-circular",
  },
  {
    id: "suporte-fone-gaming",
    name: "Suporte para Fone Gamer",
    price: 79.0,
    formattedPrice: "R$ 79,00",
    category: "uteis",
    imageUrl: "/images/products/suporte-fone-gaming.jpg",
    description:
      "Suporte para headset gamer em formato de gancho aerodinâmico. Acabamento preto fosco com base larga para máxima estabilidade. Design inspirado em setups premium com visual agressivo e funcional.",
    details: [
      "Altura: aproximadamente 25 cm",
      "Suporta headsets de até 500g",
      "Acabamento preto fosco",
      "Base larga anti-tombamento",
      "Gancho acolchoado para não riscar o fone",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-fone-gaming",
  },
  {
    id: "bandeja-gato-organizadora",
    name: "Bandeja Organizadora Gato",
    price: 89.0,
    formattedPrice: "R$ 89,00",
    category: "uteis",
    imageUrl: "/images/products/bandeja-gato.jpg",
    description:
      "Bandeja organizadora com figura de gato preguiçoso se alongando como suporte. O felino em preto fosco sustenta uma bandeja circular com borda onde você guarda joias, perfumes, controles ou o que quiser. Funcional e irresistível.",
    details: [
      "Diâmetro da bandeja: aproximadamente 18 cm",
      "Altura total: aproximadamente 12 cm",
      "Acabamento preto fosco",
      "Borda de contenção na bandeja",
      "Base estável com 4 apoios",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/bandeja-gato",
    badge: "NOVO",
  },
  {
    id: "suporte-joias-arvore",
    name: "Suporte para Joias Árvore",
    price: 89.0,
    formattedPrice: "R$ 89,00",
    category: "uteis",
    imageUrl: "/images/products/suporte-joias-arvore.jpg",
    description:
      "Porta-joias em formato de árvore com galhos ramificados para pendurar colares, pulseiras e anéis. Acompanha prato base circular onde você pode pousar anéis e brincos. Design escultórico em branco que decora e organiza ao mesmo tempo.",
    details: [
      "Altura: aproximadamente 20 cm",
      "Prato base de 14 cm de diâmetro",
      "Galhos para colares e pulseiras",
      "Cor: branco fosco elegante",
      "Material: PLA resistente",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-joias-arvore",
  },
  {
    id: "cisne-decorativo",
    name: "Cisne Decorativo",
    price: 109.0,
    formattedPrice: "R$ 109,00",
    category: "decoracao",
    imageUrl: "/images/products/cisne-decorativo.jpg",
    description:
      "Escultura de cisne em estilo geométrico com asas abertas em formato de leque. O pescoço elegante e as penas sobrepostas criam um jogo de volumes sofisticado em branco imaculado. Peça de decoração atemporal.",
    details: [
      "Largura: aproximadamente 22 cm",
      "Altura: aproximadamente 18 cm",
      "Acabamento branco fosco premium",
      "Escultura sólida de alta resistência",
      "Ideal para aparadores e prateleiras",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/cisne-decorativo",
  },
  {
    id: "suporte-garrafa-coral",
    name: "Porta-Garrafa Coral",
    price: 119.0,
    formattedPrice: "R$ 119,00",
    category: "casa",
    imageUrl: "/images/products/suporte-garrafa-coral.jpg",
    description:
      "Porta-garrafa de vinho inspirado em estrutura de coral com perfurações orgânicas. A garrafa é mantida em ângulo inclinado criando um efeito visual de equilíbrio impossível. Peça escultórica que transforma qualquer vinho em obra de arte.",
    details: [
      "Suporta garrafas de 750ml padrão",
      "Comprimento: aproximadamente 35 cm",
      "Acabamento branco fosco",
      "Estrutura em voronoi resistente",
      "Base plana para estabilidade",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-garrafa-coral",
    badge: "DESTAQUE",
  },
  {
    id: "vaso-raizes-suculentas",
    name: "Vaso Raízes para Suculentas",
    price: 69.0,
    formattedPrice: "R$ 69,00",
    category: "casa",
    imageUrl: "/images/products/vaso-raizes.jpg",
    description:
      "Vaso para suculentas com design de raízes e galhos entrelaçados como pernas. O corpo arredondado cria contraste com as raízes orgânicas que formam a base. Acompanha prato de drenagem integrado. Mistura natureza e arte em branco.",
    details: [
      "Altura total: aproximadamente 13 cm",
      "Diâmetro interno: aproximadamente 8 cm",
      "Furo de drenagem na base",
      "Prato coletor integrado",
      "Cor: branco mármore natural",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/vaso-raizes",
  },
  {
    id: "luminaria-coral",
    name: "Luminária Coral",
    price: 129.0,
    formattedPrice: "R$ 129,00",
    category: "decoracao",
    imageUrl: "/images/products/luminaria-coral.jpg",
    description:
      "Luminária de mesa com forma de coral do fundo do mar. Quando acesa, a luz atravessa as ramificações criando sombras orgânicas nas paredes que simulam o fundo do oceano. Peça única que combina natureza, arte e iluminação.",
    details: [
      "Altura: aproximadamente 18 cm",
      "Abajur em PLA translúcido branco",
      "Base cilíndrica para LED",
      "Compatível com fita LED ou lâmpada pequena",
      "Luz quente recomendada para melhor efeito",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/luminaria-coral",
    badge: "DESTAQUE",
  },
  {
    id: "luminaria-boneco-sentado",
    name: "Luminária Boneco Sentado",
    price: 139.0,
    formattedPrice: "R$ 139,00",
    category: "decoracao",
    imageUrl: "/images/products/luminaria-boneco-sentado.jpg",
    description:
      "Luminária com forma de figura humana sentada em posição pensativa, usando o abajur como chapéu. Quando acesa emite luz quente em laranja que cria uma atmosfera aconchegante e poética. Design que conta uma história.",
    details: [
      "Altura total: aproximadamente 16 cm",
      "Figura e abajur em laranja translúcido",
      "Compatível com lâmpada de rosca pequena E12",
      "Cabo USB para energia",
      "Ideal como luminária de mesa de cabeceira",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/luminaria-boneco-sentado",
    badge: "NOVO",
  },
  {
    id: "vaso-lua-crescente",
    name: "Vaso Lua Crescente",
    price: 79.0,
    formattedPrice: "R$ 79,00",
    category: "casa",
    imageUrl: "/images/products/vaso-lua-crescente.jpg",
    description:
      "Vaso em formato de lua crescente com mini-vaso esférico encaixado na curvatura interna. O design sombrio em preto antracite traz um toque místico e contemporâneo para qualquer ambiente. Perfeito para suculentas e plantas pequenas.",
    details: [
      "Altura: aproximadamente 22 cm",
      "Mini-vaso interno de 5 cm de diâmetro",
      "Acabamento preto antracite",
      "Base plana para apoio em superfície",
      "Furo de drenagem no mini-vaso",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/vaso-lua-crescente",
  },
  {
    id: "toad-mario",
    name: "Toad Mario",
    price: 109.0,
    formattedPrice: "R$ 109,00",
    category: "colecionaveis",
    imageUrl: "/images/products/toad-mario.jpg",
    description:
      "Figura colecionável do Toad do universo Super Mario em pose animada acenando com a mão. Impressão multicolorida com detalhes precisos no chapéu de cogumelo, jaleco azul e expressão alegre e carismática.",
    details: [
      "Altura: aproximadamente 12 cm",
      "Impressão multicolorida em PLA",
      "Pintura detalhada no chapéu e jaleco",
      "Base de exposição inclusa",
      "Material: PLA de alta resolução 0.1mm",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/toad-mario",
    badge: "NOVO",
  },
];

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = () => products.slice(0, 4);

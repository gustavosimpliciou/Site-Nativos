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
    id: "vaso-geometrico-hexagonal",
    name: "Vaso Geometrico Hexagonal",
    price: 89.0,
    formattedPrice: "R$ 89,00",
    category: "decoracao",
    imageUrl: "/images/products/vaso-geometrico.jpg",
    description:
      "Vaso de parede com geometria hexagonal tridimensional. Design moderno que transforma qualquer ambiente com textura e profundidade.",
    details: [
      "Material: PLA de alta resistencia",
      "Dimensoes: 15 x 15 x 8 cm",
      "Varios acabamentos disponiveis",
      "Ideal para plantas aereas e suculentas",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/vaso-geometrico",
    badge: "MAIS VENDIDO",
  },
  {
    id: "luminaria-mandala-3d",
    name: "Luminaria Mandala 3D",
    price: 149.0,
    formattedPrice: "R$ 149,00",
    category: "decoracao",
    imageUrl: "/images/products/luminaria-mandala.jpg",
    description:
      "Luminaria de parede com padroes de mandala vazados. Quando iluminada, projeta sombras geometricas incriveis pelo ambiente.",
    details: [
      "Diametro: 30 cm",
      "Bivolt 110/220V",
      "LED incluso",
      "Projecao de sombras ate 2 metros",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/luminaria-mandala",
    badge: "DESTAQUE",
  },
  {
    id: "mandala-decorativa-parede",
    name: "Mandala Decorativa de Parede",
    price: 119.0,
    formattedPrice: "R$ 119,00",
    category: "decoracao",
    imageUrl: "/images/products/mandala-parede.jpg",
    description:
      "Mandala tridimensional para parede com camadas sobrepostas que criam profundidade e volume. Arte funcional para seu espaco.",
    details: [
      "Diametro: 40 cm",
      "3 camadas independentes",
      "Fixacao com cola ou parafuso",
      "Disponivel em branco, preto e colorido",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/mandala-parede",
  },
  {
    id: "organizador-mesa-modular",
    name: "Organizador de Mesa Modular",
    price: 79.0,
    formattedPrice: "R$ 79,00",
    category: "uteis",
    imageUrl: "/images/products/organizador-mesa.jpg",
    description:
      "Sistema modular de organizacao para mesa. Encaixes perfeitos para canetas, clips, post-its, celular e outros itens do dia a dia.",
    details: [
      "8 modulos encaixaveis",
      "Compativel com qualquer configuracao de mesa",
      "Anti-deslizante na base",
      "Facil limpeza",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/organizador-mesa",
    badge: "NOVO",
  },
  {
    id: "organizador-cabos",
    name: "Organizador de Cabos",
    price: 39.0,
    formattedPrice: "R$ 39,00",
    category: "uteis",
    imageUrl: "/images/products/organizador-cabos.jpg",
    description:
      "Acabou a bagunca de cabos! Organizador de mesa com encaixes para ate 6 cabos simultaneamente. Mantenha sua mesa limpa e profissional.",
    details: [
      "Encaixes para 6 cabos",
      "Base com fita dupla face",
      "Compativel com todos os tipos de cabo",
      "Dimensoes: 12 x 5 x 4 cm",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/organizador-cabos",
  },
  {
    id: "suporte-celular-articulado",
    name: "Suporte para Celular Articulado",
    price: 49.0,
    formattedPrice: "R$ 49,00",
    category: "facilitadores",
    imageUrl: "/images/products/suporte-celular.jpg",
    description:
      "Suporte de mesa articulado para celular com angulo ajustavel. Ideal para videochamadas, receitas, assistir series e muito mais.",
    details: [
      "Angulo ajustavel 0 a 90 graus",
      "Compativel com celulares de 4 a 7 polegadas",
      "Base antiderrapante",
      "Montagem sem ferramentas",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/suporte-celular",
    badge: "FAVORITO",
  },
  {
    id: "porta-temperos-giratorio",
    name: "Porta-Temperos Giratorio",
    price: 69.0,
    formattedPrice: "R$ 69,00",
    category: "casa",
    imageUrl: "/images/products/porta-temperos.jpg",
    description:
      "Organizador giratorio para temperos e condimentos. Design elegante que combina funcionalidade com estetica para sua cozinha.",
    details: [
      "Capacidade para 12 potes",
      "Rotacao 360 graus",
      "Base estavel e antiderrapante",
      "Altura: 20 cm | Diametro: 22 cm",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-temperos",
  },
  {
    id: "porta-livros-geometrico",
    name: "Porta-Livros Geometrico",
    price: 89.0,
    formattedPrice: "R$ 89,00",
    category: "casa",
    imageUrl: "/images/products/porta-livros.jpg",
    description:
      "Par de porta-livros com design geometrico tridimensional. Funcionais e decorativos ao mesmo tempo, adicionam personalidade a qualquer prateleira.",
    details: [
      "Par com 2 unidades",
      "Suporta ate 5 kg por unidade",
      "Base com peso para estabilidade",
      "Dimensoes: 15 x 12 x 8 cm cada",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-livros",
  },
  {
    id: "kit-porta-plantas-suspenso",
    name: "Kit Porta-Plantas Suspenso",
    price: 129.0,
    formattedPrice: "R$ 129,00",
    category: "casa",
    imageUrl: "/images/products/porta-plantas.jpg",
    description:
      "Kit com 3 suportes suspensos para plantas. Design minimalista que traz a natureza para dentro de casa de forma elegante e moderna.",
    details: [
      "Kit com 3 suportes",
      "Para vasos de ate 12 cm de diametro",
      "Fixacao na parede inclusa",
      "Suporta ate 1,5 kg por suporte",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/porta-plantas",
    badge: "KIT",
  },
  {
    id: "dragao-articulado-colecao",
    name: "Dragao Articulado de Colecao",
    price: 189.0,
    formattedPrice: "R$ 189,00",
    category: "colecionaveis",
    imageUrl: "/images/products/dragao-articulado.jpg",
    description:
      "Dragao articulado com 47 juntas moveis, impresso peça por peça com maxima precisao. Flexivel e resistente, e uma obra de arte mecanica.",
    details: [
      "47 articulacoes moveis",
      "Comprimento: 35 cm",
      "Sem necessidade de montagem",
      "Impressao em PLA premium",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/dragao-articulado",
    badge: "ARTICULADO",
  },
  {
    id: "astronauta-colecionavel",
    name: "Astronauta Colecionavel",
    price: 159.0,
    formattedPrice: "R$ 159,00",
    category: "colecionaveis",
    imageUrl: "/images/products/astronauta.jpg",
    description:
      "Figura de astronauta detalhada com base decorativa. Uma peca que combina nostalgia espacial com impressao 3D de precisao milimetrica.",
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
      "Caixa organizadora com tampa encaixavel e design modular. Perfeita para organizar escritorio, quarto ou qualquer espaco da casa.",
    details: [
      "Tampa com encaixe preciso",
      "3 tamanhos disponiveis",
      "Empilhavel e modular",
      "Interior liso de facil limpeza",
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/caixa-organizadora",
  },
];

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = () => products.slice(0, 4);

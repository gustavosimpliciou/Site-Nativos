export type Product = {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  category: "camisetas" | "hoodies" | "calcas" | "acessorios" | "jaquetas";
  imageUrl: string;
  description?: string;
};

export const products: Product[] = [
  {
    id: "camiseta-glitch-drop",
    name: "Camiseta Glitch Drop",
    price: 149.00,
    formattedPrice: "R$ 149,00",
    category: "camisetas",
    imageUrl: "/images/products/camiseta-glitch.png",
    description: "Algodão premium 240gsm. Estampa digital com distorção gerada proceduralmente. Modelagem oversized boxy."
  },
  {
    id: "hoodie-urbano-3d",
    name: "Hoodie Urbano 3D",
    price: 279.00,
    formattedPrice: "R$ 279,00",
    category: "hoodies",
    imageUrl: "/images/products/hoodie-urbano.png",
    description: "Moletom 450gsm pesado. Padrões geométricos em alto relevo termo-prensados. Capuz estruturado."
  },
  {
    id: "calca-cargo-tech",
    name: "Calça Cargo Tech",
    price: 319.00,
    formattedPrice: "R$ 319,00",
    category: "calcas",
    imageUrl: "/images/products/calca-cargo.png",
    description: "Nylon ripstop resistente à água. 8 bolsos utilitários com fechamento magnético. Ajuste no tornozelo."
  },
  {
    id: "bone-signal",
    name: "Boné Signal",
    price: 89.00,
    formattedPrice: "R$ 89,00",
    category: "acessorios",
    imageUrl: "/images/products/bone-signal.png",
    description: "Five-panel clássico com bordado minimalista. Fecho snapback emborrachado."
  },
  {
    id: "camiseta-codigo-nativo",
    name: "Camiseta Código Nativo",
    price: 159.00,
    formattedPrice: "R$ 159,00",
    category: "camisetas",
    imageUrl: "/images/products/camiseta-codigo.png",
    description: "O código fonte da rua. Algodão lavado para aspecto vintage. Estampa refletiva em laranja elétrico."
  },
  {
    id: "hoodie-sombra-digital",
    name: "Hoodie Sombra Digital",
    price: 299.00,
    formattedPrice: "R$ 299,00",
    category: "hoodies",
    imageUrl: "/images/products/hoodie-sombra.png",
    description: "Silhueta desconstruída. Zíper assimétrico. Costuras laranjas contrastantes e interior felpado."
  },
  {
    id: "mochila-grid",
    name: "Mochila Grid",
    price: 189.00,
    formattedPrice: "R$ 189,00",
    category: "acessorios",
    imageUrl: "/images/products/mochila-grid.png",
    description: "Cordura 1000D. Compartimento acolchoado para notebook 16\". Sistema molle frontal com detalhes em paracord laranja."
  },
  {
    id: "jaqueta-matrix",
    name: "Jaqueta Matrix",
    price: 489.00,
    formattedPrice: "R$ 489,00",
    category: "jaquetas",
    imageUrl: "/images/products/jaqueta-matrix.png",
    description: "Bomber de couro sintético glossy. Forro acolchoado laranja elétrico. Isolamento térmico de alta performance."
  },
  {
    id: "camiseta-pixel-break",
    name: "Camiseta Pixel Break",
    price: 139.00,
    formattedPrice: "R$ 139,00",
    category: "camisetas",
    imageUrl: "/images/products/camiseta-pixel.png",
    description: "Estampa desfragmentada. Malha penteada pré-encolhida. Corte reto clássico streetwear."
  },
  {
    id: "calca-wide-glitch",
    name: "Calça Wide Glitch",
    price: 349.00,
    formattedPrice: "R$ 349,00",
    category: "calcas",
    imageUrl: "/images/products/calca-wide.png",
    description: "Jeans black 14oz. Modelagem super wide-leg. Detalhes de rasgos a laser e pesponto laranja vibrante."
  }
];

export const getProductById = (id: string) => products.find(p => p.id === id);

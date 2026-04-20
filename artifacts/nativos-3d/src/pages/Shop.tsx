import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearch } from "wouter";
import { products, categoryLabels, type ProductCategory } from "@/lib/data";
import { Search } from "lucide-react";

const ALL = "todos";
type Filter = ProductCategory | typeof ALL;

const categories: { key: Filter; label: string }[] = [
  { key: ALL, label: "Todos" },
  { key: "decoracao", label: "Decoracao" },
  { key: "uteis", label: "Uteis" },
  { key: "casa", label: "Para Casa" },
  { key: "facilitadores", label: "Facilitadores" },
  { key: "colecionaveis", label: "Colecionaveis" },
];

export default function Shop() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialCategory = (params.get("categoria") as ProductCategory) || ALL;

  const [activeCategory, setActiveCategory] = useState<Filter>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const p = new URLSearchParams(search);
    const cat = p.get("categoria") as ProductCategory | null;
    if (cat && categories.some((c) => c.key === cat)) {
      setActiveCategory(cat);
    }
  }, [search]);

  const filteredProducts = products.filter((p) => {
    const matchCat = activeCategory === ALL || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full bg-background min-h-screen pt-12 pb-32">
      <div className="container px-4 md:px-6">

        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl tracking-wider uppercase text-white mb-4"
          >
            CATALOGO <span className="text-primary">3D</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-muted-foreground text-lg mb-8"
          >
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative max-w-md mb-8"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produto..."
              className="w-full bg-card border border-white/10 text-white pl-12 pr-4 py-3 font-sans focus:outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground"
              data-testid="input-search"
            />
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`font-condensed text-lg tracking-widest uppercase px-6 py-2 transition-all duration-300 border ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(255,92,0,0.3)]"
                    : "bg-transparent text-muted-foreground border-white/10 hover:border-white/30 hover:text-white"
                }`}
                data-testid={`filter-${cat.key}`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
        >
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              key={product.id}
              data-testid={`product-card-${product.id}`}
            >
              <Link href={`/produto/${product.id}`} className="group block">
                <div className="relative aspect-square mb-5 overflow-hidden bg-card border border-white/5 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,92,0,0.12)] group-hover:-translate-y-2">
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-white font-condensed text-xs tracking-widest uppercase px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-106 group-hover:rotate-1 transition-all duration-700 ease-out"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = "none";
                      el.parentElement!.style.background = "linear-gradient(135deg, #1a1a1a 0%, #2d1500 100%)";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="font-display text-xl text-primary tracking-wider uppercase">Ver e Comprar</span>
                  </div>
                </div>

                <div className="flex justify-between items-start gap-3">
                  <div className="min-w-0">
                    <h3 className="font-condensed text-xl text-white tracking-wider uppercase mb-1 group-hover:text-primary transition-colors truncate">
                      {product.name}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground uppercase">{categoryLabels[product.category]}</p>
                  </div>
                  <span className="font-sans font-bold text-primary whitespace-nowrap">{product.formattedPrice}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32 border border-white/10 border-dashed">
            <p className="font-display text-4xl text-muted-foreground uppercase mb-4">Nenhum produto encontrado.</p>
            <button
              onClick={() => { setActiveCategory(ALL); setSearchQuery(""); }}
              className="font-condensed text-xl tracking-widest uppercase text-primary hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

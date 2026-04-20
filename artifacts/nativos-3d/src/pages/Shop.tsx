import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link, useSearch } from "wouter";
import { products, categoryLabels, type ProductCategory } from "@/lib/data";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const ALL = "todos";
type Filter = ProductCategory | typeof ALL;

const categories: { key: Filter; label: string; icon: string }[] = [
  { key: ALL, label: "Todos", icon: "✦" },
  { key: "decoracao", label: "Decoração", icon: "◈" },
  { key: "uteis", label: "Úteis", icon: "◉" },
  { key: "casa", label: "Para Casa", icon: "⬡" },
  { key: "facilitadores", label: "Facilitadores", icon: "◎" },
  { key: "colecionaveis", label: "Colecionáveis", icon: "◆" },
];

function CategoryCarousel({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: Filter;
  setActiveCategory: (cat: Filter) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    loop: false,
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      {/* Fade left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--color-background) 0%, color-mix(in srgb, var(--color-background) 80%, transparent) 60%, transparent 100%)",
        }}
      />
      {/* Fade right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--color-background) 0%, color-mix(in srgb, var(--color-background) 80%, transparent) 60%, transparent 100%)",
        }}
      />

      {/* Prev button */}
      <button
        onClick={scrollPrev}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200 ${
          !prevBtnEnabled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next button */}
      <button
        onClick={scrollNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200 ${
          !nextBtnEnabled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel track */}
      <div
        ref={emblaRef}
        className="overflow-hidden mx-4"
        style={{ perspective: "1000px" }}
      >
        <div className="flex gap-3 py-2 px-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`
                  flex-none flex flex-col items-center justify-center gap-1
                  w-[42vw] sm:w-44 px-4 py-4 sm:py-5
                  border font-condensed tracking-widest uppercase
                  transition-colors duration-300 cursor-pointer select-none
                  ${
                    isActive
                      ? "bg-primary/10 text-white border-primary shadow-[0_0_24px_rgba(255,92,0,0.25)] shadow-primary/25"
                      : "bg-card/40 text-muted-foreground border-white/8 hover:border-white/20 hover:text-white/80"
                  }
                `}
                data-testid={`filter-${cat.key}`}
              >
                <span
                  className={`text-2xl sm:text-3xl leading-none transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-white/20"
                  }`}
                >
                  {cat.icon}
                </span>
                <span className="text-xs sm:text-sm mt-1">{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-category-underline"
                    className="w-6 h-0.5 bg-primary mt-1"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
        <div className="mb-12 border-b border-white/10 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl tracking-wider uppercase text-white mb-4"
          >
            NOSSO <span className="text-primary">CATALOGO</span>
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
            className="relative max-w-md mb-10"
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

          {/* Category carousel */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="-mx-4 md:-mx-6"
          >
            <CategoryCarousel
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </motion.div>
        </div>

        {/* Grid: 2 cols mobile / 3 cols tablet / 4 cols desktop */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-12 md:gap-x-6 xl:gap-x-8 xl:gap-y-16"
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
                <div className="relative aspect-square mb-3 sm:mb-5 overflow-hidden bg-card border border-white/5 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,92,0,0.12)] group-hover:-translate-y-2">
                  {product.badge && (
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-primary text-white font-condensed text-[10px] sm:text-xs tracking-widest uppercase px-2 py-0.5 sm:px-3 sm:py-1">
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
                      el.parentElement!.style.background =
                        "linear-gradient(135deg, #1a1a1a 0%, #2d1500 100%)";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5">
                    <span className="font-display text-sm sm:text-xl text-primary tracking-wider uppercase">
                      Ver e Comprar
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-condensed text-sm sm:text-xl text-white tracking-wider uppercase group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between gap-1">
                    <p className="font-sans text-[10px] sm:text-xs text-muted-foreground uppercase">
                      {categoryLabels[product.category]}
                    </p>
                    <span className="font-sans font-bold text-xs sm:text-base text-primary whitespace-nowrap">
                      {product.formattedPrice}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32 border border-white/10 border-dashed">
            <p className="font-display text-4xl text-muted-foreground uppercase mb-4">
              Nenhum produto encontrado.
            </p>
            <button
              onClick={() => {
                setActiveCategory(ALL);
                setSearchQuery("");
              }}
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

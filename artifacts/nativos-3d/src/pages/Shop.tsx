import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { products } from "@/lib/data";

const categories = ["todos", "camisetas", "hoodies", "calcas", "acessorios", "jaquetas"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProducts = activeCategory === "todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-background min-h-screen pt-12 pb-32">
      <div className="container px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl tracking-wider uppercase text-white mb-6 text-glow"
          >
            ARSENAL
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-condensed text-lg tracking-widest uppercase px-6 py-2 transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground border-primary box-glow" 
                    : "bg-transparent text-muted-foreground border-white/10 hover:border-white/30 hover:text-white"
                }`}
                data-testid={`filter-${cat}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
        >
          {filteredProducts.map((product, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              key={product.id}
            >
              <Link href={`/produto/${product.id}`} className="group block">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-card border border-white/5 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,92,0,0.15)] group-hover:-translate-y-2">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="font-display text-2xl text-primary tracking-wider uppercase">Equipar</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-condensed text-2xl text-white tracking-widest uppercase mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="font-sans text-sm text-muted-foreground uppercase">{product.category}</p>
                  </div>
                  <span className="font-sans font-bold text-white bg-white/10 px-3 py-1 rounded-sm">{product.formattedPrice}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32 border border-white/10 border-dashed">
            <p className="font-display text-4xl text-muted-foreground uppercase">Nenhum item encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}

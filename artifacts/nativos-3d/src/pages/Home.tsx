import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Zap, Package, Shield, Star } from "lucide-react";
import { products, categoryLabels } from "@/lib/data";
import CategoryCarousel from "@/components/CategoryCarousel";
import { useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const heroTaglines = [
  "Decoração, utilidade e coleções de alto padrão.",
  "Cada peça conta uma história.",
  "Impresso no Brasil. Sentido em cada detalhe.",
  "Arte que você toca. Design que fica.",
  "Do projeto à sua mesa — camada por camada.",
  "Objetos únicos para espaços únicos.",
];

export default function Home() {
  const featuredProducts = products.slice(0, 12);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
          <img
            src="/images/hero-bg.jpg"
            alt="Nativos 3D - Impressão 3D Premium"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0D0D0D] via-[#1a0a00] to-[#0D0D0D]" />
        </div>

        <div className="container relative z-30 px-4 md:px-6 flex flex-col items-center text-center pt-14 md:pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.p
              variants={fadeInUp}
              className="font-condensed text-primary text-sm md:text-base tracking-[0.4em] uppercase mb-6 border border-primary/30 inline-block px-4 py-1"
            >
              Produtos de Alta Qualidade
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-6xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tight uppercase text-white mb-6"
            >
              OBJETOS QUE
              <br />
              <span className="text-primary">TRANSFORMAM</span>
              <br />
              ESPAÇOS
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="h-10 md:h-12 flex items-center justify-center max-w-2xl mx-auto mb-12 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="font-condensed text-xl md:text-2xl text-gray-300 tracking-widest uppercase text-center"
                >
                  {heroTaglines[taglineIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:mb-16">
              <Link
                href="/loja"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-lg tracking-widest uppercase rounded-xl hover:bg-orange-600 transition-all duration-300 hover:scale-105 active:scale-95"
                data-testid="hero-cta-button"
              >
                VER CATÁLOGO <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-display text-lg tracking-widest uppercase rounded-xl hover:border-primary hover:text-primary transition-all duration-300"
              >
                NOSSA HISTÓRIA
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto"
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-card/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "+500", label: "Produtos Entregues" },
              { value: "100%", label: "Impressão Nacional" },
              { value: "5★", label: "Avaliação Média" },
              { value: "30 dias", label: "Garantia de Satisfação" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-8 px-6 text-center"
              >
                <p className="font-display text-4xl text-primary mb-1">{stat.value}</p>
                <p className="font-sans text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Carousel */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl tracking-wider text-white uppercase mb-4">
              NOSSAS <span className="text-primary">CATEGORIAS</span>
            </h2>
            <p className="font-sans text-muted-foreground text-lg max-w-xl mx-auto">
              Do decorativo ao funcional — cada peça projetada para surpreender.
            </p>
          </motion.div>

          <CategoryCarousel />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-card/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <h2 className="font-display text-5xl md:text-6xl tracking-wider text-white uppercase mb-2">
                MAIS <span className="text-primary">VENDIDOS</span>
              </h2>
              <p className="font-condensed text-xl text-muted-foreground tracking-widest uppercase">
                As peças favoritas dos nossos clientes.
              </p>
            </div>
            <Link
              href="/loja"
              className="font-condensed text-lg tracking-widest uppercase text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors whitespace-nowrap"
            >
              Ver Catálogo Completo →
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 xl:gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link href={`/produto/${product.id}`} className="group block" data-testid={`featured-product-${product.id}`}>
                  <div className="relative aspect-square mb-4 overflow-hidden bg-card border border-white/5 group-hover:border-primary/40 transition-all duration-300">
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 bg-primary text-white font-condensed text-xs tracking-widest uppercase px-3 py-1">
                        {product.badge}
                      </span>
                    )}
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = "none";
                        el.parentElement!.style.background = "linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%)";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="font-display text-xl text-primary tracking-wider uppercase">Ver Detalhes</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-condensed text-base md:text-xl text-white tracking-wider uppercase mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-muted-foreground uppercase">{categoryLabels[product.category]}</p>
                    </div>
                    <span className="font-sans font-bold text-primary text-sm whitespace-nowrap ml-2">{product.formattedPrice}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-14"
          >
            <Link
              href="/loja"
              className="inline-flex items-center gap-3 px-12 py-4 border-2 border-primary text-primary font-display text-lg tracking-widest uppercase hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
            >
              VER TODOS <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-7xl tracking-wider uppercase text-white mb-6">
              FEITO COM <span className="text-primary">PRECISÃO</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada produto Nativos 3D é impresso com filamentos premium, camada a camada, garantindo resistência estrutural, detalhamento excepcional e acabamento de alto nível.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Alta Precisão",
                desc: "Impressão com resolução de 0.1mm para máximos detalhes e acabamento impecável.",
              },
              {
                icon: <Package className="w-8 h-8" />,
                title: "Embalagem Segura",
                desc: "Produtos embalados individualmente com proteção reforçada para chegarem perfeitos ao seu destino.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Garantia Total",
                desc: "30 dias de garantia de satisfação. Se não estiver satisfeito, resolvemos — sem burocracia.",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Qualidade Premium",
                desc: "PLA e PETG de alta qualidade, resistentes e duradouros para uso cotidiano.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 bg-card hover:border-primary/40 transition-colors group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl text-white tracking-wider uppercase mb-3">{item.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col justify-center gap-6 opacity-[0.08]">
          {[0, 1].map((row) => (
            <motion.div
              key={row}
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: row % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              {Array(6).fill(0).map((_, i) => (
                <span key={i} className="font-display text-7xl md:text-9xl text-black uppercase tracking-widest shrink-0">
                  NATIVOS 3D // NATIVOS 3D //&nbsp;
                </span>
              ))}
            </motion.div>
          ))}
        </div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl leading-tight tracking-wider uppercase text-black mb-8"
          >
            SEU ESPAÇO MERECE<br />O MELHOR DO 3D
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/loja"
              className="inline-flex items-center gap-3 px-12 py-6 bg-black text-white font-display text-2xl tracking-widest uppercase hover:bg-[#0D0D0D] transition-colors duration-300"
              data-testid="cta-bottom"
            >
              EXPLORAR CATÁLOGO <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

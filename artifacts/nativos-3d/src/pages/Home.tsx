import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Zap, Package, Shield, Star } from "lucide-react";
import { products, categoryLabels, type ProductCategory } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const categories: { key: ProductCategory; label: string; icon: string }[] = [
  { key: "decoracao", label: "Decoracao", icon: "◈" },
  { key: "uteis", label: "Uteis", icon: "◉" },
  { key: "casa", label: "Para Casa", icon: "◇" },
  { key: "facilitadores", label: "Facilitadores", icon: "◆" },
  { key: "colecionaveis", label: "Colecionaveis", icon: "◎" },
];

export default function Home() {
  const featuredProducts = products.filter((p) => p.badge).slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
          <img
            src="/images/hero-bg.jpg"
            alt="Nativos 3D - Impressao 3D Premium"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0D0D0D] via-[#1a0a00] to-[#0D0D0D]" />
        </div>

        <div className="container relative z-30 px-4 md:px-6 flex flex-col items-center text-center">
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
              Impressao 3D de Alta Precisao
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-6xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tight uppercase text-white mb-6"
            >
              OBJETOS QUE
              <br />
              <span className="text-primary">TRANSFORMAM</span>
              <br />
              ESPACOS
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-condensed text-xl md:text-2xl text-gray-300 tracking-widest max-w-2xl mx-auto mb-12 uppercase"
            >
              Decoracao, utilidade e colecoes feitas camada por camada com precisao milimetrica.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/loja"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display text-2xl tracking-widest uppercase hover:bg-orange-600 transition-all duration-300 hover:scale-105 active:scale-95"
                data-testid="hero-cta-button"
              >
                VER CATALOGO <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-display text-2xl tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
              >
                NOSSA HISTORIA
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
              { value: "100%", label: "Impressao Nacional" },
              { value: "5★", label: "Avaliacao Media" },
              { value: "30 dias", label: "Garantia de Satisfacao" },
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

      {/* Categories */}
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
              Do decorativo ao funcional, temos a peca certa para cada necessidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/loja?categoria=${cat.key}`}
                  className="group flex flex-col items-center justify-center gap-4 p-8 border border-white/10 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                  data-testid={`category-${cat.key}`}
                >
                  <span className="text-4xl text-primary group-hover:scale-125 transition-transform duration-300">{cat.icon}</span>
                  <span className="font-condensed text-xl tracking-widest uppercase text-white group-hover:text-primary transition-colors">{cat.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
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
                As pecas favoritas dos nossos clientes.
              </p>
            </div>
            <Link
              href="/loja"
              className="font-condensed text-lg tracking-widest uppercase text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors whitespace-nowrap"
            >
              Ver Catalogo Completo →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/produto/${product.id}`} className="group block" data-testid={`featured-product-${product.id}`}>
                  <div className="relative aspect-square mb-5 overflow-hidden bg-card border border-white/5 group-hover:border-primary/40 transition-all duration-300">
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
                      <h3 className="font-condensed text-xl text-white tracking-wider uppercase mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground uppercase">{categoryLabels[product.category]}</p>
                    </div>
                    <span className="font-sans font-bold text-primary text-sm">{product.formattedPrice}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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
              FEITO COM <span className="text-primary">PRECISAO</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada produto Nativos 3D e impresso com filamentos de alta qualidade, camada por camada, para garantir resistencia, detalhamento e beleza.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Alta Precisao",
                desc: "Impressao com resolucao de 0.1mm para maximos detalhes e acabamento impecavel.",
              },
              {
                icon: <Package className="w-8 h-8" />,
                title: "Embalagem Segura",
                desc: "Produtos embalados individualmente com protecao especial para chegar intacto.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Garantia Total",
                desc: "30 dias de garantia de satisfacao. Se nao gostar, resolvemos.",
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
        <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap gap-4 items-center justify-center overflow-hidden">
          {Array(15).fill(0).map((_, i) => (
            <span key={i} className="font-display text-8xl text-black whitespace-nowrap rotate-[-8deg] blur-[1px]">
              NATIVOS 3D //
            </span>
          ))}
        </div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl leading-tight tracking-wider uppercase text-black mb-8"
          >
            SEU ESPACO MERECE<br />O MELHOR DO 3D
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
              EXPLORAR CATALOGO <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { products } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
          <img 
            src="/images/hero-bg.png" 
            alt="Nativos 3D Hero" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container relative z-30 px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight uppercase text-white mb-6 text-glow"
            >
              NÃO É SÓ PRODUTO.
              <br />
              <span className="text-primary">É PRESENÇA.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="font-condensed text-xl md:text-2xl text-gray-300 tracking-widest max-w-2xl mx-auto mb-10 uppercase"
            >
              A rua encontra o digital. Vista o futuro hoje. Sem desculpas.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Link 
                href="/loja"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display text-2xl tracking-widest uppercase hover:bg-orange-600 transition-all duration-300 box-glow-strong hover:scale-105 active:scale-95"
                data-testid="hero-cta-button"
              >
                VER COLEÇÃO
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <h2 className="font-display text-5xl md:text-6xl tracking-wider text-white uppercase mb-2">
                DROP <span className="text-primary">ATUAL</span>
              </h2>
              <p className="font-condensed text-xl text-muted-foreground tracking-widest uppercase">
                O que tá dominando as ruas agora.
              </p>
            </div>
            
            <Link 
              href="/loja"
              className="font-condensed text-lg tracking-widest uppercase text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors"
            >
              Ver Tudo →
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
                <Link href={`/produto/${product.id}`} className="group block">
                  <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-card border border-white/5 group-hover:border-primary/30 transition-colors">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="font-display text-2xl text-primary tracking-wider uppercase">Ver Detalhes</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-condensed text-2xl text-white tracking-widest uppercase mb-1">{product.name}</h3>
                      <p className="font-sans text-sm text-muted-foreground uppercase">{product.category}</p>
                    </div>
                    <span className="font-sans font-bold text-primary">{product.formattedPrice}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-7xl leading-tight tracking-wider uppercase text-white mb-10"
            >
              NÓS NÃO SEGUIMOS TENDÊNCIAS.<br/>
              NÓS <span className="text-primary text-glow">HACKEAMOS</span> O SISTEMA.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-condensed text-2xl text-gray-400 tracking-widest uppercase leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Nativos 3D nasceu do caos urbano. Da estática das telas quebradas e das luzes de neon nos becos. Cada peça é um glitch na matrix da moda convencional.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/sobre"
                className="inline-block border border-primary/50 text-white font-condensed text-xl tracking-widest uppercase px-8 py-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                NOSSA HISTÓRIA
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Parallax Banner */}
      <section className="h-[60vh] relative flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0 opacity-20 pointer-events-none flex flex-wrap gap-4 items-center justify-center overflow-hidden">
          {Array(20).fill(0).map((_, i) => (
             <span key={i} className="font-display text-8xl text-primary whitespace-nowrap opacity-10 rotate-[-10deg] blur-[2px]">NATIVOS 3D // </span>
          ))}
        </div>
        
        <div className="relative z-10 container px-4 flex flex-col items-center">
           <h2 className="font-display text-6xl md:text-8xl tracking-wider text-center text-white mb-12 uppercase">
              SEU ARMADURA<br/>DIÁRIA
           </h2>
           <Link 
              href="/loja"
              className="px-10 py-5 bg-white text-black font-display text-2xl tracking-widest uppercase hover:bg-primary hover:text-white transition-colors duration-300"
           >
             INICIAR UPLOAD
           </Link>
        </div>
      </section>
    </div>
  );
}

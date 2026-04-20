import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black via-transparent to-transparent z-20" />
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-background via-transparent to-transparent z-20" />
          <img 
            src="/images/about-origin.png" 
            alt="Nativos 3D Origin" 
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        
        <div className="container relative z-30 px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="font-sans text-primary text-sm font-bold tracking-widest uppercase mb-6">
              // NOSSA ORIGEM
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight uppercase text-white mb-8 text-glow">
              O SISTEMA ESTÁ QUEBRADO.<br />
              <span className="text-gray-600">NÓS SOMOS O GLITCH.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Blocks */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-5xl md:text-6xl tracking-wider uppercase text-white mb-8">
                NASCIDO NO <span className="text-primary">CAOS</span>
              </h2>
              <div className="space-y-6 font-sans text-lg text-gray-400 leading-relaxed">
                <p>
                  Nativos 3D não é uma marca que nasceu numa sala de reunião. Nós nascemos do barulho da rua, do brilho das telas de neon nas madrugadas chuvosas de São Paulo, e da colisão inevitável entre a cultura analógica e o mundo digital.
                </p>
                <p>
                  Em 2022, começamos estampando códigos quebrados e grafites renderizados em camisetas velhas. Hoje, construímos armaduras para quem vive entre dois mundos.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-card border border-white/10 relative p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 pattern-dots" />
                <h3 className="font-display text-7xl text-white/10 text-center uppercase tracking-widest rotate-[-15deg] scale-150">
                  ERROR 404 NOT FOUND ERROR 404 NOT FOUND
                </h3>
                <div className="relative z-10 font-condensed text-4xl text-white tracking-widest text-center border-4 border-primary p-8 bg-background/80 backdrop-blur-sm box-glow">
                  NÃO PEDIMOS<br/>LICENÇA.
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-24 flex-col-reverse md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-5xl md:text-6xl tracking-wider uppercase text-white mb-8">
                FUTURO <span className="text-primary">BRUTAL</span>
              </h2>
              <div className="space-y-6 font-sans text-lg text-gray-400 leading-relaxed">
                <p>
                  Nossa estética é intencionalmente abrasiva. O conforto não está em seguir as regras, mas em reescrevê-las. Usamos tecidos pesados, cortes desconstruídos e acabamentos utilitários porque a cidade exige resistência.
                </p>
                <p>
                  A Nativos 3D veste os arquitetos do amanhã. Os desenvolvedores, os artistas de rua, os criadores digitais e os rebeldes anônimos.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src="/images/about-future.png" 
                  alt="Future Fashion" 
                  className="w-full h-full object-cover border border-white/10"
                />
                <div className="absolute inset-0 border-[10px] border-background mix-blend-overlay" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Manifesto Marquee */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex"
          >
            {[...Array(5)].map((_, i) => (
              <span key={i} className="font-display text-8xl text-black tracking-widest uppercase mx-8">
                SEJA O DEFEITO NO SISTEMA //
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

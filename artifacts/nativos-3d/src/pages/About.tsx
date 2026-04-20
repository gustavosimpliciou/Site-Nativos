import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layers, Cpu, Heart, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <section className="relative py-40 md:py-56 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10" />
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-background via-transparent to-transparent z-20" />
          <img
            src="/images/about-bg.jpg"
            alt="Nativos 3D - Impressão 3D"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0D0D0D] via-[#1a0800] to-[#0D0D0D]" />
        </div>

        <div className="container relative z-30 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="font-condensed text-primary text-sm font-bold tracking-[0.4em] uppercase mb-6 border border-primary/30 inline-block px-4 py-1">
              Nossa História
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[100px] leading-[0.85] tracking-tight uppercase text-white mb-8">
              CRIADO CAMADA
              <br />
              <span className="text-primary">POR CAMADA</span>
            </h1>
            <p className="font-sans text-xl text-gray-300 leading-relaxed max-w-2xl">
              Nascemos da paixão pela impressão 3D e da convicção de que objetos bem projetados transformam o cotidiano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
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
                COMO <span className="text-primary">TUDO COMEÇOU</span>
              </h2>
              <div className="space-y-6 font-sans text-lg text-gray-400 leading-relaxed">
                <p>
                  A Nativos 3D nasceu de uma garagem, de uma impressora e de uma ideia simples: criar objetos que as pessoas realmente queiram ter em suas casas, mesas e vidas.
                </p>
                <p>
                  Desde o primeiro vaso geométrico impresso até as coleções de figuras articuladas, cada peça carrega horas de projeto, testes e aperfeiçoamento. A impressão 3D é nossa linguagem — precisão e arte em um só lugar.
                </p>
                <p>
                  Hoje, com clientes em todo o Brasil, seguimos com o mesmo propósito: democratizar objetos bonitos, funcionais e únicos que antes só existiam em renders digitais.
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
              <div className="aspect-square bg-card border border-white/10 relative overflow-hidden flex items-center justify-center">
                <img
                  src="/images/about-workshop.jpg"
                  alt="Nossa oficina de impressão 3D"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10 bg-gradient-to-br from-[#1a1a1a] to-[#2d1200]">
                  <span className="font-display text-[120px] text-primary/20 leading-none">3D</span>
                  <div className="relative z-10 font-condensed text-3xl text-white tracking-widest text-center border-2 border-primary p-8 bg-background/70 backdrop-blur-sm">
                    IMPRESSO<br/>NO BRASIL
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="aspect-[4/3] border border-white/10 overflow-hidden">
                <img
                  src="/images/about-products.jpg"
                  alt="Produtos Nativos 3D"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    el.parentElement!.style.background = "linear-gradient(135deg, #1a1a1a, #3d1800)";
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="font-display text-5xl md:text-6xl tracking-wider uppercase text-white mb-8">
                O QUE NOS <span className="text-primary">GUIA</span>
              </h2>
              <div className="space-y-6 font-sans text-lg text-gray-400 leading-relaxed">
                <p>
                  Não fazemos produtos em massa. Cada peça é planejada, testada e ajustada até chegar ao nível de qualidade que nossos clientes esperam.
                </p>
                <p>
                  Usamos filamentos premium, máquinas calibradas e muito cuidado no pós-processamento. O resultado é um produto que você toca e sente a diferença.
                </p>
                <p>
                  Nosso catálogo cresce com base no que nossos clientes pedem. Se você tem uma ideia, nos ouvimos — e muitas vezes viramos produtos que todo mundo quer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-card/30">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl tracking-wider uppercase text-white text-center mb-16"
          >
            NOSSOS <span className="text-primary">VALORES</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Precisão",
                desc: "Impressão com tolerância de 0.1mm. Cada camada importa, cada detalhe é intencional.",
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Inovação",
                desc: "Projetos próprios criados com softwares de ponta. Design funcional e estético ao mesmo tempo.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Cuidado",
                desc: "Embalagem individual, inspeção manual antes do envio. Seu produto chega como deveria.",
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Sustentabilidade",
                desc: "PLA biodegradável como material principal. Produção sob demanda, sem desperdício.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 bg-background hover:border-primary/40 transition-colors group"
              >
                <div className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {value.icon}
                </div>
                <h3 className="font-display text-2xl text-white tracking-wider uppercase mb-3">{value.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Marquee */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex"
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="font-display text-7xl text-black tracking-widest uppercase mx-8">
                FEITO CAMADA POR CAMADA //
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background text-center">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl tracking-wider uppercase text-white mb-8"
          >
            PRONTO PARA CONHECER<br />
            <span className="text-primary">NOSSOS PRODUTOS?</span>
          </motion.h2>
          <Link
            href="/loja"
            className="inline-flex items-center gap-3 px-12 py-6 bg-primary text-primary-foreground font-display text-2xl tracking-widest uppercase hover:bg-orange-500 transition-all duration-300 hover:scale-105"
            data-testid="about-cta"
          >
            VER CATÁLOGO
          </Link>
        </div>
      </section>
    </div>
  );
}

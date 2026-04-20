import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { getProductById, categoryLabels } from "@/lib/data";
import { ArrowLeft, ShoppingCart, Shield, Truck, RotateCcw, CheckCircle } from "lucide-react";

export default function ProductDetail() {
  const [, params] = useRoute("/produto/:id");
  const productId = params?.id;
  const product = productId ? getProductById(productId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-6xl text-white mb-4 uppercase">Produto nao encontrado</h1>
          <Link href="/loja" className="text-primary hover:underline font-condensed text-xl tracking-widest uppercase">
            Voltar para o catalogo
          </Link>
        </div>
      </div>
    );
  }

  const handleBuyKiwify = () => {
    window.open(product.kiwifyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full bg-background min-h-screen py-12 lg:py-24">
      <div className="container px-4 md:px-6">

        <Link
          href="/loja"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white font-condensed text-lg tracking-widest uppercase mb-12 transition-colors"
          data-testid="link-back-to-shop"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar ao Catalogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-card border border-white/10 relative overflow-hidden group">
              {product.badge && (
                <div className="absolute top-5 left-5 z-10">
                  <span className="bg-primary text-white font-condensed text-sm tracking-widest uppercase px-4 py-2">
                    {product.badge}
                  </span>
                </div>
              )}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement!;
                  parent.style.background = "linear-gradient(135deg, #1a1a1a 0%, #2d1500 100%)";
                  const label = document.createElement("div");
                  label.style.cssText = "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:rgba(255,92,0,0.3);font-size:5rem;";
                  label.textContent = "◈";
                  parent.appendChild(label);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Trust badges below image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: <Shield className="w-4 h-4" />, text: "30 dias de garantia" },
                { icon: <Truck className="w-4 h-4" />, text: "Entrega para todo Brasil" },
                { icon: <RotateCcw className="w-4 h-4" />, text: "Devolucao facilitada" },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-4 bg-card border border-white/5 text-center">
                  <div className="text-primary">{badge.icon}</div>
                  <span className="font-sans text-xs text-muted-foreground leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <p className="font-condensed text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">
                {categoryLabels[product.category]}
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white uppercase mb-6 leading-none">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 mb-2">
                <p className="font-display text-5xl text-primary tracking-wider">
                  {product.formattedPrice}
                </p>
              </div>
              <p className="font-sans text-sm text-muted-foreground">Pagamento seguro via Kiwify</p>
            </div>

            <div className="h-px w-full bg-white/10 mb-8" />

            <p className="font-sans text-gray-300 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Details */}
            <div className="mb-10 space-y-3">
              <h3 className="font-condensed text-lg tracking-widest uppercase text-white mb-4">Especificacoes</h3>
              {product.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-gray-400">{detail}</span>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-white/10 mb-8" />

            {/* Kiwify CTA */}
            <button
              onClick={handleBuyKiwify}
              className="w-full py-6 bg-primary text-primary-foreground font-display text-3xl tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,92,0,0.25)] hover:shadow-[0_0_60px_rgba(255,92,0,0.4)] mb-4"
              data-testid="btn-buy-kiwify"
            >
              <ShoppingCart className="w-8 h-8" />
              COMPRAR AGORA
            </button>

            <p className="text-center font-sans text-sm text-muted-foreground mb-8">
              Voce sera redirecionado ao checkout seguro via Kiwify
            </p>

            {/* Share / Social */}
            <div className="mt-4 p-5 border border-white/5 bg-card/50">
              <p className="font-condensed text-muted-foreground tracking-widest uppercase text-sm mb-3">
                Material utilizado
              </p>
              <div className="flex flex-wrap gap-2">
                {["PLA Premium", "Alta Resolucao 0.1mm", "Impresso no Brasil", "Eco-Friendly"].map((tag) => (
                  <span key={tag} className="font-sans text-xs text-muted-foreground border border-white/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        <div className="mt-32">
          <h2 className="font-display text-4xl tracking-wider text-white uppercase mb-12">
            EXPLORE MAIS <span className="text-primary">PRODUTOS</span>
          </h2>
          <div className="text-center">
            <Link
              href="/loja"
              className="inline-flex items-center gap-3 px-10 py-5 border border-primary text-primary font-display text-2xl tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-testid="link-explore-more"
            >
              VER CATALOGO COMPLETO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

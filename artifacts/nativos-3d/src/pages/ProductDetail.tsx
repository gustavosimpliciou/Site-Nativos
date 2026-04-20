import { useEffect, useState, useMemo, useRef } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { getProductById, categoryLabels, products } from "@/lib/data";
import {
  ArrowLeft,
  ShoppingCart,
  Shield,
  Truck,
  RotateCcw,
  CheckCircle,
  Star,
  Lock,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Home,
} from "lucide-react";

type Tab = "descricao" | "especificacoes" | "avaliacoes";

export default function ProductDetail() {
  const [, params] = useRoute("/produto/:id");
  const productId = params?.id;
  const product = productId ? getProductById(productId) : null;
  const [activeTab, setActiveTab] = useState<Tab>("descricao");
  const [cep, setCep] = useState("");
  const [imageLoaded, setImageLoaded] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const randomProducts = useMemo(() => {
    const others = products.filter((p) => p.id !== productId);
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  }, [productId]);

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === "right" ? 260 : -260, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setImageLoaded(true);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-6xl text-white mb-4 uppercase">
            Produto nao encontrado
          </h1>
          <Link
            href="/loja"
            className="text-primary hover:underline font-condensed text-xl tracking-widest uppercase"
          >
            Voltar para o catalogo
          </Link>
        </div>
      </div>
    );
  }

  const handleBuyKiwify = () => {
    window.open(product.kiwifyUrl, "_blank", "noopener,noreferrer");
  };

  const pixPrice = (product.price * 0.95).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const installmentPrice = (product.price / 3).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const tabs: { key: Tab; label: string }[] = [
    { key: "descricao", label: "Descrição Geral" },
    { key: "especificacoes", label: "Especificações" },
    { key: "avaliacoes", label: "Avaliações" },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-card/30">
        <div className="container px-4 md:px-6 py-3">
          <nav className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground flex-wrap">
            <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Home className="w-3 h-3" />
              Home
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link href="/loja" className="hover:text-primary transition-colors">
              Loja
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-white/60">{categoryLabels[product.category]}</span>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-white/40 truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8 lg:py-12">
        {/* Back link */}
        <Link
          href="/loja"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white font-condensed text-sm tracking-widest uppercase mb-8 transition-colors"
          data-testid="link-back-to-shop"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao Catálogo
        </Link>

        {/* Main grid — 55% image / 45% info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-8 lg:gap-12">

          {/* ── LEFT: Image Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-4"
          >
            {/* Main image */}
            <div className="relative bg-card border border-white/10 overflow-hidden group">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-white font-condensed text-xs tracking-widest uppercase px-3 py-1.5 shadow-lg">
                    {product.badge}
                  </span>
                </div>
              )}

              {imageLoaded ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  style={{ maxHeight: "600px", minHeight: "380px" }}
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                <div
                  className="w-full flex items-center justify-center"
                  style={{
                    minHeight: "480px",
                    background: "linear-gradient(135deg, #1a1a1a 0%, #2d1500 100%)",
                  }}
                >
                  <span style={{ color: "rgba(255,92,0,0.3)", fontSize: "6rem" }}>◈</span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

              {/* Zoom hint */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 text-[10px] font-sans text-white/50 tracking-wider uppercase">
                Passe o mouse para ampliar
              </div>
            </div>

            {/* Thumbnail strip (single thumb for now, easy to extend) */}
            <div className="flex gap-3">
              <button
                className="w-16 h-16 border-2 border-primary bg-card overflow-hidden flex-shrink-0"
                aria-label="Imagem principal"
              >
                {imageLoaded ? (
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1a1a1a, #2d1500)" }}
                  >
                    <span style={{ color: "rgba(255,92,0,0.4)", fontSize: "1.2rem" }}>◈</span>
                  </div>
                )}
              </button>
            </div>

            {/* Trust badges (desktop: below image, mobile: hidden — shown in right panel) */}
            <div className="hidden lg:grid grid-cols-3 gap-3 mt-2">
              {[
                { icon: <Shield className="w-4 h-4" />, text: "30 dias de garantia" },
                { icon: <Truck className="w-4 h-4" />, text: "Entrega para todo Brasil" },
                { icon: <RotateCcw className="w-4 h-4" />, text: "Devolução facilitada" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-3 bg-card border border-white/5 text-center"
                >
                  <div className="text-primary">{badge.icon}</div>
                  <span className="font-sans text-[11px] text-muted-foreground leading-tight">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Purchase Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col"
          >
            {/* Badge / launch tag */}
            {product.badge && (
              <div className="mb-3">
                <span className="bg-primary/15 border border-primary/40 text-primary font-condensed text-xs tracking-[0.2em] uppercase px-3 py-1">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] tracking-wide text-white uppercase leading-tight mb-3">
              {product.name}
            </h1>

            {/* SKU + Category */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-xs text-muted-foreground tracking-wider">
                REF: {product.id.toUpperCase().replace(/-/g, "")}
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="font-condensed text-xs text-primary tracking-widest uppercase">
                {categoryLabels[product.category]}
              </span>
            </div>

            {/* Star rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4"
                    style={{
                      fill: s <= 4 ? "#ff5c00" : "transparent",
                      color: s <= 4 ? "#ff5c00" : "#555",
                    }}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-muted-foreground">
                Seja o primeiro a opinar
              </span>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/8 mb-5" />

            {/* Price block */}
            <div className="mb-5">
              <p className="font-display text-5xl text-primary tracking-wider leading-none mb-2">
                {product.formattedPrice}
              </p>
              <p className="font-sans text-sm text-green-400 font-medium">
                {pixPrice} à vista com desconto Pix
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-1">
                ou 3x de {installmentPrice} sem juros no cartão
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/8 mb-5" />

            {/* Buy button */}
            <button
              onClick={handleBuyKiwify}
              className="w-full py-5 bg-primary text-white font-display text-2xl tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,92,0,0.3)] hover:shadow-[0_0_50px_rgba(255,92,0,0.5)] mb-3"
              data-testid="btn-buy-kiwify"
            >
              <ShoppingCart className="w-6 h-6" />
              COMPRAR PRODUTO
            </button>

            {/* Secure purchase */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <Lock className="w-3.5 h-3.5 text-muted-foreground" />
              <p className="font-sans text-xs text-muted-foreground text-center">
                Sua compra é 100% segura, compre com tranquilidade.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/8 mb-5" />

            {/* Shipping calculator */}
            <div className="bg-card/50 border border-white/8 p-4 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="w-4 h-4 text-primary" />
                <span className="font-condensed text-sm tracking-widest uppercase text-white">
                  Frete e prazo de entrega
                </span>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
                    placeholder="Informe seu CEP"
                    className="w-full bg-background border border-white/10 text-white text-sm font-sans pl-9 pr-3 py-2.5 focus:outline-none focus:border-primary/50 placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>
                <button className="px-4 py-2.5 bg-primary text-white font-condensed text-sm tracking-widest uppercase hover:bg-orange-500 transition-colors flex-shrink-0">
                  CALCULAR
                </button>
              </div>
              <a
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-sans text-primary/70 hover:text-primary mt-2 block transition-colors"
              >
                Não sei meu CEP
              </a>
            </div>

            {/* Trust badges (mobile only) */}
            <div className="grid grid-cols-3 gap-2 lg:hidden">
              {[
                { icon: <Shield className="w-4 h-4" />, text: "30 dias de garantia" },
                { icon: <Truck className="w-4 h-4" />, text: "Entrega para todo Brasil" },
                { icon: <RotateCcw className="w-4 h-4" />, text: "Devolução facilitada" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1.5 p-3 bg-card border border-white/5 text-center"
                >
                  <div className="text-primary">{badge.icon}</div>
                  <span className="font-sans text-[10px] text-muted-foreground leading-tight">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-5 p-4 border border-white/5 bg-card/30">
              <p className="font-condensed text-muted-foreground tracking-widest uppercase text-[11px] mb-2">
                Material utilizado
              </p>
              <div className="flex flex-wrap gap-2">
                {["PLA Premium", "Alta Resolução 0.1mm", "Impresso no Brasil", "Eco-Friendly"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[11px] text-muted-foreground border border-white/10 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── TABS SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-16"
        >
          {/* Tab headers */}
          <div className="flex border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`font-condensed text-sm tracking-widest uppercase px-6 py-4 transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === tab.key
                    ? "border-primary text-white"
                    : "border-transparent text-muted-foreground hover:text-white/70"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="pt-8 pb-4">
            {activeTab === "descricao" && (
              <motion.div
                key="descricao"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl"
              >
                <p className="font-sans text-gray-300 text-base lg:text-lg leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            )}

            {activeTab === "especificacoes" && (
              <motion.div
                key="especificacoes"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl space-y-3"
              >
                {product.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-white/5">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-gray-300 text-sm">{detail}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "avaliacoes" && (
              <motion.div
                key="avaliacoes"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl"
              >
                <div className="text-center py-12 border border-white/8 bg-card/30">
                  <div className="flex justify-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-6 h-6"
                        style={{ fill: "transparent", color: "#555" }}
                      />
                    ))}
                  </div>
                  <p className="font-condensed text-muted-foreground tracking-widest uppercase text-sm">
                    Nenhuma avaliação ainda
                  </p>
                  <p className="font-sans text-xs text-muted-foreground/60 mt-2">
                    Seja o primeiro a avaliar este produto após a compra.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* ── EXPLORE MORE — CAROUSEL ── */}
        <div className="mt-20 pt-12 border-t border-white/8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl lg:text-4xl tracking-wider text-white uppercase">
              EXPLORE MAIS <span className="text-primary">PRODUTOS</span>
            </h2>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {randomProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex-shrink-0 w-[220px]"
              >
                <Link href={`/produto/${p.id}`} className="group block">
                  {/* Image */}
                  <div className="relative w-full aspect-square bg-card border border-white/8 overflow-hidden mb-3">
                    {p.badge && (
                      <span className="absolute top-2 left-2 z-10 bg-primary text-white font-condensed text-[10px] tracking-widest uppercase px-2 py-0.5">
                        {p.badge}
                      </span>
                    )}
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = "none";
                        const parent = el.parentElement!;
                        parent.style.background =
                          "linear-gradient(135deg, #1a1a1a 0%, #2d1500 100%)";
                        const label = document.createElement("div");
                        label.style.cssText =
                          "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:rgba(255,92,0,0.3);font-size:2.5rem;";
                        label.textContent = "◈";
                        parent.appendChild(label);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>

                  {/* Info */}
                  <p className="font-condensed text-[10px] text-primary tracking-widest uppercase mb-1">
                    {categoryLabels[p.category]}
                  </p>
                  <h3 className="font-display text-sm text-white uppercase tracking-wide leading-tight mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                    {p.name}
                  </h3>
                  <p className="font-display text-base text-primary tracking-wider">
                    {p.formattedPrice}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Ver catálogo */}
          <div className="text-center mt-10">
            <Link
              href="/loja"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-display text-lg tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300"
              data-testid="link-explore-more"
            >
              VER CATÁLOGO COMPLETO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { getProductById } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Check } from "lucide-react";

const sizes = ["P", "M", "G", "GG", "EXG"];

export default function ProductDetail() {
  const [, params] = useRoute("/produto/:id");
  const productId = params?.id;
  const product = productId ? getProductById(productId) : null;
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-6xl text-white mb-4 uppercase">Produto não encontrado</h1>
          <Link href="/loja" className="text-primary hover:underline font-condensed text-xl tracking-widest uppercase">
            Voltar para a loja
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "ERRO DE SISTEMA",
        description: "Selecione um tamanho antes de adicionar ao carrinho.",
        variant: "destructive",
      });
      return;
    }

    setIsAdding(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsAdding(false);
      toast({
        title: "ITEM ADICIONADO",
        description: `${product.name} (Tam: ${selectedSize}) foi adicionado ao seu arsenal.`,
        className: "bg-card border-primary text-white",
      });
    }, 600);
  };

  return (
    <div className="w-full bg-background min-h-screen py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        
        <Link 
          href="/loja"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white font-condensed text-lg tracking-widest uppercase mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar para Loja
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-card border border-white/10 relative overflow-hidden group">
               <div className="absolute top-4 left-4 z-10 flex gap-2">
                 <span className="bg-primary text-white font-condensed text-sm tracking-widest uppercase px-3 py-1">NOVO</span>
               </div>
               <img 
                 src={product.imageUrl} 
                 alt={product.name} 
                 className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
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
              <p className="font-sans text-primary text-sm font-bold tracking-widest uppercase mb-4">
                // {product.category}
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white uppercase mb-6 leading-none text-glow">
                {product.name}
              </h1>
              <p className="text-4xl text-white font-condensed tracking-wider">
                {product.formattedPrice}
              </p>
            </div>

            <div className="h-px w-full bg-white/10 mb-8" />

            <div className="mb-10">
              <p className="font-sans text-gray-400 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <span className="font-condensed text-xl text-white tracking-widest uppercase">Selecionar Tamanho</span>
                <button className="text-muted-foreground font-sans text-sm underline hover:text-white">Tabela de Medidas</button>
              </div>
              
              <div className="grid grid-cols-5 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`font-condensed text-xl tracking-wider py-3 border transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-primary border-primary text-white box-glow"
                        : "bg-card border-white/10 text-gray-400 hover:border-white/50 hover:text-white"
                    }`}
                    data-testid={`size-${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-6 font-display text-3xl tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group ${
                isAdding 
                  ? "bg-green-600 text-white border border-green-500" 
                  : "bg-white text-black hover:bg-primary hover:text-white box-glow"
              }`}
              data-testid="btn-add-to-cart"
            >
              {isAdding ? (
                <>
                  <Check className="w-8 h-8" /> ADICIONADO
                </>
              ) : (
                <>
                  <span className="relative z-10">ADICIONAR AO CARRINHO</span>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                </>
              )}
            </button>
            
            <div className="mt-8 flex flex-col gap-4 border border-white/5 bg-white/[0.02] p-6">
               <div className="flex items-center gap-4 text-gray-400 font-sans text-sm">
                 <div className="w-2 h-2 bg-primary rounded-full" />
                 <span>Envio expresso para todo o Brasil</span>
               </div>
               <div className="flex items-center gap-4 text-gray-400 font-sans text-sm">
                 <div className="w-2 h-2 bg-primary rounded-full" />
                 <span>Troca grátis em até 30 dias</span>
               </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

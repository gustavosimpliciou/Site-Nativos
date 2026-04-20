import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ProductCategory } from "@/lib/data";

type Category = {
  key: ProductCategory;
  label: string;
  icon: string;
  color: string;
  bg: string;
};

const categories: Category[] = [
  { key: "decoracao",      label: "Decoração",    icon: "◈", color: "#ff6b35", bg: "from-[#1a0a00] to-[#2d1200]" },
  { key: "uteis",          label: "Úteis",         icon: "◉", color: "#ff8c42", bg: "from-[#0d0d1a] to-[#1a1a2e]" },
  { key: "casa",           label: "Para Casa",     icon: "◇", color: "#ffb347", bg: "from-[#001a0d] to-[#002d1a]" },
  { key: "facilitadores",  label: "Facilitadores", icon: "◆", color: "#ff6b35", bg: "from-[#1a001a] to-[#2d002d]" },
  { key: "colecionaveis",  label: "Colecionáveis", icon: "◎", color: "#ff8c42", bg: "from-[#001a1a] to-[#002d2d]" },
];

type Props = {
  onCategoryChange?: (category: ProductCategory) => void;
};

export default function CategoryCarousel({ onCategoryChange }: Props) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const next = (index + categories.length) % categories.length;
      setCurrent(next);
      onCategoryChange?.(categories[next].key);
    },
    [onCategoryChange]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % categories.length;
        onCategoryChange?.(categories[next].key);
        return next;
      });
    }, 3000);
  }, [onCategoryChange]);

  useEffect(() => {
    resetTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [resetTimer]);

  const getPosition = (index: number) => {
    const diff = ((index - current + categories.length) % categories.length);
    return diff > categories.length / 2 ? diff - categories.length : diff;
  };

  const getCardStyle = (pos: number) => {
    const absPos = Math.abs(pos);
    if (absPos > 2) return null;
    return {
      zIndex: 100 - absPos * 30,
      scale: pos === 0 ? 1 : absPos === 1 ? 0.78 : 0.6,
      translateX: pos === 0 ? 0 : pos > 0 ? absPos * 280 : absPos * -280,
      rotateY: pos === 0 ? 0 : pos > 0 ? 38 : -38,
      opacity: absPos === 0 ? 1 : absPos === 1 ? 0.8 : 0.5,
      blur: absPos > 1 ? "blur(1px)" : "none",
    };
  };

  return (
    <div className="relative w-full flex flex-col items-center select-none">
      <div
        className="relative flex items-center justify-center w-full overflow-hidden"
        style={{ height: 160, perspective: "1100px" }}
      >
        {categories.map((cat, index) => {
          const pos = getPosition(index);
          const s = getCardStyle(pos);
          if (!s) return null;
          const isActive = pos === 0;

          return (
            <div
              key={cat.key}
              onClick={() => {
                if (!isActive) { goTo(index); resetTimer(); }
              }}
              style={{
                position: "absolute",
                zIndex: s.zIndex,
                transform: `translateX(${s.translateX}px) scale(${s.scale}) rotateY(${s.rotateY}deg)`,
                opacity: s.opacity,
                filter: s.blur,
                transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transformStyle: "preserve-3d",
                cursor: isActive ? "default" : "pointer",
                width: 300,
                flexShrink: 0,
              }}
            >
              <Link
                href={`/loja?categoria=${cat.key}`}
                onClick={(e) => { if (!isActive) e.preventDefault(); }}
                className="block"
                data-testid={`category-carousel-${cat.key}`}
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${cat.bg} border transition-all duration-300 rounded-lg`}
                  style={{
                    borderColor: isActive ? cat.color : "rgba(255,255,255,0.08)",
                    boxShadow: isActive
                      ? `0 0 28px ${cat.color}44, 0 12px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)`
                      : "0 8px 24px rgba(0,0,0,0.4)",
                    height: 110,
                    width: 300,
                  }}
                >
                  {/* Glossy top reflection */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/8 to-transparent pointer-events-none rounded-t-lg" />

                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="absolute font-display text-5xl text-white"
                        style={{ top: `${i * 40 - 10}%`, left: `${i * 30}%`, transform: "rotate(-10deg)" }}
                      >
                        {cat.icon}
                      </span>
                    ))}
                  </div>

                  {/* Content — horizontal layout */}
                  <div className="relative z-10 flex flex-row items-center justify-center h-full gap-5 px-8">
                    <motion.span
                      animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-4xl leading-none"
                      style={{
                        color: cat.color,
                        filter: isActive ? `drop-shadow(0 0 10px ${cat.color}88)` : "none",
                      }}
                    >
                      {cat.icon}
                    </motion.span>

                    <div className="flex flex-col">
                      <span
                        className="font-display text-xl tracking-widest uppercase leading-tight"
                        style={{ color: isActive ? cat.color : "rgba(255,255,255,0.85)" }}
                      >
                        {cat.label}
                      </span>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="font-sans text-xs text-white/50 tracking-wider uppercase mt-1"
                        >
                          ver produtos →
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Bottom glow line */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-[2px] rounded-b-lg"
                    style={{
                      background: `linear-gradient(to right, transparent, ${cat.color}, transparent)`,
                      opacity: isActive ? 1 : 0.2,
                    }}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 mt-3">
        <button
          onClick={() => { prev(); resetTimer(); }}
          className="w-10 h-10 rounded-full border border-white/15 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/70 hover:border-primary hover:text-primary transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer(); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 22 : 6,
                height: 6,
                background: i === current ? categories[current].color : "rgba(255,255,255,0.15)",
              }}
              aria-label={`Categoria ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => { next(); resetTimer(); }}
          className="w-10 h-10 rounded-full border border-white/15 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/70 hover:border-primary hover:text-primary transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Próximo"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

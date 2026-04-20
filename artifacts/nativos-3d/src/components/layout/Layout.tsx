import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-border/50 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" data-testid="nav-logo">
            <span className="font-display text-3xl tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-primary group-hover:to-orange-300 transition-all duration-500">
              NATIVOS <span className="text-primary font-bold">3D</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/loja", label: "LOJA" },
              { href: "/sobre", label: "SOBRE" },
              { href: "/contato", label: "CONTATO" },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`font-condensed text-xl tracking-widest uppercase transition-colors hover:text-primary ${
                  location === link.href ? "text-primary text-glow" : "text-foreground"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              className="text-foreground hover:text-primary transition-colors relative group p-2"
              data-testid="btn-cart"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                0
              </span>
            </button>

            <button 
              className="md:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="btn-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-primary" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-8 md:hidden"
        >
          <nav className="flex flex-col gap-6 items-center mt-12">
            {[
              { href: "/", label: "INÍCIO" },
              { href: "/loja", label: "LOJA" },
              { href: "/sobre", label: "SOBRE" },
              { href: "/contato", label: "CONTATO" },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href}
                  className={`font-display text-4xl tracking-widest block uppercase transition-colors hover:text-primary ${
                    location === link.href ? "text-primary text-glow" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <div className="mt-auto pb-12 flex justify-center">
            <p className="font-condensed text-muted-foreground tracking-widest">FEITO PRA QUEM NÃO PEDE LICENÇA.</p>
          </div>
        </motion.div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display text-4xl tracking-wider uppercase text-white block mb-4">
              NATIVOS <span className="text-primary">3D</span>
            </span>
            <p className="font-condensed text-xl text-muted-foreground tracking-widest max-w-sm leading-relaxed uppercase">
              FEITO PRA QUEM NÃO PEDE LICENÇA. A INTERSEÇÃO ENTRE CULTURA DE RUA E ESTÉTICA DIGITAL.
            </p>
          </div>
          
          <div>
            <h3 className="font-condensed text-2xl tracking-widest uppercase mb-6 text-white">Navegação</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/loja" className="font-sans text-muted-foreground hover:text-primary transition-colors">Ver Coleção</Link></li>
              <li><Link href="/sobre" className="font-sans text-muted-foreground hover:text-primary transition-colors">Sobre a Marca</Link></li>
              <li><Link href="/contato" className="font-sans text-muted-foreground hover:text-primary transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-condensed text-2xl tracking-widest uppercase mb-6 text-white">Legal</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="font-sans text-muted-foreground hover:text-primary transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="font-sans text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="font-sans text-muted-foreground hover:text-primary transition-colors">Trocas e Devoluções</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nativos 3D. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer group">
              <span className="font-display text-xl leading-none">IG</span>
            </div>
            <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer group">
              <span className="font-display text-xl leading-none">TT</span>
            </div>
            <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer group">
              <span className="font-display text-xl leading-none">DC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col relative dark bg-background text-foreground">
      <div className="noise-overlay" />
      <Navbar />
      <main className="flex-1 w-full pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

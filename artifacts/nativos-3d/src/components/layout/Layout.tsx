import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Package } from "lucide-react";
import { useState, useEffect } from "react";
import { SiInstagram, SiTiktok, SiWhatsapp, SiFacebook, SiYoutube } from "react-icons/si";

const navLinks = [
  { href: "/loja", label: "CATÁLOGO" },
  { href: "/sobre", label: "SOBRE" },
  { href: "/contato", label: "CONTATO" },
];

const socialLinks = [
  { icon: <SiInstagram className="w-4 h-4" />, href: "https://instagram.com/nativos3d", label: "Instagram" },
  { icon: <SiTiktok className="w-4 h-4" />, href: "https://tiktok.com/@nativos3d", label: "TikTok" },
  { icon: <SiWhatsapp className="w-4 h-4" />, href: "https://wa.me/5511999999999", label: "WhatsApp" },
  { icon: <SiFacebook className="w-4 h-4" />, href: "https://facebook.com/nativos3d", label: "Facebook" },
  { icon: <SiYoutube className="w-4 h-4" />, href: "https://youtube.com/@nativos3d", label: "YouTube" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" data-testid="nav-logo">
            <div className="w-9 h-9 bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-2xl tracking-wider uppercase text-white group-hover:text-primary transition-colors duration-300">
              NATIVOS <span className="text-primary group-hover:text-white transition-colors duration-300">3D</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-condensed text-lg tracking-widest uppercase transition-all duration-200 pb-0.5 border-b-2 ${
                  location === link.href
                    ? "text-primary border-primary"
                    : "text-foreground border-transparent hover:text-primary hover:border-primary/50"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Social icons - desktop only */}
            <div className="hidden lg:flex items-center gap-2">
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  title={social.label}
                  data-testid={`nav-social-${social.label.toLowerCase()}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <Link
              href="/loja"
              className="hidden md:flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-condensed text-base tracking-widest uppercase hover:bg-orange-500 transition-colors duration-200"
              data-testid="nav-cta"
            >
              VER CATÁLOGO
            </Link>

            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="btn-mobile-menu"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-primary" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-6 flex flex-col md:hidden"
        >
          <nav className="flex flex-col gap-4 items-center mt-8">
            {[{ href: "/", label: "INÍCIO" }, ...navLinks].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="w-full text-center"
              >
                <Link
                  href={link.href}
                  className={`font-display text-4xl tracking-widest block uppercase py-3 transition-colors ${
                    location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-10 flex flex-col items-center gap-6">
            <Link
              href="/loja"
              className="w-full max-w-xs py-4 bg-primary text-primary-foreground font-display text-2xl tracking-widest uppercase text-center"
            >
              VER CATÁLOGO
            </Link>

            <div className="flex gap-5 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-card border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/40 transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-auto pb-12 text-center">
            <p className="font-condensed text-muted-foreground tracking-widest text-sm uppercase">
              Impressão 3D de Alta Precisão — Feito no Brasil
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 w-fit group">
              <div className="w-9 h-9 bg-primary flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-3xl tracking-wider uppercase text-white">
                NATIVOS <span className="text-primary">3D</span>
              </span>
            </Link>
            <p className="font-sans text-muted-foreground max-w-sm leading-relaxed mb-6">
              Objetos impressos em 3D com alta precisão para decoração, utilidade e coleção. Feito no Brasil, entregue para todo o país.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary hover:border-primary transition-all duration-200"
                  title={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-condensed text-xl tracking-widest uppercase mb-6 text-white">Catálogo</h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/loja?categoria=decoracao", label: "Decoração" },
                { href: "/loja?categoria=uteis", label: "Úteis" },
                { href: "/loja?categoria=casa", label: "Para Casa" },
                { href: "/loja?categoria=facilitadores", label: "Facilitadores" },
                { href: "/loja?categoria=colecionaveis", label: "Colecionáveis" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-condensed text-xl tracking-widest uppercase mb-6 text-white">Informações</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/sobre" className="font-sans text-muted-foreground hover:text-primary transition-colors text-sm">Sobre a Nativos 3D</Link></li>
              <li><Link href="/contato" className="font-sans text-muted-foreground hover:text-primary transition-colors text-sm">Fale Conosco</Link></li>
              <li><a href="#" className="font-sans text-muted-foreground hover:text-primary transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="font-sans text-muted-foreground hover:text-primary transition-colors text-sm">Termos de Serviço</a></li>
              <li><a href="#" className="font-sans text-muted-foreground hover:text-primary transition-colors text-sm">Política de Entrega</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nativos 3D. Todos os direitos reservados.
          </p>
          <p className="font-condensed text-sm text-primary tracking-widest uppercase">
            FEITO NO BRASIL. ENTREGUE COM PRECISÃO.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col relative dark bg-background text-foreground">
      <Navbar />
      <main className="flex-1 w-full pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

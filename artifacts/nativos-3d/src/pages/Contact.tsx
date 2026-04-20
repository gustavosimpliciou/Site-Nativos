import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiInstagram, SiTiktok, SiWhatsapp, SiFacebook, SiYoutube } from "react-icons/si";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Email invalido."),
  subject: z.string().min(3, "Assunto deve ter pelo menos 3 caracteres."),
  message: z.string().min(10, "A mensagem precisa ter pelo menos 10 caracteres."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const socials = [
  { icon: <SiInstagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com/nativos3d", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-400" },
  { icon: <SiTiktok className="w-5 h-5" />, label: "TikTok", href: "https://tiktok.com/@nativos3d", color: "hover:bg-black" },
  { icon: <SiWhatsapp className="w-5 h-5" />, label: "WhatsApp", href: "https://wa.me/5511999999999", color: "hover:bg-green-600" },
  { icon: <SiFacebook className="w-5 h-5" />, label: "Facebook", href: "https://facebook.com/nativos3d", color: "hover:bg-blue-600" },
  { icon: <SiYoutube className="w-5 h-5" />, label: "YouTube", href: "https://youtube.com/@nativos3d", color: "hover:bg-red-600" },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(_data: ContactFormValues) {
    toast({
      title: "Mensagem enviada!",
      description: "Recebemos seu contato e retornaremos em ate 24 horas.",
      className: "bg-card border-primary text-white",
    });
    form.reset();
  }

  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-white/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-condensed text-primary text-sm font-bold tracking-[0.4em] uppercase mb-6 border border-primary/30 inline-block px-4 py-1">
              Fale Conosco
            </p>
            <h1 className="font-display text-6xl md:text-7xl tracking-wider uppercase text-white mb-6">
              VAMOS <br /><span className="text-primary">CONVERSAR</span>
            </h1>
            <p className="font-sans text-xl text-gray-400 leading-relaxed mb-12 max-w-md">
              Duvidas sobre produtos, prazos, personalizacoes ou parceria? Estamos aqui para ajudar.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-condensed text-xl tracking-widest text-primary mb-1 uppercase">Email</h3>
                  <a href="mailto:contato@nativos3d.com.br" className="font-sans text-gray-300 hover:text-primary transition-colors">
                    contato@nativos3d.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-condensed text-xl tracking-widest text-primary mb-1 uppercase">WhatsApp</h3>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-primary transition-colors">
                    (11) 9 9999-9999
                  </a>
                  <p className="font-sans text-sm text-muted-foreground mt-1">Seg-Sex, 9h as 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-condensed text-xl tracking-widest text-primary mb-1 uppercase">Regiao</h3>
                  <p className="font-sans text-gray-300">Brasil — Enviamos para todo o territorio nacional</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="font-condensed text-lg tracking-widest uppercase text-muted-foreground mb-5">Redes Sociais</h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:border-transparent hover:text-white hover:scale-110 ${social.color}`}
                    title={social.label}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-white/10 p-8 md:p-12 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <h2 className="font-display text-3xl tracking-wider uppercase text-white mb-8">Envie sua mensagem</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-condensed text-lg tracking-widest uppercase text-white">Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome completo"
                            {...field}
                            className="bg-background border-white/10 text-white h-12 font-sans focus-visible:ring-primary focus-visible:border-primary rounded-none"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage className="font-sans text-primary text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-condensed text-lg tracking-widest uppercase text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="seu@email.com"
                            type="email"
                            {...field}
                            className="bg-background border-white/10 text-white h-12 font-sans focus-visible:ring-primary focus-visible:border-primary rounded-none"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage className="font-sans text-primary text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-condensed text-lg tracking-widest uppercase text-white">Assunto</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Do que se trata sua mensagem?"
                          {...field}
                          className="bg-background border-white/10 text-white h-12 font-sans focus-visible:ring-primary focus-visible:border-primary rounded-none"
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage className="font-sans text-primary text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-condensed text-lg tracking-widest uppercase text-white">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Escreva sua mensagem aqui..."
                          className="bg-background border-white/10 text-white min-h-[160px] font-sans focus-visible:ring-primary focus-visible:border-primary rounded-none resize-none"
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage className="font-sans text-primary text-sm" />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="w-full py-5 bg-primary text-primary-foreground font-display text-2xl tracking-widest uppercase hover:bg-orange-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,92,0,0.4)]"
                  data-testid="btn-submit-contact"
                >
                  ENVIAR MENSAGEM
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

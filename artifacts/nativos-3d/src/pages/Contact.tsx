import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Email inválido."),
  message: z.string().min(10, "A mensagem precisa ter pelo menos 10 caracteres."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Simulate API call
    console.log(data);
    toast({
      title: "SINAL RECEBIDO",
      description: "Sua mensagem foi criptografada e enviada ao nosso terminal.",
      className: "bg-card border-primary text-white",
    });
    form.reset();
  }

  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Decorative BG Elements */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-6xl md:text-8xl tracking-wider uppercase text-white mb-6 text-glow">
              ESTABELECER <br/><span className="text-primary">CONEXÃO</span>
            </h1>
            <p className="font-condensed text-xl text-gray-400 tracking-widest uppercase leading-relaxed mb-12 max-w-md">
              Dúvidas sobre produtos? Colaborações? Hackeou nosso sistema? Manda o papo reto.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="font-display text-2xl tracking-widest text-primary mb-2 uppercase">Terminal HQ</h3>
                <p className="font-sans text-gray-400 text-lg">
                  Rua Augusta, 1024 - Subsolo<br/>
                  São Paulo - SP, 01304-001<br/>
                  (Acesso apenas com convite)
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl tracking-widest text-primary mb-2 uppercase">Frequências</h3>
                <div className="flex flex-col gap-2 font-condensed text-xl tracking-wider text-white">
                  <a href="mailto:comms@nativos3d.com" className="hover:text-primary transition-colors inline-block w-fit">COMMS@NATIVOS3D.COM</a>
                  <a href="tel:+551199999999" className="hover:text-primary transition-colors inline-block w-fit">+55 11 9999-9999</a>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <div className="flex gap-4">
                  {['INSTAGRAM', 'TWITTER', 'DISCORD'].map(social => (
                    <a key={social} href="#" className="font-display text-xl tracking-widest text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-white/10 p-8 md:p-12 relative"
          >
            {/* Terminal Decoration */}
            <div className="absolute top-0 left-0 w-full h-8 bg-background border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">nativos_secure_link.sh</span>
            </div>

            <div className="mt-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-condensed text-xl tracking-widest uppercase text-white">Seu Nome / Alias</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Como devemos te chamar?" 
                            {...field} 
                            className="bg-background border-white/10 text-white h-14 font-sans focus-visible:ring-primary focus-visible:border-primary rounded-none"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage className="font-sans text-primary" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-condensed text-xl tracking-widest uppercase text-white">Email de Retorno</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="seu@email.com" 
                            type="email"
                            {...field} 
                            className="bg-background border-white/10 text-white h-14 font-sans focus-visible:ring-primary focus-visible:border-primary rounded-none"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage className="font-sans text-primary" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-condensed text-xl tracking-widest uppercase text-white">Transmissão</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Digite sua mensagem..." 
                            className="bg-background border-white/10 text-white min-h-[160px] font-sans focus-visible:ring-primary focus-visible:border-primary rounded-none resize-none"
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage className="font-sans text-primary" />
                      </FormItem>
                    )}
                  />

                  <button 
                    type="submit"
                    className="w-full py-5 bg-primary text-primary-foreground font-display text-2xl tracking-widest uppercase hover:bg-orange-600 transition-all duration-300 box-glow"
                    data-testid="btn-submit-contact"
                  >
                    ENVIAR TRANSMISSÃO
                  </button>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

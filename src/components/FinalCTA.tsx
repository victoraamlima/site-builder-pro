import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "559491470637";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero avaliar uma área/obra para controle de erosão e recuperação ambiental. Posso enviar fotos e localização?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FinalCTA = () => {
  return (
    <section id="contato" className="bg-primary py-16 md:py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="container-custom text-center"
      >
        <h2 className="text-primary-foreground mb-4 text-2xl md:text-3xl">
          Precisa recuperar uma área e reduzir risco de erosão?
        </h2>
        
        <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-8 text-left">
          Chame no WhatsApp e envie fotos/localização. A gente avalia o cenário e orienta o caminho mais aplicável para avançar com segurança.
        </p>

        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
          whileHover={{ scale: 1.02, boxShadow: "0 8px 24px -8px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp e solicitar avaliação
        </motion.a>

        <p className="text-primary-foreground/70 text-sm mt-6">
          Quanto mais contexto você enviar, mais rápido a análise.
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
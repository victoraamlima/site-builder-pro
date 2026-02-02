import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5591999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero avaliar uma área/obra para controle de erosão e recuperação ambiental. Posso enviar fotos e localização?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full shadow-lg"
          style={{
            boxShadow: "0 4px 20px -4px hsl(160 64% 14% / 0.4)",
          }}
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
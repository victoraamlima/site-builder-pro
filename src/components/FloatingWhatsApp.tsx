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
      setIsVisible(scrollY > 300);
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
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 30 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ 
            duration: 0.25, 
            ease: [0.25, 0.1, 0.25, 1],
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full"
          style={{
            boxShadow: "0 8px 24px -4px hsl(160 64% 14% / 0.35), 0 4px 12px -2px hsl(160 64% 14% / 0.25)",
          }}
          aria-label="Falar no WhatsApp"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <MessageCircle className="w-7 h-7" />
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
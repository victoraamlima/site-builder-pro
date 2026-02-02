import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5591999999999"; // Substituir pelo número real
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero avaliar uma área/obra para controle de erosão e recuperação ambiental. Posso enviar fotos e localização?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-foreground">
              MARENA
            </span>
          </div>

          {/* CTA WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

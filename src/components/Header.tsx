import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "559491470637";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero avaliar uma área/obra para controle de erosão e recuperação ambiental. Posso enviar fotos e localização?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Header = () => {
  const navItems = [
    { label: "Serviços", href: "#servicos", cta: "servicos" },
    { label: "Processo", href: "#processo", cta: "processo" },
    { label: "Galeria", href: "#galeria", cta: "galeria" },
    { label: "Contato", href: "#contato", cta: "contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-bar">
      <div className="container-custom">
        <div className="flex items-center justify-between h-[64px] lg:h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo_marena_sem_fundo.png"
              alt="MARENA"
              className="h-9 lg:h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cta={`header:navegar-${item.cta}`}
                className="header-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA WhatsApp */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="header:whatsapp"
            className="header-cta flex items-center gap-2 px-4 py-2.5 text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "5591999999999";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 md:py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-primary-foreground tracking-tight">
              MARENA
            </span>
            <p className="text-muted-foreground mt-3 text-sm">
              Recuperação ambiental e controle de erosão com execução de engenharia em campo.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@marena.com.br"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  contato@marena.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              Localização
            </h4>
            <div className="flex items-start gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Belém, PA — Brasil</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-muted-foreground/20 mt-10 pt-8">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Marena. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

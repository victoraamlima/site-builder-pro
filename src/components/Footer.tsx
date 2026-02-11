import { Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "559491470637";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const Footer = () => {
  return (
    <>
      {/* Top Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border/20 to-transparent" />
      
      <footer className="footer-dark py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div>
              <p className="footer-muted mt-3 text-sm">
                Recuperação ambiental e controle de erosão com execução de engenharia em campo.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-footer-text font-semibold mb-4">
                Contato
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link flex items-center gap-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:marena@marenaengenharia.com"
                    className="footer-link flex items-center gap-2 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    marena@marenaengenharia.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-footer-text font-semibold mb-4">
                Localização
              </h4>
              <div className="footer-muted flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Belém, PA e Brasília, DF</span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 mt-10 pt-8">
            <p className="footer-muted text-sm text-center">
              © {new Date().getFullYear()} <strong className="font-extrabold">MARENA</strong>. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
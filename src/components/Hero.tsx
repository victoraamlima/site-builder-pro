import { MessageCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "5591999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero avaliar uma área/obra para controle de erosão e recuperação ambiental. Posso enviar fotos e localização?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Hero = () => {
  const benefits = [
    "Controle de erosão e estabilização com solução adequada ao solo e ao terreno.",
    "Aplicação em campo com critério técnico, pensando em segurança e continuidade do projeto.",
    "Atendimento direto e objetivo, para você avançar sem ruído e sem enrolação.",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/HIDROSSEMEADURA-TALUDE-ASPECTO-002.jpeg)` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 hero-overlay"
      />

      {/* Content */}
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-3 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-primary-foreground leading-[1.08] text-balance">
              Recuperação ambiental com execução de engenharia em campo, em taludes, beiras de estrada e áreas degradadas.
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              Hidrossemeadura e soluções de revegetação para <strong>conter erosão</strong>, <strong>atender exigências ambientais</strong> e <strong>deixar a área pronta para seguir</strong>, com avaliação técnica e execução no cenário real.
            </p>

            {/* Benefits - Desktop */}
            <ul className="hidden md:block space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 text-primary-foreground/85"
                >
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-foreground" />
                  <span className="text-base">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Card - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-2"
          >
            <div className="cta-card max-w-md lg:ml-auto">
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-4">
                Solicite uma avaliação técnica
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Envie <strong>local</strong>, <strong>fotos</strong> e <strong>metragem aproximada</strong> para agilizar a análise.
              </p>

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-cta-animated flex items-center justify-center gap-3 w-full px-6 py-4 text-[15px] md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp e solicitar avaliação
              </motion.a>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                Resposta rápida no horário comercial.
              </p>

              {/* Benefits - Mobile */}
              <ul className="md:hidden mt-6 pt-6 border-t border-border space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-card-foreground text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
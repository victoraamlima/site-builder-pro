import { Shield, Leaf, Target, MessageCircle } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5591999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero avaliar uma área/obra para controle de erosão e recuperação ambiental. Posso enviar fotos e localização?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const ValueProposition = () => {
  const valueCards = [
    {
      icon: Shield,
      title: "Estabilização e controle de erosão",
      description: "Intervenções para reduzir risco de degradação e manter o terreno \"sob controle\".",
    },
    {
      icon: Leaf,
      title: "Revegetação e recuperação da área",
      description: "Hidrossemeadura e técnicas de recomposição para acelerar cobertura vegetal.",
    },
    {
      icon: Target,
      title: "Solução certa para o seu cenário",
      description: "Cada área pede um caminho e a decisão técnica evita tentativa e erro.",
    },
  ];

  return (
    <section className="section-green section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-foreground section-header">
                Recuperação ambiental que funciona no terreno, com execução de engenharia.
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mt-6 text-left">
                A Marena entra para transformar um cenário instável em uma área controlada e encaminhada: solução adequada ao caso, aplicação correta e orientação do que sustenta o resultado ao longo do tempo.
              </p>

              <div className="pt-4">
                <p className="text-xl font-semibold text-primary mb-6">
                  Vamos destravar a solução certa para a sua obra.
                </p>
                
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 px-6 py-3.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          {/* Value Cards */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {valueCards.map((card, index) => (
              <StaggerItem key={index}>
                <div className="card-base flex items-start gap-4 hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1 text-left">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-left">
                      {card.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Section Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border/20 to-transparent mt-14 md:mt-20" />
    </section>
  );
};

export default ValueProposition;
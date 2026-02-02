import { Shield, Leaf, Target, MessageCircle } from "lucide-react";

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
      description: "Cada área pede um caminho — a decisão técnica evita tentativa e erro.",
    },
  ];

  return (
    <section className="section-gray section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-foreground">
              Recuperação ambiental que funciona no terreno — com execução de engenharia.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Marena entra para transformar um cenário instável em uma área controlada e encaminhada: solução adequada ao caso, aplicação correta e orientação do que sustenta o resultado ao longo do tempo.
            </p>

            <div className="pt-4">
              <p className="text-xl font-semibold text-primary mb-6">
                Vamos destravar a solução certa para a sua obra.
              </p>
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Value Cards */}
          <div className="space-y-4">
            {valueCards.map((card, index) => (
              <div
                key={index}
                className="card-base flex items-start gap-4 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

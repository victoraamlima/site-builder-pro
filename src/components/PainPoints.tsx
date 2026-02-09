import { OctagonAlert, FileX, Timer } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const PainPoints = () => {
  const painCards = [
    {
      icon: OctagonAlert,
      title: "Erosão e perda de solo",
      description: "O terreno exposto vira custo e risco, principalmente com chuva e tráfego.",
    },
    {
      icon: FileX,
      title: "Exigência ambiental e fiscalização",
      description: "Quando não está bem encaminhado, vira atraso e desgaste com documentação.",
    },
    {
      icon: Timer,
      title: "Retrabalho e atraso de cronograma",
      description: "O problema reaparece e consome equipe, tempo e orçamento.",
    },
  ];

  return (
    <section className="section-white section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-foreground text-2xl md:text-3xl font-semibold">
              Quando o terreno começa a ceder, a obra perde tempo e o risco sobe.
            </h2>
            <p className="text-lg text-muted-foreground mt-8 text-left">
              Erosão, assoreamento, áreas expostas e taludes instáveis geram retrabalho, pressão de prazo e insegurança. O ponto não é "ter algo bonito": é <strong className="text-foreground">resolver no campo</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {painCards.map((card, index) => (
            <StaggerItem key={index}>
              <div className="pain-card h-full">
                <div className="pain-icon rounded-xl p-2">
                  <card.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="pain-title">
                  {card.title}
                </h3>
                <p className="pain-desc">
                  {card.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Section Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border/20 to-transparent mt-14 md:mt-20" />
    </section>
  );
};

export default PainPoints;
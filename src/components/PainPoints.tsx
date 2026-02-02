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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-foreground section-header section-header-center">
              Quando o terreno começa a ceder, a obra perde tempo e o risco sobe.
            </h2>
            <p className="text-lg text-muted-foreground mt-8 text-left">
              Erosão, assoreamento, áreas expostas e taludes instáveis geram retrabalho, pressão de prazo e insegurança. O ponto não é "ter algo bonito": é <strong className="text-foreground">resolver no campo</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {painCards.map((card, index) => (
            <StaggerItem key={index}>
              <div className="card-base group hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/15 transition-colors">
                  <card.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground">
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
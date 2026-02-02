import { MessageCircle, ScanSearch, Wrench } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Você chama no WhatsApp",
      description: "Envie localização, fotos e contexto (o que está acontecendo e qual a urgência).",
    },
    {
      number: "02",
      icon: ScanSearch,
      title: "Avaliação técnica do cenário",
      description: "A gente entende o terreno, o tipo de necessidade e define o caminho mais aplicável.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Execução em campo + orientação",
      description: "Aplicação conforme o cenário e orientações do que sustenta a recuperação no tempo.",
    },
  ];

  return (
    <section className="section-white section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span>Como funciona</span>
            </div>
            <h2 className="text-foreground mb-4 section-header section-header-center">
              Um processo simples para sair do problema e ir para a execução
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 md:gap-6 relative" staggerDelay={0.15}>
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30" />
          
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="relative flex flex-col items-center text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 w-[120px] h-[120px] rounded-full bg-card border-2 border-primary flex flex-col items-center justify-center mb-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="text-3xl font-bold text-primary">{step.number}</span>
                  <step.icon className="w-6 h-6 text-primary mt-1" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 text-left">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs text-left">
                  {step.description}
                </p>

                {/* Mobile Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-[2px] h-8 bg-primary/20 mt-6" />
                )}
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

export default Process;
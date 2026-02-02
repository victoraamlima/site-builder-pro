import { Droplets, Mountain, Trees, Compass } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Hidrossemeadura",
      context: "Para taludes, faixas de domínio e áreas expostas.",
      result: "Você recebe cobertura vegetal inicial com aplicação adequada ao terreno.",
    },
    {
      icon: Mountain,
      title: "Controle de erosão",
      context: "Para conter perda de solo e estabilizar superfícies vulneráveis.",
      result: "Você recebe uma solução ajustada ao cenário, com execução orientada.",
    },
    {
      icon: Trees,
      title: "Recuperação e revegetação de áreas",
      context: "Para recomposição e recuperação gradual do ambiente.",
      result: "Você recebe um plano prático de execução e encaminhamento da área.",
    },
    {
      icon: Compass,
      title: "Apoio técnico para definição da solução",
      context: "Para decidir o caminho certo antes de gastar no errado.",
      result: "Você recebe orientação objetiva do que faz sentido no seu caso.",
    },
  ];

  return (
    <section className="section-white section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-foreground mb-4 section-header section-header-center">
              Serviços focados no que mais aparece no campo
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              Escolha técnica e execução em campo para recuperar áreas e reduzir risco de erosão — com foco no que é aplicável e funcional.
            </p>
          </div>
        </ScrollReveal>

        {/* Service Cards Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="card-base group hover:-translate-y-1 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-card-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {service.context}
                    </p>
                    <p className="text-card-foreground text-sm font-medium">
                      {service.result}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Section Separator */}
      <div className="section-separator mt-14 md:mt-20" />
    </section>
  );
};

export default Services;
import { Users, Truck, Award } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Credibility = () => {
  const proofPoints = [
    {
      icon: Users,
      title: "Experiência de campo do time",
      description: "Atuação prática em execução e tomada de decisão no ambiente real.",
    },
    {
      icon: Truck,
      title: "Equipamento e mobilização",
      description: "Capacidade de operar e aplicar com consistência e segurança.",
    },
    {
      icon: Award,
      title: "Critério técnico e responsabilidade",
      description: "Solução definida por cenário — não por \"achismo\" ou tentativa e erro.",
    },
  ];

  const galleryImages = [
    { src: gallery1, caption: "Aplicação em talude" },
    { src: gallery2, caption: "Revegetação em andamento" },
    { src: gallery3, caption: "Área exposta pré-tratamento" },
    { src: gallery4, caption: "Faixa de domínio recuperada" },
    { src: gallery5, caption: "Equipe em campo" },
    { src: gallery6, caption: "Instalação de manta" },
  ];

  return (
    <section className="section-white section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-foreground mb-4 section-header section-header-center">
              Capacidade real + execução de campo
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              O que dá confiança não é discurso — é capacidade, critério técnico e execução bem feita. A Marena estrutura a entrega para o cenário real (campo/obra/área), com responsabilidade e clareza.
            </p>
          </div>
        </ScrollReveal>

        {/* Proof Points */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12 md:mb-16" staggerDelay={0.1}>
          {proofPoints.map((point, index) => (
            <StaggerItem key={index}>
              <div className="card-base flex items-start gap-4 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Gallery */}
        <ScrollReveal delay={0.2}>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" staggerDelay={0.08}>
            {galleryImages.map((image, index) => (
              <StaggerItem key={index}>
                <div className="group relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-3 left-3 right-3 text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.caption}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>
      </div>

      {/* Section Separator */}
      <div className="section-separator mt-14 md:mt-20" />
    </section>
  );
};

export default Credibility;
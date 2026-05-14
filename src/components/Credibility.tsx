import { UsersRound, TruckIcon, BadgeCheck } from "lucide-react";
import type { ApprovedMediaItem } from "@/lib/approvedMedia";
import { approvedMedia } from "@/lib/approvedMedia";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const Credibility = () => {
  const proofPoints = [
    {
      icon: UsersRound,
      title: "Experiência de campo do time",
      description: "Atuação prática em execução e tomada de decisão no ambiente real.",
    },
    {
      icon: TruckIcon,
      title: "Equipamento e mobilização",
      description: "Capacidade de operar e aplicar com consistência e segurança.",
    },
    {
      icon: BadgeCheck,
      title: "Critério técnico e responsabilidade",
      description: "Solução definida por cenário, não por achismo ou tentativa e erro.",
    },
  ];

  const galleryItems: ApprovedMediaItem[] = [
    approvedMedia.galleryVideo,
    ...approvedMedia.gallery,
  ];

  return (
    <section id="galeria" className="section-green section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span>Nossa capacidade</span>
            </div>
            <h2 className="text-foreground section-header section-header-center">
              Capacidade real + execução de campo
            </h2>
            <p className="text-lg text-muted-foreground mt-8 text-left w-full">
              O que dá confiança não é discurso, mas capacidade, critério técnico e execução bem feita. A{" "}
              <strong className="font-extrabold">MARENA</strong> estrutura a entrega para o cenário real (campo/obra/área), com responsabilidade e clareza.
            </p>
          </div>
        </ScrollReveal>

        {/* Proof Points */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12 md:mb-16 items-stretch" staggerDelay={0.1}>
          {proofPoints.map((point, index) => (
            <StaggerItem key={index}>
              <div className="card-base credibility-card flex items-start gap-4 hover:-translate-y-0.5 h-full">
                <div className="credibility-icon w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="credibility-title font-bold mb-1 text-left">
                    {point.title}
                  </h3>
                  <p className="credibility-desc text-sm text-left">
                    {point.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Gallery */}
        <ScrollReveal delay={0.2}>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {galleryItems.map((item, index) => (
              <StaggerItem key={index}>
                <figure className={`group relative overflow-hidden rounded-xl border border-primary/8 bg-card shadow-sm transition-all duration-300 hover:shadow-md ${item.kind === "video" ? "aspect-[474/850] sm:row-span-2" : "aspect-[4/3]"}`}>
                  {item.kind === "video" ? (
                    <video
                      src={item.src}
                      poster={item.posterSrc}
                      width={item.width}
                      height={item.height}
                      preload="none"
                      muted
                      playsInline
                      controls
                      className="h-full w-full object-cover"
                      aria-label={item.alt}
                      data-cta="gallery:video-execucao"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-transparent to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />
                  <figcaption className="pointer-events-none absolute bottom-3 left-3 right-3 text-primary-foreground text-sm font-medium opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                    {item.caption}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>
      </div>

      {/* Section Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border/20 to-transparent mt-14 md:mt-20" />
    </section>
  );
};

export default Credibility;

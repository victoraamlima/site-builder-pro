import { MessageCircle, ScanSearch, Wrench } from "lucide-react";
import { approvedMedia } from "@/lib/approvedMedia";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const WHATSAPP_NUMBER = "559491470637";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero avaliar uma área/obra para controle de erosão e recuperação ambiental. Posso enviar fotos e localização?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

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
    <section id="processo" className="section-white section-padding">
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

        <ScrollReveal delay={0.1}>
          <div className="mb-12 grid gap-8 rounded-2xl border border-primary/10 bg-card p-5 shadow-sm md:grid-cols-[minmax(260px,0.38fr)_1fr] md:items-center md:p-6 lg:mb-16">
            <div className="order-2 mx-auto w-full max-w-[240px] overflow-hidden rounded-[1.25rem] border border-primary/10 bg-foreground shadow-md md:order-none md:max-w-[280px]">
              <video
                src={approvedMedia.processVideo.src}
                poster={approvedMedia.processVideo.posterSrc}
                width={approvedMedia.processVideo.width}
                height={approvedMedia.processVideo.height}
                preload="none"
                muted
                playsInline
                controls
                className="aspect-[474/850] w-full object-cover"
                aria-label={approvedMedia.processVideo.alt}
                data-cta="process:video-aplicacao"
              />
            </div>
            <div className="order-1 space-y-4 md:order-none">
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Execução real
              </span>
              <h3 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
                Do diagnóstico ao campo, a solução precisa ser aplicável no terreno.
              </h3>
              <p className="text-muted-foreground md:text-lg">
                {approvedMedia.processVideo.caption}
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="process:whatsapp-enviar-fotos"
                className="btn-primary inline-flex items-center gap-3 px-5 py-3"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar fotos para avaliação
              </a>
            </div>
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

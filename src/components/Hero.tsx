import { MessageCircle, Check } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center pt-[72px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, hsla(160, 64%, 10%, 0.88) 0%, hsla(210, 11%, 13%, 0.78) 100%)' 
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left */}
          <div className="lg:col-span-3 space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight text-balance">
              Recuperação ambiental com execução de engenharia em campo — em taludes, beiras de estrada e áreas degradadas.
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              Hidrossemeadura e soluções de revegetação para <strong>conter erosão</strong>, <strong>atender exigências ambientais</strong> e <strong>deixar a área pronta para seguir</strong> — com avaliação técnica e execução no cenário real.
            </p>

            {/* Benefits - Desktop */}
            <ul className="hidden md:block space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-primary-foreground/85">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-foreground" />
                  <span className="text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card - Right */}
          <div className="lg:col-span-2 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="cta-card">
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-4">
                Solicite uma avaliação técnica
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Envie <strong>local</strong>, <strong>fotos</strong> e <strong>metragem aproximada</strong> para agilizar a análise.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp e solicitar avaliação
              </a>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

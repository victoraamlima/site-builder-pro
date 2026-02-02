import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5591999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero avaliar uma área/obra para controle de erosão e recuperação ambiental. Posso enviar fotos e localização?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FinalCTA = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container-custom text-center">
        <h2 className="text-primary-foreground mb-4 text-2xl md:text-3xl">
          Precisa recuperar uma área e reduzir risco de erosão?
        </h2>
        
        <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-8">
          Chame no WhatsApp e envie fotos/localização. A gente avalia o cenário e orienta o caminho mais aplicável para avançar com segurança.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp e solicitar avaliação
        </a>

        <p className="text-primary-foreground/70 text-sm mt-6">
          Quanto mais contexto você enviar, mais rápido a análise.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;

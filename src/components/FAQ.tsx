import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const FAQ = () => {
  const faqs = [
    {
      question: "Vocês atendem quais regiões?",
      answer: "Atendemos principalmente Belém/PA e região. Se você estiver em outra localidade, envie a localização para avaliarmos viabilidade.",
    },
    {
      question: "O orçamento sai na hora?",
      answer: "Depende do cenário. Com fotos, localização e metragem aproximada, já dá para orientar o caminho e estimar próximos passos.",
    },
    {
      question: "Hidrossemeadura serve para qualquer área?",
      answer: "Não. Ela funciona muito bem em cenários específicos. A avaliação técnica define se é o melhor caminho ou se outra solução faz mais sentido.",
    },
    {
      question: "O que preciso enviar para começar?",
      answer: "Localização, fotos/vídeos, metragem aproximada e o que está acontecendo (erosão, solo exposto, exigência ambiental, etc.).",
    },
    {
      question: "Vocês fazem visita técnica?",
      answer: "Quando necessário. Primeiro fazemos uma triagem pelo WhatsApp com informações básicas para direcionar corretamente.",
    },
  ];

  return (
    <section className="section-green section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-foreground mb-4 section-header section-header-center">
                Perguntas frequentes
              </h2>
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-card-border/50 rounded-xl px-6 data-[state=open]:shadow-sm data-[state=open]:border-card-border transition-all duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
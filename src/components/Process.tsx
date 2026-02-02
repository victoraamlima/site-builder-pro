import { MessageSquare, Search, Hammer } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Você chama no WhatsApp",
      description: "Envie localização, fotos e contexto (o que está acontecendo e qual a urgência).",
    },
    {
      number: "02",
      icon: Search,
      title: "Avaliação técnica do cenário",
      description: "A gente entende o terreno, o tipo de necessidade e define o caminho mais aplicável.",
    },
    {
      number: "03",
      icon: Hammer,
      title: "Execução em campo + orientação",
      description: "Aplicação conforme o cenário e orientações do que sustenta a recuperação no tempo.",
    },
  ];

  return (
    <section className="section-gray section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-foreground mb-4">
            Um processo simples para sair do problema e ir para a execução
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-[2px] bg-border" />
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step Number Circle */}
              <div className="relative z-10 w-[120px] h-[120px] rounded-full bg-card border-2 border-primary flex flex-col items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl font-bold text-primary">{step.number}</span>
                <step.icon className="w-6 h-6 text-primary mt-1" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-xs">
                {step.description}
              </p>

              {/* Mobile Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-[2px] h-8 bg-border mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

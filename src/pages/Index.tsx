import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Credibility from "@/components/Credibility";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <ValueProposition />
        <Services />
        <Process />
        <Credibility />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;

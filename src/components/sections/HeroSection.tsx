import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative bg-gradient-to-b from-background via-background/80 to-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Machine Learning Engineer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Developing intelligent systems and deploying scalable ML solutions. Specializing in computer vision, natural language processing, and deep learning architectures.
        </p>
      </motion.div>
      
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 animate-bounce"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </motion.button>
    </section>
  );
};
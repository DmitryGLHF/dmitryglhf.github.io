import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Machine Learning Engineer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Building intelligent solutions for complex problems
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-secondary/20 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
            <p className="text-muted-foreground">Developing cutting-edge artificial intelligence applications</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-secondary/20 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
            <p className="text-muted-foreground">Implementing neural networks for complex tasks</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-secondary/20 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-2">Data Science</h3>
            <p className="text-muted-foreground">Transforming data into actionable insights</p>
          </motion.div>
        </div>
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
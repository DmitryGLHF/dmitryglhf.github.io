import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const HeroSection = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative bg-gradient-to-b from-background via-background/80 to-background">
      {/* Theme Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 rounded-full"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Creative Developer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Crafting beautiful and functional web experiences
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 max-w-2xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-1/2 p-6 bg-card/50 rounded-lg backdrop-blur-sm border border-border/50 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-muted-foreground">Building modern and responsive web applications</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-1/2 p-6 bg-card/50 rounded-lg backdrop-blur-sm border border-border/50 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground">Creating intuitive and engaging user experiences</p>
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
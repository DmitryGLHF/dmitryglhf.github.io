import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Code, Database, Mail, User } from "lucide-react";

const Index = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
    // Removed console.log that was causing circular JSON structure error
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Particles
        className="absolute inset-0 -z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#9b87f5",
            },
            links: {
              color: "#9b87f5",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Machine Learning Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Building intelligent solutions for complex problems
          </p>
          <Button className="text-lg px-8 py-6" size="lg">
            View Projects
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 gradient-text">About Me</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 bg-secondary/50 backdrop-blur">
              <User className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Background</h3>
              <p className="text-muted-foreground">
                Experienced ML engineer specializing in deep learning and computer vision
              </p>
            </Card>
            <Card className="p-6 bg-secondary/50 backdrop-blur">
              <Brain className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-muted-foreground">
                Neural networks, NLP, and deployment of ML models at scale
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Skills</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 bg-secondary/50 backdrop-blur">
              <Code className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <p className="text-muted-foreground">Python, R, SQL, JavaScript</p>
            </Card>
            <Card className="p-6 bg-secondary/50 backdrop-blur">
              <Brain className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">ML/DL</h3>
              <p className="text-muted-foreground">TensorFlow, PyTorch, Scikit-learn</p>
            </Card>
            <Card className="p-6 bg-secondary/50 backdrop-blur">
              <Database className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p className="text-muted-foreground">Docker, AWS, Git, MLflow</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Get in Touch</h2>
          <Card className="p-8 bg-secondary/50 backdrop-blur inline-block">
            <Mail className="w-12 h-12 mb-4 text-primary mx-auto" />
            <p className="text-xl mb-6">Interested in working together?</p>
            <Button size="lg">
              Contact Me
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
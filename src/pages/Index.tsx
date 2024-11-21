import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Code, Database, Download, Mail, User } from "lucide-react";

const Index = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
    // Intentionally empty to avoid circular JSON structure error
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "/path-to-your-cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Panel */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16 space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-sm hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>

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
              value: "#333333",
            },
            links: {
              color: "#333333",
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
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Machine Learning Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Building intelligent solutions for complex problems
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 gradient-text">About Me</h2>
          <Card className="p-6 bg-secondary/50 backdrop-blur">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="aspect-square rounded-lg bg-background/20 mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button 
                  onClick={handleDownloadCV}
                  className="w-full bg-primary/80 hover:bg-primary"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground mb-4">
                  Experienced Machine Learning Engineer with a strong foundation in deep learning
                  and computer vision. Passionate about developing AI solutions that make a real
                  impact. Specialized in building and deploying scalable machine learning models
                  for complex real-world problems.
                </p>
                <p className="text-muted-foreground">
                  With over [X] years of experience in the field, I've worked on projects ranging
                  from computer vision applications to natural language processing systems.
                  My expertise includes developing end-to-end ML pipelines, optimizing model
                  performance, and implementing MLOps practices.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-background/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-secondary/50 backdrop-blur hover:bg-secondary/60 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Project 1</h3>
              <p className="text-muted-foreground mb-4">
                Description of project 1. Explain the problem solved and technologies used.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Demo</Button>
                <Button variant="outline" size="sm">Code</Button>
              </div>
            </Card>
            <Card className="p-6 bg-secondary/50 backdrop-blur hover:bg-secondary/60 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Project 2</h3>
              <p className="text-muted-foreground mb-4">
                Description of project 2. Explain the problem solved and technologies used.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Demo</Button>
                <Button variant="outline" size="sm">Code</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-secondary/20">
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
      <section id="contact" className="py-20 px-4">
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
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and TailwindCSS.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      link: "https://github.com/yourusername/portfolio"
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with cart and payment integration.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location services.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      technologies: ["React", "Weather API", "Geolocation"],
      link: "https://github.com/yourusername/weather-app"
    },
    {
      title: "Task Manager",
      description: "Collaborative task management application.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "https://github.com/yourusername/task-manager"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background/50">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur hover:bg-card/60 transition-colors h-full border border-border/50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
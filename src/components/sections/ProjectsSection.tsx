import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1. Explain the problem solved and technologies used.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Python", "TensorFlow", "Docker", "AWS"]
    },
    {
      title: "Project 2",
      description: "Description of project 2. Explain the problem solved and technologies used.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background/50">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-secondary/50 backdrop-blur hover:bg-secondary/60 transition-colors">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
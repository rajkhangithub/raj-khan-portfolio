import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, FileText, BarChart3, Ship } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NutriScan AI",
      description: "Detect harmful ingredients in food products using machine learning and image processing. Helps users make informed dietary choices by analyzing product labels.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Machine Learning"],
      icon: Brain,
      category: "AI/ML",
      github: "https://github.com/rajkhangithub/nutriscan-ai",
      demo: "#",
      color: "text-green-600"
    },
    {
      title: "Goat-Notes",
      description: "Real-time, multi-user collaborative note-taking web application with live synchronization using Supabase for seamless team collaboration.",
      technologies: ["React", "Supabase", "JavaScript", "Real-time DB", "Authentication"],
      icon: FileText,
      category: "Full Stack",
      github: "https://github.com/rajkhangithub/goat-notes",
      demo: "#",
      color: "text-blue-600"
    },
    {
      title: "Mobile Sales Prediction",
      description: "Machine learning regression model to predict mobile phone sales using comprehensive data analysis with Pandas and visualization with Seaborn.",
      technologies: ["Python", "Pandas", "Seaborn", "Scikit-Learn", "Data Analysis"],
      icon: BarChart3,
      category: "Data Science",
      github: "https://github.com/rajkhangithub/mobile-sales-prediction",
      demo: "#",
      color: "text-purple-600"
    },
    {
      title: "Codsoft Internship Projects",
      description: "Collection of machine learning projects including Titanic Survival prediction, Iris flower classification, and Movie rating predictor developed during internship.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Jupyter"],
      icon: Ship,
      category: "ML Portfolio",
      github: "https://github.com/rajkhangithub/codsoft-projects",
      demo: "#",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in AI, machine learning, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="glass-card group hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`w-6 h-6 ${project.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        onClick={() => window.open(project.github, '_blank')}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github size={16} />
                        Code
                      </Button>
                      <Button
                        onClick={() => window.open(project.demo, '_blank')}
                        size="sm"
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button
              onClick={() => window.open('https://github.com/rajkhangithub', '_blank')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
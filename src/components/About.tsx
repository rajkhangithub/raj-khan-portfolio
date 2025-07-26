import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Database, Brain } from 'lucide-react';

const About = () => {
  const skills = {
    "Languages": ["Java", "Python", "JavaScript", "C++"],
    "Frameworks & Tools": ["Django", "ReactJS", "Flask", "MySQL", "MongoDB", "PostgreSQL", "TailwindCSS", "REST APIs"],
    "ML & Data Science": ["Scikit-Learn", "TensorFlow", "Pandas", "NumPy", "Seaborn", "Power BI", "Tableau"],
    "Developer Tools": ["Docker", "Git", "Jupyter", "IntelliJ", "PyCharm"]
  };

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about leveraging technology to create meaningful solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Bio */}
            <div className="space-y-8">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I'm a Computer Science student specializing in Data Science, passionate about AI, 
                    machine learning, and building smart, user-friendly applications. I aim to use my 
                    technical skills to solve real-world problems and innovate for social impact.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My journey in technology is driven by curiosity and the desire to create solutions 
                    that make a difference. I believe in the power of data-driven innovation to transform 
                    how we approach complex challenges.
                  </p>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">
                        B.Tech in Computer Science (Data Science)
                      </h4>
                      <p className="text-primary font-medium">
                        Maharishi Markandeshwar University, Ambala
                      </p>
                      <p className="text-muted-foreground">
                        Graduating in 2026
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Technical Skills</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category}>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="glass-card text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">4+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="glass-card text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">1</div>
                    <div className="text-sm text-muted-foreground">Internship</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
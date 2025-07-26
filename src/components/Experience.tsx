import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, Users } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building experience through hands-on projects and collaborative development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
            
            {/* Experience Item */}
            <div className="relative pl-20 pb-12">
              {/* Timeline marker */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
              
              <Card className="glass-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          Software Developer Intern
                        </CardTitle>
                        <p className="text-lg text-primary font-semibold">Codsoft</p>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">June 2024 – Aug 2024</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Gained hands-on experience in machine learning and software development through 
                    collaborative team projects. Focused on building predictive models and optimizing 
                    their performance for real-world applications.
                  </p>

                  {/* Key Responsibilities */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Developed ML models</strong> for classification and prediction including Titanic Survival prediction, Iris flower classification, and Movie rating predictor
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Deployed models</strong> and optimized performance through hyperparameter tuning and feature engineering
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Collaborated effectively</strong> in a development team environment using Git for version control and code reviews
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python", "Scikit-Learn", "Pandas", "NumPy", "Jupyter Notebook", 
                        "Git", "Machine Learning", "Data Analysis"
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-primary mr-2" />
                      <h4 className="text-lg font-semibold text-foreground">Impact & Learning</h4>
                    </div>
                    <p className="text-muted-foreground">
                      This internship provided invaluable experience in applying theoretical knowledge 
                      to practical problems, working in a professional development environment, and 
                      understanding the complete ML project lifecycle from data preprocessing to model deployment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Future Goals */}
          <Card className="glass-card mt-8">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Looking Forward
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Currently seeking opportunities to apply my skills in AI/ML and full-stack development 
                in challenging projects that create meaningful impact. Open to internships, freelance work, 
                and collaborative projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Globe, BarChart3, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Model Development",
      description: "Custom ML solutions including classification, regression, and deep learning models. From data preprocessing to model deployment, I deliver end-to-end AI solutions tailored to your specific needs.",
      features: [
        "Custom algorithm development",
        "Data preprocessing & feature engineering",
        "Model training & optimization",
        "Performance evaluation & testing",
        "Model deployment & monitoring"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Globe,
      title: "Full Stack Web App Development",
      description: "Modern, responsive web applications built with cutting-edge technologies. I create scalable solutions from frontend interfaces to backend APIs and database design.",
      features: [
        "React/JavaScript frontend development",
        "Python/Django backend services",
        "Database design & optimization",
        "REST API development",
        "Responsive UI/UX design"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights through comprehensive analysis and compelling visualizations. I help businesses make data-driven decisions with clear, impactful reporting.",
      features: [
        "Exploratory data analysis",
        "Statistical modeling",
        "Interactive dashboards",
        "Business intelligence reports",
        "Data storytelling & insights"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services I Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions to help you achieve your goals
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="glass-card group hover:shadow-2xl transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">What I Deliver:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 ${service.color.replace('text-', 'bg-')} rounded-full mt-2 mr-3 flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={scrollToContact}
                      variant="outline"
                      className="w-full mt-6 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how I can help bring your ideas to life with innovative technology solutions.
                </p>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="btn-glow bg-primary hover:bg-primary/90"
                >
                  Let's Work Together
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
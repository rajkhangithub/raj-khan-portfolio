import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8271628344",
      href: "tel:+918271628344",
      color: "text-green-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "rk2826719@gmail.com",
      href: "mailto:rk2826719@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "raj-khan-275393287",
      href: "https://linkedin.com/in/raj-khan-275393287",
      color: "text-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rajkhangithub",
      href: "https://github.com/rajkhangithub",
      color: "text-gray-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in new opportunities, collaborations, and innovative projects. 
                    Whether you have a specific project in mind or just want to connect, feel free to reach out!
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <a
                          key={index}
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors group"
                        >
                          <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                            <IconComponent className={`w-6 h-6 ${info.color}`} />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{info.label}</div>
                            <div className="text-muted-foreground">{info.value}</div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Response Time
                  </h3>
                  <p className="text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent inquiries, 
                    feel free to call or connect via LinkedIn for faster communication.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or how I can help you..."
                      rows={6}
                      required
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-glow bg-primary hover:bg-primary/90 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
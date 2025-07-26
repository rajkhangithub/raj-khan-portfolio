import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/10 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Raj Khan</h3>
              <p className="text-muted-foreground">
                Full Stack Developer & ML Enthusiast passionate about creating 
                innovative solutions through technology.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Services', href: '#services' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>rk2826719@gmail.com</p>
                <p>+91 8271628344</p>
                <p>Ambala, Haryana, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30">
            <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary mx-1" />
              <span>by Raj Khan</span>
            </div>
            
            <div className="text-muted-foreground text-sm">
              © {currentYear} Raj Khan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
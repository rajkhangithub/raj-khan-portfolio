import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Raj Khan
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Hire Me
            </Button>
            <Button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="btn-glow bg-primary hover:bg-primary/90"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card mt-4 mx-6 rounded-lg">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Hire Me
                </Button>
                <Button
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="w-full btn-glow bg-primary hover:bg-primary/90"
                >
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator"
        style={{
          transform: `scaleX(${isScrolled ? '1' : '0'})`,
          transition: 'transform 0.3s ease'
        }}
      />
    </>
  );
};

export default Navbar;
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import rajProfile from '@/assets/raj-profile.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Raj Khan – Full Stack Developer & ML Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl mx-auto relative">
              <img
                src="/lovable-uploads/40ffa2fc-90fc-43b0-8756-ed2fb270d79c.png"
                alt="Raj Khan - Full Stack Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Glow effect around profile */}
            <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/20 blur-xl mx-auto animate-pulse" />
          </div>

          {/* Typewriter Welcome Message */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground min-h-[4rem] md:min-h-[6rem]">
            <span className="inline-block">
              {displayText}
              <span className="inline-block w-1 bg-primary ml-1 animate-pulse">|</span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Solving real-world problems using data-driven innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="btn-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Hire Me
            </Button>
            <Button
              onClick={() => window.open('/resume.pdf', '_blank')}
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6"
            >
              Download Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown 
              size={32} 
              className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection('#about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useEffect, useState } from 'react';
import { Mouse, ChevronDown } from 'lucide-react';
import WireframeHand from './WireframeHand';

const Hero = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const handParticles = [];
    for (let i = 0; i < 50; i++) {
      handParticles.push({
        id: i,
        x: Math.random() * 200,
        y: Math.random() * 250,
        delay: Math.random() * 4
      });
    }
    setParticles(handParticles);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-16 lg:pt-0" style={{
      backgroundImage: 'url(/enhanced-damask.svg)',
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
    }}>
      {/* Premium black overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-gray-900/80"></div>
      
      {/* Additional luxury texture layer */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent"></div>
      </div>
      
      <div className="container-responsive relative z-10 py-8 sm:py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Timeline indicator */}
            <div className="flex items-start space-x-4 justify-center lg:justify-start">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary shadow-lg shadow-primary/50 animate-glow-pulse"></div>
                <div className="w-0.5 h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-primary to-transparent mt-2"></div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-1 text-center lg:text-left">
                <h1 className="text-hero">
                  <span className="text-foreground">Hi, I'm </span>
                  <span className="text-primary glow-text">Ari</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-light max-w-md mx-auto lg:mx-0">
                  I humanize data
                </p>
                <p className="text-sm sm:text-base text-muted-foreground/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Data Scientist & ML Engineer transforming complex datasets into actionable insights
                </p>
              </div>
            </div>

            {/* CTA buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#work" 
                className="touch-target inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="touch-target inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-primary/50 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right side - 3D Wireframe Hand */}
          <div className="relative h-56 sm:h-72 md:h-80 lg:h-[450px] xl:h-[500px] flex items-center justify-center animate-slide-in-right order-1 lg:order-2">
            <WireframeHand />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in">
        <div className="flex flex-col items-center">
          <Mouse className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground mb-1 scroll-indicator" />
          <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 hidden sm:block">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

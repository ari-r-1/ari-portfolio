import { useEffect, useState } from 'react';
import { Mouse } from 'lucide-react';
import WireframeHand from './WireframeHand';

const Hero = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate particle positions to form a hand shape
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black" style={{
      backgroundImage: 'url(/enhanced-damask.svg)',
      backgroundRepeat: 'repeat',
      backgroundSize: '300px 300px'
    }}>
      {/* Premium black overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-gray-900/80"></div>
      
      {/* Additional luxury texture layer */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="space-y-6 sm:space-y-8 animate-fade-in delay-100 text-center lg:text-left">
          {/* Timeline indicator */}
          <div className="flex items-start space-x-4 justify-center lg:justify-start">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary shadow-lg shadow-primary/50 animate-glow-pulse"></div>
              <div className="w-0.5 h-16 sm:h-20 bg-gradient-to-b from-primary to-transparent mt-2"></div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-primary glow-text">Ari</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light">
                I humanize data
              </p>
            </div>
          </div>

        </div>

        {/* Right side - 3D Wireframe Hand */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center animate-slide-in-right delay-300 mt-8 lg:mt-0">
          <WireframeHand />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in delay-1000">
        <Mouse className="w-6 h-6 text-muted-foreground mx-auto mb-2 scroll-indicator" />
        <p className="text-sm text-muted-foreground">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
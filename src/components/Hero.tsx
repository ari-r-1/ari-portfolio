import { useEffect, useState } from 'react';
import { Mouse } from 'lucide-react';

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
    <section className="min-h-screen flex items-center justify-center bg-hero-pattern relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/90"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="space-y-8 animate-fade-in delay-100">
          {/* Timeline indicator */}
          <div className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 animate-glow-pulse"></div>
              <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-transparent mt-2"></div>
            </div>
            <div className="space-y-4 pt-1">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-primary glow-text">Ari</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                I humanize data
              </p>
            </div>
          </div>

        </div>

        {/* Right side - 3D Particle Hand */}
        <div className="relative h-96 lg:h-[500px] flex items-center justify-center animate-slide-in-right delay-300">
          <div className="relative w-80 h-80">
            {/* Particle hand visualization */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50 transition-all duration-1000 ease-in-out animate-fade-in"
                style={{
                  left: `${particle.x}px`,
                  top: `${particle.y}px`,
                  animationDelay: `${particle.delay}s`
                }}
              >
                <div className="w-full h-full bg-primary-glow rounded-full animate-particle-float opacity-80"></div>
              </div>
            ))}
            
            {/* Central glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full animate-pulse duration-3000 ease-in-out"></div>
          </div>
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
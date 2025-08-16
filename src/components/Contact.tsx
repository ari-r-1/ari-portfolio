import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; z: number }>>([]);

  useEffect(() => {
    // Generate particles for 3D globe effect
    const globeParticles = [];
    for (let i = 0; i < 100; i++) {
      globeParticles.push({
        id: i,
        x: Math.random() * 400,
        y: Math.random() * 400,
        z: Math.random() * 200
      });
    }
    setParticles(globeParticles);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-hero-pattern relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/95"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-muted-foreground uppercase text-sm font-semibold tracking-wider mb-4">
            I WOULD LOVE TO HEAR FROM YOU
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Contact.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Contact form */}
          <div className="animate-slide-in-left">
            <div className="bg-card-dark rounded-xl p-8 border border-border shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="What's your name?"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="What's your email?"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What do you want to say?"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30"
                >
                  Send Message
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>

          {/* Right side - 3D Globe visualization */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center animate-slide-in-right">
            <div className="relative w-80 h-80">
              {/* Globe particles */}
              {particles.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-accent rounded-full shadow-sm shadow-accent/50"
                  style={{
                    left: `${particle.x}px`,
                    top: `${particle.y}px`,
                    transform: `translateZ(${particle.z}px)`,
                    animationDelay: `${particle.id * 0.1}s`
                  }}
                >
                  <div className="w-full h-full bg-accent-purple rounded-full animate-particle-float opacity-60"></div>
                </div>
              ))}

              {/* Globe core */}
              <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-accent-purple/20 to-transparent rounded-full animate-pulse"></div>
              
              {/* Orbital rings */}
              <div className="absolute inset-0 border border-accent/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 border border-accent-purple/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-8 border border-accent-green/30 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>

              {/* Central glow */}
              <div className="absolute inset-1/4 bg-gradient-to-r from-accent via-accent-purple to-accent-green rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulseSpeed: number;
  color: string;
}

interface Connection {
  p1: Particle;
  p2: Particle;
  opacity: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 8000));
      
      const colors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981'];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      particlesRef.current = particles;
    };

    const updateConnections = () => {
      const particles = particlesRef.current;
      const connections: Connection[] = [];
      const maxDistance = 120;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            connections.push({
              p1: particles[i],
              p2: particles[j],
              opacity
            });
          }
        }
      }
      
      connectionsRef.current = connections;
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Pulse effect
        particle.opacity = 0.3 + Math.sin(time * particle.pulseSpeed) * 0.4;
      });
      
      updateConnections();
      
      // Draw connections
      connectionsRef.current.forEach(connection => {
        ctx.beginPath();
        ctx.moveTo(connection.p1.x, connection.p1.y);
        ctx.lineTo(connection.p2.x, connection.p2.y);
        
        // Create gradient for connections
        const gradient = ctx.createLinearGradient(
          connection.p1.x, connection.p1.y,
          connection.p2.x, connection.p2.y
        );
        gradient.addColorStop(0, connection.p1.color + Math.floor(connection.opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, connection.p2.color + Math.floor(connection.opacity * 255).toString(16).padStart(2, '0'));
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      
      // Draw particles
      particlesRef.current.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create glowing effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(0.5, particle.color + Math.floor(particle.opacity * 128).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, particle.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Inner bright core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + 'ff';
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate(0);

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;

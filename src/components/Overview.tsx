import { Cpu, Code, Settings, Music } from 'lucide-react';

const Overview = () => {
  const roles = [
    {
      title: 'ML/AI Engineer',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-accent via-accent-purple to-accent-green'
    },
    {
      title: 'Python Developer',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-accent-purple via-accent to-accent-green'
    },
    {
      title: 'MLOps Engineer',
      icon: <Settings className="w-8 h-8" />,
      gradient: 'from-accent-green via-accent-purple to-accent'
    },
    {
      title: 'Music Composer',
      icon: <Music className="w-8 h-8" />,
      gradient: 'from-accent via-accent-green to-accent-purple'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary uppercase text-sm font-semibold tracking-wider mb-4">
            INTRODUCTION
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Developer turned Machine Learning Engineer, I tailor and implement data driven solutions to help breakthrough domains. 
            My passion of maths backing ML/AI helps me design solutions that are just right.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative bg-card-dark rounded-xl p-6 text-center neon-border hover:scale-105 transition-all duration-500 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" 
                   style={{ background: `linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-purple)), hsl(var(--accent-green)))` }}>
              </div>
              
              {/* Card content */}
              <div className="relative z-10 bg-card-dark rounded-xl p-6 border border-border">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${role.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-foreground">
                    {role.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {role.title}
                </h3>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 via-accent-purple/20 to-accent-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
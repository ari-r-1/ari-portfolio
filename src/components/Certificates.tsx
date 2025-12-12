import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Certified Data Scientist',
      organization: 'Data Mites',
      icon: Award
    },
    {
      title: 'Python for Data Science Development',
      organization: 'IBM',
      icon: Award
    },
    {
      title: 'Python for Machine Learning',
      organization: 'Great Learning',
      icon: Award
    },
    {
      title: 'Advanced Google Analytics',
      organization: 'Google',
      icon: Award
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container-responsive">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <p className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            Professional Growth
          </p>
          <h2 className="text-section-title text-foreground mb-4 sm:mb-6">
            Certificates
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
        </div>

        {/* Certificates grid - 2 columns on tablet+, 1 on mobile */}
        <div className="grid-responsive-2 max-w-4xl mx-auto">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="group premium-card p-4 sm:p-5 lg:p-6 card-hover animate-scale-in touch-target"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-purple-900/20 rounded-lg group-hover:bg-purple-800/30 transition-colors duration-300 flex-shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-1 sm:mb-2 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {cert.organization}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

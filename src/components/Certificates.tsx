import { Award, Calendar } from 'lucide-react';

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
    <section id="certificates" className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Professional Growth
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Certificates
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
        </div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 via-purple-900/30 to-slate-800 rounded-xl p-6 border border-slate-600 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-900/20 rounded-lg group-hover:bg-purple-800/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
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
import { Brain, Code2, Settings, Zap } from 'lucide-react';

const Overview = () => {
  const roles = [
    {
      title: 'Email Marketing Executive',
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-cyan-400 via-purple-500 to-blue-500'
    },
    {
      title: 'Data Analyst', 
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-purple-500 via-pink-500 to-cyan-400'
    },
    {
      title: 'Junior Data Scientist',
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-green-400 via-cyan-500 to-purple-500'
    },
    {
      title: 'ML/AI Engineer',
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-blue-500 via-purple-600 to-pink-500'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-responsive">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <p className="text-secondary uppercase text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-4">
            INTRODUCTION
          </p>
          <h2 className="text-section-title text-foreground mb-4 sm:mb-6 lg:mb-8">
            Overview
          </h2>
          <p className="text-body text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I am a Junior Data Scientist and Analytics Enthusiast with a strong foundation in Python, SQL, and data visualization using Tableau and Power BI. I specialize in cleaning data, feature engineering, and building predictive models to uncover trends and patterns. My experience spans supervised and unsupervised machine learning, A/B testing, and hypothesis-driven analysis to support data-informed decisions. I enjoy translating complex datasets into clear insights that drive business strategies.
          </p>
        </div>

        {/* Role cards - Responsive grid */}
        <div className="grid-responsive-4 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative premium-card p-5 sm:p-6 lg:p-8 text-center card-hover cursor-pointer overflow-hidden animate-scale-in touch-target"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" 
                   style={{ background: `linear-gradient(135deg, #00f5ff, #8b5cf6, #06ffa5)` }}>
              </div>
              
              {/* Card content */}
              <div className="relative z-10">
                {/* 3D Icon with geometric style */}
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r ${role.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30`}>
                  <div className="text-white drop-shadow-lg">
                    {role.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                  {role.title}
                </h3>
              </div>
              
              {/* Background geometric pattern */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border border-cyan-400 rotate-45"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border border-purple-400 rotate-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;

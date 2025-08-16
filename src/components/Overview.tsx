import { Brain, Code2, Settings, Zap } from 'lucide-react';

const Overview = () => {
  const roles = [
    {
      title: 'ML/AI Engineer',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-cyan-400 via-purple-500 to-blue-500'
    },
    {
      title: 'Python Developer', 
      icon: <Code2 className="w-8 h-8" />,
      gradient: 'from-purple-500 via-pink-500 to-cyan-400'
    },
    {
      title: 'MLOps Engineer',
      icon: <Settings className="w-8 h-8" />,
      gradient: 'from-green-400 via-cyan-500 to-purple-500'
    },
    {
      title: 'Music Composer',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-blue-500 via-purple-600 to-pink-500'
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
              className="group relative bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 rounded-2xl p-8 text-center border border-cyan-500/30 hover:border-cyan-400/60 hover:scale-105 transition-all duration-500 animate-scale-in cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" 
                   style={{ background: `linear-gradient(135deg, #00f5ff, #8b5cf6, #06ffa5)` }}>
              </div>
              
              {/* Card content */}
              <div className="relative z-10">
                {/* 3D Icon with geometric style */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${role.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30`}>
                  <div className="text-white drop-shadow-lg">
                    {role.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {role.title}
                </h3>
              </div>
              
              {/* Background geometric pattern */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-8 h-8 border border-cyan-400 rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border border-purple-400 rotate-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
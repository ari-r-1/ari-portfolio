const WorkExperience = () => {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Genxlead Solutions Pvt Ltd',
      date: 'Apr 2022 – Oct 2024',
      duration: '2.5 Years Experience',
      location: 'Chennai, India',
      logo: 'GS', // Genxlead Solutions abbreviation
      responsibilities: [
        'Gained hands-on experience working with data analysis, problem-solving, email marketing and implementing data-driven solutions',
        'Contributed to projects that enhanced business operations by identifying key insights, improving efficiency, and supporting decision-making processes',
        'Worked closely with cross-functional teams to deliver high-quality results and continuously improve workflows',
        'Designed, implemented and optimized email marketing campaigns targeting different customer segments'
      ],
      achievements: [
        '30% increase in email open rates',
        '25% boost in click-through rates (CTR)', 
        '20% increase in conversion rates'
      ],
      isLeft: true
    }
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary uppercase text-sm font-semibold tracking-wider mb-4">
            MY JOURNEY
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-accent-purple"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  exp.isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } flex-col lg:space-x-8`}
              >
                {/* Timeline node with company logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full border-4 border-white flex items-center justify-center z-10 shadow-xl">
                  <span className="text-blue-600 font-bold text-sm">{exp.logo}</span>
                </div>

                {/* Date label */}
                <div className={`lg:w-1/2 ${exp.isLeft ? 'lg:text-right lg:pr-20' : 'lg:pl-20'} text-center lg:text-left mb-4 lg:mb-0 flex ${exp.isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center items-center`}>
                  <span className="text-white font-semibold text-lg">
                    {exp.date}
                  </span>
                </div>

                {/* Experience card */}
                <div className={`lg:w-1/2 w-full ${exp.isLeft ? 'lg:pr-20' : 'lg:pl-20'}`}>
                  <div
                    className="bg-gradient-to-br from-slate-800 via-purple-900/30 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-purple-400/50 transition-all duration-500 animate-slide-in-left shadow-2xl hover:shadow-purple-500/20"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground mb-2 font-medium">
                      {exp.company}
                    </p>
                    {exp.duration && (
                      <p className="text-sm text-accent mb-2">
                        {exp.duration} {exp.location && `• ${exp.location}`}
                      </p>
                    )}
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-secondary mb-2">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements && (
                      <div>
                        <h4 className="text-sm font-semibold text-accent-green mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start">
                              <span className="text-accent-green mr-2 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
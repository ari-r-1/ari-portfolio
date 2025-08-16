const WorkExperience = () => {
  const experiences = [
    {
      role: 'Network Engineer',
      company: 'IBM',
      date: 'Jan 2014',
      logo: 'IBM', // IBM text logo
      responsibilities: [
        'Managed, tracked, and coordinated problem resolution and escalation processes',
        'Initiated and managed network test facilities to verify network hardness and resilience', 
        'Monitored network capacity and performance to diagnose and resolve complex network problems',
        'Organized frameworks for transferring secure data from internal to external and public networks'
      ],
      isLeft: true
    },
    {
      role: 'Data Scientist',
      company: 'TechCorp',
      date: 'Mar 2018',
      logo: 'TC', // TechCorp abbreviation
      responsibilities: [
        'Developed machine learning models for predictive analytics across multiple business domains',
        'Implemented end-to-end data pipelines using Python, SQL, and cloud technologies',
        'Collaborated with cross-functional teams to translate business requirements into technical solutions',
        'Led workshops on data science best practices and MLOps implementation'
      ],
      isLeft: false
    },
    {
      role: 'ML Engineer',
      company: 'DataFlow Inc',
      date: 'Sep 2020', 
      logo: 'DF', // DataFlow abbreviation
      responsibilities: [
        'Architected and deployed production-ready ML systems serving millions of users',
        'Optimized model performance and reduced inference latency by 40%',
        'Built automated model monitoring and retraining pipelines',
        'Mentored junior data scientists and established ML engineering standards'
      ],
      isLeft: true
    },
    {
      role: 'Senior ML Engineer',
      company: 'AI Innovations',
      date: 'Feb 2023',
      logo: 'AI', // AI Innovations abbreviation
      responsibilities: [
        'Leading AI research initiatives and prototype development',
        'Designing scalable MLOps infrastructure for model deployment and monitoring',
        'Collaborating with product teams to integrate AI capabilities into customer-facing applications',
        'Contributing to open-source ML tools and participating in industry conferences'
      ],
      isLeft: false
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
                    <p className="text-muted-foreground mb-4 font-medium">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
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
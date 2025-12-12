const Education = () => {
  const education = [
    {
      degree: 'BE - ECE',
      institution: 'Selvam College Of Technology',
      date: '2017 – 2021',
      location: 'Namakkal, TamilNadu, India',
      grade: 'CGPA - 8.09',
      logo: 'SCT',
      isLeft: true
    },
    {
      degree: 'HSC',
      institution: 'Government Boys Higher Secondary School',
      date: '2016 – 2017',
      location: 'Erode, TamilNadu, India',
      grade: '1122/1200',
      logo: 'GBHSS',
      isLeft: false
    },
    {
      degree: 'SSLC',
      institution: 'Government Boys Higher Secondary School',
      date: '2014 – 2015',
      location: 'Erode, TamilNadu, India',
      grade: '451/500',
      logo: 'GBHSS',
      isLeft: true
    }
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-responsive">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <p className="text-secondary uppercase text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-4">
            MY JOURNEY
          </p>
          <h2 className="text-section-title text-foreground mb-4 sm:mb-6">
            Education
          </h2>
          <p className="text-muted-foreground text-body max-w-3xl mx-auto">
            My academic journey and educational background in engineering and data science
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - Desktop only */}
          <div className="timeline-line"></div>

          {/* Timeline items */}
          <div className="space-y-8 lg:space-y-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                  edu.isLeft ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node with institution logo - Desktop only */}
                <div className="timeline-node">
                  <span className="text-blue-600 font-bold text-xs xl:text-sm">{edu.logo}</span>
                </div>

                {/* Date label - Desktop */}
                <div className={`hidden lg:flex lg:w-1/2 ${edu.isLeft ? 'lg:justify-end lg:pr-16 xl:pr-20' : 'lg:justify-start lg:pl-16 xl:pl-20'}`}>
                  <span className="text-foreground font-semibold text-base lg:text-lg">
                    {edu.date}
                  </span>
                </div>

                {/* Education card */}
                <div className={`w-full lg:w-1/2 ${edu.isLeft ? 'lg:pr-16 xl:pr-20' : 'lg:pl-16 xl:pl-20'}`}>
                  {/* Mobile timeline indicator */}
                  <div className="mobile-timeline-indicator">
                    <div className="mobile-timeline-dot"></div>
                    <span className="text-foreground font-semibold text-sm sm:text-base">
                      {edu.date}
                    </span>
                  </div>

                  <div
                    className="premium-card p-4 sm:p-6 lg:p-8 card-hover animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-card-title text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-2 font-medium text-sm sm:text-base">
                      {edu.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-accent mb-3 sm:mb-4">
                      {edu.location}
                    </p>
                    
                    <div className="mt-3 sm:mt-4">
                      <div className="inline-flex items-center bg-purple-900/30 border border-purple-400/30 rounded-lg px-3 py-2">
                        <span className="text-accent-green font-semibold text-xs sm:text-sm">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
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

export default Education;

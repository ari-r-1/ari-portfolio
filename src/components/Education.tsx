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
    <section id="education" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <p className="text-secondary uppercase text-sm font-semibold tracking-wider mb-4">
            MY JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My academic journey and educational background in engineering and data science
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-accent-purple"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  edu.isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } flex-col lg:space-x-8 mb-8 lg:mb-0`}
              >
                {/* Timeline node with institution logo - Hidden on mobile */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 xl:w-20 xl:h-20 bg-white rounded-full border-4 border-white items-center justify-center z-10 shadow-xl">
                  <span className="text-blue-600 font-bold text-xs xl:text-sm">{edu.logo}</span>
                </div>

                {/* Date label */}
                <div className={`lg:w-1/2 ${edu.isLeft ? 'lg:text-right lg:pr-20' : 'lg:pl-20'} text-center lg:text-left mb-4 lg:mb-0 flex ${edu.isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center items-center`}>
                  <span className="text-white font-semibold text-base sm:text-lg">
                    {edu.date}
                  </span>
                </div>

                {/* Education card */}
                <div className={`lg:w-1/2 w-full ${edu.isLeft ? 'lg:pr-20' : 'lg:pl-20'} px-4 lg:px-0`}>
                  <div
                    className="bg-gradient-to-br from-slate-800 via-purple-900/30 to-slate-800 rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-600 hover:border-purple-400/50 transition-all duration-500 animate-slide-in-left shadow-2xl hover:shadow-purple-500/20"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-2 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-accent mb-2">
                      {edu.location}
                    </p>
                    
                    <div className="mt-4">
                      <div className="inline-flex items-center bg-purple-900/30 border border-purple-400/30 rounded-lg px-3 py-2">
                        <span className="text-accent-green font-semibold text-sm">
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
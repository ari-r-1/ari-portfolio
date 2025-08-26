
const Projects = () => {
  const projects = [
    {
      title: 'Currency Converter Web App',
      description: 'Flask-based web application for real-time currency conversion with interactive UI',
      githubUrl: 'https://github.com/ari-r-1/currency-converter-flask-based'
    },
    {
      title: 'Email Duplicate Cleaner Web App',
      description: 'Web application to identify and remove duplicate emails with automated cleaning algorithms',
      githubUrl: 'https://github.com/ari-r-1/email-duplicate-cleaner'
    },
    {
      title: 'Chronic Kidney Disease Prediction (CKDP)',
      description: 'Machine learning model for early detection and prediction of chronic kidney disease',
      githubUrl: 'https://github.com/ari-r-1/ckd-prediction'
    },
    {
      title: 'Data Extraction And NLP Text Analysis',
      description: 'Advanced NLP pipeline for extracting insights and performing comprehensive text analysis',
      githubUrl: 'https://github.com/ari-r-1/data-extraction-and-NLP-text-analysis-'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary uppercase text-sm font-semibold tracking-wider mb-4">
            MY WORK
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Projects.
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Working with organizations, I have been implementing data driven solution across various domains. 
            From providing meaningful insights with predictive analytics to implementing Machine and Deep learning models, 
            I have been supporting ventures on all fronts. Here are some of the projects with my implementation:
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card-dark rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              {/* Project content */}
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* GitHub link indicator */}
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">View on GitHub</span>
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 via-accent-purple/10 to-accent-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Badge } from '@/components/ui/badge';

const Projects = () => {
  // Function to get badge variant based on tag content
  const getBadgeVariant = (tag: string) => {
    const tagLower = tag.toLowerCase();
    if (tagLower === 'ml') return 'ml';
    if (tagLower === 'nlp') return 'nlp';
    if (tagLower === 'web-based') return 'web';
    if (tagLower === 'healthcare') return 'healthcare';
    if (tagLower === 'finance') return 'finance';
    if (tagLower === 'travel') return 'travel';
    if (tagLower === 'analytics') return 'analytics';
    if (tagLower === 'automation') return 'automation';
    return 'secondary';
  };

  const projects = [
    {
      title: 'Currency Converter Web App',
      description: 'Flask-based web application for real-time currency conversion with interactive UI',
      githubUrl: 'https://github.com/ari-r-1/currency-converter-flask-based',
      tags: ['Web-based', 'Finance']
    },
    {
      title: 'Email Duplicate Cleaner Web App',
      description: 'Web application to identify and remove duplicate emails with automated cleaning algorithms',
      githubUrl: 'https://github.com/ari-r-1/email-duplicate-cleaner',
      tags: ['Web-based', 'Automation']
    },
    {
      title: 'Chronic Kidney Disease Prediction (CKDP)',
      description: 'Machine learning model for early detection and prediction of chronic kidney disease',
      githubUrl: 'https://github.com/ari-r-1/ckd-prediction',
      tags: ['ML', 'Healthcare']
    },
    {
      title: 'Data Extraction And NLP Text Analysis',
      description: 'Advanced NLP pipeline for extracting insights and performing comprehensive text analysis',
      githubUrl: 'https://github.com/ari-r-1/data-extraction-and-NLP-text-analysis-',
      tags: ['NLP', 'ML', 'Analytics']
    },
    {
      title: 'Home Loan Default Prediction',
      description: 'Machine learning model for predicting home loan default risk and supporting risk management decisions',
      githubUrl: 'https://github.com/ari-r-1/HomeLoan_Default-Risk_Management',
      tags: ['ML', 'Finance']
    },
    {
      title: 'Skin Disorder Prediction',
      description: 'AI-powered diagnostic tool for predicting and classifying various skin disorders using machine learning',
      githubUrl: 'https://github.com/ari-r-1/SkinDisorder_Prediction',
      tags: ['ML', 'Healthcare']
    },
    {
      title: 'Flight Price Prediction',
      description: 'Predictive analytics model for forecasting flight prices based on various factors and market trends',
      githubUrl: 'https://github.com/ari-r-1/FlightPrice_Prediction',
      tags: ['ML', 'Travel']
    },
    {
      title: 'Portuguese Bank Marketing Prediction',
      description: 'Machine learning analysis for predicting customer response to Portuguese bank marketing campaigns',
      githubUrl: 'https://github.com/ari-r-1/Portuguese_Bank_Marketing_Analysis',
      tags: ['ML', 'Finance']
    },
    {
      title: 'No-Churn-Telecom: Customer Churn Prediction',
      description: 'Machine learning model for predicting customer churn in telecommunications to improve retention strategies',
      githubUrl: 'https://github.com/ari-r-1/No-Churn-Telecom',
      tags: ['ML', 'Analytics']
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 via-purple-900/30 to-slate-800 rounded-2xl overflow-hidden border border-slate-600 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer animate-scale-in touch-manipulation"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >

              {/* Project content */}
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant={getBadgeVariant(tag) as any} className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
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
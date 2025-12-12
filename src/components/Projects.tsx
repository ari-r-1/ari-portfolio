import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
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
    <section className="section-padding bg-background">
      <div className="container-responsive">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <p className="text-secondary uppercase text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-4">
            MY WORK
          </p>
          <h2 className="text-section-title text-foreground mb-4 sm:mb-6 lg:mb-8">
            Projects
          </h2>
          <p className="text-body text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Working with organizations, I have been implementing data driven solutions across various domains. 
            From providing meaningful insights with predictive analytics to implementing Machine and Deep learning models, 
            I have been supporting ventures on all fronts.
          </p>
        </div>

        {/* Projects grid - Responsive */}
        <div className="grid-responsive-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group premium-card overflow-hidden card-hover cursor-pointer animate-scale-in touch-target flex flex-col"
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              {/* Project content */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-grow mb-3 sm:mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant={getBadgeVariant(tag) as any} className="text-[10px] sm:text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* GitHub link indicator */}
                <div className="flex items-center text-primary opacity-70 group-hover:opacity-100 transition-all duration-300 mt-auto">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">View on GitHub</span>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/10 via-accent-purple/10 to-accent-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

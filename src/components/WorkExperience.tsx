const WorkExperience = () => {
  const experiences = [
    {
      role: 'Data Science Intern',
      company: 'FemtoSoft Technologies',
      date: 'Oct 2025 – Present',
      duration: 'Current Internship',
      location: '',
      logo: 'FT',
      responsibilities: [
        'Developed predictive analytics models using supervised and unsupervised learning for client projects',
        'Performed data preprocessing, Exploratory Data Analysis (EDA), and feature engineering to improve model accuracy',
        'Applied model evaluation metrics (Accuracy, F1-Score, Confusion Matrix) for performance validation'
      ],
      achievements: [
        'Tools: Python, Scikit-learn, Pandas, NumPy, SQL, Flask, Web Scraping'
      ],
      isLeft: true
    },
    {
      role: 'Data Science Intern',
      company: 'Rubixe - AI Solutions Company',
      date: 'Mar 2025 – Sep 2025',
      duration: '7 Months Internship',
      location: '',
      logo: 'RX',
      responsibilities: [
        'Developed customer churn prediction model (4,617 records) achieving 97.18% accuracy with LightGBM',
        'Conducted data preprocessing, Exploratory Data Analysis (EDA), feature engineering, and model evaluation',
        'Built and compared Logistic Regression, Random Forest, XGBoost, LGBM models',
        'Identified key churn drivers (international plan, call duration, voicemail) to guide retention strategy',
        'Visualized insights using Matplotlib and Seaborn'
      ],
      achievements: [
        'Project: No-Churn Telecom – Customer Churn Prediction',
        'Tech Stack: Python, Pandas, NumPy, Scikit-learn, LightGBM, XGBoost, Matplotlib, Seaborn'
      ],
      isLeft: false
    },
    {
      role: 'Software Engineer',
      company: 'Genxlead Solutions Pvt Ltd',
      date: 'Apr 2022 – Oct 2024',
      duration: '2.5 Years Experience',
      location: 'Chennai, India',
      logo: 'GS',
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
    <section id="work" className="section-padding bg-background">
      <div className="container-responsive">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <p className="text-secondary uppercase text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-4">
            MY JOURNEY
          </p>
          <h2 className="text-section-title text-foreground mb-4 sm:mb-6">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - Desktop only */}
          <div className="timeline-line"></div>

          {/* Timeline items */}
          <div className="space-y-8 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                  exp.isLeft ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node with company logo - Desktop only */}
                <div className="timeline-node">
                  <span className="text-blue-600 font-bold text-xs xl:text-sm">{exp.logo}</span>
                </div>

                {/* Date label - Desktop */}
                <div className={`hidden lg:flex lg:w-1/2 ${exp.isLeft ? 'lg:justify-end lg:pr-16 xl:pr-20' : 'lg:justify-start lg:pl-16 xl:pl-20'}`}>
                  <span className="text-foreground font-semibold text-base lg:text-lg">
                    {exp.date}
                  </span>
                </div>

                {/* Experience card */}
                <div className={`w-full lg:w-1/2 ${exp.isLeft ? 'lg:pr-16 xl:pr-20' : 'lg:pl-16 xl:pl-20'}`}>
                  {/* Mobile timeline indicator */}
                  <div className="mobile-timeline-indicator">
                    <div className="mobile-timeline-dot"></div>
                    <span className="text-foreground font-semibold text-sm sm:text-base">
                      {exp.date}
                    </span>
                  </div>

                  <div
                    className="premium-card p-4 sm:p-6 lg:p-8 card-hover animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-card-title text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground mb-2 font-medium text-sm sm:text-base">
                      {exp.company}
                    </p>
                    {exp.duration && (
                      <p className="text-xs sm:text-sm text-accent mb-3 sm:mb-4">
                        {exp.duration} {exp.location && `• ${exp.location}`}
                      </p>
                    )}
                    
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-secondary mb-2">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-muted-foreground text-xs sm:text-sm flex items-start">
                            <span className="text-primary mr-2 mt-0.5 flex-shrink-0">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-accent-green mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-muted-foreground text-xs sm:text-sm flex items-start">
                              <span className="text-accent-green mr-2 mt-0.5 flex-shrink-0">✓</span>
                              <span>{achievement}</span>
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

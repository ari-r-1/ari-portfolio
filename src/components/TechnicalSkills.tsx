const TechnicalSkills = () => {
  const skillCategories = [
    {
      category: 'Programming & Data',
      skills: [
        'Python (Pandas, NumPy, NLTK, Scikit-learn)',
        'SQL (Data Querying, Joins)',
        'Regular Expressions (Regex)'
      ]
    },
    {
      category: 'Data Analysis',
      skills: [
        'Exploratory Data Analysis (EDA)',
        'Data Preprocessing & Cleaning',
        'Excel (Formulas, Pivot Tables, Charts)'
      ]
    },
    {
      category: 'Visualization',
      skills: [
        'Matplotlib, Seaborn',
        'BI Tools (Tableau, Power BI)'
      ]
    },
    {
      category: 'Machine Learning',
      skills: [
        'Supervised Learning (Linear/Logistic Regression)',
        'Unsupervised Learning (K-Means, Clustering)',
        'Model Evaluation (Accuracy, F1, Confusion Matrix)',
        'Scikit-learn Pipeline Design'
      ]
    },
    {
      category: 'NLP & Text Analysis',
      skills: [
        'Text Preprocessing (Tokenization, Stemming)',
        'Sentiment Analysis (NLTK)',
        'Feature Extraction (Bag-of-Words, TF-IDF)',
        'Readability Scoring (FOG Index)'
      ]
    },
    {
      category: 'Web & Automation',
      skills: [
        'Web Scraping (BeautifulSoup, Requests)',
        'Flask Development'
      ]
    }
  ];

  return (
    <section id="technical-skills" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/damask-pattern.svg')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="container-responsive relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <p className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4">
            EXPERTISE
          </p>
          <h2 className="text-section-title text-foreground mb-4 sm:mb-6">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-body max-w-2xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and analytics
          </p>
        </div>

        {/* Skills by category - Responsive grid */}
        <div className="max-w-6xl mx-auto grid-responsive-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="premium-card p-4 sm:p-5 lg:p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-primary font-semibold text-sm sm:text-base mb-3 sm:mb-4 border-b border-primary/20 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-start text-foreground text-xs sm:text-sm leading-relaxed"
                  >
                    <span className="text-accent mr-2 mt-0.5 flex-shrink-0">▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;

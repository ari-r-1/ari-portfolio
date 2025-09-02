import { Badge } from "@/components/ui/badge";

const TechnicalSkills = () => {
  const skills = [
    "Python (Pandas, NumPy, NLTK, Scikit-learn)",
    "SQL (Data Querying, Joins)",
    "Regular Expressions (Regex)",
    "Exploratory Data Analysis (EDA)",
    "Data Preprocessing & Cleaning",
    "Matplotlib, Seaborn",
    "Excel (Formulas, Pivot Tables, Charts)",
    "Supervised Learning (Linear Regression, Logistic Regression)",
    "Unsupervised Learning (K-Means, Hierarchical Clustering)",
    "Model Evaluation (Accuracy, Confusion Matrix, F1 Score)",
    "Scikit-learn Pipeline Design",
    "Text Preprocessing (Tokenization, Stopword Removal, Stemming)",
    "Sentiment Analysis (NLTK)",
    "Web Scraping (BeautifulSoup, Requests)",
    "Feature Extraction (Bag-of-Words, TF-IDF)",
    "Readability Scoring (FOG Index)",
    "BI Tools"
  ];

  return (
    <section id="technical-skills" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/damask-pattern.svg')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and analytics
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in-up">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group animate-fade-in-up p-4 bg-card-dark rounded-lg border border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-foreground text-sm leading-relaxed">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
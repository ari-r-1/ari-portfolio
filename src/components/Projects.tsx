import satoriImage from '@/assets/satori-project.jpg';
import neuralQImage from '@/assets/neural-q-project.jpg';
import nexoolImage from '@/assets/nexool-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Satori',
      image: satoriImage,
      description: 'Mobile analytics platform with predictive insights'
    },
    {
      title: 'Neural Q',
      image: neuralQImage,
      description: 'AI-powered neural network visualization tool'
    },
    {
      title: 'Nexool',
      image: nexoolImage,
      description: 'Educational platform with adaptive learning algorithms'
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
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">View Project</span>
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
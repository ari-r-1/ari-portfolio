import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ari-r-1',
      icon: Github,
      hoverColor: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/r-ari/',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:ariranalyst@gmail.com',
      icon: Mail,
      hoverColor: 'hover:text-primary'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-hero-pattern relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/95"></div>
      
      <div className="container-responsive relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <p className="text-muted-foreground uppercase text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-4">
            I WOULD LOVE TO HEAR FROM YOU
          </p>
          <h2 className="text-section-title text-foreground mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about data science!
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Social Icons - Responsive */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`touch-target p-4 sm:p-5 rounded-full bg-purple-900/20 hover:bg-purple-800/30 transition-all duration-300 hover:scale-110 group flex items-center justify-center`}
                  aria-label={social.name}
                >
                  <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-foreground ${social.hoverColor} transition-colors duration-300`} />
                </a>
              );
            })}
          </div>

          {/* Email text */}
          <div className="mt-8 sm:mt-10 text-center">
            <a 
              href="mailto:ariranalyst@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base"
            >
              ariranalyst@gmail.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Ari. Built with passion for data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

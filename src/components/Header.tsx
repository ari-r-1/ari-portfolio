import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#technical-skills' },
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/98 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-background/95 backdrop-blur-sm'
    } border-b border-border safe-area-inset`}>
      <nav className="container-responsive py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <a href="#" className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-base sm:text-lg lg:text-xl font-bold text-foreground">Ari</span>
            <span className="text-muted-foreground hidden sm:inline">|</span>
            <span className="text-primary glow-text text-xs sm:text-sm lg:text-base font-medium hidden sm:inline">Data Scientist</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm xl:text-base text-foreground hover:text-primary transition-colors duration-300 relative group ${
                  activeLink === link.href ? 'text-primary' : ''
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden touch-target flex items-center justify-center text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-1 py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`touch-target flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  activeLink === link.href 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground hover:text-primary hover:bg-muted/50'
                }`}
                onClick={() => {
                  setActiveLink(link.href);
                  setMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

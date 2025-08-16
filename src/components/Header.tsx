import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl font-bold">
          <span className="text-foreground">Arjun</span>
          <span className="text-muted-foreground mx-2">|</span>
          <span className="text-primary glow-text">Data Scientist</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-foreground hover:text-primary transition-colors duration-300 relative group ${
                activeLink === link.href ? 'text-primary' : ''
              }`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground hover:text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
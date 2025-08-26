import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contatos', path: '/contatos' },
  ];

  return (
    <header className="bg-iso-white shadow-card sticky top-0 z-50 border-b border-iso-light-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-iso-red rounded-lg flex items-center justify-center group-hover:bg-iso-red-hover transition-colors duration-200">
              <svg 
                className="w-6 h-6 text-iso-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </div>
            <div>
              <span className="text-xl lg:text-2xl font-bold text-iso-dark">
                ISO
              </span>
              <span className="text-xl lg:text-2xl font-light text-iso-gray">
                -Automação
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-iso-red ${
                  location.pathname === item.path
                    ? 'text-iso-red border-b-2 border-iso-red pb-1'
                    : 'text-iso-gray hover:text-iso-red'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-iso-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-iso-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-iso-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-iso-light-gray">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-iso-red bg-background-secondary'
                    : 'text-iso-gray hover:text-iso-red hover:bg-background-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
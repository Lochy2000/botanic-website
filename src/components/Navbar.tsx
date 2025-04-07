import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const logoPath = import.meta.env.PROD ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}/assets/images/logo/logo.png` : '/assets/images/logo/logo.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={logoPath} 
            alt="Botanic Energy" 
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden md:flex items-center space-x-8",
          !isScrolled && "text-white"
        )}>
          <Link to="/" className={cn("nav-link", isActive('/') && "text-primary after:scale-x-100")}>
            Home
          </Link>
          <Link to="/technology" className={cn("nav-link", isActive('/technology') && "text-primary after:scale-x-100")}>
            Technology
          </Link>
          <Link to="/sectors" className={cn("nav-link", isActive('/sectors') && "text-primary after:scale-x-100")}>
            Sectors
          </Link>
          <Link to="/about" className={cn("nav-link", isActive('/about') && "text-primary after:scale-x-100")}>
            About Us
          </Link>
          <Link to="/news" className={cn("nav-link", isActive('/news') && "text-primary after:scale-x-100")}>
            News & Insights
          </Link>
          <Link to="/contact" className={cn("nav-link", isActive('/contact') && "text-primary after:scale-x-100")}>
            Contact
          </Link>
        </nav>

        <div className={cn(
          "hidden md:flex items-center",
          !isScrolled && "text-white"
        )}>
          <button 
            aria-label="Search"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-full transition-colors",
            isScrolled ? "hover:bg-black/5" : "text-white hover:bg-white/10"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 pb-6 px-6 md:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 mt-8">
          <Link to="/" className="text-xl font-medium">
            Home
          </Link>
          <Link to="/technology" className="text-xl font-medium">
            Technology
          </Link>
          <Link to="/sectors" className="text-xl font-medium">
            Sectors
          </Link>
          <Link to="/about" className="text-xl font-medium">
            About Us
          </Link>
          <Link to="/news" className="text-xl font-medium">
            News & Insights
          </Link>
          <Link to="/contact" className="text-xl font-medium">
            Contact
          </Link>
        </nav>
        
        <div className="mt-auto flex items-center">
          <button className="btn-primary w-full">
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

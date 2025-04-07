import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/technology', name: 'Technology' },
  { path: '/sectors', name: 'Sectors' },
  { path: '/about', name: 'About Us' },
  { path: '/news', name: 'News & Insights' },
  { path: '/contact', name: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      scrolled ? "bg-white shadow-md text-gray-900" : "bg-transparent text-white"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center">
          <img 
            src="/botanic-website/assets/images/logo/logo.png" 
            alt="Botanic Energy Logo"
            // Conditionally change logo filter for visibility on dark/light background if needed
            className={cn(
              "h-10 sm:h-12 md:h-14 w-auto transition-all duration-300",
              // Example: Add filter if logo visibility is poor on transparent bg
              // !scrolled ? "brightness-0 invert" : ""
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => cn(
                "relative font-medium hover:text-botanicRed transition-colors duration-300",
                isActive ? "text-botanicRed" : (scrolled ? "text-gray-700" : "text-white"),
                "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-botanicRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
                isActive && "after:scale-x-100"
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full transition-colors text-inherit hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden",
        scrolled ? "bg-white shadow-md" : "bg-black/80 backdrop-blur-md",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="flex flex-col px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) => cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                isActive 
                  ? (scrolled ? "bg-botanicRed/10 text-botanicRed" : "bg-white/20 text-white")
                  : (scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/80 hover:bg-white/10")
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

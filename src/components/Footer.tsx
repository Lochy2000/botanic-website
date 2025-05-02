import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-botanicDark text-white/90 pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-3 xs:px-4 md:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xs:gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12">
          <div className="xs:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4 sm:mb-6">
              <img 
                src={getImagePath('assets/images/logo/logo.png')}
                alt="Botanic Energy Logo"
                className="h-16 sm:h-18 md:h-20 w-auto drop-shadow-sm brightness-110 logo-enhance"
              />
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Revolutionizing heating, cooling, and environmental control through cutting-edge thermoelectric systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-botanicBlue transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white/80 hover:text-botanicBlue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/80 hover:text-botanicBlue transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-white/70 hover:text-white transition-colors">
                  Our Technology
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="text-white/70 hover:text-white transition-colors">
                  Sectors We Impact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/70 hover:text-white transition-colors">
                  News & Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-botanicBlue shrink-0 mt-0.5" />
                <span className="text-white/70">123 Innovation Way, Sustainable City, UK</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-botanicBlue shrink-0" />
                <span className="text-white/70">+44 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-botanicBlue shrink-0" />
                <span className="text-white/70">info@botanicenergy.com</span>
              </li>
            </ul>
          </div>
          
          <div className="xs:col-span-2 md:col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Subscribe</h3>
            <p className="text-white/70 mb-3 sm:mb-4 text-sm sm:text-base">Stay updated with our latest news and insights.</p>
            <form className="flex flex-col space-y-2 sm:space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-botanicBlue"
              />
              <button 
                type="submit" 
                className="bg-botanicBlue hover:bg-botanicBlue/90 text-white font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © {currentYear} Botanic Energy. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-0 sm:space-x-6">
            <Link to="/privacy" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-botanicDark text-white/90 pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-3 xs:px-4 md:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12">
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
                <span className="text-white/70">United Kingdom</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-botanicBlue shrink-0" />
                <span className="text-white/70">info@botanicenergy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © {currentYear} Botanic Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import SectionContainer from './SectionContainer';
import { getImagePath } from '@/lib/utils';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'light' | 'dark';
}

const CTA = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  variant = 'light'
}: CTAProps) => {
  if (variant === 'dark') {
    return (
      <SectionContainer className="bg-botanicDark text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={getImagePath('assets/images/logo/logo.png')}
            alt="Botanic Energy Logo"
            className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 h-10 sm:h-14 md:h-16 w-auto opacity-15 drop-shadow-md"
          />
          <img 
            src={getImagePath('assets/images/logo/logo.png')}
            alt="Botanic Energy Logo"
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 h-12 sm:h-16 md:h-20 w-auto opacity-10 rotate-12 drop-shadow-md"
          />
          <h2 className="section-title mb-3 sm:mb-4 md:mb-6 animate-fade-in">{title}</h2>
          <p className="text-base xs:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 animate-fade-in max-w-2xl mx-auto">
            {subtitle}
          </p>
          <a 
            href={buttonLink} 
            className="inline-block bg-white text-botanicDark font-medium px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] animate-fade-in"
          >
            {buttonText}
          </a>
        </div>
      </SectionContainer>
    );
  }
  
  return (
    <SectionContainer className="bg-botanicLight py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src={getImagePath('assets/images/logo/logo.png')}
          alt="Botanic Energy Logo"
          className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 h-10 sm:h-14 md:h-16 w-auto opacity-15 drop-shadow-md"
        />
        <img 
          src={getImagePath('assets/images/logo/logo.png')}
          alt="Botanic Energy Logo"
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 h-12 sm:h-16 md:h-20 w-auto opacity-10 rotate-12 drop-shadow-md"
        />
        <h2 className="section-title mb-3 sm:mb-4 md:mb-6 animate-fade-in">{title}</h2>
        <p className="text-base xs:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 md:mb-10 animate-fade-in max-w-2xl mx-auto">
          {subtitle}
        </p>
        <a 
          href={buttonLink} 
          className="btn-primary inline-block animate-fade-in"
        >
          {buttonText}
        </a>
      </div>
    </SectionContainer>
  );
};

export default CTA;

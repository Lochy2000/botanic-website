
import SectionContainer from './SectionContainer';

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
      <SectionContainer className="bg-botanicDark text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-6 animate-fade-in">{title}</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 animate-fade-in">
            {subtitle}
          </p>
          <a 
            href={buttonLink} 
            className="inline-block bg-white text-botanicDark font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] animate-fade-in"
          >
            {buttonText}
          </a>
        </div>
      </SectionContainer>
    );
  }
  
  return (
    <SectionContainer className="bg-botanicLight py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-6 animate-fade-in">{title}</h2>
        <p className="text-lg md:text-xl text-foreground/70 mb-10 animate-fade-in">
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

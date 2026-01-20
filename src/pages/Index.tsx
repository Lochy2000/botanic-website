import { ArrowRight, Zap, Leaf, Thermometer, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import TechnologyCard from '@/components/TechnologyCard';
import CTA from '@/components/CTA';
import ImageSection from '@/components/ImageSection';
import { cn, getImagePath } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ReadMoreInline } from '@/components/ReadMoreContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Index = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const features = [
    {
      title: "High Efficiency",
      description: "Our systems drastically reduce energy consumption compared to traditional methods.",
      icon: <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-botanicRed/15 p-3 feature-icon-container">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-botanicRed" />
            </div>
    },
    {
      title: "Cost Savings",
      description: "Lower energy bills and reduced maintenance lead to significant operational savings.",
      icon: <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-botanicPurple/15 p-3 feature-icon-container">
              <svg className="h-6 w-6 sm:h-8 sm:w-8 text-botanicPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
    },
    {
      title: "Intelligent Control",
      description: "Smart systems optimize performance and provide valuable operational data.",
      icon: <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-botanicBlue/15 p-3 feature-icon-container">
              <svg className="h-6 w-6 sm:h-8 sm:w-8 text-botanicBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
    },
    {
      title: "Sustainable Solution",
      description: "Zero-carbon technology contributing to a greener future.",
      icon: <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-green-50 p-3 feature-icon-container">
              <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-botanicRed/80" />
            </div>
    },
  ];

  const technologyCards = [
    {
      title: "Built Environment",
      description: "Revolutionizing HVAC in commercial and residential buildings.",
      image: getImagePath('assets/images/index/thermal.jpg'),
      link: "/technologies/built-environment"
    },
    {
      title: "Cold Chain Logistics",
      description: "Sustainable, diesel-free refrigeration for transport.",
      image: getImagePath('assets/images/index/coldchain.jpg'),
      link: "/technologies/cold-chain"
    },
    {
      title: "Agri-Tech",
      description: "Precision climate control for modern farming.",
      image: getImagePath('assets/images/index/agri.png'),
      link: "/technologies/agri-tech"
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section - Full height with overlay content */}
        <section className="relative h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden">
          {/* Video Background - Fills entire viewport */}
          <div className="absolute top-0 left-0 w-full h-full">
            <video 
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={getImagePath('assets/images/index/thermaltap.jpg')}
            >
              <source src="https://res.cloudinary.com/dpw2txejq/video/upload/v1746191346/botanic-mainhero_xggwrs.mp4" type="video/mp4" />
            </video>
            {/* Dark gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-black/40" />
          </div>

          {/* Hero Content - Centered in viewport */}
          <div className="relative h-full flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 text-center text-white max-w-7xl">
              <div className="mb-6 sm:mb-8 flex justify-center animate-fade-in-up">
                <img 
                  src={getImagePath('assets/images/logo/logo.png')} 
                  alt="Botanic Energy Logo"
                  className="h-20 xs:h-24 sm:h-28 md:h-32 w-auto drop-shadow-lg brightness-110 logo-enhance"
                />
              </div>
              <Badge className="mb-2 sm:mb-4 bg-botanicRed/80 text-white px-2 xs:px-3 sm:px-4 py-0.5 sm:py-1 text-xs animate-fade-in-up">
                Redefining Energy Efficiency
              </Badge>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                The Future of <br />
                Heating and Cooling
              </h1>
              <p className="text-base xs:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-gray-200 animate-fade-in-up px-2 xs:px-0" style={{ animationDelay: '400ms' }}>
                Revolutionary thermoelectric systems for a zero-carbon future,
                replacing diesel-powered refrigeration and creating sustainable
                cold chains worldwide.
              </p>
              <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 animate-fade-in-up px-4 xs:px-0" style={{ animationDelay: '600ms' }}>
                <Link to="/technology">
                  <Button size="lg" className="btn-primary w-full sm:w-auto">
                    Explore Our Technology
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white w-full sm:w-auto">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <SectionContainer id="about">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <SectionTitle 
                chip="About Us"
                title="Revolutionizing Environmental Control Through Innovation"
                subtitle="Botanic Energy is a fast-growing clean-tech company designing cutting-edge thermoelectric systems that redefine how we approach heating, cooling, and environmental control."
                alignment="left"
              />
              
              {isMobile ? (
                <ReadMoreInline 
                  text="Our goal is environmental control of internal spaces through heat transfer, rather than the burning of fossil fuels, achieved through thermodynamics to decarbonize buildings, transport and refrigeration towards a zero carbon future. We develop innovative solutions that significantly reduce energy consumption while providing more efficient and environmentally friendly heating and cooling solutions."
                  maxLength={120}
                  className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in"
                />
              ) : (
                <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
                  Our goal is environmental control of internal spaces through heat transfer, rather than the burning of fossil fuels, achieved through thermodynamics to decarbonize buildings, transport and refrigeration towards a zero carbon future.
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Link 
                  to="/about" 
                  className="btn-primary"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 sm:p-6 md:p-7 animate-fade-in hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/95"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-4 sm:mb-5 flex justify-center sm:justify-start">
                      {feature.icon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-center sm:text-left">{feature.title}</h3>
                    <p className="text-foreground/70 text-xs sm:text-sm md:text-base text-center sm:text-left">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
        
        {/* Technology Overview */}
        <SectionContainer className="bg-botanicLight">
          <SectionTitle 
            chip="Our Technology"
            title="Disruptive Solid State Technology"
            subtitle="Our innovative thermoelectric systems revolutionize thermal control for various applications, reducing emissions and increasing efficiency."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {technologyCards.map((card, index) => (
              <TechnologyCard 
                key={index}
                {...card}
                className="animate-fade-in"
              />
            ))}
          </div>
        </SectionContainer>
        
        {/* Image Section */}
        <SectionContainer>
          <ImageSection 
            image={getImagePath('assets/images/index/thermaltap.jpg')}
            alt="Thermal Taps and Valves"
          >
            <div className="title-chip animate-fade-in-right">Featured Technology</div>
            <h2 className="section-title mb-6 animate-fade-in-right">Thermodynamic Taps and Valves</h2>
            
            {isMobile ? (
              <ReadMoreInline 
                text="Botanic Energy's thermal taps heat and cool water at source on demand through the innovative use of thermodynamic systems. In combination with our Thermal Cladding, a household or building's boiler becomes unnecessary. This technology significantly reduces energy consumption while providing more efficient and environmentally friendly water heating and cooling solutions."
                maxLength={120}
                className="text-base sm:text-lg text-foreground/70 mb-6 animate-fade-in-right"
              />
            ) : (
              <>
                <p className="text-base sm:text-lg text-foreground/70 mb-6 animate-fade-in-right">
                  Botanic Energy's thermal taps heat and cool water at source on demand through the innovative use of thermodynamic systems. In combination with our Thermal Cladding, a household or building's boiler becomes unnecessary.
                </p>
                <p className="text-base sm:text-lg text-foreground/70 mb-8 animate-fade-in-right">
                  This technology significantly reduces energy consumption while providing more efficient and environmentally friendly water heating and cooling solutions.
                </p>
              </>
            )}
            
            <Link 
              to="/technology#thermal-taps" 
              className="btn-primary inline-block animate-fade-in-right"
            >
              Learn More
            </Link>
          </ImageSection>
        </SectionContainer>
        
        {/* Vision Section */}
        <SectionContainer className="bg-botanicDark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={getImagePath('assets/images/index/call-to-action.jpg')} 
              alt="Nature background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 animate-fade-in">
              Our Vision
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8 animate-fade-in">
              Using Energy to Build <br className="hidden sm:block" /> Not Destroy
            </h2>
            
            {isMobile ? (
              <ReadMoreInline 
                text="We're creating a future where energy consumption contributes to sustainable development rather than environmental degradation. Our innovative technologies harness the power of thermodynamics to build a cleaner, more efficient world. Through our breakthrough solutions, we're working to transform how heating and cooling systems operate across various sectors, providing pathways to a carbon-neutral future."
                maxLength={120}
                className="text-base xs:text-lg text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto animate-fade-in px-2 xs:px-0"
              />
            ) : (
              <p className="text-base xs:text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto animate-fade-in px-2 xs:px-0">
                We're creating a future where energy consumption contributes to sustainable development rather than environmental degradation. Our innovative technologies harness the power of thermodynamics to build a cleaner, more efficient world.
              </p>
            )}
            
            <Link 
              to="/about#vision" 
              className="inline-block bg-white text-botanicDark font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] animate-fade-in"
            >
              Discover Our Mission
            </Link>
          </div>
        </SectionContainer>
        
        {/* Partners Section */}
        <SectionContainer>
          <SectionTitle 
            chip="Our Partners"
            title="Collaborating With Leading Institutions"
            subtitle="We work with forward-thinking organizations to accelerate the development and adoption of our sustainable technologies."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 items-center justify-items-center">
            <img 
              src={getImagePath('assets/images/general/collaborator-1.png')}
              alt="Oxford University Innovation"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:opacity-90 transition-opacity drop-shadow-md logo-enhance"
              loading="lazy"
              decoding="async"
            />
            <img 
              src={getImagePath('assets/images/general/collaborator-2.png')}
              alt="Innovate UK"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:opacity-90 transition-opacity drop-shadow-md logo-enhance"
              loading="lazy"
              decoding="async"
            />
            <img 
              src={getImagePath('assets/images/general/collaborator-3.png')}
              alt="Department for Transport"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:opacity-90 transition-opacity drop-shadow-md logo-enhance"
              loading="lazy"
              decoding="async"
            />
            <img 
              src={getImagePath('assets/images/general/collaborator-4.png')}
              alt="Advanced Propulsion Centre UK"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:opacity-90 transition-opacity drop-shadow-md logo-enhance"
              loading="lazy"
              decoding="async"
            />
          </div>
        </SectionContainer>
        
        {/* CTA Section */}
        <CTA 
          title="Ready to Transform Thermal Control?"
          subtitle="Connect with our team to explore how Botanic Energy's innovative solutions can revolutionize your heating and cooling needs."
          buttonText="Contact Us Today"
          buttonLink="/contact"
          variant="dark"
        />
      </div>
    </Layout>
  );
};

export default Index;
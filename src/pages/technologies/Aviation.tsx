import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import ImageSection from '@/components/ImageSection';
import CTA from '@/components/CTA';
import { getImagePath } from '@/lib/utils';
import { Plane, Zap, Gauge, Weight, BarChart4 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Aviation = () => {
  const keyFeatures = [
    {
      icon: <Gauge className="h-6 w-6 text-botanicRed" />,
      title: "Enhanced Reliability",
      description: "Efficiently manages thermal conditions of ancillary equipment in aircraft engines, improving reliability and lifetime."
    },
    {
      icon: <Zap className="h-6 w-6 text-botanicBlue" />,
      title: "Fuel Efficiency",
      description: "Improves thrust specific fuel consumption through optimized thermal management."
    },
    {
      icon: <Weight className="h-6 w-6 text-botanicPurple" />,
      title: "Weight Reduction",
      description: "Lightweight solid-state systems reduce overall aircraft weight compared to conventional systems."
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-green-600" />,
      title: "Precise Control",
      description: "Provides stable and precise temperature regulation for critical aircraft components."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden">
        {/* Image Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191386/aviation_mp1r98.png"
            alt="Aviation Technology"
          />
          {/* Dark gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        {/* Hero Content - Centered in viewport */}
        <div className="relative h-full flex flex-col justify-center items-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Link to="/technology" className="inline-flex items-center text-sm text-white hover:text-white/80 transition-colors mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Technologies
            </Link>
            <div className="title-chip animate-fade-in text-white bg-white/20">Technology</div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight animate-fade-in">
              Aviation Applications
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-gray-200 animate-fade-in px-2 xs:px-0">
              Enhancing aircraft performance and efficiency through advanced thermal management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <SectionContainer>
        <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in mb-10 sm:mb-16">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191386/aviation_mp1r98.png" 
            alt="Aviation thermal management systems"
            className="w-full h-auto object-cover"
          />
        </div>
      </SectionContainer>
      
      {/* Overview Section */}
      <SectionContainer className="bg-botanicLight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          <div>
            <SectionTitle 
              chip="Overview"
              title="Advanced Thermal Management for Aerospace"
              subtitle="Our innovative thermal matrix technology enhances aircraft engine performance and reliability."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              The aerospace industry faces significant challenges in managing heat in modern aircraft engines and systems. As engines become more powerful and efficient, the thermal loads on components increase substantially. Botanic Energy's novel thermal matrix technology is specifically designed to address these challenges in the aerospace sector.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Our system offers efficient thermal management of ancillary equipment in turbofan aircraft engines. By maintaining optimal operating temperatures for critical components, we enhance equipment reliability and lifetime while simultaneously improving thrust specific fuel consumption—a key metric for aircraft efficiency.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191386/aviation_mp1r98.png" 
            alt="Aircraft engine thermal management"
            className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </SectionContainer>
      
      {/* Key Features Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Features"
          title="Key Advantages for Aviation"
          subtitle="Our aviation thermal management technology offers several significant benefits for aircraft performance."
        />
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {keyFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-4 xs:p-6 md:p-8 animate-fade-in"
            >
              <div className="mb-4 p-3 inline-flex items-center justify-center rounded-lg bg-foreground/5">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm xs:text-base text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Technical Details Section */}
      <SectionContainer className="bg-botanicLight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={getImagePath('assets/images/technology/aviation.jpg')} 
              alt="Technical illustration of aviation thermal management"
              className="rounded-2xl shadow-xl animate-fade-in w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle 
              chip="Technical Details"
              title="How Our Aviation Technology Works"
              subtitle="Understanding the science behind our innovative approach to aircraft thermal management."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Our aviation thermal management system utilizes a proprietary thermal matrix technology that efficiently transfers heat away from critical engine components. Unlike conventional systems that rely on heavy liquid cooling or complex heat exchangers, our solid-state approach offers significant weight savings while providing more precise temperature control.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              The system incorporates advanced materials with exceptional thermal conductivity properties, arranged in a matrix configuration that maximizes surface area for heat transfer. Integrated sensors continuously monitor component temperatures and adjust thermal flow accordingly, ensuring optimal operating conditions under varying flight parameters.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 animate-fade-in">
              This approach not only improves the reliability and longevity of engine components but also contributes to better overall engine efficiency. By maintaining optimal operating temperatures, combustion efficiency improves, resulting in lower fuel consumption and reduced emissions.
            </p>
          </div>
        </div>
      </SectionContainer>
      
      {/* Applications Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Applications"
          title="Where Our Aviation Technology Makes a Difference"
          subtitle="Our systems can be applied to various aircraft components and systems."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Turbofan Engines</h3>
            <p className="text-foreground/70 mb-4">
              Our thermal management system enhances the performance and reliability of critical components in modern high-bypass turbofan engines used in commercial aircraft.
            </p>
            <img 
              src={getImagePath('assets/images/technology/aviation.jpg')} 
              alt="Turbofan engine application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Avionics Cooling</h3>
            <p className="text-foreground/70 mb-4">
              Sensitive electronic systems benefit from precise temperature control that ensures reliable operation across extreme temperature variations experienced during flight.
            </p>
            <img 
              src={getImagePath('assets/images/technology/aviation.jpg')} 
              alt="Avionics cooling application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Electric Aircraft</h3>
            <p className="text-foreground/70 mb-4">
              Our technology is particularly valuable for the emerging electric aircraft sector, where battery thermal management is critical for safety, performance, and range.
            </p>
            <img 
              src={getImagePath('assets/images/technology/aviation.jpg')} 
              alt="Electric aircraft application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </SectionContainer>
      
      {/* Case Study Section */}
      <SectionContainer className="bg-botanicLight">
        <SectionTitle 
          chip="Case Study"
          title="Real-World Performance"
          subtitle="See how our technology performs in aviation applications."
        />
        
        <div className="glass-card p-6 sm:p-8 md:p-10 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Engine Component Testing</h3>
              <p className="text-foreground/70 mb-4">
                Botanic Energy's thermal management system was tested on ancillary components in a test-bed turbofan engine environment. The results were measured across various simulated flight conditions to assess performance improvements.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Component operating temperature variation reduced by 82%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Thrust specific fuel consumption improved by 1.8%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Weight reduction of 12% compared to conventional systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Mean time between failures projected to increase by 35%</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src={getImagePath('assets/images/technology/aviation.jpg')} 
                alt="Engine component testing"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Enhance Aircraft Performance?"
        subtitle="Contact our aerospace experts to discuss how our innovative thermal management technology can improve efficiency and reliability in your aviation applications."
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="dark"
      />
    </Layout>
  );
};

export default Aviation;
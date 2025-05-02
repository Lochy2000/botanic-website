import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import ImageSection from '@/components/ImageSection';
import CTA from '@/components/CTA';
import { getImagePath } from '@/lib/utils';
import { Droplets, Flame, Zap, Home, BarChart4 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThermalTaps = () => {
  const keyFeatures = [
    {
      icon: <Droplets className="h-6 w-6 text-botanicRed" />,
      title: "On-Demand Heating",
      description: "Produces hot and cold water at destination rather than supply, eliminating the need for hot water cylinders."
    },
    {
      icon: <Zap className="h-6 w-6 text-botanicBlue" />,
      title: "Energy Efficiency",
      description: "Significantly reduces energy waste by heating water only when and where it's needed."
    },
    {
      icon: <Flame className="h-6 w-6 text-botanicPurple" />,
      title: "Boiler Elimination",
      description: "When combined with Thermal Cladding, eliminates the need for traditional boilers entirely."
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-green-600" />,
      title: "Cost Savings",
      description: "Reduces utility bills and maintenance costs associated with conventional water heating systems."
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
            src={getImagePath('assets/images/technology/thermaltap.jpg')}
            alt="Thermal Taps Technology"
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
              Thermal Taps and Valves
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-gray-200 animate-fade-in px-2 xs:px-0">
              Revolutionizing water heating with on-demand, energy-efficient technology at the point of use.
            </p>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <SectionContainer>
        <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in mb-10 sm:mb-16">
          <img 
            src={getImagePath('assets/images/technology/thermaltap.jpg')} 
            alt="Thermal Taps Technology"
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
              title="Water Heating Reimagined"
              subtitle="Our innovative thermal taps and valves produce hot and cold water exactly where and when you need it."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Traditional water heating systems waste significant energy by heating large volumes of water that may not be used, and then maintaining that temperature through insulated tanks and pipes. Botanic Energy's Thermal Taps and Valves represent a fundamental shift in how we approach water heating in buildings.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Our technology produces hot and cold water at the destination rather than the supply point, eliminating the need for hot water cylinders and dual hot and cold water distribution systems. By providing hot water directly at taps and showers, you only produce the exact amount of heated water you need, precisely when you need it.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src={getImagePath('assets/images/technology/thermaltap.jpg')} 
              alt="Thermal tap technology demonstration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </SectionContainer>
      
      {/* Key Features Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Features"
          title="Key Advantages of Thermal Taps"
          subtitle="Our thermal tap technology offers several significant benefits over conventional water heating."
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
              src={getImagePath('assets/images/technology/thermaltap.jpg')} 
              alt="Cross-section of thermal tap technology"
              className="rounded-2xl shadow-xl animate-fade-in w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle 
              chip="Technical Details"
              title="How Thermal Taps Work"
              subtitle="Understanding the science behind our innovative approach to water heating."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Our Thermal Tap technology uses advanced solid-state thermodynamic principles to heat or cool water instantly as it flows through the tap. Unlike traditional electric instant water heaters that use resistance heating, our system uses highly efficient heat transfer technology.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              The system detects water flow and temperature requirements, then activates the appropriate heating or cooling elements to achieve the desired temperature. The advanced sensors and controls ensure consistent water temperature regardless of input water temperature or flow rate variations.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 animate-fade-in">
              When integrated with our whole-building Thermal Cladding system, the taps can draw power from the same thermal energy source, creating a comprehensive building thermal management solution that eliminates the need for traditional boilers or water heaters entirely.
            </p>
          </div>
        </div>
      </SectionContainer>
      
      {/* Applications Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Applications"
          title="Where Thermal Taps Make a Difference"
          subtitle="Our technology can be applied in various settings to improve efficiency and comfort."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Residential Homes</h3>
            <p className="text-foreground/70 mb-4">
              Replace inefficient water heating systems in existing homes or implement as part of new construction for significant energy savings and improved convenience.
            </p>
            <img 
              src={getImagePath('assets/images/technology/thermaltap.jpg')} 
              alt="Residential application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Commercial Buildings</h3>
            <p className="text-foreground/70 mb-4">
              Office buildings, hotels, and other commercial properties can benefit from reduced energy costs and simplified plumbing systems while ensuring consistent hot water availability.
            </p>
            <img 
              src={getImagePath('assets/images/technology/thermaltap.jpg')} 
              alt="Commercial building application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Off-Grid Applications</h3>
            <p className="text-foreground/70 mb-4">
              When coupled with renewable energy sources, our thermal taps provide efficient hot water in remote or off-grid locations without requiring large energy storage systems.
            </p>
            <img 
              src={getImagePath('assets/images/technology/thermaltap.jpg')} 
              alt="Off-grid application"
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
          subtitle="See how our thermal tap technology performs in actual installations."
        />
        
        <div className="glass-card p-6 sm:p-8 md:p-10 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Residential Retrofit Project</h3>
              <p className="text-foreground/70 mb-4">
                A multi-unit residential building in the UK replaced its centralized boiler system with Botanic Energy's Thermal Taps in each unit. The results were monitored over a six-month period to capture performance data.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Energy consumption for water heating reduced by 72%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Elimination of hot water outages during peak usage times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Water usage decreased by 18% due to reduced waiting for hot water</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Resident satisfaction increased by 94% compared to previous system</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src={getImagePath('assets/images/technology/thermaltap.jpg')} 
                alt="Residential retrofit case study"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Transform Your Water Heating?"
        subtitle="Contact our experts to discuss how our innovative thermal tap technology can improve efficiency and comfort in your property."
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="dark"
      />
    </Layout>
  );
};

export default ThermalTaps;
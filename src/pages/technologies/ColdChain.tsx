import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import ImageSection from '@/components/ImageSection';
import CTA from '@/components/CTA';
import { getImagePath } from '@/lib/utils';
import { Truck, PackageCheck, Weight, Globe, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

const ColdChain = () => {
  const keyFeatures = [
    {
      icon: <Thermometer className="h-6 w-6 text-botanicRed" />,
      title: "Solid State Cooling",
      description: "Replaces traditional refrigeration units with lighter, more efficient solid state thermodynamic devices."
    },
    {
      icon: <Weight className="h-6 w-6 text-botanicBlue" />,
      title: "Weight Reduction",
      description: "Lighter components and reduced insulation needs lead to significant weight savings in transport applications."
    },
    {
      icon: <PackageCheck className="h-6 w-6 text-botanicPurple" />,
      title: "Product Preservation",
      description: "Maintains precise temperature control for sensitive goods like food and pharmaceuticals."
    },
    {
      icon: <Globe className="h-6 w-6 text-botanicBlue" />,
      title: "Global Applicability",
      description: "Especially valuable in challenging regions like Sub-Saharan Africa for preserving perishable goods."
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
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191385/impactsectors_e23k3w.png"
            alt="Cold Chain Distribution Technology"
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
              Cold Chain Distribution
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-gray-200 animate-fade-in px-2 xs:px-0">
              Revolutionizing refrigerated transport with sustainable, energy-efficient solid state technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <SectionContainer>
        <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in mb-10 sm:mb-16">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191385/impactsectors_e23k3w.png" 
            alt="Cold Chain Distribution Technology"
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
              title="Sustainable Refrigerated Transport"
              subtitle="Our innovative cold chain technology replaces traditional diesel-powered refrigeration with efficient solid state systems."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Traditional refrigerated transport relies heavily on diesel-powered compressors, which are energy-intensive, environmentally harmful, and require significant maintenance. Botanic Energy's cold chain technology represents a paradigm shift in how temperature-controlled transportation is approached.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Our systems replace heavy refrigeration units, pumps, and compressors with lighter solid state thermodynamic devices. This innovative approach not only reduces weight—leading to fuel savings—but also provides more consistent temperature control while eliminating harmful emissions.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src='https://res.cloudinary.com/dpw2txejq/image/upload/v1746197737/sustainablerefrigeration_xljuz8.png'
              alt="Cold chain technology illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </SectionContainer>
      
      {/* Key Features Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Features"
          title="Key Advantages for Cold Chain"
          subtitle="Our cold chain technology offers several significant benefits over conventional refrigeration systems."
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
              src={getImagePath('assets/images/technology/coldchain.jpg')} 
              alt="Technical diagram of cold chain technology"
              className="rounded-2xl shadow-xl animate-fade-in w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle 
              chip="Technical Details"
              title="How Our Cold Chain Technology Works"
              subtitle="Understanding the science behind our innovative approach to refrigerated transport."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Our cold chain technology is based on advanced thermodynamics principles. Rather than generating cold through compression and expansion cycles using refrigerants, we use solid state thermal management systems that take advantage of temperature differences between environments.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              The system actively transfers heat out of the refrigerated compartment, maintaining precise temperature control without the need for heavy compressors or environmentally harmful refrigerants. This approach is not only more energy-efficient but also more reliable due to fewer moving parts.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 animate-fade-in">
              Our innovative design also reduces the need for thick insulation, as the active thermal management compensates for heat infiltration more effectively. This weight reduction further contributes to energy savings in transport applications.
            </p>
          </div>
        </div>
      </SectionContainer>
      
      {/* Applications Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Applications"
          title="Where Our Cold Chain Technology Makes a Difference"
          subtitle="Our systems can be applied to various transport methods and scenarios."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Road Transport</h3>
            <p className="text-foreground/70 mb-4">
              Refrigerated trucks and vans can significantly reduce their carbon footprint and operational costs while extending their range through weight reduction and improved energy efficiency.
            </p>
            <img 
              src='https://res.cloudinary.com/dpw2txejq/image/upload/v1746197715/roadtransport_gxznzl.png' 
              alt="Road transport application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Shipping Containers</h3>
            <p className="text-foreground/70 mb-4">
              Maritime transport of perishable goods benefits from our reliable, low-maintenance systems that can maintain consistent temperatures for extended periods with minimal energy input.
            </p>
            <img 
              src='https://res.cloudinary.com/dpw2txejq/image/upload/v1746197720/shipping_aejvm4.png'
              alt="Shipping container application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Last-Mile Delivery</h3>
            <p className="text-foreground/70 mb-4">
              Smaller delivery vehicles and even portable coolers can incorporate our technology to ensure temperature integrity from warehouse to consumer doorstep.
            </p>
            <img 
              src='https://res.cloudinary.com/dpw2txejq/image/upload/v1746197712/coldchaindistribution_iawybq.png' 
              alt="Last-mile delivery application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </SectionContainer>
      
      {/* Regional Impact Section */}
      <SectionContainer className="bg-botanicLight">
        <SectionTitle 
          chip="Global Impact"
          title="Transforming Cold Chains Worldwide"
          subtitle="Our technology is particularly valuable in challenging regions with limited infrastructure."
        />
        
        <div className="glass-card p-6 sm:p-8 md:p-10 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sub-Saharan Africa Case Study</h3>
              <p className="text-foreground/70 mb-4">
                In many parts of Sub-Saharan Africa, reliable electricity for refrigeration is scarce, and diesel fuel for traditional refrigerated transport is expensive and environmentally damaging. Our technology addresses these challenges directly.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Reduced reliance on diesel fuel by up to 85%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Extended shelf life of perishable foods by 3-5 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Maintained vaccine efficacy in challenging climates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Decreased post-harvest losses by over 40%</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src='https://res.cloudinary.com/dpw2txejq/image/upload/v1746197712/coldchaindistribution_iawybq.png' 
                alt="Sub-Saharan Africa cold chain application"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Revolutionize Your Cold Chain?"
        subtitle="Contact our experts to discuss how our innovative technology can transform your refrigerated transport operations."
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="dark"
      />
    </Layout>
  );
};

export default ColdChain;
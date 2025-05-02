import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import ImageSection from '@/components/ImageSection';
import CTA from '@/components/CTA';
import { getImagePath } from '@/lib/utils';
import { Leaf, Sun, Cpu, Droplets, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgriTech = () => {
  const keyFeatures = [
    {
      icon: <Sun className="h-6 w-6 text-botanicRed" />,
      title: "Solar Integration",
      description: "Sustainable solar heat transfer system combined with thermal storage for 24/7 energy-efficient operation."
    },
    {
      icon: <Thermometer className="h-6 w-6 text-botanicBlue" />,
      title: "Precise Climate Control",
      description: "Maintains exact temperature and humidity levels for optimal growing conditions year-round."
    },
    {
      icon: <Cpu className="h-6 w-6 text-botanicPurple" />,
      title: "Smart Monitoring",
      description: "Intelligent systems continuously optimize growing conditions based on crop needs and external conditions."
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Resource Efficiency",
      description: "Minimizes energy and water usage while maximizing crop yields and quality."
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
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191386/plant_cvitsj.png"
            alt="Agri-Tech Solutions Technology"
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
              Agri-Tech Solutions
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-gray-200 animate-fade-in px-2 xs:px-0">
              Revolutionizing controlled environment agriculture with sustainable thermal management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <SectionContainer>
        <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in mb-10 sm:mb-16">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191386/plant_cvitsj.png" 
            alt="Advanced agricultural technology"
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
              title="Total Controlled Environment Agriculture"
              subtitle="Our thermal management systems provide 24/7 climate control for maximum crop production with minimal energy use."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Traditional greenhouse and indoor farming operations face significant challenges in maintaining optimal growing conditions while managing energy costs. Botanic Energy's Agri-Tech solutions address these challenges through innovative thermal management technology that revolutionizes controlled environment agriculture.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Our sustainable solar heat transfer system, combined with thermal storage capabilities, enables 24/7 energy-efficient thermal management to maximize crop production at low cost. By precisely controlling temperature, humidity, and other environmental factors, we create ideal growing conditions regardless of external weather or climate.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
          <video 
              className="w-full h-auto"
              muted
              loop
              playsInline
              poster="https://res.cloudinary.com/dpw2txejq/video/upload/v1746191286/globalimpact_uvomwv.mp4"
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
              onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()}
            >
              <source src="https://res.cloudinary.com/dpw2txejq/video/upload/v1746191286/globalimpact_uvomwv.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </SectionContainer>
      
      {/* Key Features Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Features"
          title="Key Advantages for Agriculture"
          subtitle="Our agri-tech solutions offer several significant benefits over conventional greenhouse systems."
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
              src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191391/goingreen_qk65tr.png" 
              alt="Technical illustration of agri-tech system"
              className="rounded-2xl shadow-xl animate-fade-in w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle 
              chip="Technical Details"
              title="How Our Agri-Tech System Works"
              subtitle="Understanding the science behind our innovative approach to controlled environment agriculture."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Our Agri-Tech system utilizes advanced solid-state thermodynamic principles to create a complete environmental control solution. Solar energy is captured and stored using our proprietary thermal storage technology, ensuring continuous operation even during nighttime or cloudy conditions.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              The core of the system consists of intelligent thermal management modules that can both heat and cool as needed. These modules actively regulate temperature throughout the growing environment, maintaining optimal conditions regardless of external weather variations.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 animate-fade-in">
              Integrated sensors continuously monitor environmental conditions and plant responses, providing data to our smart control system. This allows for real-time adjustments to maintain ideal growing parameters while optimizing energy usage based on crop needs at different growth stages.
            </p>
          </div>
        </div>
      </SectionContainer>
      
      {/* Applications Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Applications"
          title="Where Our Agri-Tech Solutions Make a Difference"
          subtitle="Our systems can be applied to various agricultural environments and methods."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Greenhouses</h3>
            <p className="text-foreground/70 mb-4">
              Traditional and high-tech greenhouses benefit from our precise climate control systems, extending growing seasons and enabling year-round production with minimal energy costs.
            </p>
            <img 
              src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746197733/greenhouse_stopxw.png" 
              alt="Greenhouse application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Vertical Farms</h3>
            <p className="text-foreground/70 mb-4">
              Our technology enables efficient temperature management in multi-level indoor farming systems, maximizing space utilization while maintaining perfect growing conditions on each level.
            </p>
            <img 
              src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746197739/verticalfarms_g3p5mu.png" 
              alt="Vertical farm application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Arid Region Agriculture</h3>
            <p className="text-foreground/70 mb-4">
              Our systems enable productive agriculture in challenging climates by combining efficient cooling with water conservation techniques, opening new possibilities for food production in arid regions.
            </p>
            <img 
              src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191386/plant_cvitsj.png" 
              alt="Arid region agriculture application"
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
          subtitle="See how our technology performs in actual agricultural applications."
        />
        
        <div className="glass-card p-6 sm:p-8 md:p-10 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Commercial Greenhouse Project</h3>
              <p className="text-foreground/70 mb-4">
                A 2-hectare commercial greenhouse operation in Northern Europe implemented Botanic Energy's thermal management system. The results were monitored over a complete growing cycle to assess performance improvements.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Energy consumption for climate control reduced by 68% compared to conventional systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Growing season extended by 8 weeks annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Crop yield increased by 22% due to more consistent growing conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Return on investment achieved in under 2.5 years</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746197729/agricasestudy_vbc7xu.png" 
                alt="Commercial greenhouse case study"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Revolutionize Your Agricultural Operations?"
        subtitle="Contact our experts to discuss how our innovative thermal management technology can transform your growing environment."
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="dark"
      />
    </Layout>
  );
};

export default AgriTech;
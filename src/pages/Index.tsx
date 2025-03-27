import { ArrowRight, Zap, Leaf, Thermometer, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import TechnologyCard from '@/components/TechnologyCard';
import CTA from '@/components/CTA';
import ImageSection from '@/components/ImageSection';
import { cn } from '@/lib/utils';

const Index = () => {
  const features = [
    {
      icon: <div className="w-12 h-12 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/assets/images/index/speedometer.svg')" }} />,
      title: "Perform better",
      description: "Our innovative thermal control systems deliver superior performance compared to traditional solutions."
    },
    {
      icon: <div className="w-12 h-12 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/assets/images/index/coins.svg')" }} />,
      title: "Cost less",
      description: "Reduce operational costs while improving efficiency and environmental impact."
    },
    {
      icon: <div className="w-12 h-12 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/assets/images/index/brain.svg')" }} />,
      title: "Be smarter",
      description: "Intelligent systems that adapt and optimize for maximum efficiency and performance."
    },
    {
      icon: <div className="w-12 h-12 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/assets/images/index/recycle.svg')" }} />,
      title: "More sustainable",
      description: "Environmentally conscious solutions that reduce carbon footprint and promote sustainability."
    }
  ];

  const technologyCards = [
    {
      title: "Built Environment",
      description: "Revolutionary thermal control systems for residential and commercial buildings, eliminating the need for traditional HVAC methods.",
      image: "/assets/images/index/thermal.jpg",
      link: "/technology#built-environment"
    },
    {
      title: "Cold Chain Distribution",
      description: "Advanced thermoelectric technology for refrigeration units that are lighter, more efficient, and environmentally friendly.",
      image: "/assets/images/index/coldchain.jpg",
      link: "/technology#cold-chain"
    },
    {
      title: "Agri-Tech Solutions",
      description: "Sustainable cooling systems for agriculture, enabling 24/7 energy efficient thermal management for crop production.",
      image: "/assets/images/index/agri.png",
      link: "/technology#agri-tech"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            poster="/lovable-uploads/15a347db-5b38-4bc5-ac29-6239ca4aa65e.png"
          >
            <source src="/assets/videos/index/hero-vid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="title-chip animate-fade-in">Redefining Energy Efficiency</div>
            <h1 className="hero-text text-white mb-6 animate-fade-in">
              The Future of <br className="hidden md:block" />
              Heating and Cooling
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 animate-fade-in">
              Revolutionary thermoelectric systems for a zero-carbon future, replacing diesel-powered refrigeration and creating sustainable cold chains worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link 
                to="/technology" 
                className="btn-primary"
              >
                Explore Our Technology
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/20"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
            aria-label="Scroll down"
          >
            <ArrowRight className="h-5 w-5 rotate-90" />
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <SectionContainer id="about">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <SectionTitle 
              chip="About Us"
              title="Revolutionizing Environmental Control Through Innovation"
              subtitle="Botanic Energy is a fast-growing clean-tech company designing cutting-edge thermoelectric systems that redefine how we approach heating, cooling, and environmental control."
              alignment="left"
            />
            
            <p className="text-foreground/70 mb-6 animate-fade-in">
              Our goal is environmental control of internal spaces through heat transfer, rather than the burning of fossil fuels, achieved through thermodynamics to decarbonize buildings, transport and refrigeration towards a zero carbon future.
            </p>
            
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "glass-card p-8 animate-fade-in hover:shadow-lg transition-all duration-300",
                    `delay-[${index * 100}ms]`
                  )}
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 text-lg">{feature.description}</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          image="/assets/images/index/thermaltap.jpg"
          alt="Thermal Taps and Valves"
        >
          <div className="title-chip animate-fade-in-right">Featured Technology</div>
          <h2 className="section-title mb-6 animate-fade-in-right">Thermodynamic Taps and Valves</h2>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-right">
            Botanic Energy's thermal taps heat and cool water at source on demand through the innovative use of thermodynamic systems. In combination with our Thermal Cladding, a household or building's boiler becomes unnecessary.
          </p>
          <p className="text-lg text-foreground/70 mb-8 animate-fade-in-right">
            This technology significantly reduces energy consumption while providing more efficient and environmentally friendly water heating and cooling solutions.
          </p>
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
            src="/assets/images/index/call-to-action.jpg" 
            alt="Nature background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 animate-fade-in">
            Our Vision
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            Using Energy to Build <br className="hidden md:block" /> Not Destroy
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto animate-fade-in">
            We're creating a future where energy consumption contributes to sustainable development rather than environmental degradation. Our innovative technologies harness the power of thermodynamics to build a cleaner, more efficient world.
          </p>
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img 
            src="/assets/images/general/collaborator-1.png"
            alt="Oxford University Innovation"
            className="h-16 md:h-20 w-auto object-contain hover:opacity-80 transition-opacity"
            loading="lazy"
            decoding="async"
          />
          <img 
            src="/assets/images/general/collaborator-2.png"
            alt="Innovate UK"
            className="h-16 md:h-20 w-auto object-contain hover:opacity-80 transition-opacity"
            loading="lazy"
            decoding="async"
          />
          <img 
            src="/assets/images/general/collaborator-3.png"
            alt="Department for Transport"
            className="h-16 md:h-20 w-auto object-contain hover:opacity-80 transition-opacity"
            loading="lazy"
            decoding="async"
          />
          <img 
            src="/assets/images/general/collaborator-4.png"
            alt="Advanced Propulsion Centre UK"
            className="h-16 md:h-20 w-auto object-contain hover:opacity-80 transition-opacity"
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
    </Layout>
  );
};

export default Index;

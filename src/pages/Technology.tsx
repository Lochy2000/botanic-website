import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import ImageSection from '@/components/ImageSection';
import CTA from '@/components/CTA';
import { Zap, Thermometer, Wind, BarChart } from 'lucide-react';
import { getImagePath } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ReadMoreInline } from '@/components/ReadMoreContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Technology = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const benefits = [
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-botanicRed" />,
      title: "Energy Efficient",
      description: "Our systems use significantly less energy than conventional methods, reducing both costs and environmental impact."
    },
    {
      icon: <Thermometer className="h-5 w-5 sm:h-6 sm:w-6 text-botanicBlue" />,
      title: "Temperature Control",
      description: "Precise temperature regulation in any environment, adapting to external conditions for optimal performance."
    },
    {
      icon: <Wind className="h-5 w-5 sm:h-6 sm:w-6 text-botanicPurple" />,
      title: "Zero Emissions",
      description: "No direct emissions or harmful refrigerants, contributing to a cleaner and more sustainable future."
    },
    {
      icon: <BarChart className="h-5 w-5 sm:h-6 sm:w-6 text-botanicBlue" />,
      title: "Cost Effective",
      description: "Lower operational costs and maintenance requirements compared to traditional heating and cooling systems."
    }
  ];

  const technologies = [
    {
      id: "built-environment",
      title: "The Built Environment",
      image: "https://res.cloudinary.com/dpw2txejq/image/upload/v1746191395/buildenv_ht5vr6.png",
      description: "Combining a building's external fabric and space heating into a single coordinated system using the heat around us rather than burning fossil fuels to generate heat, significantly decarbonizing emissions and contributing towards net zero targets.",
      link: "/technologies/built-environment"
    },
    {
      id: "cold-chain",
      title: "Cold Chain Distribution",
      image: getImagePath('assets/images/technology/coldchain.jpg'),
      description: "Our systems replace heavy refrigeration units with lighter solid state thermodynamic devices, reducing weight and energy consumption while providing an environmentally conscious alternative for refrigerated transport and storage.",
      link: "/technologies/cold-chain",
      reverse: true
    },
    {
      id: "agri-tech",
      title: "Agri-Tech Solutions",
      image: getImagePath('assets/images/sectors/agricultor.png'),
      description: "Our sustainable solar heat transfer system combined with thermal storage enables 24/7 energy-efficient thermal management to maximize crop production at low cost for Total Controlled Environmental Agriculture.",
      link: "/technologies/agri-tech"
    },
    {
      id: "thermal-taps",
      title: "Thermal Taps and Valves",
      image: getImagePath('assets/images/technology/thermaltap.jpg'),
      description: "Our thermal taps produce hot and cold water at destination rather than supply, eliminating the need for hot water cylinders and dual water distribution. When combined with Thermal Cladding, traditional boilers become unnecessary.",
      link: "/technologies/thermal-taps",
      reverse: true
    },
    {
      id: "aviation",
      title: "Aviation",
      image: "https://res.cloudinary.com/dpw2txejq/image/upload/v1746191386/aviation_mp1r98.png",
      description: "Our novel thermal matrix enhances thermal management of ancillary equipment in aircraft engines, improving reliability and lifetime while reducing fuel consumption. Lightweight solid-state systems are ideal for aviation applications.",
      link: "/technologies/aviation"
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
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746193299/tech-hero_gar5j3.png"
            alt="Botanic Technology"
          />
          {/* Dark gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        {/* Hero Content - Centered in viewport */}
        <div className="relative h-full flex flex-col justify-center items-center">
          <div className="container mx-auto px-4 text-center text-white max-w-7xl">
            <div className="title-chip animate-fade-in text-white bg-white/20">Innovation</div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight animate-fade-in">
              Our Revolutionary Technology
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-gray-200 animate-fade-in px-2 xs:px-0">
              Cutting-edge thermoelectric systems that transform how we approach environmental control and energy efficiency.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          <div>
            <SectionTitle 
              chip="Overview"
              title="Solid State Technology"
              subtitle="Our disruptive solid state technology aims to revolutionize thermal control through innovative thermodynamic principles."
              alignment="left"
            />
            
            {isMobile ? (
              <ReadMoreInline 
                text="Traditional heating, cooling and refrigeration equipment consumes large amounts of energy and creates considerable pollution, both harmful emissions and leakages of damaging substances. Botanic Energy's disruptive solid state technology aims to revolutionize thermal control for various applications. Our systems take advantage of temperature differences between external and internal environments, utilizing the heat around us rather than creating heat. This approach is more energy efficient and considerably less polluting than existing temperature control methods."
                maxLength={150}
                className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in"
              />
            ) : (
              <>
                <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
                  Traditional heating, cooling and refrigeration equipment consumes large amounts of energy and creates considerable pollution, both harmful emissions and leakages of damaging substances. Botanic Energy's disruptive solid state technology aims to revolutionize thermal control for various applications.
                </p>
                
                <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
                  Our systems take advantage of temperature differences between external and internal environments, utilizing the heat around us rather than creating heat. This approach is more energy efficient and considerably less polluting than existing temperature control methods.
                </p>
              </>
            )}
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="none"
              className="w-full h-auto"
              poster={getImagePath('assets/images/technology/solidstate-poster.png')}
            >
              <source src="https://res.cloudinary.com/dpw2txejq/video/upload/v1746191280/thermalimage_zt8vzf.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </SectionContainer>
      
      {/* Benefits Section */}
      <SectionContainer className="bg-botanicLight">
        <SectionTitle 
          chip="Benefits"
          title="Advantages of Our Technology"
          subtitle="Our innovative systems offer numerous benefits over conventional heating and cooling methods."
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-4 sm:p-6 md:p-8 animate-fade-in"
            >
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 inline-flex items-center justify-center rounded-lg bg-foreground/5">
                {benefit.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-foreground/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Technology Applications */}
      {technologies.map((tech, index) => (
        <SectionContainer 
          key={tech.id} 
          id={tech.id} 
          className={index % 2 !== 0 ? "bg-botanicLight" : ""}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center`}>
            <div className={tech.reverse ? "order-2 lg:order-1" : ""}>
              <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
                <img 
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className={tech.reverse ? "order-1 lg:order-2" : ""}>
              <div className="title-chip animate-fade-in">Application</div>
              <h2 className="section-title mb-3 sm:mb-4 md:mb-6 animate-fade-in">{tech.title}</h2>
              
              {isMobile ? (
                <ReadMoreInline 
                  text={tech.description}
                  maxLength={100}
                  className="text-sm sm:text-base md:text-lg text-foreground/70 mb-6 animate-fade-in"
                />
              ) : (
                <p className="text-base sm:text-lg text-foreground/70 mb-6 animate-fade-in">
                  {tech.description}
                </p>
              )}
              
              <Link to={tech.link}>
                <Button className="btn-primary animate-fade-in">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </SectionContainer>
      ))}
      
      {/* CTA Section */}
      <CTA 
        title="Interested in Our Technology?"
        subtitle="Discover how our innovative solutions can benefit your specific application and requirements."
        buttonText="Contact Our Experts"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Technology;
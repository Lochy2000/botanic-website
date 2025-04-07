import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import CTA from '@/components/CTA';
import { Building, Truck, Leaf, Plane, Home, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Sectors = () => {
  const sectors = [
    {
      icon: <Building className="h-10 w-10" />,
      title: "Built Environment",
      description: "Transforming heating and cooling in commercial and residential buildings through innovative thermal control systems.",
      image: "/assets/images/sectors/built-environment.png",
      link: "/technology#built-environment",
      color: "bg-botanicRed text-white"
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Transport & Refrigeration",
      description: "Revolutionary solid-state technology for refrigerated transport, replacing diesel-powered units with environmentally friendly alternatives.",
      image: "/assets/images/sectors/transport-refrigeration.png",
      link: "/technology#cold-chain",
      color: "bg-botanicBlue text-white"
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Agriculture",
      description: "Energy-efficient thermal management solutions for controlled environment agriculture and crop production.",
      image: "/assets/images/sectors/agricultor.png",
      link: "/technology#agri-tech",
      color: "bg-botanicPurple text-white"
    },
    {
      icon: <Plane className="h-10 w-10" />,
      title: "Aviation",
      description: "Advanced thermal management for aircraft engines, enhancing reliability while reducing fuel consumption.",
      image: "/assets/images/sectors/aviation.png",
      link: "/technology#aviation",
      color: "bg-botanicDark text-white"
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: "Residential",
      description: "Innovative solutions for home heating, cooling, and water systems that eliminate the need for traditional boilers.",
      image: "/assets/images/sectors/residential.jpg",
      link: "/technology#thermal-taps",
      color: "bg-botanicRed text-white"
    },
    {
      icon: <Pill className="h-10 w-10" />,
      title: "Medical",
      description: "Reliable cooling solutions for medical applications, including vaccine transport and storage in challenging environments.",
      image: "/assets/images/sectors/medical.jpeg",
      link: "/technology#cold-chain",
      color: "bg-botanicBlue text-white"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-botanicLight">
          <div className="absolute inset-0 bg-gradient-to-r from-botanicRed/5 to-botanicBlue/5" />
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-botanicBlue/10 rounded-full filter blur-3xl animate-pulse-subtle" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-botanicRed/10 rounded-full filter blur-3xl animate-pulse-subtle" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="title-chip animate-fade-in">Impact</div>
            <h1 className="hero-text mb-6 animate-fade-in">
              Sectors We Impact
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 animate-fade-in">
              Our disruptive technology is transforming multiple industries, delivering sustainable and efficient thermal management solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sectors Grid */}
      <SectionContainer>
        <SectionTitle 
          title="Transforming Industries Through Innovation"
          subtitle="Botanic Energy's revolutionary technology is being applied across diverse sectors, each benefiting from our sustainable approach to thermal control."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden group hover:shadow-xl animate-fade-in"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className={cn(
                    "inline-flex items-center justify-center p-3 rounded-full mb-3",
                    sector.color
                  )}>
                    {sector.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {sector.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 mb-4">
                  {sector.description}
                </p>
                <Link 
                  to={sector.link}
                  className="text-botanicBlue font-medium hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Global Impact */}
      <SectionContainer className="bg-botanicDark text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="title-chip bg-white/10 text-white animate-fade-in">Global Reach</div>
            <h2 className="section-title mb-6 animate-fade-in">Making a Difference Worldwide</h2>
            <p className="text-white/80 mb-6 animate-fade-in">
              Our technologies are particularly impactful in challenging regions like Sub-Saharan Africa, where reliable cooling and refrigeration can be transformative for communities and businesses.
            </p>
            <p className="text-white/80 mb-8 animate-fade-in">
              From preserving vital medicines to reducing food waste through better cold chains, our solutions address critical global challenges while supporting sustainability goals.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="/assets/images/sectors/transport-refrigeration.png"
              alt="Global Impact" 
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </SectionContainer>
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Explore Sector-Specific Solutions?"
        subtitle="Connect with our team to discover how our technologies can address your industry's unique thermal control challenges."
        buttonText="Discuss Your Needs"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Sectors;

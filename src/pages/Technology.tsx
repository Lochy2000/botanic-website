
import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import ImageSection from '@/components/ImageSection';
import CTA from '@/components/CTA';
import { Zap, Thermometer, Wind, BarChart } from 'lucide-react';

const Technology = () => {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-botanicRed" />,
      title: "Energy Efficient",
      description: "Our systems use significantly less energy than conventional methods, reducing both costs and environmental impact."
    },
    {
      icon: <Thermometer className="h-6 w-6 text-botanicBlue" />,
      title: "Temperature Control",
      description: "Precise temperature regulation in any environment, adapting to external conditions for optimal performance."
    },
    {
      icon: <Wind className="h-6 w-6 text-botanicPurple" />,
      title: "Zero Emissions",
      description: "No direct emissions or harmful refrigerants, contributing to a cleaner and more sustainable future."
    },
    {
      icon: <BarChart className="h-6 w-6 text-botanicBlue" />,
      title: "Cost Effective",
      description: "Lower operational costs and maintenance requirements compared to traditional heating and cooling systems."
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
            <div className="title-chip animate-fade-in">Innovation</div>
            <h1 className="hero-text mb-6 animate-fade-in">
              Our Revolutionary Technology
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 animate-fade-in">
              Cutting-edge thermoelectric systems that transform how we approach environmental control and energy efficiency.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              chip="Overview"
              title="Solid State Technology"
              subtitle="Our disruptive solid state technology aims to revolutionize thermal control through innovative thermodynamic principles."
              alignment="left"
            />
            
            <p className="text-foreground/70 mb-6 animate-fade-in">
              Traditional heating, cooling and refrigeration equipment consumes large amounts of energy and creates considerable pollution, both harmful emissions and leakages of damaging substances. Botanic Energy's disruptive solid state technology aims to revolutionize thermal control for various applications.
            </p>
            
            <p className="text-foreground/70 mb-6 animate-fade-in">
              Our systems take advantage of temperature differences between external and internal environments, utilizing the heat around us rather than creating heat. This approach is more energy efficient and considerably less polluting than existing temperature control methods.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="/lovable-uploads/f0bb58ba-4e45-40f9-a243-c232c9f0a9de.png" 
              alt="Solid State Technology" 
              className="w-full h-auto"
            />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-8 animate-fade-in"
            >
              <div className="mb-4 p-3 inline-flex items-center justify-center rounded-lg bg-foreground/5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Built Environment Section */}
      <SectionContainer id="built-environment">
        <ImageSection 
          image="/lovable-uploads/f0bb58ba-4e45-40f9-a243-c232c9f0a9de.png"
          alt="Built Environment"
        >
          <div className="title-chip animate-fade-in-right">Application</div>
          <h2 className="section-title mb-6 animate-fade-in-right">The Built Environment</h2>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-right">
            Combining a building's external fabric and space heating into a single coordinated system and using the heat around us rather than burning fossil fuels to generate heat, will decarbonize emissions significantly and contribute towards the desire for net zero emissions.
          </p>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-right">
            The system works equally well in cold and hot climates. In a cool environment, Botanic Energy's thermal cladding absorbs heat from external ambient for warming the fabric and heating internal spaces. In warm environments heat is transferred from internal spaces lowering temperature.
          </p>
          <p className="text-lg text-foreground/70 animate-fade-in-right">
            Maintaining the fabric at or close to internal temperatures minimizes heat losses saving energy.
          </p>
        </ImageSection>
      </SectionContainer>
      
      {/* Cold Chain Section */}
      <SectionContainer id="cold-chain" className="bg-botanicLight">
        <ImageSection 
          image="/lovable-uploads/be3fbece-99a1-46db-bcfe-136103aa1f65.png"
          alt="Cold Chain Distribution"
          position="right"
        >
          <div className="title-chip animate-fade-in-left">Application</div>
          <h2 className="section-title mb-6 animate-fade-in-left">Cold Chain Distribution</h2>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-left">
            Botanic Energy's systems replace heavy refrigeration units, pumps and compressors with lighter solid state thermodynamic devices, coupled with reductions in insulation, savings in weight can be achieved leading to energy savings and reduced operating costs.
          </p>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-left">
            Our innovative technology based upon thermodynamics, takes advantage of temperature differences between internal and external environments, providing an energy efficient alternative for environmentally conscious regulators and distributors.
          </p>
          <p className="text-lg text-foreground/70 animate-fade-in-left">
            This is particularly valuable in challenging regions like Sub-Saharan Africa, where our sustainable cold chains can help preserve perishable goods and medications.
          </p>
        </ImageSection>
      </SectionContainer>
      
      {/* Agri-Tech Section */}
      <SectionContainer id="agri-tech">
        <ImageSection 
          image="/lovable-uploads/0c84872f-d828-46c1-830f-f503220c2ec4.png"
          alt="Agri-Tech Solutions"
        >
          <div className="title-chip animate-fade-in-right">Application</div>
          <h2 className="section-title mb-6 animate-fade-in-right">Agri-Tech Solutions</h2>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-right">
            Botanic Energy's sustainable solar heat transfer system combined with thermal storage, enables 24/7 energy efficient thermal management to maximize crop production at low cost for Total Controlled Environmental Agriculture and associated applications.
          </p>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-right">
            Our systems provide precise temperature control for greenhouses, vertical farms, and other agricultural environments, ensuring optimal growing conditions while minimizing energy consumption.
          </p>
          <p className="text-lg text-foreground/70 animate-fade-in-right">
            This technology is particularly valuable in regions with limited resources or harsh climates, enabling sustainable food production in areas previously considered unsuitable.
          </p>
        </ImageSection>
      </SectionContainer>
      
      {/* Thermal Taps Section */}
      <SectionContainer id="thermal-taps" className="bg-botanicLight">
        <ImageSection 
          image="/lovable-uploads/365e5d7f-d199-4f31-a2a7-c7bd5ccff3b6.png"
          alt="Thermal Taps and Valves"
          position="right"
        >
          <div className="title-chip animate-fade-in-left">Application</div>
          <h2 className="section-title mb-6 animate-fade-in-left">Thermal Taps and Valves</h2>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-left">
            Botanic Energy's Thermal Sensor Taps and Valves produce hot and cold water at destination rather than supply, eliminating the need for hot water cylinders and dual hot and cold water distribution. Providing hot water directly at taps and showers means you only produce what you need.
          </p>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-left">
            This innovative approach significantly reduces energy waste by heating water only when and where it's needed, rather than maintaining a constantly heated supply.
          </p>
          <p className="text-lg text-foreground/70 animate-fade-in-left">
            In combination with our Thermal Cladding technology, a household or building's traditional boiler becomes entirely unnecessary, leading to substantial energy savings and reduced carbon emissions.
          </p>
        </ImageSection>
      </SectionContainer>
      
      {/* Aviation Section */}
      <SectionContainer id="aviation">
        <ImageSection 
          image="/lovable-uploads/0c84872f-d828-46c1-830f-f503220c2ec4.png"
          alt="Aviation Applications"
        >
          <div className="title-chip animate-fade-in-right">Application</div>
          <h2 className="section-title mb-6 animate-fade-in-right">Aviation</h2>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-right">
            Botanic Energy's novel thermal matrix is being exploited for applications in the aerospace sector. The system offers efficient thermal management of ancillary equipment in turbo fan aircraft engines, thereby enhancing the equipment's reliability and lifetime whilst improving thrust specific fuel consumption.
          </p>
          <p className="text-lg text-foreground/70 mb-6 animate-fade-in-right">
            Our technology provides stable and precise temperature control for critical aircraft components, improving overall efficiency and reducing fuel consumption.
          </p>
          <p className="text-lg text-foreground/70 animate-fade-in-right">
            The lightweight nature of our solid-state systems makes them particularly valuable for aviation applications, where weight reduction directly contributes to improved fuel efficiency and performance.
          </p>
        </ImageSection>
      </SectionContainer>
      
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

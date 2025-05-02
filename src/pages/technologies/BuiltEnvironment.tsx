import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import ImageSection from '@/components/ImageSection';
import CTA from '@/components/CTA';
import { getImagePath } from '@/lib/utils';
import { Leaf, ThermometerSun, Recycle, BarChart4 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BuiltEnvironment = () => {
  const keyFeatures = [
    {
      icon: <ThermometerSun className="h-6 w-6 text-botanicRed" />,
      title: "Ambient Heat Utilization",
      description: "Our systems absorb heat from external ambient sources for warming building fabric and heating internal spaces."
    },
    {
      icon: <Leaf className="h-6 w-6 text-botanicBlue" />,
      title: "Zero Carbon Emissions",
      description: "Using the heat around us rather than burning fossil fuels significantly reduces carbon emissions."
    },
    {
      icon: <Recycle className="h-6 w-6 text-botanicPurple" />,
      title: "Dual-Purpose System",
      description: "Works efficiently in both cold and warm climates, providing heating or cooling as needed."
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-botanicBlue" />,
      title: "Energy Savings",
      description: "Maintaining fabric at or close to internal temperatures minimizes heat losses, saving energy."
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
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191395/buildenv_ht5vr6.png"
            alt="Built Environment Technology"
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
              The Built Environment
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-gray-200 animate-fade-in px-2 xs:px-0">
              Transforming how buildings are heated and cooled through revolutionary thermal cladding technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <SectionContainer>
        <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in mb-10 sm:mb-16">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191395/buildenv_ht5vr6.png" 
            alt="Thermal cladding for buildings" 
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
              title="Revolutionizing Building Climate Control"
              subtitle="Our thermal cladding technology creates a coordinated system that eliminates the need for traditional heating and cooling methods."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Botanic Energy's approach to the built environment is revolutionary in its simplicity. By combining a building's external fabric and space heating into a single coordinated system, we harness the heat around us rather than burning fossil fuels to generate heat. This approach significantly reduces carbon emissions and contributes toward net zero emission goals.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              The system works by installing our proprietary thermal cladding on building exteriors. This cladding creates a dynamic thermal barrier that actively manages heat transfer rather than simply insulating. In cool environments, it absorbs heat from external ambient sources for warming the building fabric and heating internal spaces. In warm environments, it transfers heat from internal spaces to lower temperatures.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746197731/climate-control_pc9yrs.png" 
            alt="Thermal cladding technology"
            className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </SectionContainer>
      
      {/* Key Features Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Features"
          title="Key Advantages for Buildings"
          subtitle="Our built environment technology offers several significant benefits over conventional systems."
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
              src={getImagePath('assets/images/technology/thermal.jpg')} 
              alt="Technical illustration of thermal cladding"
              className="rounded-2xl shadow-xl animate-fade-in w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle 
              chip="Technical Details"
              title="How Thermal Cladding Works"
              subtitle="Understanding the science behind our innovative approach to building climate control."
              alignment="left"
            />
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              Our thermal cladding technology utilizes advanced solid-state thermodynamic principles to create a dynamic thermal barrier around buildings. The system consists of specialized panels with embedded thermoelectric elements that can actively move heat in either direction.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 mb-4 sm:mb-6 animate-fade-in">
              In cooling mode, the system draws heat from the interior and dissipates it to the exterior. In heating mode, it captures ambient heat from the environment (even in cold conditions) and transfers it inward. This bidirectional capability allows for year-round comfort regardless of external conditions.
            </p>
            
            <p className="text-sm xs:text-base text-foreground/70 animate-fade-in">
              By maintaining the building fabric at or close to desired internal temperatures, heat losses are minimized, resulting in substantial energy savings compared to conventional heating and cooling systems that constantly fight against the building envelope's thermal properties.
            </p>
          </div>
        </div>
      </SectionContainer>
      
      {/* Applications Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Applications"
          title="Where Our Technology Makes a Difference"
          subtitle="Our thermal cladding systems can be applied to various building types and environments."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Commercial Buildings</h3>
            <p className="text-foreground/70 mb-4">
              Office buildings, retail spaces, and commercial complexes can significantly reduce their carbon footprint and operational costs by implementing our thermal cladding technology.
            </p>
            <img 
              src='https://res.cloudinary.com/dpw2txejq/image/upload/v1746197701/commercial_buildings_plfxbf.png'
              alt="Commercial building application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Residential Housing</h3>
            <p className="text-foreground/70 mb-4">
              From single-family homes to multi-unit dwellings, our systems provide comfortable living environments while dramatically reducing energy consumption and utility costs.
            </p>
            <img 
              src={getImagePath('assets/images/sectors/residential.jpg')}
              alt="Residential housing application"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3">Industrial Facilities</h3>
            <p className="text-foreground/70 mb-4">
              Manufacturing plants, warehouses, and other industrial buildings can maintain optimal working conditions while meeting stringent environmental regulations.
            </p>
            <img 
              src='https://res.cloudinary.com/dpw2txejq/image/upload/v1746197720/industrialfacilities_s9oynm.png'
              alt="Industrial facility application"
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
          subtitle="See how our technology performs in actual building installations."
        />
        
        <div className="glass-card p-6 sm:p-8 md:p-10 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Office Building Retrofit</h3>
              <p className="text-foreground/70 mb-4">
                A 10,000 square foot office building in the UK was retrofitted with Botanic Energy's thermal cladding system. The results were monitored over a full year to capture performance across all seasons.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Energy consumption reduced by 62% compared to the previous year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Carbon emissions decreased by 58 tonnes annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>More consistent internal temperatures reported by occupants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-botanicRed mr-2">✓</span>
                  <span>Return on investment period of just 3.5 years</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src='https://res.cloudinary.com/dpw2txejq/image/upload/v1746197724/officbuildingretrofit_pjv8vg.png' 
                alt="Office building case study"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Transform Your Building?"
        subtitle="Contact our experts to discuss how our thermal cladding technology can revolutionize your building's energy efficiency."
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="dark"
      />
    </Layout>
  );
};

export default BuiltEnvironment;
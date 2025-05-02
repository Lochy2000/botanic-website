import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';
import { Users, Target, Clock, Award } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

const About = () => {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-botanicRed" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in thermal management, developing revolutionary technologies that challenge conventional methods."
    },
    {
      icon: <Users className="h-10 w-10 text-botanicBlue" />,
      title: "Sustainability",
      description: "Environmental responsibility is at the core of everything we do, driving us to create solutions that minimize resource use and emissions."
    },
    {
      icon: <Award className="h-10 w-10 text-botanicPurple" />,
      title: "Excellence",
      description: "We are committed to the highest standards of quality and performance in our technology, our team, and our business practices."
    },
    {
      icon: <Clock className="h-10 w-10 text-botanicDark" />,
      title: "Future-Focused",
      description: "We develop solutions not just for today's challenges, but for tomorrow's world, anticipating needs before they arise."
    }
  ];

  const teamMembers = [
    {
      name: "Professor Nick Wyllie OBE FREng FRS",
      title: "Director, Co-Founder & CTO",
      image: getImagePath('assets/images/team/Nick-Wyllie.png'),
    },
    {
      name: "Professor Kam Chana FREng",
      title: "Co-Founder & Head of Thermoelectric Innovation",
      image: getImagePath('assets/images/team/Professor-Kam-Chana.png'),
    },
    {
      name: "Dr Tom Capon",
      title: "Director & Co-Founder",
      image: getImagePath('assets/images/team/Tom-Capon.png'),
    },
    {
      name: "Jane Breeden",
      title: "Chief Operating Officer",
      image: getImagePath('assets/images/team/Jane-Breeden.png'),
    },
    {
      name: "Max Wyllie",
      title: "Lead Electronics Engineer",
      image: getImagePath('assets/images/team/Max Wyllie.png'),
    },
    {
      name: "Deepanshu Singh",
      title: "Thermoelectric Device Engineer",
      image: getImagePath('assets/images/team/Deepanshu-Singh.png'),
    },
    {
      name: "James Dimitriou",
      title: "Mechanical Design Engineer",
      image: getImagePath('assets/images/team/James-Dimitriou.png'),
    },
  ];

  const collaborators = [
    { name: "Oxford University Innovation", image: getImagePath('assets/images/general/collaborator-1.png') },
    { name: "Innovate UK", image: getImagePath('assets/images/general/collaborator-2.png') },
    { name: "Department for Transport", image: getImagePath('assets/images/general/collaborator-3.png') },
    { name: "Advanced Propulsion Centre UK", image: getImagePath('assets/images/general/collaborator-4.png') },
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
            <div className="title-chip animate-fade-in">Our Story</div>
            <h1 className="hero-text mb-6 animate-fade-in">
              About Botanic Energy
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 animate-fade-in">
              We're a team of innovators and visionaries dedicated to revolutionizing the way the world approaches heating, cooling, and environmental control.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              chip="Who We Are"
              title="Pioneering Clean Technology Solutions"
              subtitle="Botanic Energy is at the forefront of the clean-tech revolution, designing and implementing innovative thermal management systems worldwide."
              alignment="left"
            />
            
            <p className="text-foreground/70 mb-6 animate-fade-in">
              We are a fast-growing clean-tech company focusing on innovation to provide cutting-edge energy-efficient products, utilizing thermodynamics to satisfy modern markets. Botanic Energy has developed a range of thermodynamic patented innovations based upon using environmental heat rather than burning fossil fuels to create thermal energy.
            </p>
            
            <p className="text-foreground/70 mb-6 animate-fade-in">
              Our environmentally friendly systems aim to be a natural progression from existing equipment, offering energy-conscious consumers and industry professionals cost-effective and less polluting products.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src={getImagePath('assets/images/general/pioneering-energy.jpg')} 
              alt="Pioneering Energy Solutions" 
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </SectionContainer>
      
      {/* Vision & Mission Section */}
      <SectionContainer id="vision" className="bg-botanicDark text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card bg-white/5 p-8 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-white/80 mb-6 text-lg">
              A world where heating, cooling, and environmental control systems work in harmony with nature, using minimal resources while maximizing efficiency and comfort.
            </p>
            <p className="text-white/80 text-lg">
              We envision a future where our technologies help create sustainable cold chains across the globe, ensuring that essential resources reach those who need them without harmful environmental impacts.
            </p>
          </div>
          
          <div className="glass-card bg-white/5 p-8 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-white/80 mb-6 text-lg">
              To revolutionize thermal control through innovative thermodynamic solutions that significantly reduce energy consumption, eliminate emissions, and provide reliable performance in diverse applications and environments.
            </p>
            <p className="text-white/80 text-lg">
              We are committed to using energy to build, not destroy, developing technologies that contribute to a zero-carbon future while meeting the practical needs of businesses and communities worldwide.
            </p>
          </div>
        </div>
      </SectionContainer>
      
      {/* Values Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Our Values"
          title="Principles That Guide Us"
          subtitle="These core values shape our approach to innovation, business, and our relationships with partners and clients."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="glass-card p-8 animate-fade-in"
            >
              <div className="mb-4 p-3 inline-flex items-center justify-center rounded-full bg-foreground/5">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Team Section */}
      <SectionContainer className="bg-botanicLight">
        <SectionTitle 
          chip="Our Team"
          title="Meet the Innovators"
          subtitle="The passionate team behind Botanic Energy's revolutionary technology and vision."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden group hover:shadow-xl animate-fade-in"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/80">
                    {member.title}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70">
                  {/* Add member bio here */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Partners Section */}
      <SectionContainer>
        <SectionTitle 
          chip="Our Partners"
          title="Strategic Collaborations"
          subtitle="We work with leading institutions and organizations to accelerate innovation and implementation."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {collaborators.map((partner, index) => (
            <div 
              key={index}
              className="glass-card p-8 flex items-center justify-center animate-fade-in"
            >
              <img 
                src={partner.image}
                alt={partner.name}
                className="max-h-20 max-w-full"
              />
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* CTA Section */}
      <CTA 
        title="Join Us in Shaping a Sustainable Future"
        subtitle="Whether you're interested in partnering with us, joining our team, or learning more about our solutions, we'd love to hear from you."
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="dark"
      />
    </Layout>
  );
};

export default About;

import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';

const Team = () => {
  const teamMembers = [
    {
      name: "Professor Nick Wyllie OBE FREng FRS",
      title: "Director, Co-Founder & CTO",
      image: "/botanic-website/assets/images/team/nick-wyllie.jpg",
      bio: "Leading expert in thermodynamics and energy systems."
    },
    {
      name: "Professor Kam Chana FREng",
      title: "Co-Founder & Head of Thermoelectric Innovation",
      image: "/botanic-website/assets/images/team/kam-chana.jpg",
      bio: "Pioneer in thermoelectric materials and device engineering."
    },
    {
      name: "Dr Tom Capon",
      title: "Director & Co-Founder",
      image: "/botanic-website/assets/images/team/tom-capon.jpg",
      bio: "Specialist in energy technology commercialisation."
    },
    {
      name: "Jane Breeden",
      title: "Chief Operating Officer",
      image: "/botanic-website/assets/images/team/jane-breeden.jpg",
      bio: "Experienced operations leader in the technology sector."
    },
    {
      name: "Max Wyllie",
      title: "Lead Electronics Engineer",
      image: "/botanic-website/assets/images/team/max-wyllie.jpg",
      bio: "Expert in power electronics and control systems for energy applications."
    },
    {
      name: "Deepanshu Singh",
      title: "Thermoelectric Device Engineer",
      image: "/botanic-website/assets/images/team/deepanshu-singh.jpg",
      bio: "Focusing on the design and optimisation of thermoelectric modules."
    },
    {
      name: "James Dimitriou",
      title: "Mechanical Design Engineer",
      image: "/botanic-website/assets/images/team/james-dimitriou.jpg",
      bio: "Developing innovative mechanical solutions for thermal management systems."
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
            <div className="title-chip animate-fade-in">Our Team</div>
            <h1 className="hero-text mb-6 animate-fade-in">
              Meet the Innovators
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 animate-fade-in">
              Our diverse team of experts is dedicated to revolutionizing thermal control technology for a sustainable future.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Grid */}
      <SectionContainer>
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
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Team; 
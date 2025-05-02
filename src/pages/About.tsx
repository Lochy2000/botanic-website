import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';
import { Users, Target, Clock, Award } from 'lucide-react';
import { getImagePath } from '@/lib/utils';
import TeamMemberModal from '@/components/TeamMemberModal';
import { ReadMoreInline } from '@/components/ReadMoreContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const About = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const values = [
    {
      icon: <Target className="h-8 w-8 sm:h-10 sm:w-10 text-botanicRed" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in thermal management, developing revolutionary technologies that challenge conventional methods."
    },
    {
      icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-botanicBlue" />,
      title: "Sustainability",
      description: "Environmental responsibility is at the core of everything we do, driving us to create solutions that minimize resource use and emissions."
    },
    {
      icon: <Award className="h-8 w-8 sm:h-10 sm:w-10 text-botanicPurple" />,
      title: "Excellence",
      description: "We are committed to the highest standards of quality and performance in our technology, our team, and our business practices."
    },
    {
      icon: <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-botanicDark" />,
      title: "Future-Focused",
      description: "We develop solutions not just for today's challenges, but for tomorrow's world, anticipating needs before they arise."
    }
  ];

  const teamMembers = [
    {
      name: "Nick Wyllie",
      title: "CEO and Founder",
      image: getImagePath('assets/images/team/Nick-Wyllie.png'),
      bio: "Nick Wyllie is an innovator and developer with over 25 years of experience in industry and the built environment. A successful entrepreneur responsible for all aspects of project management, Nick has extensive experience as founder and CEO of various companies which has given him hands-on experience in managing teams and delivering results.\n\nHis qualifications include a BA (Hons) in Business, Technical Diploma in Building and Civil Engineering, professional qualifications in Marketing with a background in Environmental studies.\n\nPassionate about the environment, Nick holds patents on ten innovations relating to thermodynamics, vehicle cooler/heaters, heat transfer, active claddings, circuits, assemblies, heat recovery arrays and energy generation."
    },
    {
      name: "Professor Kam Chana",
      title: "Chief Technical Officer",
      image: getImagePath('assets/images/team/Professor-Kam-Chana.png'),
      bio: "Professor Kam Chana is the Chief Technical Officer at Botanic Energy. He is also Commercial and Technical Director at OTRF, and a Fellow of St Anne's College, University of Oxford, Department of Engineering Science.\n\nHe joined Oxford University in 2010 following 22 years at the Ministry of Defence and QinetiQ where he held the position of Head of Instrumentation and Experimental Programmes and was a QinetiQ Fellow. At Oxford, he leads the activities of the Oxford Turbine Research Facility.\n\nHe has authored over 100 peer-reviewed articles and holds several patents. His research interests include turbine heat transfer, cooling systems, gas turbines, internal combustion engine instrumentation, tip timing, tip clearance measurements, and high-temperature instrumentation."
    },
    {
      name: "Tom Capon",
      title: "Finance (NED)",
      image: getImagePath('assets/images/team/Tom-Capon.png'),
      bio: "Tom is an Advisor to Botanic Energy with an extensive background in Corporate Finance and Investment. He currently works as an Investment Principal at Optum Ventures in London.\n\nPrior to joining Optum, he worked as an Investment Manager at Oxford Science Enterprises and sat on the board of multiple deep tech Engineering and Cleantech companies.\n\nBefore this, Tom was a Venture Capital Portfolio Manager at Legal & General, investing in Health Tech businesses. He also worked in Strategy & Transactions for EY, on both corporate and private equity deals across a broad range of sectors.\n\nTom is a Chartered Accountant and holds an MSc in Economics & Strategy from Imperial College University."
    },
    {
      name: "Jane Breeden",
      title: "Founder and Research Officer",
      image: getImagePath('assets/images/team/Jane-Breeden.png'),
      bio: "Jane has extensive experience in human resources, recruitment, training, supervising, evaluating, and managing large groups of employees globally.\n\nPreviously, Jane founded Virgin Touch (a member of Richard Branson's Virgin Group), which she grew to in excess of 500 personnel with establishments at several major airports and overseas locations.\n\nJane has also created many supply chain relationships and consulted for several companies, bringing valuable business development experience to Botanic Energy."
    },
    {
      name: "Max Wyllie",
      title: "Chief Marketing Officer and Communications",
      image: getImagePath('assets/images/team/Max-Wyllie.png'),
      bio: "Max is a Marketing & Content specialist responsible for Botanic's communications and Marketing strategy.\n\nFounder and Creative Director of Parallax Cinematics, a Video Production company based in the UK and Germany, he has worked extensively within the fields of Corporate, Commercial, Documentary, and Film. He has previously led projects for global charities, corporates, and events.\n\nA recent Project and Documentary created by Max won a Purpose Award for 'Best Public Awareness Cause Campaign', demonstrating his ability to create compelling content that engages audiences."
    },
    {
      name: "Deepanshu Singh",
      title: "Advisor",
      image: getImagePath('assets/images/team/Deepanshu-Singh.png'),
      bio: "Deepanshu Singh is an advisor to Botanic Energy with an extensive research background in engineering.\n\nHe recently completed his PhD thesis at the University of Oxford, during which he worked with Rolls-Royce, to understand the aerothermal performance of next-generation low-emissions aircraft engines.\n\nDeepanshu holds a bachelor's degree in mechanical engineering from IIT (Indian Institute of Technology) Delhi, bringing valuable technical expertise to the Botanic Energy team."
    },
    {
      name: "James Dimitriou",
      title: "Corporate Advisor",
      image: getImagePath('assets/images/team/James-Dimitriou.png'),
      bio: "James Dimitriou is an advisor to Botanic Energy with approximately 15 years of experience in Engineering, Cleantech, and Financial Sectors.\n\nJames has spent over a decade developing, scaling up IP and products, and bringing them to market. He has led numerous Innovate UK bids as a lead applicant and partner, spearheading the developmental and commercial strategy for the technologies.\n\nHe has led project management, seeing technologies through from TRL1-7, which makes him a valuable asset to Botanic Energy's innovation and commercialization efforts."
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
      <section className="relative h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden">
        {/* Image Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1746191377/greenenergy_k3g3ub.png"
            alt="About Botanic Energy"
          />
          {/* Dark gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        {/* Hero Content - Centered in viewport */}
        <div className="relative h-full flex flex-col justify-center items-center">
          <div className="container mx-auto px-4 text-center text-white max-w-7xl">
            <div className="title-chip animate-fade-in text-white bg-white/20">Our Story</div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight animate-fade-in">
              About Botanic Energy
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-gray-200 animate-fade-in px-2 xs:px-0">
              We're a team of innovators and visionaries dedicated to revolutionizing the way the world approaches heating, cooling, and environmental control.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <SectionTitle 
              chip="Who We Are"
              title="Pioneering Clean Technology Solutions"
              subtitle="Botanic Energy is at the forefront of the clean-tech revolution, designing and implementing innovative thermal management systems worldwide."
              alignment="left"
            />
            
            {isMobile ? (
              <ReadMoreInline 
                text="We are a fast-growing clean-tech company focusing on innovation to provide cutting-edge energy-efficient products, utilizing thermodynamics to satisfy modern markets. Botanic Energy has developed a range of thermodynamic patented innovations based upon using environmental heat rather than burning fossil fuels to create thermal energy. Our environmentally friendly systems aim to be a natural progression from existing equipment, offering energy-conscious consumers and industry professionals cost-effective and less polluting products."
                maxLength={150}
                className="text-foreground/70 mb-6 animate-fade-in"
              />
            ) : (
              <>
                <p className="text-foreground/70 mb-6 animate-fade-in">
                  We are a fast-growing clean-tech company focusing on innovation to provide cutting-edge energy-efficient products, utilizing thermodynamics to satisfy modern markets. Botanic Energy has developed a range of thermodynamic patented innovations based upon using environmental heat rather than burning fossil fuels to create thermal energy.
                </p>
                
                <p className="text-foreground/70 mb-6 animate-fade-in">
                  Our environmentally friendly systems aim to be a natural progression from existing equipment, offering energy-conscious consumers and industry professionals cost-effective and less polluting products.
                </p>
              </>
            )}
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in relative group">
            <video 
              className="w-full h-auto"
              muted
              loop
              playsInline
              poster="https://res.cloudinary.com/dpw2txejq/image/upload/v1746195849/globelight_qyrwuu.png"
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
              onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()}
            >
              <source src="https://res.cloudinary.com/dpw2txejq/video/upload/v1746191309/globlight_sksohd.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </SectionContainer>
      
      {/* Vision & Mission Section */}
      <SectionContainer id="vision" className="bg-botanicDark text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-card bg-white/5 p-6 sm:p-8 animate-fade-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Our Vision</h3>
            
            {isMobile ? (
              <ReadMoreInline 
                text="A world where heating, cooling, and environmental control systems work in harmony with nature, using minimal resources while maximizing efficiency and comfort. We envision a future where our technologies help create sustainable cold chains across the globe, ensuring that essential resources reach those who need them without harmful environmental impacts."
                maxLength={120}
                className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg"
              />
            ) : (
              <>
                <p className="text-white/80 mb-6 text-lg">
                  A world where heating, cooling, and environmental control systems work in harmony with nature, using minimal resources while maximizing efficiency and comfort.
                </p>
                <p className="text-white/80 text-lg">
                  We envision a future where our technologies help create sustainable cold chains across the globe, ensuring that essential resources reach those who need them without harmful environmental impacts.
                </p>
              </>
            )}
          </div>
          
          <div className="glass-card bg-white/5 p-6 sm:p-8 animate-fade-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h3>
            
            {isMobile ? (
              <ReadMoreInline 
                text="To revolutionize thermal control through innovative thermodynamic solutions that significantly reduce energy consumption, eliminate emissions, and provide reliable performance in diverse applications and environments. We are committed to using energy to build, not destroy, developing technologies that contribute to a zero-carbon future while meeting the practical needs of businesses and communities worldwide."
                maxLength={120}
                className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg"
              />
            ) : (
              <>
                <p className="text-white/80 mb-6 text-lg">
                  To revolutionize thermal control through innovative thermodynamic solutions that significantly reduce energy consumption, eliminate emissions, and provide reliable performance in diverse applications and environments.
                </p>
                <p className="text-white/80 text-lg">
                  We are committed to using energy to build, not destroy, developing technologies that contribute to a zero-carbon future while meeting the practical needs of businesses and communities worldwide.
                </p>
              </>
            )}
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="glass-card p-6 sm:p-8 animate-fade-in"
            >
              <div className="mb-4 p-3 inline-flex items-center justify-center rounded-full bg-foreground/5">
                {value.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-foreground/70 text-sm sm:text-base">{value.description}</p>
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberModal 
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
              bio={member.bio}
            />
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
          {collaborators.map((partner, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 flex items-center justify-center animate-fade-in"
            >
              <img 
                src={partner.image}
                alt={partner.name}
                className="max-h-16 sm:max-h-20 max-w-full"
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
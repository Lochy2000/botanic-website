import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';

const Team = () => {
  const teamMembers = [
    {
      name: "Nick Wyllie",
      role: "CEO and Founder",
      image: "/assets/images/team/nick-wyllie.jpg",
      bio: "Nick Wyllie is an innovator and developer having over 25 years experience in industry and the built environment. A successful entrepreneur responsible for all aspects of project management. Nick has extensive experience as founder and CEO of various companies which has given him hands on experience in managing teams and delivering results. Qualifications include BA (Hons) in Business, Technical Diploma in Building and Civil Engineering, professional qualifications in Marketing with a background in Environmental studies. Passionate about the environment, Nick has patents on ten innovations relating to thermodynamics, vehicle cooler/heaters, heat transfer, active claddings, circuits, assemblies, heat recovery arrays and energy generation."
    },
    {
      name: "Professor Kam Chana",
      role: "Chief Technical Officer",
      image: "/assets/images/team/kam-chana.jpg",
      bio: "Professor Kam Chana, Commercial and Technical Director OTRF, Fellow of St Anne's College, University of Oxford, Department of Engineering Science is the Chief Technical Officer at Botanic Energy. He joined Oxford University in 2010 following 22 years at the Ministry of Defence and QinetiQ where he held the position of Head of Instrumentation and Experimental Programmes and was a QinetiQ Fellow. At Oxford he leads the activities of the Oxford Turbine Research Facility. He has over 100 peer reviewed articles and several patents. Research interests include turbine heat transfer, cooling systems, gas turbines, internal combustion engine instrumentation, tip timing, tip clearance measurements and high temperature instrumentation."
    },
    {
      name: "Tom Capon",
      role: "Finance (NED)",
      image: "/assets/images/team/tom-capon.jpg",
      bio: "Tom is an Advisor to Botanic Energy with an extensive background in Corporate Finance and Investment. Tom is a Venture Capitalist currently plying his trade as an Investment Principal at Optum Ventures in London. Prior to joining Optum, he worked as an Investment Manager at Oxford Science Enterprises and sat on the board of multiple deep tech Engineering and Cleantech companies. Before this Tom was a Venture Capital Portfolio Manager at Legal & General, investing in Health Tech businesses. Tom worked in Strategy & Transactions for EY, on both corporate and private equity deals across a broad range of sectors. Tom is a Chartered Accountant and holds a MSc in Economics & Strategy from Imperial College University."
    },
    {
      name: "Jane Breeden",
      role: "Founder and Research Officer",
      image: "/assets/images/team/jane-breeden.jpg",
      bio: "Jane has extensive experience of human resources, recruitment, training, supervising, evaluating and managing large groups of employees globally. Previously, Jane founded Virgin Touch, (a member of Richard Bransons Virgin Group), which she grew to in excess of 500 personnel with establishments at several major airports and overseas locations. Jane has also created many supply chain relationships and consulted for several of the companies."
    },
    {
      name: "Max Wyllie",
      role: "Chief Marketing Officer and Communications",
      image: "/assets/images/team/max-wyllie.jpg",
      bio: "Max is a Marketing & Content specialist responsible for Botanic's communications and Marketing strategy. Founder and Creative Director of Parallax Cinematics, a Video Production company based in UK and Germany, he has worked extensively within the fields of Corporate, Commercial, Documentary and Film. Previously leading projects for global charities, corporates and events. A recent Project and Documentary created by Max won a Purpose Award for, 'Best Public Awareness Cause Campaign'."
    },
    {
      name: "Deepanshu Singh",
      role: "Advisor",
      image: "/assets/images/team/deepanshu-singh.jpg",
      bio: "Deepanshu Singh is an advisor to Botanic Energy with an extensive research background in engineering. Deepanshu recently completed his PhD thesis at University of Oxford, during which he worked with Rolls-Royce, to understand the aerothermal performance of next generation low-emissions aircraft engines. Deepanshu has a bachelor's degree in mechanical engineering from IIT (Indian Institute of Technology) Delhi."
    },
    {
      name: "James Dimitriou",
      role: "Corporate Advisor",
      image: "/assets/images/team/james-dimitriou.jpg",
      bio: "James Dimitriou is an advisor to Botanic Energy with roughly 15 years experience in Engineering, Cleantech and Financial Sectors. James has over a decade spent developing, scaling up IP and products and bringing them to market. James has led numerous Innovate UK bids as a lead applicant and partner, spearheading the developmental and commercial strategy for the technologies and led project management, seeing technologies through from TRL1-7."
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
                    {member.role}
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
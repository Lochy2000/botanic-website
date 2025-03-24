
import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tags } from 'lucide-react';
import { cn } from '@/lib/utils';

const News = () => {
  const featuredArticle = {
    title: "Botanic Energy Secures Major Investment for Global Expansion",
    excerpt: "New funding will accelerate the deployment of our revolutionary thermoelectric systems in key markets across Europe, Africa, and Asia.",
    image: "/lovable-uploads/15a347db-5b38-4bc5-ac29-6239ca4aa65e.png",
    date: "May 15, 2023",
    author: "James Wilson",
    category: "Company News",
    link: "#"
  };
  
  const articles = [
    {
      title: "New Partnership Aims to Transform Cold Chain Distribution in Africa",
      excerpt: "Botanic Energy collaborates with leading logistics providers to implement sustainable refrigeration solutions across Sub-Saharan Africa.",
      image: "/lovable-uploads/be3fbece-99a1-46db-bcfe-136103aa1f65.png",
      date: "April 3, 2023",
      author: "Sarah Johnson",
      category: "Partnerships",
      link: "#"
    },
    {
      title: "Thermal Cladding Technology Receives Innovation Award",
      excerpt: "Our revolutionary building envelope system recognized for its contribution to energy efficiency and sustainable architecture.",
      image: "/lovable-uploads/f0bb58ba-4e45-40f9-a243-c232c9f0a9de.png",
      date: "March 18, 2023",
      author: "Michael Chen",
      category: "Awards",
      link: "#"
    },
    {
      title: "Case Study: Reducing Carbon Footprint in Commercial Refrigeration",
      excerpt: "How our solid-state technology helped a major retailer cut emissions by 60% while improving reliability and reducing operating costs.",
      image: "/lovable-uploads/be3fbece-99a1-46db-bcfe-136103aa1f65.png",
      date: "February 22, 2023",
      author: "Emma Thompson",
      category: "Case Studies",
      link: "#"
    },
    {
      title: "The Future of Sustainable Agriculture: Controlled Environment Solutions",
      excerpt: "Exploring how advanced thermal management is transforming indoor farming and food production worldwide.",
      image: "/lovable-uploads/0c84872f-d828-46c1-830f-f503220c2ec4.png",
      date: "January 30, 2023",
      author: "David Rodriguez",
      category: "Industry Insights",
      link: "#"
    },
    {
      title: "New Research Collaboration with Oxford University",
      excerpt: "Joint project aims to further develop next-generation thermodynamic materials for even greater efficiency gains.",
      image: "/lovable-uploads/365e5d7f-d199-4f31-a2a7-c7bd5ccff3b6.png",
      date: "January 12, 2023",
      author: "Laura Williams",
      category: "Research",
      link: "#"
    },
    {
      title: "Botanic Energy Expands Engineering Team as Demand Grows",
      excerpt: "New hires bring specialized expertise in thermal physics, sustainable design, and manufacturing optimization.",
      image: "/lovable-uploads/f0bb58ba-4e45-40f9-a243-c232c9f0a9de.png",
      date: "December 8, 2022",
      author: "James Wilson",
      category: "Company News",
      link: "#"
    }
  ];

  const categories = [
    { name: "All", count: 12 },
    { name: "Company News", count: 4 },
    { name: "Technology", count: 7 },
    { name: "Case Studies", count: 5 },
    { name: "Industry Insights", count: 6 },
    { name: "Research", count: 3 },
    { name: "Partnerships", count: 4 },
    { name: "Events", count: 2 }
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
            <div className="title-chip animate-fade-in">Stay Updated</div>
            <h1 className="hero-text mb-6 animate-fade-in">
              News & Insights
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 animate-fade-in">
              Discover the latest developments, innovations, and insights from the world of sustainable thermal management.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Article */}
      <SectionContainer className="pt-0 pb-16">
        <div className="glass-card overflow-hidden group animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <img 
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-botanicRed text-white text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8 md:p-10 flex flex-col">
              <div className="mb-4 flex items-center text-sm text-foreground/60 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center">
                  <Tags className="h-4 w-4 mr-1" />
                  <span>{featuredArticle.category}</span>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {featuredArticle.title}
              </h2>
              
              <p className="text-foreground/70 mb-8 flex-grow">
                {featuredArticle.excerpt}
              </p>
              
              <Link 
                to={featuredArticle.link}
                className="inline-flex items-center text-botanicBlue font-medium hover:underline"
              >
                Read full article <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* Articles & Sidebar */}
      <SectionContainer className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Column */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <div 
                  key={index}
                  className="glass-card overflow-hidden group hover:shadow-xl animate-fade-in"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-botanicDark text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-2 flex items-center text-sm text-foreground/60 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">
                      {article.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <Link 
                      to={article.link}
                      className="inline-flex items-center text-botanicBlue font-medium hover:underline"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-botanicRed text-white font-medium">
                  1
                </span>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-botanicLight transition-colors"
                >
                  2
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-botanicLight transition-colors"
                >
                  3
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-botanicLight transition-colors"
                >
                  4
                </a>
                <span className="w-10 h-10 flex items-center justify-center">
                  ...
                </span>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8 animate-fade-in">
            {/* Search */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full border border-foreground/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-botanicBlue"
                />
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  aria-label="Search"
                >
                  <ArrowRight className="h-4 w-4 text-foreground/50" />
                </button>
              </div>
            </div>
            
            {/* Categories */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className={cn(
                        "flex items-center justify-between py-2 px-3 rounded-lg transition-colors",
                        index === 0 
                          ? "bg-botanicRed/10 text-botanicRed font-medium" 
                          : "hover:bg-foreground/5"
                      )}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-foreground/50">({category.count})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="text-foreground/70 mb-4">
                Stay updated with our latest news and insights by subscribing to our newsletter.
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full border border-foreground/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-botanicBlue"
                />
                <button 
                  type="submit" 
                  className="w-full bg-botanicBlue hover:bg-botanicBlue/90 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* CTA Section */}
      <CTA 
        title="Have a Story to Share?"
        subtitle="If you'd like to collaborate on content or share insights about sustainable thermal management, we'd love to hear from you."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default News;

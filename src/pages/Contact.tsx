import Layout from '@/components/Layout';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 xs:pt-28 sm:pt-32 md:pt-40 pb-16 xs:pb-20 sm:pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-botanicLight">
          <div className="absolute inset-0 bg-gradient-to-r from-botanicRed/5 to-botanicBlue/5" />
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-botanicBlue/10 rounded-full filter blur-3xl animate-pulse-subtle" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-botanicRed/10 rounded-full filter blur-3xl animate-pulse-subtle" />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="title-chip animate-fade-in">Get in Touch</div>
            <h1 className="hero-text mb-3 xs:mb-4 sm:mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-foreground/70 mb-6 sm:mb-8 md:mb-10 animate-fade-in max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto px-2 xs:px-0">
              Have questions or interested in our technology? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <SectionContainer className="py-8 xs:py-10 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info Card */}
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">Contact Information</h2>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-botanicRed/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-botanicRed" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Address</h3>
                    <p className="text-foreground/70">
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-botanicBlue/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-botanicBlue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-foreground/70">
                      info@botanicenergy.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-botanicDark/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-botanicDark" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Working Hours</h3>
                    <p className="text-foreground/70">
                      Monday - Friday: 9:00 AM - 5:30 PM<br />
                      Weekend: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get in Touch Card */}
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">Get in Touch</h2>
              <p className="text-foreground/70 mb-6">
                Whether you're interested in our technology, exploring partnership opportunities, or have questions about our solutions, we're here to help.
              </p>
              <p className="text-foreground/70 mb-6">
                Reach out to us via email and our team will get back to you as soon as possible.
              </p>
              <a
                href="mailto:info@botanicenergy.com"
                className="inline-flex items-center bg-gradient-to-r from-botanicRed to-botanicPurple text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Map Section */}
      <SectionContainer className="bg-botanicLight py-8 xs:py-10 sm:py-12">
        <SectionTitle
          title="Visit Our Office"
          subtitle="Based in the United Kingdom, we're committed to revolutionizing thermal management globally."
        />

        <div className="glass-card rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl h-60 sm:h-72 md:h-80 lg:h-96 animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339848557!2d-0.24168108072440222!3d51.52855824103479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1631541234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Botanic Energy Location"
          ></iframe>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Contact;

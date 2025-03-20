
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Film, 
  Image, 
  Megaphone, 
  Users, 
  PenTool, 
  ArrowRight 
} from 'lucide-react';
import Hero from '@/components/Hero';
import AnimatedHeading from '@/components/AnimatedHeading';
import ScrollAnimation from '@/components/ScrollAnimation';
import ServiceCard from '@/components/ServiceCard';

const Index = () => {
  // Services data
  const services = [
    {
      icon: Film,
      title: 'Video Production',
      description: 'Professional video production services for social media, ads, and more.'
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Eye-catching graphics, photos, and visual content for your brand.'
    },
    {
      icon: Megaphone,
      title: 'Social Media',
      description: 'Strategic social media content to engage your audience and build community.'
    },
    {
      icon: Users,
      title: 'Audience Growth',
      description: 'Data-driven strategies to grow your audience across platforms.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-medium text-primary mb-3">Our Services</span>
              <AnimatedHeading 
                text="Transforming Vision into Reality" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive suite of content creation services designed to help your brand 
                stand out in today's competitive digital landscape.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 100}>
                <ServiceCard 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description} 
                />
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center font-medium text-primary hover:underline"
            >
              Explore All Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="rounded-2xl overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                  alt="Content creation team" 
                  className="w-full h-auto" 
                  initial={{ scale: 1.1, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <span className="inline-block text-sm font-medium text-primary mb-3">About Us</span>
              <AnimatedHeading 
                text="Passionate About Creating Impactful Content" 
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <p className="text-muted-foreground mb-6">
                We're a team of passionate content creators, videographers, designers, and strategists 
                dedicated to helping brands tell their stories in the most engaging ways possible.
              </p>
              <p className="text-muted-foreground mb-8">
                With years of experience across various industries, we understand what resonates with 
                audiences and how to craft content that drives results.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center">
                Learn More About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-medium text-primary mb-3">Our Packages</span>
              <AnimatedHeading 
                text="Content Solutions for Every Need" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our carefully crafted packages or get in touch for a custom solution that perfectly fits your brand's unique requirements.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="glass-card hover-lift">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic Package */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-border">
                  <h3 className="text-xl font-semibold mb-2">Basic Package</h3>
                  <p className="text-muted-foreground mb-4">Perfect for businesses just starting with content.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <PenTool size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>5 Social Media Posts</span>
                    </li>
                    <li className="flex items-start">
                      <PenTool size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>3 Stories</span>
                    </li>
                    <li className="flex items-start">
                      <PenTool size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Basic Content Strategy</span>
                    </li>
                  </ul>
                </div>
                
                {/* Standard Package */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-border">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">Popular</div>
                  <h3 className="text-xl font-semibold mb-2">Standard Package</h3>
                  <p className="text-muted-foreground mb-4">Comprehensive content for growing brands.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <PenTool size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>10 Social Media Posts</span>
                    </li>
                    <li className="flex items-start">
                      <PenTool size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>5 Stories + 2 Reels</span>
                    </li>
                    <li className="flex items-start">
                      <PenTool size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Content Calendar</span>
                    </li>
                  </ul>
                </div>
                
                {/* Premium Package */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Package</h3>
                  <p className="text-muted-foreground mb-4">Full-service content solution for businesses.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <PenTool size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>15 Social Media Posts</span>
                    </li>
                    <li className="flex items-start">
                      <PenTool size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>10 Stories + 4 Reels</span>
                    </li>
                    <li className="flex items-start">
                      <PenTool size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>SEO Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-border mt-6">
                <Link to="/packages" className="btn-primary">
                  View All Packages <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedHeading 
                text="Ready to Transform Your Content Strategy?" 
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <p className="text-muted-foreground mb-8">
                Let's collaborate to create content that resonates with your audience, 
                reflects your brand values, and drives meaningful engagement.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Get in Touch <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Index;

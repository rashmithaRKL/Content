
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Film, 
  Image, 
  LineChart, 
  MessageCircle, 
  Palette, 
  PenTool, 
  Scissors, 
  Search,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '@/components/AnimatedHeading';
import ScrollAnimation from '@/components/ScrollAnimation';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  // Services data
  const services = [
    {
      icon: Film,
      title: 'Video Production',
      description: 'Professional video creation for social media, promotional content, and product showcases.',
      details: [
        'High-quality video shooting and editing',
        'Motion graphics and animations',
        'Video optimization for various platforms',
        'Script writing and storyboarding'
      ]
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Eye-catching visuals that enhance your brand presence and engage your audience.',
      details: [
        'Professional photography',
        'Custom illustrations and graphics',
        'Infographics and data visualization',
        'Social media visual assets'
      ]
    },
    {
      icon: PenTool,
      title: 'Graphic Design',
      description: 'Stunning designs that communicate your brand message effectively and memorably.',
      details: [
        'Brand identity and logo design',
        'Marketing materials and collateral',
        'Social media templates',
        'Print and digital design'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Social Media Content',
      description: 'Strategic content creation that boosts engagement and grows your social presence.',
      details: [
        'Platform-specific content creation',
        'Social media calendar planning',
        'Engagement-focused copywriting',
        'Trending content integration'
      ]
    },
    {
      icon: LineChart,
      title: 'Content Strategy',
      description: 'Data-driven content planning to achieve your business objectives and reach your audience.',
      details: [
        'Content audit and gap analysis',
        'Content calendar development',
        'Audience persona creation',
        'Performance tracking and optimization'
      ]
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Content optimized to improve visibility and drive organic traffic to your platforms.',
      details: [
        'Keyword research and integration',
        'SEO-friendly content creation',
        'Meta description optimization',
        'Content structure improvement'
      ]
    },
    {
      icon: Scissors,
      title: 'Video Editing',
      description: 'Professional editing services to transform raw footage into compelling content.',
      details: [
        'Reels and shorts creation',
        'Color grading and correction',
        'Sound design and mixing',
        'Special effects and transitions'
      ]
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Comprehensive branding services to establish and strengthen your unique identity.',
      details: [
        'Brand strategy development',
        'Visual identity creation',
        'Brand voice and messaging',
        'Brand guidelines documentation'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span 
              className="inline-block text-sm font-medium text-primary mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Content Creation <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive content solutions to elevate your brand's digital presence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 100}>
                <div className="glass-card hover-lift h-full">
                  <div className="mb-6 inline-flex p-3 rounded-full bg-primary/10 text-primary">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="border-t border-border pt-6 mt-auto">
                    <h4 className="font-medium mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight size={14} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-medium text-primary mb-3">Our Process</span>
              <AnimatedHeading 
                text="How We Create Amazing Content" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our strategic approach ensures we deliver content that connects with your audience and achieves your goals.
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative">
            {/* Process steps */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  number: '01',
                  title: 'Discovery',
                  description: 'We start by understanding your brand, audience, and goals.'
                },
                {
                  number: '02',
                  title: 'Strategy',
                  description: 'We develop a customized content plan aligned with your objectives.'
                },
                {
                  number: '03',
                  title: 'Creation',
                  description: 'Our team brings your content to life with creativity and precision.'
                },
                {
                  number: '04',
                  title: 'Optimization',
                  description: 'We measure performance and refine content for maximum impact.'
                }
              ].map((step, index) => (
                <ScrollAnimation key={step.number} delay={index * 150}>
                  <div className="glass-card hover-lift text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mx-auto mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedHeading 
                text="Ready to Elevate Your Content?" 
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <p className="text-muted-foreground mb-8">
                Explore our packages to find the perfect content solution for your brand, or contact us for a custom quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/packages" className="btn-primary inline-flex items-center">
                  View Packages <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/contact" className="btn-secondary inline-flex items-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Services;

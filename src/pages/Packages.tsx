
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '@/components/AnimatedHeading';
import ScrollAnimation from '@/components/ScrollAnimation';
import PackageCard from '@/components/PackageCard';

const Packages = () => {
  // Packages data
  const packages = [
    {
      title: 'Basic Package',
      price: '$499',
      description: 'Social Media Content Package for businesses just starting with content marketing.',
      features: [
        '5 Social Media Posts',
        '3 Stories',
        'Basic Content Strategy',
        'Platform Optimization',
        '1 Revision per Post'
      ],
      popular: false
    },
    {
      title: 'Standard Package',
      price: '$899',
      description: 'Video Editing Package perfect for growing brands needing professional content.',
      features: [
        '3 Short-form Videos (Reels/Shorts)',
        '2 Long-form Videos (60-sec)',
        'Basic Video Effects',
        'Music & Sound Design',
        '2 Revisions per Video'
      ],
      popular: true
    },
    {
      title: 'Premium Package',
      price: '$1,499',
      description: 'Full Content Strategy Package for established brands seeking comprehensive solutions.',
      features: [
        '10 Social Media Posts',
        '5 Stories',
        '3 Reels/Short Videos',
        'SEO Optimization',
        'Content Calendar',
        'Performance Analytics'
      ],
      popular: false
    },
    {
      title: 'YouTube Growth',
      price: '$1,299',
      description: 'Specialized package to boost your YouTube presence and audience growth.',
      features: [
        '4 Thumbnail Designs',
        '2 Video Edits (10-15 min)',
        'YouTube SEO Optimization',
        'Channel Art Design',
        'End Screen Templates',
        'Video Description Optimization'
      ],
      popular: false
    },
    {
      title: 'Personal Branding',
      price: '$1,999',
      description: 'Complete personal branding package to establish your professional online presence.',
      features: [
        'Brand Strategy Development',
        'Visual Identity Creation',
        'Social Media Setup (3 platforms)',
        '5 Brand-aligned Content Pieces',
        'Professional Bio Writing',
        'Brand Guidelines Document'
      ],
      popular: false
    },
    {
      title: 'Enterprise Solution',
      price: 'Custom',
      description: 'Tailored content solutions for larger organizations with specific requirements.',
      features: [
        'Custom Content Strategy',
        'Multi-platform Content Creation',
        'Dedicated Content Manager',
        'Monthly Performance Reports',
        'Quarterly Strategy Reviews',
        'Priority Support'
      ],
      popular: false
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
              Our Packages
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Content Solutions for <span className="text-gradient">Every Need</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Choose from our carefully crafted packages or get in touch for a custom solution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollAnimation key={pkg.title} delay={index * 100}>
                <PackageCard
                  title={pkg.title}
                  price={pkg.price}
                  description={pkg.description}
                  features={pkg.features}
                  popular={pkg.popular}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-medium text-primary mb-3">FAQ</span>
              <AnimatedHeading 
                text="Frequently Asked Questions" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about our packages and services.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How long does it take to deliver a package?',
                answer: 'Delivery timelines vary depending on the package complexity. Basic packages are typically delivered within 7-10 business days, while Premium and Enterprise solutions may take 2-3 weeks. We'll provide a specific timeline during our initial consultation.'
              },
              {
                question: 'Can I customize a package to fit my specific needs?',
                answer: 'Absolutely! While our pre-designed packages work for most clients, we understand that every brand is unique. Contact us to discuss your specific requirements, and we'll create a tailored solution just for you.'
              },
              {
                question: 'How many revisions are included in each package?',
                answer: 'The number of revisions varies by package. Basic packages include 1-2 revisions per deliverable, Standard packages include 2-3 revisions, and Premium/Enterprise packages offer more extensive revision options. Additional revisions can be purchased if needed.'
              },
              {
                question: 'Do you offer discounts for long-term collaborations?',
                answer: 'Yes, we offer special pricing for clients who commit to 3, 6, or 12-month content plans. Long-term partnerships allow us to develop more strategic, cohesive content and provide better value for our clients.'
              },
              {
                question: 'What information do you need from me to get started?',
                answer: 'To begin, we'll need your brand guidelines, target audience information, content goals, any existing content examples, and access to relevant platforms (if applicable). We'll provide a detailed onboarding document once you select a package.'
              }
            ].map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="glass-card hover-lift mb-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedHeading 
                text="Ready to Get Started?" 
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <p className="text-muted-foreground mb-8">
                Contact us today to discuss your content needs and find the perfect package for your brand.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Contact Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Packages;

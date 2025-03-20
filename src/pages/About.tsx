
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '@/components/AnimatedHeading';
import ScrollAnimation from '@/components/ScrollAnimation';

const About = () => {
  // Team members data
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Sarah Parker',
      role: 'Content Strategist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Video Producer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Priya Sharma',
      role: 'Social Media Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80'
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
              About Us
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Passionate Content Creators
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We believe in the power of storytelling to connect, inspire, and transform.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative">
                <motion.div 
                  className="rounded-2xl overflow-hidden"
                  initial={{ scale: 1.05, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Our team in action" 
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.15, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <span className="inline-block text-sm font-medium text-primary mb-3">Our Story</span>
              <AnimatedHeading 
                text="Creating Impactful Content Since 2015" 
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <p className="text-muted-foreground mb-6">
                Our journey began with a simple mission: to help brands tell their stories in 
                authentic and engaging ways. What started as a small team of passionate creators 
                has since grown into a full-service content creation agency.
              </p>
              <p className="text-muted-foreground mb-6">
                We've worked with startups, established businesses, and everything in between, 
                consistently delivering content that resonates with audiences and drives results.
              </p>
              <p className="text-muted-foreground mb-8">
                Our approach combines creativity with strategy, ensuring that every piece of 
                content we create serves a purpose and aligns with our clients' overall business goals.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-medium text-primary mb-3">Our Values</span>
              <AnimatedHeading 
                text="What Drives Our Creative Process" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide our work and ensure we deliver exceptional content for every client.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Creativity',
                description: 'We think outside the box to create content that stands out in today\'s crowded digital landscape.'
              },
              {
                title: 'Quality',
                description: 'We never compromise on quality, ensuring every piece of content meets our high standards.'
              },
              {
                title: 'Strategy',
                description: 'We develop content with purpose, always aligned with your broader business goals.'
              },
              {
                title: 'Authenticity',
                description: 'We believe in creating content that feels genuine and resonates with your audience.'
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of trends and constantly explore new formats and techniques.'
              },
              {
                title: 'Partnership',
                description: 'We see ourselves as an extension of your team, collaborating closely throughout the process.'
              }
            ].map((value, index) => (
              <ScrollAnimation key={value.title} delay={index * 100}>
                <div className="glass-card hover-lift h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="text-primary" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-medium text-primary mb-3">Our Team</span>
              <AnimatedHeading 
                text="Meet the Creative Minds" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse team brings together expertise from various creative disciplines.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <ScrollAnimation key={member.name} delay={index * 100}>
                <motion.div 
                  className="glass-card hover-lift overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
                    <motion.img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
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
                text="Ready to Create Something Amazing?" 
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <p className="text-muted-foreground mb-8">
                Let's work together to bring your content vision to life. Our team is ready to help you
                develop a content strategy that resonates with your audience.
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

export default About;

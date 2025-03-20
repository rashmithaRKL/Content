
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import AnimatedHeading from '@/components/AnimatedHeading';
import ScrollAnimation from '@/components/ScrollAnimation';

const Contact = () => {
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
              Get in Touch
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Reach out to discuss your content needs or to ask any questions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation>
              <ContactForm />
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation delay={200}>
              <div className="space-y-8">
                <div className="glass-card">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Visit Us</h4>
                        <p className="text-muted-foreground">
                          123 Content Street, Creative City, CO 12345<br />
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email Us</h4>
                        <p className="text-muted-foreground">
                          <a href="mailto:hello@creator.com" className="hover:text-primary transition-colors">
                            hello@creator.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Call Us</h4>
                        <p className="text-muted-foreground">
                          <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                            +1 (234) 567-890
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9am - 6pm<br />
                          Saturday: 10am - 4pm<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card">
                  <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, label: 'Facebook' },
                      { icon: Twitter, label: 'Twitter' },
                      { icon: Instagram, label: 'Instagram' },
                      { icon: Youtube, label: 'Youtube' },
                      { icon: Linkedin, label: 'LinkedIn' }
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href="#"
                        className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-16">
        <div className="container mx-auto px-6 mb-16">
          <ScrollAnimation>
            <AnimatedHeading 
              text="Find Us" 
              className="text-3xl font-bold mb-6 text-center"
            />
          </ScrollAnimation>
        </div>
        <ScrollAnimation>
          <div className="h-[400px] w-full bg-secondary">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594994064!2d-74.25987368715491!3d40.69767006766623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635172364981!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Contact;

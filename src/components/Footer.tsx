
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 text-white/80">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-6">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">Creator</Link>
            <p className="text-sm leading-relaxed opacity-75 mt-4">
              Transforming ideas into engaging content. 
              Elevate your brand with our professional content creation services.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Packages', 'Contact'].map((item) => (
                <li key={item} className="group">
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="inline-flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Social Media Content',
                'Video Editing',
                'Branding & Graphics',
                'Content Strategy',
                'SEO Optimization'
              ].map((service) => (
                <li key={service} className="group">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-4 text-white/70">
              <li>123 Content Street, Creative City, CO 12345</li>
              <li>
                <a href="mailto:hello@creator.com" className="hover:text-white transition-colors">
                  hello@creator.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 px-6 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Creator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

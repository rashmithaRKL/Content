
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <motion.div 
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Your email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="Message subject"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            placeholder="Your message"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="btn-primary w-full"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

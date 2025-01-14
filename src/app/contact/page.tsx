"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiMessageSquare, FiUser, FiSend, 
  FiGlobe, FiClock, FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="relative bg-[#0A0A0F] min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            times: [0, 0.5, 1]
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 0, 180]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            times: [0, 0.5, 1]
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-2 rounded-full border border-blue-500/20 text-blue-400 text-sm
                bg-blue-500/10 backdrop-blur-sm">
                Get in Touch
              </span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl font-bold mt-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-white">Let&apos;s Start a</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r 
                from-blue-500 via-purple-500 to-pink-500">
                Conversation
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have a question or want to learn more? We&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12
                          text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                          transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-3.5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12
                          text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                          transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Subject</label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12
                          text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                          transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4
                        text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                        transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500
                      text-white font-medium relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Send Message
                      <FiSend className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* Office Locations */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {[
                    {
                      city: "San Francisco",
                      address: "123 Tech Street, CA 94105",
                      phone: "+1 (555) 123-4567"
                    },
                    {
                      city: "London",
                      address: "456 Innovation Ave, EC2A 1AB",
                      phone: "+44 20 7123 4567"
                    }
                  ].map((office, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="mt-1">
                        <FiMapPin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{office.city}</h4>
                        <p className="text-gray-400 mt-1">{office.address}</p>
                        <p className="text-gray-400 mt-1">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <FiClock className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-white">Monday - Friday</p>
                      <p className="text-gray-400">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FiClock className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-white">Saturday</p>
                      <p className="text-gray-400">10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: FiLinkedin, label: "LinkedIn" },
                    { icon: FiTwitter, label: "Twitter" },
                    { icon: FiGithub, label: "GitHub" },
                    { icon: FiGlobe, label: "Website" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center 
                        justify-center text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

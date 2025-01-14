"use client";

import { useState, useEffect } from "react";
import {
  FiZap,
  FiLayout,
  FiSliders,
  FiArrowRight,
  FiCode,
  FiServer,
  FiBox,
  FiCpu,
  FiGlobe,
  FiShield,
  FiTrendingUp,
  FiDatabase,
  FiUsers,
  FiAward,
  FiMessageCircle,
  FiMenu,
  FiCheck,
  FiGithub,
  FiCloud,
  FiCreditCard,
} from "react-icons/fi";
import { motion, useAnimation, Variants, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
  }, [controls]);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#12121f] overflow-hidden">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              MyBrand
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <FiMenu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section with adjusted padding for fixed header */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/80 to-[#0A0A0F]"></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              transition: { duration: 30, repeat: Infinity, ease: "linear" }
            }}
            className="absolute -top-1/2 left-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-transparent rounded-full filter blur-[120px]"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              transition: { duration: 40, repeat: Infinity, ease: "linear" }
            }}
            className="absolute -bottom-1/2 left-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent rounded-full filter blur-[120px]"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto flex flex-col items-center text-center"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 font-semibold text-lg mb-6 tracking-wide bg-cyan-500/10 px-6 py-2 rounded-full inline-block"
            >
              WELCOME TO THE FUTURE
            </motion.span>

            <h1 className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 mb-6 leading-tight">
              Craft Digital Dreams
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-3xl leading-relaxed font-light"
            >
              Where imagination meets technology to create extraordinary digital
              experiences that redefine possibilities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="group relative px-10 py-5 rounded-xl text-white font-semibold text-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Get Started
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={22} />
                </span>
              </button>
              
              <button className="group relative px-10 py-5 rounded-xl text-white font-semibold text-lg overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-sm border border-white/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Watch Demo</span>
              </button>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { icon: FiZap, text: "Lightning Fast" },
                { icon: FiShield, text: "Secure" },
                { icon: FiLayout, text: "Responsive" },
                { icon: FiCode, text: "Modern Tech" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3 p-4">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-32 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerChildren}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-lg mb-3 block tracking-wide bg-cyan-500/10 px-6 py-2 rounded-full inline-block">
              FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Transform Your Digital World
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Unleash the power of cutting-edge technology combined with
              stunning design to create remarkable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiZap,
                title: "Lightning Fast",
                description:
                  "Experience blazing-fast performance with our optimized architecture.",
              },
              {
                icon: FiLayout,
                title: "Stunning Design",
                description:
                  "Meticulously crafted interfaces that blend aesthetics with functionality.",
              },
              {
                icon: FiSliders,
                title: "Customizable",
                description:
                  "Adapt every element to perfectly align with your brand vision.",
              },
              {
                icon: FiShield,
                title: "Enterprise Security",
                description:
                  "Advanced security features to protect your data and ensure peace of mind.",
              },
              {
                icon: FiTrendingUp,
                title: "Analytics",
                description:
                  "Comprehensive dashboard to track performance and make data-driven decisions.",
              },
              {
                icon: FiDatabase,
                title: "Scalable",
                description:
                  "Built on cloud architecture that grows with your business needs.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  <feature.icon className="text-white w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { number: "99%", label: "Customer Satisfaction" },
            { number: "1M+", label: "Active Users" },
            { number: "150+", label: "Team Members" },
            { number: "50+", label: "Countries Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-b from-white/[0.1] to-transparent border border-white/[0.1] hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <motion.h3
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2"
                variants={fadeIn}
                animate="visible"
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <motion.span
              variants={fadeIn}
              animate="visible"
              className="text-cyan-400 font-semibold text-lg mb-3 block tracking-wide bg-cyan-500/10 px-6 py-2 rounded-full inline-block"
            >
              TESTIMONIALS
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "The most innovative digital platform we've ever used. It transformed our business.",
                author: "John Smith",
                role: "CEO, TechCorp",
              },
              {
                quote: "Exceptional performance and stunning design. Our customers love the interface.",
                author: "Sarah Johnson",
                role: "Product Manager, StartupX",
              },
              {
                quote: "The support team goes above and beyond. They're committed to our success.",
                author: "Mike Brown",
                role: "CTO, InnovateNow",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.03, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-b from-white/[0.1] to-transparent border border-white/[0.1] hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 relative"
              >
                <FiMessageCircle className="text-cyan-400 w-8 h-8 mb-4" />
                <p className="text-gray-300 text-sm mb-6 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="text-white font-semibold text-base">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-32 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-lg mb-3 block tracking-wide bg-cyan-500/10 px-6 py-2 rounded-full inline-block">
              PRICING
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                features: ["5 Projects", "Basic Analytics", "24/7 Support"],
              },
              {
                name: "Pro",
                price: "$99",
                features: ["Unlimited Projects", "Advanced Analytics", "Priority Support"],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Custom Solutions", "Dedicated Support", "SLA Agreement"],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-cyan-500/10 to-purple-500/10 border-cyan-500/30"
                    : "bg-white/[0.03] border-white/[0.05]"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg">/month</span>}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <FiCheck className="text-cyan-400 mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section - Improved */}
      <section className="container mx-auto px-4 py-32 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-lg mb-3 block tracking-wide bg-cyan-500/10 px-6 py-2 rounded-full inline-block">
              INTEGRATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamlessly Connect Your Tools
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Integrate with your favorite tools and services to streamline your workflow
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: "GitHub", 
                icon: FiGithub,
                description: "Version Control"
              },
              { 
                name: "Slack", 
                icon: FiMessageCircle,
                description: "Team Communication"
              },
              { 
                name: "AWS", 
                icon: FiCloud,
                description: "Cloud Infrastructure"
              },
              { 
                name: "Docker", 
                icon: FiBox,
                description: "Containerization"
              },
              { 
                name: "MongoDB", 
                icon: FiDatabase,
                description: "Database"
              },
              { 
                name: "Redis", 
                icon: FiCpu,
                description: "Caching"
              },
              { 
                name: "Stripe", 
                icon: FiCreditCard,
                description: "Payments"
              },
              { 
                name: "Google Cloud", 
                icon: FiGlobe,
                description: "Cloud Services"
              },
            ].map((integration, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-b from-white/[0.05] to-transparent group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300">
                    <integration.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                    <p className="text-gray-400 text-sm">{integration.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="container mx-auto px-4 py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-b from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and transform your digital experience today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Get Started Now
              </button>
              <button className="px-8 py-4 bg-white/[0.05] rounded-xl text-white font-semibold text-lg hover:bg-white/[0.1] transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

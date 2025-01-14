"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FiServer, FiShield, FiGlobe, FiDatabase, FiCloud, FiArrowRight,
  FiLayers, FiUsers, FiTarget
} from "react-icons/fi";
import { useState } from 'react';

type ColorKey = 'purple' | 'blue' | 'cyan' | 'pink' | 'green' | 'yellow';

type ColorConfig = {
  border: string;
  text: string;
  bg: string;
  hover: string;
  gradientFrom: string;
  gradientTo: string;
};

type ColorMap = {
  [key in ColorKey]: ColorConfig;
};

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  color: ColorKey;
};

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  price: string;
  color: ColorKey;
};

type EnterpriseSolution = {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  color: ColorKey;
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('cloud');
  const { scrollYProgress } = useScroll();

  const colorMap: ColorMap = {
    purple: {
      border: 'border-purple-500/20',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      hover: 'hover:border-purple-500/40',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500'
    },
    blue: {
      border: 'border-blue-500/20',
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      hover: 'hover:border-blue-500/40',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500'
    },
    cyan: {
      border: 'border-cyan-500/20',
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      hover: 'hover:border-cyan-500/40',
      gradientFrom: 'from-cyan-500',
      gradientTo: 'to-blue-500'
    },
    pink: {
      border: 'border-pink-500/20',
      text: 'text-pink-400',
      bg: 'bg-pink-500/10',
      hover: 'hover:border-pink-500/40',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-purple-500'
    },
    green: {
      border: 'border-emerald-500/20',
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      hover: 'hover:border-emerald-500/40',
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-cyan-500'
    },
    yellow: {
      border: 'border-amber-500/20',
      text: 'text-amber-400',
      bg: 'bg-amber-500/10',
      hover: 'hover:border-amber-500/40',
      gradientFrom: 'from-amber-500',
      gradientTo: 'to-orange-500'
    }
  };

  const categories: Category[] = [
    { id: 'cloud', label: 'Cloud Services', icon: FiCloud, color: 'blue' },
    { id: 'security', label: 'Security', icon: FiShield, color: 'purple' },
    { id: 'data', label: 'Data Services', icon: FiDatabase, color: 'cyan' },
    { id: 'consulting', label: 'Consulting', icon: FiUsers, color: 'pink' }
  ];

  const services: Service[] = [
    {
      icon: FiServer,
      title: "Managed Infrastructure",
      description: "Fully managed cloud infrastructure with 24/7 monitoring and support",
      features: ["Auto-scaling", "Load Balancing", "Backup & Recovery"],
      price: "$299",
      color: "purple"
    },
    {
      icon: FiShield,
      title: "Security Suite",
      description: "Enterprise-grade security with advanced threat protection",
      features: ["Threat Detection", "DDoS Protection", "Compliance"],
      price: "$399",
      color: "blue"
    },
    {
      icon: FiDatabase,
      title: "Data Analytics",
      description: "Advanced analytics and insights for your business data",
      features: ["Real-time Analytics", "Custom Dashboards", "AI Insights"],
      price: "$499",
      color: "cyan"
    },
    {
      icon: FiGlobe,
      title: "Global CDN",
      description: "High-performance content delivery network",
      features: ["Edge Caching", "SSL/TLS", "Analytics"],
      price: "$199",
      color: "pink"
    },
    {
      icon: FiUsers,
      title: "Expert Consulting",
      description: "Strategic consulting for digital transformation",
      features: ["Strategy Planning", "Implementation", "Training"],
      price: "Custom",
      color: "green"
    },
    {
      icon: FiTarget,
      title: "Optimization",
      description: "Performance optimization and cost management",
      features: ["Cost Analysis", "Performance Tuning", "Recommendations"],
      price: "$299",
      color: "yellow"
    }
  ];

  const enterpriseSolutions: EnterpriseSolution[] = [
    {
      icon: FiLayers,
      title: "Custom Development",
      description: "Bespoke solutions built for your enterprise needs",
      benefits: ["Tailored Architecture", "Dedicated Team", "Full Support"],
      color: "blue"
    },
    {
      icon: FiTarget,
      title: "Strategic Planning",
      description: "Long-term technology strategy and roadmap",
      benefits: ["Tech Assessment", "Growth Planning", "Risk Management"],
      color: "purple"
    },
    {
      icon: FiUsers,
      title: "Dedicated Support",
      description: "24/7 enterprise-grade support and maintenance",
      benefits: ["Priority Support", "SLA Guarantee", "Expert Team"],
      color: "cyan"
    }
  ];

  return (
    <main className="relative bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Optimized Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
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
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
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
              <span className="px-4 py-2 rounded-full border border-purple-500/20 text-purple-400 text-sm
                bg-purple-500/10 backdrop-blur-sm">
                Enterprise Solutions
              </span>
            </motion.div>
            
            <motion.h1
              className="text-6xl md:text-7xl font-bold mt-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-white">Powerful Services</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-500 to-cyan-500">
                For Every Need
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From cloud infrastructure to security solutions, we provide enterprise-grade
              services to power your digital transformation journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`group px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300
                  ${activeTab === category.id 
                    ? `bg-white/10 ${colorMap[category.color].border}` 
                    : 'bg-white/5 border-white/10'} 
                  border ${colorMap[category.color].hover}`}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <category.icon className={`w-5 h-5 
                    ${activeTab === category.id ? colorMap[category.color].text : 'text-gray-400'}`} />
                  <span className={`font-medium
                    ${activeTab === category.id ? 'text-white' : 'text-gray-400'}`}>
                    {category.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`group relative p-8 rounded-2xl bg-white/5 ${colorMap[service.color].border}
                  hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl ${colorMap[service.color].bg} flex items-center 
                    justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <service.icon className={`w-8 h-8 ${colorMap[service.color].text}`} />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <div 
                      key={fIndex}
                      className={`px-4 py-2 rounded-lg ${colorMap[service.color].bg} ${colorMap[service.color].border}
                        ${colorMap[service.color].hover} transition-colors duration-300`}
                    >
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">Starting at</div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                  </div>
                  <motion.button
                    className={`px-4 py-2 rounded-xl ${colorMap[service.color].bg} ${colorMap[service.color].text}
                      hover:bg-opacity-30 transition-colors duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full border border-blue-500/20 text-blue-400 text-sm
              bg-blue-500/10 backdrop-blur-sm">
              Enterprise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-4">
              Custom Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored enterprise solutions designed for your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {enterpriseSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className={`group p-8 rounded-2xl bg-white/5 ${colorMap[solution.color].border}
                  hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl ${colorMap[solution.color].bg} flex items-center 
                    justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <solution.icon className={`w-8 h-8 ${colorMap[solution.color].text}`} />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-8">{solution.description}</p>
                <div className="space-y-3">
                  {solution.benefits.map((benefit, bIndex) => (
                    <div 
                      key={bIndex}
                      className={`px-4 py-2 rounded-lg ${colorMap[solution.color].bg} ${colorMap[solution.color].border}
                        ${colorMap[solution.color].hover} transition-colors duration-300`}
                    >
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500
                text-white font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 
                transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                Contact Sales
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

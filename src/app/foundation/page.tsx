"use client";

import { motion } from "framer-motion";
import { FiZap, FiLayout, FiShield, FiCode, FiServer, FiBox, 
  FiArrowRight, FiActivity, FiDatabase, FiCloud, FiGlobe, FiCpu } from "react-icons/fi";
import { useState } from 'react';

export default function Foundation() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="relative bg-[#0A0A0F]">
      {/* Floating Navigation */}
      <nav className="fixed top-1/2 right-8 -translate-y-1/2 z-50 hidden lg:block">
        <div className="space-y-4">
          {['Overview', 'Architecture', 'Features', 'Performance'].map((item, index) => (
            <motion.button
              key={item}
              className={`w-3 h-3 rounded-full transition-all duration-300 relative group
                ${activeTab === item ? 'bg-blue-500' : 'bg-white/20'}`}
              onClick={() => setActiveTab(item)}
              whileHover={{ scale: 1.2 }}
            >
              <span className="absolute right-full mr-4 py-1 px-2 rounded-full bg-white/5 backdrop-blur-sm
                text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item}
              </span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 perspective-1000">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] transform-style-3d rotate-x-60"></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["50%", "40%", "50%"]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 270, 180, 90, 0],
              borderRadius: ["40%", "50%", "40%"]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Hero Content */}
            <div className="text-center mb-16">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="px-4 py-2 rounded-full border border-blue-500/20 text-blue-400 text-sm
                  bg-blue-500/10 backdrop-blur-sm">
                  Next Generation Platform
                </span>
              </motion.div>
              
              <motion.h1
                className="text-7xl md:text-8xl font-bold mt-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="block text-white">Build for the</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r 
                  from-blue-500 via-purple-500 to-cyan-500">
                  Future
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Experience the next evolution in cloud architecture. Built with cutting-edge
                technology for unparalleled performance, security, and scalability.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
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
                    Get Started
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  className="group px-8 py-4 rounded-xl border border-white/10 text-white font-medium
                    hover:bg-white/5 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    View Documentation
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Feature Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                {
                  icon: FiActivity,
                  title: "High Performance",
                  description: "Sub-millisecond response times",
                  color: "blue"
                },
                {
                  icon: FiBox,
                  title: "Scalable",
                  description: "Automatic scaling on demand",
                  color: "purple"
                },
                {
                  icon: FiShield,
                  title: "Secure",
                  description: "Enterprise-grade security",
                  color: "cyan"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`group p-6 rounded-2xl bg-white/5 border border-${feature.color}-500/20
                    hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center 
                      justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-blue-500 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Architecture Section */}
      <section className="relative min-h-screen py-32 overflow-hidden">
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
              System Architecture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-4">
              Built for Scale
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A modern architecture designed for high performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FiServer,
                title: "Edge Network",
                description: "Global edge network with automatic routing and load balancing",
                features: ["Auto-scaling", "Load Balancing", "Edge Computing"],
                color: "blue"
              },
              {
                icon: FiDatabase,
                title: "Data Layer",
                description: "Distributed database system with real-time synchronization",
                features: ["Real-time Sync", "Data Replication", "Auto Backup"],
                color: "purple"
              },
              {
                icon: FiShield,
                title: "Security",
                description: "Enterprise-grade security with end-to-end encryption",
                features: ["Zero Trust", "E2E Encryption", "Access Control"],
                color: "cyan"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`group relative p-8 rounded-2xl bg-white/5 border border-${item.color}-500/20
                  hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-${item.color}-500/20 flex items-center 
                    justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-8">{item.description}</p>
                <div className="space-y-3">
                  {item.features.map((feature, fIndex) => (
                    <div 
                      key={fIndex}
                      className={`px-4 py-2 rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/20
                        hover:border-${item.color}-500/40 transition-colors duration-300`}
                    >
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="relative min-h-screen py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full border border-purple-500/20 text-purple-400 text-sm
              bg-purple-500/10 backdrop-blur-sm">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-4">
              Powerful Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to build and scale your applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FiZap,
                title: "Real-time Processing",
                description: "Process millions of events in real-time with sub-millisecond latency",
                color: "yellow"
              },
              {
                icon: FiCloud,
                title: "Auto Scaling",
                description: "Automatically scale resources based on demand",
                color: "blue"
              },
              {
                icon: FiGlobe,
                title: "Global CDN",
                description: "Deliver content from the edge with our global CDN",
                color: "green"
              },
              {
                icon: FiDatabase,
                title: "Data Storage",
                description: "Secure and scalable storage for all your data needs",
                color: "purple"
              },
              {
                icon: FiCode,
                title: "API Gateway",
                description: "Unified API management and routing system",
                color: "pink"
              },
              {
                icon: FiShield,
                title: "Security",
                description: "Enterprise-grade security and compliance",
                color: "cyan"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`group p-6 rounded-2xl bg-white/5 border border-${feature.color}-500/20
                  hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center 
                    justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="relative min-h-screen py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full border border-cyan-500/20 text-cyan-400 text-sm
              bg-cyan-500/10 backdrop-blur-sm">
              Performance
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-4">
              Built for Speed
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-leading performance metrics that set us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                metric: "99.99%",
                label: "Uptime SLA",
                icon: FiServer,
                color: "blue"
              },
              {
                metric: "<100ms",
                label: "Global Latency",
                icon: FiZap,
                color: "yellow"
              },
              {
                metric: "10TB/s",
                label: "Processing Power",
                icon: FiCpu,
                color: "purple"
              },
              {
                metric: "∞",
                label: "Scalability",
                icon: FiCloud,
                color: "cyan"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-${stat.color}-500/20 flex items-center 
                    justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-4xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "Response Time",
                  value: "45ms",
                  change: "-23%",
                  color: "green"
                },
                {
                  label: "Error Rate",
                  value: "0.01%",
                  change: "-50%",
                  color: "blue"
                },
                {
                  label: "Availability",
                  value: "99.99%",
                  change: "+0.5%",
                  color: "purple"
                }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-gray-400 mb-2">{metric.label}</div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className={`text-${metric.color}-400 text-sm`}>{metric.change} from last month</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration & Tools */}
      <section className="relative min-h-screen py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full border border-pink-500/20 text-pink-400 text-sm
              bg-pink-500/10 backdrop-blur-sm">
              Integrations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-4">
              Powerful Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Integrate with your favorite tools and services
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20
                  transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square rounded-xl bg-white/10 mb-4"></div>
                <div className="h-4 w-2/3 bg-white/10 rounded"></div>
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
              className="group px-8 py-4 rounded-xl border border-white/10 text-white font-medium
                hover:bg-white/5 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                View All Integrations
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-shadow mb-6">
            Crafting <span className="gradient-text">Digital Experiences</span>
            <br /> That Inspire
          </h1>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-purple-300 font-semibold">
              Full Stack Developer & AI Integration Specialist
              <span className="block text-lg mt-2 text-gray-400">
                Leveraging AI to build smarter, more efficient solutions that adapt and evolve with your business needs
              </span>
            </p>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Transforming ideas into elegant, user-centric web applications
              that make a lasting impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

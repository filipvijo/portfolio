'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-xl max-w-4xl mx-auto"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              I&apos;m Filip, an independent creative professional based in Eastern Europe. With over 20 years of experience, I specialize in web development, UI/UX design, creative direction, motion graphics, video production, and AI-powered tools.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              My work lives at the intersection of technology and creativity. I enjoy designing experiences that are not only functional but also visually engaging and emotionally resonant. Whether the style is bold and futuristic or minimalist and elegant, I adapt to the unique needs and tone of each project.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              I approach every collaboration with a focus on clear communication, patience, and adaptability — values I believe are essential to delivering meaningful results. What drives me most is the process itself: watching an idea grow from a concept into something real, impactful, and well-crafted.
            </p>

            <p className="text-lg text-gray-300">
              If you&apos;re looking for someone who can help bring your vision to life with both creativity and precision, I&apos;d be glad to connect.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">20+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">50+</h3>
              <p className="text-gray-300">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">15+</h3>
              <p className="text-gray-300">Technologies</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">100%</h3>
              <p className="text-gray-300">Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

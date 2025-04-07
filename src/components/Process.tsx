'use client';

import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Concept & Strategy',
    description: 'Understanding your needs and planning the perfect solution',
    icon: LightBulbIcon,
  },
  {
    title: 'Design & UX',
    description: 'Creating beautiful and intuitive user experiences',
    icon: PaintBrushIcon,
  },
  {
    title: 'Development',
    description: 'Building with modern and scalable technologies',
    icon: CodeBracketIcon,
  },
  {
    title: 'Launch & Support',
    description: 'Ensuring smooth deployment and ongoing maintenance',
    icon: RocketLaunchIcon,
  },
];

export default function Process() {
  return (
    <section className="py-20" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How I Work
          </h2>
          <p className="text-xl text-gray-400">
            A proven process for successful project delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 
                rounded-full glass text-white mb-6 transform transition-transform 
                hover:scale-110">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

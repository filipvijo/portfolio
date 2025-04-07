'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Filmseeker',
    description: 'Movie recommendations platform helping users discover their next great film. Built with React 19, featuring seamless movie discovery and personalized recommendations.',
    image: '/projects/filmseeker.PNG',
    url: 'https://www.filmseeker.net',
    tech: ['React 19', 'Firebase', 'Axios', 'React Router'],
    features: ['Movie recommendations', 'SEO optimization', 'User preferences'],
  },
  {
    title: 'SuperHero Finder',
    description: 'Interactive superhero information discovery app with stunning animations and AI integration. Built with React 18 and Vite for optimal performance.',
    image: '/projects/superhero-finder.PNG',
    url: 'https://superhero-finder-roan.vercel.app',
    tech: ['React 18', 'TailwindCSS', 'Framer Motion', 'Firebase'],
    features: ['AI integration', 'Internationalization', 'Interactive UI effects'],
  },
  {
    title: 'Fashion Palette',
    description: 'AI-powered color palette generator that analyzes uploaded images to suggest seasonal color palettes for fashion and accessories.',
    image: '/projects/fashion-palette.PNG',
    url: 'https://fashion-palette.vercel.app',
    tech: ['React', 'styled-components', 'Framer Motion'],
    features: ['AI color analysis', 'Image processing', 'Social sharing'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-gray-300">Explore some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="group relative overflow-hidden rounded-xl glass hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className="relative w-full h-[225px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={90}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-purple-300 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm bg-purple-500/10 rounded-full text-purple-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 text-sm bg-purple-500/10 rounded-full text-purple-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

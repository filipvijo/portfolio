'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      setIsSending(true);
      setError('');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get in Touch</h2>
          <p className="text-lg text-gray-300">Let&apos;s discuss your next project</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg glass text-white bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg glass text-white bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg glass text-white bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Project discussion"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg glass text-white bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="text-center">
              {error && (
                <p className="text-red-400 mb-4">{error}</p>
              )}
              {isSuccess && (
                <p className="text-green-400 mb-4">Message sent successfully!</p>
              )}
              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

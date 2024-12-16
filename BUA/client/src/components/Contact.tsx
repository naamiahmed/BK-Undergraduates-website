import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">Get in touch with our team</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-xl border border-white/20"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Send us a Message</h3>
          <form className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-lg border-gray-200 bg-white/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
              />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-lg border-gray-200 bg-white/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-200 bg-white/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex justify-center rounded-lg border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import  mockData  from '../assets/mock.json';

export interface NavigationItem {
  name: string;
  href: string;
}

export interface AssociationData {
  name: string;
  logo: string;
}

export interface MockData {
  association: AssociationData;
  navigation: NavigationItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { association } = mockData;

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Members', href: '#members' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0. }
    );

    const heroSection = document.querySelector("hero");
    if (heroSection) {
      observer.observe(heroSection);
    }
    return () =>  observer.disconnect();
  }, []);
  if (!isVisible) {
    return null;
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 10 }}
      className="fixed w-full z-50 bg-darkblue backdrop-blur-md border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo Section */}
        <motion.div 
        className="flex-shrink-0 flex items-center"
        whileHover={{ scale: 1.02 }}
        >
        <motion.img 
          src="/src/assets/BK UA Logo.png" 
          alt="BUA Logo" 
          className="h-12 w-auto sm:h-12" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <span className="ml-2 text-sm sm:text-lg font-bold text-gray-800 line-clamp-1 md:text-lg">
          {association.name}
        </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-4">
        {navItems.map((item) => (
          <motion.a
          key={item.name}
          href={item.href}
          className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          >
          {item.name}
          </motion.a>
        ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
        className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
        </motion.button>
      </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuVariants}
        transition={{ duration: 0.2 }}
        className="md:hidden bg-darkblue backdrop-blur-lg"
        >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 10 }}
          >
            {item.name}
          </motion.a>
          ))}
        </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
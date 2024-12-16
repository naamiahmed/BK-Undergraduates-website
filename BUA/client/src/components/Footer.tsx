import React from 'react';
import { Mail, Phone } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="./assets/BK UA Logo.png" alt="BUA Logo" className="h-12 w-auto object-contain" />
              <span className="ml-2 text-xl font-bold">BUA</span>
            </div>
            <p className="text-gray-400">
              Empowering students through unity, knowledge, and community service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-white transition-colors">News</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Member Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events Calendar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Bakinigahawela,</li>
              <li className="text-gray-400">Monaragala, Sri lanka</li>
              <li className="text-gray-400">+94 123 456 789</li>
              <li className="text-gray-400"><a href ="mailto:bkundergraduates@gmail.com">bkundergraduates@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bakinigahawela Undergraduates' Association. All rights reserved.</p>
          <br></br>
            <div className="flex flex-col items-center space-y-2">
            <p><b>Design and Developed by: <br/>
            <a href="https://github.com/naami-ahmed" className="text-indigo-400 hover:text-white transition-colors">Naami Ahmed</a></b></p>

            <div className="flex space-x-4">
            <a href="mailto:naamisaleem5002@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+94123456789" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="h-6 w-6" />
              </a>
            </div>  
            </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
import React from 'react';
import { Wrench, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">AutoPro Hub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Next-generation garage management system for modern auto service centers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Appointments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Oil Change</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Brake Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Tire Rotation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Vehicle Inspection</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>contact@autoprohub.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>123 Service Street, Auto City, AC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AutoPro Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
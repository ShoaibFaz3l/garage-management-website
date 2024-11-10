import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80"
          alt="Garage"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Next-Gen Garage Management
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Experience seamless auto care with real-time tracking, online scheduling,
            and instant notifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Service
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-sm transition-colors">
              View Services
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
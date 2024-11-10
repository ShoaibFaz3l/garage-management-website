import React, { useState } from 'react';
import { Wrench, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Wrench className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold">AutoPro Hub</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Appointments</a>
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              <button className="bg-blue-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                Schedule Now
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="block hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="block hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium">Appointments</a>
            <a href="#" className="block hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <button className="w-full bg-blue-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
              Schedule Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
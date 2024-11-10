import React from 'react';
import { Calendar, MessageSquare, Receipt, Package2, BarChart3, BellRing } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Online Scheduling',
    description: 'Book your service appointments 24/7 with our intuitive scheduling system'
  },
  {
    icon: MessageSquare,
    title: 'Customer Communication',
    description: 'Real-time chat and updates about your vehicle service progress'
  },
  {
    icon: Receipt,
    title: 'Digital Invoicing',
    description: 'Paperless billing with secure online payment options'
  },
  {
    icon: BellRing,
    title: 'Push Notifications',
    description: 'Instant updates about appointments, service completion, and special offers'
  },
  {
    icon: Package2,
    title: 'Inventory Tracking',
    description: 'Real-time parts availability and automated reordering system'
  },
  {
    icon: BarChart3,
    title: 'Service Analytics',
    description: 'Detailed service history and maintenance predictions'
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-gray-400 text-lg">Everything you need to manage your garage efficiently</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
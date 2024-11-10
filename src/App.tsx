import React from 'react';
import { Wrench, Calendar, MessageSquare, Receipt, Package2, BarChart3, BellRing } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppointmentSection from './components/AppointmentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <AppointmentSection />
      <Footer />
    </div>
  );
}

export default App;
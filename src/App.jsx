import React, { useState } from 'react';
import { 
  Menu, X, Heart, Stethoscope, Settings, 
  Syringe, Baby, Users, Microscope, 
  MapPin, Phone, Mail, FileText, 
  ClipboardList, CheckCircle, Zap 
} from 'lucide-react';

// --- Import Local Image ---
// IMPORTANT: Adjust this path if profile_1.jpg is not directly in the 'assets' folder
// relative to where this App.js file is located.
import doctorImage from './assets/profile_1.jpg'; 

// --- Updated Placeholder Data ---
const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Dr. Ankita', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#' },
  { name: 'Contact', href: '#' },
];

const mainServices = [
  { 
    icon: Stethoscope, 
    title: 'Gynecological Care', 
    description: "Diagnosis and Management of all women's health conditions." 
  },
  { 
    icon: Baby, 
    title: 'Obstetric Care', 
    description: "Comprehensive care for a healthy, safe pregnancy journey." 
  },
  { 
    icon: Syringe, 
    title: 'Fertility Services', 
    description: "Optimizing reproductive health and fertility management." 
  },
  { 
    icon: Zap, 
    title: 'Advanced Surgery', 
    description: "Laparoscopic and Minimal Access Surgical Solutions." 
  },
  { 
    icon: Microscope, 
    title: 'Reproductive Health', 
    description: "Dedicated to determining and enhancing women's reproductive health." 
  },
  { 
    icon: CheckCircle, 
    title: 'All-Inclusive Care', 
    description: "Your trustworthy Obgyn and Gyno Near Me Provider." 
  },
];

// --- Components ---

/**
 * Enhanced Service Card component to display service details.
 */
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-start text-left p-6 m-2 bg-white rounded-xl shadow-lg border-t-4 border-blue-500 transition duration-300 hover:shadow-2xl transform hover:-translate-y-1 h-full">
    <div className="p-3 mb-3 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
      <Icon size={28} strokeWidth={1.8} />
    </div>
    {/* Applied Space Mono for titles */}
    <h3 className="font-space-mono text-gray-900 font-bold mb-2 text-lg">{title}</h3>
    {/* Applied Fraunces for descriptions */}
    <p className="font-fraunces text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);


/**
 * Main application component.
 * Contains the Header, Hero section, and Services grid.
 */
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // A more subtle background pattern for a professional look
  const abstractPatternStyle = {
    backgroundImage: `radial-gradient(circle at 100% 100%, transparent 10%, #fff 10%, #fff 20%, transparent 20%), linear-gradient(to right, #e0f2fe, #bfdbfe, #93c5fd)`,
    backgroundSize: '800px 800px, 100% 100%',
    backgroundBlendMode: 'multiply',
  };

  return (
    // Applied default font-fraunces for the body, then overridden for headers
    <div className="min-h-screen bg-gray-50 font-fraunces antialiased">
      
      {/* 1. Navigation Bar */}
      <header className="absolute top-0 left-0 w-full z-20 py-4 lg:py-6 px-4 sm:px-8 lg:px-16">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8 text-blue-600 fill-blue-100" strokeWidth={1.5} />
            <span className="font-space-mono text-xl font-extrabold text-gray-800">
              <span className="text-blue-600">Dr. Ankita</span> Health
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-base font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-fraunces text-gray-700 hover:text-blue-600 transition duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="font-space-mono bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] active:scale-95">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-4 transition-all duration-300 ease-in-out">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-fraunces block px-8 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-8 pt-4">
              <button className="font-space-mono w-full bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>
      
      {/* 2. Hero Section - Enhanced Professional Look */}
      <section className="relative h-[90vh] min-h-[650px] overflow-hidden">
        
        {/* Abstract Background/Gradient */}
        <div 
          className="absolute inset-0 opacity-80" 
          style={abstractPatternStyle}
        ></div>
        
        {/* Doctor Image Container (Right Side) - REDUCED TO lg:w-1/2 */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
          {/* Using the imported local image for the doctor */}
          <img 
            src={doctorImage} // Using the imported local image
            alt="Dr. Ankita Mandal, Best Gynecologist in Kolkata" 
            className="w-full h-full object-cover object-top filter contrast-[1.1]" 
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x900/3b82f6/ffffff?text=Doctor+Image"; }} // Fallback in case of error
          />
          {/* Blue Tint/Gradient on the image to blend it with the left section */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-50/50 to-blue-200/90"></div>
        </div>

        {/* Content Box (Left Side) - Adjusted to lg:w-1/2 for layout balance */}
        <div className="absolute inset-0 flex items-start lg:items-center pt-32 pb-12 px-4 sm:px-8 lg:px-16 z-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="w-full lg:w-1/2 xl:w-2/5">
                <p className="font-fraunces text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                    Women's Health, Pregnancy & Fertility Care
                </p>
                {/* Applied Space Mono for headings */}
                <h1 className="font-space-mono text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-tight mb-4">
                    Your Top Choice for the <span className="text-blue-600">Best Gynecologist</span> Near Me in Kolkata
                </h1>
                {/* Applied Fraunces for subheadings */}
                <h2 className="font-fraunces text-xl sm:text-2xl font-semibold text-gray-700 mb-8">
                    Dr. Ankita Mandal, <span className='font-normal'>OBGYN & Fertility Specialist</span>
                </h2>
                <div className='flex space-x-4'>
                    <button className="font-space-mono bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center space-x-2">
                        <span>BOOK APPOINTMENT</span> 
                        <span className="text-xl leading-none">→</span> 
                    </button>
                    <a href="#" className="font-fraunces flex items-center space-x-2 text-gray-700 font-medium hover:text-blue-600 transition duration-300">
                        <Phone size={20} className='text-blue-600'/>
                        <span>Call Us</span>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Services Section */}
      <section id="services" className="relative -mt-12 md:-mt-24 z-30 px-4 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <p className="font-fraunces text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                Our Specialized Care
            </p>
            {/* Applied Space Mono for section headings */}
            <h2 className="font-space-mono text-3xl sm:text-4xl font-extrabold text-gray-800">
              Comprehensive Services for <span className="text-blue-600">Your Well-being</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <div key={index} className="h-full">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          {/* Call to action below services */}
          <div className="text-center mt-12">
            <p className="font-fraunces text-lg text-gray-600">
                Dedicated to providing the best possible care for a safe and healthy life.
            </p>
            <a href="#" className="font-space-mono inline-flex mt-4 text-blue-600 font-semibold border-b-2 border-blue-600 hover:text-blue-800 transition duration-300">
                View All Treatments <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Contact Info Footer Section */}
      <footer className="bg-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-white text-center sm:flex sm:justify-between sm:text-left">
          
          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
            <MapPin size={20} />
            <p className="font-fraunces text-sm font-medium">Kolkata, West Bengal</p>
          </div>

          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
            <Mail size={20} />
            <p className="font-fraunces text-sm font-medium">contact@drankita.com</p>
          </div>
          
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <Phone size={20} />
            <p className="font-fraunces text-sm font-medium">+91-98765-43210</p>
          </div>
        </div>
      </footer>

      {/* Copyright Footer */}
      <div className="py-4 bg-gray-900 text-center text-gray-400">
         <p className="font-fraunces text-xs">© {new Date().getFullYear()} Dr. Ankita Mandal. All rights reserved.</p>
      </div>

    </div>
  );
};

export default App;
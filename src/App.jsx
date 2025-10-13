import React, { useState } from 'react';
import {
  Menu, X, Heart, Stethoscope, Settings,
  Syringe, Baby, Users, Microscope,
  MapPin, Phone, Mail, FileText,
  ClipboardList, CheckCircle, Zap
} from 'lucide-react';

// --- Import Local Image ---
import doctorImage from './assets/profile_2.jpg';
import doctorImage2 from './assets/profile_1.jpg';


// --- Updated Placeholder Data ---
const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Dr. Ankita', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#' },
  { name: 'Contact', href: '#' },
];

// Data for the detailed Service Cards (Right side of the section)
const detailServices = [
    {
        icon: Stethoscope,
        title: 'Gynecological Conditions',
        description: "Diagnosis and Management of Gynecological Conditions: Dedicated to Determining and Enhancing Women's Reproductive Health."
    },
    {
        icon: Baby,
        title: 'Best Obstetric Care',
        description: "Comprehensive Obstetric Care for a Healthy Pregnancy - Ensuring the Well-being of Mother and Baby for a safe and healthy life."
    },
    {
        icon: Zap,
        title: 'Gynecological Surgeries',
        description: "State-of-the-art Surgical Solutions including laparotomy and laparoscopic/minimal access surgery to effectively treat diverse gynecological conditions."
    },
    {
        icon: Syringe,
        title: 'Fertility Specialist in Kolkata',
        description: "Reproductive health and fertility management encompass optimizing reproductive well-being and providing comprehensive care for fertility-related issues."
    },
];

// Data for the Left Stats/Focus Block
const focusStats = [
    { value: '12+', label: 'Years Experience', icon: Settings },
    { value: '5K+', label: 'Successful Procedures', icon: CheckCircle },
];

// --- Components ---

/**
 * Enhanced Service Card component to display service details.
 */
const ServiceCard = ({ icon: Icon, title, description }) => (
  // Enhanced card design: larger, whiter, more shadow for "boxed" look
  <div className="flex flex-col items-start text-left p-6 sm:p-8 bg-white rounded-2xl shadow-xl border-t-4 border-blue-500 transition duration-300 hover:shadow-2xl hover:border-blue-600 transform hover:-translate-y-1 h-full">
    <div className="p-3 mb-4 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="font-playfair text-gray-900 font-bold mb-2 text-xl">{title}</h3>
    <p className="font-raleway text-base text-gray-600 leading-relaxed">{description}</p>
  </div>
);


/**
 * Main application component.
 */
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // A more subtle background pattern for a professional look
  const abstractPatternStyle = {
    backgroundImage: `linear-gradient(to right, #e0f2fe, #bfdbfe, #93c5fd)`,
  };

  return (
    <div className="min-h-screen bg-gray-50 font-raleway antialiased">

      {/* 1. Navigation Bar (omitted for brevity, assume it's unchanged) */}
      <header className="absolute top-0 left-0 w-full z-20 py-4 lg:py-6 px-4 sm:px-8 lg:px-16">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8 text-blue-600 fill-blue-100" strokeWidth={1.5} />
            <span className="font-playfair text-xl font-extrabold text-gray-800">
              <span className="text-blue-600">Dr. Ankita</span> Health
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-raleway text-gray-700 hover:text-blue-600 transition duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="font-playfair bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] active:scale-95">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button (omitted for brevity) */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-4 transition-all duration-300 ease-in-out">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-raleway block px-8 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-8 pt-4">
              <button className="font-playfair w-full bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section (omitted for brevity, assume it's unchanged) */}
      <section className="relative h-[90vh] min-h-[750px] overflow-hidden">
        <div
          className="absolute inset-0 w-full opacity-90"
          style={abstractPatternStyle}
        >
          <div className="absolute inset-0 bg-[url('/src/assets/medical-pattern.svg')] opacity-10 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 flex items-center pt-24 pb-12 px-4 sm:px-8 lg:px-16 z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row w-full items-center justify-between">
            <div className="w-full lg:w-[55%] xl:w-3/5 order-2 lg:order-1 mt-12 lg:mt-0">
                <p className="font-raleway text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                    Women's Health, Pregnancy & Fertility Care
                </p>
                <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                    Your Top Choice for the <span className="text-blue-600">Best Gynecologist</span> Near Me in Kolkata
                </h1>
                <h2 className="font-raleway text-xl sm:text-2xl font-semibold text-gray-700 mb-8">
                    Dr. Ankita Mandal, <span className='font-normal'>OBGYN & Fertility Specialist</span>
                </h2>
                <div className='flex space-x-4'>
                    <button className="font-playfair bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center space-x-2">
                        <span>BOOK APPOINTMENT</span>
                        <span className="text-xl leading-none">→</span>
                    </button>
                    <a href="#" className="font-raleway hidden sm:flex items-center space-x-2 text-gray-700 font-medium hover:text-blue-600 transition duration-300">
                        <Phone size={20} className='text-blue-600'/>
                        <span>Call Us</span>
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-[45%] xl:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-full lg:h-[550px] relative rounded-3xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-blue-500/50 border-4 border-white transform hover:scale-[1.01] bg-white">
                    <img
                        src={doctorImage}
                        alt="Dr. Ankita Mandal, Best Gynecologist in Kolkata"
                        className="w-full h-full object-cover object-center filter brightness-[1.05]"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x1000/3b82f6/ffffff?text=Doctor+Image"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl flex items-center space-x-3">
                        <Stethoscope className="w-6 h-6 text-blue-600" />
                        <span className="font-playfair text-sm font-bold text-gray-800">4500+ Patients Served</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Services Section - REVISED LAYOUT */}
      <section id="services" className="relative mt-12 z-30 px-4 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid: Focus Block (Left) and Services Grid (Right) */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-12 xl:gap-16">
            
            {/* Left Column: Focus Text and Stats */}
            <div className="lg:col-span-1 mb-10 lg:mb-0 pt-6 lg:pt-0">
                
                {/* Section Title */}
                <div className="mb-8 lg:text-left text-center">
                    <p className="font-raleway text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                        Our Specialized Care
                    </p>
                    <h2 className="font-playfair text-3xl sm:text-4xl font-extrabold text-gray-800">
                        <span className="text-blue-600">My Core</span> Focus
                    </h2>
                </div>

                {/* Main Focus Text (From user's data) */}
                <p className="font-raleway text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 bg-white p-4 shadow-lg rounded-xl">
                    Elevating Women’s Health, Pregnancy, and Fertility Care - Your Top Choice for the **Best Gynecologist Near Me in Kolkata**.
                </p>

                {/* Stats Section (Styled like boxed elements in reference image) */}
                <div className="flex flex-col space-y-4">
                    {focusStats.map((stat, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-xl border-b-4 border-red-500/80">
                            <stat.icon size={36} strokeWidth={1.5} className="text-red-600 flex-shrink-0" />
                            <div>
                                <p className="font-playfair text-3xl font-extrabold text-gray-900">{stat.value}</p>
                                <p className="font-raleway text-sm uppercase tracking-wider text-gray-600 font-semibold">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Detailed Services Grid */}
            <div className="lg:col-span-2">
              {/* Services Grid (2 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {detailServices.map((service, index) => (
                  <div key={index} className="h-full">
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to action below services */}
        </div>
      </section>
         
  <section className="bg-white text-gray-900 py-20 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto border border-gray-300 p-0">
      
      {/* Section Header (The logo/name area style) */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-gray-300 bg-gray-50">
        <h2 className="font-playfair text-2xl font-extrabold text-blue-600">
          About Dr. Ankita Mandal
        </h2>
        {/* Placeholder for secondary links/title alignment */}
        <span className="font-raleway text-sm font-medium uppercase text-gray-500">
          Expert Gynecologist, Kolkata
        </span>
      </div>

      {/* Main Content Grid: Text (Left) and Image (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Text Content and Details */}
        <div className="p-8 space-y-8 lg:border-r border-gray-300">
          
          {/* Main Biography Block */}
          <div className="space-y-4 pb-4 border-b border-gray-200">
            <h3 className="font-playfair text-xl font-bold text-gray-800">
              Expert Gynecologist Kolkata.
            </h3>
            {/* The main paragraphs */}
            <p className="font-raleway text-base text-gray-700 leading-relaxed">
              Dr. Ankita Mandal is the **best gynecologist in Kolkata**, recognized among the **top 5 gynecologists** nowadays, as per the acknowledgement of her 15,000+ satisfied patients. She is Consultant Gynaecologist, Obstetrician, Infertility Specialist and Gynaecological Laparoscopic Surgeon practising in Kolkata. Experience exceptional care from one of the city's finest women's health experts.
            </p>
            <p className="font-raleway text-base text-gray-700 leading-relaxed">
              A graduate of SCB Medical College Cuttack and RIMS Ranchi, Dr. Ankita Mandal holds a **fellowship in Infertility and an Advanced Diploma in Reproductive Medicine and ART from KIEL, Germany**. She specializes in colposcopy, hysteroscopy, and gynecological ultrasound.
            </p>
          </div>
          
          {/* Secondary Details Block (Education/Affiliations) */}
          <div className="space-y-4 pb-4 border-b border-gray-200">
            <h4 className="font-playfair text-lg font-bold text-gray-800 uppercase tracking-widest">
              Professional Affiliations
            </h4>
            <p className="font-raleway text-sm text-gray-700 leading-relaxed">
              Dr. Ankita Mandal personalized approach empowers patients to make informed decisions. She's a member of **ISOG, FOGSI, ACOG**, and a **Fellow of FIAOG**. With affiliations to renowned hospitals and online consultations available, Dr. Mandal ensures accessible care.
              Whether you need routine check-ups, advanced treatments, or expert advice, Dr. Ankita Mandal is your partner for top-notch gynecological care.
            </p>
          </div>
          
          {/* Appointment/Consultation Block (Similar to the list in the reference image) */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-bold text-gray-800 uppercase tracking-widest">
              Consultation Options
            </h4>
            
            {/* Appointment Card */}
            <div className="flex items-start space-x-4">
              <ClipboardList size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-playfair font-bold text-gray-900">Booking an Appointment</p>
                <p className="font-raleway text-sm text-gray-600">
                  Easily book your appointment for a convenient and timely consultation with our Gynecologist in Kolkata.
                </p>
              </div>
            </div>
            
            {/* Online Consultation Card */}
            <div className="flex items-start space-x-4">
              <Zap size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-playfair font-bold text-gray-900">Online Consultation</p>
                <p className="font-raleway text-sm text-gray-600">
                  Convenient virtual platform connecting patients to Dr.Ankita for expert gynecological advice and consultation online.
                </p>
              </div>
            </div>
            
            {/* Call to Action */}
            <a href="#" className="font-playfair inline-flex mt-4 text-white bg-blue-600 hover:bg-blue-700 font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300 transform hover:scale-[1.02]">
              Call For Appointment <Phone size={16} className="ml-2" />
            </a>
          </div>
          
        </div>

        {/* Right Column: Dummy Image Placeholder */}
        <div className="h-96 lg:h-full overflow-hidden">
          <img
            src={doctorImage2} // Dummy image placeholder
            alt="Dr. Ankita Mandal Professional Profile"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.1]"
          />
        </div>
      </div>
      
      {/* Footer Branding (Similar to the reference image bottom) */}
      <div className="flex justify-between items-center px-8 py-4 border-t border-gray-300 bg-gray-50 text-sm">
        <div className="font-raleway text-gray-700 space-x-4">
          <a href="#" className="hover:text-blue-600">INSTAGRAM</a>
          <a href="#" className="hover:text-blue-600">FACEBOOK</a>
        </div>
        <p className="font-raleway text-gray-500">© Dr. Ankita Mandal</p>
      </div>

    </div>
  </section>
      {/* 4. Contact Info Footer Section (omitted for brevity, assume it's unchanged) */}
      <footer className="bg-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-white text-center sm:flex sm:justify-between sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
            <MapPin size={20} />
            <p className="font-raleway text-sm font-medium">Kolkata, West Bengal</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
            <Mail size={20} />
            <p className="font-raleway text-sm font-medium">contact@drankita.com</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <Phone size={20} />
            <p className="font-raleway text-sm font-medium">+91-98765-43210</p>
          </div>
        </div>
      </footer>
      
      {/* Copyright Footer */}
      <div className="py-4 bg-gray-900 text-center text-gray-400">
          <p className="font-raleway text-xs">© {new Date().getFullYear()} Dr. Ankita Mandal. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
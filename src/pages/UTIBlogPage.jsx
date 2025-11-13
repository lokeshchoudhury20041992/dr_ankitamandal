import React from 'react';
import {
    Menu, X, Heart, Stethoscope, Settings,
    Syringe, Baby, Users, Microscope,
    MapPin, Phone, Mail, FileText,
    ClipboardList, CheckCircle, Zap, ExternalLink, Star,
    ChevronLeft, ChevronRight, Facebook, Youtube 
} from 'lucide-react';

// Reusable components (for this specific page structure)
const NavLink = ({ href, children }) => (
    <a href={href} className="font-montserrat text-gray-700 hover:text-blue-600 transition duration-200 relative group text-sm">
        {children}
        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
);

const FooterLink = ({ href, children }) => (
    <a href={href} className="text-sm font-montserrat text-gray-400 hover:text-blue-400 transition duration-300">
        {children}
    </a>
);


// --- The New UTIBlogPage Component ---

const UTIBlogPage = () => {
    
    // --- Data for Sidebar & Footer (Replicated for standalone page) ---
    const sidebarLinks = [
        { name: 'Chamber locations', href: '#chamber-locations' },
        { name: 'My Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Surgical Gallery', href: '/gallery' },
        { name: 'Confirm Appointment', href: '/appointment' },
        { name: 'Contact Me', href: '/contact' },
    ];

    const blogList = [
        'Untitled',
        'Improving Women’s Health: Selecting Kolkata’s Top Gynecologist',
        'Transforming High Risk Pregnancy Care in Kolkata: Dr. Ankita Mandal’s Revolutionary Approach',
        'The Ultimate Guide Through A Positive Pregnancy to Normal Delivery: Proven Strategies From Dr. Ankita Mandal, Kolkata’s Leading Gynecologist',
        'My Expert Period Advice: 7 Essential Tips from Dr. Ankita Mandal, a Gynecologist Who Understands',
        'Empowering Women’s Health: Managing PCOD and PCOS with Personalized Care',
        'Debunking Myths About Infertility: Expert Insights from Dr. Ankita Mandal',
        'Empowering Motherhood: A Journey of Love, Health, and Joyful Delivery',
        'Prioritizing Women’s Health: The Vitality of Regular Gynecological Check-ups',
        'Empowering Women’s Reproductive Health: Expert Tips for Optimal Well-being',
        'Dr. Ankita Mandal: The Best Gynecologist in Kolkata',
        'Normal Delivery in Kolkata',
        'Preventing Cancer of Uterus',
        'Painless Delivery: A Guide to a Comfortable Childbirth Experience',
        'Home Pregnancy Tests What You Need To Know',
        'Urinary tract infections',
        'Expert Normal Delivery in Kolkata | Dr. Ankita Ensures a Promise of Excellence',
    ];

    return (
        // Root container uses the general body font (Montserrat)
        <div className="min-h-screen bg-gray-50 font-montserrat antialiased">

            {/* Fixed Header (Simulated from existing App) */}
            <header className="fixed w-full top-0 bg-white shadow-md z-50 py-4 lg:py-6 px-4 sm:px-8 lg:px-16">
                <nav className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo - Work Sans */}
                    <a href="/" className="flex items-center space-x-3">
                        <Heart className="w-8 h-8 text-blue-600 fill-blue-100" strokeWidth={1.5} />
                        <span className="font-worksans text-xl font-extrabold text-gray-800">
                            <span className="text-blue-600">Dr. Ankita</span> Health
                        </span>
                    </a>

                    {/* Desktop Links - Montserrat */}
                    <div className="hidden lg:flex items-center space-x-8 text-base font-medium">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About Dr.Ankita</NavLink>
                        <NavLink href="/services">My Services</NavLink>
                        <button className="font-worksans bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
                            Book Appointment
                        </button>
                    </div>

                    <div className="lg:hidden">
                         {/* Mobile menu button placeholder */}
                        <Menu size={24} className="text-gray-700"/>
                    </div>
                </nav>
            </header>

            {/* Main Content Wrapper */}
            <div className="max-w-7xl mx-auto pt-28 pb-16 px-4 sm:px-8 lg:px-16">
                
                {/* Breadcrumb Section */}
                <p className="font-montserrat text-sm text-gray-500 mb-8">
                    <a href="/" className="hover:text-blue-600">Home</a> / <a href="/blog" className="hover:text-blue-600">Blog</a> / Urinary tract infections
                </p>

                {/* Grid Layout for Blog Content and Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column: Blog Content (2/3 width) */}
                    <div className="lg:col-span-2">
                        
                        {/* Blog Title and Meta */}
                        <h1 className="font-worksans text-4xl font-extrabold text-gray-800 mb-4">
                            Urinary tract infections
                        </h1>
                        <h2 className="font-worksans text-2xl font-bold text-blue-600 mb-6">
                            Dr. Ankita Mandal: A Beacon of Hope in the Battle Against Urinary Tract Infections
                        </h2>
                        
                        {/* Image Placeholder */}
                        <img 
                            src="https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Urinary-tract-infections.png"
                            alt="Urinary Tract Infections illustration"
                            className="w-full h-auto rounded-lg shadow-xl mb-8"
                        />

                        {/* --- Main Content --- */}
                        <div className="prose max-w-none text-gray-700 font-montserrat space-y-5">
                            
                            <p className='font-montserrat'><strong>Introduction:</strong></p>
                            <p className='font-montserrat'>
                                Urinary tract infections (UTIs) are a common yet distressing health concern that affects millions of women worldwide. When it comes to finding the right gynecologist to tackle this issue, one name stands out among the crowd – Dr. Ankita Mandal. With over 12 years of experience and a passion for providing the best possible care to her patients, Dr. Mandal has become a beacon of hope in the battle against UTIs. In this blog, we will delve into the impressive qualifications, expertise, and patient-centered approach that make Dr. Ankita Mandal the ideal choice for women seeking relief from urinary tract infections.
                            </p>

                            <h3 className="font-worksans text-xl font-bold text-gray-800 border-b border-blue-100 pb-1">The Journey of an Empowered Gynecologist</h3>
                            <p className='font-montserrat'>
                                Dr. Ankita Mandal’s journey as a consultant gynecologist, obstetrician, infertility specialist, and laparoscopic surgeon began with her graduation from SCB Medical College Cuttack and RIMS Ranchi. Over the years, she has honed her skills and specialized in infertility, obtaining a fellowship from Gujarat University. Her quest for knowledge led her to Germany, where she earned an Advanced Diploma in Reproductive Medicine and ART from KIEL. Dr. Ankita Mandal’s expertise is not limited to infertility; she is also highly skilled in colposcopy, hysteroscopy, and gynaecological ultrasound.
                            </p>

                            <h3 className="font-worksans text-xl font-bold text-gray-800 border-b border-blue-100 pb-1">A Patient-Centric Approach</h3>
                            <p className='font-montserrat'>
                                Dr. Ankita Mandal believes in empowering her patients by providing them with individualized care and educating them about their options. When it comes to urinary tract infections, she understands the discomfort and inconvenience they can cause in a woman’s life. Dr. Mandal takes the time to listen to her patients, empathize with their concerns, and tailor treatments based on their unique needs. By involving her patients in their care, she ensures that they make informed decisions and actively participate in the healing process.
                            </p>

                            <h3 className="font-worksans text-xl font-bold text-gray-800 border-b border-blue-100 pb-1">In Pursuit of Excellence</h3>
                            <p className='font-montserrat'>
                                As a healthcare professional, Dr. Ankita Mandal is committed to using evidence-based treatments to achieve the best possible outcomes for her patients. This dedication to excellence is evident in her affiliation with prestigious organizations such as the Indian Society of Gynecology and Obstetrics (ISOG), the Federation of Obstetric and Gynecological Societies of India (FOGSI), and the American College of Obstetricians and Gynecologists (ACOG). Her fellowship with the International Academy of Gynecological Laparoscopy (FIAOG) further illustrates her commitment to staying abreast of the latest advancements in her field.
                            </p>

                            <h3 className="font-worksans text-xl font-bold text-gray-800 border-b border-blue-100 pb-1">Hospitals and Online Consultations</h3>
                            <p className='font-montserrat'>
                                Dr. Mandal’s association with reputable hospitals in Kolkata, including Bhagirathi Neotia Newtown, ILS Hospital Salt Lake, ILS Dumdum, Medica Hospital, and Charnock Hospital, reflects the trust and confidence placed in her by both patients and medical institutions. Moreover, her availability for online consultations makes it easier for women to seek her expert guidance and treatment, regardless of their location.
                            </p>
                            
                            <h3 className="font-worksans text-xl font-bold text-gray-800 border-b border-blue-100 pb-1">Conclusion</h3>
                            <p className='font-montserrat'>
                                Urinary tract infections can be a significant source of discomfort and distress for women, but with a dedicated and skilled gynecologist like Dr. Ankita Mandal, hope and relief are within reach. Her exceptional qualifications, vast experience, patient-centric approach, and commitment to excellence make her the perfect choice for women seeking solutions to UTIs and other gynecological concerns. If you are looking for a compassionate and highly proficient gynecologist in Kolkata, Dr. Ankita Mandal’s expertise as a trusted gynecologist ensures that women receive comprehensive care and assistance throughout their pregnancy and delivery.
                            </p>

                            <p className="font-worksans text-lg font-bold text-gray-800 pt-4">
                                For more information or to schedule an appointment, please call <a href="tel:+918902135575" className="text-blue-600 hover:text-red-500 transition">+91 8902135575</a>.
                            </p>

                            {/* Social Links */}
                            <div className="flex flex-col space-y-2 pt-2">
                                <span className="font-worksans text-sm font-semibold text-gray-800">Stay connected with us for valuable insights and updates on women’s health:</span>
                                <div className='flex space-x-4'>
                                    <a href="https://www.facebook.com/drankitamandal/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition">
                                        <Facebook size={18} />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCHmLVC7M5VfYubEfVP9xX-g" target="_blank" rel="noopener noreferrer" className="p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition">
                                        <Youtube size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* Right Column: Sidebar (1/3 width) */}
                    <div className="lg:col-span-1 space-y-8">
                        
                        {/* Search Bar */}
                        <div className="p-5 bg-white shadow-lg rounded-lg">
                            <h4 className="font-worksans text-lg font-bold text-gray-800 mb-3 border-b pb-2">Search Here</h4>
                            <div className="relative">
                                <input type="text" placeholder="Search..." className="w-full p-2 border border-gray-300 rounded-md font-montserrat text-sm" />
                                <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </button>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="p-5 bg-white shadow-lg rounded-lg">
                            <h4 className="font-worksans text-lg font-bold text-gray-800 mb-4 border-b pb-2">Quick Links</h4>
                            <ul className="space-y-2">
                                {sidebarLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="font-montserrat text-sm text-gray-600 hover:text-blue-600 transition block">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts / Blog List */}
                        <div className="p-5 bg-white shadow-lg rounded-lg">
                            <h4 className="font-worksans text-lg font-bold text-gray-800 mb-4 border-b pb-2">Blog List</h4>
                            <ul className="space-y-3">
                                {blogList.map((post, index) => (
                                    <li key={index}>
                                        <a href="#" className="font-montserrat text-sm font-medium text-gray-700 hover:text-blue-600 transition block leading-snug">
                                            {post}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section (Adapted from original component's footer) */}
            <footer className="bg-gray-900 pt-16 pb-8 border-t border-blue-700 font-montserrat text-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700/50 pb-12 mb-8">

                        {/* Col 1: Specialties */}
                        <div>
                            <h4 className="font-worksans text-xl font-extrabold text-blue-400 mb-4">Dr. Ankita Mandal</h4>
                            <p className="text-sm leading-relaxed mb-4">Consultant Gynaecologist, Obstetrician, Normal Delivery Specialist, Laparoscopic Surgeon, Infertility Specialist.</p>
                            <p className="text-sm font-semibold text-white mb-2">Specializing in:</p>
                            <ul className="text-xs space-y-1 list-disc list-inside ml-2">
                                <li>Painless Normal Delivery</li>
                                <li>Laparoscopic or Minimal Access Surgery</li>
                                <li>Family Planning</li>
                                <li>High-Risk Pregnancy</li>
                                <li>Hysteroscopy</li>
                                <li>Fibroid & Endometriosis</li>
                                <li>Infertility & PCOS</li>
                            </ul>
                        </div>

                        {/* Col 2: Quick Navigation */}
                        <div>
                            <h4 className="font-worksans text-xl font-extrabold text-blue-400 mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><FooterLink href="/">Home</FooterLink></li>
                                <li><FooterLink href="/about">About Dr.Ankita</FooterLink></li>
                                <li><FooterLink href="/services">My Services</FooterLink></li>
                                <li><FooterLink href="/chambers">Chamber locations</FooterLink></li>
                                <li><FooterLink href="/faq">FAQ</FooterLink></li>
                                <li><FooterLink href="/gallery">Surgical Gallery</FooterLink></li>
                                <li><FooterLink href="/appointment">Confirm Appointment</FooterLink></li>
                            </ul>
                        </div>

                        {/* Col 3: Contact */}
                        <div>
                            <h4 className="font-worksans text-xl font-extrabold text-blue-400 mb-4">Contact</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <Phone size={18} className="text-blue-400 flex-shrink-0" />
                                    <a href="tel:+918902135575" className="text-sm text-white font-semibold hover:text-blue-400">+91 89021 35575</a>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail size={18} className="text-blue-400 flex-shrink-0" />
                                    <p className="text-sm">dr.ankitamandalkol@gmail.com</p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                                    <p className="text-sm leading-relaxed">Beleghata, Kasba, Ultadanga, Ballygunge, Kankurgachi, Bidhannagar, Salt lake, New Town, Baguiati, Chinar Park, Dum Dum, Kestopur, Rajarhat</p>
                                </div>
                            </div>
                        </div>

                        {/* Col 4: Hours & Follow */}
                        <div>
                            <h4 className="font-worksans text-xl font-extrabold text-blue-400 mb-4">Follow Us</h4>
                            <div className="mb-4">
                                <p className="text-sm font-semibold text-white">Open Hours</p>
                                <p className="text-sm">Mon – Sun: 8:00 am to 8:00 pm</p>
                                <p className="text-xs text-gray-500">Timing May Vary On Days</p>
                            </div>
                            
                            <div className="flex space-x-4 mt-6">
                                <a href="https://www.facebook.com/drankitamandal/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
                                    <Facebook size={30} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCHmLVC7M5VfYubEfVP9xX-g" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition duration-300">
                                    <Youtube size={30} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Row (Copyright) */}
                    <div className="text-center sm:flex sm:justify-between items-center text-xs space-y-3 sm:space-y-0">
                        <p>
                            © All Copyright 2023 by Dr. Ankita Mandal | All Rights Reserved | Automated page speed optimizations for fast site performance
                        </p>
                        <p>
                            How to find the best gynaecologist in Kolkata- Dr.Ankita is here for you in Kolkata.
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default UTIBlogPage;
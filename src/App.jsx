import React, { useState, useEffect, useRef } from 'react';
import {
    Menu, X, Heart, Stethoscope, Settings,
    Syringe, Baby, Users, Microscope,
    MapPin, Phone, Mail, FileText,
    ClipboardList, CheckCircle, Zap, ExternalLink, Star,
    ChevronLeft, ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom'; 
// Make sure this import is at the top of your file
// --- Import Local Image (Unchanged) ---
import doctorImage from './assets/profile_2.jpg';
import doctorImage2 from './assets/profile_1.jpg';


// --- Custom Hook for Scroll Animation Simulation (AOS) (Unchanged) ---
const useAOSSimulation = (offset = 100) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const top = ref.current.getBoundingClientRect().top;
                if (top < window.innerHeight - offset) {
                    setIsVisible(true);
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset]);

    return [ref, isVisible];
};

// --- NEW CUSTOM HOOK FOR SCROLL DIRECTION (Header Logic) ---
const useScrollDirection = (threshold = 10) => {
    const [scrollDirection, setScrollDirection] = useState('up');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY) < threshold) {
                return;
            }

            if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setScrollDirection('down');
            }
            if (currentScrollY < 100) {
                setScrollDirection('up');
            }

            lastScrollY = currentScrollY;
            setScrollY(currentScrollY);
        };

        window.addEventListener('scroll', updateScrollDirection);
        return () => window.removeEventListener('scroll', updateScrollDirection);
    }, [threshold]);

    return [scrollDirection, scrollY];
};


// --- Placeholder Data (Removed bold markers) ---
const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#blog' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

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
        description: "State-of-the-art Surgical Solutions including laparoscopic/minimal access surgery and Laparoscopic hysteroscopy to effectively treat diverse conditions." 
    },
    {
        icon: Syringe,
        title: 'Fertility Specialist in Kolkata',
        description: "Reproductive health and fertility management encompass Basic fertility treatment, Ovam donation, and providing comprehensive care for fertility-related issues."
    },
];

const focusStats = [
    { value: '12+', label: 'Years Experience', icon: Settings },
    { value: '5K+', label: 'Successful Procedures', icon: CheckCircle },
];

const specialisedServicesData = [
    {
        title: 'Normal Delivery & Painless Normal Delivery in Kolkata',
        description: "Normal delivery, also known as vaginal birth, is the natural process of giving birth without surgical intervention, facilitated by Dr. Ankita Mandal's expertise and comprehensive Pregnancy care.", 
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Painless-Normal-Delivery.png'
    },
    {
        title: 'Laparoscopic Gynaecological Surgery',
        description: "Laparoscopic or minimal access surgery is a minimally invasive technique with small incisions and specialized instruments for faster recovery...",
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Laparoscopic.png'
    },
    {
        title: 'In Vitro Fertilization (IVF) & Surrogacy', 
        description: "In Vitro Fertilization (IVF) is an advanced fertility treatment where eggs and sperm are combined outside the body for pregnancy, including assistance for Surrogacy.", 
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Ivf-kolkata.png'
    },
    {
        title: 'Preconception Counselling & Fetal Medicine', 
        description: "Periconception care and Preconceptional counselling is the promotion of the health and wellbeing of the woman, integrating Fetal Medicine practices for optimal outcomes.", 
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Preconception-counselling.png'
    },
    {
        title: 'Family Planning',
        description: "FAMILY PLANNING An unwanted and unplanned pregnancy at any age and stage of life can be ....",
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Family-Planning-with-Dr-Ankita-Mandal.png'
    },
    {
        title: 'Antenatal Care & Delivery',
        description: "Embrace the journey of life with curiosity and kindness, and watch how it unfolds beautifully.",
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Antenatal-Care-Delivery.jpg'
    },
    {
        title: 'High Risk Pregnancy & Advanced Genetics', 
        description: "Dr. Ankita Mandal specializes in High risk Pregnancy management, utilizing insights from Advanced Genetics for precise care and counseling.", 
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/High-Risk-Pregnancy-1.png'
    },
    {
        title: 'Hysteroscopy',
        description: "In hysteroscopy an instrument introduced through vagina and cervix to visualize the inside of the womb...",
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Hysteroscopy.png'
    },
    {
        title: 'Fibroid & Endometriosis',
        description: "Empowering women through education drives progress, breaking barriers, and fostering societal growth and equality.",
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Fibroid-Endometriosis.png'
    },
    {
        title: 'Infertility',
        description: "Infertility is a challenging medical condition that affects millions of individuals and couples worldwide. It refers to the inability.",
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Infertility-Dr.-Ankita.png'
    },
    {
        title: 'IUI (Intrauterine insemination )',
        description: "Dr. Ankita Mandal: A compassionate infertility specialist empowering dreams of parenthood through advanced care and expertise in Kolkata..",
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/IUI-Intrauterine-insemination-.png'
    },
    {
        title: 'Endocrine Disorders – PCOS',
        description: "PCOS: A complex hormonal disorder affecting women, characterized by irregular cycles, excess hair growth, and potential fertility challenges..",
        imageUrl: 'https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Endocrine-Disorders-%E2%80%93-PCOS.png'
    },
];

// --- NEW DATA: Achievements Stats (From image) ---
const achievementStats = [
    { icon: FileText, label: 'Happy Patients', value: '12000+' },
    { icon: Users, label: 'Successful Deliveries', value: '3500+' },
    { icon: Stethoscope, label: 'Successful Gynaecological Surgeries', value: '6000+' },
    { icon: Baby, label: 'Normal Delivery', value: '415+' },
    { icon: Settings, label: 'Year Of Experience', value: '12+' },
];


const clinicLocationsData = [
    {
        subtitle: 'Best Gynecologist in Kolkata',
        title: 'Gynecologist in Kolkata - Apollo Clinic',
        address: 'Apollo Clinic 13A H C Naskar Rd, Subhas Sarobar Park, Phool Bagan, Beleghata, Kolkata, West Bengal 700010',
    },
    {
        subtitle: 'Best Gynecologist in New town',
        title: 'Neotia Clinic, New Town',
        address: 'Bhagirathi Neotia Woman And Child Care Centre, 27- 0327, Street Number 0327, DG Block(Newtown), Action Area I, Newtown, Kolkata, New Town, West Bengal 700156',
    },
    {
        subtitle: 'Best Gynecologist in Salt Lake',
        title: 'Salt Lake Clinic',
        address: 'ILS Hospitals, Salt lake, DD 6, Salt Lake Bypass, DD Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064',
    },
    {
        subtitle: 'Fertility clinic in New Town',
        title: 'Maatritva Fertility IVF & Healthcare',
        address: '1st Floor, Axis Mall Multi Complex Area, 01-0184, Plot no.CF/9, Newtown, Kolkata, West Bengal 700107',
    },
];


const mainClinicInfo = {
    header: 'Clinic Locations Of Dr Ankita Mandal',
    title: 'Consult with Dr. Ankita Mandal',
    description: 'Dr. Ankita Mandal is one of the leading Gynecologist in Kolkata with attachment to several reputed clinics across the city. Explore your suitable and nearby Clinic.'
};

const testimonialsData = [
    {
        name: "Indrani Roy",
        date: "2023-08-17",
        rating: 5,
        review: "Dr. Ankita Mandal is one of the best Gynaecologist in Kolkata. She has taken care of my health during my pre-pregnancy journey. Highly recommended!",
        profileUrl: "https://lh3.googleusercontent.com/a-/AD_cMMR4YSb8u0RNMSmuOazh6n3z25nqT_gHyNDkhosLkkm0WAY=w80-h80-c-rp-mo-br100",
        initial: "I"
    },
    {
        name: "Sourav Kundu",
        date: "2023-08-17",
        rating: 5,
        review: "Throughout my wife's pregnancy journey, Dr. Ankita Mandal has been our pillar of support in Kolkata. Her care and comprehensive advice ensured a safe delivery.",
        profileUrl: "https://lh3.googleusercontent.com/a-/AD_cMMSfjtj4dvWRh3O1HpSI211MyljLtdFMyqKpq2pvYIiTCF7y=w80-h80-c-rp-mo-br100",
        initial: "S"
    },
    {
        name: "Atriya Neogi (titil)",
        date: "2023-08-16",
        rating: 5,
        review: "I am really very thankful to Dr. Ankita Mandal for bringing my baby boy safely to me. She is a very good human being with immense medical knowledge. Thank you, Doctor!",
        profileUrl: null, // Use initial if no picture
        initial: "A"
    },
    {
        name: "Dipika Chak",
        date: "2023-08-16",
        rating: 5,
        review: "Dr. Ankita Mandal is truly outstanding! From the moment I began my pregnancy journey, I knew I had found the perfect specialist. The support was incredible.",
        profileUrl: null,
        initial: "D"
    },
    {
        name: "Subrata Ghorui",
        date: "2023-08-16",
        rating: 5,
        review: "Kudos to Dr. Ankita Mandal for her remarkable care during my wife's high-risk pregnancy due to previous complications in my family. We are grateful for the outcome.",
        profileUrl: null,
        initial: "S"
    },
];


// --- Components (Font updates applied) ---

const StarRating = ({ rating }) => (
    <div className="flex items-center space-x-0.5">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={16}
                fill={i < rating ? '#FFC107' : '#E0E0E0'}
                stroke={i < rating ? '#FFC107' : '#BDBDBD'}
                className="transition duration-300"
            />
        ))}
    </div>
);

const ReviewAvatar = ({ name, profileUrl, initial }) => {
    if (profileUrl) {
        return (
            <img
                src={profileUrl}
                alt={`${name}'s profile`}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/f1f1f1/333333?text="+initial; }}
            />
        );
    }
    return (
        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-worksans font-bold text-lg">
            {initial}
        </div>
    );
};

const TestimonialCard = ({ name, date, rating, review, profileUrl, initial, delayIndex }) => {
    const [ref, isVisible] = useAOSSimulation(50);

    return (
        <div
            ref={ref}
            className={`
                p-6 bg-gray-900 rounded-xl shadow-2xl h-full transition-all duration-1000 ease-out flex flex-col justify-between
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${delayIndex * 100}ms` }}
        >
            {/* Header: Name, Date, Google Icon */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                    <ReviewAvatar name={name} profileUrl={profileUrl} initial={initial} />
                    <div>
                        <p className="text-white font-montserrat font-semibold text-sm">{name}</p>
                        <p className="text-gray-400 font-montserrat text-xs">{date}</p>
                    </div>
                </div>
                <Zap size={20} className="text-green-500 flex-shrink-0" />
            </div>

            {/* Rating and Review Text */}
            <div className="flex-grow">
                <StarRating rating={rating} />
                <p className="text-gray-200 font-montserrat text-sm mt-3 leading-relaxed line-clamp-5">
                    {review}
                </p>
                <a href="#" className="text-blue-400 font-montserrat text-xs mt-2 inline-block">Read more</a>
            </div>

        </div>
    );
};

// --- Blog Component (Font updates applied) ---
const BlogPostCard = ({ title, date, imageUrl, link, readTime, delayIndex }) => {
    const [ref, isVisible] = useAOSSimulation(100);
    return (
        <a
            href={link}
            ref={ref}
            className={`
                block bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ease-out transform
                hover:shadow-2xl hover:-translate-y-1
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${delayIndex * 150}ms` }}
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-40 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x200/93c5fd/1d4ed8?text=Blog"; }}
            />
            <div className="p-5">
                <p className="font-montserrat text-xs uppercase font-semibold text-blue-600 mb-1">{date}</p>
                <h3 className="font-worksans text-lg font-bold text-gray-800 leading-snug line-clamp-2">
                    {title}
                </h3>
                <div className="mt-3 flex justify-between items-center font-montserrat text-sm text-gray-500">
                    <span>{readTime}</span>
                    <ExternalLink size={16} />
                </div>
            </div>
        </a>
    );
};

// --- ClinicCard Component (Font updates applied) ---
const ClinicCard = ({ subtitle, title, address, delayIndex }) => {
    const [ref, isVisible] = useAOSSimulation(50);
    return (
        <div
            ref={ref}
            className={`
                p-8 bg-white rounded-xl shadow-lg h-full transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${delayIndex * 150}ms` }}
        >
            <p className="font-montserrat text-sm font-semibold text-red-400 mb-1">
                Dr. Ankita Mandal
            </p>
            <p className="font-montserrat text-sm font-medium text-red-500 mb-3">
                {subtitle}
            </p>
            <h3 className="font-worksans text-2xl font-bold text-gray-900 mb-4 leading-snug">
                {title}
            </h3>
            <p className="font-montserrat text-base text-gray-600 leading-relaxed">
                {address}
            </p>
            <a href={`https://www.google.com/maps/search/?api=1&query=$${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-blue-600 font-montserrat text-sm font-semibold">
                <MapPin size={16} className="mr-1"/> View Map
            </a>
        </div>
    );
};

// --- ServiceCard Component (Font updates applied) ---
const ServiceCard = ({ icon: Icon, title, description, delayIndex }) => {
    const [ref, isVisible] = useAOSSimulation(100);

    return (
        <div
            ref={ref}
            className={`
                flex flex-col items-start text-left p-6 sm:p-8 bg-white rounded-2xl shadow-xl border-t-4 border-blue-500 transition-all duration-1000 ease-out h-full
                hover:shadow-2xl hover:border-blue-600 transform hover:-translate-y-2 hover:scale-[1.01]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${delayIndex * 150}ms` }}
        >
            <div className="p-3 mb-4 rounded-full bg-blue-50 text-blue-600 border border-blue-200 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-worksans text-gray-900 font-bold mb-2 text-xl transition duration-300">{title}</h3>
            <p className="font-montserrat text-base text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

// --- NewSpecialisedServiceCard Component (Font updates applied) ---
const NewSpecialisedServiceCard = ({ title, description, imageUrl, delayIndex }) => {
    const [ref, isVisible] = useAOSSimulation(100);

    return (
        <div
            ref={ref}
            className={`
                flex flex-col items-start text-left bg-white rounded-lg shadow-xl transition-all duration-1000 ease-out h-full relative overflow-hidden
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${delayIndex * 150}ms` }}
        >
            {/* Top Text Content Area: Reduced padding and text size for smaller card */}
            <div className="p-6 pb-4 flex-grow space-y-2">
                <h3 className="font-worksans text-gray-900 font-medium mb-1 text-xl leading-snug">
                    {title}
                </h3>
                <p className="font-montserrat text-sm text-gray-600 leading-relaxed line-clamp-4">
                    {description}
                </p>
            </div>

            {/* Bottom Image and Icon Box Area: Reduced image height for perceived quality and compact size */}
            <div className="relative w-full mt-auto">
                <div className="w-full h-36 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x300/e0f2fe/1d4ed8?text=Service+Image"; }}
                    />
                </div>

                {/* Green Icon Box (Mimics the floating element in the image) */}
                <div className="absolute bottom-4 right-4 p-3 bg-green-700 text-white rounded-lg shadow-lg">
                    <Stethoscope size={24} />
                </div>
            </div>
        </div>
    );
};


// --- New Achievement Stats Section Component (Based on image) ---
const AchievementStatCard = ({ icon: Icon, label, value, delayIndex }) => {
    const [ref, isVisible] = useAOSSimulation(50);
    // Custom Teal background color derived from the image
    const tealBackground = "bg-[#008080]"; 

    return (
        <div
            ref={ref}
            className={`
                p-6 md:p-8 ${tealBackground} rounded-xl shadow-lg h-full text-center flex flex-col items-center justify-center space-y-4
                transition-all duration-1000 ease-out transform hover:scale-[1.03]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${delayIndex * 100}ms` }}
        >
            <div className="p-4 rounded-full bg-white/20 text-white border border-white/30">
                <Icon size={36} strokeWidth={1.5} />
            </div>
            <h3 className="font-worksans text-4xl font-extrabold text-white">
                {value}
            </h3>
            <p className="font-montserrat text-sm uppercase tracking-wider text-white/90">
                {label}
            </p>
        </div>
    );
};

const AchievementsSection = () => {
    // Note: achievementStats array is defined outside App component
    return (
        <section className="py-16 md:py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {achievementStats.map((stat, index) => (
                        <AchievementStatCard key={index} {...stat} delayIndex={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Main App Component ---
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeroLoaded, setIsHeroLoaded] = useState(false);

    // NEW: Scroll Direction state
    const [scrollDirection, scrollY] = useScrollDirection(10);

    // Apply AOS simulation to sections below the fold
    const [focusRef, isFocusVisible] = useAOSSimulation(150);
    const [aboutRef, isAboutVisible] = useAOSSimulation(150);
    const [clinicRef, isClinicVisible] = useAOSSimulation(150);
    const [testimonialsAOSRef, isTestimonialsVisible] = useAOSSimulation(150); 
    const [blogRef, isBlogVisible] = useAOSSimulation(150); 

    // NEW REF for Testimonial Carousel Scrolling
    const testimonialsCarouselRef = useRef(null);

    // FIX: Trigger hero animation immediately after mount
    useEffect(() => {
        setIsHeroLoaded(true);
    }, []);
    
    // NEW FUNCTION: Carousel Scrolling
    const scrollTestimonials = (direction) => {
        if (testimonialsCarouselRef.current) {
            const container = testimonialsCarouselRef.current;
            const cardElement = container.querySelector('.snap-center');
            const cardWidth = cardElement ? cardElement.offsetWidth : 350;
            const gap = 24; 
            const scrollAmount = cardWidth + gap;
            
            if (direction === 'left') {
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else if (direction === 'right') {
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };


    // A more subtle background pattern for a professional look
    const abstractPatternStyle = {
        backgroundImage: `linear-gradient(to right, #e0f2fe, #bfdbfe, #93c5fd)`,
    };

    const animationClasses = (delay) => (
        `transition-all duration-1000 ease-out ${isHeroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
    );

    return (
        // Global font changed to Montserrat
        <div className="min-h-screen bg-gray-50 font-montserrat antialiased">

            {/* 1. Navigation Bar (Font updates applied) */}
            <header
                className={`fixed w-full top-0 bg-white shadow-md z-50 py-4 lg:py-6 px-4 sm:px-8 lg:px-16 
                    transition-all duration-300 ease-in-out
                    ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}
            >
                <nav className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo - Font updated to Work Sans */}
                    <a href="#" className="flex items-center space-x-3 transition-transform duration-1000" style={{ transitionDelay: '100ms' }}>
                        <Heart className="w-8 h-8 text-blue-600 fill-blue-100" strokeWidth={1.5} />
                        <span className="font-worksans text-xl font-extrabold text-gray-800">
                            <span className="text-blue-600">Dr. Ankita</span> Health
                        </span>
                    </a>

                    {/* Desktop Links - Font updated to Montserrat */}
                    <div className="hidden lg:flex items-center space-x-8 text-base font-medium transition-opacity duration-1000" style={{ transitionDelay: '200ms' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-montserrat text-gray-700 hover:text-blue-600 transition duration-200 relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button className="font-worksans bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.05] active:scale-95 relative overflow-hidden">
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Menu Button (Unchanged) */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </header>

            {/* NEW: MOBILE MENU OVERLAY (Font updated to Work Sans) */}
            <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div className="pt-20 px-4 sm:px-8">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-worksans text-xl font-bold text-gray-800 hover:text-blue-600 border-b pb-2 transition duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            className="font-worksans bg-blue-600 text-white px-6 py-3 mt-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Book Now
                        </button>
                    </nav>
                </div>
            </div>

            {/* 2. Hero Section (Cleaned bold markers) */}
            <section className="relative pt-[90px] h-[90vh] min-h-[750px] overflow-hidden">
            <div
                className="absolute inset-0 w-full opacity-90 transition-all duration-1000"
                style={abstractPatternStyle}
            >
                <div className="absolute inset-0 bg-[url('/src/assets/medical-pattern.svg')] opacity-10 mix-blend-multiply"></div>

                {/* Extra background icons */}
                <svg className="absolute top-10 left-5 w-20 h-20 text-blue-200 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                </svg>
                <svg className="absolute bottom-20 right-10 w-32 h-32 text-blue-300 opacity-15" fill="currentColor" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="4" />
                </svg>
            </div>

            <div className="absolute inset-0 flex items-center pt-12 pb-12 px-4 sm:px-8 lg:px-16 z-10 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row w-full items-center justify-between">
                <div className="w-full lg:w-[55%] xl:w-3/5 order-2 lg:order-1 mt-12 lg:mt-0">
                    {/* Animated Text Block */}
                    <p
                    className={`${animationClasses('300ms')} font-montserrat font-light italic text-sm uppercase tracking-widest text-blue-600 mb-2`}
                    style={{ transitionDelay: '300ms' }}
                    >
                    Women's Health, Pregnancy care & Fertility Care.
                    </p>
                    <h1
                    className={`${animationClasses('500ms')} font-worksans font-light text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4`}
                    style={{ transitionDelay: '500ms' }}
                    >
                    Your Top Choice for the <span className="text-blue-600">Best Gynecologist</span> Near Me in Kolkata
                    </h1>
                    <h2
                    className={`${animationClasses('700ms')} font-montserrat text-xl sm:text-2xl font-normal text-gray-700 mb-8`}
                    style={{ transitionDelay: '700ms' }}
                    >
                    Dr. Ankita Mandal, <span className="font-montserrat font-light italic">OBGYN & Fertility Specialist</span>, Expert in Surrogacy and Advanced Genetics.
                    </h2>

                    {/* Contact and Location Cards */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">

                    {/* Contact Card */}
                    <a
                        href="tel:+918902135575"
                        className="flex items-center space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <Phone size={24} className="text-blue-600" />
                        <div>
                        <p className="font-montserrat font-medium text-blue-900 leading-none">Call Us</p>
                        <p className="font-montserrat font-light text-blue-700">+91 89021 35575</p>
                        </div>
                    </a>

                    {/* Location & Hours Card */}
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl shadow-sm">
                        <p className="font-montserrat font-medium text-blue-900 leading-none mb-1">Kolkata</p>
                        <p className="font-montserrat font-light italic text-blue-700">Mon-Sun: 9.00 - 20:00</p>
                    </div>
                    </div>

                    {/* Big BOOK APPOINTMENT Button */}
                    <a
                    href="#contact"
                    className="font-worksans bg-blue-600 text-white px-12 py-4 rounded-full shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-[1.05] active:scale-95 flex items-center justify-center space-x-2 font-light text-lg"
                    style={{ maxWidth: '320px' }}
                    >
                    <span>BOOK APPOINTMENT</span>
                    <span className="text-xl leading-none">→</span>
                    </a>
                </div>

                {/* Animated Image Block */}
                <div
                    className={`${animationClasses('700ms')} w-full lg:w-[45%] xl:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2`}
                    style={{ transitionDelay: '700ms' }}
                >
                    <div className="w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-full lg:h-[550px] relative rounded-3xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-blue-500/50 border-4 border-white transform hover:scale-[1.01] bg-white">
                    <img
                        src={doctorImage}
                        alt="Dr. Ankita Mandal, Best Gynecologist in Kolkata"
                        className="w-full h-full object-cover object-center filter brightness-[1.05]"
                        onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/800x1000/3b82f6/ffffff?text=Doctor+Image";
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl flex items-center space-x-3">
                        <Stethoscope className="w-6 h-6 text-blue-600" />
                        <span className="font-worksans text-sm font-light text-gray-800">4500+ Patients Served</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>




            {/* 3. Key Services Section - CORE FOCUS (Cleaned bold markers) */}
            <section id="services" className="relative mt-10 z-30 px-4 sm:px-8 lg:px-16 pb-16">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12 xl:gap-16">

                {/* Left Column: Focus Text and Stats */}
                <div ref={focusRef} className="lg:col-span-1 mb-10 lg:mb-0 pt-6 lg:pt-0">

                    {/* Section Title - Font updated */}
                    <div 
                    className={`mb-4 lg:text-left text-center transition-all duration-1000 ease-out ${isFocusVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                    style={{ transitionDelay: '0ms' }}
                    >
                    <p className="font-montserrat text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                        Our Specialized Care
                    </p>
                    <h2 className="font-worksans text-3xl sm:text-4xl font-extrabold text-gray-800">
                        <span className="text-blue-600">My Core</span> Focus
                    </h2>
                    </div>

                    {/* Main Focus Text - Cleaned bold markers */}
                    <p 
                    className="font-montserrat text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 bg-white p-4 shadow-lg rounded-xl transition-all duration-1000 ease-out" 
                    style={{ transitionDelay: '150ms' }}
                    >
                    Dr. Ankita Mandal offers comprehensive and compassionate care, specializing in High risk Pregnancy, Fetal Medicine, and Breast Clinic services, ensuring the best outcomes for her patients.
                    </p>

                    {/* Stats Section - Font updated */}
                    <div className="flex flex-col space-y-4">
                    {focusStats.map((stat, index) => (
                        <div
                        key={index}
                        className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-xl border-b-4 border-red-500/80 transition-all duration-1000 hover:shadow-2xl ${
                            isFocusVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${300 + index * 150}ms` }}
                        >
                        <stat.icon size={36} strokeWidth={1.5} className="text-red-600 flex-shrink-0" />
                        <div>
                            <p className="font-worksans text-3xl font-extrabold text-gray-900">{stat.value}</p>
                            <p className="font-montserrat text-sm uppercase tracking-wider text-gray-600 font-semibold">{stat.label}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Right Column: Detailed Services Grid - Component fonts are updated internally */}
                <div className="lg:col-span-2 lg:pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {detailServices.map((service, index) => (
                        <div key={index} className="h-full">
                        <ServiceCard {...service} delayIndex={index} />
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* 3.5. NEW SPECIALISED SERVICES SECTION (Cleaned bold markers) */}
            <section className="py-16 md:py-24 bg-white font-montserrat">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

                    {/* Section Header and Description - Font updated */}
                    <div className="text-center mb-12 lg:mb-16">

                        {/* Top Subtitle: font-montserrat */}
                        <p className="font-montserrat text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                            Dr Ankita Mandal's Specialised Services
                        </p>

                        {/* Main Title: font-worksans */}
                        <h2 className="font-worksans text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
                            <span className="text-blue-600">Comprehensive</span> Women's Health
                        </h2>

                        {/* Description Paragraph (Cleaned bold markers) */}
                        <p className="font-montserrat text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Elevating care through expertise in High risk Pregnancy, minimal access surgery, and Basic fertility treatment and Ovam donation procedures.
                        </p>
                    </div>

                    {/* Service Cards Grid - Component fonts are updated internally */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Display all 12 services in the main grid, staggered */}
                        {specialisedServicesData.map((service, index) => (
                            <div key={index} className="h-full">
                                <NewSpecialisedServiceCard {...service} delayIndex={index} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* END NEW SPECIALISED SERVICES SECTION */}

            {/* 3.6. UPDATED TESTIMONIALS SECTION (UI Fixes and Font updates applied) */}
            <section id="testimonials" className="py-16 md:py-24 bg-gray-100 font-montserrat overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

                    {/* Section Header: Updated fonts */}
                    <div className="text-center mb-12 lg:mb-16">

                        {/* Subtitle Style: font-montserrat */}
                        <p className="font-montserrat text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                            What Our Patients Say
                        </p>

                        {/* Main Title Style: font-worksans */}
                        <h2 className="font-worksans text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
                            <span className="text-blue-600">Patient</span> Testimonials
                        </h2>

                        {/* Combined Rating Block (Updated fonts) */}
                        <div className="flex justify-center items-center space-x-3 mt-6">
                            <p className="font-worksans text-2xl font-bold text-gray-800">
                                Excellent
                            </p>
                            <StarRating rating={5} />
                            <p className="font-montserrat text-sm text-gray-600">
                                (Based on 545 Google Reviews)
                            </p>
                        </div>
                    </div>

                    {/* Testimonial Cards Carousel/Slider Wrapper with Navigation (Fixed Alignment) */}
                    <div ref={testimonialsAOSRef} className={`relative transition-all duration-1000 ease-out ${isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        
                        {/* Navigation Buttons - Centering Fixed and positioned slightly outside main content */}
                        <button
                            onClick={() => scrollTestimonials('left')}
                            className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 text-blue-600 hover:bg-blue-50 transition-colors hidden md:block"
                            aria-label="Previous Testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={() => scrollTestimonials('right')}
                            className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 text-blue-600 hover:bg-blue-50 transition-colors hidden md:block"
                            aria-label="Next Testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Testimonial Cards Carousel/Slider Structure - Added items-center for vertical alignment */}
                        <div
                            ref={testimonialsCarouselRef} 
                            className={`flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-4 items-stretch 
                                        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`} 
                            style={{ minHeight: '400px' }}
                        >
                            {testimonialsData.map((review, index) => (
                                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 snap-center h-full">
                                    <TestimonialCard {...review} delayIndex={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* END UPDATED TESTIMONIALS SECTION */}

            {/* 3.7. Blog/News Section (Font updates applied) */}
<section id='blog' ref={blogRef} className="py-16 md:py-24 bg-white font-montserrat">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <p className="font-montserrat text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                            Dr. Ankita's Resources
                        </p>
                        <h2 className="font-worksans text-3xl sm:text-4xl font-extrabold text-gray-800">
                            <span className="text-blue-600">Latest</span> News & Health Insights
                        </h2>
                    </div>

                    {/* 4 Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Comprehensive Guide to High-Risk Pregnancy Management",
                                date: "Oct 25, 2024",
                                readTime: "10 min",
                                description: "This article covers advanced protocols and care strategies for high-risk obstetric cases handled by Dr. Mandal's team.",
                                imageUrl: "https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Normal-Delivery-Ankita.png",
                                link: "#"
                            },
                            {
                                title: "Understanding Common UTIs",
                                date: "Oct 20, 2024",
                                readTime: "5 min",
                                description: "Learn about prevention, symptoms, and treatment options for urinary tract infections in women.",
                                imageUrl: "https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Urinary-tract-infections.png",
                                link: "/UTIBlogPage" 
                            },
                            {
                                title: "The Truth About Home Pregnancy Tests",
                                date: "Oct 15, 2024",
                                readTime: "7 min",
                                description: "Everything you need to know about accuracy, timing, and interpreting home pregnancy test results.",
                                imageUrl: "https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/uploads/2023/07/Home-Pregnancy-Tests.png",
                                link: "#"
                            },
                            {
                                title: "Why Minimal Access Surgery is the Future",
                                date: "Oct 10, 2024",
                                readTime: "8 min",
                                description: "Discover the benefits of minimally invasive surgical techniques and faster recovery times.",
                                imageUrl: "https://cdn-jocll.nitrocdn.com/hQUgeajacjAkMrrMkoeDZXmZRJYVkPYl/assets/images/optimized/rev-2ac65ec/drankitamandal.com/wp-content/themes/drankita/assets/images/resources/why-choose-img-1.jpg",
                                link: "#"
                            },
                        ].map((post, index) => (
                            <a
                                href={post.link} // Use the specific link
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden
                                    transition-all duration-300 ease-in-out
                                    hover:shadow-2xl hover:scale-[1.02] h-full flex flex-col"
                            >
                                {/* ... Card content remains the same, except wrapping the whole card in <a> */}
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <p className="font-montserrat text-xs uppercase tracking-wider text-red-500 font-semibold mb-2">
                                        {post.readTime} read · {post.date}
                                    </p>
                                    <h4 className="font-worksans text-lg sm:text-xl font-extrabold text-gray-900 mb-3 line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <p className="font-montserrat text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                                        {post.description}
                                    </p>
                                    <div className="font-montserrat inline-flex items-center text-blue-600 text-sm font-semibold hover:text-red-500 transition duration-300 mt-auto">
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Explore All Button */}
                    <div className="text-center mt-12">
                        <a
                            href="#"
                            className="font-montserrat px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg
                hover:bg-red-700 transition duration-300 inline-flex items-center"
                        >
                            Explore All Articles
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            
            {/* NEW SECTION: ACHIEVEMENTS STATS */}
            <AchievementsSection />


            {/* 4. NEW CLINIC LOCATIONS SECTION (Font updates applied) */}
            <section className="py-16 md:py-24 bg-gray-100 font-montserrat">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

                    {/* Section Header */}
                    <div className="text-center mb-8 lg:mb-12">
                        <p className="font-montserrat text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                            {mainClinicInfo.header}
                        </p>
                        <h2 className="font-worksans text-3xl sm:text-4xl font-extrabold text-gray-800">
                            <span className="text-blue-600">{mainClinicInfo.title.split(' ')[0]}</span> {mainClinicInfo.title.split(' ').slice(1).join(' ')}
                        </h2>
                        <p className="font-montserrat text-base text-gray-600 max-w-3xl mx-auto mb-8 mt-4">
                            {mainClinicInfo.description}
                        </p>
                    </div>

                    {/* Clinic Cards Grid - Component fonts are updated internally */}
                    <div ref={clinicRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {clinicLocationsData.map((clinic, index) => (
                            <div key={index}>
                                <ClinicCard {...clinic} delayIndex={index} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* END CLINIC LOCATIONS SECTION */}

            {/* 5. About Dr. Ankita Mandal (Cleaned bold markers) */}
            <section id='contact' ref={aboutRef} className="bg-gray-50 text-gray-900 py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
                <div
                    className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 transition-all duration-1000 ease-out ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '0ms' }}
                >

                    {/* Left Column: Media (Image & Video) - Col-span 1 */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Doctor's Image (Simple shadow/rounding) */}
                        <div className="w-full rounded-2xl shadow-xl overflow-hidden aspect-[4/5]">
                            <img
                                src={doctorImage2}
                                alt="Dr. Ankita Mandal Professional Profile"
                                className="w-full h-full object-cover object-center"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x1000/3b82f6/ffffff?text=Doctor+Image"; }}
                            />
                        </div>

                        {/* Video Link Card (Font updated) */}
                        <div className="p-5 bg-blue-100 rounded-xl shadow-md">
                            <h4 className="font-worksans text-lg font-bold text-blue-700 mb-2">
                                Video Introduction
                            </h4>
                            <p className="font-montserrat text-sm text-gray-600 mb-3">
                                Get to know Dr. Ankita Mandal, Consultant Gynaecologist in Kolkata.
                            </p>
                            <a
                                href="http://www.youtube.com/watch?v=o2K_WqUyhWc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-montserrat inline-flex items-center text-blue-600 font-semibold hover:text-red-500 transition duration-300"
                            >
                                Watch Full Video (00:38)
                                <Zap size={16} className="ml-2" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Text Content and Details - Col-span 2 (Cleaned bold markers) */}
                    <div className="lg:col-span-2 space-y-6">

                        <h2 className="font-worksans text-4xl font-extrabold text-gray-800 border-b pb-2 border-blue-100">
                            About Dr. Ankita Mandal
                        </h2>

                        {/* Bio Block */}
                        <div className="space-y-4">
                            <h3 className="font-worksans text-xl font-bold text-blue-600">
                                Best Gynecologist & Fertility Specialist in Kolkata
                            </h3>
                            <p className="font-montserrat text-base text-gray-700 leading-relaxed">
                                Dr. Ankita Mandal is recognized among the top 5 gynecologists in Kolkata, serving as a Consultant Gynaecologist, Obstetrician, Infertility Specialist and Gynaecological Laparoscopic Surgeon. She provides specialized Breast Clinic and Diet consultation services.
                            </p>
                            <p className="font-montserrat text-base text-gray-700 leading-relaxed">
                                A graduate of SCB Medical College Cuttack and RIMS Ranchi, she holds a fellowship in Infertility and an Advanced Diploma in Reproductive Medicine and ART from KIEL, Germany. Expertise includes Preconceptional counselling and managing Fetal Medicine cases.
                            </p>
                        </div>

                        {/* Professional Affiliations/Locations */}
                        <div className="pt-4 border-t border-gray-200 space-y-4">
                            <h4 className="font-worksans text-lg font-bold text-gray-800 uppercase tracking-widest">
                                Consulting & Professional Details
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 list-none p-0">
                                <li className="font-montserrat text-base text-gray-700 flex items-start space-x-3">
                                    <MapPin size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                                    <span>ILS Hospital Sondi, Damdam Charnock Hospital, Ruby General Hospital.</span>
                                </li>
                                <li className="font-montserrat text-base text-gray-700 flex items-start space-x-3">
                                    <Phone size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                    <a href="tel:+91 89021 35575 " className="hover:text-blue-600 transition">+918902135575 (Direct Line)</a>
                                </li>
                                <li className="font-montserrat text-base text-gray-700 flex items-start space-x-3">
                                    <ClipboardList size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                                    <span>Specializes in Laparoscopic hysteroscopy, High risk Pregnancy, and Advanced Genetics.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Simple Call to Action */}
                        <div className="pt-6 border-t border-gray-200">
                            <a href="https://maatritvaivffertility.com/appointmentnpm install react-router-dom" className="font-worksans inline-flex text-white bg-red-600 hover:bg-red-700 font-semibold px-6 py-3 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.02]">
                                Request Online Consultation
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. Contact Info Footer Section (Cleaned bold markers) */}
            <footer className="bg-gray-900 pt-16 pb-8 border-t border-blue-700 font-montserrat text-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">

                    {/* CHANGED GRID TO 3 EQUAL COLUMNS FOR BETTER SPACING */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-gray-700/50 pb-12 mb-8">

                        {/* Column 1: Clinic Specialties & Focus */}
                        <div className="lg:col-span-1">
                            <h4 className="font-worksans text-xl font-extrabold text-blue-400 mb-4">
                                Dr. Ankita Mandal
                            </h4>
                            <p className="text-sm font-montserrat leading-relaxed mb-4">
                                Consultant Gynaecologist, Obstetrician, Pregnancy care Specialist, Laparoscopic Surgeon, Infertility Specialist.
                            </p>
                            <p className="text-sm font-montserrat font-semibold text-white mb-2">Specializing in:</p>
                            <ul className="text-xs font-montserrat space-y-1 list-disc list-inside ml-2">
                                <li>Painless Normal Delivery</li>
                                <li>Laparoscopic or Minimal Access Surgery</li>
                                <li>Surrogacy & Ovam donation</li>
                                <li>High risk Pregnancy & Fetal Medicine</li>
                                <li>Breast Clinic & Diet consultation</li>
                                <li>Hysteroscopy</li>
                                <li>Fibroid & Endometriosis</li>
                                <li>Infertility & PCOS (Basic fertility treatment)</li>
                            </ul>
                        </div>

                        {/* Column 2: Contact & Service Areas (Phone Moved to Top) */}
                        <div className="md:col-span-1">
                            <h4 className="font-worksans text-xl font-extrabold text-blue-400 mb-4">
                                Contact & Hours
                            </h4>

                            {/* MOVED: Appointment Phone is now the first content item */}
                            <div className="flex items-center space-x-3 mb-4">
                                {/* Phone Placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.01-6.01 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <p className="text-sm font-montserrat font-semibold text-white">+91 89021 35575 (Call for Appointment)</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    {/* Mail */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 flex-shrink-0 mt-1"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    <p className="text-sm font-montserrat">dr.ankitamandalkol@gmail.com</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    {/* MapPin Placeholder for Location */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 flex-shrink-0 mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    <p className="text-sm font-montserrat">
                                        Service Areas: Beleghata, Kasba, Ultadanga, Ballygunge, Kankurgachi, Bidhannagar, Salt lake, New Town, Baguiati, Chinar Park, Dum Dum, Kestopur, Rajarhat
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Follow Us, Phone, and Hours */}
                        <div className="lg:col-span-1">
                            <h4 className="font-worksans text-xl font-extrabold text-blue-400 mb-4">
                                Follow Us & Find Us
                            </h4>

                            {/* Open Hours */}
                            <div className="mb-4 font-montserrat">
                                <p className="text-sm font-semibold text-white">Open Hours</p>
                                <p className="text-sm">Mon – Sun: 8:00 am to 8:00 pm</p>
                            </div>

                            {/* Social Media Icons/Links (Unchanged) */}
                            <div className="flex space-x-4 mb-4">
                                <a href="https://www.google.com/maps/place/Dr.+Ankita+Mandal+(Gold)+-+Best+Gynecologist+in+Kolkata+l+Best+Fertility+doctor+in+Kolkatal+Best+IVF+Centre+in+Kolkata/@22.5640762,88.3190117,13z/data=!4m6!3m5!1s0x3a027777dd0e331d:0x13adedc3d4d0f658!8m2!3d22.5640798!4d88.3952288!16s%2Fg%2F11qh427yt6?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
                                    {/* Google Maps/Location Pin Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 hover:text-red-400"><path d="M12 21.7c-3.7 0-6.7-3-6.7-6.7 0-4.6 6.7-14 6.7-14s6.7 9.4 6.7 14c0 3.7-3 6.7-6.7 6.7z"/><circle cx="12" cy="15" r="3"/></svg>
                                </a>
                                <a href="https://www.facebook.com/drankitamandal/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
                                    {/* Facebook Icon Placeholder */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.97 3.63 9.08 8.41 9.85V14.8h-2.54v-2.8h2.54V9.74c0-2.53 1.54-3.92 3.82-3.92 1.09 0 2.02.08 2.29.12v2.62h-1.55c-1.22 0-1.45.58-1.45 1.43v1.85h2.91l-.48 2.8h-2.43V21.85C18.37 21.08 22 16.97 22 12z"/></svg>
                                </a>
                                <a href="https://www.youtube.com/channel/UCHmLVC7M5VfYubEfVP9xX-g" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition duration-300">
                                    {/* YouTube Icon Placeholder */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.19c-.23-.86-.94-1.56-1.8-1.8C18.82 5 12 5 12 5s-6.82 0-7.78.39c-.86.23-1.57.94-1.8 1.8C2 8.16 2 12 2 12s0 3.84.42 4.81c.23.86.94 1.56 1.8 1.8C5.18 19 12 19 12 19s6.82 0 7.78-.39c.86-.23 1.57-.94 1.8-1.8C22 15.84 22 12 22 12s0-3.84-.42-4.81zM10 15.22V8.78l6 3.22-6 3.22z"/></svg>
                                </a>
                                <a href="https://www.instagram.com/dr.ankitamandal/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
                                    {/* Instagram Icon Placeholder */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="instagram-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4.02 0 0 1 12 16a4 4.02 0 0 1-4-4.63zm-4 4.63c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
                                </a>
                            </div>

                            <p className="text-sm font-montserrat">How to find the best gynaecologist in Kolkata- Dr.Ankita is here for you in Kolkata.</p>
                        </div>

                    </div>

                    {/* Footer Bottom Row (Copyright and Developer Info) */}
                    <div className="text-center sm:flex sm:justify-between items-center text-xs space-y-3 sm:space-y-0 font-montserrat">
                        <p>
                            © All Copyright 2025 by Dr. Ankita Mandal | All Rights Reserved.
                        </p>
                        <p>
                            Developed by: <a href="https://in.linkedin.com/company/tag-easy?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-red-400 transition duration-300">TAG EASY LLP</a>
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default App;
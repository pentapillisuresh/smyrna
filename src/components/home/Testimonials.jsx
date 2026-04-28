import React, { useEffect, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      position: 'CEO',
      company: 'TechSolutions India',
      rating: 5,
      content: 'Smyrna Consultancy has been instrumental in keeping our company compliant with all labour laws. Their team is professional, responsive, and extremely knowledgeable.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      location: 'Mumbai'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'HR Director',
      company: 'Global Enterprises',
      rating: 5,
      content: 'Outstanding service! They handle all our payroll and compliance needs seamlessly. Their expertise in statutory compliance has saved us from legal issues.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      location: 'Delhi'
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Founder',
      company: 'StartupHub',
      rating: 5,
      content: 'Best decision we made was partnering with Smyrna Consultancy. Their contract staffing solutions helped us scale quickly without HR headaches.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      location: 'Bangalore'
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Initialize AOS and Auto-carousel
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={`${i < rating ? 'text-orange-500' : 'text-gray-300'} text-sm`} />
    ));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
         {/* RIGHT SIDE: AUTO CAROUSEL */}
        <div className="w-full lg:w-1/2 bg-gray-50 flex items-center justify-center p-8 md:p-16 lg:p-24 relative">
          <div className="max-w-xl w-full" key={currentIndex} data-aos="fade-left">
            <FaQuoteLeft className="text-orange-200 text-6xl absolute top-12 left-12 opacity-50" />
            
            <div className="relative z-10">
              <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Testimonials</span>
              <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-8">What Our Clients Say</h3>
              
              <p className="text-gray-600 text-xl italic leading-relaxed mb-8">
                "{current.content}"
              </p>

              <div className="flex items-center gap-4 mb-8">
                {current.image ? (
                  <img src={current.image} alt={current.name} className="w-14 h-14 rounded-full border-2 border-orange-500" />
                ) : (
                  <FaUserCircle className="w-14 h-14 text-gray-400" />
                )}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{current.name}</h4>
                  <p className="text-gray-500 text-sm">{current.position}, {current.company}</p>
                  <div className="flex mt-1">{renderStars(current.rating)}</div>
                </div>
              </div>

              {/* Navigation & Dots */}
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  <button onClick={prevTestimonial} className="p-3 rounded-full border border-gray-300 hover:bg-orange-600 hover:text-white transition-colors">
                    <FaChevronLeft size={14}/>
                  </button>
                  <button onClick={nextTestimonial} className="p-3 rounded-full border border-gray-300 hover:bg-orange-600 hover:text-white transition-colors">
                    <FaChevronRight size={14}/>
                  </button>
                </div>

                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 transition-all duration-300 rounded-full ${
                        currentIndex === idx ? 'w-8 bg-orange-600' : 'w-3 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT SIDE: STATIC IMAGE */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
          <img 
            src="./images/testmonial.jpg" 
            alt="Our Clients" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-orange-900/20 mix-blend-multiply"></div>

        </div>

       

      </div>

    
    </section>
  );
};

export default Testimonials;
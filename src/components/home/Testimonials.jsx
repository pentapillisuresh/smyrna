import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      position: 'CEO',
      company: 'TechSolutions India',
      rating: 5,
      content: 'Smyrna Consultancy has been instrumental in keeping our company compliant with all labour laws. Their team is professional, responsive, and extremely knowledgeable. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      location: 'Mumbai'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'HR Director',
      company: 'Global Enterprises',
      rating: 5,
      content: 'Outstanding service! They handle all our payroll and compliance needs seamlessly. Their expertise in statutory compliance has saved us from potential legal issues multiple times.',
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={`${i < rating ? 'text-orange-500' : 'text-gray-300'} text-lg`} />
    ));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            What Our <span className="text-orange-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by 500+ businesses across India
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                <FaQuoteLeft className="text-orange-600 text-2xl" />
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-center mb-8">
              "{current.content}"
            </p>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {renderStars(current.rating)}
            </div>

            {/* Client Info */}
            <div className="text-center">
              {current.image ? (
                <img 
                  src={current.image} 
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                />
              ) : (
                <FaUserCircle className="w-16 h-16 text-gray-400 mx-auto mb-3" />
              )}
              <h4 className="text-xl font-bold text-gray-800">{current.name}</h4>
              <p className="text-gray-500">{current.position}, {current.company}</p>
              <p className="text-orange-600 text-sm mt-1">{current.location}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-600 text-orange-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaChevronLeft />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx 
                        ? 'w-8 bg-orange-600' 
                        : 'w-2 bg-orange-200 hover:bg-orange-400'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-600 text-orange-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">500+</div>
            <div className="text-sm text-gray-500">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">98%</div>
            <div className="text-sm text-gray-500">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">4.9</div>
            <div className="text-sm text-gray-500">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
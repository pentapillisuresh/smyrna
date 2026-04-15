import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Button from '../common/Button';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  
  const bannerImages = [
    {
      url: '/images/payroll.jpg',
      alt: 'Payroll Services',
      title: 'Payroll & H.R Audit',
      description: 'Payroll, ESS, HR Audit, Attendance, Leave, Reports',
      features: ['Payroll', 'ESS', 'Audit']
    },
    {
      url: '/images/hr.jpg',
      alt: 'Human Resources',
      title: 'Human Resources',
      description: 'Leading People, Leading Organizations',
      features: ['Training', 'Talent', 'Planning']
    },
    {
      url: '/images/pf.jpg',
      alt: 'Labour Laws',
      title: 'PF, ESI, Labour Laws & Allied Services',
      description: 'ESI, Labour Law, Gratuity Bonus, Contract Labour, Minimum Wage',
      features: ['PF', 'ESI', 'Compliance']
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    setAnimationKey(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
    setAnimationKey(prev => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Zoom Out Animation - No Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div 
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out animate-zoom-out"
          style={{
            backgroundImage: `url(${bannerImages[currentIndex].url})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
        <div className="max-w-4xl">
          {/* Title with enhanced animation - Reduced size */}
          <div key={`title-${animationKey}`} className="mb-4 overflow-hidden">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 animate-title-reveal"
              style={{ 
                fontFamily: "'Mulish', 'Mulish Fallback', sans-serif",
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              {bannerImages[currentIndex].title}
            </h1>
          </div>

          {/* Description with fade up animation */}
          <div key={`desc-${animationKey}`} className="mb-6 overflow-hidden">
            <p 
              className="text-gray-200 text-base md:text-lg lg:text-xl animate-fade-up"
              style={{ 
                fontFamily: "'Mulish', 'Mulish Fallback', sans-serif",
                lineHeight: '1.6'
              }}
            >
              {bannerImages[currentIndex].description}
            </p>
          </div>

          {/* Features List with staggered animation */}
          <div className="flex flex-wrap gap-4 mb-8">
            {bannerImages[currentIndex].features.map((feature, idx) => (
              <div 
                key={`${feature}-${animationKey}-${idx}`} 
                className="flex items-center gap-2 animate-feature-slide"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <HiCheckCircle className="text-orange-500 text-lg flex-shrink-0 animate-scale-in" />
                <span className="text-gray-200 text-sm md:text-base font-semibold tracking-wide">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons with reduced size */}
          <div className="flex flex-col sm:flex-row gap-3 animate-buttons-slide">
            <Button to="/contact" size="sm" variant="primary" className="transform transition-transform hover:scale-105 text-sm px-4 py-2">
              Get Free Consultation
              <HiArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
            </Button>
            <Button to="/services" size="sm" variant="outline" className="transform transition-transform hover:scale-105 text-sm px-4 py-2">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="text-xl" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <HiChevronRight className="text-xl" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAnimationKey(prev => prev + 1);
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-1.5 bg-orange-500'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-scroll-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        /* Import Mulish font */
        @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        @keyframes zoom-out {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-zoom-out {
          animation: zoom-out 1s ease-out forwards;
        }
        
        @keyframes title-reveal {
          0% {
            opacity: 0;
            transform: translateY(50px);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        
        .animate-title-reveal {
          animation: title-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        @keyframes feature-slide {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-feature-slide {
          animation: feature-slide 0.5s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        @keyframes buttons-slide {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-buttons-slide {
          animation: buttons-slide 0.7s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        @keyframes scroll-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(8px);
          }
        }
        
        .animate-scroll-pulse {
          animation: scroll-pulse 1.5s ease-in-out infinite;
        }
        
        /* Responsive font adjustments */
        @media (max-width: 768px) {
          .animate-title-reveal {
            font-size: 2.5rem !important;
          }
        }
        
        @media (max-width: 640px) {
          .animate-title-reveal {
            font-size: 2rem !important;
          }
        }
        
        /* Hover effects */
        button:hover {
          transform: scale(1.05);
        }
        
        /* Smooth transitions */
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
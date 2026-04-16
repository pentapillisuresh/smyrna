import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Button from '../common/Button';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sectionRef = useRef(null);
  
  const bannerImages = [
    {
      url: '/images/hr.jpg',
      alt: 'Human Resources',
      title: 'Human Resources',
      description: 'Leading People, Leading Organizations',
      features: ['Training', 'Talent', 'Planning']
    },
    {
      url: '/images/payroll.jpg',
      alt: 'Payroll Services',
      title: 'Payroll & H.R Audit',
      description: 'Payroll, ESS, HR Audit, Attendance, Leave, Reports',
      features: ['Payroll', 'ESS', 'Audit']
    },
    {
      url: '/images/pf.jpg',
      alt: 'Labour Laws',
      title: 'PF, ESI, Labour Laws & Allied Services',
      description: 'ESI, Labour Law, Gratuity Bonus, Contract Labour, Minimum Wage',
      features: ['PF', 'ESI', 'Compliance']
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    setAnimationKey(prev => prev + 1);
  }, [bannerImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
    setAnimationKey(prev => prev + 1);
  }, [bannerImages.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Pause auto-slide on hover/touch
  const handleMouseEnter = () => {
    // Auto-slide will be paused by clearing interval
    // We'll handle this by clearing and resetting interval
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image with Zoom Out Animation */}
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Title with enhanced animation - Responsive text sizes */}
          <div key={`title-${animationKey}`} className="mb-3 sm:mb-4 md:mb-5 overflow-hidden">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 sm:mb-4 animate-title-reveal"
              style={{ 
                fontFamily: "'Mulish', 'Mulish Fallback', sans-serif",
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              {bannerImages[currentIndex].title}
            </h1>
          </div>

          {/* Description with fade up animation - Responsive text */}
          <div key={`desc-${animationKey}`} className="mb-5 sm:mb-6 md:mb-7 overflow-hidden px-2 sm:px-0">
            <p 
              className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl animate-fade-up max-w-2xl mx-auto lg:mx-0"
              style={{ 
                fontFamily: "'Mulish', 'Mulish Fallback', sans-serif",
                lineHeight: '1.5'
              }}
            >
              {bannerImages[currentIndex].description}
            </p>
          </div>

          {/* Features List with staggered animation - Responsive grid/flex */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8 justify-center lg:justify-start">
            {bannerImages[currentIndex].features.map((feature, idx) => (
              <div 
                key={`${feature}-${animationKey}-${idx}`} 
                className="flex items-center gap-1.5 sm:gap-2 animate-feature-slide bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <HiCheckCircle className="text-orange-500 text-sm sm:text-base md:text-lg flex-shrink-0 animate-scale-in" />
                <span className="text-gray-200 text-xs sm:text-sm md:text-base font-semibold tracking-wide">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Responsive sizing */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-buttons-slide justify-center lg:justify-start">
            <Button 
              to="/contact" 
              size="sm" 
              variant="primary" 
              className="transform transition-transform hover:scale-105 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 w-full sm:w-auto"
            >
              Get Free Consultation
              <HiArrowRight className="ml-2 text-sm sm:text-base transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              to="/services" 
              size="sm" 
              variant="outline" 
              className="transform transition-transform hover:scale-105 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 w-full sm:w-auto"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows - Hidden on mobile, visible on tablet+ */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 lg:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm items-center justify-center"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="text-lg lg:text-xl" />
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 lg:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm items-center justify-center"
        aria-label="Next slide"
      >
        <HiChevronRight className="text-lg lg:text-xl" />
      </button>

      {/* Mobile Swipe Hint */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 md:hidden">
        <div className="flex gap-1 text-white/40 text-xs">
          <span>← Swipe →</span>
        </div>
      </div>

      {/* Carousel Indicators - Improved touch targets */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAnimationKey(prev => prev + 1);
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-6 sm:w-8 h-1.5 bg-orange-500'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
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
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
          
          .animate-feature-slide {
            animation-duration: 0.4s;
          }
        }
        
        /* Small screen adjustments */
        @media (max-width: 480px) {
          .animate-title-reveal {
            font-size: 1.75rem !important;
          }
        }
        
        /* Smooth transitions */
        .transition-all {
          transition: all 0.3s ease;
        }
        
        /* Prevent text selection during swipe */
        .no-select {
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
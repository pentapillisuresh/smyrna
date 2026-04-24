import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&h=900&fit=crop',
      title: 'Smyrna Consulting Solutions',
      subtitle: 'Since 2008 — Excellence in Compliance & Legal Consultancy',
      description: 'Trusted by 70+ clients across India for Statutory Audits, HR Solutions & Labour Law Compliance',
      tag: 'Trusted Partner'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop',
      title: 'Expert Legal Consultancy',
      subtitle: 'End-to-End Statutory Compliance Solutions',
      description: 'From registrations to renewals, audits to advisory — we handle all labour laws and statutory requirements',
      tag: 'Legal Expertise'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1600&h=900&fit=crop',
      title: 'HR Audit & Payroll Solutions',
      subtitle: 'Streamline Your HR Operations',
      description: 'HRMS software, payroll management, and comprehensive HR audits for hotels, retail, manufacturing & ITES',
      tag: 'HR Excellence'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&h=900&fit=crop',
      title: 'Pan India Compliance Services',
      subtitle: 'South India Specialists — Telangana, AP, Karnataka, TN, Kerala',
      description: 'Registration & Renewals | Monthly Compliance | Audits | Government Liaison | Labour Law Advisory',
      tag: 'Pan India Coverage'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&h=900&fit=crop',
      title: 'Statutory Audit & Due Diligence',
      subtitle: 'Multi-layered Compliance Checks',
      description: 'Monthly, quarterly & yearly audits | Corrective measures | Compliance score improvement',
      tag: 'Audit Services'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop',
      title: 'Trusted by Industry Leaders',
      subtitle: 'TATA Projects | CtrlS | Hero Future Energies | Motilal Oswal',
      description: 'Join 70+ prestigious clients who rely on Smyrna for statutory compliance and legal excellence',
      tag: 'Our Clients'
    },
  ];

  const handlePrev = useCallback(() => {
    if (swiperInstance && !isAnimating) {
      setIsAnimating(true);
      swiperInstance.slidePrev();
      setTimeout(() => setIsAnimating(false), 1300);
    }
  }, [swiperInstance, isAnimating]);

  const handleNext = useCallback(() => {
    if (swiperInstance && !isAnimating) {
      setIsAnimating(true);
      swiperInstance.slideNext();
      setTimeout(() => setIsAnimating(false), 1300);
    }
  }, [swiperInstance, isAnimating]);

  useEffect(() => {
    if (swiperInstance) {
      const handleSlideChange = () => {
        setActiveIndex(swiperInstance.realIndex);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1300);
      };
      swiperInstance.on('slideChange', handleSlideChange);
      return () => {
        swiperInstance.off('slideChange', handleSlideChange);
      };
    }
  }, [swiperInstance]);

  useEffect(() => {
    if (swiperInstance) {
      const progressBar = document.querySelector('.hero-progress-bar-fill');
      if (progressBar) {
        const updateProgress = () => {
          const progress = (swiperInstance.realIndex + 1) / banners.length * 100;
          progressBar.style.width = `${progress}%`;
        };
        updateProgress();
        swiperInstance.on('slideChange', updateProgress);
        return () => swiperInstance.off('slideChange', updateProgress);
      }
    }
  }, [swiperInstance, banners.length]);

  const renderImageAnimation = (banner, idx) => {
    const isActive = activeIndex === idx;
    return (
      <div className="blur-scale-container">
        <div
          className={`blur-scale-bg ${isActive ? 'animate-blur-scale-in' : 'animate-blur-scale-out'}`}
          style={{
            backgroundImage: `url(${banner.image})`,
          }}
        />
      </div>
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-family: 'Playfair Display', serif !important;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #FFFFFF;
        }

        .hero-subtitle {
          font-family: 'Mulish', sans-serif !important;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #FFFFFF;
        }

        .hero-description {
          font-family: 'Mulish', sans-serif !important;
          color: rgba(255, 255, 255, 0.9);
        }

        /* ========== BLUR SCALE ANIMATION ========== */
        .blur-scale-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .blur-scale-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          will-change: transform, filter, opacity;
        }

        .animate-blur-scale-in {
          animation: blurScaleIn 1.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-blur-scale-out {
          animation: blurScaleOut 1.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes blurScaleIn {
          0% {
            transform: scale(1.3);
            filter: blur(20px);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            filter: blur(0);
            opacity: 1;
          }
        }

        @keyframes blurScaleOut {
          0% {
            transform: scale(1);
            filter: blur(0);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            filter: blur(20px);
            opacity: 0;
          }
        }

        /* Dark Overlay */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          pointer-events: none;
          z-index: 5;
        }

        /* Premium Text Reveal Animation */
        .hero-content {
          opacity: 0;
          animation: premiumReveal 1s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          animation-delay: 0.3s;
        }

        @keyframes premiumReveal {
          0% {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* Staggered Text Animations */
        .category-tag {
          opacity: 0;
          animation: fadeSlideUp 0.7s ease forwards;
          animation-delay: 0.4s;
        }

        .hero-title {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards;
          animation-delay: 0.5s;
        }

        .hero-subtitle {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards;
          animation-delay: 0.7s;
        }

        .hero-description {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards;
          animation-delay: 0.9s;
        }

        .button-group {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards;
          animation-delay: 1.1s;
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Centered content */
        .centered-content {
          text-align: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }

        /* Orange & White Buttons - REDUCED SIZES */
        .btn-primary {
          background-color: #E85D04 !important;
          color: white;
          padding: 0.6rem 1.6rem !important;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem !important;
          letter-spacing: 0.03em;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
          z-index: 10;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-primary:hover::before {
          width: 200px;
          height: 200px;
        }

        .btn-primary:hover {
          background-color: #F48C06 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(232, 93, 4, 0.4);
        }

        .btn-outline {
          border: 2px solid #FFFFFF;
          color: white;
          padding: 0.56rem 1.6rem !important;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem !important;
          letter-spacing: 0.03em;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
          z-index: 10;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-outline::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s;
        }

        .btn-outline:hover::before {
          left: 100%;
        }

        .btn-outline:hover {
          background-color: #E85D04;
          border-color: #E85D04;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(232, 93, 4, 0.3);
        }

        .btn-primary svg, .btn-outline svg {
          width: 16px;
          height: 16px;
        }

        /* Premium Navigation Buttons */
        .custom-swiper-button-prev,
        .custom-swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          z-index: 20;
          color: white;
        }

        .custom-swiper-button-prev {
          left: 2rem;
        }

        .custom-swiper-button-next {
          right: 2rem;
        }

        .custom-swiper-button-prev:hover,
        .custom-swiper-button-next:hover {
          background: #E85D04;
          border-color: #E85D04;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 12px 24px rgba(232, 93, 4, 0.4);
        }

        .custom-swiper-button-prev:active,
        .custom-swiper-button-next:active {
          transform: translateY(-50%) scale(0.95);
        }

        /* Progress Bar */
        .hero-progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 30;
          overflow: hidden;
        }

        .hero-progress-bar-fill {
          height: 100%;
          background-color: #E85D04;
          width: 0%;
          transition: width 0.1s linear;
        }

        .swiper-slide {
          overflow: hidden;
        }

        .relative.z-10 {
          z-index: 15;
        }

        /* Category tag */
        .category-tag {
          background: rgba(232, 93, 4, 0.85);
          backdrop-filter: blur(4px);
          border: none;
          color: white;
          font-weight: 700;
          letter-spacing: 0.05em;
          font-size: 0.7rem;
          padding: 0.35rem 1.2rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem !important;
          }
          .hero-subtitle {
            font-size: 0.95rem !important;
          }
          .hero-description {
            font-size: 0.8rem !important;
          }
          .btn-primary, .btn-outline {
            padding: 0.5rem 1.2rem !important;
            font-size: 0.75rem !important;
          }
          .btn-primary svg, .btn-outline svg {
            width: 14px;
            height: 14px;
          }
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            width: 36px;
            height: 36px;
          }
          .custom-swiper-button-prev {
            left: 1rem;
          }
          .custom-swiper-button-next {
            right: 1rem;
          }
        }

        @media (max-width: 640px) {
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            display: none;
          }
          .category-tag {
            font-size: 0.6rem;
            padding: 0.25rem 1rem;
          }
        }
      `}</style>

      {/* Progress Bar */}
      <div className="hero-progress-bar">
        <div className="hero-progress-bar-fill" />
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        onSlideChangeTransitionStart={() => setIsAnimating(true)}
        onSlideChangeTransitionEnd={() => setIsAnimating(false)}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1200}
        className="h-full w-full"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full w-full">
              {renderImageAnimation(banner, idx)}
              <div className="hero-overlay" />
              <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-12 lg:px-20">
                <div className="centered-content hero-content">
                  <div className="category-tag inline-block mb-4 rounded-full text-white font-bold tracking-wider uppercase">
                    {banner.tag}
                  </div>
                  <h1 className="hero-title text-white font-bold mb-3 leading-[1.2]">
                    {banner.title}
                  </h1>
                  <h2 className="hero-subtitle text-white/95 text-lg md:text-xl lg:text-xl mb-3 font-semibold tracking-wide">
                    {banner.subtitle}
                  </h2>
                  <p className="hero-description text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                    {banner.description}
                  </p>
                  <div className="button-group flex flex-wrap gap-4 justify-center">
                    <Link to="/contact" className="btn-primary">
                      <span>Get In Touch</span>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link to="/services" className="btn-outline">
                      <span>Our Services</span>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        className="custom-swiper-button-prev"
        aria-label="Previous slide"
        onClick={handlePrev}
      >
        <FiChevronLeft size={22} strokeWidth={2.5} />
      </button>

      <button
        ref={nextRef}
        className="custom-swiper-button-next"
        aria-label="Next slide"
        onClick={handleNext}
      >
        <FiChevronRight size={22} strokeWidth={2.5} />
      </button>
    </section>
  );
};

export default Hero;
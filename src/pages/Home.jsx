import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutPreview from '../components/home/AboutPreview';
import ClientsSection from '../components/home/ClientsSection';
import CTABanner from '../components/home/CTABanner';
import WhyChooseUs from "../components/home/WhyChooseUs"
import Testimonials from "../components/home/Testimonials"

const Home = () => {
  useEffect(() => {
    // Add animation classes on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark">
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
       <WhyChooseUs/>
      <ClientsSection />
      <CTABanner />
      <Testimonials/>
     
    </div>
  );
};

export default Home;
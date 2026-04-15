import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaShieldAlt, 
  FaRocket, 
  FaHeadset, 
  FaChartLine
} from 'react-icons/fa';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const steps = [
    {
      number: "01",
      icon: FaShieldAlt,
      title: "100% Compliance Guarantee",
      description: "We ensure your business stays fully compliant with all statutory regulations."
    },
    {
      number: "02",
      icon: FaRocket,
      title: "Fast & Efficient Service",
      description: "Quick turnaround times with streamlined processes for all compliance needs."
    },
    {
      number: "03",
      icon: FaHeadset,
      title: "24/7 Expert Support",
      description: "Round-the-clock assistance from our team of compliance experts."
    },
    {
      number: "04",
      icon: FaChartLine,
      title: "Proven Track Record",
      description: "Successfully served 500+ businesses with 98% client satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-[#0f172a] text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* ✅ HEADING ADDED */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-orange-500">Choose Us</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            We deliver reliable, efficient, and expert-driven compliance solutions tailored for your business growth.
          </p>
        </div>

        {/* Existing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                
                {/* Step Number */}
                <div className="text-6xl font-bold text-white/10 mb-2">
                  {step.number}
                </div>

                {/* Circle Icon */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
                  <Icon className="text-2xl text-orange-500" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
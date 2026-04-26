import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaFileContract, 
  FaClipboardCheck, 
  FaBalanceScale, 
  FaGavel, 
  FaUsers, 
  FaHandshake 
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const ServicesSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      icon: FaFileContract,
      title: 'Registration & Licensing Services',
      description: 'Turnkey solutions for all statutory registrations including Shop & Establishment, Professional Tax, Trade License, FSSAI, Factory License, Pollution License, Drug License, CLRA, BOCW, and all other mandatory licenses with periodic renewals and amendments.',
      bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
      aosDelay: 0
    },
    {
      icon: FaClipboardCheck,
      title: 'Statutory Compliance Management',
      description: 'End-to-end compliance management under Shops & Establishment Act, Contract Labour Act, BOCW Act, Factories Act, PF Act, ESI Act, Labour Welfare Fund Act, and all other labour legislations. We handle registrations, renewals, returns filing, and maintenance of statutory registers.',
      bgImage: './images/service2.jpg',
      aosDelay: 100
    },
    {
      icon: FaBalanceScale,
      title: 'Labour Law Audit & Due Diligence',
      description: 'Comprehensive audit services covering monthly, quarterly, half-yearly or yearly compliance checks. We conduct internal audits, prepare detailed audit reports, recommend corrective measures, and provide actionable insights to improve compliance health for Principal Employer and Contractors.',
      bgImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
      aosDelay: 200
    },
    {
      icon: FaGavel,
      title: 'Labour Law Advisory & Consulting',
      description: 'Expert legal advisory on labour enactments, display of abstracts, periodical returns filing, register maintenance, attending labour officer visits, updating management on latest amendments, circulars & notifications, and creating monthly compliance trackers.',
      bgImage: "./images/service10.avif",
      aosDelay: 0
    },
    {
      icon: FaUsers,
      title: 'HR & Payroll Management',
      description: 'Complete HR solutions including HR audit, policy implementation, HR systems establishment, HRMS & Payroll Software. Monthly preparation of PF & ESIC statements, challan generation, returns filing, and government liaison with cost-centre reports and MIS reports.',
      bgImage: './images/service11.avif',
      aosDelay: 100
    },
    {
      icon: FaHandshake,
      title: 'Government Liaison & Representation',
      description: 'Expert representation before Labour, PF, ESI authorities and Labour Courts. Handling labour department inspections, minimum wages cases, union strikes, and all statutory related notices. Liaison with Factories, Labour, ESIC and PF authorities successfully.',
      bgImage: './images/service12.avif',
      aosDelay: 200
    }
  ];

  const handleViewAllServices = () => {
    navigate('/services');
  };

  const handleReadMore = (serviceTitle) => {
    navigate('/services');
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with AOS */}
        <div 
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
           <span className="text-xs tracking-[5px] text-orange-600 font-semibold mb-3 inline-block">
           OUR SERVICES
          </span>
           <div className="w-16 h-0.5 bg-orange-500 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Comprehensive Compliance & Legal Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Since 2008, providing quality services, ethics, professionalism and credibility to Hotel Industry, Retail Industry, Manufacturing Industries & ITES Companies</p>
        </div>

        {/* Services Grid - Exactly 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                data-aos-duration="600"
              >
                {/* Image that slides from bottom on hover */}
                <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${service.bgImage}')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 bg-white group-hover:bg-transparent transition-all duration-500 h-full min-h-[280px]">
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mb-5 group-hover:bg-white transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={service.aosDelay + 100}
                    data-aos-duration="500"
                  >
                    <Icon className="text-2xl text-white group-hover:text-orange-500 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300"
                    data-aos="fade-right"
                    data-aos-delay={service.aosDelay + 200}
                    data-aos-duration="500"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300 line-clamp-4"
                    data-aos="fade-left"
                    data-aos-delay={service.aosDelay + 300}
                    data-aos-duration="500"
                  >
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-orange-500 mt-5 mb-4 group-hover:w-full transition-all duration-500"></div>

                  {/* Read More Button */}
                  <button
                    onClick={() => handleReadMore(service.title)}
                    className="flex items-center text-orange-600 group-hover:text-orange-400 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={service.aosDelay + 400}
                    data-aos-duration="500"
                  >
                    <span className="text-sm font-semibold">Read More</span>
                    <HiArrowRight className="ml-2 text-sm group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button with AOS */}
        <div 
          className="text-center mt-12"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <button
            onClick={handleViewAllServices}
            className="px-8 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Services
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Additional styles for AOS customizations and line clamp */}
      <style jsx>{`
        /* Custom AOS animations override */
        [data-aos="fade-up"] {
          transform: translate3d(0, 40px, 0);
        }
        
        [data-aos="fade-right"] {
          transform: translate3d(-30px, 0, 0);
        }
        
        [data-aos="fade-left"] {
          transform: translate3d(30px, 0, 0);
        }
        
        [data-aos="zoom-in"] {
          transform: scale(0.8);
        }
        
        [data-aos="zoom-in-up"] {
          transform: scale(0.9) translate3d(0, 30px, 0);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Line clamp for description */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Minimum height for card content */
        .min-h-280 {
          min-height: 280px;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
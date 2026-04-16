import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaBalanceScale, 
  FaClipboardCheck, 
  FaUsers, 
  FaCalculator, 
  FaHandshake, 
  FaFileContract 
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import SectionTitle from '../common/SectionTitle';

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
      icon: FaBalanceScale,
      title: 'Labour Laws',
      description:
        'The complex layered structure of the Indian statutory laws is not only time consuming, but also requires a disciplined approach to organise, prepare & file the monthly reports & documents with the respective agencies. Our experience will help you in maintaining compliance to these statutory laws.',
      bgImage: "./images/labor.jpg",
      aosDelay: 0
    },
    {
      icon: FaClipboardCheck,
      title: 'Audit Services',
      description:
        'In today\'s highly communicated & interconnected world, cent percent compliance is definitely preferable over possibilities of penalties, labour disputes & arbitrations. Our robust audit process & tools ascertain a thorough scan of all statutory compliances to be followed by the Principal Employer, the Labour Contractors & the Partners.',
      bgImage: './images/audit.avif',
      aosDelay: 100
    },
    {
      icon: FaUsers,
      title: 'HR Solutions',
      description:
        'Our outsourcing service is fully tailored to your needs, to support the delivery of your strategic HR agenda and organisational objectives. We provide an experienced on-site HR team delivering the full range of HR services, as well as access to our wider team of expertise.',
      bgImage: './images/hr1.avif',
      aosDelay: 200
    },
    {
      icon: FaCalculator,
      title: 'Payroll Management',
      description:
        'Our payroll management services are very flexible and can be customised to meet the needs of small, medium and large enterprises. Cost-centre reports, online & offline payslips and MIS reports are all generated and managed through our proprietary software.',
      bgImage: './images/payroll1.jpg',
      aosDelay: 0
    },
    {
      icon: FaHandshake,
      title: 'Contract Staffing',
      description:
        'Our personalized contract staffing / temp staffing solutions facilitate our clients in reducing HR operating costs, thereby enabling them to focus on core business areas. Great emphasis is laid on the structure and design of the solutions offered to ensure that the requirements of the clients in terms of sourcing the right candidates across India are met within the expected time frames.',
      bgImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop',
      aosDelay: 100
    },
    {
      icon: FaFileContract,
      title: 'Licensing',
      description:
        'We provide turnkey solutions for all licence work pertaining to business operations. We render these services to facilitate the entire process of registrations with all concerned authorities viz. Central Government Agencies, State Government Agencies & local Municipal Agencies.',
      bgImage: './images/licence.avif',
      aosDelay: 200
    },
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
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Comprehensive Business Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Please check the services we offer to our valuable clients</p>
        </div>

        {/* Services Grid */}
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
                <div className="relative z-10 p-6 bg-white group-hover:bg-transparent transition-all duration-500 h-full">
                  {/* Icon with AOS */}
                  <div 
                    className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mb-5 group-hover:bg-white transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={service.aosDelay + 100}
                    data-aos-duration="500"
                  >
                    <Icon className="text-2xl text-white group-hover:text-orange-500 transition-colors duration-300" />
                  </div>

                  {/* Title with AOS */}
                  <h3 
                    className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300"
                    data-aos="fade-right"
                    data-aos-delay={service.aosDelay + 200}
                    data-aos-duration="500"
                  >
                    {service.title}
                  </h3>

                  {/* Description with AOS */}
                  <p 
                    className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300"
                    data-aos="fade-left"
                    data-aos-delay={service.aosDelay + 300}
                    data-aos-duration="500"
                  >
                    {service.description.substring(0, 120)}...
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

      {/* Additional styles for AOS customizations */}
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
      `}</style>
    </section>
  );
};

export default ServicesSection;
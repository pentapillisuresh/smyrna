import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { FaUsers, FaTrophy, FaHandshake, FaChartLine, FaShieldAlt, FaClock } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';

const AboutPreview = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  const highlights = [
    {
      icon: FaTrophy,
      title: '15+ Years',
      description: 'Industry Excellence',
      color: 'orange'
    },
    {
      icon: FaUsers,
      title: '50+ Experts',
      description: 'Dedicated Team',
      color: 'orange'
    },
    {
      icon: FaHandshake,
      title: '500+ Clients',
      description: 'Trusted Partners',
      color: 'orange'
    }
  ];

  const coreValues = [
    {
      icon: FaShieldAlt,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical practices'
    },
    {
      icon: FaChartLine,
      title: 'Innovation',
      description: 'Cutting-edge compliance solutions'
    },
    {
      icon: FaClock,
      title: 'Reliability',
      description: '24/7 dedicated support'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Premium subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/30 via-transparent to-orange-50/20"></div>
      
      {/* Premium dotted pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #f97316 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="800">
            <div className="mb-3">
              <span className="text-orange-600 font-bold text-sm uppercase tracking-wider inline-block px-3 py-1 bg-orange-50 rounded-full">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Your Strategic Partner in <br />
              <span className="text-orange-600 relative inline-block">
                Business Compliance
                <svg className="absolute bottom-2 left-0 w-full h-3 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" fill="none" strokeWidth="2" />
                </svg>
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">
              With over <span className="font-bold text-orange-600">15 years of expertise</span> in statutory compliance and business solutions, 
              Smyrna Consultancy has established itself as a trusted partner for businesses 
              navigating India's complex regulatory landscape.
            </p>
            
            <p className="text-gray-500 mb-8 leading-relaxed border-l-4 border-orange-500 pl-4 italic">
              Our comprehensive approach combines deep industry knowledge with innovative 
              solutions, ensuring your business remains compliant while focusing on growth 
              and operational excellence.
            </p>

            {/* Feature List - Premium styling */}
            <div className="space-y-3 mb-8">
              {[
                'Pan-India Presence with local expertise',
                'Customized Solutions for every business',
                'Proactive Compliance monitoring',
                'Technology-Driven Approach for efficiency'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <HiCheckCircle className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group px-8 py-3.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
              <span>Discover More About Us</span>
              <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Content - Full Image with Premium Design */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            {/* Main Image - Full display without circles */}
          <div 
  className="flex justify-center items-center"
  data-aos="fade-right"
>
  <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden     bg-gray-100 flex items-center justify-center">
    
    <img
      src="./images/about.png"
      alt="About"
      className="max-w-full max-h-full object-contain"
    />

  </div>
</div>

              

            {/* Core Values - Modern horizontal layout */}
            <div className="mt-8 pt-6 border-t-2 border-gray-100">
              <p className="text-center text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">Our Core Values</p>
              <div className="grid grid-cols-3 gap-3">
                {coreValues.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-orange-50 transition-all duration-300 group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay={400 + idx * 100}
                    >
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors duration-300">
                        <Icon className="text-sm text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-800">{value.title}</h4>
                        <p className="text-xs text-gray-500 hidden md:block">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
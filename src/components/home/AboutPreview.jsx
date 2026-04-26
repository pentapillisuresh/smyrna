import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { FaUsers, FaTrophy, FaHandshake, FaChartLine, FaShieldAlt, FaClock } from 'react-icons/fa';

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
      title: '10+ Experts',
      description: 'Dedicated Team',
      color: 'orange'
    },
    {
      icon: FaHandshake,
      title: '70+ Clients',
      description: 'Trusted Partners',
      color: 'orange'
    }
  ];

  const coreValues = [
    {
      icon: FaShieldAlt,
      title: 'Integrity',
      description: 'Ethical practices'
    },
    {
      icon: FaChartLine,
      title: 'Excellence',
      description: 'Quality service'
    },
    {
      icon: FaClock,
      title: 'Reliability',
      description: 'On-time delivery'
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
        {/* Centered About Us Header */}
        <div className="text-center mb-12" data-aos="fade-down" data-aos-duration="800">
          <span className="text-xs tracking-[5px] text-orange-600 font-semibold mb-3 inline-block">
            ABOUT US
          </span>
          <div className="w-16 h-0.5 bg-orange-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Your Strategic Partner in <br />
            <span className="text-orange-600 relative inline-block">
              Statutory Compliance
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Since <span className="font-bold text-orange-600">2008</span>, Smyrna Consulting Solutions has been providing 
            quality compliance, legal consultancy, statutory audit & HR audit services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="800">
            <p className="text-gray-500 mb-8 leading-relaxed border-l-4 border-orange-500 pl-4 italic">
              We are an association of experienced HR Managers, Advocates, Legal consultants 
              and qualified professionals with rich expertise in Labour Laws & Statutory Compliance.
            </p>

            {/* Feature List - Premium styling */}
            <div className="space-y-3 mb-8">
              {[
                'Pan-India Presence across 5 states',
                'Expert Team of Legal Professionals',
                'Proactive Compliance Monitoring',
                'Trusted by 70+ Prestigious Clients'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <HiCheckCircle className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Highlights Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="text-center p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={200 + idx * 100}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Icon className="text-white text-xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <button className="group px-8 py-3.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
              <span>Discover More About Us</span>
              <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Content - Full Image with Premium Design */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            {/* Main Image */}
            <div 
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shadow-xl">
                <img
                  src="./images/about.png"
                  alt="About Smyrna Consulting"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Core Values - Modern horizontal layout */}
            {/* <div className="mt-8 pt-6 border-t-2 border-gray-100">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
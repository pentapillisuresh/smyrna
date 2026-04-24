import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaFileContract, 
  FaClipboardCheck, 
  FaBalanceScale, 
  FaGavel, 
  FaUsers, 
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaChartLine,
  FaRegBuilding,
  FaPhoneAlt
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      id: 0,
      icon: FaFileContract,
      title: 'Registration & Licensing',
      shortDesc: 'Complete statutory registrations & renewals',
      description: 'Getting mandatory licenses, permissions, clearances and certificates under all laws including periodic on-time renewals and amendments.',
      features: [
        'Shop & Establishment Act Registration',
        'Contract Labour (R&A) Act Registration',
        'Building and Other Construction Workers (BOCW) Act',
        'Interstate Migrant Workmen Act',
        'Labour Welfare Fund Act',
        'Profession Tax, Trade License, FSSAI',
        'Factory License, Pollution License',
        'ESI & PF Registration'
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 1,
      icon: FaClipboardCheck,
      title: 'Auditing & Due Diligence',
      shortDesc: 'Multi-layered compliance checks',
      description: 'Periodic as well as on-demand multi-layered checks and due diligence to evaluate your labour and compliance score.',
      features: [
        'Monthly, quarterly, half yearly audits',
        'Internal audit under labour laws',
        'Audit reports with compliance status',
        'Corrective measures recommendation',
        'Compliance health improvement advisory'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 2,
      icon: FaBalanceScale,
      title: 'Monthly Compliance',
      shortDesc: 'End-to-end compliance management',
      description: 'Comprehensive record keeping, filings, maintenance activities, and government liaison for ensuring a healthy compliance score.',
      features: [
        'Working Conditions Legislation',
        'Wages Legislation Management',
        'Social Security Compliance',
        'Employment & Training Laws',
        'Industrial Relations Management',
        'Labour Welfare Fund'
      ],
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 3,
      icon: FaGavel,
      title: 'Advisory & Consulting',
      shortDesc: 'Expert legal guidance',
      description: 'Knowledge sharing to provide definitive directional guidance on all aspects of labour laws & compliance.',
      features: [
        'Display of abstracts & notices',
        'Periodical returns filing',
        'Register maintenance',
        'Labour officer visits handling',
        'Latest amendments updates',
        'Monthly compliance tracker'
      ],
      image: 'https://images.unsplash.com/photo-1589391886645-d1b6d1c1e6e0?q=80&w=2070&auto=format&fit=crop',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 4,
      icon: FaUsers,
      title: 'HR & Payroll',
      shortDesc: 'Complete HR solutions',
      description: 'Complete HR solutions including HR audit, policy implementation, HR systems establishment, and HRMS & Payroll Software.',
      features: [
        'HR Audit & Policy Implementation',
        'HRMS & Payroll Software',
        'PF & ESI statements & challans',
        'Salary Processing & Tax Compliance',
        'Cost-centre & MIS reports',
        'Online & offline payslips'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      icon: FaHandshake,
      title: 'Govt. Liaison',
      shortDesc: 'Expert representation',
      description: 'Expert representation before Labour, PF, ESI authorities and Labour Courts. Handling legal matters connected to Labour Enactments.',
      features: [
        'Labour department inspections',
        'Minimum wages cases',
        'PF & ESI notices handling',
        'Appeals before authorities',
        'Labour court representation',
        'Union strike management'
      ],
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const activeService = services[activeTab];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-duration="800">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 inline-block px-4 py-1.5 bg-orange-500/20 rounded-full">
              Since 2008
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="text-orange-400 block mt-2">Statutory Solutions</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Quality Service, Ethics, Professionalism and Credibility for Hotel, Retail, 
              Manufacturing & ITES industries across South India.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Section with Sticky Left Sidebar - Dark Blue Background */}
      <section id="service-detail" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Service in Detail</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5">
              Click on any service to view detailed information
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Service Tabs (Sticky with Dark Blue Background) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-[#0f172a] rounded-2xl p-4 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-4 px-3">Our Services</h3>
                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {services.map((service, idx) => {
                    const Icon = service.icon;
                    const isActive = activeTab === service.id;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(service.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                          isActive 
                            ? 'bg-orange-500 text-white shadow-lg' 
                            : 'hover:bg-orange-500/20 text-gray-300'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isActive ? 'bg-white/20' : 'bg-orange-500/20'
                        }`}>
                          <Icon className={`text-lg ${isActive ? 'text-white' : 'text-orange-400'}`} />
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold ${isActive ? 'text-white' : 'text-white'}`}>{service.title}</p>
                          <p className={`text-xs ${isActive ? 'text-orange-100' : 'text-gray-400'}`}>{service.shortDesc}</p>
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Service Details */}
            <div className="lg:col-span-2" data-aos="fade-left" data-aos-duration="800" key={activeTab}>
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={activeService.image} 
                    alt={activeService.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                      {React.createElement(activeService.icon, { className: "text-xl text-white" })}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeService.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{activeService.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-orange-500 rounded-full"></span>
                    Key Features:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3 mb-8">
                    {activeService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 group">
                        <FaCheckCircle className="text-orange-500 text-sm flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote <HiArrowRight />
                    </button>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-6 py-2.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300"
                    >
                      <FaPhoneAlt className="text-sm" /> Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Expertise Areas</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-5">
              Years of experience and expertise in statutory compliance management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaShieldAlt, title: "Statutory Compliance Audit", desc: "Comprehensive compliance verification" },
              { icon: FaChartLine, title: "Statutory Advisory Services", desc: "Expert guidance on regulations" },
              { icon: FaBalanceScale, title: "Statutory Benefits Admin", desc: "PF, ESI, bonus management" },
              { icon: FaClipboardCheck, title: "Compliance Management", desc: "End-to-end statutory compliance" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center p-6 bg-white/5 rounded-2xl hover:bg-orange-500/10 transition-all duration-300 group border border-white/10" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                    <Icon className="text-2xl text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Coverage</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">We Serve Across South India</h2>
              <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer our services across South India, covering all the following under The Labour Laws 
                that are applicable to your factory and establishment.
              </p>
              <div className="space-y-3">
                {[
                  'Telangana',
                  'Andhra Pradesh',
                  'Karnataka',
                  'Tamil Nadu',
                  'Kerala'
                ].map((state, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-orange-500 text-sm" />
                    <span className="text-gray-700">{state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-duration="800">
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-orange-50 transition-all duration-300 group cursor-pointer">
                <FaRegBuilding className="text-3xl text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-800">Labour Law Audit</h3>
                <p className="text-gray-500 text-sm">License Application/Renewal</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-orange-50 transition-all duration-300 group cursor-pointer">
                <FaClipboardCheck className="text-3xl text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-800">Statutory Registers</h3>
                <p className="text-gray-500 text-sm">Records & Returns</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-orange-50 transition-all duration-300 group cursor-pointer">
                <FaHandshake className="text-3xl text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-800">Government Liaison</h3>
                <p className="text-gray-500 text-sm">Factories, Labour, ESIC, PF</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-orange-50 transition-all duration-300 group cursor-pointer">
                <FaUsers className="text-3xl text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-800">HR Solutions</h3>
                <p className="text-gray-500 text-sm">HRMS & Payroll Software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in-up" data-aos-duration="800">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Ensure Complete Compliance?
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            We provide services upon mutual agreement. Let's discuss how we can help your business stay compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch <HiArrowRight />
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300"
            >
              <FaPhoneAlt className="text-sm" /> Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Services;
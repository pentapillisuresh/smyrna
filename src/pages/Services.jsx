import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaBalanceScale, 
  FaClipboardCheck, 
  FaUsers, 
  FaCalculator, 
  FaHandshake, 
  FaFileContract,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../components/common/Button';

const Services = () => {
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
      icon: FaBalanceScale,
      title: 'Labour Laws',
      description: 'The complex layered structure of the Indian statutory laws is not only time consuming, but also requires a disciplined approach to organise, prepare & file the monthly reports & documents with the respective agencies. Our experience will help you in maintaining compliance to these statutory laws.',
      features: ['EPF & ESI Compliance', 'Labour Law Advisory', 'Statutory Registers', 'Monthly Returns Filing'],
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop',
      aosDelay: 0
    },
    {
      icon: FaClipboardCheck,
      title: 'Audit Services',
      description: 'In today\'s highly communicated & interconnected world, cent percent compliance is definitely preferable over possibilities of penalties, labour disputes & arbitrations. Our robust audit process & tools ascertain a thorough scan of all statutory compliances to be followed by the Principal Employer, the Labour Contractors & the Partners.',
      features: ['Statutory Audit', 'Internal Audit', 'Due Diligence', 'Compliance Verification'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
      aosDelay: 100
    },
    {
      icon: FaUsers,
      title: 'HR Solutions',
      description: 'Our outsourcing service is fully tailored to your needs, to support the delivery of your strategic HR agenda and organisational objectives. We provide an experienced on-site HR team delivering the full range of HR services, as well as access to our wider team of expertise.',
      features: ['HR Outsourcing', 'Policy Development', 'Performance Management', 'Employee Relations'],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop',
      aosDelay: 200
    },
    {
      icon: FaCalculator,
      title: 'Payroll Management',
      description: 'Our payroll management services are very flexible and can be customised to meet the needs of small, medium and large enterprises. Cost-centre reports, online & offline payslips and MIS reports are all generated and managed through our proprietary software.',
      features: ['Salary Processing', 'Tax Compliance', 'Reimbursement Management', 'Custom Reports'],
      image: './images/payroll1.jpg',
      aosDelay: 0
    },
    {
      icon: FaHandshake,
      title: 'Contract Staffing',
      description: 'Our personalized contract staffing / temp staffing solutions facilitate our clients in reducing HR operating costs, thereby enabling them to focus on core business areas. Great emphasis is laid on the structure and design of the solutions offered to ensure that the requirements of the clients in terms of sourcing the right candidates across India are met within the expected time frames.',
      features: ['Temporary Staffing', 'Permanent Recruitment', 'Bulk Hiring', 'PAN India Sourcing'],
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop',
      aosDelay: 100
    },
    {
      icon: FaFileContract,
      title: 'Licensing',
      description: 'We provide turnkey solutions for all licence work pertaining to business operations. We render these services to facilitate the entire process of registrations with all concerned authorities viz. Central Government Agencies, State Government Agencies & local Municipal Agencies.',
      features: ['Business Licenses', 'Factory License', 'Trade License', 'Import/Export License'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
      aosDelay: 200
    }
  ];

  return (
    <div className="bg-white pt-24">
      {/* Hero Section with Banner Image */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="container-custom max-w-3xl mx-auto px-4">
            <div data-aos="fade-up" data-aos-duration="800">
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4 inline-block px-3 py-1 bg-orange-100 rounded-full">
                What We Offer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Comprehensive
                <span className="text-orange-600 block mt-2">Business Solutions</span>
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
                From statutory compliance to HR management, we offer end-to-end solutions 
                tailored to meet your business needs and ensure complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Premium Design */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content Side */}
                  <div 
                    data-aos="fade-right" 
                    data-aos-delay={service.aosDelay}
                    data-aos-duration="800"
                    className={idx % 2 === 1 ? 'lg:order-2' : ''}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-600 transition-all duration-300">
                        <Icon className="text-3xl text-orange-600" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 group">
                          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                            <FaCheckCircle className="text-orange-600 text-sm group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button to="/contact" variant="primary" className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full">
                      Enquire Now
                      <HiArrowRight className="ml-2" />
                    </Button>
                  </div>

                  {/* Image Side */}
                  <div 
                    data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"} 
                    data-aos-delay={service.aosDelay + 100}
                    data-aos-duration="800"
                    className={idx % 2 === 1 ? 'lg:order-1' : ''}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[350px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                        <p className="text-white font-semibold">Learn more about {service.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">What Makes Us Different</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="0">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">50+ qualified professionals with deep industry knowledge</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">100% Compliance</h3>
              <p className="text-gray-600">Ensuring complete statutory compliance for your business</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted Partner</h3>
              <p className="text-gray-600">500+ satisfied clients across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-3xl p-12 text-center border border-gray-200" data-aos="zoom-in-up" data-aos-duration="800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experts are here to help you identify the right solutions for your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" size="lg" variant="primary" className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-full">
                Schedule Consultation
                <HiArrowRight className="ml-2" />
              </Button>
              <Button to="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark px-8 py-3 rounded-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .container-custom {
          width: 100%;
        }
        
      
      `}</style>
    </div>
  );
};

export default Services;
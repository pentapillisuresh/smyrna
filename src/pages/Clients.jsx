import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowRight, HiCheckCircle, HiUsers } from 'react-icons/hi';
import { FaHandshake, FaTrophy, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Clients = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const clients = [
    "DIGITAL NIRVANA INFORMATIONS SYSTEMS PVT LTD - Hyderabad",
    "ANANDRATI GROUP (A.P) - Hyderabad",
    "EDWELISIS Group - Financial Services",
    "CD EQUISEARCH & CD COMMOSERACH Pvt Ltd",
    "PAYNEAR SOLUTIONS PRIVATE LTD",
    "COLLABERA TECHNOLOGIES Pvt Ltd",
    "KNIGHT FRANK INDIA Pvt Ltd",
    "C.B.Richardellis South Asia Pvt Ltd",
    "PALL INDIA Pvt Ltd",
    "Sec-mec Consultant Pvt Ltd",
    "Talwalkars Better Value Fitness Ltd",
    "Hotel Crystal Banjara",
    "HOTEL BHIMAS RESIDENCY Tirupati",
    "R.K Hotel & Restaurant",
    "L&W Construction Pvt Ltd",
    "Cumins India Ltd",
    "Analog Devices India Ltd",
    "Samrat Business India Pvt Ltd",
    "MULTICARE SERVICES India Pvt Ltd",
    "TASLIMAN PLACEMENTS (A.P)",
    "SRUJAN INFRASTRUCTURE & SERVICES",
    "Tarz Distributors India Pvt Ltd",
    "MUSIC WORLD (Spencer Retail Ltd)",
    "FUTURE AGROVATE LTD",
    "Webroo Technology Pvt Ltd"
  ];

  const subVendors = [
    "TATA AIG GENERAL INSURANCE CO LTD",
    "SBI MUTUAL FUND",
    "SHINDLER INDIA Pvt Ltd",
    "ABBOTT TRUECARE PHARMA Pvt Ltd",
    "Baggit India Pvt Ltd",
    "NSE – IT",
    "NJI India Investment Pvt Ltd",
    "SECURE VALUE INDIA Pvt Ltd",
    "TRANSOCEAN",
    "COLGATE PALMOLIVE INDIA Pvt Ltd"
  ];

  const otherCompanies = [
    "Debold", "AGS Transit", "Sree Balaji Ethinicity", "Shriram Housing Finance",
    "Kaya Skin Care", "India Ratings & Research Pvt Ltd", "Toshiba",
    "Zodiac Housekeeping Services", "Datamatics", "FCM Travels",
    "I.T Pyramid Solution Pvt Ltd", "Frontline Solutions"
  ];

  return (
    <div className="bg-white pt-24 overflow-x-hidden">

      {/* HERO SECTION with Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
            alt="Our Clients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-duration="800">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 inline-block px-3 py-1 bg-orange-500/20 rounded-full">
              Trusted Partners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Valued
              <span className="text-orange-500 block mt-2">Clients</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Trusted by industry leaders across India for our quality service and expertise
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100" data-aos="fade-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <HiCheckCircle className="text-2xl text-orange-600" />
              </div>
              <div>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  We <span className="text-orange-600 font-semibold">Smyrna Consultancy Services</span> 
                  have great pleasure in writing you about our Consultancy Services. 
                  We provide <strong className="text-gray-900">Quality Service, Ethics, Professionalism and Credibility</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We have been engaged in providing <strong className="text-gray-800">Statutory & Legal consultancy</strong> to 
                  Retail Industry, Hotel Industry, Manufacturing industries and other ITES companies 
                  for the past <span className="text-orange-600 font-semibold">7 years</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-2xl" data-aos="fade-up" data-aos-delay="0">
              <div className="text-3xl font-bold text-orange-600 mb-2">7+</div>
              <p className="text-gray-600 font-medium">Years of Service</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
              <div className="text-3xl font-bold text-orange-600 mb-2">45+</div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-600 font-medium">Compliance Rate</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl" data-aos="fade-up" data-aos-delay="300">
              <div className="text-3xl font-bold text-orange-600 mb-2">Pan India</div>
              <p className="text-gray-600 font-medium">Presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LIST SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Our Client List</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-all duration-300 group">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-colors duration-300">
                  <span className="text-xs text-orange-600 group-hover:text-white font-semibold">{index + 1}</span>
                </div>
                <span className="text-gray-700 group-hover:text-gray-900">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUB VENDOR SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Strategic Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">As a Sub-vendor</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Doing consultancy work to so many clients</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
            {subVendors.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-orange-600 font-semibold">{index + 1}</span>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER COMPANIES SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Extended Network</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">And Other Companies</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-wrap gap-3 justify-center">
              {otherCompanies.map((company, index) => (
                <span key={index} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-default">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / TRUST SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Trusted Partnership</h3>
              <p className="text-gray-600 text-sm">Building long-term relationships with our clients</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Service</h3>
              <p className="text-gray-600 text-sm">Committed to excellence and professionalism</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Business Growth</h3>
              <p className="text-gray-600 text-sm">Helping businesses achieve compliance & growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-3xl p-12 text-center" data-aos="zoom-in-up" data-aos-duration="800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become Our Next Happy Client
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's help your business with compliance & growth.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us <HiArrowRight />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Clients;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowRight, HiCheckCircle, HiUsers, HiStar, HiBuildingOffice2 } from 'react-icons/hi2';
import { FaHandshake, FaTrophy, FaChartLine, FaBuilding, FaIndustry, FaHotel, FaStore, FaLaptopCode } from 'react-icons/fa';
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

  const mainClients = [
    { name: "TATA PROJECTS LTD", industry: "Construction & Engineering", description: "Labour Act related works, Registrations & Renewals, monthly compliance Audit, record keeping, PF & ESIC challans" },
    { name: "CTRLS Group", industry: "Data Center", description: "Asia's largest Rated-4 (Tier 4) data center network" },
    { name: "Hero Future Energies Pvt. Ltd", industry: "Energy", description: "Factory Act, Shops & Establishment Act, Contract Labour Act, Professional Tax across Telangana, AP, Karnataka, Tamil Nadu & Kerala" },
    { name: "Northstar Homes & Spaces Pvt. Ltd", industry: "Real Estate", description: "Monthly statutory compliance under various Labour laws" },
    { name: "DSR Group", industry: "Construction", description: "Monthly statutory compliance under various Labour laws" },
    { name: "Franksheild Factory", industry: "Industrial Solutions", description: "Monthly statutory compliance under various Labour laws" },
    { name: "MindMap Consulting", industry: "IT & Services", description: "Monthly statutory compliance under various Labour laws" },
    { name: "VIJAYA ENGINEERING ENTERPRISE", industry: "Engineering", description: "Monthly compliance, Record keeping, PF & ESI challans generation" },
    { name: "SRUJAN INFRASTRUCTURE & SERVICES", industry: "Infrastructure", description: "Monthly compliance, Record keeping, PF & ESI challans generation" },
    { name: "COLLABERA TECHNOLOGIES Pvt. Ltd", industry: "Technology", description: "Contract Labour Act, Shops & Establishment, Professional Tax and CLRA Audit" },
    { name: "Gerab India Engineering India Pvt. Ltd", industry: "Engineering", description: "Monthly PF and ESI work, Shops & Establishment Act" },
    { name: "Global Vectra Corp. Ltd", industry: "Aviation", description: "Monthly compliance Audit under Contract Labour Act" },
    { name: "MOTILAL OSWAL FINANCIAL SERVICES LIMITED", industry: "Financial Services", description: "Registration and Renewals under Shops & Establishment Act, Professional Tax" },
    { name: "ICRA Limited", industry: "Credit Rating", description: "Registration and Renewals under Shops & Establishment Act, Professional Tax" },
    { name: "TATA Asset Management Ltd", industry: "Asset Management", description: "Professional Tax service provider" },
    { name: "HOTEL BHIMAS RESIDENCY", industry: "Hospitality", description: "Implementing HR Policies and statutory work ESI, PF, Shops & Establishment" },
    { name: "KNIGHT FRANK INDIA Pvt. Ltd", industry: "Real Estate", description: "Shops & Establishment Act, Contract Labour Act, Professional Tax, Internal Labour Laws Audit" },
    { name: "ADONMO PRIVATE LTD", industry: "Services", description: "PAN India service - Registrations & Renewals, Contract Labour Act, Professional Tax" }
  ];

  const subVendors = [
    "TATA AIG GENERAL INSURANCE CO. LTD",
    "SBI MUTUAL FUND",
    "SHINDLER INDIA Pvt. Ltd",
    "ABBOTT TRUECARE PHARMA PVT. LTD",
    "NSE – iT",
    "SECURE VALUE INDIA PVT. LTD",
    "BIBA Apperals Pvt. Ltd",
    "Mahindra Retail Pvt. Ltd",
    "Johnson and Johnson Factory",
    "C.B. Richardellis South Asia Pvt. Ltd"
  ];

  const pastClients = [
    "DIGITAL NIRVANA INFORMATIONS SYSTEMS PVT. LTD",
    "FLIPKART India Pvt. Ltd",
    "Instakart Services Pvt Ltd",
    "Reliance Industries Limited",
    "BOHLER UDDEHOLM INDIA PVT LTD",
    "Sec-mec Consultant Pvt Ltd",
    "Talwalkars Better Value Fitness Ltd",
    "GSH India Pvt. Ltd",
    "Greytip Software Pvt. Ltd",
    "Choice Hotels Pvt Ltd",
    "Lorven International Pvt. Ltd",
    "India Bulls Housing Finance Ltd",
    "MULTICARE SERVICES India Pvt. Ltd",
    "Cumins India Ltd",
    "AIC Infrastructures Pvt. Ltd",
    "Burgeon IT Services Private Limited"
  ];

  const industries = [
    { icon: FaHotel, name: "Hotels & Hospitality", count: "15+", color: "from-orange-500 to-orange-600" },
    { icon: FaStore, name: "Retail", count: "20+", color: "from-orange-500 to-orange-600" },
    { icon: FaIndustry, name: "Manufacturing", count: "18+", color: "from-orange-500 to-orange-600" },
    { icon: FaLaptopCode, name: "IT / ITES", count: "12+", color: "from-orange-500 to-orange-600" },
    { icon: FaBuilding, name: "Construction", count: "10+", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
            alt="Our Clients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-duration="800">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 inline-block px-4 py-1.5 bg-orange-500/20 rounded-full">
              Trusted Partners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Valued
              <span className="text-orange-400 block mt-2">Clients</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Since 2008, trusted by industry leaders across India for quality service, 
              ethics, professionalism and credibility.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "70+", label: "Active Clients", icon: HiUsers },
              { number: "15+", label: "Years of Excellence", icon: FaTrophy },
              { number: "100%", label: "Compliance Rate", icon: FaHandshake },
              { number: "5+", label: "States Covered", icon: FaChartLine }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon className="text-2xl text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Industries We Serve</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5">
              Providing quality compliance and legal consultancy across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div key={idx} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 group cursor-pointer" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon className="text-2xl text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{industry.name}</h3>
                  <p className="text-orange-600 text-sm font-semibold">{industry.count} Clients</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Premium Clients</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5">
              Trusted by industry leaders for our comprehensive compliance solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainClients.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                    <HiBuildingOffice2 className="text-2xl text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{client.name}</h3>
                    <p className="text-orange-600 text-xs font-semibold mb-2">{client.industry}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{client.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Vendor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Strategic Alliances</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">As a Sub-Vendor Consultant</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5">
              Partnering with leading organizations as their trusted compliance partner
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4" data-aos="fade-up" data-aos-delay="200">
            {subVendors.map((vendor, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                  <HiCheckCircle className="text-sm text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 font-medium">{vendor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Legacy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Clients Since 2018</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5">
              A legacy of trust built over years of dedicated service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="200">
            {pastClients.map((client, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group">
                <HiStar className="text-orange-500 text-sm flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in-up" data-aos-duration="800">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl text-white/20 mb-4">“</div>
            <p className="text-white text-xl md:text-2xl leading-relaxed mb-8">
              We provide Quality Service, Ethics, Professionalism and Credibility. 
              Our team of experienced HR Managers, Advocates, and Legal consultants 
              ensure complete statutory compliance for your business.
            </p>
            <div className="flex justify-center gap-2 mb-8">
              {[1,2,3,4,5].map((i) => (
                <HiStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>
            <p className="text-orange-100 font-semibold">- Smyrna Consulting Solutions Pvt. Ltd.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-12 text-center" data-aos="zoom-in-up" data-aos-duration="800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become Our Next Valued Client
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We provide services upon mutual agreement. Let's discuss how we can help your business 
              achieve complete statutory compliance.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
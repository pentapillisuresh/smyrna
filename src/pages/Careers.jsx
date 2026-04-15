import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { HiArrowRight, HiLocationMarker, HiBriefcase, HiClock, HiCheckCircle } from 'react-icons/hi';
import { FaUsers, FaChartLine, FaLaptopCode, FaHandshake, FaTrophy, FaRocket } from 'react-icons/fa';

const Careers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const openings = [
    {
      title: 'Senior Labour Law Consultant',
      department: 'Legal & Compliance',
      location: 'Noida',
      type: 'Full-time',
      experience: '5-8 years'
    },
    {
      title: 'HR Business Partner',
      department: 'Human Resources',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '3-6 years'
    },
    {
      title: 'Compliance Auditor',
      department: 'Audit Services',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '4-7 years'
    },
    {
      title: 'Payroll Specialist',
      department: 'Payroll Management',
      location: 'Noida',
      type: 'Full-time',
      experience: '2-5 years'
    },
    {
      title: 'Business Development Manager',
      department: 'Sales & Marketing',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '5-10 years'
    },
    {
      title: 'Legal Associate',
      department: 'Licensing',
      location: 'Pune',
      type: 'Full-time',
      experience: '2-4 years'
    }
  ];

  const benefits = [
    {
      icon: FaChartLine,
      title: 'Career Growth',
      description: 'Clear career progression paths with regular performance reviews and promotion opportunities.'
    },
    {
      icon: FaLaptopCode,
      title: 'Learning & Development',
      description: 'Access to training programs, certifications, and industry conferences.'
    },
    {
      icon: FaUsers,
      title: 'Collaborative Culture',
      description: 'Work with industry experts in a supportive and inclusive environment.'
    },
    {
      icon: FaHandshake,
      title: 'Competitive Package',
      description: 'Attractive salary, performance bonuses, and comprehensive benefits.'
    }
  ];

  const cultureValues = [
    { icon: FaTrophy, title: 'Excellence', desc: 'Strive for excellence in everything we do' },
    { icon: FaUsers, title: 'Teamwork', desc: 'Collaboration and mutual respect' },
    { icon: FaRocket, title: 'Innovation', desc: 'Embrace new ideas and technologies' },
    { icon: FaHandshake, title: 'Integrity', desc: 'Honest and ethical practices' }
  ];

  return (
    <div className="bg-white pt-24 overflow-x-hidden">
      {/* Hero Section with Banner Image */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2073&auto=format&fit=crop"
            alt="Careers at Smyrna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl" data-aos="fade-right" data-aos-duration="800">
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4 inline-block px-3 py-1 bg-orange-600/20 rounded-full">
                Join Our Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Build Your Career
                <span className="text-orange-600 block mt-2">With Smyrna</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Join a team of passionate professionals dedicated to excellence in compliance 
                and business solutions. We're always looking for talented individuals to grow with us.
              </p>
              <a 
                href="#openings" 
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
                <HiArrowRight className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Why Smyrna?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">More Than Just a Job</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Discover what makes Smyrna a great place to work and grow</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-8 text-center group hover:-translate-y-2 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-all duration-300">
                    <Icon className="text-2xl text-orange-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Culture</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Work With The Best</h2>
              <div className="w-16 h-1 bg-orange-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Smyrna Consultancy, we foster a culture of innovation, collaboration, and continuous learning. 
                Our team members are our greatest asset, and we invest heavily in their growth and well-being.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {cultureValues.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <Icon className="text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{value.title}</h4>
                        <p className="text-xs text-gray-500">{value.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Team Culture"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold">Collaborative and Inclusive Environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Current Openings</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Find Your Perfect Role</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Explore exciting career opportunities at Smyrna Consultancy</p>
          </div>

          <div className="space-y-4 mt-8">
            {openings.map((job, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-600/50 transition-all duration-300 group hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center gap-2 text-gray-500 text-sm">
                        <HiBriefcase className="text-orange-600" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-2 text-gray-500 text-sm">
                        <HiLocationMarker className="text-orange-600" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2 text-gray-500 text-sm">
                        <HiClock className="text-orange-600" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-2 text-gray-500 text-sm">
                        <HiCheckCircle className="text-orange-600" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm"
                  >
                    Apply Now
                    <HiArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="0">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600 font-medium">Team Members</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <p className="text-gray-600 font-medium">Years of Excellence</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="300">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-600 font-medium">Growth Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-3xl p-12 text-center" data-aos="zoom-in-up" data-aos-duration="800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See a Matching Role?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always interested in connecting with talented professionals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Send Your Resume
              <HiArrowRight className="text-lg" />
            </a>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Careers;
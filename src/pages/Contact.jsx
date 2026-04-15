import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { 
  HiLocationMarker, 
  HiPhone, 
  HiMail, 
  HiClock,
  HiArrowRight,
  HiCheckCircle
} from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      lines: ['123 Business Avenue, Sector 62', 'Noida, Uttar Pradesh 201309'],
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      lines: ['+91 98765 43210', '+91 120 456 7890'],
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: HiMail,
      title: 'Email Us',
      lines: ['info@smyrnaconsultancy.com', 'support@smyrnaconsultancy.com'],
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: HiClock,
      title: 'Business Hours',
      lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white pt-24 overflow-x-hidden">
      {/* Hero Section with Banner Image */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2073&auto=format&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-duration="800">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 inline-block px-3 py-1 bg-orange-500/20 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Discuss Your
              <span className="text-orange-500 block mt-2">Business Needs</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions about our services? Ready to start your compliance journey? 
              We're here to help. Reach out to us and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className={`w-14 h-14 rounded-full ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-2xl ${info.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{info.title}</h3>
                  {info.lines.map((line, lIdx) => (
                    <p key={lIdx} className="text-gray-500 text-sm">{line}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right" data-aos-duration="800">
              <div className="mb-8">
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Send Us a Message</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">We'd Love to Hear From You</h2>
                <div className="w-16 h-1 bg-orange-600 mt-4 rounded-full"></div>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center gap-3">
                  <HiCheckCircle className="text-green-600 text-xl" />
                  <span className="text-green-700">Thank you! We'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  >
                    <option value="">Select a Service</option>
                    <option value="labour-laws">Labour Laws</option>
                    <option value="audit-services">Audit Services</option>
                    <option value="hr-solutions">HR Solutions</option>
                    <option value="payroll-management">Payroll Management</option>
                    <option value="contract-staffing">Contract Staffing</option>
                    <option value="licensing">Licensing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <HiArrowRight className="text-lg" />}
                </button>
              </form>
            </div>

            {/* Map & Social */}
            <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              {/* Map Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-6">
                <div className="bg-gray-100 p-4 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-orange-600" />
                    Our Location
                  </h3>
                </div>
                <div className="h-[250px] bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <HiLocationMarker className="text-5xl text-orange-600/50 mx-auto mb-3" />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400">123 Business Avenue, Noida</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links - Side by Side Icons No Text */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  Connect With Us
                </h3>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: FaFacebookF, link: '#', bgColor: 'hover:bg-blue-600', iconColor: 'text-blue-600' },
                    { icon: FaTwitter, link: '#', bgColor: 'hover:bg-sky-500', iconColor: 'text-sky-500' },
                    { icon: FaLinkedinIn, link: '#', bgColor: 'hover:bg-blue-700', iconColor: 'text-blue-700' },
                    { icon: FaInstagram, link: '#', bgColor: 'hover:bg-pink-600', iconColor: 'text-pink-600' }
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.link}
                        className={`w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center ${social.bgColor} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className={`text-2xl ${social.iconColor} group-hover:text-white transition-colors duration-300`} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Support */}
              <div className="mt-6 bg-orange-50 rounded-2xl p-6 border border-orange-200">
                <h4 className="font-bold text-gray-800 mb-2">Need Quick Support?</h4>
                <p className="text-gray-600 text-sm mb-3">Our team is available 24/7 to assist you</p>
                <a href="tel:+919876543210" className="text-orange-600 font-semibold flex items-center gap-2">
                  <HiPhone className="text-sm" />
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-3xl p-12 text-center" data-aos="zoom-in-up" data-aos-duration="800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how Smyrna Consultancy can help your business achieve complete compliance.
            </p>
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call Us Now
              <HiPhone className="text-lg" />
            </a>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Contact;
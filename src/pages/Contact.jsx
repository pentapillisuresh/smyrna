import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  HiLocationMarker, 
  HiPhone, 
  HiMail, 
  HiClock,
  HiArrowRight,
  HiCheckCircle,
  HiOfficeBuilding  // Changed from HiBuilding to HiOfficeBuilding
} from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

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
      title: 'Visit Our Office',
      lines: ['Hyderabad, Telangana, India'],
      detail: 'Serving South India',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      lines: ['+91 98765 43210', '+91 40 1234 5678'],
      detail: 'Mon-Sat, 9AM to 6PM',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: HiMail,
      title: 'Email Us',
      lines: ['info@smyrnaconsulting.com', 'support@smyrnaconsulting.com'],
      detail: 'Response within 24 hours',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: HiClock,
      title: 'Business Hours',
      lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      detail: 'Sunday Closed',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  const services = [
    "Registration & Licensing",
    "Statutory Audit & Due Diligence",
    "Monthly Compliance",
    "Advisory & Consulting",
    "HR & Payroll Management",
    "Government Liaison"
  ];

  // Social Media Icons data (exact styling from DigitalMedia component)
  const socialIcons = [
    { icon: FaYoutube, link: "https://youtube.com", bgColor: "#FF0000", name: "YouTube" },
    { icon: FaInstagram, link: "https://instagram.com", bgColor: "linear-gradient(45deg, #f09433, #d62976, #962fbf)", name: "Instagram" },
    { icon: FaFacebookF, link: "https://facebook.com", bgColor: "#1877F2", name: "Facebook" },
    { icon: FaTwitter, link: "https://twitter.com", bgColor: "#1DA1F2", name: "Twitter" },
    { icon: FaLinkedinIn, link: "https://linkedin.com", bgColor: "#0A66C2", name: "LinkedIn" }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="./images/contact.avif"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-duration="800">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 inline-block px-4 py-1.5 bg-orange-500/20 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Discuss Your
              <span className="text-orange-400 block mt-2">Compliance Needs</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Since 2008, we've been helping businesses achieve complete statutory compliance. 
              Reach out to us and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-gray-50 rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-500 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className={`w-14 h-14 rounded-full ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-all duration-300`}>
                    <Icon className={`text-2xl ${info.iconColor} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                  {info.lines.map((line, lIdx) => (
                    <p key={lIdx} className="text-gray-600 text-sm">{line}</p>
                  ))}
                  <p className="text-orange-600 text-xs mt-2 font-medium">{info.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right" data-aos-duration="800">
              <div className="mb-8">
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Send Us a Message</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">We'd Love to Hear From You</h2>
                <div className="w-16 h-1 bg-orange-500 mt-4 rounded-full"></div>
                <p className="text-gray-600 mt-4">Fill out the form below and our team will get back to you shortly.</p>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-400 rounded-xl flex items-center gap-3 animate-pulse">
                  <HiCheckCircle className="text-green-600 text-xl" />
                  <span className="text-green-700">Thank you! We'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold text-sm">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold text-sm">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold text-sm">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold text-sm">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold text-sm">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  >
                    <option value="">Select a Service</option>
                    <option value="registration-licensing">Registration & Licensing</option>
                    <option value="auditing-due-diligence">Auditing & Due Diligence</option>
                    <option value="monthly-compliance">End-to-End Monthly Compliance</option>
                    <option value="advisory-consulting">Advisory & Consulting</option>
                    <option value="hr-payroll">HR & Payroll Management</option>
                    <option value="govt-liaison">Government Liaison & Representation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold text-sm">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <HiArrowRight className="text-lg" />}
                </button>
              </form>
            </div>

            {/* Office Information & Social */}
            <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              {/* Office Info Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-8">
                <div className="bg-gray-900 p-5">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <HiOfficeBuilding className="text-orange-400 text-2xl" />  {/* Fixed icon */}
                    Smyrna Consulting Solutions Pvt. Ltd.
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Industrial & Labour Laws / HR / Statutory Compliance Consultants</p>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="text-orange-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Head Office</h4>
                      <p className="text-gray-600 text-sm">Hyderabad, Telangana, India</p>
                      <p className="text-gray-500 text-xs mt-1">Serving South India - Telangana, AP, Karnataka, TN & Kerala</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <HiPhone className="text-orange-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600 text-sm">+91 98765 43210</p>
                      <p className="text-gray-500 text-xs">+91 40 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <HiMail className="text-orange-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600 text-sm">info@smyrnaconsulting.com</p>
                      <p className="text-gray-500 text-xs">support@smyrnaconsulting.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <HiCheckCircle className="text-orange-500" />
                  Our Services
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Links Section - EXACT styling from DigitalMedia component */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-6 text-center">
                <div className="text-center mb-4">
                  <span className="text-xs tracking-[5px] text-orange-200 font-semibold mb-2 inline-block">
                    CONNECT WITH US
                  </span>
                  <div className="w-16 h-0.5 bg-orange-300 mx-auto mb-3"></div>
                  <h3 className="font-serif text-xl text-white mb-1">Follow Us on Social Media</h3>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {socialIcons.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={idx}
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                        style={{ background: social.bgColor }}
                      >
                        <Icon size={22} />
                      </a>
                    );
                  })}
                </div>
                <p className="text-orange-100 text-sm mt-4">Follow us for updates on labour laws & compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-12 text-center" data-aos="zoom-in-up" data-aos-duration="800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Ensure Complete Compliance?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We provide services upon mutual agreement. Let's discuss how we can help your business 
              achieve complete statutory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <HiPhone className="text-lg" />
                Call Us Now
              </a>
              <a 
                href="mailto:info@smyrnaconsulting.com" 
                className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <HiMail className="text-lg" />
                Email Us
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">We provide services upon mutual agreement</p>
          </div>
        </div>
      </section>

      {/* Custom CSS for hover effects matching DigitalMedia */}
      <style>
        {`
          .social-icon {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
          }
          
          .font-serif {
            font-family: 'Cormorant Garamond', serif;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
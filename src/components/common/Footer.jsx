import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBalanceScale
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/10">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="animate-slide-up">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              
              <div>
                  <img 
                src="/images/logo.png" 
                className="w-18 h-auto" 
                alt="logo"
              />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in Labour Law Compliance, HR Solutions, and Business Licensing. 
              Excellence in compliance since 2009.
            </p>
            <div className="flex space-x-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up animation-delay-100">
            <h4 className="text-white font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Our Clients', 'Careers', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-').replace('us', '')}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <HiArrowRight className="mr-2 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-up animation-delay-200">
            <h4 className="text-white font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Labour Laws',
                'Audit Services',
                'HR Solutions',
                'Payroll Management',
                'Contract Staffing',
                'Licensing'
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <HiArrowRight className="mr-2 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up animation-delay-300">
            <h4 className="text-white font-display font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Business Avenue, Sector 62,<br />
                  Noida, Uttar Pradesh 201309
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <span className="text-gray-400">info@smyrnaconsultancy.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Subscribe to Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-gradient-primary text-white rounded-r-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
                  <HiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Smyrna Consultancy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
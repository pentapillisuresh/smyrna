import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiCheckCircle, HiArrowRight, HiEye, HiStar } from 'react-icons/hi';
import { FaUsers, FaTrophy, FaGlobe, FaHandshake, FaBullseye, FaBriefcase, FaAward, FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="bg-white pt-24 overflow-x-hidden">

      {/* HERO SECTION with Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-duration="800">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 inline-block px-3 py-1 bg-orange-500/20 rounded-full">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Partner in
              <span className="text-orange-500 block mt-2">Business Compliance</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              With 17+ years of expertise, we provide quality service, ethics, professionalism, and credibility.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right" data-aos-duration="800">
              <div className="mb-6">
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">About Smyrna Consultancy</h2>
                <div className="w-16 h-1 bg-orange-600 mt-4 rounded-full"></div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are <span className="text-orange-600 font-semibold">Smyrna Consultancy Services</span>, 
                have great pleasure in writing you about our Consultancy Service Division. 
                We Provide Quality Service, Ethics, Professionalism and Credibility.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are pleased to introduce ourselves as a professional service Organization to meet the needs 
                of the Employers running shops & establishments, Industrial units pertaining to compliance 
                of statutory provisions, Legal matters and other Government related services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Smyrna Consultancy Services is an association of a team of professional consisting of 
                Experienced H.R Manager, Advocates and other qualified professionals with rich and varied 
                experience in the relevant areas.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Areas of Services Offered</h3>
                <div className="space-y-3">
                  {[
                    "Registrations & Renewals of Licenses (Shop Act, Labour, Trade, Food, VAT, etc.)",
                    "Registration of EPF and ESI",
                    "Maintain statutory records & registers",
                    "Liaison work with Government Departments",
                    "Statutory Audits (Shop & Establishment, Labour Act)",
                    "Framing HR Policies"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                      <HiCheckCircle className="text-orange-600 text-lg mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM HEAD Section - Premium */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Brief Profile of our Team Head</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                <FaGraduationCap className="text-4xl text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Mr. S.T. JAIRAJ</h3>
              <p className="text-orange-600 font-semibold mb-4">Head of the Team</p>
              <p className="text-gray-600 mb-3">17+ years of experience in HR / Personnel Department</p>
              <div className="inline-block bg-gray-100 rounded-full px-6 py-2">
                <p className="text-gray-700 font-medium">B.Sc, PGD-PMIR, LLB, PGDBA-HRD (Symbiosis Institute Pune)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK PROFILE & ACHIEVEMENTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Work Profile */}
            <div data-aos="fade-right" data-aos-duration="800">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <FaBriefcase className="text-xl text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Work Profile</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Worked in Hospitality Industry",
                    "Golconda Resorts Ltd – Assistant HR",
                    "Best Western Amrutha Castle – Executive HR",
                    "Kamat Lingapur – Assistant Manager HR",
                    "Ambica Group – Manager HR"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <FaAward className="text-xl text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Achievements and Rewards</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Represented Minimum Wage case and won",
                    "Handled retail company wage cases successfully",
                    "Provided PF & ESI code to companies",
                    "Educational Society PF case success",
                    "Completed ESI inspections successfully",
                    "Gave legal guidance to companies",
                    "Handled union strikes",
                    "Established HR systems"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                      <HiStar className="text-orange-600 text-sm" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTRA CURRICULAR ACTIVITIES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Extra Curricular Activities</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Bar Council Association Member",
                  "Labour Court Association Member",
                  "HRD Network Member"
                ].map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-2xl" data-aos="fade-up" data-aos-delay="0">
              <div className="text-4xl font-bold text-orange-600 mb-2">17+</div>
              <p className="text-gray-600 font-medium">Years of Experience</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-600 font-medium">Compliance Rate</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-3xl p-12 text-center" data-aos="zoom-in-up" data-aos-duration="800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's grow your business with compliance & trust.
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

export default About;
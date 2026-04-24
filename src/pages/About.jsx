import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowRight } from 'react-icons/hi';
import { FaScaleBalanced, FaUserShield, FaClipboardCheck, FaFileContract } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const teamExpertise = [
    { icon: <FaUserShield />, title: "Experienced HR Managers", desc: "Deep expertise in labor law, recruitment, and management across multiple industries." },
    { icon: <FaScaleBalanced />, title: "Legal Consultants", desc: "Varied experience in legal advocacy, regulatory requirements, and risk management." },
    { icon: <FaClipboardCheck />, title: "Statutory Auditors", desc: "Comprehensive auditing to certify records for both principal employers and contractors." },
    { icon: <FaFileContract />, title: "Advocates & Liaisons", desc: "Specialized in handling labor court cases and government department representation." }
  ];

  const journey = [
    { year: "2008", title: "Founded", desc: "Started as Smyrna Consultancy Services for Hotel & Retail sectors." },
    { year: "2012", title: "Expansion", desc: "Broadened services to Manufacturing and ITES units." },
    { year: "2015", title: "Compliance", desc: "Launched 360° monthly statutory management systems." },
    { year: "2020", title: "Pvt. Ltd.", desc: "Incorporated to handle PAN India enterprise operations." },
    { year: "2024", title: "Milestone", desc: "Currently managing 70+ industry leaders across South India." },
  ];

  const coreValues = [
    { n: "01", t: "Quality Service", d: "High-quality professional services tailored to meet individual business requirements." },
    { n: "02", t: "Ethics", d: "Integrity and transparency are the core of our organization's dealings." },
    { n: "03", t: "Professionalism", d: "Qualified professionals ensuring results and expert execution of labor laws." },
    { n: "04", t: "Credibility", d: "Consistent performance over 15+ years ensuring client trust and growth." }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative  min-h-[500px] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src="/images/syy.jpg" className="w-full h-full object-cover" alt="Library" />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative z-10 max-w-5xl px-6" data-aos="fade-up">
          <span className="text-orange-500 uppercase tracking-[6px] text-sm font-bold mb-4 inline-block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">About Smyrna <br /> <span className="italic">Consulting Solutions</span></h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto border-t border-white/20 pt-8">Established in 2008 to provide trusted legal and statutory excellence.</p>
        </div>
      </section>

      {/* 2. EVOLUTION & STATS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">From Smyrna Consultancy Services to <span className="text-orange-600">SCS Pvt. Ltd.</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">Specializing in Compliances, Legal consultancy and Statutory Audit to Hotel, Retail, and Manufacturing industries since 2008.</p>
            <div className="bg-gray-900 p-8 text-white border-l-4 border-orange-500">
              "Quality, Ethics, and Credibility are the foundations of every engagement."
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {[["15+", "Years"], ["70+", "Clients"], ["100%", "Compliance"], ["10+", "Experts"]].map((s, i) => (
              <div key={i} className="bg-gray-900 p-10 group hover:bg-orange-600 transition-all duration-500 cursor-pointer">
                <div className="text-4xl font-bold text-white mb-1">{s[0]}</div>
                <div className="text-gray-400 group-hover:text-white uppercase tracking-tighter text-[10px]">{s[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEAM SECTION */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold">Our Professional Team</h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {teamExpertise.map((item, i) => (
              <div key={i} className="p-10 border border-white/10 flex flex-col items-start justify-start h-full hover:bg-white/5 transition-all">
                <div className="text-3xl text-orange-500 mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-gray-900">Our Core Values</h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {coreValues.map((v, i) => (
              <div key={i} className={`relative px-10 py-16 ${i !== 0 ? "border-l border-gray-200" : ""}`}>
                <span className="absolute top-6 left-10 text-[80px] font-semibold text-orange-100 leading-none">{v.n}</span>
                <div className="relative mt-16">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{v.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR JOURNEY TIMELINE - FIXED ALIGNMENT */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-semibold text-gray-900">Our Journey</h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mt-4"></div>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-orange-300 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {journey.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  {/* Top Card - for even indices */}
                  {i % 2 === 0 && (
                    <div className="hidden md:block mb-20 w-full">
                      <div className="bg-white p-5 rounded-md shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-gray-900 mb-2 text-base">{item.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )}

                  {/* Spacer for alignment */}
                  {i % 2 === 0 && <div className="hidden md:block h-8"></div>}

                  {/* Year Circle */}
                  <div className="relative z-10 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                    {item.year}
                  </div>

                  {/* Spacer for alignment */}
                  {i % 2 !== 0 && <div className="hidden md:block h-8"></div>}

                  {/* Bottom Card - for odd indices */}
                  {i % 2 !== 0 && (
                    <div className="hidden md:block mt-20 w-full">
                      <div className="bg-white p-5 rounded-md shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-gray-900 mb-2 text-base">{item.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )}

                  {/* Mobile View */}
                  <div className="md:hidden mt-6 w-full">
                    <div className="bg-white p-5 rounded-md shadow-md border border-gray-100 text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Partner with South India's <br/> Compliance Experts</h2>
          <button onClick={() => navigate("/contact")} className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 font-bold tracking-widest uppercase text-[10px] flex items-center gap-3 mx-auto transition-all">
            Consult Now <HiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
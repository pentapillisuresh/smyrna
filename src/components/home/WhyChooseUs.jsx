import React, { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Award, Users, FileText, Globe, Scale } from "lucide-react";

const WhyChooseUs = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Award size={24} />,
      title: "15+ Years Experience",
      desc: "Proven expertise in labour law & compliance services"
    },
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      desc: "Skilled HR managers, advocates & legal consultants"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "100% Compliance",
      desc: "Complete statutory compliance solutions"
    },
    {
      icon: <Globe size={24} />,
      title: "PAN India Services",
      desc: "Serving 5+ states across South India"
    },
    {
      icon: <FileText size={24} />,
      title: "Trusted Clients",
      desc: "TATA, CtrlS, Hero Future Energies & more"
    },
    {
      icon: <Scale size={24} />,
      title: "Ethical Practices",
      desc: "Transparency & credibility since 2008"
    }
  ];

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-white relative">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[520px]">
        
        {/* Left Side: Image with Hover Zoom Animation */}
        <div 
          className={`lg:w-1/2 relative min-h-[320px] lg:min-h-full overflow-hidden transition-all duration-1000 ease-out ${
            animated ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
              alt="Corporate Building" 
              className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-110"
            />
          </div>
          
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-500"></div>
          
          {/* Orange Floating Badge */}
          <div 
            className={`absolute top-6 left-6 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center border-[6px] border-white/20 backdrop-blur-sm shadow-2xl z-10 transition-all duration-700 delay-300 ${
              animated ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-12 opacity-0'
            }`}
          >
            <div className="text-center">
              <p className="text-white font-bold text-xl leading-none">15+</p>
              <p className="text-white text-[7px] uppercase font-bold tracking-tighter">Years</p>
            </div>
          </div>

          {/* Animated Border Effect on Hover */}
          <div className="absolute inset-0 border-2 border-orange-500/0 hover:border-orange-500/50 transition-all duration-500 pointer-events-none z-10"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden"></div>
        </div>

        {/* Right Side: Content Area with White Background */}
        <div 
          className={`lg:w-1/2 bg-white flex items-center transition-all duration-1000 ease-out delay-200 ${
            animated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        >
          <div className="w-full py-10 px-6 md:px-8 lg:px-12 relative">
            
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="relative z-10">
              
              {/* Header */}
              <div 
                className={`flex items-center gap-3 mb-4 transition-all duration-700 delay-300 ${
                  animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <h4 className="text-orange-500 font-semibold tracking-[0.2em] uppercase text-[10px]">
                  Why Choose Us
                </h4>
              </div>

              {/* Title */}
              <h2 
                className={`text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight transition-all duration-700 delay-400 ${
                  animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Why Choose <span className="text-orange-500">Smyrna Consulting</span>
              </h2>

              {/* Description */}
              <p 
                className={`text-gray-600 mb-6 text-sm leading-relaxed transition-all duration-700 delay-500 ${
                  animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Delivering trusted, compliant, and efficient business solutions since 2008.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-3 group cursor-pointer transition-all duration-700 ${
                      animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold text-xs mb-0.5 group-hover:text-orange-500 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-[11px] leading-relaxed group-hover:text-gray-600 transition-colors">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Footer */}
              <div 
                className={`mt-6 pt-5 border-t border-gray-200 flex flex-wrap gap-5 transition-all duration-700 delay-1000 ${
                  animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="group cursor-pointer">
                  <p className="text-gray-900 text-xl font-bold group-hover:text-orange-500 transition-colors">70+</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">Trusted Clients</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-gray-900 text-xl font-bold group-hover:text-orange-500 transition-colors">5+</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">States Covered</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-gray-900 text-xl font-bold group-hover:text-orange-500 transition-colors">100%</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">Compliance Rate</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
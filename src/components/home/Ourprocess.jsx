import React, { useEffect, useState, useRef } from 'react';
import { 
  FaRegCommentDots, 
  FaFileAlt, 
  FaClipboardCheck, 
  FaHeadset
} from 'react-icons/fa';

const Ourprocess = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
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

  const processes = [
    {
      id: "01",
      title: "Consultation",
      desc: "We understand your business requirements and provide expert consultation on statutory compliance needs.",
      icon: FaRegCommentDots,
    },
    {
      id: "02",
      title: "Documentation",
      desc: "Complete documentation support including registration forms, license applications, and statutory records.",
      icon: FaFileAlt,
    },
    {
      id: "03",
      title: "Compliance Execution",
      desc: "End-to-end execution of all statutory compliance including filings, returns, and government liaison.",
      icon: FaClipboardCheck,
    },
    {
      id: "04",
      title: "Ongoing Support",
      desc: "Continuous support with regular updates, amendments tracking, and proactive compliance management.",
      icon: FaHeadset,
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-6 overflow-hidden relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&h=900&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for better white text visibility */}
      <div className="absolute inset-0 bg-black/85"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs tracking-[5px] text-orange-400 font-semibold mb-3 inline-block uppercase">
            Our Process
          </span>
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-0.5 bg-orange-500"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We <span className="text-orange-500">Work</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            A streamlined approach to ensure complete statutory compliance for your business
          </p>
        </div>

        {/* Horizontal Steps Layout */}
        <div className="relative">
          
          {/* Connecting Line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-orange-500/30 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {processes.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className={`relative text-center transition-all duration-700 ease-out ${
                    animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative z-10 mb-8 group">
                    <div className="w-24 h-24 mx-auto rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex flex-col items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500/20 transition-all duration-300 shadow-md">
                      <Icon className="w-8 h-8 text-white mb-1 group-hover:text-orange-300 transition-colors duration-300" />
                      <span className="text-white/70 text-[10px] font-bold tracking-tighter group-hover:text-orange-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {index < processes.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 text-orange-500/40 z-20">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  <h3 className="text-white text-base font-bold mb-3 px-4 leading-tight min-h-[40px]">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-xs leading-relaxed max-w-[220px] mx-auto px-2">
                    {step.desc}
                  </p>

                  <div className="mt-6 flex justify-center">
                    <div className="w-6 h-1 bg-white/20 rounded-full group-hover:bg-orange-500 transition-all duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourprocess;
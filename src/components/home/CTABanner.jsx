import React from "react";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2 transition-all duration-500 hover:shadow-3xl">
          
          {/* LEFT CONTENT - Fixed background color */}
          <div className="bg-dark text-white flex flex-col justify-center px-6 md:px-10 py-8">
            <div className="mb-3">
            
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight text-white">
              Transform Your Business
            </h2>

            <div className="w-12 h-0.5 bg-white/60 mb-4 rounded-full"></div>

            <p className="text-sm md:text-base mb-4 text-white/90 leading-relaxed">
              Get expert guidance on compliance, payroll & HR solutions.
            </p>

            {/* Feature list - horizontal layout for premium look */}
            <div className="flex flex-wrap gap-3 mb-5">
              <div className="flex items-center gap-1.5">
                <HiCheckCircle className="text-white text-sm" />
                <span className="text-xs text-white/90 font-medium">Free Consult</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HiCheckCircle className="text-white text-sm" />
                <span className="text-xs text-white/90 font-medium">No Obligation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HiCheckCircle className="text-white text-sm" />
                <span className="text-xs text-white/90 font-medium">30-Min Strategy</span>
              </div>
            </div>

            <button onClick={() => navigate("/contact")} className="group bg-white text-orange-700 px-6 py-2.5 rounded-full font-semibold w-fit hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-sm">
              <span>Get Free Consultation</span>
              <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[280px] md:h-auto overflow-hidden">
            <img
              src="./images/cta.jpg"
              alt="Business Consultation"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .rounded-2xl {
            border-radius: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTABanner;
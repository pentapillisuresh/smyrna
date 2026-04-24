import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [imageErrors, setImageErrors] = useState({});

  const clients = [
    { name: 'client1', logo: '/images/logo1.jpg' },
    { name: 'client2', logo: '/images/logo2.png' },
    { name: 'client3', logo: '/images/logo3.png' },
    { name: 'client4', logo: '/images/logo4.png' },
       { name: 'client4', logo: '/images/logo5.png' },
          { name: 'client4', logo: '/images/logo6.png' },
             { name: 'client4', logo: '/images/logo7.png' },
                { name: 'client4', logo: '/images/logo8.jpg' },
                { name: 'client4', logo: '/images/logo9.png' },
                { name: 'client4', logo: '/images/logo10.png' },
                { name: 'client4', logo: '/images/logo11.png' },
                { name: 'client4', logo: '/images/logo12.png' },
                { name: 'client4', logo: '/images/logo13.jpg' },
                { name: 'client4', logo: '/images/logo15.jpg' },
                { name: 'client4', logo: '/images/logo16.jpg' },

                { name: 'client4', logo: '/images/logo17.jpg' },

                { name: 'client4', logo: '/images/logo18.jpg' },




  ];

  const handleImageError = (clientName) => {
    setImageErrors(prev => ({ ...prev, [clientName]: true }));
  };

  const companyIcons = {
    client1: '💼',
    client2: '🏢',
    client3: '📊',
    client4: '🤝'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-orange-600 font-bold text-sm uppercase tracking-wider px-4 py-1 bg-orange-50 rounded-full">
            Trusted Partners
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-3">
            Our Valued <span className="text-orange-600">Clients</span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Join hundreds of businesses that trust Smyrna Consultancy
          </p>
        </div>

        {/* Slider */}
        <div className="relative py-8 overflow-hidden">

          {/* Gradient fade sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-scroll items-center">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[120px] h-[80px] bg-white rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer border border-gray-100"
              >
                {!imageErrors[client.name] ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    onError={() => handleImageError(client.name)}
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-2xl mb-1">{companyIcons[client.name]}</div>
                    <div className="text-[10px] font-medium text-gray-500 uppercase">
                      {client.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Points */}
        <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              <span className="text-gray-500 font-medium">Pan-India Presence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              <span className="text-gray-500 font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              <span className="text-gray-500 font-medium">100% Compliance</span>
            </div>
          </div>
        </div>

      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
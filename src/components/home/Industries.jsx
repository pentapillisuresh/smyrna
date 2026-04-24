import React from "react";

const industries = [
  { id: 1, title: "Hotels", image: "./images/service1.png" },
  { id: 2, title: "Retail", image: "./images/service2.png" },
  { id: 3, title: "Manufacturing", image: "./images/service6.png" },
  { id: 4, title: "IT / ITES", image: "./images/service4.png" },
  { id: 5, title: "Construction", image: "./images/service5.png" },
];

const Industries = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs tracking-[5px] text-orange-600 font-semibold mb-3 inline-block">
            INDUSTRIES WE SERVE
          </span>

          <div className="w-16 h-0.5 bg-orange-500 mx-auto"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-6 mb-4">
            Our Expertise Across Sectors
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Since 2008, providing quality compliance, legal consultancy & statutory audit services
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="
                group
                bg-[#0F172A]
                w-[160px]
                h-[160px]
                rounded-full
                flex flex-col items-center justify-center
                text-center
                cursor-pointer
                transition-all duration-300
                hover:bg-orange-500
                shadow-md
                hover:shadow-xl
              "
            >
              {/* Icon */}
              <div className="flex justify-center mb-2">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="
                    w-8 h-8 object-contain
                    transition duration-300
                    brightness-0 invert-[0.6]
                    group-hover:invert
                    group-hover:brightness-0
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Title */}
              <p className="text-sm font-semibold text-white transition px-2">
                {industry.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
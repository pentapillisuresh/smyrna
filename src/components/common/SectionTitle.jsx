import React from 'react';

const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 animate-fade-in">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 animate-slide-up">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-slide-up animation-delay-200">
          {description}
        </p>
      )}
      <div className={`h-1 w-20 bg-gradient-to-r from-primary to-accent-purple rounded-full mt-6 ${
        centered ? 'mx-auto' : ''
      }`}></div>
    </div>
  );
};

export default SectionTitle;
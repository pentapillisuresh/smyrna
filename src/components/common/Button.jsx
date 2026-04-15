import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark';
  
  const variants = {
    primary: 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/30 focus:ring-primary',
    secondary: 'bg-gradient-accent text-white hover:shadow-lg hover:shadow-accent-blue/30 focus:ring-accent-blue',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'bg-white/5 text-white hover:bg-white/10 focus:ring-white/20',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
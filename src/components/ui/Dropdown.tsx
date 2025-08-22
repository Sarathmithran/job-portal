'use client';
import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled';
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  placeholder = 'Select an option',
  value,
  onChange,
  disabled = false,
  className = '',
  rightIcon,
  size = 'md',
  variant = 'default'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sizes = {
    sm: 'px-2 py-1.5 text-sm min-h-[36px]',
    md: 'px-3 py-2 text-base min-h-[44px] sm:min-h-[48px]',
    lg: 'px-4 py-3 text-lg min-h-[52px] sm:min-h-[56px]'
  };

  const variants = {
    default: 'bg-white text-gray-500 hover:border-primary-background focus:border-primary-background focus:ring-2 focus:ring-primary-background focus:ring-opacity-20',
    outline: 'bg-transparent border-2 border-border-primary hover:border-primary-background focus:border-primary-background',
    filled: 'bg-secondary-light border border-transparent hover:bg-secondary-background focus:bg-white focus:border-primary-background'
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  const selectedOption = options.find(option => option.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const DefaultRightIcon = () => (
    <svg 
      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full
          flex
          items-center
          justify-between
          rounded
          sm:rounded-md
          md:rounded-lg
          transition-all
          duration-200
          ease-in-out
          focus:outline-none
          font-medium
          ${sizes[size]}
          ${variants[variant]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02]'}
          ${selectedValue ? 'text-secondary-foreground' : 'text-secondary-dark'}
        `.trim().replace(/\s+/g, ' ')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        <span className="truncate text-left flex-1">
          {displayText}
        </span>
        <span className="ml-2 flex-shrink-0 text-secondary-dark">
          {rightIcon || <DefaultRightIcon />}
        </span>
      </button>

      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-border-primary rounded sm:rounded-md md:rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.length === 0 ? (
            <div className="px-3 py-2 text-secondary-dark text-sm">
              No options available
            </div>
          ) : (
            options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`
                  w-full
                  text-left
                  px-3
                  py-2
                  text-sm
                  sm:text-base
                  hover:bg-secondary-light
                  focus:bg-secondary-light
                  focus:outline-none
                  transition-colors
                  duration-150
                  text-gray-500
                  ${selectedValue === option.value ? 'bg-primary-background text-primary-foreground' : 'text-secondary-foreground'}
                `.trim().replace(/\s+/g, ' ')}
                role="option"
                aria-selected={selectedValue === option.value}
              >
                {option.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
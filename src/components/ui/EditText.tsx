'use client';
import React, { useState, forwardRef } from 'react';
import Image from 'next/image';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled';
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  readOnly?: boolean;
  name?: string;
  id?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  placeholder = '',
  value,
  onChange,
  disabled = false,
  className = '',
  leftIcon,
  rightIcon,
  size = 'md',
  variant = 'default',
  type = 'text',
  required = false,
  maxLength,
  minLength,
  pattern,
  autoComplete,
  autoFocus = false,
  readOnly = false,
  name,
  id,
  ...props
}, ref) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-[36px]',
    md: 'px-3 py-2.5 text-base min-h-[44px] sm:min-h-[48px]',
    lg: 'px-4 py-3 text-lg min-h-[52px] sm:min-h-[56px]'
  };

  const variants = {
    default: 'text-gray-500 bg-white hover:border-primary-background focus:border-primary-background focus:ring-2 focus:ring-primary-background focus:ring-opacity-20',
    outline: 'bg-transparent border-2 border-border-primary hover:border-primary-background focus:border-primary-background',
    filled: 'bg-secondary-light border border-transparent hover:bg-secondary-background focus:bg-white focus:border-primary-background'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
  const leftPadding = leftIcon ? (size === 'sm' ? 'pl-10' : size === 'lg' ? 'pl-14' : 'pl-12') : '';
  const rightPadding = rightIcon ? (size === 'sm' ? 'pr-10' : size === 'lg' ? 'pr-14' : 'pr-12') : '';

  return (
    <div className={`relative w-full ${className}`}>
      {leftIcon && (
        <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10 ${disabled ? 'opacity-50' : ''}`}>
          <Image
            src={leftIcon}
            alt="Left icon"
            width={iconSize}
            height={iconSize}
            className="object-contain"
          />
        </div>
      )}
      
      <input
        ref={ref}
        type={type}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        readOnly={readOnly}
        name={name}
        id={id}
        className={`
          w-full
          rounded
          sm:rounded-md
          md:rounded-lg
          transition-all
          duration-200
          ease-in-out
          focus:outline-none
          font-medium
          placeholder:text-secondary-dark
          ${sizes[size]}
          ${variants[variant]}
          ${leftPadding}
          ${rightPadding}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'cursor-text'}
          ${isFocused ? 'scale-[1.01]' : ''}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />

      {rightIcon && (
        <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10 ${disabled ? 'opacity-50' : ''}`}>
          <Image
            src={rightIcon}
            alt="Right icon"
            width={iconSize}
            height={iconSize}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
});

EditText.displayName = 'EditText';

export default EditText;
'use client';
import React, { useState, useRef, useCallback } from 'react';

interface SeekBarProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  step?: number;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'secondary';
  showValue?: boolean;
  formatValue?: (value: number) => string;
  dual?: boolean;
  minValue?: number;
  maxValue?: number;
  onRangeChange?: (min: number, max: number) => void;
}

const SeekBar: React.FC<SeekBarProps> = ({
  min = 0,
  max = 100,
  value = 0,
  onChange,
  step = 1,
  disabled = false,
  className = '',
  size = 'md',
  variant = 'default',
  showValue = false,
  formatValue = (val) => val.toString(),
  dual = false,
  minValue = 0,
  maxValue = 100,
  onRangeChange
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [currentMinValue, setCurrentMinValue] = useState(minValue);
  const [currentMaxValue, setCurrentMaxValue] = useState(maxValue);
  const [isDragging, setIsDragging] = useState(false);
  const [activeThumb, setActiveThumb] = useState<'min' | 'max' | 'single'>('single');
  
  const sliderRef = useRef<HTMLDivElement>(null);

  const sizes = {
    sm: { height: 'h-1', thumb: 'w-4 h-4', track: 'h-1' },
    md: { height: 'h-2', thumb: 'w-5 h-5', track: 'h-2' },
    lg: { height: 'h-3', thumb: 'w-6 h-6', track: 'h-3' }
  };

  const variants = {
    default: {
      track: 'bg-gray-200',
      fill: 'bg-primary-background',
      thumb: 'bg-white border-2 border-primary-background shadow-md'
    },
    primary: {
      track: 'bg-primary-light/30',
      fill: 'bg-primary-background',
      thumb: 'bg-primary-background border-2 border-primary-dark shadow-lg'
    },
    secondary: {
      track: 'bg-secondary-light',
      fill: 'bg-secondary-foreground',
      thumb: 'bg-white border-2 border-secondary-foreground shadow-md'
    }
  };

  const calculateValue = useCallback((clientX: number) => {
    if (!sliderRef.current) return min;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const rawValue = min + percentage * (max - min);
    return Math.round(rawValue / step) * step;
  }, [min, max, step]);

  const handleMouseDown = (e: React.MouseEvent, thumbType?: 'min' | 'max') => {
    if (disabled) return;
    
    setIsDragging(true);
    
    if (dual && thumbType) {
      setActiveThumb(thumbType);
    } else {
      setActiveThumb('single');
    }
    
    const newValue = calculateValue(e.clientX);
    
    if (dual) {
      if (thumbType === 'min') {
        const newMin = Math.min(newValue, currentMaxValue);
        setCurrentMinValue(newMin);
        onRangeChange?.(newMin, currentMaxValue);
      } else if (thumbType === 'max') {
        const newMax = Math.max(newValue, currentMinValue);
        setCurrentMaxValue(newMax);
        onRangeChange?.(currentMinValue, newMax);
      }
    } else {
      setCurrentValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || disabled) return;
    
    const newValue = calculateValue(e.clientX);
    
    if (dual) {
      if (activeThumb === 'min') {
        const newMin = Math.min(newValue, currentMaxValue);
        setCurrentMinValue(newMin);
        onRangeChange?.(newMin, currentMaxValue);
      } else if (activeThumb === 'max') {
        const newMax = Math.max(newValue, currentMinValue);
        setCurrentMaxValue(newMax);
        onRangeChange?.(currentMinValue, newMax);
      }
    } else {
      setCurrentValue(newValue);
      onChange?.(newValue);
    }
  }, [isDragging, disabled, calculateValue, dual, activeThumb, currentMinValue, currentMaxValue, onChange, onRangeChange]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setActiveThumb('single');
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;

  const singlePercentage = getPercentage(currentValue);
  const minPercentage = dual ? getPercentage(currentMinValue) : 0;
  const maxPercentage = dual ? getPercentage(currentMaxValue) : 100;

  return (
    <div className={`w-full ${className}`}>
      {showValue && (
        <div className="flex justify-between mb-2 text-sm text-secondary-foreground">
          {dual ? (
            <>
              <span>{formatValue(currentMinValue)}</span>
              <span>{formatValue(currentMaxValue)}</span>
            </>
          ) : (
            <span>{formatValue(currentValue)}</span>
          )}
        </div>
      )}
      
      <div
        ref={sliderRef}
        className={`
          relative
          ${sizes[size].track}
          ${variants[variant].track}
          rounded-full
          cursor-pointer
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        onMouseDown={dual ? undefined : handleMouseDown}
      >
        {/* Fill Track */}
        <div
          className={`
            absolute
            top-0
            ${sizes[size].track}
            ${variants[variant].fill}
            rounded-full
            transition-all
            duration-150
            ease-out
          `}
          style={{
            left: dual ? `${minPercentage}%` : '0%',
            width: dual ? `${maxPercentage - minPercentage}%` : `${singlePercentage}%`
          }}
        />

        {/* Single Thumb */}
        {!dual && (
          <div
            className={`
              absolute
              top-1/2
              transform
              -translate-y-1/2
              -translate-x-1/2
              ${sizes[size].thumb}
              ${variants[variant].thumb}
              rounded-full
              cursor-grab
              transition-all
              duration-150
              ease-out
              ${isDragging ? 'scale-110 cursor-grabbing' : 'hover:scale-105'}
              ${disabled ? 'cursor-not-allowed' : ''}
            `}
            style={{ left: `${singlePercentage}%` }}
            onMouseDown={handleMouseDown}
          />
        )}

        {/* Dual Thumbs */}
        {dual && (
          <>
            {/* Min Thumb */}
            <div
              className={`
                absolute
                top-1/2
                transform
                -translate-y-1/2
                -translate-x-1/2
                ${sizes[size].thumb}
                ${variants[variant].thumb}
                rounded-full
                cursor-grab
                transition-all
                duration-150
                ease-out
                ${isDragging && activeThumb === 'min' ? 'scale-110 cursor-grabbing' : 'hover:scale-105'}
                ${disabled ? 'cursor-not-allowed' : ''}
                z-10
              `}
              style={{ left: `${minPercentage}%` }}
              onMouseDown={(e) => handleMouseDown(e, 'min')}
            />
            
            {/* Max Thumb */}
            <div
              className={`
                absolute
                top-1/2
                transform
                -translate-y-1/2
                -translate-x-1/2
                ${sizes[size].thumb}
                ${variants[variant].thumb}
                rounded-full
                cursor-grab
                transition-all
                duration-150
                ease-out
                ${isDragging && activeThumb === 'max' ? 'scale-110 cursor-grabbing' : 'hover:scale-105'}
                ${disabled ? 'cursor-not-allowed' : ''}
                z-10
              `}
              style={{ left: `${maxPercentage}%` }}
              onMouseDown={(e) => handleMouseDown(e, 'max')}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SeekBar;
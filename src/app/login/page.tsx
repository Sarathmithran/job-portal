"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import CommonHeader from '@/components/common/CommonHeader';
import Link from 'next/link';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Login attempt:', formData);
    
    setIsLoading(false);
    alert('Login successful!');
  };

  return (
    <>
    <CommonHeader title='Login' />
    <div className="min-h-1/2 bg-gradient-to-br from-white via-gray-50 to-emerald-50 flex items-center justify-center px-4 py-6 md:px-0 md:py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-md md:text-lg">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`block w-full pl-12 pr-4 py-4 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-300 focus:ring-red-500 bg-red-50' 
                      : 'border-gray-300 focus:ring-emerald-500 hover:border-gray-400 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 text-xs flex items-center justify-center font-bold">!</span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full pl-12 pr-12 py-4 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    errors.password 
                      ? 'border-red-300 focus:ring-red-500 bg-red-50' 
                      : 'border-gray-300 focus:ring-emerald-500 hover:border-gray-400 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 text-xs flex items-center justify-center font-bold">!</span>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm cursor-pointer font-medium hover:underline transition-all duration-200"
                style={{ color: '#309689' }}
              >
                Forgot your password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full cursor-pointer flex items-center justify-center gap-3 py-4 px-6 border border-transparent rounded-xl shadow-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:transform-none"
              style={{ backgroundColor: '#309689' }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-md md:text-lg">
            Don&apos;t have an account?
            <Link
              href="/register"
              className="ml-2 cursor-pointer font-semibold hover:underline transition-all duration-200"
              style={{ color: '#309689' }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;

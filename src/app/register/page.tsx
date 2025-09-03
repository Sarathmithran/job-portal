"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import CommonHeader from '@/components/common/CommonHeader';
import Link from 'next/link';
import { registerSchema } from '@/validation/authSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@/store/auth/authThunk';
import { useRouter } from 'next/navigation';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  });
  const { loading } = useSelector((state: RootState) => state.auth);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await dispatch(registerUser(data)).unwrap();
      router.push("/"); // redirect after successful registration
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <>
    <CommonHeader title="Register" />
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-50 flex items-center justify-center px-4 py-6 md:px-0 md:py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Create Account
          </h1>
          <p className="text-gray-600 text-md md:text-lg">
            Join us today and get started
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('name')}
                  className="block w-full pl-12 pr-4 py-4 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 border-gray-300 focus:ring-emerald-500 hover:border-gray-400 bg-gray-50 focus:bg-white"
                  placeholder="Enter your full name"
                />
              </div>
              <p className="text-red-500 text-sm ps-3">
                  {errors?.name?.message}
                </p>
            </div>

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
                  {...register('email')}
                  className="block w-full pl-12 pr-4 py-4 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 border-gray-300 focus:ring-emerald-500 hover:border-gray-400 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email address"
                />
              </div>
              <p className="text-red-500 text-sm ps-3">
                  {errors?.email?.message}
                </p>
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
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className="block w-full pl-12 pr-12 py-4 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 border-gray-300 focus:ring-emerald-500 hover:border-gray-400 bg-gray-50 focus:bg-white"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="text-red-500 text-sm ps-3">
                  {errors?.password?.message}
                </p>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('confirmPassword')}
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="block w-full pl-12 pr-12 py-4 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 border-gray-300 focus:ring-emerald-500 hover:border-gray-400 bg-gray-50 focus:bg-white"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute cursor-pointer inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="text-red-500 text-sm ps-3">
                  {errors?.confirmPassword?.message}
                </p>
            </div>

            {/* Terms Agreement */}
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
              <p>
                By creating an account, you agree to our{' '}
                <span className="underline cursor-pointer font-medium" style={{ color: '#309689' }}>
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="underline cursor-pointer font-medium" style={{ color: '#309689' }}>
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer flex items-center justify-center gap-3 py-4 px-6 border border-transparent rounded-xl shadow-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:transform-none"
              style={{ backgroundColor: '#309689' }}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-md md:text-lg">
            Already have an account?
            <Link
              href="/login"
              className="ml-2 cursor-pointer font-semibold hover:underline transition-all duration-200"
              style={{ color: '#309689' }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
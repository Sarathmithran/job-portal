'use client'
import CommonHeader from '@/components/common/CommonHeader';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <CommonHeader title='Contact Us' />
      {/* Hero Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                You Will Grow, You Will Succeed. We Promise That
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We’d love to hear from you! Whether you have questions about job listings, need support with your account,
                or just want to share feedback, our team is here to help. Reach out and let’s make your job search smoother together.
              </p>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Image src="/images/img_phone.svg" alt="Email" width={24} height={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call for Inquiry</h3>
                  <p className="text-gray-600">+9157 3681 6895</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Image src="/images/img_email.svg" alt="Email" width={24} height={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Send us email</h3>
                  <p className="text-gray-600">jobportal@team.com</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Image src="/images/img_clock.svg" alt="Clock" width={24} height={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Opening hours</h3>
                  <p className="text-gray-600">Mon - Fri: 10AM - 10PM</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Image src="/images/img_map_pin_teal_400_01.svg" alt="Location" width={24} height={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">19 North Road Kerala, IN 08854</p>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h2>
              <p className="text-gray-600 mb-6">Reach us anytime — we’re here to help</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:border-transparent bg-white"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:border-transparent bg-white"
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:border-transparent bg-white"
                />
                
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:border-transparent bg-white"
                />
                
                <Button
                  type="submit"
                  className="w-full px-4 sm:px-5 lg:px-[20px] py-2 sm:py-2.5 lg:py-[8px] text-sm sm:text-base lg:text-[16px] font-figtree font-semibold text-white bg-[#309589] hover:bg-[#267a6f] rounded-lg transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96">
        <div className="w-full h-full bg-gray-200 relative">
          {/* Map placeholder with location marker */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image src="/images/img_map_pin_teal_400_01.svg" alt="Location" width={18} height={18} />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-gray-900">India, IN</p>
              <p className="text-xs text-gray-600">19 North Road Kerala</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
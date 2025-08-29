import CommonHeader from '@/components/common/CommonHeader';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    <CommonHeader title='About Us' />
      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Image src="/images/img_target.svg" alt="target" width={24} height={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the job search experience by providing a platform that connects the right talent 
                with the right opportunities. We believe everyone deserves a career they&#39;re passionate about, 
                and we&#39;re here to make that happen through technology and human connection.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Image src="/images/img_star.svg" alt="star" width={24} height={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the world&#39;s leading job platform where career dreams come true. We envision a future 
                where finding the perfect job is seamless, efficient, and empowering for both job seekers 
                and employers across all industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-2">50K+</div>
              <div className="text-teal-100">Jobs Posted</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-2">25K+</div>
              <div className="text-teal-100">Companies</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-2">100K+</div>
              <div className="text-teal-100">Job Seekers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-2">95%</div>
              <div className="text-teal-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image src="/images/img_team.svg" alt="team" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of working together to achieve extraordinary results.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image src="/images/img_star.svg" alt="star" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, setting high standards for ourselves.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image src="/images/img_target.svg" alt="target" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously innovate to provide the best solutions for our users.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
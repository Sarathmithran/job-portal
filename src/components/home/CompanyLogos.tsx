import Image from 'next/image'
import React from 'react'

const CompanyLogos = () => {
  return (
    <section className="w-full bg-black py-8 sm:py-10 lg:py-[40px]">
              <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[40px]">
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-[156px]">
                  {/* Spotify Logo */}
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/img_logo.svg"
                      alt="Spotify"
                      width={140}
                      height={48}
                      className="w-[100px] sm:w-[120px] lg:w-[140px] h-auto"
                    />
                  </div>
                  {/* Slack Logo */}
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/img_logos.svg"
                      alt="Slack"
                      width={120}
                      height={48}
                      className="w-[90px] sm:w-[100px] lg:w-[120px] h-auto"
                    />
                  </div>
                  {/* Adobe Logo */}
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/img_logo_white_a700.svg"
                      alt="Adobe"
                      width={132}
                      height={48}
                      className="w-[95px] sm:w-[110px] lg:w-[132px] h-auto"
                    />
                  </div>
                  {/* Asana Logo */}
                  <div className="flex items-center justify-end gap-1.5 lg:gap-[6px] px-4 sm:px-12 lg:px-[56px] py-2.5 lg:py-[10px]">
                    <Image
                      src="/images/img_vector.svg"
                      alt="Asana"
                      width={26}
                      height={24}
                      className="w-[20px] sm:w-[23px] lg:w-[26px] h-auto"
                    />
                    <Image
                      src="/images/img_vector_black_900_01.svg"
                      alt="Asana Text"
                      width={92}
                      height={16}
                      className="w-[70px] sm:w-[80px] lg:w-[92px] h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>
  )
}

export default CompanyLogos
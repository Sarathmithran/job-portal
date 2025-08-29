import React, { useEffect, useState } from "react";
import Image from "next/image";

const hiringImages = [
  "/images/hiring-poster.webp",
  "/images/hiring-poster2.webp",
  "/images/hiring-poster3.webp",
  "/images/hiring-poster4.webp"
];

const HiringBanner = () => {
  const [selectedImage, setSelectedImage] = useState(hiringImages[0]);

  useEffect(() => {
    // Pick an initial random image
    const random = hiringImages[Math.floor(Math.random() * hiringImages.length)];
    setSelectedImage(random);

    // Change image every 15 seconds
    const interval = setInterval(() => {
      setSelectedImage((prev) => {
        let newImage = prev;
        // ensure new image is different from previous one
        while (newImage === prev) {
          newImage = hiringImages[Math.floor(Math.random() * hiringImages.length)];
        }
        return newImage;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[460px] rounded-lg sm:rounded-xl overflow-hidden">
      <Image
        key={selectedImage}
        src={selectedImage}
        alt="We are hiring"
        fill
        priority
        className="object-cover transition-opacity duration-700 ease-in-out"
      />
    </div>
  );
};

export default HiringBanner;

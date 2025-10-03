import React, { useState, useEffect } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=1600",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1600",
  "https://images.unsplash.com/photo-1588632901974-5ae3618d967b?w=1600",
  "https://images.unsplash.com/photo-1599682165750-cb6564151bc0?w=1600",
  "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1600",
  "https://images.unsplash.com/photo-1593640495348-9f86d4e7a719?w=1600",
  "https://images.unsplash.com/photo-1657711772204-c90a591ad1e4?w=1600",
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[600px] flex items-start justify-center pt-20"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Static content over the sliding background */}
      <div className="text-center px-4 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          SMARTFIX
        </h1>
        <p className="text-xl text-gray-900 mb-6 font-semibold">
          Your trusted partner for Computer Sales & Service
        </p>
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300"
        >
          Contact Now
        </a>
      </div>
    </section>
  );
};

export default HeroSlider;

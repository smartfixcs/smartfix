import React, { useState } from "react";


export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    { id: 1, category: "computers", title: "Dell Desktop Computers", desc: "High-performance Dell desktop systems for office and personal use.", img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop", message: "Hello, I am interested in Dell desktop computers." },
    { id: 2, category: "accessories", title: "Keyboard & Mouse", desc: "Wireless and wired keyboards, mice, and combo sets.", img: "https://images.unsplash.com/photo-1626155399627-86488538895d?w=400&h=300&fit=crop", message: "Hello, I am interested in computer accessories." },
    { id: 3, category: "software", title: "Windows Operating System", desc: "Genuine Windows OS licenses and installations.", img: "https://images.unsplash.com/photo-1680128371866-da0e32829a03?w=400&h=300&fit=crop", message: "Hello, I need Windows OS installation." },
    { id: 4, category: "computers", title: "HP Laptops", desc: "Reliable HP laptops for work, study, and personal use.", img: "https://images.unsplash.com/photo-1618410320928-25228d811631?w=400&h=300&fit=crop", message: "Hello, I am interested in HP laptops." },
    { id: 5, category: "accessories", title: "Webcam & Headset", desc: "High-quality webcams and headsets for video conferencing.", img: "https://images.unsplash.com/photo-1724219616919-aab943e7b00d?w=400&h=300&fit=crop", message: "Hello, I want a webcam and headset." },
    { id: 6, category: "software", title: "Antivirus Software", desc: "Protect your system with top antivirus solutions.", img: "https://plus.unsplash.com/premium_photo-1677093906007-9938de41bcde?w=400&h=300&fit=crop", message: "Hello, I need antivirus software." },
    { id: 7, category: "computers", title: "MacBook Pro", desc: "Powerful Apple MacBook Pro for professional and creative work.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop", message: "Hello, I am interested in MacBook Pro." },
    { id: 8, category: "accessories", title: "External Hard Drive", desc: "High-capacity external storage solutions.", img: "https://images.unsplash.com/photo-1756836857570-127b0408b676?w=400&h=300&fit=crop", message: "Hello, I need an external hard drive." },
    { id: 9, category: "software", title: "Microsoft Office Suite", desc: "Word, Excel, PowerPoint, and other Microsoft Office apps.", img: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?w=400&h=300&fit=crop", message: "Hello, I want Microsoft Office." },
    { id: 10, category: "computers", title: "Lenovo ThinkPad", desc: "Durable Lenovo laptops for business and professional use.", img: "https://images.unsplash.com/photo-1694278963820-eaf19e9fb646?w=400&h=300&fit=crop", message: "Hello, I am interested in Lenovo ThinkPad." },
    { id: 11, category: "accessories", title: "Gaming Mouse", desc: "High-precision gaming mice with customizable DPI.", img: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=400&h=300&fit=crop", message: "Hello, I want a gaming mouse." },
    { id: 12, category: "software", title: "Adobe Creative Cloud", desc: "Creative apps for design, video, and photography.", img: "https://images.unsplash.com/photo-1649734926700-8dfb770ffaee?w=400&h=300&fit=crop", message: "Hello, I am interested in Adobe Creative Cloud." },
    
    { id: 13, category: "accessories", title: "Dataship RAM", desc: "Random Access Memory.", img: `${process.env.PUBLIC_URL}/images/RAM.jpg`, message: "Hello, I want a mechanical keyboard." },
    { id: 14, category: "accessories", title: "Cooling Fan", desc: "Cooler Master Cooling Fan.", img: `${process.env.PUBLIC_URL}/images/fan.jpg`, message: "Hello, I want Cooler." },
    { id: 15, category: "accessories", title: "Gaming Case", desc: "Computer Gaming Case", img: `${process.env.PUBLIC_URL}/images/gamingcase.jpg`, message: "Hello, I need a Gaming Case." },
    { id: 16, category: "accessories", title: "Processor", desc: "Intel Core i9 14900K 24 Core LGA 1700 CPU Processor.", img: `${process.env.PUBLIC_URL}/images/processor.jpg`, message: "Hello, I am interested in a processor." },
    { id: 17, category: "accessories", title: "Motherboard", desc: "Intel Motherboard.", img: `${process.env.PUBLIC_URL}/images/MotherBoard.jpg`, message: "Hello, I want Motherboard." },
    { id: 18, category: "accessories", title: "RAM", desc: "Elite Random Access Memory.", img: `${process.env.PUBLIC_URL}/images/EliteRAM.jpg`, message: "Hello, I want a wireless charger." },
    { id: 19, category: "accessories", title: "SD RAM Kit", desc: "High-quality SD RAM Kit.", img: `${process.env.PUBLIC_URL}/images/SDRAMkit.jpg`, message: "Hello, I need RAM." },
    { id: 20, category: "accessories", title: "External Hard Disk", desc: "WD 1TB External Hard Disk.", img: `${process.env.PUBLIC_URL}/images/externalharddisk.jpg`, message: "Hello, I want a Hard disk." },
    { id: 21, category: "accessories", title: "Hard Drive", desc: "Western Digital WD high-quality Hard Drive.", img: `${process.env.PUBLIC_URL}/images/WDInternalHD.jpg`, message: "Hello, I am interested in a Hard Drive." },
  ];
  
  const phoneNumber = "918710031865";

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: "All", value: "all" },
            { label: "Desktops & Laptops", value: "computers" },
            { label: "Accessories", value: "accessories" },
            { label: "Software Products", value: "software" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === tab.value
                  ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter((p) => activeCategory === "all" || p.category === activeCategory)
            .map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-contain bg-gray-100"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{p.desc}</p>
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(p.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block self-start"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

// Mock data for the application
export const mockClients = [
  {
    id: 1,
    name: "MPS Precision",
    description: "Precision engineering solutions",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    testimonial: "Smartfix has been instrumental in maintaining our IT infrastructure with minimal downtime.",
    contactPerson: "Engineering Manager"
  },
  {
    id: 2,
    name: "NSB Academy",
    description: "A leading business school",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=200&h=100&fit=crop",
    testimonial: "Excellent support for our educational technology needs. Very responsive team.",
    contactPerson: "IT Director"
  },
  {
    id: 3,
    name: "Renovus India",
    description: "Renewable energy & engineering firm",
    logo: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=200&h=100&fit=crop",
    testimonial: "Professional service and expertise in handling complex IT requirements.",
    contactPerson: "Operations Head"
  }
];

export const mockTeamMembers = [
  {
    id: 1,
    name: "Abinash Dash",
    position: "Founder & Proprietor",
    description: "7+ years of experience in IT hardware support and business solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    specialties: ["Hardware Troubleshooting", "Network Solutions", "Business IT Consulting"]
  }
];

export const mockContactInfo = {
  address: {
    line1: "No 157, 1st Main, 7th Block, Koramangala",
    line2: "Bangalore, Karnataka – 560095"
  },
  phone: "+91-8710031865",
  email: "abinash5dash@gmail.com",
  gstNumber: "29AOMPD6457J1ZF",
  businessHours: {
    weekdays: "Monday – Saturday: 9:30 AM – 7:00 PM",
    weekend: "Sunday: Closed"
  },
  socialMedia: {
    facebook: "#",
    twitter: "#",
    linkedin: "#"
  }
};

export const mockStats = {
  yearsExperience: "7+",
  happyClients: "200+",
  supportAvailability: "24/7",
  successRate: "99%"
};

export const mockServices = [
  {
    id: 1,
    category: "Hardware Support",
    services: [
      "Desktop & Laptop Repair",
      "Server Maintenance",
      "Hardware Upgrades",
      "Component Replacement"
    ]
  },
  {
    id: 2,
    category: "Network Solutions",
    services: [
      "LAN/WAN Setup",
      "Router Configuration",
      "Network Security",
      "Structured Cabling"
    ]
  },
  {
    id: 3,
    category: "IT Support",
    services: [
      "AMC Contracts",
      "Remote Support",
      "On-site Services",
      "Emergency Response"
    ]
  }
];

export const mockTestimonials = [
  {
    id: 1,
    client: "MPS Precision",
    rating: 5,
    text: "Smartfix Computer Solution has been our trusted IT partner for over 3 years. Their prompt response and expert solutions have kept our operations running smoothly.",
    author: "Rajesh Kumar",
    position: "Engineering Manager"
  },
  {
    id: 2,
    client: "NSB Academy",
    rating: 5,
    text: "Excellent service quality and professional approach. They understand our educational technology needs perfectly.",
    author: "Dr. Priya Sharma",
    position: "IT Director"
  },
  {
    id: 3,
    client: "Renovus India",
    rating: 5,
    text: "Outstanding technical expertise and customer service. Highly recommend for any business IT requirements.",
    author: "Amit Patel",
    position: "Operations Head"
  }
];

// Mock form submission function
export const submitContactForm = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Contact form submitted:', formData);
  return {
    success: true,
    message: "Thank you for your message. We'll get back to you within 24 hours."
  };
};

// Mock service request function
export const requestService = async (serviceData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log('Service request submitted:', serviceData);
  return {
    success: true,
    message: "Service request received. Our team will contact you shortly."
  };
};
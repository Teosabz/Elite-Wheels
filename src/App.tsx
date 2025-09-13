import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedSection } from "./components/FeaturedSection";
import { FilterSection } from "./components/FilterSection";
import { CarCard } from "./components/CarCard";
import { CarModal } from "./components/CarModal";
import { Footer } from "./components/Footer";
import { StatsSection } from "./components/StatsSection";

interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: string;
  location: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  image: string;
  images: string[];
  available: boolean;
  featured: boolean;
  description: string;
  longDescription: string;
  specifications: {
    engine: string;
    horsepower: string;
    acceleration: string;
    topSpeed: string;
    transmission: string;
    drivetrain: string;
    fuelType: string;
    seats: number;
  };
  features: string[];
  reviews: {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  experiences: {
    type: string;
    duration: string;
    price: string;
    description: string;
  }[];
}

const mockCars: Car[] = [
  {
    id: "1",
    name: "Ferrari F8 Tributo",
    brand: "ferrari",
    model: "F8 Tributo",
    year: 2024,
    category: "supercar",
    location: "los-angeles",
    dailyRate: 1250,
    weeklyRate: 7500,
    monthlyRate: 25000,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwZjglMjB0cmlidXRvfGVufDF8fHx8MTc1Nzc5NDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwZjglMjB0cmlidXRvfGVufDF8fHx8MTc1Nzc5NDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwc3VwZXJjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTc3OTQ0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    available: true,
    featured: true,
    description: "Mid-rear-engined supercar with breathtaking performance and Italian craftsmanship",
    longDescription: "The Ferrari F8 Tributo is the latest evolution of Ferrari's mid-rear-engined two-seater berlinetta. It replaces the 488 GTB, with improvements to the engine, aerodynamics, and vehicle dynamics. The F8 Tributo delivers 710 cv and a maximum torque of 770 Nm at 3,250 rpm, guaranteeing powerful acceleration and an intoxicating soundtrack. The F8 represents the highest expression of the Prancing Horse's classic two-seater berlinetta, with a powerful 720 cv engine capable of delivering thrilling performance.",
    specifications: {
      engine: "3.9L Twin-Turbo V8",
      horsepower: "710 hp",
      acceleration: "0-60 mph in 2.9s",
      topSpeed: "211 mph",
      transmission: "7-Speed DCT",
      drivetrain: "RWD",
      fuelType: "Premium Gasoline",
      seats: 2
    },
    features: [
      "Carbon Fiber Racing Seats",
      "Advanced Aerodynamics Package",
      "Ferrari Dynamic Enhancer",
      "Side Slip Control 6.1",
      "F1-Trac Traction Control",
      "Manettino Drive Modes",
      "Carbon Fiber Steering Wheel",
      "Premium Alcantara Interior"
    ],
    reviews: [
      {
        id: "1",
        author: "Marcus Thompson",
        rating: 5,
        comment: "Absolutely incredible machine. The acceleration is mind-blowing and the handling is precise. Best rental experience ever!",
        date: "2024-01-20"
      },
      {
        id: "2",
        author: "Sarah Williams",
        rating: 5,
        comment: "Dream car come true! The sound of that V8 is pure music. Professional service and pristine condition.",
        date: "2024-01-18"
      }
    ],
    experiences: [
      {
        type: "Track Day Experience",
        duration: "4 hours",
        price: "$2,500",
        description: "Professional instruction on a closed circuit with this Ferrari F8 Tributo"
      },
      {
        type: "Scenic Drive Package",
        duration: "Full day",
        price: "$1,800",
        description: "Guided scenic route through Malibu Canyon with professional photography"
      }
    ]
  },
  {
    id: "2",
    name: "Rolls-Royce Phantom",
    brand: "rolls-royce",
    model: "Phantom",
    year: 2024,
    category: "luxury",
    location: "new-york",
    dailyRate: 1500,
    weeklyRate: 9000,
    monthlyRate: 30000,
    image: "https://images.unsplash.com/photo-1631295122296-5a63c8b3b3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwcGhhbnRvbXxlbnwxfHx8fDE3NTc3OTQ0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1631295122296-5a63c8b3b3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwcGhhbnRvbXxlbnwxfHx8fDE3NTc3OTQ0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    available: true,
    featured: true,
    description: "The pinnacle of luxury motoring with unparalleled comfort and craftsmanship",
    longDescription: "The Rolls-Royce Phantom represents the absolute pinnacle of luxury automotive engineering. Every detail has been meticulously crafted to provide the most serene and luxurious transportation experience possible. From the whisper-quiet cabin to the effortless power delivery, the Phantom sets the standard for luxury automobiles worldwide.",
    specifications: {
      engine: "6.75L Twin-Turbo V12",
      horsepower: "563 hp",
      acceleration: "0-60 mph in 5.1s",
      topSpeed: "155 mph (limited)",
      transmission: "8-Speed Automatic",
      drivetrain: "RWD",
      fuelType: "Premium Gasoline",
      seats: 5
    },
    features: [
      "Starlight Headliner",
      "Spirit of Ecstasy Hood Ornament",
      "Lambswool Floor Mats",
      "Picnic Tables with Champagne Cooler",
      "Panoramic Glass Roof",
      "Bespoke Audio System",
      "Massage Seats",
      "Privacy Glass"
    ],
    reviews: [
      {
        id: "3",
        author: "Victoria Sterling",
        rating: 5,
        comment: "Pure luxury perfection. The ride quality is like floating on clouds. Impeccable service from Elite Wheels.",
        date: "2024-01-15"
      }
    ],
    experiences: [
      {
        type: "Chauffeur Service",
        duration: "8 hours",
        price: "$2,200",
        description: "Professional chauffeur service for special events and occasions"
      }
    ]
  },
  {
    id: "3",
    name: "Lamborghini Huracán EVO",
    brand: "lamborghini",
    model: "Huracán EVO",
    year: 2024,
    category: "supercar",
    location: "miami",
    dailyRate: 1100,
    weeklyRate: 6600,
    monthlyRate: 22000,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1ib3JnaGluaSUyMGh1cmFjYW58ZW58MXx8fHwxNzU3Nzk0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1ib3JnaGluaSUyMGh1cmFjYW58ZW58MXx8fHwxNzU3Nzk0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    available: true,
    featured: true,
    description: "Italian masterpiece combining raw power with advanced technology",
    longDescription: "The Lamborghini Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever. Enhanced aerodynamics, rear-wheel steering, and the LDVI (Lamborghini Dinamica Veicolo Integrata) system work together to anticipate the driver's behavior and desires, delivering a super sports car driving experience beyond imagination.",
    specifications: {
      engine: "5.2L Naturally Aspirated V10",
      horsepower: "630 hp",
      acceleration: "0-60 mph in 2.9s",
      topSpeed: "202 mph",
      transmission: "7-Speed DCT",
      drivetrain: "AWD",
      fuelType: "Premium Gasoline",
      seats: 2
    },
    features: [
      "LDVI Vehicle Dynamics",
      "Rear-Wheel Steering",
      "Carbon Fiber Package",
      "Alcantara Sport Seats",
      "Performance Exhaust",
      "Advanced Aerodynamics",
      "Digital Cockpit",
      "Launch Control"
    ],
    reviews: [
      {
        id: "4",
        author: "Alex Rodriguez",
        rating: 5,
        comment: "Pure adrenaline! The sound and acceleration are incredible. Perfect for Miami's South Beach scene.",
        date: "2024-01-12"
      }
    ],
    experiences: [
      {
        type: "Supercar Rally",
        duration: "6 hours",
        price: "$2,800",
        description: "Join other supercar enthusiasts for an exclusive driving experience"
      }
    ]
  },
  {
    id: "4",
    name: "McLaren 720S",
    brand: "mclaren",
    model: "720S",
    year: 2024,
    category: "supercar",
    location: "los-angeles",
    dailyRate: 1300,
    weeklyRate: 7800,
    monthlyRate: 26000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2xhcmVuJTIwNzIwc3xlbnwxfHx8fDE3NTc3OTQ0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2xhcmVuJTIwNzIwc3xlbnwxfHx8fDE3NTc3OTQ0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    available: true,
    featured: false,
    description: "British engineering excellence with Formula 1 inspired technology",
    longDescription: "The McLaren 720S combines extreme performance with everyday usability. Born from McLaren's racing heritage, it features a lightweight carbon fiber chassis, advanced aerodynamics, and a twin-turbo V8 engine that delivers extraordinary performance while maintaining surprising comfort for daily driving.",
    specifications: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "710 hp",
      acceleration: "0-60 mph in 2.8s",
      topSpeed: "212 mph",
      transmission: "7-Speed DCT",
      drivetrain: "RWD",
      fuelType: "Premium Gasoline",
      seats: 2
    },
    features: [
      "Carbon Fiber MonoCell Chassis",
      "Adaptive Suspension",
      "Active Aerodynamics",
      "Butterfly Doors",
      "Track Telemetry",
      "Variable Drift Control",
      "Premium Audio System",
      "Carbon Fiber Interior Trim"
    ],
    reviews: [
      {
        id: "5",
        author: "James Mitchell",
        rating: 5,
        comment: "Phenomenal engineering. The balance between performance and comfort is perfect.",
        date: "2024-01-10"
      }
    ],
    experiences: [
      {
        type: "Performance Driving Course",
        duration: "Full day",
        price: "$3,200",
        description: "Learn advanced driving techniques with professional instructors"
      }
    ]
  },
  {
    id: "5",
    name: "Bentley Continental GT",
    brand: "bentley",
    model: "Continental GT",
    year: 2024,
    category: "luxury",
    location: "new-york",
    dailyRate: 800,
    weeklyRate: 4800,
    monthlyRate: 16000,
    image: "https://images.unsplash.com/photo-1606787366850-de6ba128a9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW50bGV5JTIwY29udGluZW50YWwlMjBndHxlbnwxfHx8fDE3NTc3OTQ0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1606787366850-de6ba128a9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW50bGV5JTIwY29udGluZW50YWwlMjBndHxlbnwxfHx8fDE3NTc3OTQ0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    available: true,
    featured: false,
    description: "Grand touring excellence with handcrafted luxury and powerful performance",
    longDescription: "The Bentley Continental GT represents the perfect fusion of luxury and performance. Every surface, every material, and every detail has been carefully considered and expertly crafted. The result is a grand tourer that delivers both thrilling performance and supreme comfort for long-distance journeys.",
    specifications: {
      engine: "6.0L Twin-Turbo W12",
      horsepower: "626 hp",
      acceleration: "0-60 mph in 3.6s",
      topSpeed: "207 mph",
      transmission: "8-Speed DCT",
      drivetrain: "AWD",
      fuelType: "Premium Gasoline",
      seats: 4
    },
    features: [
      "Diamond Quilted Leather",
      "Rotating Display",
      "Naim Audio System",
      "Heated and Ventilated Seats",
      "Panoramic Sunroof",
      "Adaptive Cruise Control",
      "Handcrafted Wood Veneer",
      "Champagne Cooler"
    ],
    reviews: [
      {
        id: "6",
        author: "Diana Foster",
        rating: 5,
        comment: "Elegant and powerful. Perfect for a luxurious weekend getaway. The interior is absolutely stunning.",
        date: "2024-01-08"
      }
    ],
    experiences: [
      {
        type: "Luxury Road Trip",
        duration: "3 days",
        price: "$3,500",
        description: "Curated luxury road trip with premium accommodations"
      }
    ]
  },
  {
    id: "6",
    name: "Porsche 911 GT3",
    brand: "porsche",
    model: "911 GT3",
    year: 2024,
    category: "sports",
    location: "miami",
    dailyRate: 950,
    weeklyRate: 5700,
    monthlyRate: 19000,
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwOTExJTIwZ3QzfGVufDF8fHx8MTc1Nzc5NDQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwOTExJTIwZ3QzfGVufDF8fHx8MTc1Nzc5NDQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    available: true,
    featured: false,
    description: "Track-focused precision with naturally aspirated excellence",
    longDescription: "The Porsche 911 GT3 is the purest expression of racing DNA in a road-legal sports car. With its naturally aspirated flat-six engine, lightweight construction, and track-tuned chassis, the GT3 delivers an uncompromising driving experience that connects driver to machine like no other.",
    specifications: {
      engine: "4.0L Naturally Aspirated Flat-6",
      horsepower: "502 hp",
      acceleration: "0-60 mph in 3.2s",
      topSpeed: "197 mph",
      transmission: "7-Speed PDK or 6-Speed Manual",
      drivetrain: "RWD",
      fuelType: "Premium Gasoline",
      seats: 2
    },
    features: [
      "Naturally Aspirated Engine",
      "Rear-Axle Steering",
      "Track-Tuned Suspension",
      "Carbon Fiber Aero Package",
      "Sport Chrono Package",
      "PASM Adaptive Dampers",
      "Alcantara Interior",
      "Roll Cage"
    ],
    reviews: [
      {
        id: "7",
        author: "Carlos Mendez",
        rating: 5,
        comment: "The ultimate driver's car. Nothing beats the sound of that naturally aspirated flat-six at 9,000 RPM.",
        date: "2024-01-05"
      }
    ],
    experiences: [
      {
        type: "Track Day Package",
        duration: "Full day",
        price: "$2,200",
        description: "Professional track day experience with instruction and timing"
      }
    ]
  },
  {
    id: "7",
    name: "Aston Martin DB11",
    brand: "aston-martin",
    model: "DB11",
    year: 2024,
    category: "luxury",
    location: "los-angeles",
    dailyRate: 750,
    weeklyRate: 4500,
    monthlyRate: 15000,
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3RvbiUyMG1hcnRpbiUyMGRiMTF8ZW58MXx8fHwxNzU3Nzk0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3RvbiUyMG1hcnRpbiUyMGRiMTF8ZW58MXx8fHwxNzU3Nzk0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    available: true,
    featured: false,
    description: "British elegance meets modern performance in this grand tourer masterpiece",
    longDescription: "The Aston Martin DB11 embodies the spirit of British luxury and performance. With its distinctive design, handcrafted interior, and powerful V8 engine, the DB11 offers a perfect balance of elegance and excitement. Every detail reflects Aston Martin's commitment to creating beautiful, fast cars.",
    specifications: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "528 hp",
      acceleration: "0-60 mph in 3.9s",
      topSpeed: "187 mph",
      transmission: "8-Speed Automatic",
      drivetrain: "RWD",
      fuelType: "Premium Gasoline",
      seats: 4
    },
    features: [
      "Handcrafted Interior",
      "Bang & Olufsen Audio",
      "Adaptive Dampers",
      "Carbon Fiber Trim",
      "Heated/Cooled Seats",
      "Panoramic Glass Roof",
      "Touch Pro Infotainment",
      "Premium Leather Upholstery"
    ],
    reviews: [
      {
        id: "8",
        author: "Rebecca Stone",
        rating: 5,
        comment: "Absolutely gorgeous car with incredible style. The perfect blend of luxury and performance.",
        date: "2024-01-03"
      }
    ],
    experiences: [
      {
        type: "Coastal Drive Experience",
        duration: "Half day",
        price: "$1,200",
        description: "Scenic Pacific Coast Highway drive with professional photography"
      }
    ]
  },
  {
    id: "8",
    name: "Mercedes-AMG GT",
    brand: "mercedes",
    model: "AMG GT",
    year: 2024,
    category: "sports",
    location: "new-york",
    dailyRate: 650,
    weeklyRate: 3900,
    monthlyRate: 13000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGFtZyUyMGd0fGVufDF8fHx8MTc1Nzc5NDQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGFtZyUyMGd0fGVufDF8fHx8MTc1Nzc5NDQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    available: true,
    featured: false,
    description: "German engineering prowess with AMG performance heritage",
    longDescription: "The Mercedes-AMG GT represents the pinnacle of Mercedes-Benz performance engineering. With its handcrafted AMG V8 engine, sophisticated chassis dynamics, and luxurious appointments, the AMG GT delivers a driving experience that combines track-ready performance with everyday usability.",
    specifications: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "469 hp",
      acceleration: "0-60 mph in 3.7s",
      topSpeed: "189 mph",
      transmission: "7-Speed DCT",
      drivetrain: "RWD",
      fuelType: "Premium Gasoline",
      seats: 2
    },
    features: [
      "AMG Performance Exhaust",
      "Adaptive Suspension",
      "Dynamic Select Drive Modes",
      "Race-Inspired Interior",
      "Brembo Brakes",
      "AMG Traction Control",
      "Performance Steering Wheel",
      "Carbon Fiber Accents"
    ],
    reviews: [
      {
        id: "9",
        author: "Thomas Wagner",
        rating: 4,
        comment: "Fantastic performance and luxury combined. The AMG exhaust note is incredible.",
        date: "2024-01-01"
      }
    ],
    experiences: [
      {
        type: "Performance Driving",
        duration: "4 hours",
        price: "$1,800",
        description: "Professional driving instruction focusing on performance techniques"
      }
    ]
  }
];

export default function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [maxDailyRate, setMaxDailyRate] = useState(2000);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("all");
    setSelectedCategory("all");
    setSelectedLocation("all");
    setMaxDailyRate(2000);
  };

  const filteredCars = mockCars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "all" || car.brand === selectedBrand;
    const matchesCategory = selectedCategory === "all" || car.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || car.location === selectedLocation;
    const matchesPrice = car.dailyRate <= maxDailyRate;

    return matchesSearch && matchesBrand && matchesCategory && matchesLocation && matchesPrice && car.available;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedSection 
        cars={mockCars} 
        onCarClick={handleCarClick}
      />
      
      <StatsSection />
      
      <FilterSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        maxDailyRate={maxDailyRate}
        onPriceChange={setMaxDailyRate}
        onClearFilters={clearFilters}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Elite Fleet</h2>
            <p className="text-lg text-muted-foreground">
              Discover {filteredCars.length} exceptional luxury vehicles available for rental
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                {...car}
                onClick={() => handleCarClick(car)}
              />
            ))}
          </div>
          
          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-6">
                No vehicles match your current filters
              </p>
              <button
                onClick={clearFilters}
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CarModal
        car={selectedCar}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
      
      <Footer />
    </div>
  );
}
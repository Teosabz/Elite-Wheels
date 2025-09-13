import { CarCard } from "./CarCard";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Calendar, Award, Users, Clock, Car, Trophy, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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

interface FeaturedSectionProps {
  cars: Car[];
  onCarClick: (car: Car) => void;
}

export function FeaturedSection({ cars, onCarClick }: FeaturedSectionProps) {
  const featuredCars = cars.filter(car => car.featured);
  
  const premiumExperiences = [
    {
      id: "1",
      title: "Supercar Track Day Experience",
      date: "February 15, 2024",
      time: "9:00 AM",
      venue: "Laguna Seca Raceway",
      price: "$2,500",
      description: "Experience the thrill of driving a Ferrari F8 Tributo on a professional racing circuit with expert instruction.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFjayUyMGRheSUyMHJhY2luZyUyMGV4cGVyaWVuY2V8ZW58MXx8fHwxNzU3Nzk0OTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spots: "Only 8 spots available"
    },
    {
      id: "2", 
      title: "Luxury Road Trip Weekend",
      date: "February 22, 2024",
      time: "10:00 AM",
      venue: "Napa Valley",
      price: "$3,800",
      description: "Three-day luxury road trip through California wine country in a Bentley Continental GT with premium accommodations.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByb2FkJTIwdHJpcCUyMHNjZW5pY3xlbnwxfHx8fDE3NTc3OTQ5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spots: "5 packages remaining"
    }
  ];

  const brandSpotlight = {
    name: "Ferrari",
    model: "F8 Tributo",
    achievement: "Italian Engineering Excellence",
    quote: "We are the competition. When you buy a Ferrari, you buy a dream. Our cars are the culmination of racing heritage and technological innovation.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwZjglMjB0cmlidXRvfGVufDF8fHx8MTc1Nzc5NDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Featured This Week</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked by our automotive experts, these exceptional vehicles offer 
            unparalleled luxury and performance experiences
          </p>
        </div>
        
        {/* Featured Cars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredCars.map((car) => (
            <CarCard
              key={car.id}
              {...car}
              onClick={() => onCarClick(car)}
            />
          ))}
        </div>

        {/* Brand Spotlight */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl text-center mb-8">Brand Spotlight</h3>
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-red-50 to-yellow-50 border-red-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <ImageWithFallback
                    src={brandSpotlight.image}
                    alt={brandSpotlight.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="h-5 w-5 text-red-600" />
                    <Badge variant="outline" className="border-red-600 text-red-700">Brand Spotlight</Badge>
                  </div>
                  <h4 className="text-2xl mb-2">{brandSpotlight.name} {brandSpotlight.model}</h4>
                  <p className="text-red-700 mb-3">{brandSpotlight.achievement}</p>
                  <blockquote className="text-lg italic text-gray-700 mb-4 border-l-4 border-red-400 pl-4">
                    "{brandSpotlight.quote}"
                  </blockquote>
                  <Button 
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white"
                    onClick={() => onCarClick(cars.find(c => c.brand === 'ferrari')!)}
                  >
                    View Ferrari Fleet
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Premium Experiences */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl text-center mb-8">Premium Driving Experiences</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {premiumExperiences.map((experience) => (
              <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 hover:bg-red-700">
                      <Calendar className="h-3 w-3 mr-1" />
                      Limited Spots
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl mb-2">{experience.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {experience.time}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-lg">{experience.price}</p>
                      <p className="text-sm text-red-600">{experience.spots}</p>
                    </div>
                    <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black">
                      Book Experience
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Stats */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl mb-8">This Week's Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-3">
                <Car className="h-8 w-8 text-yellow-600" />
              </div>
              <p className="text-2xl mb-1">47</p>
              <p className="text-sm text-muted-foreground">Luxury Cars Available</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-2xl mb-1">892</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-3">
                <Trophy className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-2xl mb-1">24</p>
              <p className="text-sm text-muted-foreground">Premium Experiences</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-3">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-2xl mb-1">3</p>
              <p className="text-sm text-muted-foreground">City Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
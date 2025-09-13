import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Star, MapPin, Calendar, Zap, Users, Gauge, Fuel, Car, Settings } from "lucide-react";
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

interface CarModalProps {
  car: Car | null;
  open: boolean;
  onClose: () => void;
}

export function CarModal({ car, open, onClose }: CarModalProps) {
  if (!car) return null;

  const formatLocation = (loc: string) => {
    return loc.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formatCategory = (cat: string) => {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{car.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {car.featured && (
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">
                  Featured
                </Badge>
              )}
              <Badge variant={car.available ? "secondary" : "destructive"}>
                {car.available ? "Available" : "Unavailable"}
              </Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Vehicle Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="flex items-center">
                    <Car className="w-4 h-4 mr-2" />
                    Brand
                  </span>
                  <span className="font-medium">{car.brand.charAt(0).toUpperCase() + car.brand.slice(1).replace('-', ' ')}</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Year
                  </span>
                  <span className="font-medium">{car.year}</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Location
                  </span>
                  <span className="font-medium">{formatLocation(car.location)}</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Category</span>
                  <Badge variant="outline">{formatCategory(car.category)}</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Rental Rates</h3>
              <div className="space-y-3">
                <div className="p-4 border-2 border-yellow-200 bg-yellow-50 rounded-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-700">${car.dailyRate.toLocaleString()}</p>
                    <p className="text-sm text-yellow-600">per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <p className="font-medium">${car.weeklyRate.toLocaleString()}</p>
                    <p className="text-muted-foreground">per week</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <p className="font-medium">${car.monthlyRate.toLocaleString()}</p>
                    <p className="text-muted-foreground">per month</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4">
                <Button className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  Book Now
                </Button>
                <Button variant="outline" className="border-2 border-yellow-600/50 text-yellow-700 hover:bg-yellow-50 hover:border-yellow-600 font-medium shadow-md transform hover:scale-105 transition-all duration-200">
                  ♡ Save
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-muted-foreground">{car.longDescription}</p>
          </div>
          
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="experiences">Experiences</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span className="flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Engine
                    </span>
                    <span className="font-medium">{car.specifications.engine}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Horsepower
                    </span>
                    <span className="font-medium">{car.specifications.horsepower}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span className="flex items-center">
                      <Gauge className="w-4 h-4 mr-2" />
                      0-60 mph
                    </span>
                    <span className="font-medium">{car.specifications.acceleration}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span>Top Speed</span>
                    <span className="font-medium">{car.specifications.topSpeed}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span>Transmission</span>
                    <span className="font-medium">{car.specifications.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span>Drivetrain</span>
                    <span className="font-medium">{car.specifications.drivetrain}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span className="flex items-center">
                      <Fuel className="w-4 h-4 mr-2" />
                      Fuel Type
                    </span>
                    <span className="font-medium">{car.specifications.fuelType}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Seats
                    </span>
                    <span className="font-medium">{car.specifications.seats}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 border rounded">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="experiences" className="space-y-4">
              {car.experiences.map((experience, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-medium">{experience.type}</h5>
                      <p className="text-sm text-muted-foreground">{experience.duration}</p>
                    </div>
                    <span className="font-bold text-lg">{experience.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{experience.description}</p>
                  <Button size="sm" className="mt-3 bg-yellow-600 hover:bg-yellow-700 text-white">
                    Book Experience
                  </Button>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              {car.reviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-medium">{review.author}</h5>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm">{review.comment}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
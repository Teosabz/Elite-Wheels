import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Star, MapPin, Clock, Phone, Globe, DollarSign } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Restaurant {
  id: string;
  name: string;
  chef: string;
  cuisine: string;
  location: string;
  fullAddress: string;
  phone: string;
  website: string;
  rating: number;
  priceRange: string;
  image: string;
  michelinStars?: number;
  openTable?: boolean;
  description: string;
  longDescription: string;
  menu: {
    category: string;
    items: { name: string; description: string; price: string }[];
  }[];
  reviews: {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

interface RestaurantModalProps {
  restaurant: Restaurant | null;
  open: boolean;
  onClose: () => void;
}

export function RestaurantModal({ restaurant, open, onClose }: RestaurantModalProps) {
  if (!restaurant) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{restaurant.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {restaurant.michelinStars && (
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">
                  {restaurant.michelinStars} ⭐ Michelin
                </Badge>
              )}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Restaurant Details</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {restaurant.fullAddress}
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {restaurant.phone}
                </p>
                <p className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  {restaurant.website}
                </p>
                <p className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {restaurant.priceRange}
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Chef & Cuisine</h3>
              <p className="text-sm mb-2">Chef {restaurant.chef}</p>
              <Badge variant="outline" className="mb-3">{restaurant.cuisine}</Badge>
              <div className="flex items-center mb-3">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500 mr-1" />
                <span className="font-medium">{restaurant.rating}/5</span>
              </div>
              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  Reserve Table
                </Button>
                <Button variant="outline" className="border-2 border-yellow-600/50 text-yellow-700 hover:bg-yellow-50 hover:border-yellow-600 font-medium shadow-md transform hover:scale-105 transition-all duration-200">
                  ♡ Save
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-muted-foreground">{restaurant.longDescription}</p>
          </div>
          
          <Tabs defaultValue="menu" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="menu">Menu</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menu" className="space-y-6">
              {restaurant.menu.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-3">{section.category}</h4>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b pb-2 last:border-b-0">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h5 className="font-medium">{item.name}</h5>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                          <span className="font-medium ml-4">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              {restaurant.reviews.map((review) => (
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
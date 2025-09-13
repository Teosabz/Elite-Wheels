import { Star, MapPin, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RestaurantCardProps {
  id: string;
  name: string;
  chef: string;
  cuisine: string;
  location: string;
  rating: number;
  priceRange: string;
  image: string;
  michelinStars?: number;
  openTable?: boolean;
  description: string;
  onClick: () => void;
}

export function RestaurantCard({
  name,
  chef,
  cuisine,
  location,
  rating,
  priceRange,
  image,
  michelinStars,
  openTable,
  description,
  onClick,
}: RestaurantCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group" onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {michelinStars && (
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">
              {michelinStars} ⭐ Michelin
            </Badge>
          )}
          {openTable && (
            <Badge variant="secondary">
              <Clock className="w-3 h-3 mr-1" />
              Open
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-2">Chef {chef}</p>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </span>
          <span className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            {priceRange}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="border-yellow-600/30 text-yellow-700 bg-yellow-50 hover:bg-yellow-100">
            {cuisine.charAt(0).toUpperCase() + cuisine.slice(1).replace("-", " ")}
          </Badge>
          <Button size="sm" className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
            Explore Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
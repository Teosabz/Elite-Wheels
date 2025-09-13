import { Star, MapPin, Calendar, DollarSign, Zap, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CarCardProps {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: string;
  location: string;
  dailyRate: number;
  image: string;
  available: boolean;
  featured: boolean;
  description: string;
  specifications: {
    engine: string;
    horsepower: string;
    acceleration: string;
    topSpeed: string;
    seats: number;
  };
  onClick: () => void;
}

export function CarCard({
  name,
  brand,
  year,
  category,
  location,
  dailyRate,
  image,
  available,
  featured,
  description,
  specifications,
  onClick,
}: CarCardProps) {
  const formatLocation = (loc: string) => {
    return loc.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formatCategory = (cat: string) => {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group" onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {featured && (
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">
              Featured
            </Badge>
          )}
          <Badge variant={available ? "secondary" : "destructive"}>
            {available ? "Available" : "Unavailable"}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <Badge variant="outline" className="border-blue-600/30 text-blue-700 bg-blue-50">
            {year}
          </Badge>
        </div>
        
        <p className="text-muted-foreground mb-2">{brand.charAt(0).toUpperCase() + brand.slice(1).replace('-', ' ')}</p>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
          <span className="flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            {specifications.horsepower}
          </span>
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {specifications.acceleration}
          </span>
          <span className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            {specifications.seats} seats
          </span>
          <span className="flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {formatLocation(location)}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Badge variant="outline" className="border-yellow-600/30 text-yellow-700 bg-yellow-50 hover:bg-yellow-100">
              {formatCategory(category)}
            </Badge>
            <p className="text-lg font-bold mt-1">
              ${dailyRate.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/day</span>
            </p>
          </div>
          <Button size="sm" className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
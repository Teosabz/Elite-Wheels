import { Search, Heart, User, MapPin, Car } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-yellow-600" />
              <h1 className="text-2xl font-bold text-primary">Elite Wheels</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-yellow-600 transition-colors">
                Fleet
              </a>
              <a href="#" className="text-foreground hover:text-yellow-600 transition-colors">
                Experiences
              </a>
              <a href="#" className="text-foreground hover:text-yellow-600 transition-colors">
                Locations
              </a>
              <a href="#" className="text-foreground hover:text-yellow-600 transition-colors">
                About
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search luxury cars..."
                className="pl-10 w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-200">
              <MapPin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-200">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-200">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
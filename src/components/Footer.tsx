import { Separator } from "./ui/separator";
import { Car } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-yellow-400">Elite Wheels</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your gateway to the world's most exclusive automotive experiences. 
              Rent luxury supercars, exotic vehicles, and premium driving experiences from the finest brands.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Fleet</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Supercars</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Luxury Sedans</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Sports Cars</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Exotic Vehicles</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Classic Cars</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Daily Rentals</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Chauffeur Service</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Track Experiences</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Delivery Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Locations</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Elite Wheels. Elevating automotive dreams to elite reality.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Rental Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
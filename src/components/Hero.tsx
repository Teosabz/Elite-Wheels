import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXBlcmNhciUyMGdhcmFnZXxlbnwxfHx8fDE3NTc3OTQ3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury supercar collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h2 className="text-5xl md:text-6xl mb-6">
          Experience Ultimate
          <br />
          <span className="text-yellow-300">Automotive Luxury</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Your gateway to the world's finest supercars, exotic vehicles, 
          and exclusive driving experiences from Ferrari, Lamborghini, Rolls-Royce and more
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore Elite Fleet
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-10 py-4 text-white border-2 border-white/80 hover:bg-white hover:text-black backdrop-blur-sm font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent">
            Premium Experiences
          </Button>
        </div>
      </div>
    </section>
  );
}
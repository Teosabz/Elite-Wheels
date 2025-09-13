import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";
import { X, Filter, DollarSign } from "lucide-react";

interface FilterSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedBrand: string;
  onBrandChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  maxDailyRate: number;
  onPriceChange: (value: number) => void;
  onClearFilters: () => void;
}

export function FilterSection({
  searchTerm,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange,
  maxDailyRate,
  onPriceChange,
  onClearFilters,
}: FilterSectionProps) {
  const hasActiveFilters = searchTerm || selectedBrand !== "all" || selectedCategory !== "all" || selectedLocation !== "all" || maxDailyRate < 2000;

  return (
    <section className="py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium">Filters:</span>
          </div>
          
          <div className="flex flex-wrap gap-4 flex-1">
            <Input
              placeholder="Search luxury cars..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="max-w-xs"
            />
            
            <Select value={selectedBrand} onValueChange={onBrandChange}>
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                <SelectItem value="ferrari">Ferrari</SelectItem>
                <SelectItem value="lamborghini">Lamborghini</SelectItem>
                <SelectItem value="rolls-royce">Rolls-Royce</SelectItem>
                <SelectItem value="bentley">Bentley</SelectItem>
                <SelectItem value="mclaren">McLaren</SelectItem>
                <SelectItem value="porsche">Porsche</SelectItem>
                <SelectItem value="aston-martin">Aston Martin</SelectItem>
                <SelectItem value="mercedes">Mercedes-AMG</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="supercar">Supercar</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="exotic">Exotic</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedLocation} onValueChange={onLocationChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="miami">Miami</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
                <SelectItem value="london">London</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex items-center gap-3 min-w-[200px]">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <div className="flex-1">
                <label className="text-sm text-muted-foreground">Max Daily Rate: ${maxDailyRate.toLocaleString()}</label>
                <Slider
                  value={[maxDailyRate]}
                  onValueChange={(value) => onPriceChange(value[0])}
                  max={2000}
                  min={500}
                  step={50}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
          
          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-red-600 hover:bg-red-50 font-medium transition-all duration-200"
            >
              <X className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>
        
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-4">
            {searchTerm && (
              <Badge variant="secondary">
                Search: "{searchTerm}"
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => onSearchChange("")}
                />
              </Badge>
            )}
            {selectedBrand !== "all" && (
              <Badge variant="secondary">
                {selectedBrand.charAt(0).toUpperCase() + selectedBrand.slice(1).replace("-", " ")}
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => onBrandChange("all")}
                />
              </Badge>
            )}
            {selectedCategory !== "all" && (
              <Badge variant="secondary">
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => onCategoryChange("all")}
                />
              </Badge>
            )}
            {selectedLocation !== "all" && (
              <Badge variant="secondary">
                {selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1).replace("-", " ")}
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => onLocationChange("all")}
                />
              </Badge>
            )}
            {maxDailyRate < 2000 && (
              <Badge variant="secondary">
                Max: ${maxDailyRate.toLocaleString()}/day
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => onPriceChange(2000)}
                />
              </Badge>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
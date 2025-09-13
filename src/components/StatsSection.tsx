export function StatsSection() {
  const stats = [
    {
      number: "200+",
      label: "Luxury Vehicles",
      description: "Premium and exotic car collection"
    },
    {
      number: "15+",
      label: "Elite Brands",
      description: "Ferrari, Lamborghini, Rolls-Royce & more"
    },
    {
      number: "5,000+",
      label: "Happy Customers",
      description: "Satisfied luxury car enthusiasts"
    },
    {
      number: "3",
      label: "Prime Locations",
      description: "Los Angeles, New York, Miami"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Elevating Automotive Dreams to 
            <span className="text-yellow-400 block mt-2">Elite Reality</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From legendary supercars to exclusive luxury vehicles, 
            we provide access to the world's most prestigious automotive experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-300 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-white font-medium">5.0 Star Rating</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="text-white font-medium">Premium Service</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚗</span>
              <span className="text-white font-medium">Elite Fleet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
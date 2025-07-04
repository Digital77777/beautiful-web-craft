
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop" alt="Lounge Interior" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-orange-600/30 via-red-600/20 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/30 via-cyan-600/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/34a89008-c864-4b5f-a3f3-a4a19a0b4171.png" 
              alt="The Retrouvaille Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-light tracking-wider text-white mb-2">
            The Retrouvaille
          </h1>
          <p className="text-sm tracking-[0.3em] text-gray-300 uppercase">
            Restaurant - Bar
          </p>
        </div>

        {/* Main Title */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
              FIRE
            </span>
            <span className="text-white mx-4">&</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              ICE
            </span>
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            LADIES NIGHT
          </h3>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            EVERY THURSDAY
          </p>
        </div>

        {/* Event Details */}
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-yellow-400 font-semibold mb-2">
            FREE DRINK BEFORE 9H30PM
          </p>
          <p className="text-md text-gray-300 mb-6">
            FOR THE FIRST 20 LADIES
          </p>
          
          <div className="text-gray-300 mb-6">
            <p className="font-semibold text-white mb-2">MUSIC GENRES:</p>
            <p>AFROBEATS - AMAPIANO - HIP-HOP - R&B - HOUSE</p>
          </div>

          <p className="text-xl font-bold">
            <span className="text-orange-400">DJ MAGIC</span>
            <span className="text-white"> & </span>
            <span className="text-blue-400">SURPRISES</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 text-lg">
            <Calendar className="mr-2 w-5 h-5" />
            Book Your Table
          </Button>
          <Button variant="outline" className="border-white/30 text-white px-8 py-3 text-lg bg-blue-500 hover:bg-blue-400">
            <MapPin className="mr-2 w-5 h-5" />
            View Location
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white/50 text-2xl">🔥🔥🔥</div>
      </div>
    </section>
  );
};

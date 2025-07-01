
import { Card, CardContent } from "@/components/ui/card";

export const ImageGallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      alt: "Luxurious lounge seating area with comfortable couches",
      title: "Comfortable Lounge"
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
      alt: "Premium drinks and cocktails served",
      title: "Premium Beverages"
    },
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      alt: "Cozy and relaxing atmosphere",
      title: "Relaxing Ambiance"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      alt: "Scenic views from the lounge",
      title: "Beautiful Views"
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      alt: "Evening atmosphere with ambient lighting",
      title: "Evening Vibes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Experience </span>
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              The Retrouvaille
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step into our world of luxury, comfort, and unforgettable moments. Every corner tells a story of elegance and sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-6">
            Discover the perfect blend of comfort, style, and exceptional service
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Premium Lounge</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Exclusive Atmosphere</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Memorable Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

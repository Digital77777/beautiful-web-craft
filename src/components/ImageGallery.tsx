
import { Card, CardContent } from "@/components/ui/card";

export const ImageGallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/64f839c1-a721-420e-a497-f8a4cd093716.png",
      alt: "Luxurious lounge seating with purple ambient lighting and shisha setup",
      title: "VIP Lounge Experience"
    },
    {
      src: "/lovable-uploads/e262150f-6810-4f9f-b1e8-764019c33b8b.png",
      alt: "Elegant seating area with premium lighting and comfortable atmosphere",
      title: "Premium Seating"
    },
    {
      src: "/lovable-uploads/ff7bb46a-3682-4493-9e6f-9dd96c7ee1f4.png",
      alt: "R Palace neon sign with sophisticated lounge interior and shisha table",
      title: "R Palace Ambiance"
    },
    {
      src: "/lovable-uploads/f9447446-c90a-40e3-af1a-b6d4ade4a2c8.png",
      alt: "Premium bar display with extensive collection of spirits and wines",
      title: "Premium Bar Selection"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
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

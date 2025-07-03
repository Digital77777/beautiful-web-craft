import { MapPin, Phone, Clock } from "lucide-react";
import Map from "./Map";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            Visit Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the magic of fire and ice at The Retrouvaille. We're located in the heart of Observatory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">1 Cranko Road, Observatory</p>
                  <p className="text-gray-300">Opposite KFC Observatory</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <Phone className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
                  <p className="text-gray-300">+27 735131329</p>
                  <p className="text-gray-300">+27 834709618</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Monday - Wednesday: 5:00 PM - 12:00 AM</p>
                    <p>Thursday: 5:00 PM - 2:00 AM (Ladies Night)</p>
                    <p>Friday - Saturday: 5:00 PM - 2:00 AM</p>
                    <p>Sunday: 3:00 PM - 12:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl p-4 backdrop-blur-md border border-white/10">
            <Map />
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-16 text-center">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-6">
              Follow us for the latest events, special offers, and culinary adventures.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">📱</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">📧</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">📷</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

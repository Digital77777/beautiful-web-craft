
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

export const EventsSection = () => {
  const events = [
    {
      title: "Fire & Ice Ladies Night",
      day: "Thursday",
      time: "7:00 PM - Late",
      description: "Free drinks for the first 20 ladies before 9:30 PM",
      highlight: "DJ Magic & Surprises",
      category: "weekly"
    },
    {
      title: "Weekend Fire Show",
      day: "Saturday",
      time: "9:00 PM",
      description: "Live cooking demonstrations with our master chefs",
      highlight: "Interactive Experience",
      category: "weekend"
    },
    {
      title: "Ice Cocktail Masterclass",
      day: "Sunday",
      time: "3:00 PM",
      description: "Learn to craft the perfect frozen cocktails",
      highlight: "Hands-on Learning",
      category: "weekend"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for unforgettable experiences that blend culinary excellence with entertainment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-orange-400/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    event.category === 'weekly' 
                      ? 'bg-orange-500/20 text-orange-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {event.category === 'weekly' ? 'Weekly Event' : 'Weekend Special'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 text-orange-400" />
                    <span className="text-sm">Every {event.day}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {event.description}
                </p>

                <div className="border-t border-white/10 pt-3">
                  <p className="text-sm font-semibold text-white">
                    <Users className="w-4 h-4 inline mr-1 text-orange-400" />
                    {event.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Reserve Your Experience
            </h3>
            <p className="text-gray-300 mb-6">
              Book your table for any of our special events and create memories that last forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-white">
                <p className="font-semibold">Call us: +27 735131329</p>
                <p className="text-gray-400">or +27 834709618</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

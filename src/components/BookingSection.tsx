
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";

export const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Here you would typically send the booking data to your backend
    alert('Booking request submitted! We will contact you to confirm your reservation.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Book Your </span>
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Table
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve your spot for an unforgettable Fire & Ice experience at The Retrouvaille
          </p>
        </div>

        <Card className="bg-black/40 backdrop-blur-md border border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Make a Reservation</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-white mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-400"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num} className="bg-gray-800">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-white mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-400"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-white mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-400"
                  >
                    <option value="" className="bg-gray-800">Select a time</option>
                    <option value="18:00" className="bg-gray-800">6:00 PM</option>
                    <option value="18:30" className="bg-gray-800">6:30 PM</option>
                    <option value="19:00" className="bg-gray-800">7:00 PM</option>
                    <option value="19:30" className="bg-gray-800">7:30 PM</option>
                    <option value="20:00" className="bg-gray-800">8:00 PM</option>
                    <option value="20:30" className="bg-gray-800">8:30 PM</option>
                    <option value="21:00" className="bg-gray-800">9:00 PM</option>
                    <option value="21:30" className="bg-gray-800">9:30 PM</option>
                    <option value="22:00" className="bg-gray-800">10:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
                  placeholder="Any special requests or dietary requirements?"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white py-3 text-lg"
              >
                Submit Reservation Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

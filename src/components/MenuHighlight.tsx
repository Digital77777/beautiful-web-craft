import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const MenuHighlight = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    // Food Items
    {
      name: "Barbecue Pork Meat & Sauce Tomato",
      description: "Choose side: Fry chips/Rice/Pap",
      price: "R120",
      category: "fire",
      image: "🥩"
    },
    {
      name: "Shisha Nyama Platter",
      description: "Choose side: Chips/Rice/Pap, Pork 2portion, Beef 2portion, Sausage 2 portion & 2Wings",
      price: "R300",
      category: "fire",
      image: "🍖"
    },
    {
      name: "Beef Stew with Chef's Secret Sauce/Spinach",
      description: "Choose Side: Fry Chips/Rice/Pap",
      price: "R100",
      category: "fire",
      image: "🍲"
    },
    {
      name: "4 Barbecue Sexy Wings & Fry Chips",
      description: "Delicious spicy wings with crispy fries",
      price: "R100",
      category: "fire",
      image: "🍗"
    },
    {
      name: "Barbecue Full Chicken & Half Chicken",
      description: "Side Fry Chips/Rice/Pap",
      price: "R300 / R180",
      category: "fire",
      image: "🍖"
    },
    // Beverages - Beers
    {
      name: "Black Label/Castle Lite Quartz",
      description: "Premium South African lagers",
      price: "R35",
      category: "ice",
      image: "🍺"
    },
    {
      name: "Heineken/Corona",
      description: "International premium beers",
      price: "R35 / R40",
      category: "ice",
      image: "🍺"
    },
    {
      name: "Castle Lager",
      description: "Classic South African beer",
      price: "R30",
      category: "ice",
      image: "🍺"
    },
    // Spirits & Shots
    {
      name: "Jägermeister",
      description: "Premium herbal liqueur",
      price: "R50",
      category: "fire",
      image: "🥃"
    },
    {
      name: "Jack Daniels",
      description: "Tennessee whiskey",
      price: "R40",
      category: "fire",
      image: "🥃"
    },
    {
      name: "Johnny Walker Black/Red",
      description: "Scotch whisky selection",
      price: "R40 / R30",
      category: "fire",
      image: "🥃"
    },
    {
      name: "Hennessy/Vodka",
      description: "Premium cognac and vodka",
      price: "R45 / R20",
      category: "fire",
      image: "🥃"
    },
    // Cocktails & Mixed Drinks
    {
      name: "4 Tequila/4 Jägermeister",
      description: "Shot specials",
      price: "R100",
      category: "fire",
      image: "🍹"
    },
    {
      name: "4 Vodka/4 Gin",
      description: "Premium spirit shots",
      price: "R50",
      category: "ice",
      image: "🍸"
    },
    // Wine
    {
      name: "Wine Glasses: Red/White",
      description: "House selection wines",
      price: "R50 & R60",
      category: "ice",
      image: "🍷"
    },
    {
      name: "Chateaux Del Roi/Robertson Red",
      description: "Premium wine bottles",
      price: "R35 / R200",
      category: "ice",
      image: "🍷"
    },
    // Ciders & Soft Drinks
    {
      name: "Brutal Fruit/Hunter's Dry",
      description: "Flavored alcoholic beverages",
      price: "R35 / R40",
      category: "ice",
      image: "🍹"
    },
    {
      name: "Coca Cola/Red Bull",
      description: "Soft drinks and energy drinks",
      price: "R30 / R40",
      category: "ice",
      image: "🥤"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Menu & Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From our famous Shisha Nyama platters to premium spirits and ice-cold beverages - experience authentic South African flavors with our fire and ice concept.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">{item.image}</div>
                <h3 className={`text-xl font-semibold mb-2 ${item.category === 'fire' ? 'text-orange-400' : 'text-blue-400'}`}>
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">{item.price}</span>
                  <div className={`w-3 h-3 rounded-full ${item.category === 'fire' ? 'bg-orange-500' : 'bg-blue-500'} group-hover:scale-125 transition-transform`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <div className="bg-black/40 backdrop-blur-md border border-orange-500/30 rounded-2xl p-6 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">🔥 Special Offer 🔥</h3>
            <p className="text-xl text-white mb-2">Western African Kitchen</p>
            <p className="text-lg text-gray-300">Available on request to Chef or Waitress</p>
            <p className="text-orange-300 font-semibold mt-2">LIMITED MENU!</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

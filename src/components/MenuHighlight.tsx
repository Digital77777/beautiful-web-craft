
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const MenuHighlight = () => {
  const menuItems = [
    {
      name: "Flame-Grilled Wagyu",
      description: "Premium wagyu beef, fire-kissed to perfection",
      price: "$65",
      category: "fire",
      image: "🔥"
    },
    {
      name: "Arctic Seafood Platter",
      description: "Fresh oysters, lobster, and prawns on ice",
      price: "$45",
      category: "ice",
      image: "🧊"
    },
    {
      name: "Molten Chocolate Lava",
      description: "Warm chocolate cake with vanilla ice cream",
      price: "$18",
      category: "fire",
      image: "🔥"
    },
    {
      name: "Frozen Cocktail Collection",
      description: "Artisanal frozen margaritas and daiquiris",
      price: "$15",
      category: "ice",
      image: "🧊"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Signature Menu
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the perfect balance of hot and cold, fire and ice, in every carefully crafted dish and drink.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        <div className="text-center">
          <Button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-3 text-lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

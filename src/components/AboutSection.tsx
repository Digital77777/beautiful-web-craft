
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            About The Retrouvaille
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where culinary artistry meets unforgettable experiences. Our restaurant blends the passion of fire-grilled excellence with the refreshing sophistication of our craft cocktail program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              A Culinary Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              At The Retrouvaille, we believe in creating moments that bring people together. Our chefs masterfully combine traditional techniques with innovative flavors, delivering dishes that ignite your senses and cool your palate in perfect harmony.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From our signature flame-grilled specialties to our artisanal ice-cold beverages, every element is crafted to create an extraordinary dining experience that you'll treasure forever.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-orange-400">5+</h4>
                  <p className="text-gray-300">Years of Excellence</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-blue-400">10K+</h4>
                  <p className="text-gray-300">Happy Guests</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-orange-400">50+</h4>
                  <p className="text-gray-300">Signature Dishes</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-blue-400">100+</h4>
                  <p className="text-gray-300">Craft Cocktails</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

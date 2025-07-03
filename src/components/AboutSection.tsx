
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            About The Retrouvaille
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where culinary artistry meets unforgettable experiences. Our restaurant and bar offers a complete dining and entertainment destination that brings together exceptional food, premium beverages, authentic shisha, and electrifying entertainment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              A Complete Experience
            </h3>
            <p className="text-gray-300 leading-relaxed">
              At The Retrouvaille, we've created more than just a restaurant - we've crafted a complete lifestyle destination. From our expertly grilled cuisine and handcrafted cocktails to our premium shisha lounge and live entertainment, every element works in harmony to create unforgettable moments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're here for an intimate dinner, celebrating with friends, or enjoying our weekly entertainment events, we provide an atmosphere where fire meets ice, tradition meets innovation, and every visit becomes a treasured memory.
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
                  <p className="text-gray-300">Menu Items</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-blue-400">100+</h4>
                  <p className="text-gray-300">Premium Beverages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Food & Dining */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-orange-400/50 transition-colors">
            <div className="text-4xl mb-4 text-center">🍽️</div>
            <h4 className="text-xl font-semibold text-orange-400 mb-3">Gourmet Dining</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Wood-fired grilled specialties</li>
              <li>• Fresh seafood towers</li>
              <li>• Artisanal pizzas</li>
              <li>• Premium steaks & platters</li>
              <li>• Cold soups & appetizers</li>
            </ul>
          </div>

          {/* Beverages */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-colors">
            <div className="text-4xl mb-4 text-center">🍹</div>
            <h4 className="text-xl font-semibold text-blue-400 mb-3">Premium Beverages</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Craft cocktails & frozen drinks</li>
              <li>• Premium whiskey collection</li>
              <li>• Ice-cold beer selection</li>
              <li>• Flaming shots & fire cocktails</li>
              <li>• Extensive wine & spirits</li>
            </ul>
          </div>

          {/* Shisha Lounge */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-colors">
            <div className="text-4xl mb-4 text-center">💨</div>
            <h4 className="text-xl font-semibold text-purple-400 mb-3">Shisha Lounge</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Premium shisha flavors</li>
              <li>• Exotic fruit & mint blends</li>
              <li>• Comfortable lounge seating</li>
              <li>• VIP shisha experiences</li>
              <li>• Social smoking atmosphere</li>
            </ul>
          </div>

          {/* Entertainment */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-yellow-400/50 transition-colors">
            <div className="text-4xl mb-4 text-center">🎵</div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-3">Live Entertainment</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Thursday Ladies Night</li>
              <li>• Weekend DJ sets</li>
              <li>• Live music performances</li>
              <li>• Special event nights</li>
              <li>• Afrobeats, Hip-Hop, R&B</li>
            </ul>
          </div>
        </div>

        {/* Atmosphere & Ambiance */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Perfect Atmosphere
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Located in the heart of Observatory, our venue combines luxury lounge seating, premium lighting, and an exclusive atmosphere perfect for any occasion. Whether you're planning an intimate dinner, celebrating with friends, or enjoying our signature shisha experience, The Retrouvaille provides the perfect backdrop for memorable moments.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Fine Dining</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Premium Bar</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Shisha Lounge</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Live Entertainment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { BsInstagram } from "react-icons/bs";

const DistinguishedGuestsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-orange-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Title */}
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            data-testid="distinguished-guests-title"
          >
            Trusted & Loved by Distinguished Guests
          </h2>

          {/* Tagline */}
          <p
            className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4"
            data-testid="distinguished-guests-tagline"
          >
            From industry leaders to renowned personalities, Coffee Meets Waffle
            has been enjoyed by guests who appreciate premium taste and
            craftsmanship.
          </p>
        </div>

        {/* Instagram Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Instagram Reel Card 1 */}
          <div
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            data-testid="instagram-reel-1"
          >
            <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center">
              <div className="text-center p-8">
                <BsInstagram className="w-16 h-16 mx-auto mb-4 text-primary" />

                <p className="text-gray-600 font-medium">
                  Instagram Reel Placeholder 1
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Replace with actual embed code
                </p>
              </div>
            </div>
            {/* Uncomment and replace with actual Instagram embed
            <iframe
              src="https://www.instagram.com/reel/REEL_ID/embed"
              className="w-full aspect-[9/16]"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
            ></iframe>
            */}
          </div>

          {/* Instagram Reel Card 2 */}
          <div
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            data-testid="instagram-reel-2"
          >
            <div className="aspect-[9/16] bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 flex items-center justify-center">
              <div className="text-center p-8">
                <BsInstagram className="w-16 h-16 mx-auto mb-4 text-primary" />

                <p className="text-gray-600 font-medium">
                  Instagram Reel Placeholder 2
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Replace with actual embed code
                </p>
              </div>
            </div>
            {/* Uncomment and replace with actual Instagram embed
            <iframe
              src="https://www.instagram.com/reel/REEL_ID/embed"
              className="w-full aspect-[9/16]"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
            ></iframe>
            */}
          </div>

          {/* Instagram Reel Card 3 */}
          <div
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 md:col-span-2 lg:col-span-1"
            data-testid="instagram-reel-3"
          >
            <div className="aspect-[9/16] bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100 flex items-center justify-center">
              <div className="text-center p-8">
                <BsInstagram className="w-16 h-16 mx-auto mb-4 text-primary" />

                <p className="text-gray-600 font-medium">
                  Instagram Reel Placeholder 3
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Replace with actual embed code
                </p>
              </div>
            </div>
            {/* Uncomment and replace with actual Instagram embed
            <iframe
              src="https://www.instagram.com/reel/REEL_ID/embed"
              className="w-full aspect-[9/16]"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
            ></iframe>
            */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/coffee_meets_waffle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            data-testid="visit-instagram-btn"
          >
            <BsInstagram className="w-6 h-6 mr-2 text-white" />

            <span>Visit Our Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DistinguishedGuestsSection;

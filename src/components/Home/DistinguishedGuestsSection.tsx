import { useState, useRef } from "react";
import { BsInstagram } from "react-icons/bs";
import reel1Video from "../../assets/reels/reel_1.mp4";
import reel1Poster from "../../assets/reels/reel_1.jpeg";
import reel2Video from "../../assets/reels/reel_2.mp4";
import reel2Poster from "../../assets/reels/reel_2.jpeg";
import reel3Video from "../../assets/reels/reel_3.mp4";
import reel3Poster from "../../assets/reels/reel_3.jpeg";

interface ReelData {
  id: number;
  video: string;
  poster: string;
  instagramLink: string;
}

const reelsData: ReelData[] = [
  {
    id: 1,
    video: reel1Video,
    poster: reel1Poster,
    instagramLink: "https://www.instagram.com/reel/DClteCFt3kG/",
  },
  {
    id: 2,
    video: reel2Video,
    poster: reel2Poster,
    instagramLink: "https://www.instagram.com/reel/C5fZDp5ynsB/",
  },
  {
    id: 3,
    video: reel3Video,
    poster: reel3Poster,
    instagramLink: "https://www.instagram.com/reel/Cmi0Oxmrv8U/",
  },
];

const DistinguishedGuestsSection = () => {
  const [playingStates, setPlayingStates] = useState<{
    [key: number]: boolean;
  }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleVideoClick = (reelId: number) => {
    const video = videoRefs.current[reelId];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingStates((prev) => ({ ...prev, [reelId]: true }));
      } else {
        video.pause();
        setPlayingStates((prev) => ({ ...prev, [reelId]: false }));
      }
    }
  };

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {reelsData.map((reel) => (
            <div
              key={reel.id}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              data-testid={`instagram-reel-${reel.id}`}
            >
              {/* Video Container */}
              <div className="relative aspect-[9/16] bg-black cursor-pointer">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[reel.id] = el;
                  }}
                  className="w-full h-full object-cover"
                  poster={reel.poster}
                  loop
                  playsInline
                  onClick={() => handleVideoClick(reel.id)}
                  data-testid={`video-reel-${reel.id}`}
                >
                  <source src={reel.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause Overlay Indicator (subtle) */}
                {!playingStates[reel.id] && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="rounded-full p-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                )}
              </div>

              {/* Floating Instagram Button - Bottom Right */}
              <a
                href={reel.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in Instagram"
                className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
                data-testid={`instagram-link-${reel.id}`}
                onClick={(e) => e.stopPropagation()}
              >
                <BsInstagram className="w-6 h-6" />
              </a>
            </div>
          ))}
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

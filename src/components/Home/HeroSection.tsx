import { useRef, useEffect, useState } from "react";
import heroVideo from "../../assets/Hero_Background.mp4";
import heroImage from "../../assets/Hero_Background.png";

interface HeroSectionProps {
    onNavigate: (sectionId: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
    const videoRef = useRef < HTMLVideoElement > (null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleCanPlay = () => {
                setIsVideoLoaded(true);
            };
            video.addEventListener("canplay", handleCanPlay);

            return () => {
                video.removeEventListener("canplay", handleCanPlay);
            };
        }
    }, []);

    return (
        <section
            id="home"
            className="hero relative min-h-screen flex items-center py-5 overflow-hidden"
        >
            {/* Background Image (Fallback) */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    opacity: isVideoLoaded ? 0 : 1,
                }}
            />

            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster={heroImage}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"
                    }`}
                data-testid="hero-background-video"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

            {/* Container with max-width */}
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Row equivalent using flex */}
                <div className="flex flex-wrap items-center justify-center">
                    {/* Column equivalent - centered content */}
                    <div className="w-full lg:w-10/12 xl:w-9/12 text-center text-white">
                        {/* Main Headline */}
                        <h1
                            className="text-4xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight drop-shadow-2xl"
                            data-testid="hero-headline"
                        >
                            Where Great Coffee Meets
                            <br />
                            <span className="text-amber-400 drop-shadow-lg">
                                Signature Waffles
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p
                            className="text-lg lg:text-2xl mb-10 leading-relaxed max-w-4xl mx-auto font-light text-gray-100 drop-shadow-lg"
                            data-testid="hero-subheadline"
                        >
                            Driven by passion, powered by quality, and proudly supporting
                            women who dream big.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                            {/* Primary CTA Button */}
                            <button
                                onClick={() => onNavigate("about")}
                                data-testid="franchise-partner-btn"
                                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl w-full lg:w-auto"
                            >
                                Become a Franchise Partner
                            </button>

                            {/* Secondary CTA Button - Outline */}
                            <button
                                onClick={() => onNavigate("about")}
                                data-testid="explore-story-btn"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base lg:text-lg transition-all duration-300 transform hover:scale-105 w-full lg:w-auto"
                            >
                                Explore Our Story
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <div className="flex flex-col items-center text-white drop-shadow-lg">
                    <span className="text-sm mb-2">Scroll Down</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ownerImage from "../assets/owner.jpeg";

// SVG Icons as components for cleaner code
const CoffeeIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4H5v-4H3a2 2 0 01-2-2v-6a2 2 0 012-2h2M5 8V5a2 2 0 012-2h10a2 2 0 012 2v3"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const CheckBadgeIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const LightningIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

// Awards Data
const awards = [
  {
    title: "Women Icon Award",
    organization: "",
    year: "2024",
  },
  {
    title: "Samidnya Hirkani Rajyastarya Puraskar",
    organization: "",
    year: "2024",
  },
];

// Values Data
const values = [
  {
    icon: <CoffeeIcon />,
    title: "Uncompromising Quality",
    description:
      "Every cup of coffee and waffle is crafted with premium ingredients and meticulous attention to detail.",
  },
  {
    icon: <HeartIcon />,
    title: "Passion for Taste",
    description:
      "Our love for exceptional flavors drives us to continuously innovate and perfect our offerings.",
  },
  {
    icon: <CheckBadgeIcon />,
    title: "Consistent Experience",
    description:
      "Whether you visit Pune or Nashik, you'll enjoy the same signature quality and warmth.",
  },
  {
    icon: <UsersIcon />,
    title: "Community First",
    description:
      "We believe in building meaningful connections with our customers and the communities we serve.",
  },
  {
    icon: <StarIcon />,
    title: "Customer Delight",
    description:
      "Every interaction is an opportunity to create memorable experiences that keep guests coming back.",
  },
  {
    icon: <LightningIcon />,
    title: "Entrepreneurial Spirit",
    description:
      "We empower aspiring business owners to build their dreams through our franchise model.",
  },
];

// Timeline Milestones Data
const milestones = [
  {
    year: "Nov 2022",
    title: "The Beginning",
    description:
      "Coffee Meets Waffle was established in Nashik as a premium specialty coffee company with a vision to serve world-class coffee to Indian customers.",
  },
  {
    year: "2023",
    title: "First Outlet Opens",
    description:
      "Our flagship café opened doors at City Centre Mall, Nashik — instantly winning hearts with our signature waffles and coffee.",
  },
  {
    year: "2023",
    title: "Rapid Expansion",
    description:
      "Expanded to multiple PVR locations across Maharashtra, pioneering best-in-class coffee with varieties of delicious waffles.",
  },
  {
    year: "2024",
    title: "National Recognition",
    description:
      "Received Women Icon Award and Samidnya Hirkani Rajyastarya Puraskar for our founder's exceptional entrepreneurship.",
  },
  {
    year: "2024",
    title: "17+ Locations & Growing",
    description:
      "Now serving across Mumbai, Pune, Nashik, Surat, Vadodara, Rajkot, Aurangabad & Kolhapur with a vision to empower 100 women entrepreneurs.",
  },
];

const AboutUs: React.FC = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white" data-testid="about-us-page">
      {/* Hero / Brand Story Section */}
      <section
        className="relative pt-32 pb-24 px-4 bg-gradient-to-b from-orange-50 via-white to-orange-50 overflow-hidden"
        data-testid="brand-story-section"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center">
            {/* Decorative element */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <svg
                className="mx-4 w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2 21h19v-3H2v3zM20 8H4V6h16v2zm0 2H4v2h16v-2zm-5 4H9v2h6v-2z" />
                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z" />
              </svg>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            {/* Tagline Badge */}
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-200">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Our Story
                </span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight px-4"
              data-testid="brand-story-headline"
            >
              Where Passion Meets
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-500 to-amber-500">
                {" "}
                Purpose
              </span>
            </h1>

            {/* Story Content */}
            <div className="space-y-6 text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4">
              <p data-testid="brand-story-text-1">
                Coffee Meets Waffle is a{" "}
                <strong className="text-primary">
                  premium specialty coffee company
                </strong>{" "}
                established in{" "}
                <strong className="text-primary">November 2022</strong> in
                Nashik. Our Chef Prabjyot Singh, with more than{" "}
                <strong>25 years of experience</strong> in the hotel industry,
                is relentlessly working to provide a delightful coffee
                experience.
              </p>
              <p data-testid="brand-story-text-2">
                We currently serve at{" "}
                <strong className="text-primary">
                  17+ locations across India
                </strong>{" "}
                where we've pioneered and introduced best-in-class coffee along
                with varieties of delicious waffles. We are humbled by the
                phenomenal client response and incredible love from our
                customers.
              </p>
              <p data-testid="brand-story-text-3">
                Every outlet you visit carries the same commitment to{" "}
                <strong className="text-gray-900">
                  quality, taste, and consistency
                </strong>
                . We cater to customers across all demographics — urban &
                suburban, middle & upper class, well-educated, socially aware,
                active & busy individuals who appreciate premium coffee served
                quickly in a quality way.
              </p>
            </div>

            {/* Decorative bottom element */}
            <div className="flex items-center justify-center mt-12">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story & Vision Section */}
      <section
        className="py-24 px-4 bg-white"
        data-testid="founder-story-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Founder Image Placeholder */}
            <div
              className="order-2 lg:order-1"
              data-testid="founder-image-container"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-amber-500/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 lg:p-12 shadow-xl">
                  {/* Founder Image */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-orange-200 to-amber-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder - visible until image loads */}
                    <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                      <div>
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-amber-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                          <span className="text-5xl font-bold text-white">
                            SK
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">Founder & CEO</p>
                      </div>
                    </div>
                    {/* Actual owner image */}
                    <img
                      src={ownerImage}
                      alt="Sampadaa Kulkarni - Founder & CEO"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Founder Story */}
            <div
              className="order-1 lg:order-2 space-y-8"
              data-testid="founder-story-content"
            >
              <div className="inline-block mb-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-full border border-orange-200">
                  <span className="text-sm font-semibold text-gray-700">
                    Meet Our Founder
                  </span>
                </span>
              </div>

              <h2
                className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight"
                data-testid="founder-name"
              >
                Sampadaa Kulkarni
              </h2>

              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p data-testid="founder-story-text-1">
                  Sampadaa Kulkarni, a resilient and accomplished women
                  entrepreneur who has triumphed over societal challenges. As a
                  single mother, she manages a successful chain of cafes
                  spanning across India,offering a unique blend of multigrain
                  waffles and authentic coffee.She was a former French
                  professor, having spent 19 years in the educational field and
                  earning recognition as the recipient of the Best Professor
                  Award, by Ashoka Group of Education.
                </p>
                <p data-testid="founder-story-text-2">
                  Her recognition as{" "}
                  <strong className="text-gray-900">Women Icon 2024</strong> by
                  The Crazy Tales and{" "}
                  <strong className="text-gray-900">
                    Samidnya Hirkani Rajyastarya Puraskar 2024
                  </strong>{" "}
                  is well-deserved. These awards highlight her contributions to
                  entrepreneurship and society.
                </p>
              </div>

              {/* Vision Statement */}
              <div className="bg-gradient-to-r from-primary/10 via-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our Vision is to serve 100% eco friendly and sustainably
                  sourced perfect cup of Coffee specially crafted for you. We
                  strive each day to cater our Indian Palate customers with
                  world class taste of coffee.
                </p>
              </div>

              {/* USP Statement */}
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-primary/10 p-6 rounded-2xl border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our USP
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium text-lg italic">
                  "Fresh Coffee, Served Quickly in a Quality Way."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Awards & Recognition Section */}
      <section
        className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white"
        data-testid="awards-section"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full border border-amber-200">
                <TrophyIcon />
                <span className="text-sm font-semibold text-gray-700">
                  Recognition
                </span>
              </span>
            </div>
            <h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              data-testid="awards-headline"
            >
              Awards & Achievements
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our commitment to quality and innovation has earned recognition
              from industry leaders across India.
            </p>
          </div>

          {/* Awards Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-testid="awards-grid"
          >
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 hover:border-amber-200"
                data-testid={`award-card-${index}`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-400 to-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <TrophyIcon />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full mb-3">
                      {award.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {award.title}
                    </h3>
                    <p className="text-gray-600">{award.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section
        className="py-24 px-4 bg-white"
        data-testid="mission-values-section"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-full border border-orange-200">
                <HeartIcon />
                <span className="text-sm font-semibold text-gray-700">
                  What We Stand For
                </span>
              </span>
            </div>
            <h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              data-testid="values-headline"
            >
              Our Mission & Values
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              These are the principles that guide everything we do — from
              crafting the perfect waffle to supporting our franchise partners.
            </p>
          </div>

          {/* Values Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-testid="values-grid"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100 hover:border-primary"
                data-testid={`value-card-${index}`}
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-amber-500 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
                {/* Decorative Line */}
                <div className="mt-4 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-primary to-amber-500 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones / Growth Timeline Section */}
      <section
        className="py-24 px-4 bg-gradient-to-b from-orange-50 to-white"
        data-testid="milestones-section"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-full border border-orange-200">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Our Journey
                </span>
              </span>
            </div>
            <h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              data-testid="milestones-headline"
            >
              Milestones That Define Us
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              From a single café to a nationwide brand — here's how we've grown
              over the years.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative" data-testid="timeline-container">
            {/* Vertical Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-orange-400 to-amber-400 transform lg:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  data-testid={`milestone-${index}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2 shadow-lg ring-4 ring-white"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      index % 2 === 0
                        ? "lg:pr-12 lg:text-right"
                        : "lg:pl-12 lg:text-left"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary to-amber-500 text-white text-sm font-bold rounded-full mb-4 shadow-sm">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Women Empowerment Highlight Section */}
      <section
        className="relative py-24 px-4 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 overflow-hidden"
        data-testid="women-empowerment-about-section"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div
              className="space-y-8"
              data-testid="women-empowerment-about-content"
            >
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-rose-500/10 to-orange-500/10 rounded-full border border-rose-200">
                  <svg
                    className="w-5 h-5 text-rose-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">
                    Women First Initiative
                  </span>
                </span>
              </div>

              <h2
                className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight"
                data-testid="women-empowerment-about-headline"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600">
                  Empowering Women
                </span>
                <br />
                to Lead & Succeed
              </h2>

              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Coffee Meets Waffle, women aren't just welcomed — they're{" "}
                  <strong className="text-gray-900">prioritized</strong>. Our
                  franchise model is built with a clear focus on helping women
                  become successful business owners.
                </p>
                <p>
                  We provide dedicated support, flexible financing options, and
                  a mentorship network designed to ensure that every woman who
                  joins our family has the tools and guidance to thrive.
                </p>
                <p className="font-medium text-gray-800">
                  Because we believe that when women succeed, entire communities
                  rise.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-rose-100">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-orange-600 mb-2">
                    60%+
                  </div>
                  <p className="text-gray-600 font-medium">
                    Women-led Franchises
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-rose-100">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 mb-2">
                    100
                  </div>
                  <p className="text-gray-600 font-medium">
                    Women to Empower by 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Quote Box */}
            <div
              className="relative"
              data-testid="women-empowerment-quote-container"
            >
              <div className="bg-gradient-to-br from-rose-600 via-orange-600 to-amber-600 p-10 lg:p-12 rounded-3xl shadow-2xl text-white">
                <svg
                  className="w-12 h-12 text-white/30 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-2xl lg:text-3xl font-bold leading-relaxed mb-8 italic">
                  "Every woman should create her own story, not follow someone
                  else's."
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">
                    SK
                  </div>
                  <div>
                    <p className="font-bold text-lg">Sampada Kulkarni</p>
                    <p className="text-white/80">Founder & CEO</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose-400/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft CTA Section */}
      <section
        className="py-24 px-4 bg-gradient-to-b from-white to-orange-50"
        data-testid="soft-cta-section"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-10 lg:p-14 rounded-3xl shadow-2xl border border-orange-100">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary to-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4H5v-4H3a2 2 0 01-2-2v-6a2 2 0 012-2h2M5 8V5a2 2 0 012-2h10a2 2 0 012 2v3"
                />
              </svg>
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
              data-testid="cta-headline"
            >
              Inspired by Our Story?
            </h2>

            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
              If you share our passion for quality, community, and
              entrepreneurship, we'd love to hear from you. Explore what it
              means to be a Coffee Meets Waffle franchise partner.
            </p>

            <Link
              to="/franchise"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:from-orange-600 hover:via-orange-600 hover:to-amber-600 text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/40"
              data-testid="explore-franchise-cta"
            >
              <span>Explore Franchise Opportunities</span>
              <svg
                className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <p className="mt-6 text-gray-500 text-sm">
              No obligation. Just an opportunity to learn more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

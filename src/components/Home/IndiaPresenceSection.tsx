import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../../assets/illustrations/illustration_1.png";

// Fix for default marker icon in react-leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
// Create a custom marker icon using the illustration
const redIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [80, 80],
  iconAnchor: [37, 72],
  popupAnchor: [0, -60],
  shadowSize: [120, 72],
});

interface Store {
  name: string;
  lat: number;
  lng: number;
  locationLink?: string;
}

const stores: Store[] = [
  {
    name: "City Centre Mall, Nashik",
    lat: 19.9909,
    lng: 73.7618,
    locationLink: "https://maps.app.goo.gl/AzqTSFkr7sXgovEm8",
  },
  {
    name: "Oberoi Mall, Mumbai",
    lat: 19.174166,
    lng: 72.860409,
    locationLink: "https://maps.app.goo.gl/4RdXyyBDHai8fy6m8",
  },
  {
    name: "Infinity Mall, Mumbai",
    lat: 19.141255,
    lng: 72.830902,
    locationLink: "https://maps.app.goo.gl/ASmbQS8LFG4oH3sX6",
  },
  {
    name: "Capital Mall, Mumbai",
    lat: 19.4072,
    lng: 72.8218,
    locationLink: "https://maps.app.goo.gl/omxAezHY9WXQ8G4K8",
  },
  {
    name: "Prozone Mall, Aurangabad",
    lat: 19.8763,
    lng: 75.3723,
    locationLink: "https://maps.app.goo.gl/neUtGJzDvBN33Dua9",
  },
  {
    name: "Kumar Pacific Mall, Pune",
    lat: 18.5011,
    lng: 73.8723,
    locationLink: "https://maps.app.goo.gl/xS98uywFCmCQJAiA9",
  },
  {
    name: "Pavillion Mall, Pune",
    lat: 18.5339,
    lng: 73.8301,
    locationLink: "https://maps.app.goo.gl/BwCGPshiwy84eHCB6",
  },
  {
    name: "Millenium Mall, Pune",
    lat: 18.6002,
    lng: 73.7561,
    locationLink: "https://maps.app.goo.gl/GdP83rZGsS1B5PUM6",
  },
  {
    name: "Phoneix Market City Mall, Pune",
    lat: 18.5629,
    lng: 73.9173,
    locationLink: "https://maps.app.goo.gl/8524Ed7Q4a7fsyJj7",
  },
  {
    name: "Grand Highstreet Mall, Pune",
    lat: 18.594,
    lng: 73.7257,
    locationLink: "https://maps.app.goo.gl/XTKMLtrhp3Upxob7A",
  },
  {
    name: "City Square Mall, Pune",
    lat: 18.6289,
    lng: 73.7833,
    locationLink: "https://maps.app.goo.gl/mLqErEGiRN1YwV4w8",
  },
  {
    name: "Rahul Raj Mall, Surat",
    lat: 21.1551,
    lng: 72.7675,
    locationLink: "https://maps.app.goo.gl/2tGn8SJ2pCwtwPjZA",
  },

  {
    name: "Triumo Mall, Vadodara",
    lat: 22.3072,
    lng: 73.1812,
  },
  {
    name: "Relience Mall, Rajkot",
    lat: 22.2796,
    lng: 70.7773,
    locationLink: "https://maps.app.goo.gl/hfFfhfGiUhmMtcPQ7",
  },
  {
    name: "DY Patil Mall, Kolhapur",
    lat: 16.7037,
    lng: 74.2509,
    locationLink: "https://maps.app.goo.gl/u8mHfmTXAuf4fiZY9",
  },
  {
    name: "Citi Mall, Mumbai",
    lat: 19.1387,
    lng: 72.8318,
    locationLink: "https://maps.app.goo.gl/rsTTNCzoheW25UVLA",
  },
  {
    name: "Xperia Mall, Mumbai",
    lat: 19.1658,
    lng: 73.0753,
    locationLink: "https://maps.app.goo.gl/9h99X3WqeGi7EBoP9",
  },
];

const IndiaPresenceSection = () => {
  useEffect(() => {
    // Ensure Leaflet CSS is loaded
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-white to-orange-50"
      data-testid="india-presence-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            data-testid="india-presence-title"
          >
            17+ Locations Across India
          </h2>
          <p
            className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4"
            data-testid="india-presence-subtext"
          >
            With a fast-growing presence across the country, Coffee Meets Waffle
            continues to expand into new cities — bringing our signature flavors
            and franchise opportunities closer to more people every day.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className="order-2 lg:order-1 space-y-8"
            data-testid="india-presence-content"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12 rounded-2xl shadow-2xl">
              <h3
                className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                data-testid="india-presence-tagline"
              >
                Your city could be the next.
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed opacity-90">
                We're actively looking for passionate franchise partners who
                share our vision of delivering exceptional coffee and waffles to
                communities across India.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Interested in bringing Coffee Meets Waffle to your city?
              </h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Join our growing network of successful franchise owners and be
                part of India's favorite coffee and waffle destination.
              </p>
              <button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                data-testid="franchise-enquiry-btn"
              >
                Franchise Enquiry
              </button>
            </div>
          </div>

          {/* Right Column - Map */}
          <div
            className="order-1 lg:order-2 bg-white p-6 rounded-2xl shadow-xl"
            data-testid="india-presence-map-container"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Current Locations
            </h4>
            <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
              <MapContainer
                center={[19.2, 73.8]}
                zoom={7}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                data-testid="leaflet-map"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {stores.map((store, index) => {
                  const googleMapsLink =
                    store.locationLink ??
                    `https://www.google.com/maps?q=${store.lat},${store.lng}`;
                  return (
                    <Marker
                      key={index}
                      position={[store.lat, store.lng]}
                      icon={redIcon}
                      data-testid={`map-marker-${store.name.toLowerCase()}`}
                    >
                      <Popup>
                        <div className="text-center p-2">
                          <strong className="text-lg block mb-2">
                            {store.name}
                          </strong>
                          <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                            data-testid={`google-maps-link-${store.name.toLowerCase()}`}
                          >
                            Open in Google Maps
                          </a>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              Click on the markers to view location details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaPresenceSection;

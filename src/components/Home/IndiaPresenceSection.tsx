import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon in react-leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
// Create a custom red marker icon
const redIcon = new L.Icon({
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Store {
  name: string;
  lat: number;
  lng: number;
  locationLink?: string;
}

const stores: Store[] = [
  { name: "Pune", lat: 18.533299, lng: 73.829699 },
  {
    name: "Nashik",
    lat: 19.990964211587926,
    lng: 73.76178492927377,
    locationLink: "https://maps.app.goo.gl/AzqTSFkr7sXgovEm8",
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

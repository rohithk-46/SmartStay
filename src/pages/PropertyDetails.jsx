import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Star,
  BedDouble,
  Bath,
} from "lucide-react";

import properties from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <div className="not-found">
        <h1>Property Not Found</h1>

        <Link to="/properties">
          Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <main className="property-details-page">

      <Link
        to="/properties"
        className="back-link"
      >
        <ArrowLeft size={18} />
        Back to Properties
      </Link>

      <div className="details-container">

        <div className="details-image">

          <img
            src={property.image}
            alt={property.name}
            className="details-property-image"
          />

        </div>

        <div className="details-content">

          <span className="details-type">
            {property.type}
          </span>

          <h1>{property.name}</h1>

          <p className="details-location">
            <MapPin size={18} />
            {property.location}
          </p>

          <div className="details-rating">
            <Star
              size={18}
              fill="currentColor"
            />
            {property.rating}
          </div>

          <div className="details-price">
            ₹{property.price.toLocaleString()}
            <span>/month</span>
          </div>

          <div className="details-features">

            <div>
              <BedDouble size={22} />
              <span>
                {property.bedrooms} Bedrooms
              </span>
            </div>

            <div>
              <Bath size={22} />
              <span>
                {property.bathrooms} Bathrooms
              </span>
            </div>

          </div>

          <p className="details-description">
            A comfortable and modern property located
            in a convenient location. Perfect for students,
            professionals and families looking for a
            comfortable place to stay.
          </p>

          <div className="details-actions">

            <button className="contact-btn">
              Contact Owner
            </button>

            <Link
              to={`/bookings?propertyId=${property.id}`}
              className="book-btn"
            >
              Book Now
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}

export default PropertyDetails;
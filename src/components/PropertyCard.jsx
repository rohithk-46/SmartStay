import { useState } from "react";
import {
  Heart,
  MapPin,
  Star,
  BedDouble,
  Bath,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function PropertyCard({ property, onFavoriteChange }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    return saved.includes(property.id);
  });

  const toggleFavorite = (e) => {
    e.preventDefault();

    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;

    if (saved.includes(property.id)) {
      updated = saved.filter(
        (id) => id !== property.id
      );

      setIsFavorite(false);
    } else {
      updated = [...saved, property.id];

      setIsFavorite(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    if (onFavoriteChange) {
      onFavoriteChange();
    }
  };

  return (
    <div className="property-card">

      <div className="property-image">

        <img
          src={property.image}
          alt={property.name}
          className="property-card-image"
        />

        <button
          className={`favorite-btn ${
            isFavorite ? "active" : ""
          }`}
          onClick={toggleFavorite}
          aria-label="Add to favorites"
        >
          <Heart
            size={20}
            fill={
              isFavorite
                ? "currentColor"
                : "none"
            }
          />
        </button>

        <span className="property-type">
          {property.type}
        </span>

      </div>

      <div className="property-info">

        <div className="property-rating">
          <Star
            size={16}
            fill="currentColor"
          />
          <span>{property.rating}</span>
        </div>

        <h3>{property.name}</h3>

        <p className="property-location">
          <MapPin size={16} />
          {property.location}
        </p>

        <div className="property-details">

          <span>
            <BedDouble size={16} />
            {property.bedrooms} Beds
          </span>

          <span>
            <Bath size={16} />
            {property.bathrooms} Baths
          </span>

        </div>

        <div className="property-bottom">

          <div>
            <strong>
              ₹{property.price.toLocaleString()}
            </strong>

            <span>/month</span>
          </div>

          <Link
            to={`/property/${property.id}`}
            className="property-view-btn"
          >
            View
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </div>
  );
}

export default PropertyCard;
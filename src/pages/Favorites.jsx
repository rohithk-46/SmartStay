import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const favoriteProperties = properties.filter((property) =>
    favorites.includes(property.id)
  );

  const handleFavoriteChange = () => {
    const updated =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(updated);
  };

  return (
    <main className="favorites-page">
      <div className="favorites-header">
        <span>MY COLLECTION</span>

        <h1>Favorite Properties</h1>

        <p>
          Your saved properties are all in one place.
        </p>
      </div>

      {favoriteProperties.length > 0 ? (
        <div className="properties-grid">
          {favoriteProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onFavoriteChange={handleFavoriteChange}
            />
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <Heart size={45} />

          <h2>No Favorite Properties</h2>

          <p>
            Start saving properties you like.
          </p>

          <Link to="/properties">
            Explore Properties
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </main>
  );
}

export default Favorites;
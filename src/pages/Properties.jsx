import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function Properties() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [type, setType] = useState(
    searchParams.get("type") || "All"
  );

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [sort, setSort] = useState("default");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setType(searchParams.get("type") || "All");
  }, [searchParams]);

  const resetFilters = () => {
    setSearch("");
    setType("All");
    setMinPrice("");
    setMaxPrice("");
    setSort("default");
  };

  const filteredProperties = properties.filter((property) => {
    const searchText =
      `${property.name} ${property.location}`.toLowerCase();

    const matchesSearch = searchText.includes(
      search.toLowerCase()
    );

    const matchesType =
      type === "All" || property.type === type;

    const matchesMinPrice =
      minPrice === "" ||
      property.price >= Number(minPrice);

    const matchesMaxPrice =
      maxPrice === "" ||
      property.price <= Number(maxPrice);

    return (
      matchesSearch &&
      matchesType &&
      matchesMinPrice &&
      matchesMaxPrice
    );
  });

  const sortedProperties = [...filteredProperties].sort(
    (a, b) => {
      if (sort === "price-low") {
        return a.price - b.price;
      }

      if (sort === "price-high") {
        return b.price - a.price;
      }

      if (sort === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    }
  );

  return (
    <main className="properties-page">

      <div className="properties-header">
        <span>EXPLORE SMARTSTAY</span>

        <h1>Find Your Perfect Stay</h1>

        <p>
          Explore rooms, apartments, PGs, hostels and houses.
        </p>
      </div>

      <div className="properties-filters">

        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="All">
            All Properties
          </option>

          <option value="Apartment">
            Apartment
          </option>

          <option value="PG">
            PG
          </option>

          <option value="Hostel">
            Hostel
          </option>

          <option value="House">
            House
          </option>

          <option value="Villa">
            Villa
          </option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">
            Sort By
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="rating">
            Rating: High to Low
          </option>
        </select>

        <button
          className="reset-filter-btn"
          onClick={resetFilters}
        >
          Reset
        </button>

      </div>

      <div className="properties-grid">
        {sortedProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>

      {sortedProperties.length === 0 && (
        <div className="no-properties">
          <h2>No properties found</h2>

          <p>
            Try another search, property type or price range.
          </p>
        </div>
      )}

    </main>
  );
}

export default Properties;
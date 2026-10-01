import { useState } from "react";
import {
  Search,
  MapPin,
  Home as HomeIcon,
  ArrowRight,
  Building2,
  Users,
  Hotel,
  House,
  Castle,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

function Home() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [type, setType] = useState("Any Type");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location.trim()) {
      params.set("search", location.trim());
    }

    if (type !== "Any Type") {
      params.set("type", type);
    }

    const query = params.toString();

    navigate(
      query
        ? `/properties?${query}`
        : "/properties"
    );
  };

  const propertyTypes = [
    {
      name: "Apartment",
      icon: Building2,
      count: "120+",
    },
    {
      name: "PG",
      icon: Users,
      count: "80+",
    },
    {
      name: "Hostel",
      icon: Hotel,
      count: "60+",
    },
    {
      name: "House",
      icon: House,
      count: "90+",
    },
    {
      name: "Villa",
      icon: Castle,
      count: "40+",
    },
  ];

  return (
    <>
      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-tag">
            FIND YOUR PERFECT STAY
          </span>

          <h1>
            Find a place
            <br />
            you can <span>call home.</span>
          </h1>

          <p>
            Discover comfortable rooms, apartments, PGs and
            hostels that match your lifestyle and budget.
          </p>

          <div className="hero-search">

            <div className="search-item">
              <MapPin size={20} />

              <div>
                <small>Location</small>

                <input
                  type="text"
                  placeholder="Where do you want to stay?"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                />
              </div>
            </div>

            <div className="search-item">
              <HomeIcon size={20} />

              <div>
                <small>Property Type</small>

                <select
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value)
                  }
                >
                  <option>Any Type</option>
                  <option>Apartment</option>
                  <option>PG</option>
                  <option>Hostel</option>
                  <option>House</option>
                  <option>Villa</option>
                </select>
              </div>
            </div>

            <button
              className="search-btn"
              onClick={handleSearch}
            >
              <Search size={20} />
              Search
            </button>

          </div>

          {/* Hero Features */}

          <div className="hero-features">

            <div className="hero-feature">
              <ShieldCheck size={22} />

              <div>
                <strong>Verified</strong>
                <span>Properties</span>
              </div>
            </div>

            <div className="hero-feature">
              <HomeIcon size={22} />

              <div>
                <strong>Comfortable</strong>
                <span>Living</span>
              </div>
            </div>

            <div className="hero-feature">
              <Star size={22} />

              <div>
                <strong>Highly Rated</strong>
                <span>Stays</span>
              </div>
            </div>

          </div>

        </div>

        {/* Hero Property Images */}

        <div className="hero-image">

          <div className="hero-main-image">
            <img
              src="/images/property1.jpg"
              alt="Modern Apartment"
            />
          </div>

          <div className="hero-small-image hero-small-one">
            <img
              src="/images/property3.jpg"
              alt="Luxury Villa"
            />
          </div>

          <div className="hero-small-image hero-small-two">
            <img
              src="/images/property5.jpg"
              alt="Family House"
            />
          </div>

          <div className="hero-info-card hero-card-one">

            <Building2 size={22} />

            <div>
              <strong>Modern Apartments</strong>
              <small>Comfortable Living</small>
            </div>

          </div>

          <div className="hero-info-card hero-card-two">

            <ShieldCheck size={22} />

            <div>
              <strong>Verified Properties</strong>
              <small>Safe & Secure</small>
            </div>

          </div>

        </div>

      </section>

      {/* Property Types */}

      <section className="property-types-section">

        <div className="section-heading">

          <div>
            <span>EXPLORE BY TYPE</span>

            <h2>Find Your Ideal Stay</h2>
          </div>

        </div>

        <div className="property-types-grid">

          {propertyTypes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="property-type-card"
                key={item.name}
                onClick={() =>
                  navigate(
                    `/properties?type=${item.name}`
                  )
                }
              >
                <Icon size={32} />

                <h3>{item.name}</h3>

                <p>
                  {item.count} Properties
                </p>
              </div>
            );
          })}

        </div>

      </section>

      {/* Featured Properties */}

      <section className="featured-section">

        <div className="section-heading">

          <div>
            <span>EXPLORE</span>

            <h2>Featured Properties</h2>
          </div>

          <Link
            to="/properties"
            className="view-all"
          >
            View all
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="home-property-grid">

          {properties.slice(0, 3).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}

        </div>

      </section>
    </>
  );
}

export default Home;
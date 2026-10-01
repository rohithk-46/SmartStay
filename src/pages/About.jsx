import {
  Home,
  ShieldCheck,
  Search,
  Heart,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <span>ABOUT SMARTSTAY</span>

        <h1>
          Finding a place to stay
          <br />
          made <strong>simple.</strong>
        </h1>

        <p>
          SmartStay helps people discover comfortable and
          affordable places to live, all in one simple platform.
        </p>

        <Link
          to="/properties"
          className="about-hero-btn"
        >
          Explore Properties
          <ArrowRight size={18} />
        </Link>
      </section>

      <section className="about-story">

        <div className="about-story-content">
          <span>OUR MISSION</span>

          <h2>
            Making property discovery
            easier for everyone.
          </h2>

          <p>
            Finding the right place to stay can be complicated.
            SmartStay brings properties, useful information and
            simple search tools together in one place.
          </p>

          <p>
            Whether you are a student, professional, family or
            property owner, SmartStay is designed to make the
            process easier.
          </p>

          <Link
            to="/properties"
            className="about-link"
          >
            Find a Property
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="about-stat-box">

          <div>
            <strong>100+</strong>
            <span>Properties</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Users</span>
          </div>

          <div>
            <strong>20+</strong>
            <span>Locations</span>
          </div>

          <div>
            <strong>4.8</strong>
            <span>Average Rating</span>
          </div>

        </div>

      </section>

      <section className="about-features">

        <div className="about-section-heading">
          <span>WHY SMARTSTAY</span>

          <h2>
            Everything you need to
            find your stay.
          </h2>
        </div>

        <div className="about-feature-grid">

          <div className="about-feature-card">
            <div className="about-icon">
              <Search size={25} />
            </div>

            <h3>Easy Search</h3>

            <p>
              Search properties by location, type and budget.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-icon">
              <ShieldCheck size={25} />
            </div>

            <h3>Trusted Properties</h3>

            <p>
              Discover properties with useful details and ratings.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-icon">
              <Heart size={25} />
            </div>

            <h3>Save Favorites</h3>

            <p>
              Keep your favorite properties in one convenient place.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-icon">
              <Users size={25} />
            </div>

            <h3>For Everyone</h3>

            <p>
              Designed for students, professionals, families and owners.
            </p>
          </div>

        </div>

      </section>

      <section className="about-cta">

        <Home size={35} />

        <h2>
          Ready to find your next home?
        </h2>

        <p>
          Explore properties and discover a place that feels right.
        </p>

        <Link
          to="/properties"
          className="about-cta-btn"
        >
          Start Exploring
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
}

export default About;
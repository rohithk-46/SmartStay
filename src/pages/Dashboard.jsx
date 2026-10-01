import { useState } from "react";
import {
  Home,
  Heart,
  CalendarDays,
  Star,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [bookings, setBookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  });

  const handleDeleteBooking = (id) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  const favorites =
    JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

  return (
    <main className="dashboard-page">

      <div className="dashboard-header">
        <div>
          <span>SMARTSTAY</span>

          <h1>Welcome back, Rohith 👋</h1>

          <p>
            Manage your properties, bookings and saved stays.
          </p>
        </div>
      </div>

      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon">
            <Heart size={22} />
          </div>

          <div>
            <span>Saved Properties</span>
            <h2>{favorites.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Bookings</span>
            <h2>{bookings.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Star size={22} />
          </div>

          <div>
            <span>Reviews</span>
            <h2>5</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Home size={22} />
          </div>

          <div>
            <span>Visited</span>
            <h2>8</h2>
          </div>
        </div>

      </div>

      <section className="dashboard-section">

        <div className="section-title">
          <h2>My Bookings</h2>

          <Link to="/bookings">
            View All
            <ArrowRight size={17} />
          </Link>
        </div>

        {bookings.length > 0 ? (
          <div className="booking-table">

            <div className="booking-row booking-heading">
              <span>Property</span>
              <span>Location</span>
              <span>Date</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {bookings.map((booking) => (
              <div
                className="booking-row"
                key={booking.id}
              >

                <span>
                  {booking.propertyName || "General Booking"}
                </span>

                <span className="booking-location">
                  {booking.propertyLocation ? (
                    <>
                      <MapPin size={15} />
                      {booking.propertyLocation}
                    </>
                  ) : (
                    "-"
                  )}
                </span>

                <span>{booking.date}</span>

                <span className="status pending">
                  {booking.status}
                </span>

                <button
                  onClick={() =>
                    handleDeleteBooking(booking.id)
                  }
                  className="delete-booking-btn"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>
        ) : (
          <div className="no-properties">
            <h2>No bookings yet</h2>

            <p>
              Your booking requests will appear here.
            </p>
          </div>
        )}

      </section>

      <section className="dashboard-section">

        <div className="section-title">
          <h2>Quick Actions</h2>
        </div>

        <div className="quick-actions">

          <Link
            to="/favorites"
            className="quick-card"
          >
            <Heart size={24} />

            <h3>Saved Properties</h3>

            <p>
              View your favorite properties.
            </p>
          </Link>

          <Link
            to="/bookings"
            className="quick-card"
          >
            <CalendarDays size={24} />

            <h3>My Bookings</h3>

            <p>
              Check your booking status.
            </p>
          </Link>

          <Link
            to="/properties"
            className="quick-card"
          >
            <Home size={24} />

            <h3>Find a Property</h3>

            <p>
              Explore new places to stay.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Dashboard;
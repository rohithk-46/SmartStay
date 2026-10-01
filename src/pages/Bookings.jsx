import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle,
  MapPin,
  Home,
  Trash2,
} from "lucide-react";

import properties from "../data/properties";

function Bookings() {
  const [searchParams] = useSearchParams();

  const propertyId = Number(
    searchParams.get("propertyId")
  );

  const property = properties.find(
    (item) => item.id === propertyId
  );

  const [booked, setBooked] = useState(false);

  const [bookings, setBookings] = useState(() => {
    return JSON.parse(
      localStorage.getItem("bookings")
    ) || [];
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      ...form,
      propertyId: property?.id || null,
      propertyName:
        property?.name || "General Booking",
      propertyLocation:
        property?.location || "",
      propertyPrice:
        property?.price || 0,
      status: "Pending",
    };

    const updatedBookings = [
      ...bookings,
      newBooking,
    ];

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBooked(true);
  };

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <main className="booking-page">

      <div className="booking-card">

        {!booked ? (
          <>
            <div className="booking-header">
              <CalendarDays size={35} />

              <h1>Book Your Stay</h1>

              <p>
                Submit your booking request to SmartStay.
              </p>
            </div>

            {property && (
              <div className="booking-property">

                <Home size={24} />

                <div>
                  <h3>{property.name}</h3>

                  <p>
                    <MapPin size={15} />
                    {property.location}
                  </p>

                  <strong>
                    ₹{property.price.toLocaleString()}/month
                  </strong>
                </div>

              </div>
            )}

            <form onSubmit={handleBooking}>

              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Move-in Date</label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="auth-btn"
              >
                Submit Booking
              </button>

            </form>
          </>
        ) : (
          <div className="booking-success">

            <CheckCircle size={60} />

            <h1>Booking Request Sent!</h1>

            <p>
              Your booking request has been saved
              successfully.
            </p>

            {property && (
              <p>
                <strong>{property.name}</strong>
              </p>
            )}

            <Link
              to="/dashboard"
              className="auth-btn"
            >
              Go to Dashboard
            </Link>

          </div>
        )}

      </div>

      {bookings.length > 0 && (
        <section className="booking-history">

          <div className="booking-history-header">
            <h2>Booking History</h2>

            <span>
              {bookings.length} Booking
              {bookings.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="booking-history-list">

            {bookings.map((booking) => (
              <div
                className="booking-history-card"
                key={booking.id}
              >

                <div className="booking-history-icon">
                  <Home size={24} />
                </div>

                <div className="booking-history-info">

                  <h3>
                    {booking.propertyName}
                  </h3>

                  <p>
                    <MapPin size={15} />
                    {booking.propertyLocation ||
                      "Location not available"}
                  </p>

                  <p>
                    <CalendarDays size={15} />
                    Move-in: {booking.date}
                  </p>

                  <strong>
                    ₹{Number(
                      booking.propertyPrice || 0
                    ).toLocaleString()}/month
                  </strong>

                </div>

                <div className="booking-history-actions">

                  <span className="status pending">
                    {booking.status}
                  </span>

                  <button
                    onClick={() =>
                      handleDelete(booking.id)
                    }
                    className="delete-booking-btn"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>
      )}

    </main>
  );
}

export default Bookings;
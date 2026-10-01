import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Edit,
  Save,
} from "lucide-react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState(() => {
    return (
      JSON.parse(
        localStorage.getItem("profile")
      ) || {
        name: "Rohith",
        email: "rohith@example.com",
        phone: "+91 XXXXX XXXXX",
        location: "Chennai, Tamil Nadu",
      }
    );
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    setIsEditing(false);
  };

  return (
    <main className="profile-page">

      <div className="profile-header">
        <span>MY ACCOUNT</span>

        <h1>Profile</h1>

        <p>
          Manage your SmartStay profile information.
        </p>
      </div>

      <div className="profile-container">

        <section className="profile-card profile-user">

          <div className="profile-avatar">
            <User size={55} />

            <button>
              <Camera size={16} />
            </button>
          </div>

          <h2>{profile.name}</h2>

          <p>SmartStay Member</p>

          {!isEditing ? (
            <button
              className="edit-profile-btn"
              onClick={() => setIsEditing(true)}
            >
              <Edit size={17} />
              Edit Profile
            </button>
          ) : (
            <button
              className="edit-profile-btn"
              onClick={handleSave}
            >
              <Save size={17} />
              Save Profile
            </button>
          )}

        </section>

        <section className="profile-card">

          <div className="profile-card-header">
            <h2>Personal Information</h2>
          </div>

          <div className="profile-info-grid">

            <div className="profile-info-item">
              <User size={20} />

              <div>
                <span>Full Name</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                  />
                ) : (
                  <strong>{profile.name}</strong>
                )}
              </div>
            </div>

            <div className="profile-info-item">
              <Mail size={20} />

              <div>
                <span>Email Address</span>

                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                ) : (
                  <strong>{profile.email}</strong>
                )}
              </div>
            </div>

            <div className="profile-info-item">
              <Phone size={20} />

              <div>
                <span>Phone Number</span>

                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                ) : (
                  <strong>{profile.phone}</strong>
                )}
              </div>
            </div>

            <div className="profile-info-item">
              <MapPin size={20} />

              <div>
                <span>Location</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                  />
                ) : (
                  <strong>{profile.location}</strong>
                )}
              </div>
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Profile;
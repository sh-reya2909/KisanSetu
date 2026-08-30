import { useState } from "react";

function OfficerDashboard({ onLogout }) {
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [alertType, setAlertType] = useState("Weather Alert");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const farmers = [
    {
      id: 1,
      name: "Ramesh Kumar",
      location: "Bhubaneswar, Odisha",
      crop: "Rice",
      risk: "Low",
    },
    {
      id: 2,
      name: "Suresh Patel",
      location: "Gujarat",
      crop: "Wheat",
      risk: "Moderate",
    },
    {
      id: 3,
      name: "Mohan Das",
      location: "Kalahandi, Odisha",
      crop: "Cotton",
      risk: "High",
    },
  ];

  const sendAlert = () => {
    if (!selectedFarmer) {
      setSuccess("Please select a farmer first.");
      return;
    }

    if (!message.trim()) {
      setSuccess("Please enter an alert message.");
      return;
    }

    const newAlert = {
      id: Date.now(),
      farmerId: selectedFarmer.id,
      farmerName: selectedFarmer.name,
      type: alertType,
      message: message,
      date: new Date().toLocaleString(),
      read: false,
    };

    const existingAlerts =
      JSON.parse(localStorage.getItem("farmerAlerts")) || [];

    localStorage.setItem(
      "farmerAlerts",
      JSON.stringify([...existingAlerts, newAlert])
    );

    setMessage("");
    setSuccess(`Alert sent successfully to ${selectedFarmer.name}!`);

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="officer-page">

      {/* NAVBAR */}
      <nav className="officer-navbar">
        <div className="officer-brand">
          <div className="officer-logo">🌱</div>

          <div>
            <strong>KisanSetu</strong>
            <small>Officer Portal</small>
          </div>
        </div>

        <button className="officer-logout" onClick={onLogout}>
          Logout
        </button>
      </nav>

      {/* CONTENT */}
      <main className="officer-content">

        <div className="officer-heading">
          <div>
            <span>AGRICULTURE DEPARTMENT</span>
            <h1>Officer Dashboard</h1>
            <p>
              Monitor farmers, assess crop risks and send timely alerts.
            </p>
          </div>

          <div className="officer-status">
            🟢 Officer Online
          </div>
        </div>


        {/* STATS */}
        <div className="officer-stats">

          <div className="officer-stat-card">
            <span>👨‍🌾</span>
            <div>
              <small>Registered Farmers</small>
              <strong>{farmers.length}</strong>
            </div>
          </div>

          <div className="officer-stat-card">
            <span>⚠️</span>
            <div>
              <small>High Risk</small>
              <strong>
                {farmers.filter((f) => f.risk === "High").length}
              </strong>
            </div>
          </div>

          <div className="officer-stat-card">
            <span>📢</span>
            <div>
              <small>Alert Centre</small>
              <strong>Active</strong>
            </div>
          </div>

        </div>


        {/* FARMERS */}
        <section className="officer-section">

          <div className="officer-section-title">
            <div>
              <small>FARMER MANAGEMENT</small>
              <h2>Registered Farmers</h2>
            </div>
          </div>


          <div className="farmer-table">

            <div className="farmer-table-header">
              <span>Farmer</span>
              <span>Location</span>
              <span>Crop</span>
              <span>Risk</span>
              <span>Action</span>
            </div>


            {farmers.map((farmer) => (

              <div className="farmer-row" key={farmer.id}>

                <div className="farmer-name">
                  <div className="farmer-avatar">
                    {farmer.name.charAt(0)}
                  </div>

                  <strong>{farmer.name}</strong>
                </div>

                <span>{farmer.location}</span>

                <span>{farmer.crop}</span>

                <span>
                  <b className={`risk-pill ${farmer.risk.toLowerCase()}`}>
                    {farmer.risk}
                  </b>
                </span>

                <button
                  className="alert-button"
                  onClick={() => {
                    setSelectedFarmer(farmer);
                    setSuccess("");
                  }}
                >
                  📢 Send Alert
                </button>

              </div>

            ))}

          </div>

        </section>


        {/* SEND ALERT */}
        <section className="send-alert-section">

          <div className="send-alert-heading">

            <div className="send-alert-icon">
              📢
            </div>

            <div>
              <small>COMMUNICATION CENTRE</small>
              <h2>Send Alert to Farmer</h2>

              <p>
                Send important agricultural updates directly to a farmer.
              </p>
            </div>

          </div>


          {selectedFarmer && (
            <div className="selected-farmer">

              <div className="selected-avatar">
                {selectedFarmer.name.charAt(0)}
              </div>

              <div>
                <small>Sending alert to</small>
                <strong>{selectedFarmer.name}</strong>
                <span>
                  {selectedFarmer.location} • {selectedFarmer.crop}
                </span>
              </div>

            </div>
          )}


          <div className="alert-form">

            <div className="alert-type">

              <label>Alert Type</label>

              <select
                value={alertType}
                onChange={(e) => setAlertType(e.target.value)}
              >
                <option>Weather Alert</option>
                <option>Crop Advisory</option>
                <option>Market Price Alert</option>
                <option>Risk Alert</option>
                <option>General Notice</option>
              </select>

            </div>


            <div className="alert-message">

              <label>Message</label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write an important message for the farmer..."
                rows="4"
              />

            </div>

          </div>


          {success && (
            <div className="alert-success">
              {success}
            </div>
          )}


          <button
            className="send-alert-button"
            onClick={sendAlert}
          >
            📢 Send Alert
          </button>

        </section>

      </main>
    </div>
  );
}

export default OfficerDashboard;
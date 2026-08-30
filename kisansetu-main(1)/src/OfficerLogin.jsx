import { useState } from "react";
import { officers } from "./officerData";

export default function OfficerLogin({ onLogin, onBack }) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  function sendOtp() {
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!officers[mobile]) {
      setError("Officer number not found in demo data.");
      return;
    }

    setError("");
    setOtpSent(true);
  }

  function verifyOtp() {
    const officer = officers[mobile];

    if (!officer || otp !== officer.otp) {
      setError("Invalid OTP.");
      return;
    }

    onLogin(officer);
  }

  return (
    <div className="login-page">
      <div className="login-top">
        <div className="logo">
          🏛️
          <span>KisanSetu</span>
        </div>

        <button className="back-button" onClick={onBack}>
          ← Farmer Portal
        </button>
      </div>

      <div className="login-card officer-login-card">
        <div className="portal-tag">
          KisanSetu Officer Portal
        </div>

        <h1>Officer Login</h1> <br>line</br>

        <p className="login-description">
          Login to monitor farmers and agricultural
          conditions in your assigned region.
        </p>

        <label>Officer Mobile Number</label>

        <input
          type="tel"
          maxLength="10"
          value={mobile}
          placeholder="9000000001"
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, ""))
          }
        />

        {!otpSent ? (
          <button
            className="primary-button"
            onClick={sendOtp}
          >
            Send OTP
          </button>
        ) : (
          <>
            <div className="demo-otp">
              Demo OTP: 1234
            </div>

            <label>Enter OTP</label>

            <input
              type="tel"
              maxLength="4"
              value={otp}
              placeholder="1234"
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, ""))
              }
            />

            <button
              className="primary-button"
              onClick={verifyOtp}
            >
              Login
            </button>
          </>
        )}

        <div className="demo-list officer-demo-list">
          <strong>Demo Officer Login</strong>

          <p>9000000001 → Cuttack</p>
          <p>9000000002 → Bhubaneswar</p>
          <p>9000000003 → Ludhiana</p>
          <p>9000000004 → Nashik</p>
          <p>9000000005 → Hyderabad</p>

          <small>OTP: 1234</small>
        </div>

        {error && (
          <div className="error">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
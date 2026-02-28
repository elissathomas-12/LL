import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('active'); // active, redeeming, or done

  const handleRedeem = () => {
    setStatus('redeeming');
    // Simulate a 1.5 second "loading/verifying" animation
    setTimeout(() => {
      setStatus('done');
    }, 1500);
  };

  return (
    <div className="app-container">
      {status === 'active' && (
        <div className="pass-card">
          <h2>Friday Night Mixer</h2>
          <div className="qr-placeholder">
            {/* Replace with a real QR component later */}
            <div className="mock-qr"></div>
          </div>
          <p>Status: <span className="valid-text">Valid</span></p>
          <button className="redeem-btn" onClick={handleRedeem}>
            REDEEM PASS
          </button>
        </div>
      )}

      {status === 'redeeming' && (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Verifying Pass...</p>
        </div>
      )}

      {status === 'done' && (
        <div className="success-screen">
          <div className="check-icon">✓</div>
          <h1>REDEEMED</h1>
          <p>{new Date().toLocaleTimeString()}</p>
          <button className="back-btn" onClick={() => setStatus('active')}>
            Back to Wallet
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

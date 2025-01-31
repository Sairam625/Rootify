import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const ticker = document.querySelector('.ticker-content');
    ticker.innerHTML = ticker.innerHTML + ' | ' + ticker.innerHTML;
  }, []);

  return (
    <div className="home-page">
      <div className="news-ticker">
        <div className="ticker-content">
          <span>Wheat:</span> ₹2,500/quintal |
          <span>Rice:</span> ₹3,200/quintal |
          <span>Cotton:</span> ₹6,000/quintal |
          <span>Breaking News:</span> New government subsidy announced for organic farming |
          <span>Weather Alert:</span> Expected rainfall in Northern regions
        </div>
      </div>

      <div className="main-content">
        <a href="disaster.html" className="block">
          <div className="block-icon">🚨</div>
          <h2>Disaster Management</h2>
          <p>Get real-time alerts and guidance for managing agricultural disasters.</p>
        </a>

        <a href="loans.html" className="block">
          <div className="block-icon">💰</div>
          <h2>Loans & Subsidies</h2>
          <p>Explore available agricultural loans and government subsidies.</p>
        </a>

        <a href="market.html" className="block">
          <div className="block-icon">📊</div>
          <h2>Market Rates</h2>
          <p>Live market prices for crops, vegetables, and fruits.</p>
        </a>

        <a href="history.html" className="block">
          <div className="block-icon">🌾</div>
          <h2>Crop History</h2>
          <p>Track your farming history and analyze crop patterns.</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
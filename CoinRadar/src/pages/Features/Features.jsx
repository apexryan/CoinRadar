import React from "react";
import "./Features.css";
import {
  FaChartLine,
  FaRegBell,
  FaWallet,
  FaLock,
  FaMobile,
  FaChartBar,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Real-Time Analytics",
      description:
        "Track cryptocurrency prices and market trends in real-time with advanced charting tools.",
    },
    {
      icon: <FaRegBell />,
      title: "Price Alerts",
      description:
        "Set custom alerts for price changes and receive instant notifications.",
    },
    {
      icon: <FaWallet />,
      title: "Portfolio Tracking",
      description:
        "Monitor your crypto portfolio performance with detailed insights and analytics.",
    },
    {
      icon: <FaLock />,
      title: "Secure Platform",
      description:
        "Enterprise-grade security to keep your data safe and protected.",
    },
    {
      icon: <FaMobile />,
      title: "Mobile Access",
      description:
        "Access your dashboard anywhere with our mobile-responsive platform.",
    },
    {
      icon: <FaChartBar />,
      title: "Market Analysis",
      description:
        "Comprehensive market analysis tools and historical data visualization.",
    },
  ];

  return (
    <div className="features">
      <div className="features-header">
        <h1>Our Features</h1>
        <p>
          Discover the tools that make CoinRadar your best choice for crypto
          tracking
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

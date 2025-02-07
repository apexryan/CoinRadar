import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="hero">
        <div className="welcome-text">
          <span>Largest</span>
          <h1>Crypto Marketplace</h1>
        </div>
        <p>The best place to track your favorite cryptocurrencies.</p>
        <form>
          <input type="text" placeholder="Search for a coin" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24h Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

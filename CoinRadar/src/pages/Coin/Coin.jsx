import React from "react";

import { useParams } from "react-router-dom";

import "./Coin.css";

const Coin = () => {
  const { coinId } = useParams();

  return (
    <div className="coin-container">
      <h1>Coin</h1>

      <p>Coin ID: {coinId}</p>
    </div>
  );
};

export default Coin;

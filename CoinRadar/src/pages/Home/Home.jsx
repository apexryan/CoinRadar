import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import strip from "../../assets/strip.png";

import "./Home.css";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="Home">
      <div className="hero">
        <div className="welcome-text">
          <span>Welcome to</span>
          <h1 className="typewriter">CoinRadar!</h1>
        </div>
        <p>The best place to track your favorite cryptocurrencies.</p>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search for a coin"
            required
          />
          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>

      <img
        src={strip}
        alt="Decorative image"
        style={{
          width: "100%",
          maxWidth: "1920px",
          height: "auto",
          margin: "3rem auto",
          display: "block",
        }}
      />

      <div className="crypto-table">
        <div className="table-layout">
          <p>RANK</p>
          <p>NAME</p>
          <p>PRICE</p>
          <p style={{ textAlign: "center" }}>24H CHANGE</p>
          <p className="market-cap">MARKET CAP</p>
        </div>
        {displayCoin.slice(0, 50).map((item, index) => (
          <Link to className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

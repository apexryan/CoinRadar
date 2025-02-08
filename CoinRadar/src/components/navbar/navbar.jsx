import React, { useContext } from "react";
import "./navbar.css";
import cr from "../../assets/cr.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "inr":
        {
          setCurrency({ name: "inr", symbol: "₹" });
        }
        break;

      case "eur":
        {
          setCurrency({ name: "eur", symbol: "€" });
        }
        break;
      case "usd":
        {
          setCurrency({ name: "usd", symbol: "$" });
        }
        break;
      default:
        {
          setCurrency({ name: "inr", symbol: "₹" });
        }
        break;
    }
  };

  return (
    <div className="navbar">
      <img src={cr} alt="" className="logo" />
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/features"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Pricing
          </Link>
        </li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
        </select>
        <button
          onClick={() => window.open("https://github.com/apexryan", "_blank")}
        >
          My Github <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default navbar;

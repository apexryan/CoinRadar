import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "FREE",
      period: "/FOREVER",
      features: [
        { text: "Searchable archive message up to 10K", included: true },
        { text: "10 apps or service integrations", included: false },
        { text: "5GB total file storage", included: false },
        { text: "Free Updates per month", included: false },
      ],
    },
    {
      name: "Advanced",
      price: "$99.00",
      period: "/MONTH",
      features: [
        { text: "Searchable archive message up to 10K", included: true },
        { text: "10 apps or service integrations", included: true },
        { text: "5GB total file storage", included: false },
        { text: "Free Updates per month", included: false },
      ],
    },
    {
      name: "Team",
      price: "$149.00",
      period: "/MONTH",
      features: [
        { text: "Searchable archive message up to 10K", included: true },
        { text: "10 apps or service integrations", included: true },
        { text: "5GB total file storage", included: true },
        { text: "Free Updates per month", included: true },
      ],
    },
  ];

  return (
    <div className="pricing">
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2>{plan.name}</h2>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="period">{plan.period}</span>
            </div>
            <div className="features">
              {plan.features.map((feature, featureIndex) => (
                <div className="feature" key={featureIndex}>
                  {feature.included ? (
                    <span className="check">✓</span>
                  ) : (
                    <span className="cross">✕</span>
                  )}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

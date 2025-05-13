import React from "react";
import "./Pricing.css";

const plans = [
  {
    icon: "/Images/pricing1.jpeg", //
    badge: "Subscription",
    badgeColor: "#222", 
    title: "Tactile",
    desc: "Great for teams who work in weekly sprints, and need design and strategy support for improving existing areas or developing new features of their product",
    price: "£7,500",
    priceNote: "/Month",
    features: [
      "Dedicated Senior Designer",
      "Weekly Sprint Call",
      "Async Loom updates",
      "Unlimited slack comms",
      "Dedicated Design Director",
      "Scalable with your needs",
    ],
    btn: "Book a call",
  },
  {
    icon: "/Images/pricing2.jpeg",
    badge: "Subscription",
    badgeColor: "#222",
    title: "Immersive",
    desc: "For teams who alongside product work need support on brand, marketing and website design & build.",
    price: "£15,500",
    priceNote: "/Month",
    features: [
      "Access to our full team",
      "Daily Standups",
      "Async Loom updates",
      "Unlimited slack comms",
      "Dedicated Design Director",
      "Scalable with your needs",
    ],
    btn: "Book a call",
  },
  {
    icon: "/Images/pricing3.jpeg",
    badge: "Fast Turnaround",
    badgeColor: "#d1430c",
    title: "Sprint",
    desc: "2 weeks to deliver a product feature, brand or landing page. A dedicated team of vertical specialists will be assigned to deliver incredible results at breakneck speed.",
    price: "£10,000",
    priceNote: "",
    features: [
      "A specially curated team",
      "Weekly Sprint Call",
      "Async Loom updates",
      "Unlimited slack comms",
      "Dedicated Design Director",
      "Scalable with your needs",
      "Pause or cancel anytime",
    ],
    btn: "Book a call",
  },
];

const Pricing = () => (

  <section className="pricing-section">
    <div style={{textAlign:"start", paddingLeft:"2%", color:"white", paddingTop:"5px"}}> <li> Pricing + Contact</li> </div>
    <div className="plans-container">
      {plans.map((plan, idx) => (
        <div className="plan-card" key={plan.title}>
          <div className="plan-header">
            <img src={plan.icon} alt="" className="plan-icon" />
            <span className="plan-badge" style={{ background: plan.badgeColor }}>
              {plan.badge}
            </span>
          </div>
          <h2 className="plan-title">{plan.title}</h2>
          <div className="plan-desc">{plan.desc}</div>
          <div className="plan-price">
            <span>{plan.price}</span>
            <span className="plan-price-note">{plan.priceNote}</span>
          </div>
          <button className="plan-btn">{plan.btn}</button>
          <ul className="plan-features">
            {plan.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;

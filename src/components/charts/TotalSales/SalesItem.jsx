import React from "react";

const SalesItem = ({ icon, tag, amount }) => (
  <div className="sales-item">
    <div className="sales-tag">
      <img src={icon} alt="" className="tag-icon" />
      <span className="tag-text">{tag}</span>
    </div>
    <div className="sales-amount">{amount}</div>
  </div>
);

export default SalesItem;

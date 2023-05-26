import React from "react";
import data from "./data.js";
import Card from "./Card";

export default function App() {
  const cardData = data.map((card) => {
    return <Card {...card} />;
  });
  return (
    <div>
      <h3>{cardData}</h3>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Laptops from "./Laptops";
import "./Overview.scss";

const Overview = () => {
  const [laptops, setLaptops] = useState([]);

  // Gets laptops once the app starts
  useEffect(() => {
    getLaptops();
  }, []);

  // Retrieves the list of items from the Express server
  const getLaptops = () => {
    fetch("https://alexmaa5.herokuapp.com/api/getLaptops")
      .then((res) => res.json())
      .then((laptop) => setLaptops(laptop));
  };

  return (
    <div className="overview">
      <h1 className="overview__heading">Laptop Store</h1>
      {laptops.map((laptop) => (
        <Laptops
          key={laptop.id}
          image={laptop.image}
          name={laptop.productName}
          screen={laptop.screen}
          cpu={laptop.cpu}
          price={laptop.price}
          id={laptop.id}
        />
      ))}
    </div>
  );
};

export default Overview;

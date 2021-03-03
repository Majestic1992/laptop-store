import React, { useState, useEffect } from "react";
import Laptops from "./Laptops";
import "./Overview.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Overview = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);

  // Gets laptops once the app starts
  useEffect(() => {
    getLaptops();
  }, []);

  // Retrieves the list of items from the Express server
  const getLaptops = () => {
    fetch("https://alexmaa5.herokuapp.com/api/getLaptops")
      .then((res) => res.json())
      .then((laptop) => setLaptops(laptop))
      .then(setLoading(!loading));
  };

  return (
    <div>
      {loading === true ? (
        <LoadingSpinner />
      ) : (
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
      )}
    </div>
  );
};

export default Overview;

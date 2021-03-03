import React from "react";
import "./Laptops.scss";
import { Link } from "react-router-dom";

const Laptops = ({ name, image, screen, cpu, price, id }) => {
  const url = "/laptop" + id;

  return (
    <div className="laptops">
      <img
        src={`https://alexmaa5.herokuapp.com/${image}`}
        alt="laptop image"
        className="laptops__image"
      />
      <h2 className="laptops__name">{name}</h2>
      <div className="laptops__screen">
        <span className="emoji" role="img" aria-label="screen">
          💻
        </span>
        {screen}
      </div>
      <div className="laptops__cpu">
        {" "}
        <span className="emoji" role="img" aria-label="processor">
          🖥
        </span>
        {cpu}
      </div>
      <div className="laptops__footer">
        <span className="laptops__footer--price">${price}</span>
        <Link to={url} className="laptops__footer--button">
          <button>Learn more</button>
        </Link>
      </div>
    </div>
  );
};

export default Laptops;

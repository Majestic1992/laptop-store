import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./DetailedView.scss";

const DetailedView = ({ id }) => {
  const [laptop, setLaptop] = useState([]);
  const [loading, setLoading] = useState(true);

  // Gets laptop once the page loads
  useEffect(() => {
    getLaptop();
  }, []);

  // Retrieves the list of items from the Express server
  const getLaptop = async () => {
    const response = await fetch(
      "https://alexmaa5.herokuapp.com/api/getLaptops"
    );
    const data = await response.json();
    setLaptop(data);
    setLoading(!loading);
  };

  return (
    <div className="details">
      {loading === true ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1 className="details__heading">Laptop Store</h1>
          {laptop
            .filter((laptop) => laptop.id == id)
            .map((laptop) => (
              <div className="card" key={laptop.id}>
                <div className="card__header">
                  <Link to="/" className="card__header--button">
                    <button>Go back</button>
                  </Link>
                  <span className="card__header--price">${laptop.price}</span>
                  <img
                    className="card__header--image"
                    src={`https://alexmaa5.herokuapp.com/${laptop.image}`}
                  ></img>
                </div>

                <h2 className="card__name">{laptop.productName}</h2>
                <div className="card__specs">
                  <div className="card__specs--screen">
                    <span className="emoji" role="img" aria-label="screen">
                      💻
                    </span>
                    {laptop.screen}
                  </div>
                  <div className="card__specs--cpu">
                    {" "}
                    <span className="emoji" role="img" aria-label="processor">
                      🖥
                    </span>
                    {laptop.cpu}
                  </div>
                  <div className="card__specs--storage">
                    {" "}
                    <span className="emoji" role="img" aria-label="processor">
                      💾
                    </span>
                    {laptop.storage} of storage
                  </div>
                  <div className="card__specs--ram">
                    {" "}
                    <span className="emoji" role="img" aria-label="processor">
                      📦
                    </span>
                    {laptop.ram} of RAM
                  </div>
                </div>

                <p className="card__description">{laptop.description}</p>

                <p className="card__source">
                  Source:{" "}
                  <a
                    href="https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361"
                    target="blank"
                  >
                    https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361
                  </a>
                </p>
                <button className="card__button">
                  Buy now for ${laptop.price}
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DetailedView;

{
  /* <div className="details">
      <h1 className="details__heading">Laptop Store</h1>
      {laptop
        .filter((laptop) => laptop.id == id)
        .map((laptop) => (
          <div className="card" key={laptop.id}>
            <div className="card__header">
              <Link to="/" className="card__header--button">
                <button>Go back</button>
              </Link>
              <span className="card__header--price">${laptop.price}</span>
              <img
                className="card__header--image"
                src={`https://alexmaa5.herokuapp.com/${laptop.image}`}
              ></img>
            </div>

            <h2 className="card__name">{laptop.productName}</h2>
            <div className="card__specs">
              <div className="card__specs--screen">
                <span className="emoji" role="img" aria-label="screen">
                  💻
                </span>
                {laptop.screen}
              </div>
              <div className="card__specs--cpu">
                {" "}
                <span className="emoji" role="img" aria-label="processor">
                  🖥
                </span>
                {laptop.cpu}
              </div>
              <div className="card__specs--storage">
                {" "}
                <span className="emoji" role="img" aria-label="processor">
                  💾
                </span>
                {laptop.storage} of storage
              </div>
              <div className="card__specs--ram">
                {" "}
                <span className="emoji" role="img" aria-label="processor">
                  📦
                </span>
                {laptop.ram} of RAM
              </div>
            </div>

            <p className="card__description">{laptop.description}</p>

            <p className="card__source">
              Source:{" "}
              <a
                href="https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361"
                target="blank"
              >
                https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361
              </a>
            </p>
            <button className="card__button">
              Buy now for ${laptop.price}
              </div>
        ))}
              </button>
    </div>
 */
}

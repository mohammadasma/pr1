

import React, { useEffect, useState } from "react";
import '../styles/ecom.css';  // Make sure to add this CSS file

function Ecom() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setData(data);
    console.log(data);
  }

  // Handle Place Order button click
  const handlePlaceOrder = (itemTitle) => {
    alert(`Your order for ${itemTitle} has been placed!`);
  };

  return (
    <div className="ecom-container">
      <h2>Welcome to Our E-commerce Store</h2>
      <div className="ecom-items">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="ecom-card">
              
              <img src={item.image} alt={item.title} className="product-image" />
              <h4>{item.title}</h4>
              
              <div className="price">{item.price}</div>
              <button
                className="order-button"
                onClick={() => handlePlaceOrder(item.title)}
              >
                Place Order
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default Ecom;



 
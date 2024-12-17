import React from "react";
import '../styles/medical.css';  // Make sure to add this file for styling

function MedicalProducts() {
  // Sample medical products with price and purchasing functionality
  const medicalProducts = [
    {
      image:'https://th.bing.com/th?id=OIP.muTcXhIDmQNeMppcEugaVQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Pain Reliever',
      description: 'Fast-acting pain reliever for headaches and body pain.',
      price: '$10.99',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.DLWBHyYhes_A16bH9ayz2AHaHz&w=243&h=256&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Cough Syrup',
      description: 'Soothing syrup for cough relief and throat irritation.',
      price: '$7.49',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.VHQ2vXlMe-DHnx-ImU9QDQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Vitamin C Tablets',
      description: 'Boost your immune system with Vitamin C supplements.',
      price: '$15.99',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.ABCDEF12345&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'First Aid Kit',
      description: 'Complete first aid kit for home or travel.',
      price: '$29.99',
    },
  ];

  // Handle Purchase button click
  const handlePurchase = (productTitle) => {
    alert(`Your purchase for ${productTitle} has been placed!`);
  };

  return (
    <div className="medical-products-container">
      <h2>Medical Products</h2>
      <div className="medical-products">
        {medicalProducts.map((product, index) => (
          <div key={index} className="medical-product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
            <button 
              className="purchase-button" 
              onClick={() => handlePurchase(product.title)}
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicalProducts;


 
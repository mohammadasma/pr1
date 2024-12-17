import React from "react";
import '../styles/fastfood.css';  // Make sure to add this file for styling

function FastFood() {
  // Sample fast food items with price and order functionality
  const fastFoodItems = [
    {
      image: 'https://th.bing.com/th?id=OIP.kvb7ADFLeYKt438onPXMZAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Burger',
      description: 'Delicious beef burger with cheese, lettuce, and tomatoes.',
      price: '$8.99',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.kvb7ADFLeYKt438onPXMZAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Pizza',
      description: 'Classic pizza topped with mozzarella, tomatoes, and basil.',
      price: '$12.49',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.kvb7ADFLeYKt438onPXMZAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'French Fries',
      description: 'Crispy golden fries served with ketchup.',
      price: '$3.99',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.kvb7ADFLeYKt438onPXMZAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Hot Dog',
      description: 'Juicy hot dog in a soft bun with mustard and ketchup.',
      price: '$5.49',
    },
  ];

  // Handle Place Order button click
  const handlePlaceOrder = (itemTitle) => {
    alert(`Your order for ${itemTitle} has been placed!`);
  };

  return (
    <div className="fastfood-container">
      <h2>Fast Food Delivery</h2>
      <div className="fastfood-items">
        {fastFoodItems.map((item, index) => (
          <div key={index} className="fastfood-card">
            <img src={item.image} alt={item.title} className="food-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="price">{item.price}</div>
            <button 
              className="order-button" 
              onClick={() => handlePlaceOrder(item.title)}
            >
              Place Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FastFood;



 
 
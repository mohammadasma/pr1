// src/components/Services.js
import React from 'react';
 import '../styles/services.css'; // Make sure this file exists for styling

function Services() {
  // Sample services array
  const services = [
    { 
      image: 'https://th.bing.com/th?id=OIP.kvb7ADFLeYKt438onPXMZAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Fast Food',
      description: 'Quick, easy, and delicious meals delivered to you in minutes!' 
    },
    { 
      image: 'https://th.bing.com/th?id=OIP.kvb7ADFLeYKt438onPXMZAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'E-commerce',
      description: 'Seamless e-commerce platform with fast delivery and real-time tracking.' 
    },
    { 
      image: 'https://th.bing.com/th?id=OIP.kvb7ADFLeYKt438onPXMZAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Medical',
      description: 'Get your medical supplies delivered quickly and safely when you need them most.' 
    },
    { 
      image: 'https://th.bing.com/th?id=OIP.kvb7ADFLeYKt438onPXMZAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: '24/7 Services',
      description: 'Our team is available around the clock to assist with any needs or issues.' 
    }
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

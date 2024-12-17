 // src/components/AboutPage.js
 import React from "react";
 import '../styles/about.css';  // Make sure to create a corresponding CSS file
 
 function AboutPage() {
   return (
     <div className="about-container">
       <h2>About Us</h2>
       <p className="intro">
         Welcome to Drone Delivery, your go-to service for quick, reliable, and efficient drone deliveries. We provide fast, secure, and contactless delivery solutions for a variety of needs—whether it's food, medical supplies, or e-commerce products. Our mission is to revolutionize the way goods are delivered, making it faster and more convenient for everyone.
       </p>
 
       <section className="mission">
         <h3>Our Mission</h3>
         <p>
           At Drone Delivery, our mission is to change the delivery landscape using drone technology. We aim to provide the fastest, most efficient, and environmentally friendly delivery services available. With cutting-edge technology, we can get your goods to you in record time.
         </p>
       </section>
 
       <section className="vision">
         <h3>Our Vision</h3>
         <p>
           Our vision is to create a world where drone technology plays a pivotal role in transforming logistics and delivery services globally. We aspire to make the delivery experience faster, safer, and more convenient, eliminating traditional barriers and offering unparalleled service.
         </p>
       </section>
 
       <section className="team">
         <h3>Meet the Team</h3>
         <div className="team-members">
           <div className="team-member">
             <img
               src="https://via.placeholder.com/150"
               alt="Team Member 1"
               className="team-image"
             />
             <h4>John Doe</h4>
             <p>CEO & Founder</p>
           </div>
           <div className="team-member">
             <img
               src="https://via.placeholder.com/150"
               alt="Team Member 2"
               className="team-image"
             />
             <h4>Jane Smith</h4>
             <p>COO</p>
           </div>
           <div className="team-member">
             <img
               src="https://via.placeholder.com/150"
               alt="Team Member 3"
               className="team-image"
             />
             <h4>Mark Johnson</h4>
             <p>CTO</p>
           </div>
         </div>
       </section>
 
       <section className="contact">
         <h3>Contact Us</h3>
         <p>If you have any questions, feel free to reach out to us at:</p>
         <p>Email: <a href="mailto:contact@dronedelivery.com">contact@dronedelivery.com</a></p>
         <p>Phone: +1 800-123-4567</p>
       </section>
     </div>
   );
 }
 
 export default AboutPage;
 
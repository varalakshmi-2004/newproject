import React from "react";
import "./contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Form submitted successfully!");
    e.target.reset();
  };
 
  return (
    <div className="contact-us">
      <div className="contact-overlay">
        {/* Small Hospital Logo */}
        <div className="logo-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
            alt="Hospital Logo"
            className="hospital-logo"
          />
        </div>

        <h2>We’re Here to Help!</h2>
        <p>Your health matters to us. Reach out anytime!</p>
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className="contact-info">
          <p>📞 Call us: +91-XXXXXXXXXX</p>
          <p>✉ Email: support@yourhealthsite.com</p>
          <p>🏥 Address: 123 Wellness Street, City</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
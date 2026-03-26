import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side - Contact Form */}
        <div className="contact-form-wrapper">
          <div className="contact-header">
            <h2>Get in Contact</h2>
            <p>Send me a message and I'll get back to you</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-input"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact-textarea"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="contact-submit-btn">
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
        
        {/* Right Side - Personal Information */}
        <div className="contact-info-sidebar">
          <div className="personal-info-card">
            <div className="name-display">DHRUVI PATEL</div>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-label">Email Address</div>
                <div className="detail-value">Dhruvipatel2134@gmail.com</div>
              </div>
              
              <div className="contact-detail-item">
                <div className="detail-label">Contact Number</div>
                <div className="detail-value">9582384990</div>
              </div>
              
              <div className="contact-detail-item">
                <div className="detail-label">Address</div>
                <div className="detail-value">Patan, Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React from "react";
import PaymentModal from "../components/PaymentModal";
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

function Delivery({ basket }) {
  const [paymentModalShown, setPaymentModalShown] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    address: "",
    city: "",
    zip_code: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/create-delivery/", formData);
      console.log(response.data); // Serverdən gələn cavabı göstər
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="contact_form delivery_form container">
      <div className="delivery_title">
        <h5>Delivery</h5>
        <h3>Delivery Information</h3>
      </div>

      <div className="form">
        <form method="post" onSubmit={handleSubmit}>
        <div data-aos="fade-up" className="form_row">
          <div className="form_form">
            <label htmlFor="full_name" className="form_label">
              Full Name*
            </label>
            <input
              type="text"
              className="form_input"
              maxLength="256"
              placeholder="Enter Your Name"
              id="full_name"
              // required
              value={formData.name}
              onChange={handleInputChange}
              name="full_name"
            />
          </div>
          <div className="form_form">
            <label htmlFor="email" className="form_label">
              Email Address*
            </label>
            <input
              type="email"
              className="form_input"
              maxLength="256"
              placeholder="Enter Your Email"
              id="email"
              // required
              value={formData.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
        </div>
        <div data-aos="fade-up" className="form_row">
          <div className="form_form">
            <label htmlFor="address" className="form_label">
              Address*
            </label>
            <input
              type="text"
              className="form_input"
              maxLength="256"
              placeholder="Enter Address"
              id="address"
              // required
              value={formData.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>
          <div className="form_form">
            <label htmlFor="city" className="form_label">
              City*
            </label>
            <input
              type="text"
              className="form_input"
              maxLength="256"
              placeholder="Enter City Name"
              id="city"
              // required
              value={formData.city}
              onChange={handleInputChange}
              name="city"
            />
          </div>
        </div>
        <div data-aos="fade-up" className="form_row">
          <div className="form_form">
            <label htmlFor="zip_code" className="form_label">
              Zip Code*
            </label>
            <input
              type="number"
              className="form_input"
              maxLength="3"
              placeholder="Enter Zip Code"
              id="zip_code"
              
              value={formData.zip_code}
              onChange={handleInputChange}
              name="zip_code"
            />
          </div>
          <div className="form_form">
            <label htmlFor="phone" className="form_label">
              Phone*
            </label>
            <input
              type="number"
              className="form_input"
              maxLength="12"
              placeholder="Enter Your Phone"
              id="phone"
              
              value={formData.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>
        </div>

        <div data-aos="fade-up" className="form_message">
          <label htmlFor="message" className="form_label">
            Message
          </label>
          <textarea
            placeholder="Hello There, I would like to..."
            maxLength="5000"
            id="message"
            className="input_textarea"
            
            value={formData.message}
            onChange={handleInputChange}
            name="message"
          ></textarea>
        </div>
        <button
          onClick={() => setPaymentModalShown(!paymentModalShown)}
          className="blue_btn"
        >
          <p >Continue to Payment</p>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
       </form> 
      </div>
      {paymentModalShown && (
        <PaymentModal
          paymentModalShown={paymentModalShown}
          setPaymentModalShown={setPaymentModalShown}
        />
      )}
    </section>
  );
}

export default Delivery;

import React, { useReducer, useEffect, useState } from "react";
import Modal from "react-modal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openModal = (title, message) => {
    setModalContent({ title, message });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent({
      title: "",
      message: ""
    });
    setFormData({
      name: "",
    email: "",
    message: ""
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        openModal("Success", "Thank you! Your contact information has been saved.");
      } else {
        openModal("Error", "Formu göndermek mümkün olmadı: " + data.error);
      }
    } catch (error) {
      openModal("Error", "Formu göndermek mümkün olmadı: " + error.message);
    }
  };
  return (
    <>
      <section className="contact_banner full-container"></section>
      <section className="find_out container">
        <div data-aos="fade-up" className="find_out_image">
          <img src="/static/find_out_img.jpg" />
        </div>
        <div className="find_out_content">
          <div data-aos="fade-up" className="find_out_title">
            <h3>We'd love to talk about how we can work together.</h3>
            <p>
              We value partnerships and are excited about the prospect of
              working with you to promote organic products and sustainable
              agriculture.Let's join forces and make a difference in the world
              of organic farming. We're eager to explore how we can work
              together.
            </p>
          </div>
          <div className="find_out_info">
            <div data-aos="fade-up" className="info_item">
              <div className="info_item_icon">
                <img src="/static/message.png" />
              </div>
              <div className="info_item_text">
                <h4>Massege</h4>
                <a href="mailto:organickfood@gmail.com">organickfood@gmail.com</a>
              </div>
            </div>

            <div data-aos="fade-up" className="info_item">
              <div className="info_item_icon">
                <img src="/static/phone.png" />
              </div>
              <div className="info_item_text">
                <h4>Contact Us</h4>
                <a href="tel:666 888 888">666 888 888</a>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="contact_social">
            <a href="https://www.facebook.com/">
              <img src="/static/facebook.png" />
            </a>
            <a href="https://twitter.com/">
              <img src="/static/Twiter.png" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/static/Insta.png" />
            </a>
            <a href="https://www.pinterest.com/">
              <img src="/static/Pintrest.png" />
            </a>
          </div>
        </div>
      </section>
      <section className="location_section container">
        <div data-aos="fade-up" className="location_content">
          <div data-aos="fade-up" className="location_title">
            <h5>Location</h5>
            <h3>Our Farms</h3>
            <p>
              With farms located in various regions, we are able to offer a wide
              variety of organic produce all year round.
            </p>
          </div>
          <div className="location_about">
            <div data-aos="fade-up" className="location_adress">
              <div className="location_icon">
                <img src="/static/location_icon.png" />
              </div>
              <div className="location_text">
                <h6 className="adress_title">New York, USA:</h6>
                <a href="https://yandex.ru/maps/?ll=-120.373962%2C38.548978&pt=-120.3774722%2C38.54440556&source=entity_search&z=13.41">299 Park Avenue New York, New York 10171</a>
              </div>
            </div>

            <div data-aos="fade-up" className="location_adress">
              <div className="location_icon">
                <img src="/static/location_icon.png" />
              </div>
              <div className="location_text">
                <h6 className="adress_title">London, UK:</h6>
                <a href="https://yandex.ru/maps/?ll=-120.373962%2C38.548978&pt=-120.3774722%2C38.54440556&source=entity_search&z=13.41">30 Stamford Street, London SE1 9LQ</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_form container">
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
                required
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="form_form">
              <label htmlFor="full_email" className="form_label">
                Email Address*
              </label>
              <input
                type="email"
                className="form_input"
                
                maxLength="256"
                placeholder="Enter Your Email"
                id="full_email"
                required
                value={formData.email}
                onChange={handleChange}
                name="email"
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
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button data-aos="fade-up" className="blue_btn">
            <p>Send Message</p>
            <i className="fa-solid fa-circle-arrow-right"></i>
          </button>
        </form>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Message Modal"
        className="modal"
      >
        <h2>{modalContent.title}</h2>
        <p>{modalContent.message}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Contact;

import { useParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";

function Info() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    image: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "image") {
      setData({ ...data, [e.target.name]: e.target.files[0] });
      return;
    }
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    fetch("http://127.0.0.1:8000/api/accounts/infos/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization:`Bearer ${localStorage.getItem("accessToken")}`
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((a) => {
        console.log(a);
      });
  };

  return (
    <>
      <section className="info_first full-container">
        <p>Profile</p>
      </section>
      <section className="info_second container">

        <form method="post" onSubmit={handleSubmit}>
          <div className="info_flex">
          <div className="login-input-title">
            <div className="user_name ">
              <label className="form_label" htmlFor="name ">Your name*</label>
              <input
                onChange={handleInput}
                id="info-name"
                name="name"
                value={data.name}
                type="text"
                placeholder="Enter your name..."
              />
            </div>
          </div>

          <div className="login-input-title">
            <div className="user_surname ">
              <label className="form_label" htmlFor="surname">Your surname*</label>
              <input
                onChange={handleInput}
                id="surname"
                name="surname"
                value={data.surname}
                type="text"
                placeholder="Enter your surname..."
              />
            </div>
          </div>
          <div className="">
            <div className="user_image">
              
              <input
                onChange={handleInput}
                id="image"
                name="image"
                type="file"
                placeholder="Enter your surname..."
              />
            </div>
          </div>
          
          <button className="blue_btn">
                <p>Save</p>
                {/* <i className="fa-solid fa-circle-arrow-right"></i> */}
              </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Info;

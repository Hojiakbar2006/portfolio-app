import React from "react";
import "./Contact.css";
import instagram from "../../Assets/Imgs/instagram.svg";
import facebook from "../../Assets/Imgs/facebook.svg";
import telegram from "../../Assets/Imgs/telegram.svg";
import github from "../../Assets/Imgs/github.svg";
import phoneIcon from "../../Assets/Imgs/phone.svg";
import locateIcon from "../../Assets/Imgs/locate.svg";
import mailIcon from "../../Assets/Imgs/mail.svg";

export default function Contact() {
  const ctDate = [
    {
      inform: "+998 (99) 325 0628",
      phone: "tel:+998993250628",
      img: phoneIcon,
    },
    {
      inform: "@hojiakbarni0628@icloud.com",
      img: mailIcon,
    },
    {
      inform: "House No:07, region:Uchkurgan, street: Gulistan",
      img: locateIcon,
    },
  ];
  const linkDate = [
    {
      link: "https://github.com/Hojiakbar2006",
      img: github,
    },
    {
      link: "https://github.com/Hojiakbar2006",
      img: facebook,
    },
    {
      link: "https://t.me/hojiakbar_0628",
      img: telegram,
    },
    {
      link: "https://www.instagram.com/hojiakbar____0628/",
      img: instagram,
    },
  ];

  return (
    <div id="contact" name="Contact">
      <h1>Contact</h1>
      <div className="contact-card">
        <div className="formContact">
          <div className="left">
            {ctDate.map((item, i) => {
              return (
                <a key={i} href={item.phone || item.inform}>
                  <img src={item.img} alt="" />
                  <p>{item.inform}</p>
                </a>
              );
            })}
          </div>
          <form
            className="right"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              alert(`name:${name}, email:${email}, message:${message}`);
            }}
          >
            <input placeholder="Name" name="name" type="text" />
            <input placeholder="Email" name="email" type="text" />
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div id="footer">
          <div className="line"></div>
          <div className="itemCard">
            <img style={{ cursor: "pointer" }} src="./logo.svg" alt="" />
            <div className="linkCard">
              {linkDate.map((item, i) => {
                return (
                  <a key={i} target="blank" href={item.link}>
                    <img src={item.img} alt="" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

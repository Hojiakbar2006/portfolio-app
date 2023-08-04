import React from "react";
import "./Colleagues.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

export default function Colleagues() {
  function SampleNextArrow(props) {
    let theme = useSelector((state) => state.theme);
    const { className, onClick } = props;
    return (
      <svg
        onClick={onClick}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id="right-arrow"
        fill={theme ? "#000" : "#fff"}
      >
        <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
      </svg>
    );
  }
  function SamplePrevArrow(props) {
    let theme = useSelector((state) => state.theme);
    const { className, onClick } = props;
    return (
      <svg
        onClick={onClick}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id="left-arrow"
        fill={theme ? "#000" : "#fff"}
      >
        <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path>
      </svg>
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container">
      <section id="colleagues">
        <h1>My Colleagues</h1>
        <Slider {...settings}>
          <div className="profile-card">
            <div className="img-card">
              <figure></figure>
              <div className="overlay"></div>
            </div>
            <div className="content">
              <h3 className="title">Omadbek</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                labore unde error dignissimos!
              </p>
            </div>

            <button className="btn-card">Learn more</button>
          </div>
          <div className="profile-card">
            <div className="img-card">
              <figure></figure>
              <div className="overlay"></div>
            </div>
            <div className="content">
              <h3 className="title">Omadbek</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                labore unde error dignissimos!
              </p>
            </div>

            <button className="btn-card">Learn more</button>
          </div>
          <div className="profile-card">
            <div className="img-card">
              <figure></figure>
              <div className="overlay"></div>
            </div>
            <div className="content">
              <h3 className="title">Omadbek</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                labore unde error dignissimos!
              </p>
            </div>

            <button className="btn-card">Learn more</button>
          </div>
          <div className="profile-card">
            <div className="img-card">
              <figure></figure>
              <div className="overlay"></div>
            </div>
            <div className="content">
              <h3 className="title">Omadbek</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                labore unde error dignissimos!
              </p>
            </div>

            <button className="btn-card">Learn more</button>
          </div>
        </Slider>
      </section>
    </div>
  );
}

import "./belt.css";
import React from "react";
import img_jeju from "../img/img_jeju.png";
import img_seoul from "../img/img_seoul.png";
import img_busan from "../img/img_busan.png";

const slides = [
  { src: img_busan, text: "BUSAN" },
  { src: img_seoul, text: "SEOUL" },
  { src: img_jeju, text: "JEJU" },
];
function ContainerBelt() {
  return (
    <div className="slider-container2">
      <div className="slider2">
        <div className="slide-track2">
          {slides.map((slide, index) => (
            <div className="slide2" key={index}>
              <img src={slide.src} height="100" width="250" alt={slide.text} />
              <span className="unbounded-font" style={{ fontSize: "1.9792vw" }}>
                {slide.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ContainerBelt;

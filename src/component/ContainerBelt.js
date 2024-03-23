import "./belt.css";
import React from "react";
import img_jeju from "../img/img_jeju.png";
import img_seoul from "../img/img_seoul.png";
import img_busan from "../img/img_busan.png";
import img_suwon from "../img/Suwon.jpg";
import img_gyeongju from "../img/Gyeongju.jpg";
import img_gangneung from "../img/Gangneung.jpg";
const originalSlides = [
  { src: img_busan, text: "BUSAN" },
  { src: img_seoul, text: "SEOUL" },
  { src: img_jeju, text: "JEJU" },
  {src:img_suwon,text:"SUWON"},
  {src:img_gangneung,text:"GANGNEUNG"},
  {src:img_gyeongju,text:"GYEONGJU"}
];
const slides = [...originalSlides, ...originalSlides];

function ContainerBelt() {
  return (
    <div className="slider-container2">
      <div className="slider2">
        <div className="slide-track2">
          {slides.map((slide, index) => (
            <div className="slide2" key={index}>
              <img src={slide.src} height="100" width="250" alt={slide.text} style={{borderRadius:"50px"}}/>
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

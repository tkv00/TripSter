import "./containercenter.css";
import img_busan from "../img/busan.png";
import img_seoul from "../img/seoul.png";
import img_jeju from "../img/jeju.png";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
function PopularTrip() {
  const [images, setImages] = useState([
    { src: img_jeju, alt: "Image 1", text: "제주도 애월읍", liked: false },
    { src: img_busan, alt: "Image 2", text: "부산 해운대", liked: false },
    { src: img_seoul, alt: "Image 3", text: "서울종로", liked: false },
  ]);
  const [activeButton, setActiveButton] = useState("local");
  const toggleLike = (index) => {
    const newImages = [...images];
    newImages[index].liked = !newImages[index].liked;
    setImages(newImages);
  };

  return (
    <div
      className="banner-container"
      style={{ flexDirection: "column", marginLeft: "4.5%", marginTop: "10%" }}
    >
      <div className="banner-text" style={{ margin: "25px" }}>
        Popular Trip
      </div>
      <label
        style={{
          display: "flex",
          marginTop: "-2%",
          marginLeft: "92%",
          color: "#C2C2C2",
          fontSize: "1.2500vw",
          cursor: "pointer",
        }}
      >
        더보기
      </label>
      <div className="banner-buttons">
        <button
          className={
            activeButton === "local" ? "banner-btn_on" : "banner-btn_off"
          }
          onClick={() => setActiveButton("local")}
        >
          국내
        </button>
        <button
          className={
            activeButton === "international"
              ? "banner-btn_on"
              : "banner-btn_off"
          }
          onClick={() => setActiveButton("international")}
        >
          해외
        </button>
      </div>
      <div className="imgContainer">
        {images.map((image, index) => (
          <div className="img-item" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="img-text">{image.text}</div>
            {image.liked ? (
              <HeartFilled
                onClick={() => toggleLike(index)}
                className="heart-icon"
                style={{ color: "red" }}
              />
            ) : (
              <HeartOutlined
                onClick={() => toggleLike(index)}
                className="heart-icon"
                style={{ color: "white" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default PopularTrip;

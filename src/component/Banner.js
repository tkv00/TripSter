import "./component.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import back1 from "../img/back1.png";
import back2 from "../img/back2.png";
import back3 from "../img/back3.png";
import back4 from "../img/back4.png";
function Banner() {
  const [images, setImages] = useState([
    { src: back1, alt: "Image 1", text: "서울 남산타워", liked: false },
    { src: back2, alt: "Image 2", text: "경복궁", liked: false },
    { src: back3, alt: "Image 3", text: "DDP", liked: false },
    { src: back4, alt: "Image 4", text: "서울 스타필드", liked: false },
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
      style={{ flexDirection: "column", marginLeft: "4.5%", marginTop: "20%" }}
    >
      <div className="banner-text" style={{ margin: "25px" }}>
        Today's Trip Route
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
                style={{color:"red"}}
              />
            ) : (
              <HeartOutlined
                onClick={() => toggleLike(index)}
                className="heart-icon"
                style={{color:"white"}}
                
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;

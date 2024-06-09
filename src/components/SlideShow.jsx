import React, { useState } from "react";
import arrownextWhiteIcon from "../assets/mobileviewImages/arrownextWhiteIcon.svg";
import arrowpreviousWhiteIcon from "../assets/mobileviewImages/arrowpreviousWhiteIcon.svg";

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div>
      <div className="slideshow-container">
        <div className="slide">
          <button className="slide-button">
            <img
              src={arrowpreviousWhiteIcon}
              alt="Previous"
              onClick={prevSlide}
              style={{ border: "1px solid " }}
            />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            style={{
              width: "406px",
              height: "350px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
          />
          <button onClick={nextSlide} className="slide-button">
            <img src={arrownextWhiteIcon} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;

import React from "react";
import "./Slider.css";
import leftArrow from "../../images/feedback-previous.svg";
import rightArrow from "../../images/feedback-next.svg";

function BtnFeedback({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}

export default BtnFeedback;
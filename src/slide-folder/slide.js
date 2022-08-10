import React from "react";

export default function Slide({ obj, index }) {
  // console.log(obj.img);
  return (
    <div className="slide">
      <div className="img-container">
        <img className="slide-img" src={obj.img} alt="slide1" />
      </div>
      <div className="info-container">
        <h2>Hello - {obj.id}</h2>
        <p>This is example slide</p>
      </div>
    </div>
  );
}

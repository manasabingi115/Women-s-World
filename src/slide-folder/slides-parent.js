import React from "react";
import "./slides.css";
import data from "./images-data";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import Slide from "./slide";

export default function SlidesComponent() {
  const [slidesMove, setSlidesMove] = React.useState(0);

  function HandleSlides() {
    if (slidesMove === -((data.length - 1) * 100)) {
      setSlidesMove(0);
    } else if (slidesMove === 0) {
      setSlidesMove(-(data.length - 1) * 100);
    }
  }
  function HandleLeftArrow() {
    setSlidesMove(slidesMove + 100);
    slidesMove === 0 && HandleSlides();
  }
  function HandleRightArrow() {
    setSlidesMove(slidesMove - 100);
    slidesMove === -(data.length - 1) * 100 && HandleSlides();
  }

  return (
    <div className="App">
      <div className="slides-container">
        <MdArrowBackIos className="left-arrow" onClick={HandleLeftArrow} />
        <div
          className="wrapper"
          style={{
            transform: `translateX(${slidesMove}vw)`,
            transition: "all 1.5s ease"
          }}
        >
          {data.map((obj, index) => (
            <Slide obj={obj} index={index} key={index} />
          ))}
        </div>
        <MdArrowForwardIos className="right-arrow" onClick={HandleRightArrow} />
      </div>
    </div>
  );
}

import React from "react";
import style from "./MainImage.module.css";
import MainImg from "../../../img/MainImage.svg";
import MainImageText from "../../../img/MainImageText.svg";
import MainImageHands from "../../../img/Hands.svg";
import MainImageHead from "../../../img/Head.svg";
const MainImage = () => {
  const [headDeg, setHeadDeg] = React.useState(0);
  window.addEventListener("scroll", () => {
    setHeadDeg(Math.round(window.scrollY));
  });

  return (
    <div className={style.main_image_div}>
      <img className={style.main_image} src={MainImg} alt="" />
      <img
        className={style.main_image + " " + style.head}
        style={{ transform: `rotate(${headDeg / 30}deg)` }}
        src={MainImageHead}
        alt=""
      />
      <img
        className={style.main_image + " " + style.hands}
        src={MainImageHands}
        alt=""
      />
      <img className={style.main_image_text} src={MainImageText} alt="" />
    </div>
  );
};

export default MainImage;

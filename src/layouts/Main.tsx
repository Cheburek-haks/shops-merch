import React from "react";
import MainImage from "../components/common/mainImage/MainImage";
import ShopContent from "../components/content/shop/ShopContent";
import NavBar from "../components/NavBar/NavBar";

import style from "./Main.module.css";
const Main = () => {
  return (
    <>
      <MainImage />
      <div className={style.container}>
        <div className={style.nav_var}>
          <NavBar />
        </div>
        <ShopContent shopTitle="" />
      </div>
    </>
  );
};

export default Main;

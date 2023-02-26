import React from "react";
import MainImage from "../components/common/mainImage/MainImage";
import Content from "../components/content/Content";
import ScrollSm from "../utils/ScrollSmoother";

const Main = () => {
  ScrollSm();
  return (
    <>
      <MainImage />
      <Content />
    </>
  );
};

export default Main;

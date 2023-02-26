import * as React from "react";
import { useNavigate } from "react-router-dom";
const Test = () => {
  const test = useNavigate();
  test("/asdasdasd");

  return <div style={{ height: 1000, width: 1001, background: "black" }}></div>;
};

export default Test;

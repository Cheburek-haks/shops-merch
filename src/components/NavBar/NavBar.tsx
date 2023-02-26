import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../common/form/buttons/Button";
import style from "./NavBar.module.css";

const NavBar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClickNavButton = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <div className={style.nav_bar}>
        <Button
          name="merch"
          onClick={() => handleClickNavButton("merch")}
          active={id === "merch"}
        >
          Мерч
        </Button>{" "}
        <Button
          name="technic"
          onClick={() => handleClickNavButton("technic")}
          active={id === "technic"}
        >
          Техника
        </Button>
        <Button
          name="computer-engineering"
          onClick={() => handleClickNavButton("computer-engineering")}
          active={id === "computer-engineering"}
        >
          Компьютерная приферия
        </Button>
        <Button
          name="accessories"
          onClick={() => handleClickNavButton("accessories")}
          active={id === "accessories"}
        >
          Аксессуары
        </Button>
        <Button
          name="all"
          onClick={() => handleClickNavButton("all")}
          active={id === "all"}
        >
          Все
        </Button>
      </div>
    </>
  );
};

export default NavBar;

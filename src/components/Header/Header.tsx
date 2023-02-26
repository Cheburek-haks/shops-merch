import * as React from "react";
import style from "./Header.module.css";
import LogoImage from "../../img/HeaderLogo.svg";
import SearchImage from "../../img/Akar-icons_search.svg";
import SearchFocusImage from "../../img/SearchIcon.svg";
import BasketImage from "../../img/Basket.svg";
import UserImage from "../../img/User.svg";

import TextField from "../common/form/textField/TextField";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState<string>("");
  const [count, setCount] = React.useState<number>(1231230);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleChooseClassesActions = (key?: string) => {
    return style.actions + " " + (key === "title" && style.actions_title);
  };
  const handleClickNavigate = (key: string) => {
    navigate(`/${key}`);
  };

  return (
    <div className={style.header}>
      <img className={style.header_image} src={LogoImage} alt="" />
      <div className={style.header_input}>
        <TextField
          value={title}
          onChange={handleChange}
          location="end"
          icon={SearchImage}
          iconFocus={SearchFocusImage}
          placeholder="Введите запрос"
        />
      </div>
      <div className={style.header_actions}>
        <div className={handleChooseClassesActions("title")}>{count} X</div>
        <div
          className={handleChooseClassesActions()}
          onClick={() => handleClickNavigate("user/basket")}
        >
          <img src={BasketImage} className={style.actions_image} alt="" />
        </div>
        <div
          className={handleChooseClassesActions()}
          onClick={() => handleClickNavigate("user")}
        >
          <img src={UserImage} className={style.actions_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

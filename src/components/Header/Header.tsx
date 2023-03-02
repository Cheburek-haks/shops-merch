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
  const [theme, setTheme] = React.useState<boolean>(false);
  React.useEffect(() => {
    navigate(`/`);
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleChooseClassesActions = (key?: string) => {
    return style.actions + " " + (key === "title" && style.actions_title);
  };
  const handleClickNavigate = (key: string) => {
    navigate(`/${key}`);
  };
  const handleClickTheme = () => {
    document.documentElement.style.setProperty(
      "--back-color-28303f",
      `#FF2400`
    );
    document.documentElement.style.setProperty(
      "--back-color-3c475c",
      `#FFFFFF`
    );
    document.documentElement.style.setProperty(
      "--back-color-36c3ff",
      `#FF2400`
    );
    document.documentElement.style.setProperty("--color-white", `black`);
    document.documentElement.style.setProperty("--color-36c3ff", `white`);
  };
  const handleClickTheme2 = () => {
    document.documentElement.style.setProperty(
      "--back-color-28303f",
      `#28303f`
    );
    document.documentElement.style.setProperty(
      "--back-color-3c475c",
      `#3c475c`
    );
    document.documentElement.style.setProperty(
      "--back-color-36c3ff",
      `#36c3ff`
    );
    document.documentElement.style.setProperty("--color-white", `white`);
    document.documentElement.style.setProperty("--color-36c3ff", `#36c3ff`);
  };

  return (
    <div className={style.header}>
      <img
        className={style.header_image}
        onClick={() => handleClickNavigate("")}
        src={LogoImage}
        alt=""
      />
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
        <div
          className={
            style.actions_theme +
            " " +
            (theme
              ? style.actions_theme_active
              : style.actions_theme_not_active)
          }
          onClick={() => setTheme((prev) => !prev)}
        >
          <p style={{ textAlign: "center", margin: 0 }}>Темы</p>
          {theme && (
            <div onClick={(e) => e.stopPropagation()}>
              <h6 onClick={handleClickTheme} className={style.theme_text}>
                Тема-1
              </h6>
              <h6 onClick={handleClickTheme2} className={style.theme_text}>
                Тема-2
              </h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

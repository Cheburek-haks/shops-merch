import * as React from "react";
import style from "./User.module.css";
import UserImage from "../img/UserImage.svg";
import { IUser } from "../types/Types";
const User = () => {
  const [user, setUser] = React.useState<IUser>({
    id: 234234,
    name: "Адам",
    last_name: "Бадиев",
    first_name: "Алиханович",
    command: "СОШ№ 10 г. Магас",
    points: 235,
  });
  return (
    <div className={style.user}>
      <div className={style.user_content}>
        <img className={style.user_image} src={UserImage} alt="" />

        <span className={style.user_name}>
          {user.last_name} {user.name} <br /> {user.first_name}
        </span>
        <span className={style.user_command}>
          Команда <br /> {user.command}
        </span>
        <div className={style.user_points}>
          На счету:{" "}
          <span className={style.user_points_child}>{user.points}</span>Х
        </div>
      </div>
      ;
    </div>
  );
};

export default User;

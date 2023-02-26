import * as React from "react";
import style from "./Buttons.module.css";
interface ButtonProps {
  name: string;
  active?: boolean;
  iconClasses?: string;
  icon?: string;
  iconSecond?: string;
  onClick: (name: string) => void | (() => void);
  location?: string;
}
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  name,
  active,
  icon,
  iconSecond,
  onClick,
  location,
  children,
  iconClasses,
}) => {
  const handleChooseClasses = () => {
    return style.button + " " + (active && style.button_active);
  };
  const handleChooseIcons = () => {
    return active ? iconSecond : icon;
  };

  return (
    <div className={style.buttons}>
      {location === "start" && (
        <img className={iconClasses} src={handleChooseIcons()} alt="" />
      )}

      <button onClick={() => onClick(name)} className={handleChooseClasses()}>
        {children}
      </button>

      {location === "end" && (
        <img className={iconClasses} src={handleChooseIcons()} alt="" />
      )}
    </div>
  );
};

export default Button;

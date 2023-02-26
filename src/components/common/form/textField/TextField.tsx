import * as React from "react";
import style from "./TextField.module.css";
interface TextField {
  location?: string;
  icon?: string;
  iconFocus?: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const TextField: React.FC<React.PropsWithChildren<TextField>> = ({
  location,
  icon,
  iconFocus,
  value,
  onChange,
  placeholder,
}) => {
  const [focus, setFocus] = React.useState<boolean>(false);
  const handleChooseClassesTextField = () => {
    return style.text_field + " " + (focus && style.text_field_active);
  };
  const handleChooseIcons = () => {
    return focus ? iconFocus : icon;
  };
  return (
    <div
      className={handleChooseClassesTextField()}
      onMouseOver={() => setFocus(true)}
    >
      {location === "start" && (
        <img className={style.text_field_icon} src={handleChooseIcons()} />
      )}
      <input
        className={style.text_field_input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {location === "end" && (
        <img className={style.text_field_icon} src={handleChooseIcons()} />
      )}
    </div>
  );
};

export default TextField;

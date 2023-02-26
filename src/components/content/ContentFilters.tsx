import * as React from "react";
import Button from "../common/form/buttons/Button";
import style from "./Content.module.css";

import ArrowDown from "../../img/ArrowDown.svg";
import ArrowDownActive from "../../img/ArrowDownActive.svg";
import ArrowUp from "../../img/ArrowUp.svg";
import ArrowUpactive from "../../img/ArrowUpActive.svg";

interface ContentFiltersProps {
  setContents: (prev: any) => void;
}

const ContentFilters: React.FC<ContentFiltersProps> = ({ setContents }) => {
  const [filter, setFilter] = React.useState<string>("");
  const handleClick = (key: string) => {
    setFilter(key);
    setContents((prev: any) =>
      [...prev].sort((a, b) =>
        key === "asc" ? a.price - b.price : b.price - a.price
      )
    );
  };
  return (
    <div className={style.content_filters}>
      <Button
        name="asc"
        onClick={handleClick}
        active={filter === "asc"}
        location="end"
        icon={ArrowUp}
        iconSecond={ArrowUpactive}
        iconClasses={style.button_icon}
      >
        По цене
      </Button>
      <div style={{ marginLeft: "calc(var(--index) * 0.8)" }}>
        <Button
          name="desc"
          onClick={handleClick}
          active={filter === "desc"}
          location="end"
          icon={ArrowDown}
          iconSecond={ArrowDownActive}
          iconClasses={style.button_icon}
        >
          По цене
        </Button>
      </div>
    </div>
  );
};

export default ContentFilters;

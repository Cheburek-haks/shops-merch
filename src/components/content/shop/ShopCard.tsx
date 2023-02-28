import * as React from "react";
import { ICard } from "../../../types/Types";
import style from "./ShopContent.module.css";
import basketImage from "../../../img/Basket.svg";
interface ShopCardProps {
  item: ICard;
  onClick: (card: ICard) => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ item, onClick }) => {
  const handleChooseClassesIcon = () => {
    return style.card_icon + " " + (item.favourites && style.card_icon_active);
  };
  return (
    <div className={style.card}>
      <div>
        <img className={style.card_image} src={item.media[0]} alt="" />
        <div className={style.card_suptitle}>
          <span className={style.card_text}>{item.title}</span>
          <span className={style.card_text}>{item.price} X</span>
        </div>
        <div className={style.card_subtitle}>
          <div className={handleChooseClassesIcon()}>
            <img
              className={style.card_subtitle_image}
              src={basketImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

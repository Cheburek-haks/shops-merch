import * as React from "react";
import style from "./BasketItem.module.css";
import { IBasket } from "../../../types/Types";
import DeleteImage from "../../../img/DeleteImage.svg";
interface BasketItemProps {
  item: IBasket;
  onClick: (card: IBasket) => void;
}

const BasketItem: React.FC<BasketItemProps> = ({ item, onClick }) => {
  return (
    <div className={style.basket_card}>
      <div className={style.basket_card_left}>
        <img src={item.image} className={style.basket_card_image} alt="" />
        <span className={style.basket_title}>{item.title}</span>
      </div>
      <div className={style.basket_card_right}>
        <div className={style.basket_buttons}>
          <button className={style.basket_button}>-</button>
          <button
            className={style.basket_button + " " + style.basket_button_main}
          >
            {item.count}
          </button>
          <button className={style.basket_button}>+</button>
        </div>
        <div className={style.basket_prices}>
          <span className={style.basket_prices_title}>{item.price} X</span>
          <img className={style.basket_prices_image} src={DeleteImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BasketItem;

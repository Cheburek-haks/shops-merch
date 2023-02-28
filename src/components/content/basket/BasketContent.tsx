import * as React from "react";
import style from "./BasketContent.module.css";
import CancelImage from "../../../img/Cancel.svg";
import { IBasket, ICard } from "../../../types/Types";
import ContentFilters from "../ContentFilters";
import List from "../List";
import BasketCard from "./BasketCard";
import image1 from "../../../img/Test.svg";
import image2 from "../../../img/Test2.svg";
import image3 from "../../../img/Test3.svg";
import Content from "../shop/ShopContent";
const BasketContent = () => {
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const [contents, setContents] = React.useState<IBasket[]>([
    {
      id: 4235523,
      image: image1,
      title: "Штука",
      price: 1,
      count: 1,
      favourites: true,
    },
    {
      id: 4233,
      image: image3,
      title: "Еще что то ",
      price: 2,
      count: 1,
      favourites: true,
    },
    {
      id: 423523,
      image: image2,
      title: "Что то ",
      price: 3,
      count: 1,
      favourites: true,
    },
    {
      id: 423423,
      image: image3,
      title: "Тетрадь",
      price: 4,
      count: 1,
      favourites: true,
    },
  ]);
  React.useEffect(() => {
    contents.map((item: IBasket) => setTotalCount((prev) => prev + item.price));
  }, [contents]);
  const handleClickBasketCard = (card: IBasket) => {};
  return (
    <div
      className={style.basket_shop_content}
      style={{ marginTop: "calc(var(--index) * 2)" }}
    >
      <div className={style.basket_suptitle}>
        <h3 className={style.basket_title}>КОРЗИНА</h3>
        <img className={style.basket_icon} src={CancelImage} alt="" />
      </div>
      <div className={style.content_filters}>
        <ContentFilters setContents={setContents} />
      </div>
      <List
        items={contents}
        renderItem={(card: IBasket) => (
          <BasketCard
            onClick={(card: IBasket) => handleClickBasketCard(card)}
            item={card}
          />
        )}
      />
      <div className={style.basket_button_div}>
        <div className={style.basket_count_butt}>
          <div className={style.basket_count}>
            <span className={style.basket_count_text1}>Итого:</span>
            <span className={style.basket_count_text2}>{totalCount}X</span>
          </div>
          <button className={style.basket_count_button}>Оформить</button>
        </div>
      </div>
      <Content shopTitle="Рекомендуем" />
      <div className={style.plug}></div>
    </div>
  );
};

export default BasketContent;

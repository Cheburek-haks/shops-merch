import * as React from "react";
import style from "./Content.module.css";
import CancelImage from "../../img/Cancel.svg";
import { IBasket } from "../../types/Types";
import ContentFilters from "./ContentFilters";
import List from "./List";
import BasketItem from "./basket/BasketItem";
import image1 from "../../img/Test.svg";
import image2 from "../../img/Test2.svg";
import image3 from "../../img/Test3.svg";
import Content from "./Content";
const BasketContent = () => {
    const [contents, setContents] = React.useState<IBasket[]>([
        {
            id: 4235523,
            image: image1,
            title: "Тетрдь",
            price: 1,
            count: 1,
            favourites: true,
        },
        {
            id: 4233,
            image: image3,
            title: "Тетрдь",
            price: 2,
            count: 1,
            favourites: true,
        },
        {
            id: 423523,
            image: image2,
            title: "Тетрдь",
            price: 3,
            count: 1,
            favourites: true,
        },
        {
            id: 423423,
            image: image3,
            title: "Тетрдь",
            price: 4,
            count: 1,
            favourites: true,
        },
    ]);
    const handleClickBasketCard = (card: IBasket) => {};
    return (
        <div
            className={style.shop_content}
            style={{ marginTop: "calc(var(--index) * 2)" }}
        >
            <div className={style.basket_suptitle}>
                <h3 className={style.basket_title}>КОРЗИНА</h3>
                <img className={style.basket_icon} src={CancelImage} alt="" />
            </div>
            <ContentFilters setContents={setContents} />
            <List
                items={contents}
                renderItem={(card: IBasket) => (
                    <BasketItem
                        onClick={(card: IBasket) => handleClickBasketCard(card)}
                        item={card}
                    />
                )}
            />
            <Content />
        </div>
    );
};

export default BasketContent;

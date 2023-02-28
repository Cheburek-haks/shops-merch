import * as React from "react";
import NavBar from "../../NavBar/NavBar";
import style from "./ShopContent.module.css";
import ContentFilters from "../ContentFilters";
import image1 from "../../../img/Test.svg";
import image2 from "../../../img/Test2.svg";
import image3 from "../../../img/Test3.svg";
import { ICard } from "../../../types/Types";
import ShopsCard from "./ShopCard";
import List from "../List";
import { useParams } from "react-router-dom";
interface ShopContentProps {
  shopTitle: string;
}
const ShopContent: React.FC<ShopContentProps> = ({ shopTitle }) => {
  const { id } = useParams();
  console.log(id);

  const [contents, setContents] = React.useState<ICard[]>([
    {
      media: [image2, image2, image3],
      title: "Тетрадь",
      price: 1,
      favourites: false,
    },
    {
      media: [image3, image3],
      title: "Тетрадь",
      price: 2,
      favourites: true,
    },
    {
      media: [image1, image2],
      title: "Тетрадь",
      price: 3,
      favourites: false,
    },
    {
      media: [image2, image2, image3],
      title: "Тетрадь",
      price: 4,
      favourites: false,
    },
    {
      media: [image3, image3],
      title: "Тетрадь",
      price: 5,
      favourites: true,
    },
    {
      media: [image1, image2],
      title: "Тетрадь",
      price: 6,
      favourites: true,
    },
  ]);

  const handleClickCard = (card: ICard) => {
    console.log(card);
  };

  return (
    <div className={style.shop_content}>
      <div className={style.shop_content_filters}>
        {shopTitle ? (
          <h4 className={style.shop_content_title}>{shopTitle}</h4>
        ) : (
          <ContentFilters setContents={setContents} />
        )}
      </div>
      <div className={style.content}>
        <List
          items={contents}
          renderItem={(card: ICard) => (
            <ShopsCard onClick={(card) => handleClickCard(card)} item={card} />
          )}
        />
      </div>
    </div>
  );
};

export default ShopContent;

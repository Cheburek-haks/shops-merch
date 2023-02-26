export interface ICard {
  media: string[];
  title: string;
  price: number;
  favourites: boolean;
}
export interface IBasket {
  id: number;
  image: string;
  title: string;
  count: number;
  price: number;
  favourites: boolean;
}

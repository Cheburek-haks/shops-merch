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
export interface IProfessions {
  name: string;
}
export interface IUser {
  id: number;
  name: string;
  last_name: string;
  first_name: string;
  command: string;
  points: number;
}

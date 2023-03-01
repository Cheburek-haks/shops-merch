import React from "react";
import { useQuery } from "react-query";
import { ApiService } from "../API/Api.service";
import MainImage from "../components/common/mainImage/MainImage";
import ShopContent from "../components/content/shop/ShopContent";
import NavBar from "../components/NavBar/NavBar";
import { useProfs } from "../hooks/useProfs";
import { IProfessions } from "../types/Types";

import style from "./Main.module.css";
const Main = () => {
  const { isLoading, profs, error } = useProfs("profession");
  return (
    <>
      {error && <h1 style={{ color: "red" }}>{(error as any).message}</h1>}
      <button style={{ height: 60, width: 130 }}>Send</button>
      {isLoading ? (
        <h4 style={{ textAlign: "center" }}>Loading</h4>
      ) : (
        <>
          {profs?.length ? (
            profs.map((item: any) => <h1>{item.name}</h1>)
          ) : (
            <div>Post not worked</div>
          )}
        </>
      )}
      <MainImage />
      <div className={style.container}>
        <div className={style.nav_var}>
          <NavBar />
        </div>
        <ShopContent shopTitle="" />
      </div>
    </>
  );
};

export default Main;

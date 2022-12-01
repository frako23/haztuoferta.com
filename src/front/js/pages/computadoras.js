import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";
import { Carousel } from "../component/carousel.js";
import { Segmento } from "../component/Segmento";
import CloudinaryUploadWidget from "../component/upLoadImages";

export const Computadoras = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <h1 className="py-5">Computadoras 💻</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        {store.searchResults == ""
          ? store.computadoras.map((computadoras, index) => {
              return <ItemCard computadoras={computadoras} key={index} />;
            })
          : store.searchResults.map((computadora, index) => {
              return <ItemCard computadoras={computadora} key={index} />;
            })}
      </div>
    </div>
  );
};

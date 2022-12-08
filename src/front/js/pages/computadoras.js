import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";
import { Carousel } from "../component/carousel.js";
import { Segmento } from "../component/Segmento";
import CloudinaryUploadWidget from "../component/upLoadImages";

export const Computadoras = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getComputadoras();
  }, []);

  return (
    <div className="text-start mx-5 px-5">
      <h1 className="ps-5 pt-5 pb-3 mb-4 display-5 border-bottom border-warning">
        <i className="fa-solid fa-desktop"></i> Computadoras
      </h1>
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

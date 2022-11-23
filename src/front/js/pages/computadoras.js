import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";
import { Carousel } from "../component/carousel.js";
import { Secciones } from "../component/Secciones";
import { Segmento } from "../component/Segmento";

export const Computadoras = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <h1>Computadoras</h1>
      <div className="container d-flex">
        {store.computadoras.map((computadoras, index) => {
          return <ItemCard computadoras={computadoras} key={index} />;
        })}
      </div>
    </div>
  );
};

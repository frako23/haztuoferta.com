import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/ItemCard";
import "../../styles/home.css";
import CloudinaryUploadWidget from "../component/upLoadImages";

export const Ventas = () => {
    const { store, actions } = useContext(Context);
    const { computadoras, celulares } = store;

    let productos = computadoras.concat(celulares);

    return (
        <div className="text-start mx-5 px-5">
            <h1 className="ps-5 pt-5 pb-3 mb-5 display-5 border-bottom border-secondary">
                <i className="fa-solid fa-hand-holding-dollar"></i>  Artículos en Venta
            </h1>
            <div className="container d-flex flex-wrap justify-content-center shadow">
                {productos.map((computadoras, index) => {
                    return <ItemCard computadoras={computadoras} key={index} />;
                })};
            </div>
        </div>
    );
};
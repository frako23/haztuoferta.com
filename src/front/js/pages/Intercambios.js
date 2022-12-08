import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/ItemCard";
import "../../styles/home.css";
import CloudinaryUploadWidget from "../component/upLoadImages";

export const Intercambios = () => {
    const { store, actions } = useContext(Context);
    const { computadoras, celulares } = store;

    let productos = computadoras.concat(celulares);
    let productosVenta = productos.filter(producto => {
        return producto.tipo_de_negocio == "Intercambio"
    });

    return (
        <div className="container">
            <div className="text-center mx-5 px-5">
                <h1 className="ps-5 pt-3 pb-3 mb-4 display-5 border-bottom border-warning">
                    <i className="fa-solid fa-handshake"></i>   Intercambios
                </h1>
                <div className="container d-flex flex-wrap justify-content-center">
                    {productosVenta.map((producto, index) => {
                        return <ItemCard computadoras={producto} key={index} />
                    })}
                </div>
            </div>
        </div>
    );
};
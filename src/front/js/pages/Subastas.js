import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/ItemCard";
import "../../styles/home.css";
import CloudinaryUploadWidget from "../component/upLoadImages";

export const Subastas = () => {
    const { store, actions } = useContext(Context);
    const { computadoras, celulares } = store;

    let productos = computadoras.concat(celulares);
    let productosVenta = productos.filter(producto => {
        return producto.tipo_de_negocio == "Subasta"
    });

    return (
        <div className="container">
            <div className="text-center mx-5 px-5">
                <h1 className="ps-5 pt-5 pb-3 mb-5 display-5 border-bottom border-secondary">
                    <i className="fa-solid fa-gavel"></i>  Subastas
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
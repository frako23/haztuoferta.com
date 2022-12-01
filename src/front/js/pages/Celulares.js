import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/ItemCard";
import "../../styles/home.css";

import CloudinaryUploadWidget from "../component/upLoadImages";

export const Celulares = () => {

    // const { store, actions } = useContext(Context);

    return (
        <React.Fragment>
            <div className="container-fluid mt-5 mb-5">
                <div className="products">
                    <div className="tab-content" id="myTabContent">
                        <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center">
                            <span className="font-weight-bold text-uppercase display-6">Celulares</span>
                        </div>
                        <div className="row g-3">
                            <div className="col-md-4">
                                <div className="card">
                                    <img
                                        src="https://phonesdata.com/files/models/Apple-iPhone-12-486.jpg"
                                        className="card-img-top">
                                    </img>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <span className="item-title font-weight-bold h5"><strong>Título del Producto</strong></span>
                                            <span className="item-price-weight-bold h5"><strong>$550</strong></span>
                                        </div>
                                        <p className="item-description card-text mb-1 mt-1">
                                            Breve descripcion del artículo, características.
                                        </p>
                                        <div className="d-flex align-items-center flex-row">
                                            <span className="offer-type guarantee h6">Tipo de Oferta</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="card-body adjust-content-between">
                                        <div className="text-right buttons">
                                            <button className="btn btn-outline-dark">Agregar a Favoritos</button> <button className="btn btn-dark">Ver más!</button> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};




// <div classNameName="text-center">
//     <h1>Celulae 💻</h1>
//     <div classNameName="container d-flex flex-wrap justify-content-center">
//         {store.searchResults == "" ?
//             store.computadoras.map((computadoras, index) => {
//                 return <ItemCard computadoras={computadoras} key={index} />;
//             })
//             :
//             store.searchResults.map((computadora, index) => {
//                 return <ItemCard computadoras={computadora} key={index} />;
//             })
//         }
//     </div>
// </div>
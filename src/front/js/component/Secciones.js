import React, { useContext } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Secciones = () => {

    const { store, actions } = useContext(Context)

    return (
        <React.Fragment>
            <div className="container-fluid d-inline-flex">
                <div className="col-sm-4 px-5 mt-5">
                    <Link className="seccion-link" to="/demo">
                        <div className="seccion">
                            <div className="image">
                                <img src="https://dummyimage.com/600x400/f2f2f2/000000&text=QUIERO+COMPRAR" />
                            </div>
                            <div className="seccion-inner">
                                <div className="header text-center">
                                    <h2>COMPRAR</h2>
                                    <h3>Haz una Oferta!</h3>
                                </div>
                                <div className="content">
                                    <p>Content area</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-4 px-5 mt-5">
                    <Link className="seccion-link" to="/demo">
                        <div className="seccion">
                            <div className="image">
                                <img src="https://dummyimage.com/600x400/f2f2f2/000000&text=QUIERO+COMPRAR" />
                            </div>
                            <div className="seccion-inner">
                                <div className="header text-center">
                                    <h2>VENDER</h2>
                                    <h3>Vende tu Producto!</h3>
                                </div>
                                <div className="content">
                                    <p>Content area</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-4 px-5 mt-5">
                    <Link className="seccion-link" to="/demo">
                        <div className="seccion">
                            <div className="image">
                                <img src="https://dummyimage.com/600x400/f2f2f2/000000&text=QUIERO+COMPRAR" />
                            </div>
                            <div className="seccion-inner">
                                <div className="header text-center">
                                    <h2>INTERCAMBIAR</h2>
                                    <h3>Propón un Cambio!</h3>
                                </div>
                                <div className="content">
                                    <p>Content area</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}
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
                            <div className="seccion-inner text-center">
                                <div className="header text-center">
                                    <h2>COMPRAR</h2>
                                </div>
                                <div className="card-read-more">
                                    <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                                        Vende tu Producto!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-4 px-5 mt-5">
                    <Link className="seccion-link" to="/demo">
                        <div className="seccion">
                            <div className="image">
                                <img src="https://dummyimage.com/600x400/f2f2f2/000000&text=Placeholder+VENDER" />
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
                                <img src="https://dummyimage.com/600x400/f2f2f2/000000&text=Placeholder+INTERCAMBIAR" />
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
                <div className="col-sm-4 px-5 mt-5">
                    <Link className="seccion-link" to="/demo">
                        <div className="seccion">
                            <div className="image">
                                <img src="https://dummyimage.com/600x400/f2f2f2/000000&text=Placeholder+SUBASTAS" />
                            </div>
                            <div className="seccion-inner">
                                <div className="header text-center">
                                    <h2>SUBASTAR</h2>
                                    <h3>Subasta tu Producto!</h3>
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
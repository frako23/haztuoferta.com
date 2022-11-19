import React from "react";
import "../../styles/segmento.css";


export const Segmento = () => {
    return (
        <React.Fragment>
            <section className="wrapper">
                <div className="container-fostrap">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 pe-5">
                                    <div className="card">
                                        <span className="img-card">
                                            <img src="https://placehold.co/600x400?text=QUIERO+VENDER" />
                                        </span>
                                        <div className="card-content">
                                            <h4 className="card-title text-center h2">
                                                <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> VENDER
                                                </a>
                                            </h4>
                                            <p className="text-center h3">
                                                Vende tu Producto a un Precio Fijo
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                                                HAS TU OFERTA!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 pe-5">
                                    <div className="card">
                                        <span className="img-card">
                                            <img src="https://placehold.co/600x400?text=QUIERO+COMPRAR" />
                                        </span>
                                        <div className="card-content">
                                            <h4 className="card-title text-center h2">
                                                <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> COMPRAR
                                                </a>
                                            </h4>
                                            <p className="text-center h3">

                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                                                HAS TU OFERTA!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4">
                                    <div className="card">
                                        <span className="img-card">
                                            <img src="https://placehold.co/600x400?text=QUIERO+INTERCAMBIAR" />
                                        </span>
                                        <div className="card-content">
                                            <h4 className="card-title text-center h2">
                                                <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> INTERCAMBIAR
                                                </a>
                                            </h4>
                                            <p className="text-center h3">
                                                Propón un Intercambio ofreciendo otro Producto
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                                                HAS TU OFERTA!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    );
}
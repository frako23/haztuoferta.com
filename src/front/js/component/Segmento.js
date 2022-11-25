import React from "react";
import { Link } from "react-router-dom";
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
                  <Link className="seccion-link" to="/demo">
                    <div className="seccion">
                      <div className="image">
                        <span className="img-card">
                          <img src="https://placehold.co/600x400?text=QUIERO+VENDER" />
                        </span>
                      </div>
                      <div className="seccion-inner text-center">
                        <div className="header text-center">
                          <h2>VENDER</h2>
                        </div>
                        <div className="card-read-more">
                          <a
                            href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                            className="btn btn-link btn-block"
                          >
                            Vende tu Producto!
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xs-12 col-sm-4 pe-5">
                  <Link className="seccion-link" to="/oferts">
                    <div className="seccion">
                      <div className="image">
                        <span className="img-card">
                          <img src="https://placehold.co/600x400?text=QUIERO+COMPRAR" />
                        </span>
                      </div>
                      <div className="seccion-inner text-center">
                        <div className="header text-center">
                          <h2>COMPRAR</h2>
                        </div>
                        <div className="card-read-more">
                          <a
                            href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                            className="btn btn-link btn-block"
                          >
                            Has tu Oferta!
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xs-12 col-sm-4 pe-5">
                  <Link className="seccion-link" to="/demo">
                    <div className="seccion">
                      <div className="image">
                        <span className="img-card">
                          <img src="https://placehold.co/600x400?text=QUIERO+CAMBIAR" />
                        </span>
                      </div>
                      <div className="seccion-inner text-center">
                        <div className="header text-center">
                          <h2>INTERCAMBIAR</h2>
                        </div>
                        <div className="card-read-more">
                          <a
                            href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                            className="btn btn-link btn-block"
                          >
                            Propón un Trueque!
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

// === OUTDATED CARD TEMPLATE ===

{
  /* <div className="col-xs-12 col-sm-4 pe-5">
                                    <div className="card">
                                        <span className="img-card">
                                            <img src="https://placehold.co/600x400?text=QUIERO+INTERCAMBIAR" />
                                        </span>
                                        <div className="card-content">
                                            <h4 className="card-title text-center h2">
                                                <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> INTERCAMBIAR
                                                </a>
                                            </h4>
                                        </div>
                                        <div className="card-read-more">
                                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                                                PROPON UN TRUEQUE!
                                            </a>
                                        </div>
                                    </div>
                                </div> */
}

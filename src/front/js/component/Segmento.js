import React from "react";
import { Link } from "react-router-dom";
import "../../styles/segmento.css";
import comprar from "../../img/COMPRA.png";
import vender from "../../img/VENTA.png";
import intercambiar from "../../img/INTERCAMBIO.png";
import subastar from "../../img/SUBASTAS.png";

export const Segmento = () => {
  return (
    <React.Fragment>
      <section className="section-products mb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/Secciones">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src={vender} />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2>VENDE</h2>
                      <h3>Vende tu Producto!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/Oferts">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src={comprar} />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2>COMPRA</h2>
                      <h3>Haz una Oferta!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/Secciones">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src={intercambiar} />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2>INTERCAMBIA</h2>
                      <h3>Porpón un Trueque!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/Secciones">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src={subastar} />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2>SUBASTA</h2>
                      <h3>Subasta tu Producto!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <section className="section-products mb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/demo">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src={vender} />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2>VENDE</h2>
                      <h3>Vende tu Producto!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/oferts">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src={comprar} />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2>COMPRA</h2>
                      <h3>Haz una Oferta!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/demo">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src={intercambiar} />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2>INTERCAMBIA</h2>
                      <h3>Porpón un Trueque!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/demo">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src={subastar} />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2>SUBASTA</h2>
                      <h3>Subasta tu Producto!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

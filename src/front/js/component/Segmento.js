import React from "react";
import { Link } from "react-router-dom";
import "../../styles/segmento.css";

export const Segmento = () => {
  return (
    <React.Fragment>
      <div className="container d-flex flex-wrap justify-content-center">

        <div className="col-sm-4 pe-5">
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
                <div className="header text-center">
                  <span>
                    Vende tu Producto!
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-4 pe-5">
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
                <div className="header text-center">
                  <span>
                    Vende tu Producto!
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className=" col-sm-4 pe-5">
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
                <div className="header text-center">
                  <span>
                    Porpón un Trueque!
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className=" col-sm-4 pe-5">
          <Link className="seccion-link" to="/demo">
            <div className="seccion">
              <div className="image">
                <span className="img-card">
                  <img src="https://placehold.co/600x400?text=QUIERO+SUBASTAR" />
                </span>
              </div>
              <div className="seccion-inner text-center">
                <div className="header text-center">
                  <h2>SUBASTAR</h2>
                </div>
                <div className="header text-center">
                  <span>
                    Haz una Subasta!
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

      </div>

    </React.Fragment>
  );
};

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
          <div className="containersegmento d-flex justify-content-center">
            <h1 class="display-6 text-bold text-center">Que encontrarias en haztuoferta?</h1>
          </div>
          <br></br>
          <div className="containersegmento d-flex justify-content-center">
            <p className="display-7 text-bold text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose </p>
          </div>

          <br></br>
          <br></br>
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
                      <h2 className="">PRODUCTOS EN VENTA</h2>
                      <h3>Vende tu Producto!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link
                className="seccion-link"
                to="/Oferts"
              // preventScrollReset={true}
              >
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src={comprar} />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2 className="">OFERTAS DE COMPRA</h2>
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
                      <h2 className="">INTERCAMBIOS</h2>
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
                      <h2 className="">SUBASTAS</h2>
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
}

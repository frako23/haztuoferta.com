import React, { Component } from "react";
import "../../styles/index.css";

export const Footer = () => (
  <div>
    <footer className="text-center text-lg-start text-black bg-white border-top">
      <div className="container-fluid p-4 pb-0">
        <section className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Haz Tu Oferta
              </h6>
              <p>Compra y vende a tu propia manera.</p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold border-bottom">
                Inicia Hoy
              </h6>
              <p>
                <a href="./Account" className="text-black">
                  Tu Cuenta
                </a>
              </p>
              <p>
                <a className="text-black">Afilia tu Negocio</a>
              </p>
              <p>
                <a className="text-black">Tus Compras</a>
              </p>
              <p>
                <a className="text-black">Ayuda</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold border-bottom">
                Compañía
              </h6>
              <p>
                <a href="./AboutUs" className="text-black">
                  Acerca de Nosotros
                </a>
              </p>
              <p>
                <a className="text-black">Política de Privacidad</a>
              </p>
              <p>
                <a className="text-black">Términos y Condiciones</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold border-bottom">
                Contacto
              </h6>
              <p>
                <i className="fas fa-home mr-3"></i> Macaracuay, Caracas 1071,
                VE
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> haztuoferta@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +58 212 257 2582
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> +58 212 257 2582
              </p>
            </div>
          </div>
        </section>

        <hr className="my-3 w-100" />

        <section className="p-3 pt-0 container h-25">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                Copyright © 2022
                <a
                  className="text-black m-1"
                  href="https://github.com/frako23/haztuoferta.com"
                >
                  HazTuOferta.com
                </a>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-dark btn-floating m-1"
                role="button"
                style={{ width: "42px" }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-dark btn-floating m-1"
                role="button"
                style={{ width: "42px" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-dark btn-floating m-1"
                role="button"
                style={{ width: "42px" }}
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                className="btn btn-outline-dark btn-floating m-1"
                role="button"
                style={{ width: "42px" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  </div>
);

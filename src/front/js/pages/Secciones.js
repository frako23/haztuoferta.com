import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/secciones.css";

import { Context } from "../store/appContext";

export const Secciones = () => {
  return (
    <React.Fragment>
      <div className="container-fluid px-0 mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
          <div className="container-fluid d-flex">
            <a className="navbar-brand" href="#">
              SECCIONES
            </a>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item " role="presentation">
                {" "}
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <i className="fa-solid fa-comments-dollar"></i>  Ofertas
                </a>{" "}
              </li>
              <li className="nav-item" role="presentation">
                {" "}
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <i className="fa-solid fa-hand-holding-dollar"></i>  Ventas
                </a>{" "}
              </li>
              <li className="nav-item" role="presentation">
                {" "}
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  {" "}
                  <i className="fa-solid fa-handshake"></i> Intercambios
                </a>{" "}
              </li>
              <li className="nav-item" role="presentation">
                {" "}
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  <i className="fa-solid fa-gavel"></i> Subastas
                </a>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

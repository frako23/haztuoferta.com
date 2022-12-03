import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button as MyButton } from "./Button";

export const Categories = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="white"
        size="lg"
        className="border-none"
        onClick={handleShow}
      >
        <i className="fa-solid fa-bars"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className="h2">
              <strong>CATEGORIAS</strong>
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ "list-style": "none" }}>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-baby-carriage"></i>
                &nbsp;&nbsp;Accesorios para bebés
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-paw"></i>&nbsp;&nbsp;Accesorios para
                mascotas
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-building-columns"></i>
                &nbsp;&nbsp;Artículos de colección
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-car"></i>&nbsp;&nbsp;Carros y Motos
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-camera"></i>&nbsp;&nbsp;Cámaras y
                Accesorios
              </li>
            </Link>
            <Link to="/celulares" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-mobile-screen-button"></i>
                &nbsp;&nbsp;&nbsp;Celulares
              </li>
            </Link>
            <Link to="/computadoras" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-laptop"></i>&nbsp;Computadoras
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-gamepad"></i>&nbsp;Consolas y
                Videojuegos
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-blender"></i>
                &nbsp;&nbsp;Electrodomésticos
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-baseball-bat-ball"></i>&nbsp;Deporte y
                Fitness
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-headphones-simple"></i>
                &nbsp;&nbsp;Electrónica, audio y video
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-screwdriver-wrench"></i>
                &nbsp;&nbsp;Herramientas
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-house-chimney-window"></i>
                &nbsp;&nbsp;Hogar
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-building-user"></i>&nbsp;Inmuebles
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-guitar"></i>&nbsp;&nbsp;Instrumentos
                musicales
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-puzzle-piece"></i>&nbsp;&nbsp;Juguetes
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-gem"></i>&nbsp;&nbsp;Joyas
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-book"></i>&nbsp;&nbsp;Libros
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-car-battery"></i>&nbsp;&nbsp;Repuestos
                para vehículos
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-shirt"></i>&nbsp;Ropa y Zapatos
              </li>
            </Link>
            <Link to="/" onClick={handleClose}>
              <li className="categories">
                <i className="fa-solid fa-square-plus"></i>&nbsp;&nbsp;Otras
                categorías
              </li>
            </Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

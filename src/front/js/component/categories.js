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
        variant="info"
        className="btn signup__button--register"
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
            <Link to="/">
              <li className="categories">Accesorios para bebés</li>
            </Link>
            <Link to="/">
              <li className="categories">Accesorios para mascotas</li>
            </Link>
            <Link to="/">
              <li className="categories">Artículos de colección</li>
            </Link>
            <Link to="/">
              <li className="categories">Carros y Motos</li>
            </Link>
            <Link to="/">
              <li className="categories">Cámaras y Accesorios</li>
            </Link>
            <Link to="/Celulares">
              <li className="categories">Celulares</li>
            </Link>
            <Link to="/computadoras">
              <li className="categories">Computadoras</li>
            </Link>
            <Link to="/">
              <li className="categories">Consolas y Videojuegos</li>
            </Link>
            <Link to="/">
              <li className="categories">Electrodomésticos</li>
            </Link>
            <Link to="/">
              <li className="categories">Deporte y Fitness</li>
            </Link>
            <Link to="/">
              <li className="categories">Electrónica, audio y video</li>
            </Link>
            <Link to="/">
              <li className="categories">Herramientas</li>
            </Link>
            <Link to="/">
              <li className="categories">Hogar</li>
            </Link>
            <Link to="/">
              <li className="categories">Inmuebles</li>
            </Link>
            <Link to="/">
              <li className="categories">Instrumentos musicales</li>
            </Link>
            <Link to="/">
              <li className="categories">Juguetes</li>
            </Link>
            <Link to="/">
              <li className="categories">Joyas</li>
            </Link>
            <Link to="/">
              <li className="categories">Libros</li>
            </Link>
            <Link to="/">
              <li className="categories">Repuestos para vehículos</li>
            </Link>
            <Link to="/">
              <li className="categories">Ropa y Zapatos</li>
            </Link>
            <Link to="/">
              <li className="categories">Otras categorías</li>
            </Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

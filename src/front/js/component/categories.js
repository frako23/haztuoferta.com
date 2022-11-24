import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Categories = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" className="me-3" onClick={handleShow}>
        <i className="fa-solid fa-bars"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categorias de productos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ "list-style": "none" }}>
            <Link to="/">
              <li>Accesorios para bebés</li>
            </Link>
            <Link to="/">
              <li>Accesorios para mascotas</li>
            </Link>
            <Link to="/">
              <li>Artículos de colección</li>
            </Link>
            <Link to="/">
              <li>Carros y Motos</li>
            </Link>
            <Link to="/">
              <li>Cámaras y Accesorios</li>
            </Link>
            <Link to="/">
              <li>Celulares</li>
            </Link>
            <Link to="/Computadoras">
              <li>Computación</li>
            </Link>
            <Link to="/">
              <li>Consolas y Videojuegos</li>
            </Link>
            <Link to="/">
              <li>Electrodomésticos</li>
            </Link>
            <Link to="/">
              <li>Deporte y Fitness</li>
            </Link>
            <Link to="/">
              <li>Electrónica, audio y video</li>
            </Link>
            <Link to="/">
              <li>Herramientas</li>
            </Link>
            <Link to="/">
              <li>Hogar</li>
            </Link>
            <Link to="/">
              <li>Inmuebles</li>
            </Link>
            <Link to="/">
              <li>Instrumentos musicales</li>
            </Link>
            <Link to="/">
              <li>Juguetes</li>
            </Link>
            <Link to="/">
              <li>Joyas</li>
            </Link>
            <Link to="/">
              <li>Libros</li>
            </Link>
            <Link to="/">
              <li>Repuestos para vehículos</li>
            </Link>
            <Link to="/">
              <li>Ropa y Zapatos</li>
            </Link>
            <Link to="/">
              <li>Otras categorías</li>
            </Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

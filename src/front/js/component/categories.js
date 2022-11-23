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
            <li>Accesorios para bebés</li>
            <li>Accesorios para mascotas</li>
            <li>Artículos de colección</li>
            <li>Carros y Motos</li>
            <li>Cámaras y Accesorios</li>
            <li>Celulares</li>
            <Link to="/Computadoras">
              <li>Computación</li>
            </Link>
            <li>Consolas y Videojuegos</li>
            <li>Electrodomésticos</li>
            <li>Deporte y Fitness</li>
            <li>Electrónica, audio y video</li>
            <li>Herramientas</li>
            <li>Hogar</li>
            <li>Inmuebles</li>
            <li>Instrumentos musicales</li>
            <li>Juguetes</li>
            <li>Joyas</li>
            <li>Libros</li>
            <li>Repuestos para vehículos</li>
            <li>Ropa y Zapatos</li>
            <li>Otras categorías</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

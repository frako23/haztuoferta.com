import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Categories = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" className="me-3" onClick={handleShow}>
        Categorias
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categorias de productos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ "list-style": "none" }}>
            <li>Accesorios para bebes</li>
            <li>Accesorios para mascotas</li>
            <li>Articulos de coleccion</li>
            <li>Carros y Motos</li>
            <li>Camaras y Accesorios</li>
            <li>Celulares</li>
            <li>Computacion</li>
            <li>Consolas y Videojuegos</li>
            <li>Deporte y Fitness</li>
            <li>Electrodomesticos</li>
            <li>Electronica, audio y video</li>
            <li>Herramientas</li>
            <li>Hogar</li>
            <li>Inmuebles</li>
            <li>Instrumentos musicales</li>
            <li>Juguetes</li>
            <li>Joyas</li>
            <li>Libros</li>
            <li>Repuestos para vehiculos</li>
            <li>Ropa y Zapatos</li>
            <li>Otras categorias</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import "../../styles/publish.css";

export const Buy = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const { store, actions } = useContext(Context);

  return (
    <>
      <div id="container">
        <div id="container1" className="">
          <h1>Que estas buscando?</h1>
        </div>
        <Form
          className="bg-white m-5 p-4 border rounded-4 border-dark border-opacity-25"
          id="form"
        >
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Titulo</InputGroup.Text>
            <Form.Control
              placeholder="Titulo de la publicacion"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="dropdown select">
              <option disabled selected>
                Escoge una categoria
              </option>
              <option value="telefonos">Accesorios para bebés</option>
              <option value="commputadoras">Accesorios para mascotas</option>
              <option value="videojuegos">Artículos de colección</option>
              <option value="telefonos">Carros y Motos</option>
              <option value="telefonos">Cámaras y Accesorios</option>
              <option value="telefonos">Celulares</option>
              <option value="telefonos">Computación</option>
              <option value="telefonos">Consolas y Videojuegos</option>
              <option value="telefonos">Electrodomésticos</option>
              <option value="telefonos">Deporte y Fitness</option>
              <option value="telefonos">Electrónica, audio y video</option>
              <option value="telefonos">Herramientas</option>
              <option value="telefonos">Hogar</option>
              <option value="telefonos">Inmuebles</option>
              <option value="telefonos">Instrumentos musicales</option>
              <option value="telefonos">Juguetes</option>
              <option value="telefonos">Joyas</option>
              <option value="telefonos">Libros</option>
              <option value="telefonos">Repuestos para vehículos</option>
              <option value="telefonos">Ropa y Zapatos</option>
              <option value="telefonos">Otras categorías</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Cuanto estas dispuesto a pagar?</Form.Label>
            <div className="d-flex">
              <Form.Select aria-label="dropdown select" className="w-auto">
                <option value="telefonos">$</option>
                <option value="commputadoras">€</option>
                <option value="videojuegos">Bs</option>
              </Form.Select>
              <Form.Control type="number" placeholder="Haz tu oferta aca" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Button variant="primary" onClick={actions.postOfertas()}>
            !Haz tu oferta!
          </Button>
        </Form>
      </div>
    </>
  );
};

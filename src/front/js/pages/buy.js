import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import "../../styles/publish.css";

export const Buy = () => {
  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [oferta, setOferta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const { store, actions } = useContext(Context);
  const sendData = () => {
    actions.postOfertas({
      titulo: titulo,
      categoria: categoria,
      oferta: oferta,
      descripcion: descripcion,
    });
    actions.setNotification("¡Has creado tu oferta de compra exitosamente!");
  };

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
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
            />
          </InputGroup>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              aria-label="dropdown select"
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            >
              <option disabled selected>
                Escoge una categoria
              </option>
              <option value="Accesorios para bebés">
                Accesorios para bebés
              </option>
              <option value="Accesorios para mascotas">
                Accesorios para mascotas
              </option>
              <option value="Artículos de colección">
                Artículos de colección
              </option>
              <option value="Carros y Motos">Carros y Motos</option>
              <option value="Cámaras y Accesorios">Cámaras y Accesorios</option>
              <option value="Celulares">Celulares</option>
              <option value="Computadoras">Computadoras</option>
              <option value="Consolas y Videojuegos">
                Consolas y Videojuegos
              </option>
              <option value="Electrodomésticos">Electrodomésticos</option>
              <option value="Deporte y Fitness">Deporte y Fitness</option>
              <option value="Electrónica">Electrónica, audio y video</option>
              <option value="Herramientas">Herramientas</option>
              <option value="Hogar">Hogar</option>
              <option value="Inmuebles">Inmuebles</option>
              <option value="Instrumentos musicales">
                Instrumentos musicales
              </option>
              <option value="Juguetes">Juguetes</option>
              <option value="Joyas">Joyas</option>
              <option value="Libros">Libros</option>
              <option value="Repuestos para vehículos">
                Repuestos para vehículos
              </option>
              <option value="Ropa y Zapatos">Ropa y Zapatos</option>
              <option value="Otras categorías">Otras categorías</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Cuanto estas dispuesto a pagar?</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                ¿Cuánto ofreces?
              </InputGroup.Text>
              <Form.Control
                placeholder="Haz tu oferta aqui"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={oferta}
                onChange={(e) => {
                  setOferta(e.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" onClick={sendData}>
            !Haz tu oferta!
          </Button>
        </Form>
      </div>
    </>
  );
};

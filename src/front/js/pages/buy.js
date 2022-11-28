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
              <option value="bebes">Accesorios para bebés</option>
              <option value="mascotas">Accesorios para mascotas</option>
              <option value="coleccion">Artículos de colección</option>
              <option value="automotor">Carros y Motos</option>
              <option value="camaras">Cámaras y Accesorios</option>
              <option value="celulares">Celulares</option>
              <option value="computadoras">Computadoras</option>
              <option value="videojuegos">Consolas y Videojuegos</option>
              <option value="electrodomesticos">Electrodomésticos</option>
              <option value="deporte">Deporte y Fitness</option>
              <option value="electronica">Electrónica, audio y video</option>
              <option value="herramientas">Herramientas</option>
              <option value="hogar">Hogar</option>
              <option value="inmuebles">Inmuebles</option>
              <option value="musica">Instrumentos musicales</option>
              <option value="juguetes">Juguetes</option>
              <option value="joyas">Joyas</option>
              <option value="libros">Libros</option>
              <option value="repuestos">Repuestos para vehículos</option>
              <option value="ropa">Ropa y Zapatos</option>
              <option value="otros">Otras categorías</option>
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
          <Button
            variant="primary"
            onClick={() => {
              actions.postOfertas({
                titulo: titulo,
                categoria: categoria,
                oferta: oferta,
                descripcion: descripcion,
              });
            }}
          >
            !Haz tu oferta!
          </Button>
        </Form>
      </div>
    </>
  );
};

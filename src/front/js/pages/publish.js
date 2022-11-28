import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import "../../styles/publish.css";
import CloudinaryUploadWidget from "../component/upLoadImages";

export const Publish = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [moneda, setMoneda] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div id="container">
        <div id="container1" className="">
          <h1>Que deseas vender?</h1>
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
          <Form.Group className="mb-3" controlId="formFile">
            <div>
              {selectedImage && (
                <div>
                  <img
                    alt="not found"
                    width={"100%"}
                    height={"500px"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <button
                    className="rounded p-2 btn btn-primary position-absolute b-20"
                    onClick={() => setSelectedImage(null)}
                  >
                    Remove
                  </button>
                </div>
              )}
              <br />

              <br />
              <input
                className="form-control"
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </div>
            <CloudinaryUploadWidget />
          </Form.Group>

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
            <Form.Label>Precio</Form.Label>
            <div className="d-flex">
              <Form.Select
                aria-label="dropdown select"
                className="w-auto"
                onChange={(e) => {
                  setMoneda(e.target.value);
                }}
              >
                <option disabled selected>
                  #
                </option>
                <option value="$">$</option>
                <option value="€">€</option>
                <option value="Bs">Bs</option>
              </Form.Select>
              <Form.Control
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => {
                  setPrecio(e.target.value);
                }}
              />
            </div>
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
        </Form>
      </div>
    </>
  );
};

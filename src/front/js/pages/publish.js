import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../styles/publish.css";
import CloudinaryUploadWidget from "../component/upLoadImages";

export const Publish = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <Form.Label>Precio</Form.Label>
            <div className="d-flex">
              <Form.Select aria-label="dropdown select" className="w-auto">
                <option value="telefonos">$</option>
                <option value="commputadoras">€</option>
                <option value="videojuegos">Bs</option>
              </Form.Select>
              <Form.Control type="number" placeholder="Precio" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

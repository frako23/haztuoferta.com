import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../styles/publish.css";

export const Publish = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div id="container">
        <div id="container1">
          <h1>Que deseas vender?</h1>
        </div>
        <Form className="w-50 bg-white m-5 p-4 rounded">
          <Form.Group className="mb-3" controlId="formFile">
            <div>
              {selectedImage && (
                <div>
                  <img
                    id="imagen"
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
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="dropdown select">
              <option disabled selected>
                Escoge una categoria
              </option>
              <option value="telefonos">Telefonos</option>
              <option value="commputadoras">Computadoras</option>
              <option value="videojuegos">Videojuegos</option>
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

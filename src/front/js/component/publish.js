import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const Publish = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Publicar articulo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Que deseas vender?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formFile">
              <div>
                {selectedImage && (
                  <div>
                    <img
                      alt="not found"
                      width={"250px"}
                      src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>
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
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" placeholder="Precio" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Publicar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

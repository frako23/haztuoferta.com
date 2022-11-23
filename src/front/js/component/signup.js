import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FormGroup } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "../../styles/index.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendData = (event) => {
    event.preventDefault();
    actions.signup(name, lastname, phone, email, password);
    if (
      name != "" &&
      lastname != "" &&
      phone != "" &&
      email != "" &&
      password != ""
    ) {
      handleClose();
      actions.setNotification("¡Te has registrado exitosamente!");
    }
  };
  return (
    <>
      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registrate</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Por favor llena este formulario para crear tu cuenta</p>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Coloca tu nombre"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Coloca tu apellido"
                  autoFocus
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Coloca tu teléfono"
                  autoFocus
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Coloca tu email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Coloca una contraseña"
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="success" onClick={sendData}>
              Resgistrarme
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Button
        variant="outline-primary"
        className="boton mr-0"
        onClick={handleShow}
      >
        Registrate
      </Button>
    </>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FormGroup } from "react-bootstrap";
import "../../styles/index.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("Este es tu token", store.token);

    const handleClick = async () => {
        const success = await actions.login(email, password);
        // success && navigate("/");
    };

    useEffect(() => {
        if (store.token && store.token != "") navigate("/");
    }, [store.token]);
    return (
        <>
            {show ? (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ingresa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Por favor llena los datos para acceder a tu cuenta</p>
                        <Form>
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
                                    placeholder="Coloca tu contraseña"
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
                        <Button variant="success" onClick={handleClick}>
                            Ingresar
                        </Button>
                    </Modal.Footer>
                </Modal>
            ) : (
                <Button
                    variant="primary"
                    className="btn btn-primary boton"
                    onClick={handleShow}
                >
                    Ingresa
                </Button>
            )}
        </>
    );
};

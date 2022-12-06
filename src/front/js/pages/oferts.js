import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "../../styles/publish.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const Oferts = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getOfertas();
  }, []);

  return (
    <div className="container">
      <div className="text-center mx-5 px-5">
        <h1 className="ps-5 pt-5 pb-3 mb-5 display-5 border-bottom border-secondary">
          <i className="fa-solid fa-hand-holding-dollar"></i> Ofertas de Compra
        </h1>
        <Table striped>
          <thead>
            <tr>
              <th style={{ minWidth: "50px" }}>Título</th>
              <th style={{ minWidth: "50px" }}>Categoría</th>
              <th style={{ minWidth: "50px" }}>Se Ofrecen</th>
              <th style={{ minWidth: "50px" }}>Descripción</th>
              <th style={{ minWidth: "50px" }}>Contacto</th>
            </tr>
          </thead>
          <tbody>
            {store.ofertas.map((oferta) => {
              return (
                <tr key={oferta.id}>
                  <td>{oferta.titulo}</td>
                  <td>{oferta.categoria}</td>
                  <td>{oferta.oferta}</td>
                  <td>{oferta.descripcion}</td>
                  <td>
                    <OverlayTrigger
                      key={oferta.id}
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          {oferta.user_name + " " + oferta.user_lastname}
                          <br></br>
                          {oferta.user_email}
                          <br></br>
                          {oferta.user_phone}
                        </Tooltip>
                      }
                    >
                      <Button variant="secondary">Contacto</Button>
                    </OverlayTrigger>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

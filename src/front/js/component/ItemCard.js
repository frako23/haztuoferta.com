import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../styles/itemCard.css";

export const ItemCard = (props) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    if (store.computadoras.length > 0) {
      actions.getComputadoras();
    }
  }, []);

  return (
    <React.Fragment>
      <div className="card col-12 col-md-3">
        <div className="card-image">
          <figure className="image">
            <img
              src="https://dummyimage.com/400x300/f2f2f2/000000&text=Product+Image"
              className="img-fluid"
              alt="Placeholder image"
            ></img>
          </figure>
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <Card.Title>{props.computadoras.marca}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>{props.computadoras.modelo}</ListGroup.Item>
            <ListGroup.Item>
              {props.computadoras.tipo_de_negocio}
            </ListGroup.Item>
            <ListGroup.Item>{props.computadoras.precio}</ListGroup.Item>
          </ListGroup>
          <div>
            <Button variant="success">Haz tu Oferta!</Button>{" "}
            <Button variant="outline-danger">
              <i className="fa-regular fa-heart"></i>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

<React.Fragment>
  <div className="card mb-4" style={{ minWidth: "18rem" }}>
    <div
      className="bg-image hover-overlay ripple"
      data-mdb-ripple-color="light"
    >
      <img
        src="https://dummyimage.com/400x300/f2f2f2/000000&text=Product+Image"
        className="img-fluid"
      />
      <a href="#!">
        <div className="mask"></div>
      </a>
    </div>
    <div className="card-body d-flex flex-column justify-content-between">
      <div className="title-card justify-content-between h5">
        <span className="font-weight-bold">Nombre del Producto</span>
        <button href="#!" className="btn text-danger">
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
      <span className="item-category h6">Intercambio y/o Venta</span>
      <span className="item-price h5">
        <strong>Precio: </strong> $20
      </span>
      <a href="#!" className="btn btn-success">
        Haz tu Oferta!
      </a>
    </div>
  </div>
</React.Fragment>;

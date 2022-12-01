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
      <div className="col-md-4">
        <div className="card ">
          <img
            src={props.computadoras.img_url}
            className="card-img-top w-100"
            style={{ height: "300px" }}>
          </img>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <span className="item-title font-weight-bold h5"><strong>{props.computadoras.marca} {props.computadoras.modelo}</strong></span>
              <span className="item-price-weight-bold h5"><strong>{props.computadoras.moneda + " " + props.computadoras.precio}</strong></span>
            </div>
            <p className="item-description card-text mb-1 mt-1">
              {props.computadoras.titulo}
            </p>
            <div className="d-flex align-items-center flex-row">
              <span className="offer-type guarantee h5">{props.computadoras.tipo_de_negocio}</span>
            </div>
          </div>
          <hr />
          <div className="card-body adjust-content-between">
            <div className="text-right buttons">
              <button className="btn btn-outline-dark">Agregar a Favoritos</button> <Link to={`singleComp/${props.computadoras.id}`}><button className="btn btn-dark">Ver más!</button></Link> </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


      // <div className="card col-12 col-md-3" style={{ minwidth: "14rem" }}>
      //   <div className="card-image">
      //     <figure className="image">
      //       <img
      //         src={props.computadoras.img_url}
      //         className="img-fluid"
      //         alt="Placeholder image"
      //       ></img>
      //     </figure>
      //   </div>
      //   <div className="card-body d-flex flex-column text-center justify-content-between">
      //     <Card.Title>{props.computadoras.marca}</Card.Title>
      //     <ListGroup variant="flush">
      //       <ListGroup.Item>{props.computadoras.modelo}</ListGroup.Item>
      //       <ListGroup.Item>
      //         {props.computadoras.tipo_de_negocio}
      //       </ListGroup.Item>
      //       <ListGroup.Item>{props.computadoras.precio}</ListGroup.Item>
      //     </ListGroup>
      //     <div className="d-flex justify-content-around">
      //       <Button variant="success">Haz tu Oferta!</Button>{" "}
      //       <Button variant="outline-danger">
      //         <i className="fa-regular fa-heart"></i>
      //       </Button>
      //     </div>
      //   </div>
      // </div>
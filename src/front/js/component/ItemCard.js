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
			<div className="card col-12 col-md-3" style={{ minwidth: "14rem" }}>
				<div className="card-image">
					<figure className="image">
						<img
							src="https://placehold.co/600x400?text=PRODUCTO"
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

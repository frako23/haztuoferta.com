import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/banner.css";
import { ItemCard } from "../component/ItemCard";
import { Carousel } from "../component/carousel.js";
import { Segmento } from "../component/Segmento";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<Carousel />
			<Segmento />
			<section className="banner">
				<div className="container d-flex flex-column mb-2">
					<header>
						<h1 className="display-4 text-bold text-center">Has Tu Oferta</h1>
						<p className="text-center text-bold"> Oferta, Intercambia o Subasta tus Productos. Que esperas para comprar a tu manera?</p>
					</header>
					<div className="call-to-action text-center">
						<button className="btn btn-outline-secondary">Compra Diferente, Resgístrate Ya!</button>
					</div>
				</div>
			</section>
			<div className="container">
				<h2 className="text-center my-4 display-6">Los Mas Buscados</h2>
				<div className="itemcard gap-5">
					{store.computadoras.map((computadoras, index) => {
						return <ItemCard computadoras={computadoras} key={index} />;
					})}
				</div>
			</div>
		</React.Fragment >
	);
};

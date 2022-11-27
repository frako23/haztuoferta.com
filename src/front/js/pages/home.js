import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";
import { Carousel } from "../component/carousel.js";
import { Segmento } from "../component/Segmento";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<Carousel />
			<Segmento />
			<div className="text-center">
				<figure className="image">
					<img
						src="https://i.imgur.com/biKBhrV.png"
						style={{ width: "400px" }}
						alt="Placeholder image"
					></img>
				</figure>
				<div className="container">
					<h2 className="text-center my-4 display-6">Los Mas Buscados</h2>
					<div className="itemcard gap-5">
						{store.computadoras.map((computadoras, index) => {
							return <ItemCard computadoras={computadoras} key={index} />;
						})}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

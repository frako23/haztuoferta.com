import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";
import { Carousel } from "../component/carousel.js";
import { Secciones } from "../component/Secciones";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<Carousel />
			<Secciones />
			<div className="text-center mt-5">
				<h1 className="display-3">Haz tu Oferta!</h1>
				<div className="container">
					<h2 className="text-start my-4 display-6">Los Mas Buscados</h2>
					<div className="itemcard gap-5">
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

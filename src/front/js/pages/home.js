import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";
import { Carousel } from "../component/carousel.js";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<div className="text-center mt-5">
				<h1>Hello Rigo!!</h1>
				<div className="container">
					<h2 className="text-start my-4 display-4">Los Mas Buscados</h2>
					<div className="itemcard gap-5">
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
					</div>
				</div>
				<div className="alert alert-info">
					{store.message || "Loading message from the backend (make sure your python backend is running)..."}
				</div>
				<p>
					This boilerplate comes with lots of documentation:{" "}
					<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
						Read documentation
					</a>
				</p>
			</div>
		</React.Fragment>
	);
};



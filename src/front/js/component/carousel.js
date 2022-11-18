import React from "react";
import "../../styles/carousel.css";


export const Carousel = () => {
	return (
		<div id="carousel" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://i.postimg.cc/WztFmNMx/2.png" className="d-block w-100" alt="..."></img>
				</div>
				<div className="carousel-item">
					<img src="https://i.postimg.cc/Hsqc5CjP/3.png" className="d-block w-100" alt="..."></img>
				</div>
				<div className="carousel-item">
					<img src="https://i.postimg.cc/fbKJ6tC6/1.png" className="d-block w-100" alt="..."></img>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Anterior</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Siguiente</span>
			</button>
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
		</div>











	);
};

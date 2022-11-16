import React from "react";
import "../../styles/carousel.css";


export const Carousel = () => {
	return (
		<div id="carousel" className="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
				<img src="https://i.postimg.cc/WztFmNMx/2.png" class="d-block w-100" alt="..."></img>
				</div>	
				<div class="carousel-item">
				<img src="https://i.postimg.cc/Hsqc5CjP/3.png" class="d-block w-100" alt="..."></img>
				</div>
				<div class="carousel-item">
				<img src="https://i.postimg.cc/fbKJ6tC6/1.png" class="d-block w-100" alt="..."></img>
				</div>	
			</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">	
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Anterior</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    			<span class="carousel-control-next-icon" aria-hidden="true"></span>
    			<span class="visually-hidden">Siguiente</span>
				</button>
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
		</div>

			








		
	);
};

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/segmento.css";

export const Segmento = () => {
	return (
		<React.Fragment>
			<section className="section-products">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-md-8 col-lg-6">
							<div className="header">
								<h2 className="display-5">COMPRA DIFERENTE</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-4 col-xl-3">
							<Link className="seccion-link" to="/demo">
								<div className="seccion">
									<div className="image">
										<span className="img-card">
											<img src="https://placehold.co/600x400?text=QUIERO+VENDER" />
										</span>
									</div>
									<div className="seccion-inner text-center pt-5">
										<div className="header text-center">
											<h2>VENDE</h2>
											<h3>Vende tu Producto!</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-6 col-lg-4 col-xl-3">
							<Link className="seccion-link" to="/oferts">
								<div className="seccion">
									<div className="image">
										<span className="img-card">
											<img src="https://placehold.co/600x400?text=QUIERO+COMPRAR" />
										</span>
									</div>
									<div className="seccion-inner text-center pt-5">
										<div className="header text-center">
											<h2>COMPRA</h2>
											<h3>Haz una Oferta!</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-6 col-lg-4 col-xl-3">
							<Link className="seccion-link" to="/demo">
								<div className="seccion">
									<div className="image">
										<span className="img-card">
											<img src="https://placehold.co/600x400?text=QUIERO+CAMBIAR" />
										</span>
									</div>
									<div className="seccion-inner text-center pt-5">
										<div className="header text-center">
											<h2>INTERCAMBIA</h2>
											<h3>Porpón un Trueque!</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-6 col-lg-4 col-xl-3">
							<Link className="seccion-link" to="/demo">
								<div className="seccion">
									<div className="image">
										<span className="img-card">
											<img src="https://placehold.co/600x400?text=QUIERO+SUBASTAR" />
										</span>
									</div>
									<div className="seccion-inner text-center pt-5">
										<div className="header text-center">
											<h2>SUBASTA</h2>
											<h3>Subasta tu Producto!</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section >
		</React.Fragment >
	);
};

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/ItemCard";
import { Carousel } from "../component/carousel.js";
import { Segmento } from "../component/Segmento";
import { Link, Navigate } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/banner.css";
import { Signup } from "../component/signup";
import { SearchBar } from "../component/SearchBar";

export const Home = () => {
  const { store, actions } = useContext(Context);

<<<<<<< HEAD
  const { computadoras, celulares } = store;

  let productos = computadoras.concat(celulares);

  return (
    <React.Fragment>
      <SearchBar />
      <Carousel />
      <Segmento />
      <section className="banner">
        <div className="container d-flex flex-column mb-2">
          <header>
            <h1 className="display-4 text-bold text-center">Haz Tu Oferta</h1>
            <p className="text-center text-bold">
              {" "}
              <i>
                Oferta, Intercambia o Subasta tus Productos. Que esperas para
                comprar a tu manera?
              </i>
            </p>
          </header>
          <div className="call-to-action text-center">
            <button
              className="btn btn-outline-secondary"
              onClick={(event) => Navigate(<Signup />)}
            >
              Compra Diferente, Regístrate Ya!
            </button>
          </div>
        </div>
      </section>
      <div className="container">
        <h2 className="text-left mt-5 mb-3 display-5">
          <strong>Los Mas Buscados</strong>
        </h2>
        <div className="itemcard gap-4">
          {productos.map((computadoras, index) => {
            return <ItemCard computadoras={computadoras} key={index} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
=======
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
>>>>>>> f3e26151041d2590f35927fe1a161bfd6b18453e
};

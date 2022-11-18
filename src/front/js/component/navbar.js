import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
<<<<<<< HEAD
import { Publish } from "./publish";
import "../../styles/publish.css";
=======
import { Publish } from "./publish-modal";
import { Signup } from "./signup";
import { Login } from "./login";
import "../../styles/index.css";
>>>>>>> aaef49f94d7a13f9960a2d6c90a8615d8e294e95

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark bg-dark text-light">
      <div className="container">
        <div className="icons-left">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">
              <i class="fa-solid fa-house"></i>
            </span>
          </Link>
          <i class="fa-regular fa-circle-question"></i>
        </div>
        <div className="ml-auto">
          <Link to="/">
            <Publish />
          </Link>
        </div>
        <div className="ml-auto nav-item dropdown">
          {!store.token ? (
            <Signup />
          ) : (
            <>
              <button
                className="btn btn-primary dropdown-toggle ddt"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>
                  Favoritos (
                  {store.favorites.length > 0 ? store.favorites.length : 0})
                </strong>
              </button>
              <ul
                className="dropdown-menu ddt"
                aria-labelledby="navbarScrollingDropdown"
              >
                {store.favorites.map((fav) => {
                  return (
                    <li key={fav.name}>
                      <a href="#" className="dropdown-item">
                        {fav.name}{" "}
                        <button
                          type="button"
                          className="btn btn-danger mx-2 boton"
                          onClick={(event) => actions.toggleFavorite(fav)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
        {!store.token ? (
          <Login />
        ) : (
          <button
            type="button"
            className="btn btn-primary boton"
            onClick={(event) => actions.logout()}
          >
            <strong>Salir</strong>
          </button>
        )}

<<<<<<< HEAD
        <button className="btn btn-primary ms-5" type="button">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
=======
        <form class="d-flex">
          <input
            className="form-control me-2 inputnavbar"
            type="search"
            placeholder="Búscalo aqui"
            aria-label="Search"
          />
          <button className="btn btn-primary boton" type="submit">
            Buscar
          </button>
        </form>
>>>>>>> aaef49f94d7a13f9960a2d6c90a8615d8e294e95
      </div>
    </nav>
  );
};

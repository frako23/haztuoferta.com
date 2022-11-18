import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Publish } from "./publish-modal";
import { Signup } from "./signup";
import { Login } from "./login";
import "../../styles/index.css";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark bg-dark text-light paddingnavbar">
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
        <form class="d-flex">
          <input
            className="form-control me-2 inputnavbar"
            type="search"
            placeholder="Busca lo que quieras!"
            aria-label="Search"
          />
          <button className="btn btn-primary boton" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

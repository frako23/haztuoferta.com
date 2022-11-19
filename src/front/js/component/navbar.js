import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Categories } from "./categories";
import "../../styles/publish.css";
import { Signup } from "./signup";
import { Login } from "./login";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark bg-dark text-light">
      <div className="container">
        <div className="icons-left">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">
              <i className="fa-solid fa-house"></i>
            </span>
          </Link>
          <i className="fa-regular fa-circle-question"></i>
        </div>
        <div className="ml-auto">
          <Categories />
          <Link to="/Publish">
            <button
              className="btn btn-primary"
              id=""
              role="button"
              aria-expanded="false"
            >
              Publicar Artículo
            </button>
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

        <form className="d-flex">
          <input
            className="form-control me-2 inputnavbar"
            type="search"
            placeholder="Búscalo aqui"
            aria-label="Search"
          />
          <button className="botonsrch btn btn-primary" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Publish } from "./publish-modal";
import { Signup } from "./signup";
import { Login } from "./login";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <i className="fa-solid fa-house"> Home</i>
          </span>
        </Link>
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
                          className="btn btn-danger mx-2"
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
            className="btn btn-primary"
            onClick={(event) => actions.logout()}
          >
            <strong>Salir</strong>
          </button>
        )}

        <button className="btn btn-primary ms-5" type="button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </nav>
  );
};

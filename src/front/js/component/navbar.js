import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Categories } from "./categories";
import "../../styles/publish.css";
import { Signup } from "./signup";
import { Login } from "./login";
import logo from "../../img/logoSimple.png";
import "../../styles/navbar.css";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-white bg-white text-light sticky-top">
      <div className="container">
        <div className="d-flex flex-row m-1 px-3 justify-content-center">
          <Categories />
        </div>
        <div className="d-flex flex-row col-auto p-1 text-center">
          <div className="icons-left  ">
            <Link to="/">
              <span className="navbar-brand mb-0">
                <img src={logo} style={{ height: "50px" }} />
              </span>
            </Link>
          </div>
        </div>
        <div className="d-flex flex-row p-1 text-center">
          <div className="nav-item dropdown">
            <form className="d-flex align-content-center px-3 mb-1">
              <input
                className="form-control me-2 inputnavbar"
                type="search"
                placeholder="Búscalo aqui"
                aria-label="Search"
              />
              <button className="botonsrch btn btn-info" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <div className="d-flex flex-row m-1 px-1">
            {!store.token ? (
              <Signup />
            ) : (
              <>
                <Link to="/Publish">
                  <button
                    className="btn btn-info"
                    id=""
                    role="button"
                    aria-expanded="false"
                  >
                    Publicar Artículo
                  </button>
                </Link>
                <button
                  className="btn btn-info dropdown-toggle ddt ms-3"
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
          <div className="d-flex flex-row m-1 px-1">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

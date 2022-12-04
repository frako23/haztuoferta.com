import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Categories } from "./categories";
import "../../styles/publish.css";
import { Signup } from "./signup";
import { Login } from "./login";
import { Button as MyButton } from "./Button";
import logo from "../../img/logoNavbar.png";
import { Search } from "./Search";
import { Button } from "bootstrap";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-white bg-white text-light sticky-top">
      <div className="container-fluid justify-content-between">
        <div className="d-flex flex-row justify-content-center ms-3">
          <Categories />
        </div>
        <div className="align-items-start my-1">
          <Link to="/">
            <img src={logo} style={{ height: "50px" }} />
          </Link>
        </div>
        <div className="d-flex flex-row p-1 text-center">
          <div className="d-flex align-items-center">
            {!store.token ? (
              <Signup />
            ) : (
              <>
                <Link to="/Publish">
                  <MyButton
                    title="Publicar Artículo"
                    classButton="btn signup__button--register me-2"
                  />
                </Link>
                <Link to="/Buy">
                  <MyButton
                    title="Publicar Búsqueda"
                    classButton="btn signup__button--register"
                  />
                </Link>
                <button
                  className="btn signup__button--register dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Favoritos (
                  {store.favoritos.length > 0 ? store.favoritos.length : 0})
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  {store.favoritos.map((fav) => {
                    return (
                      <li key={fav.titulo}>
                        <a href="#" className="dropdown-item">
                          {fav.titulo}{" "}
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
          <div className="d-flex align-items-between ms-1">
            {!store.token ? (
              <Login />
            ) : (
              <button
                className="btn signup__button--register"
                onClick={(event) => actions.logout()}
              >
                Salir
              </button>
            )}
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Categories } from "./categories";
import "../../styles/publish.css";
import { Signup } from "./signup";
import { Login } from "./login";
import Dropdown from "react-bootstrap/Dropdown";
import { Button as MyButton } from "./Button";
import logo from "../../img/LOGOHAZTUOFERTA.png";
import { Search } from "./Search";
import { Button } from "bootstrap";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-white bg-white navbar-expand-md text-light sticky-top d-flex flex-column">
        <div className="container-fluid justify-content-between">
          <div className="d-flex flex-row justify-content-center ms-3">
            <Categories />
            <div className="navbar-brand align-items-start my-1">
              <Link to="/">
                <img src={logo} style={{ height: "50px" }} />
              </Link>
            </div>
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
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn signup__button--register"
                      variant="success"
                      id="dropdown-basic"
                    >
                      Favoritos (
                      {store.favoritos.length > 0 ? store.favoritos.length : 0})
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {store.favoritos.map((fav) => {
                        return (
                          <Dropdown.Item key={fav} href="#/action-1">
                            {fav}{" "}
                            <button
                              type="button"
                              className="btn btn-danger mx-2 boton"
                              onClick={(event) => actions.toggleFavorite(fav)}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </div>
            <div className="d-flex align-items-between ms-1">
              {!store.token ? (
                <Login />
              ) : (
                <button
                  className="btn signup__button--login"
                  onClick={(event) => actions.logout()}
                >
                  Salir
                </button>
              )}
              <Search />
            </div>
          </div>
        </div>
        <div>
          {store.notification && (
            <div
              className="alert alert-success"
              onClick={(e) => actions.setNotification(undefined)}
              role="alert"
            >
              {store.notification}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

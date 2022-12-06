import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Modal = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.computadoras.length > 0) {
      actions.getComputadoraId(store.computadoras[0].id);
    }
  }, [store.computadoras]);

  return (
    <>
      <div
        className="modal"
        id="ventana1"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Venta
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Deseas comprar este producto por
              {store.computadoras[0] &&
                " " +
                  store.computadoras[0].moneda +
                  " " +
                  store.computadoras[0].precio}
              ?
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#ventana2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="ventana2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal1">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Datos del vendedor
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex">
              <ul className="justify-content-center">
                <li>
                  {store.computadora.name + " " + store.computadora.lastname}
                </li>
                <br></br>
                <li>{store.computadora.email}</li>
                <br></br>
                <li>{store.computadora.phone}</li>
              </ul>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>{" "}
      {/*         
          <div
            className="modal fade"
            id="ventana1"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel">
                    Intercambio
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h5>Que ofreces para el intercambio?</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Haz tu oferta aqui"
                    aria-label="Nombre de usuario del destinatario"
                    aria-describedby="button-addon2"
                  ></input>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#ventana2"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Ofertar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="ventana2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered modal1">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    Tu oferta ha sido enviada correctamete
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex">
                  <h1>
                    <i class="fa-duotone fa-file-check"></i>
                  </h1>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Back to first
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      ) : store.computadoras &&
        store.computadoras.tipo_de_negocio == "Subasta" ? (
        <>
          <div
            className="modal fade"
            id="ventana1"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel">
                    Subasta
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h1>Cuanto vas a ofrecer?</h1>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Haz tu oferta aqui"
                    aria-label="Nombre de usuario del destinatario"
                    aria-describedby="button-addon2"
                  ></input>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#ventana2"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Haz tu oferta
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="ventana2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered modal1">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    Tu oferta ha sido enviada correctamete
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex">
                  <h1>
                    <i class="fa-duotone fa-file-check"></i>
                  </h1>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Back to first
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        ""
      )} */}
      <a
        className="btn signup__button--register me-2"
        data-bs-toggle="modal"
        href="#ventana1"
        role="button"
      >
        Haz tu oferta
      </a>
    </>
  );
};

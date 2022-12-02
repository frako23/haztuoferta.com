import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Comments } from "../component/Comments";
import Table from "react-bootstrap/Table";
// import { ProductGallery } from "../component/productGallery";
import "../../styles/comments.css";
import "../../styles/single.css";

export const SingleComp = (props) => {
  const { store, actions } = useContext(Context);

  const handleClick = event => {
    console.log(event.target);
    console.log('Image clicked');
  };

  const params = useParams();
  console.log(params);

  let comp = store.computadoras.find((computadora) => {
    return computadora.id == params.id;
  });
  console.log(comp);

  return (
    <div className="container">
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                {/* items lado izquierdo */}
                <div className="main_image">
                  <img
                    src={comp && comp.img_url}
                    id="main_product_image"
                    width="350"
                  ></img>
                </div>
                <div className="thumbnail_images">
                  <ul id="thumbnail">
                    <li>
                      <img
                        onClick={(event) => handleClick(event, 'hello')}
                        src="https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/6/1/612H9LA-2_T1666984556.png"
                        width="70"
                      ></img>
                    </li>
                    <li>
                      <img
                        onClick={(event) => handleClick(event, 'hello')}
                        src="https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/6/1/612H9LA-3_T1666984556.png"
                        width="70"
                      ></img>
                    </li>
                    <li>
                      <img
                        onClick={(event) => handleClick(event, 'hello')}
                        src="https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/6/1/612H9LA-4_T1666984557.png"
                        width="70"
                      ></img>
                    </li>
                    <li>
                      <img
                        onClick={(event) => handleClick(event, 'hello')}
                        src="https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/6/1/612H9LA-7_T1666984558.png"
                        width="70"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* items lado derecho */}

            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>{comp && comp.titulo}</h2>
                </div>
                <div className="d-flex justify-content-between align-items-center"></div>
                <div className="mt-2 pr-3 content">
                  <div className="card-body">
                    <h1 className="card-title"></h1>

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Marca:</strong> {comp && comp.marca}
                        <strong className="ms-3">Modelo:</strong>{" "}
                        {comp && comp.modelo}
                      </li>
                      <li className="list-group-item">
                        <strong>Pantalla:</strong> {comp && comp.pantalla}
                      </li>
                      <li className="list-group-item">
                        <strong>Procesador:</strong> {comp && comp.procesador}
                      </li>
                      <li className="list-group-item">
                        <strong>Disco Duro:</strong> {comp && comp.disco_duro}
                      </li>
                      <li className="list-group-item">
                        <strong>Memoria RAM:</strong> {comp && comp.memoria_ram}
                      </li>
                      <li className="list-group-item">
                        <strong>Sistema Operativo:</strong>{" "}
                        {comp && comp.sistema_operativo}
                      </li>
                      <li className="list-group-item">
                        <strong>Tipo de producto:</strong>{" "}
                        {comp && comp.nuevo_usado}
                      </li>
                      <li className="list-group-item">
                        <strong>Tipo de transacción:</strong>{" "}
                        {comp && comp.tipo_de_negocio}
                      </li>
                      <li className="list-group-item">
                        <strong>Descripcion:</strong> {comp && comp.descripcion}
                      </li>
                    </ul>

                    <hr></hr>
                    <br></br>
                    {/* precio */}
                    <div className="product-info-price">
                      <div className="price-box price-final_price">
                        <span
                          className="price-container price-final_price tax weee"
                          translate="no"
                        >
                          <h5>
                            <strong className="me-3">Precio:</strong>
                            {comp && comp.moneda + " " + comp.precio}
                          </h5>
                          {/* <span className="price">
                            
                          </span> */}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* modal */}

                  <div className="buttons d-flex flex-row mt-5 gap-3">
                    <button className="btn btn-outline-dark">Agregar a Favoritos</button>
                    <button
                      className="btn signup__button--register me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Haz tu Oferta
                    </button>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Nuevo mensaje
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <h5>Venta</h5>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="$"
                                aria-label="Nombre de usuario del destinatario"
                                aria-describedby="button-addon2"
                              ></input>
                              <button
                                className="btn btn-outline-dark"
                                type="button"
                                id="button-addon2"
                              >
                                Enviar
                              </button>
                            </div>

                            <h5>Oferta</h5>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="$"
                                aria-label="Nombre de usuario del destinatario"
                                aria-describedby="button-addon2"
                              ></input>
                              <button
                                className="btn btn-outline-dark"
                                type="button"
                                id="button-addon2"
                              >
                                Enviar
                              </button>
                            </div>

                            <h5>Subasta</h5>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="$"
                                aria-label="Nombre de usuario del destinatario"
                                aria-describedby="button-addon2"
                              ></input>
                              <button
                                className="btn btn-outline-dark"
                                type="button"
                                id="button-addon2"
                              >
                                Enviar
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <Comments
          commentsUrl="https://3000-frako23-haztuofertacom-c8ycfnd9gg3.ws-us77.gitpod.io/singleComp/1"
          currentUserId="comment.userId"
        />
        ;
      </div>
    </div>
  );
};

// SingleComp.propTypes = {
//   match: PropTypes.object,
// };

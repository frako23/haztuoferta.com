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
                <div className="main_image">
                  <img
                    src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07973337.png"
                    id="main_product_image"
                    width="350"
                  ></img>
                </div>
                <div className="thumbnail_images">
                  <ul id="thumbnail">
                    <li>
                      <img
                        // onclick="changeImage(this)"
                        src="https://www.shutterstock.com/image-photo/laptop-computer-mock-green-screen-600w-1959079696.jpg"
                        width="70"
                      ></img>
                    </li>
                    <li>
                      <img
                        // onclick="changeImage(this)"
                        src="https://www.shutterstock.com/image-photo/mockup-green-screen-stanting-on-600w-1804298176.jpg"
                        width="70"
                      ></img>
                    </li>
                    <li>
                      <img
                        // onclick="changeImage(this)"
                        src="https://www.shutterstock.com/image-photo/laptop-on-desk-office-shows-600w-1804298161.jpg"
                        width="70"
                      ></img>
                    </li>
                    <li>
                      <img
                        // onclick="changeImage(this)"
                        src="https://www.shutterstock.com/image-photo/computer-peripherals-laptop-accessories-on-600w-1065152207.jpg"
                        width="70"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="heart">
                    <i className="bx bx-heart"></i>
                  </span>
                </div>
                <div className="mt-2 pr-3 content">
                  <div className="card-body">
                    <h1 className="card-title">
                      {/* {comp.marca + " " + comp.modelo} */}
                    </h1>
                    <Table striped bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td colSpan={2}>Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                    {/* <table className="table table-striped">
                      <tr>
                        <td>Pantalla</td>
                        <td>Procesador</td>
                        <td>Memoria Ram</td>
                        <td>Disco Duro</td>
                      </tr>
                      <tr>
                        <td>15.6"</td>
                        <td>Intel Core I5 3.36Ghz</td>
                        <td>DDR 3 8GB</td>
                        <td>SSD 264 GB</td>
                      </tr>
                    </table> */}

                    <hr></hr>
                    <br></br>
                    <h5>Tipo de Oferta🤑: Subasta🔨</h5>
                    <p>
                      Haz tu oferta 💲:
                      <input
                        type="number"
                        placeholder="Coloca tu oferta aqui"
                        required
                        min={1}
                        // value={oferta}
                        onChange={(e) => setEmail(e.target.value)}
                        className="ms-4"
                      />
                    </p>
                    <hr></hr>
                    <br></br>
                    <h5>Tipo de Oferta🤑: Venta🔨</h5>
                    <p>
                      Precio 💵:
                      <button className="btn btn-primary ms-4">Comprar</button>
                    </p>
                  </div>
                  <div className="buttons d-flex flex-row mt-5 gap-3">
                    <button className="btn btn-outline-dark">Comprar</button>
                    <button className="btn btn-dark">Haz tu oferta</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
      {/* <div className="card-body">
          <h1 className="card-title">HP 250 G9</h1>
          <p className="card-text">
            <table className="table table-striped">
              <tr className="table-title">
                <td>Pantalla</td>
                <td>Procesador</td>
                <td>Memoria Ram</td>
                <td>Disco Duro</td>
              </tr>
              <tr>
                <td>15.6"</td>
                <td>Intel Core I5 3.36Ghz</td>
                <td>DDR 3 8bg</td>
                <td>SSD 264 GB</td>
              </tr>
            </table>
          </p>
          <hr></hr>
          <br></br>
          <h5>Tipo de Oferta🤑: Subasta🔨</h5>
          <p>
            Haz tu oferta 💲:
            <input
              type="number"
              placeholder="Coloca tu oferta aqui"
              required
              min={1}
              // value={oferta}
              onChange={(e) => setEmail(e.target.value)}
              className="ms-4"
            />
          </p>
          <hr></hr>
          <br></br>
          <h5>Tipo de Oferta🤑: Venta🔨</h5>
          <p>
            Precio 💵: $500
            <button className="btn btn-primary ms-4">Comprar</button>
          </p>
        </div> */}

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

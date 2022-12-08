import React from "react";
import "../../styles/AboutUs.css";
import piero from "../../img/Piero.png"

export const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <h1>¿Quienes somos?</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Una nueva propuesta en el mecado de compra-venta. Su principal
          caracteristica es proveer al usuario de una interfaz simple que le
          permita intercambiar sus productos y proponer ofertas.
        </p>
      </div>

      <h2 className="text-center fw-bold my-4 fs-1 p-2">Nuestro Equipo</h2>

      {/* Francisco */}
      <div className="container py-5 border-top ">
        <div className="row d-flex justify-content-center ">
          <div className="col-8">
            <p className="fs-1 text fw-bolder">Francisco Orozco </p>
            <p className="fs-5 text">
              37 años, Ingeniero de Producción de la USB, con mas de 13 años de
              experiencia en marketing y ventas, papá de Sebastián
            </p>
            <p className="fs-5 text">Siempre viculado a la tecnología</p>
          </div>
          <div className="col-4 w-auto">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
              alt="imagen"
              width="300px"
              style={{ "border-radius": "50%" }}
            />
          </div>
        </div>
      </div>

      {/* Piero */}
      <div className="container py-5 border-top ">
        <div className="row d-flex justify-content-center ">
          <div className="col-4 w-auto">
            <img
              src={piero}
              alt="imagen"
              width="300px"
              style={{ "border-radius": "50%" }}
            />
          </div>
          <div className="col-8">
            <p className="fs-1 text fw-bolder">Piero Mastrogiacomo</p>
            <p className="fs-5 text">
              Médico de profesión, 40 años. Orgulloso padre.
            </p>
            <p className="fs-5 text">
              Amante de la tecnología en busca de un giro profesional de 180
              grados.
            </p>
          </div>
        </div>
      </div>

      {/* Javier */}
      <div className="container py-5 border-top ">
        <div className="row d-flex justify-content-center ">
          <div className="col-8">
            <p className="fs-1 text fw-bolder">Javier Klie </p>
            <p className="fs-5 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, id
              dolorem molestiae maiores autem, minus amet libero nihil odit
              consectetur, provident magni harum fuga tempore sunt praesentium
              magnam architecto. Quibusdam.
            </p>
          </div>
          <div className="col-4 w-auto">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
              alt="imagen"
              width="300px"
              style={{ "border-radius": "50%" }}
            />
          </div>
        </div>
      </div>

      {/* Luis */}
      <div className="container py-5 border-top ">
        <div className="row d-flex justify-content-center ">
          <div className="col-4 w-auto">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
              alt="imagen"
              width="300px"
              style={{ "border-radius": "50%" }}
            />
          </div>
          <div className="col-8">
            <p className="fs-1 text fw-bolder">Luis Camargo</p>
            <p className="fs-5 text">
              Estudiante de Medicina, 23 años <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container py-5 border-top ">
        <div className="row d-flex justify-content-center ">
          <div className="text-center">
            <p className="fs-1 text fw-bolder">Tecnologias que usamos</p>
          </div>
        </div>
      </div>
    </>
  );
};

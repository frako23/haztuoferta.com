import React from "react";
import "../../styles/AboutUs.css";
import piero from "../../img/Piero.png";
import logo from "../../img/teconologias.png";
import francisco from "../../img/foto_francisco.jpg";
import luis from "../../img/Foto_Luis.jpg";
import javier from "../../img/javier.png";

export const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <h1>¿Quienes somos?</h1>
        <p id="descripcion">
          Una nueva propuesta en el mercado de compra-venta. Su principal
          característica es proveer al usuario de una interfaz simple que le
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
              37 años, Ingeniero de Producción de la USB, con más de 13 años de
              experiencia en marketing y ventas, papá de Sebastián
            </p>
            <p className="fs-5 text">Siempre viculado a la tecnología</p>
          </div>
          <div className="col-4 w-auto">
            <img
              src={francisco}
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
              Diseñador grafico 3D con 8 años de experiencia, 28 años
            </p>
          </div>
          <div className="col-4 w-auto">
            <img
              src={javier}
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
              src={luis}
              alt="imagen"
              width="300px"
              style={{ "border-radius": "50%" }}
            />
          </div>
          <div className="col-8">
            <p className="fs-1 text fw-bolder">Luis Camargo</p>
            <p className="fs-5 text">
              Estudiante de Medicina, 23 años, amante de los animales.
            </p>
            <p className="fs-5 text">
              Apasionado por las nuevas tecnologias y la innovación, geek desde
              pequeño.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-5 border-top ">
        <div className="row d-flex justify-content-center ">
          <div className="text-center">
            <p className="fs-1 text fw-bolder">Tecnologías que usamos</p>
            <img
              src={logo}
              alt="imagen"
              width="1000px"
              style={{ "border-radius": "10%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

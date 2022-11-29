import React from "react";
import "../../styles/AboutUs.css";

export const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <h1>¿Quienes somos?</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 className="text-center fw-bold my-4 fs-1 p-2">Nuestro Equipo</h2>

      {/* Francisco */}
      <div className="container py-5 border-top ">
        <div className="row d-flex justify-content-center ">
          <div className="col-8">
            <p className="fs-2 text fw-bolder">
              Francisco{" "}
              <span
                className="text-secondary
                        "
              >
                CEO
              </span>{" "}
            </p>
            <p>
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

      {/* Piero */}
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
            <p className="fs-2 text fw-bolder">
              Piero <span className="text-secondary">CEO</span>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, id
              dolorem molestiae maiores autem, minus amet libero nihil odit
              consectetur, provident magni harum fuga tempore sunt praesentium
              magnam architecto. Quibusdam.
            </p>
          </div>
        </div>
      </div>

      {/* Javier */}
      <div className="container py-5 border-top ">
        <div className="row d-flex justify-content-center ">
          <div className="col-8">
            <p className="fs-2 text fw-bolder">
              Javier{" "}
              <span
                className="text-secondary
                        "
              >
                CEO
              </span>{" "}
            </p>
            <p>
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
            <p className="fs-2 text fw-bolder">
              Luis <span className="text-secondary">CEO</span>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, id
              dolorem molestiae maiores autem, minus amet libero nihil odit
              consectetur, provident magni harum fuga tempore sunt praesentium
              magnam architecto. Quibusdam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

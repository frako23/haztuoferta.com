import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import "../../styles/publish.css";
import CloudinaryUploadWidget from "../component/upLoadImages";
import context from "react-bootstrap/esm/AccordionContext";
import { Navigate, useNavigate } from "react-router-dom";
import { AvatarImage } from "../component/avatarImage";

export const Publish = () => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [moneda, setMoneda] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [procesador, setProcesador] = useState("");
  const [pantalla, setPantalla] = useState("");
  const [memoria_ram, setMemoria_ram] = useState("");
  const [disco_duro, setDisco_duro] = useState("");
  const [sistema_operativo, setSistema_operativo] = useState("");
  const [tipo_de_negocio, setTipo_de_negocio] = useState("");
  const [nuevo_usado, setNuevo_usado] = useState("");
  const [img_url, setImg_url] = useState("");
  const [almacenamiento_interno, setAlmacenamiento_interno] = useState("");
  const [camara_frontal, setCamara_frontal] = useState("");
  const [camara_trasera, setCamara_trasera] = useState("");
  const [bateria, setBateria] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  if (store.computadoras.length > 0) {
    console.log(
      store.computadoras.length,
      store.computadoras[store.computadoras.length - 1].titulo,
      store.computadoras[store.computadoras.length - 1].id + 1
    );
  }
  const dataComputadora = async () => {
    let variable = await actions.postComputadoras({
      titulo: titulo,
      marca: marca,
      modelo: modelo,
      procesador: procesador,
      pantalla: pantalla,
      memoria_ram: memoria_ram,
      disco_duro: disco_duro,
      sistema_operativo: sistema_operativo,
      moneda: moneda,
      precio: precio,
      tipo_de_negocio: tipo_de_negocio,
      nuevo_usado: nuevo_usado,
      descripcion: descripcion,
    });

    actions.postImgurl(
      store.imageUrl,
      categoria,
      store.computadoras[store.computadoras.length - 1].id + 1
    );
    navigate("/");
    actions.setNotification("¡Has publicado tu producto exitosamente!");
  };

  return (
    <>
      <div id="container">
        <div id="container1" className="">
          <h1 className="">¿Qué deseas vender?</h1>
        </div>
        <div className="containerpublish mb-5">
          <Form
            className="bg-white p-5 border rounded-4 border-dark border-opacity-25"
            id="form"
          >
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Titulo</InputGroup.Text>
              <Form.Control
                placeholder="Titulo de la publicacion"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={titulo}
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
              />
            </InputGroup>
            <Form.Label>Tipo de producto</Form.Label>
            <Form.Select
              aria-label="dropdown select"
              onChange={(e) => {
                setNuevo_usado(e.target.value);
              }}
            >
              <option disabled selected>
                Escoge una categoria
              </option>
              <option value="Nuevo">Nuevo</option>
              <option value="Usado">Usado</option>
            </Form.Select>

            <br></br>
            <Form.Label>Tipo de negocio</Form.Label>
            <Form.Select
              aria-label="dropdown select"
              className="mb-3"
              onChange={(e) => {
                setTipo_de_negocio(e.target.value);
              }}
            >
              <option disabled selected>
                Escoge una categoria
              </option>
              <option value="Venta">Venta</option>
              <option value="Intercambio">Intercambio</option>
              <option value="Subasta">Subasta</option>
            </Form.Select>

            {tipo_de_negocio == "Venta" ? (
              <Form.Group className="" controlId="exampleForm.ControlInput3">
                <Form.Label>Precio</Form.Label>
                <div className="d-flex">
                  <Form.Select
                    aria-label="dropdown select"
                    className="w-auto"
                    onChange={(e) => {
                      setMoneda(e.target.value);
                    }}
                  >
                    <option disabled selected>
                      #
                    </option>
                    <option value="$">$</option>
                    <option value="€">€</option>
                    <option value="Bs">Bs</option>
                  </Form.Select>
                  <Form.Control
                    type="number"
                    placeholder="Precio"
                    value={precio}
                    onChange={(e) => {
                      setPrecio(e.target.value);
                    }}
                  />
                </div>
              </Form.Group>
            ) : tipo_de_negocio == "Subasta" ? (
              <Form.Group className="" controlId="exampleForm.ControlInput3">
                <Form.Label>Precio de inicio</Form.Label>
                <div className="d-flex">
                  <Form.Select
                    aria-label="dropdown select"
                    className="w-auto"
                    onChange={(e) => {
                      setMoneda(e.target.value);
                    }}
                  >
                    <option disabled selected>
                      #
                    </option>
                    <option value="$">$</option>
                    <option value="€">€</option>
                    <option value="Bs">Bs</option>
                  </Form.Select>
                  <Form.Control
                    type="number"
                    placeholder="Coloca el precio de inicio de tú subasta"
                    value={precio}
                    onChange={(e) => {
                      setPrecio(e.target.value);
                    }}
                  />
                </div>
              </Form.Group>
            ) : tipo_de_negocio == "Intercambio" ? (
              <Form.Group className="" controlId="exampleForm.ControlInput3">
                <Form.Label>¿Qué estas buscando?</Form.Label>
                <div className="">
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    value={precio}
                    onChange={(e) => {
                      setPrecio(e.target.value);
                    }}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Coloca los productos que deseas como intercambio
                  </Form.Text>
                </div>
              </Form.Group>
            ) : (
              ""
            )}
            <Form.Group className="mb-3 d-grid gap-2" controlId="formFile">
              <Form.Label>Agregar fotos </Form.Label>
              <CloudinaryUploadWidget />
              {store.imageUrl.length > 0 && (
                <div>
                  {store.imageUrl.map((img) => {
                    return <img className="p-2" src={img.thumbnail} />;
                  })}
                </div>
              )}
            </Form.Group>

            <Form.Group className="" controlId="exampleForm.ControlInput2">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                aria-label="dropdown select"
                className="mb-3"
                onChange={(e) => {
                  setCategoria(e.target.value);
                }}
              >
                <option disabled selected>
                  Escoge una categoria
                </option>
                <option value="bebes">Accesorios para bebés</option>
                <option value="mascotas">Accesorios para mascotas</option>
                <option value="coleccion">Artículos de colección</option>
                <option value="automotor">Carros y Motos</option>
                <option value="camaras">Cámaras y Accesorios</option>
                <option value="celulares">Celulares</option>
                <option value="computadoras">Computadoras</option>
                <option value="videojuegos">Consolas y Videojuegos</option>
                <option value="electrodomesticos">Electrodomésticos</option>
                <option value="deporte">Deporte y Fitness</option>
                <option value="electronica">Electrónica, audio y video</option>
                <option value="herramientas">Herramientas</option>
                <option value="hogar">Hogar</option>
                <option value="inmuebles">Inmuebles</option>
                <option value="musica">Instrumentos musicales</option>
                <option value="juguetes">Juguetes</option>
                <option value="joyas">Joyas</option>
                <option value="libros">Libros</option>
                <option value="repuestos">Repuestos para vehículos</option>
                <option value="ropa">Ropa y Zapatos</option>
                <option value="otros">Otras categorías</option>
              </Form.Select>
            </Form.Group>

            {categoria == "computadoras" ? (
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Marca</InputGroup.Text>
                  <Form.Control
                    placeholder="Marca"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={marca}
                    onChange={(e) => {
                      setMarca(e.target.value);
                    }}
                  />

                  <InputGroup.Text id="basic-addon1">Modelo</InputGroup.Text>
                  <Form.Control
                    placeholder="Modelo"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={modelo}
                    onChange={(e) => {
                      setModelo(e.target.value);
                    }}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Procesador
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Procesador"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={procesador}
                    onChange={(e) => {
                      setProcesador(e.target.value);
                    }}
                  />
                  <InputGroup.Text id="basic-addon1">Pantalla</InputGroup.Text>
                  <Form.Control
                    placeholder="Pantalla"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={pantalla}
                    onChange={(e) => {
                      setPantalla(e.target.value);
                    }}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Disco duro
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Disco duro"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={disco_duro}
                    onChange={(e) => {
                      setDisco_duro(e.target.value);
                    }}
                  />
                  <InputGroup.Text id="basic-addon1">
                    Memoria Ram
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Memoria Ram"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={memoria_ram}
                    onChange={(e) => {
                      setMemoria_ram(e.target.value);
                    }}
                  />
                </InputGroup>
                <Form.Label>Sistema Operativo</Form.Label>
                <Form.Select
                  aria-label="dropdown select"
                  className="mb-3"
                  onChange={(e) => {
                    setSistema_operativo(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Escoge una categoria
                  </option>
                  <option value="Windows">Windows</option>
                  <option value="macOS">macOS</option>
                  <option value="ChromeOS">ChromeOS</option>
                </Form.Select>
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  className="mb-3"
                  value={descripcion}
                  onChange={(e) => {
                    setDescripcion(e.target.value);
                  }}
                />
                <Button
                  variant="primary"
                  onClick={() => {
                    dataComputadora;
                  }}
                >
                  Publica tu producto
                </Button>
              </div>
            ) : categoria == "celulares" ? (
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Marca</InputGroup.Text>
                  <Form.Control
                    placeholder="Marca"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={marca}
                    onChange={(e) => {
                      setMarca(e.target.value);
                    }}
                  />

                  <InputGroup.Text id="basic-addon1">Modelo</InputGroup.Text>
                  <Form.Control
                    placeholder="Modelo"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={modelo}
                    onChange={(e) => {
                      setModelo(e.target.value);
                    }}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Pantalla</InputGroup.Text>
                  <Form.Control
                    placeholder="Pantalla"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={pantalla}
                    onChange={(e) => {
                      setPantalla(e.target.value);
                    }}
                  />
                  <InputGroup.Text id="basic-addon1">Bateria</InputGroup.Text>
                  <Form.Control
                    placeholder="Bateria"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={bateria}
                    onChange={(e) => {
                      setBateria(e.target.value);
                    }}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Camara Frontal
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Camara Frontal"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={camara_frontal}
                    onChange={(e) => {
                      setCamara_frontal(e.target.value);
                    }}
                  />
                  <InputGroup.Text id="basic-addon1">
                    Camara Trasera
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Camara Trasera"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={camara_trasera}
                    onChange={(e) => {
                      setCamara_trasera(e.target.value);
                    }}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Almacenamiento Interno
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Almacenamiento Interno"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={almacenamiento_interno}
                    onChange={(e) => {
                      setAlmacenamiento_interno(e.target.value);
                    }}
                  />
                  <InputGroup.Text id="basic-addon1">
                    Memoria Ram
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Memoria Ram"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={memoria_ram}
                    onChange={(e) => {
                      setMemoria_ram(e.target.value);
                    }}
                  />
                </InputGroup>
                <Form.Label>Sistema Operativo</Form.Label>
                <Form.Select
                  aria-label="dropdown select"
                  className="mb-3"
                  onChange={(e) => {
                    setSistema_operativo(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Escoge una categoria
                  </option>
                  <option value="Windows">Android</option>
                  <option value="macOS">iOS</option>
                </Form.Select>
                <Form.Label>Descripción</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={5}
                  className="mb-3"
                  value={descripcion}
                  onChange={(e) => {
                    setDescripcion(e.target.value);
                  }}
                />
                <Button
                  variant="primary"
                  onClick={() => {
                    actions.postCelulares({
                      titulo: titulo,
                      marca: marca,
                      modelo: modelo,
                      procesador: procesador,
                      pantalla: pantalla,
                      memoria_ram: memoria_ram,
                      almacenamiento_interno: almacenamiento_interno,
                      sistema_operativo: sistema_operativo,
                      bateria: bateria,
                      camara_frontal: camara_frontal,
                      camara_trasera: camara_trasera,
                      moneda: moneda,
                      precio: precio,
                      tipo_de_negocio: tipo_de_negocio,
                      nuevo_usado: nuevo_usado,
                      descripcion: descripcion,
                    });
                    actions.postImgurl(
                      store.imageUrl,
                      categoria,
                      store.computadoras[store.computadoras.length - 1].id + 1
                    );
                    navigate("/");
                    actions.setNotification(
                      "¡Has publicado tu producto exitosamente!"
                    );
                  }}
                >
                  Publica tu producto
                </Button>
              </div>
            ) : (
              ""
            )}
          </Form>
        </div>
      </div>
    </>
  );
};

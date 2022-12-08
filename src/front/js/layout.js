import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Computadoras } from "./pages/computadoras";
import { Celulares } from "./pages/Celulares";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { SingleComp } from "./pages/singleComp";
import injectContext, { Context } from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Carousel } from "./component/carousel";
import { Publish } from "./pages/publish";
import { Buy } from "./pages/buy";
import { Oferts } from "./pages/oferts";
import { AboutUs } from "./pages/AboutUs";
import { Secciones } from "./pages/Secciones";
import { YourAccount } from "./pages/yourAccount";
import { Ventas } from "./pages/Ventas";
import { Subastas } from "./pages/Subastas";
import { Intercambios } from "./pages/Intercambios";
import { SubMenu } from "./pages/SubMenu.jsx";

//create your first component

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <SubMenu />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Computadoras />} path="/computadoras" />
            <Route element={<Celulares />} path="/celulares" />
            <Route element={<Secciones />} path="/Secciones" />
            <Route element={<Ventas />} path="/ventas" />
            <Route element={<Oferts />} path="/Oferts" />
            <Route element={<Intercambios />} path="/intercambios" />
            <Route element={<Subastas />} path="/subastas" />
            <Route element={<SingleComp />} path="/singleComp/:id" />
            <Route element={<Publish />} path="/Publish" />
            <Route element={<Buy />} path="/Buy" />
            <Route element={<AboutUs />} path="/AboutUs" />
            <Route element={<YourAccount />} path="/Account" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

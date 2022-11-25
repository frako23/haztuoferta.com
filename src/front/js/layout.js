import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Computadoras } from "./pages/computadoras";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext, { Context } from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Carousel } from "./component/carousel";
import { Publish } from "./pages/publish";
import { Buy } from "./pages/buy";
import { Oferts } from "./pages/oferts";
import { AboutUs } from "./pages/AboutUs";
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
          {store.notification && (
            <div
              className="alert alert-success"
              onClick={(e) => actions.setNotification(undefined)}
              role="alert"
            >
              {store.notification}
            </div>
          )}
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Computadoras />} path="/computadoras" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Publish />} path="/Publish" />
            <Route element={<Buy />} path="/Buy" />
            <Route element={<Oferts />} path="/Oferts" />
            <Route element={<AboutUs />} path="/AboutUs" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

import React from "react";

export const Secciones = () => {

    return (
        <React.Fragment>
            <div class="container-fluid px-0">
                <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
                    <div class="container-fluid d-flex"> <a class="navbar-brand" href="#">SECCIONES</a>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation"> <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Ofertas</a> </li>
                            <li class="nav-item" role="presentation"> <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Ventas</a> </li>
                            <li class="nav-item" role="presentation"> <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Intercambios</a> </li>
                            <li class="nav-item" role="presentation"> <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Subastas</a> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};
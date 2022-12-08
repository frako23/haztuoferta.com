import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const SubMenu = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center ">
                    <ul className="list-inline">
                        <li className="list-inline-item mx-3">
                            <NavLink to="/ventas" className={({ isActive }) =>
                                isActive ? "lead border border-0 border-bottom border-dark" : undefined}>
                                Ventas
                            </NavLink>
                        </li>
                        <li className="list-inline-item mx-3">
                            <NavLink to="/Oferts" className={({ isActive }) =>
                                isActive ? "lead border border-0 border-bottom border-dark" : undefined
                            }>
                                Ofertas
                            </NavLink>
                        </li>
                        <li className="list-inline-item mx-3"><NavLink to="/intercambios" className={({ isActive }) =>
                            isActive ? "lead border border-0 border-bottom border-dark" : undefined}>
                            Intercambios
                        </NavLink>
                        </li>
                        <li className="list-inline-item mx-3">
                            <NavLink to="/subastas" className={({ isActive }) =>
                                isActive ? "lead border border-0 border-bottom border-dark" : undefined}>
                                Subastas
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
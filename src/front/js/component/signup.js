import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/signup.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const sendData = (event) => {
    event.preventDefault();
    actions.signup(name, email, password);
    if (
      name != "" &&
      lastname != "" &&
      phone != "" &&
      email != "" &&
      password != ""
    )
      navigate("/login");
  };
  return (
    <div className="text-center mt-5">
      <h1>Sign Up</h1>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/">
          <button onClick={sendData}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  console.log("Este es tu token", store.token);

  const handleClick = () => {
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/");
  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {store.token && store.token != "" && store.token != undefined ? (
        "Estas loggeado con este token" + store.token
      ) : (
        <div>
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
            <button onClick={handleClick}>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

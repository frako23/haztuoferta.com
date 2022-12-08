import { text } from "@cloudinary/url-gen/qualifiers/source";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/searchBar.css";

export const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const onChangeHandler = (text) => {
    let matchCelulares = [];
    let matchComputadoras = [];

    if (text.length > 0) {
      matchCelulares = store.celulares.filter((celular) => {
        const regex = new RegExp(`${text}`, "gi");
        return celular.titulo.match(regex);
      });

      matchComputadoras = store.computadoras.filter((computadora) => {
        const regex = new RegExp(`${text}`, "gi");
        return computadora.titulo.match(regex);
      });
      console.log(matchComputadoras);
    }

    let searches = [...matchComputadoras, ...matchCelulares];
    console.log("match", searches);

    setSuggestions(searches);
    setInputValue(text);
  };

  const onSuggestHandler = (id) => {
    console.log(id);
    navigate(`/singleComp/${id}`)
    // setInputValue("");
    setSuggestions([]);
  };

  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        value={inputValue}
        className="input-search"
        placeholder="Busca lo que quieras..."
        onChange={(event) => {
          onChangeHandler(event.target.value.trim());
        }}
      ></input>
      {suggestions &&
        suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="suggestions col-md-12 justify-content-md-center"
            onClick={(event) => onSuggestHandler(suggestion.id)}
          >
            {suggestion.titulo}
          </div>
        ))}
    </div>
  );
};

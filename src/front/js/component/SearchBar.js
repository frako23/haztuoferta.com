import { text } from "@cloudinary/url-gen/qualifiers/source";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SearchBar = () => {
    const { store, actions } = useContext(Context);
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);


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
        console.log('match', searches);

        setSuggestions(searches);
        setInputValue(text);
    };

    // const onSuggestHandler = (text) => {
    //     setInputValue(text);
    //     setSuggestions([]);
    // };

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Search"
                value={inputValue}
                className="input input-search"
                onChange={(event) => {
                    onChangeHandler(event.target.value.trim());
                }}
            ></input>
            {suggestions && suggestions.map((suggestion, index) =>
                <div
                    key={index}
                    className="suggestions justify-content-md-center">
                    {suggestion.titulo}
                </div>
            )}
        </div>
    );
};

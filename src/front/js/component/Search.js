import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Search = () => {
  const { store, actions } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChageHandler = (text) => {
    let matchComputers = [];
    let matchCellphones = [];
    let matchVideoGames = [];

    if (text.length > 0) {
      matchComputers = store.computadoras.filter((computadoras) => {
        const regex = new RegExp(`${text}`, "gi");
        return computadoras.properties.name.match(regex);
      });

      matchCellphones = store.celulares.filter((celulares) => {
        const regex = new RegExp(`${text}`, "gi");
        return celulares.properties.name.match(regex);
      });

      matchVideoGames = store.videojuegos.filter((videojuegos) => {
        const regex = new RegExp(`${text}`, "gi");
        return videojuegos.properties.name.match(regex);
      });
    }
    let searches = [...matchComputers, ...matchCellphones, ...matchVideoGames];

    setSuggestions(searches);
    setInputValue(text);
  };

  const onSuggestHandler = (text) => {
    setInputValue(text);
    setSuggestions([]);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="input-group">
          <input
            type="text"
            className="form-control shadow-none border border-dark rounded-0"
            placeholder="Busca lo que quieras..."
          />
          <span className="input-group-btn">
            <button className="btn btn-search" type="button">
              <i className="fa fa-search fa-fw"></i>
            </button>
          </span>
        </div>
      </div>
    </React.Fragment>
  );

  // return (
  //     <div className="container py-3">
  //         <div className="row ">
  //             <h2 className="text-center">Search</h2>
  //             <input
  //                 type="text"
  //                 placeholder="Search"
  //                 value={inputValue}
  //                 className="input-search"
  //                 onChange={(event) => {
  //                     onChageHandler(event.target.value.trim());
  //                 }}
  //             ></input>
  //             <div className="suggestions">
  //                 {suggestions &&
  //                     suggestions.map((suggestion, index) => {
  //                         return (
  //                             <Link
  //                                 to={`/${suggestion.description.includes("person")
  //                                     ? "people"
  //                                     : suggestion.description.includes("planet")
  //                                         ? "planets"
  //                                         : "vehicles"
  //                                     }/${suggestion.uid}`}
  //                                 key={suggestion._id}
  //                                 className="d-block"
  //                                 onClick={() => onSuggestHandler(suggestion.properties.name)}
  //                             >
  //                                 {suggestion.properties.name}
  //                             </Link>
  //                         );
  //                     })}
  //             </div>
  //         </div>
  //     </div>
  // );
};

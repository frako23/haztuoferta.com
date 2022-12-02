import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";

export const Search = () => {
  const { store, actions } = useContext(Context);

  const location = useLocation();

  const [value, setValue] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="input-group">
          <input
            // value={value}
            onChange={(event) => actions.setSearchResults(event.target.value,
              ["computadoras", "celulares"].includes(location.pathname.replace("/", ""))
                ? location.pathname.replace("/", "")
                : undefined
            )}
            style={{ minWidth: "150px" }}
            type="text"
            className="form-control shadow-none border border-secondary rounded"
            placeholder="Busca lo que quieras..."
          />
          <div className="suggestions">{ }</div>
        </div>
      </div>
    </React.Fragment>
  );
};

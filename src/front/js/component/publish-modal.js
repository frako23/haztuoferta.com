import React from "react";
import PropTypes from "prop-types";
import "../../styles/publish.css";

export const Publish = () => {
  return (
    <div className="input-group d-flex flex-column w-75">
      <div>
        <input
          type="file"
          className="form-control w-50 d-inline-flex"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
          placeholder="Add an image"
        />
      </div>
      <input
        type="text"
        className="form-control w-50"
        id="item-title"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Title"
        placeholder="Title"
      />
      <div>
        <select name="Currency" className="form-control w-auto d-inline-flex">
          <option value="dolar">$</option>
          <option value="euro">€</option>
          <option value="bolivares" selected>
            bs
          </option>
        </select>
        <input
          type="number"
          className="form-control w-auto d-inline-flex "
          id="item-price"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Price"
          placeholder="Price"
        />
      </div>
    </div>
  );
};

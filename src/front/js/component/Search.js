import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Search = () => {
	const { store, actions } = useContext(Context);

	const [value, setValue] = useState("");

	const onChange = (event) => {
		setValue(event.target.value);
	}

	const [searchResults, setSearchResults] = useState([])

	const onSearch = (searchTerm) => {
		// API to fetch the search result
		let matchComputers = [];
		let matchCellphones = [];


		console.log("search", searchTerm);
	}

	return (
		<React.Fragment>
			<div className="container">
				<div className="input-group">
					<input
						// value={store.search}
						// onChange={(event) => actions.handleSearch(event.target.value)}
						value={value}
						onChange={onChange}
						type="text"
						className="form-control shadow-none border border-dark rounded-0"
						placeholder="Busca lo que quieras..."
					/>
					<span className="input-group-btn">
						<button
							className="btn btn-search"
							type="button"
							onClick={() => onSearch(value)}>
							<i className="fa fa-search fa-fw"></i>
						</button>
					</span>
					<div className="suggestions">
						{ }
					</div>
				</div>
			</div>
		</React.Fragment>
	);

};

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


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

		if (searchTerm.lenght > 0) {
			matchComputers = store.computadoras.filter((modelo) => {
				return computadoras.modelo.match
			});
		}


		console.log("search", searchTerm);
	}

	return (
		<React.Fragment>
			<div className="container">
				<div className="input-group">
					<input
						value={store.searchText}
						onChange={(event) => actions.setSearchResults(event.target.value)}
						style={{ minWidth: '150px' }}
						type="text"
						className="form-control shadow-none border border-dark rounded-0"
						placeholder="Busca lo que quieras..."
					/>
					<span className="input-group-btn">
						<button
							className="btn btn-search"
							type="button"
							onClick={() => actions.handleSearch()}>
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

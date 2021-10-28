import { useState } from "react";
import "./styles.css";

function InputSearch({ searchBook }) {
	const [contentSearch, setContentSeach] = useState("");

	const handleOnSubmit = (e) => {
		e.preventDefault();
		searchBook(contentSearch);
	};

	return (
		<div className="input-search">
			<form onSubmit={handleOnSubmit} className="input-search__form">
				<input
					autoFocus
					type="text"
					value={contentSearch}
					onChange={(e) => setContentSeach(e.target.value)}
					className="input-search__input"
				/>
				<button type="submit" className="input-search__button">
					Search
				</button>
			</form>
		</div>
	);
}

export default InputSearch;

import { useState } from "react";
import "./styles.css";

function InputSearch({ searchBook }) {
	const [contentSearch, setContentSeach] = useState("");

	const handleOnSubmit = (e) => {
		e.preventDefault();
		searchBook(contentSearch);
	};

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<label>Search: </label>
				<input
					autoFocus
					type="text"
					value={contentSearch}
					onChange={(e) => setContentSeach(e.target.value)}
				/>
				<button type="submit">search</button>
			</form>
		</div>
	);
}

export default InputSearch;

import { useState } from "react";
import InputSearch from "../../components/InputSearch";
import { searchBook } from "../../services/books";
import ListBooks from "../../components/ListBooks";
import { useBooks } from "../../hooks/useBooks";

function Search() {
	const { books, setBooks, changeShelfBook } = useBooks();
	const [error, setError] = useState(null);

	const searchBookByInput = async (data) => {
		const response = await searchBook(data);
		if (response.error) {
			setError(response.error);
			setBooks(() => []);
			return;
		}
		setBooks(() => response);
	};

	return (
		<div>
			<h1>SEARCH</h1>
			<InputSearch searchBook={searchBookByInput} />
			{error ? <p>No hay resultados</p> : <ListBooks books={books} changeShelfBook={changeShelfBook} />}
		</div>
	);
}

export default Search;

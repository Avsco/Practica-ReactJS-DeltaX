import { useState } from "react";
import { updateBook } from "../services/books";

export function useBooks() {
	const [books, setBooks] = useState([]);

	const changeShelfBook = ({ value, title }) => {
		setBooks((lb) =>
			lb.map((b) => {
				if (title == b.title) {
					b.shelf = value;
					updateBook(b.id, value);
				}
				return b;
			})
		);
	};

	return { changeShelfBook, setBooks, books };
}
